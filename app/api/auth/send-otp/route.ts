import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { OTP } from '@/lib/models/OTP'
import { User } from '@/lib/models/User'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(req: NextRequest) {
  try {
    const { email, mode } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    await connectDB()

    // For sign-in: check user exists
    if (mode === 'signin') {
      const user = await User.findOne({ email: email.toLowerCase() })
      if (!user) {
        return NextResponse.json({ error: 'No account found with this email. Please sign up first.' }, { status: 404 })
      }
    }

    // Delete any existing OTP for this email
    await OTP.deleteMany({ email: email.toLowerCase() })

    const code = generateOTP()
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

    await OTP.create({ email: email.toLowerCase(), code, expiresAt })

    // Send OTP email
    await resend.emails.send({
      from: 'Western Beats <onboarding@resend.dev>',
      to: email,
      subject: `${code} — Your Western Beats OTP`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body style="margin:0;padding:0;background:#040A14;font-family:'Inter',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#040A14;padding:40px 0;">
            <tr><td align="center">
              <table width="560" cellpadding="0" cellspacing="0" style="background:#060C18;border-radius:20px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;max-width:560px;width:100%;">
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#0A1535 0%,#060C18 100%);padding:32px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <div style="font-size:20px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">WESTERN BEATS</div>
                          <div style="font-size:10px;color:#5CB2DC;letter-spacing:2px;text-transform:uppercase;margin-top:2px;">Official Warner Music India Partner</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Body -->
                <tr>
                  <td style="padding:40px;">
                    <p style="margin:0 0 8px;font-size:14px;color:#8899AA;text-transform:uppercase;letter-spacing:2px;font-weight:600;">Your OTP Code</p>
                    <h1 style="margin:0 0 24px;font-size:32px;color:#ffffff;font-weight:900;letter-spacing:-1px;">Verify Your Email</h1>
                    <p style="margin:0 0 32px;font-size:16px;color:#8899AA;line-height:1.7;">
                      Use the code below to ${mode === 'signin' ? 'sign in to' : 'create'} your Western Beats account. This code expires in <strong style="color:#ffffff;">10 minutes</strong>.
                    </p>
                    <!-- OTP Box -->
                    <div style="background:#0A1535;border:1px solid rgba(10,100,195,0.4);border-radius:16px;padding:28px;text-align:center;margin-bottom:32px;">
                      <div style="font-size:48px;font-weight:900;letter-spacing:12px;color:#0A64C3;font-family:monospace;">${code}</div>
                    </div>
                    <p style="margin:0 0 16px;font-size:14px;color:#8899AA;line-height:1.7;">
                      If you didn't request this code, you can safely ignore this email. Someone may have entered your email by mistake.
                    </p>
                    <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;margin-top:24px;">
                      <p style="margin:0;font-size:12px;color:#4A5568;">
                        © 2026 Western Beats Private Limited · India's most credible music distributor
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true, message: 'OTP sent to your email' })
  } catch (err) {
    console.error('send-otp error:', err)
    return NextResponse.json({ error: 'Failed to send OTP. Please try again.' }, { status: 500 })
  }
}
