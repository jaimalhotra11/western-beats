import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { OTP } from '@/lib/models/OTP'
import { User } from '@/lib/models/User'
import { getSession } from '@/lib/session'
import nodemailer from 'nodemailer'

function mailer() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com', port: 465, secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

// Brute-force guard: max 5 verify attempts per email per 15 minutes
const attemptMap = new Map<string, { count: number; resetAt: number }>()

function checkAttempts(email: string): boolean {
  const now = Date.now()
  const entry = attemptMap.get(email)
  if (!entry || now > entry.resetAt) {
    attemptMap.set(email, { count: 1, resetAt: now + 15 * 60 * 1000 })
    return true
  }
  if (entry.count >= 5) return false
  entry.count++
  return true
}

function clearAttempts(email: string) {
  attemptMap.delete(email)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, code, mode, name, phone, artistName } = body

    if (!email || typeof email !== 'string' || !code || typeof code !== 'string') {
      return NextResponse.json({ error: 'Email and OTP code are required' }, { status: 400 })
    }

    const normalEmail = email.toLowerCase().trim().slice(0, 254)
    const cleanCode = code.trim().slice(0, 6)

    if (!checkAttempts(normalEmail)) {
      return NextResponse.json({ error: 'Too many incorrect attempts. Please request a new OTP.' }, { status: 429 })
    }

    await connectDB()

    const otpRecord = await OTP.findOne({ email: normalEmail })

    if (!otpRecord) {
      return NextResponse.json({ error: 'OTP expired or not found. Please request a new one.' }, { status: 400 })
    }

    if (new Date() > otpRecord.expiresAt) {
      await OTP.deleteOne({ _id: otpRecord._id })
      return NextResponse.json({ error: 'OTP has expired. Please request a new one.' }, { status: 400 })
    }

    if (otpRecord.code !== cleanCode) {
      return NextResponse.json({ error: 'Incorrect OTP. Please try again.' }, { status: 400 })
    }

    // OTP valid
    clearAttempts(normalEmail)
    await OTP.deleteOne({ _id: otpRecord._id })

    let user = await User.findOne({ email: normalEmail })

    if (mode === 'signup') {
      if (user) {
        return NextResponse.json({ error: 'An account with this email already exists. Please sign in.' }, { status: 409 })
      }
      if (!name || !phone || !artistName) {
        return NextResponse.json({ error: 'Name, phone, and artist name are required for signup.' }, { status: 400 })
      }
      user = await User.create({
        name: String(name).slice(0, 100),
        email: normalEmail,
        phone: String(phone).slice(0, 20),
        artistName: String(artistName).slice(0, 100),
        genre: '',
      })

      // Notify admin of new signup (non-blocking)
      try {
        const gmailUser = process.env.GMAIL_USER
        const gmailPass = process.env.GMAIL_APP_PASSWORD
        if (gmailUser && gmailPass) {
          await mailer().sendMail({
            from: `"Western Beats" <${gmailUser}>`,
            to: gmailUser,
            subject: `🎤 New Artist Signup: ${artistName}`,
            html: `
              <div style="background:#040A14;padding:32px;font-family:Arial,sans-serif;border-radius:12px;">
                <h2 style="color:#fff;margin:0 0 20px;">🎤 New Artist Signed Up</h2>
                <table>
                  ${[['Name', name], ['Artist Name', artistName], ['Email', email], ['Phone', phone || '—']].map(([l, v]) =>
                    `<tr><td style="color:#8899AA;padding:6px 16px 6px 0;font-size:14px;">${l}</td><td style="color:#fff;font-size:14px;font-weight:600;">${v}</td></tr>`
                  ).join('')}
                </table>
                <p style="color:#4A5568;font-size:12px;margin:20px 0 0;">${new Date().toLocaleString('en-IN')}</p>
              </div>
            `,
          })
        }
      } catch { /* non-blocking */ }
    } else {
      if (!user) {
        return NextResponse.json({ error: 'No account found. Please sign up first.' }, { status: 404 })
      }
    }

    const session = await getSession()
    session.userId = user._id.toString()
    session.email = user.email
    session.name = user.name
    session.artistName = user.artistName
    session.isLoggedIn = true
    await session.save()

    return NextResponse.json({
      success: true,
      user: { name: user.name, email: user.email, artistName: user.artistName },
    })
  } catch (err) {
    console.error('verify-otp error:', err)
    return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 500 })
  }
}
