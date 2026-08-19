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
      replyTo: gmailUser,
      to: email,
      subject: `Your Western Beats verification code: ${code}`,
      text: `Your Western Beats verification code is: ${code}\n\nThis code expires in 10 minutes.\n\nIf you did not request this, please ignore this email.\n\n-- Western Beats Private Limited\ncontactwesternbeats@gmail.com\nwww.westernbeats.com`,
      html: `
        <!DOCTYPE html>
        <html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Your Western Beats verification code</title>
        </head>
        <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
            <tr><td align="center">
              <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:560px;width:100%;border:1px solid #e0e0e0;">
                <tr><td style="background:#040A14;padding:24px 32px;">
                  <div style="font-size:18px;font-weight:900;color:#ffffff;letter-spacing:0.04em;">WESTERN BEATS</div>
                  <div style="font-size:11px;color:#5CB2DC;letter-spacing:1px;margin-top:4px;">Official Warner Music India Partner</div>
                </td></tr>
                <tr><td style="padding:36px 32px;">
                  <p style="margin:0 0 8px;font-size:13px;color:#666;font-weight:600;">EMAIL VERIFICATION</p>
                  <h1 style="margin:0 0 16px;font-size:24px;color:#111;font-weight:700;">Your verification code</h1>
                  <p style="margin:0 0 28px;font-size:15px;color:#444;line-height:1.6;">
                    Use the code below to ${mode === 'signin' ? 'sign in to' : 'create'} your Western Beats account. It expires in <strong>10 minutes</strong>.
                  </p>
                  <div style="background:#f8f9fa;border:2px dashed #0A64C3;border-radius:8px;padding:24px;text-align:center;margin-bottom:28px;">
                    <div style="font-size:42px;font-weight:900;letter-spacing:10px;color:#0A64C3;font-family:Courier,monospace;">${code}</div>
                  </div>
                  <p style="margin:0 0 8px;font-size:13px;color:#888;line-height:1.6;">
                    If you did not request this code, you can safely ignore this email. Someone may have entered your email by mistake.
                  </p>
                  <p style="margin:0 0 8px;font-size:13px;color:#888;">Do not share this code with anyone.</p>
                  <div style="border-top:1px solid #eee;padding-top:20px;margin-top:24px;">
                    <p style="margin:0;font-size:12px;color:#aaa;">Western Beats Private Limited · Dharuhera, Haryana, India</p>
                    <p style="margin:4px 0 0;font-size:12px;color:#aaa;">contactwesternbeats@gmail.com · www.westernbeats.com</p>
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
