import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { OTP } from '@/lib/models/OTP'
import { User } from '@/lib/models/User'
import nodemailer from 'nodemailer'

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Simple in-memory rate limiter: max 3 OTP requests per email per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(email: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(email)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(email, { count: 1, resetAt: now + 10 * 60 * 1000 })
    return true
  }
  if (entry.count >= 3) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  try {
    const { email, mode } = await req.json()

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    const normalEmail = email.toLowerCase().trim().slice(0, 254)

    if (!checkRateLimit(normalEmail)) {
      return NextResponse.json({ error: 'Too many OTP requests. Please wait 10 minutes before trying again.' }, { status: 429 })
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_APP_PASSWORD
    if (!gmailUser || !gmailPass) {
      console.error('send-otp: GMAIL_USER / GMAIL_APP_PASSWORD not configured')
      return NextResponse.json({ error: 'Email service is not configured. Please try again later.' }, { status: 500 })
    }

    await connectDB()

    if (mode === 'signin') {
      const user = await User.findOne({ email: normalEmail })
      if (!user) {
        return NextResponse.json({ error: 'No account found with this email. Please sign up first.' }, { status: 404 })
      }
    }

    await OTP.deleteMany({ email: normalEmail })

    const code = generateOTP()
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

    await OTP.create({ email: normalEmail, code, expiresAt })

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: gmailUser, pass: gmailPass },
    })

    await transporter.sendMail({
      from: `"Western Beats" <${gmailUser}>`,
      to: email,
      subject: `${code} — Your Western Beats OTP`,
      html: `
        <!DOCTYPE html>
        <html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background:#040A14;font-family:'Inter',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#040A14;padding:40px 0;">
            <tr><td align="center">
              <table width="560" cellpadding="0" cellspacing="0" style="background:#060C18;border-radius:20px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;max-width:560px;width:100%;">
                <tr><td style="background:linear-gradient(135deg,#0A1535 0%,#060C18 100%);padding:32px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:20px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">WESTERN BEATS</div>
                  <div style="font-size:10px;color:#5CB2DC;letter-spacing:2px;text-transform:uppercase;margin-top:2px;">Official Warner Music India Partner</div>
                </td></tr>
                <tr><td style="padding:40px;">
                  <p style="margin:0 0 8px;font-size:14px;color:#8899AA;text-transform:uppercase;letter-spacing:2px;font-weight:600;">Your OTP Code</p>
                  <h1 style="margin:0 0 24px;font-size:32px;color:#ffffff;font-weight:900;letter-spacing:-1px;">Verify Your Email</h1>
                  <p style="margin:0 0 32px;font-size:16px;color:#8899AA;line-height:1.7;">
                    Use the code below to ${mode === 'signin' ? 'sign in to' : 'create'} your Western Beats account. This code expires in <strong style="color:#ffffff;">10 minutes</strong>.
                  </p>
                  <div style="background:#0A1535;border:1px solid rgba(10,100,195,0.4);border-radius:16px;padding:28px;text-align:center;margin-bottom:32px;">
                    <div style="font-size:48px;font-weight:900;letter-spacing:12px;color:#0A64C3;font-family:monospace;">${code}</div>
                  </div>
                  <p style="margin:0 0 16px;font-size:14px;color:#8899AA;line-height:1.7;">
                    If you didn't request this code, you can safely ignore this email.
                  </p>
                  <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;margin-top:24px;">
                    <p style="margin:0;font-size:12px;color:#4A5568;">© 2026 Western Beats Private Limited · India's most credible music distributor</p>
                  </div>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </body></html>
      `,
    })

    return NextResponse.json({ success: true, message: 'OTP sent to your email' })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('send-otp error:', msg)
    return NextResponse.json({ error: 'Failed to send OTP. Please try again.' }, { status: 500 })
  }
}
