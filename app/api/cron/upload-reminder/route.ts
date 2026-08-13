import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { User } from '@/lib/models/User'
import { Submission } from '@/lib/models/Submission'
import nodemailer from 'nodemailer'

function mailer() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

function esc(str: unknown): string {
  return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()

    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    const recentUsers = await User.find({ createdAt: { $gte: thirtyDaysAgo } }).lean()

    if (recentUsers.length === 0) {
      return NextResponse.json({ sent: 0, message: 'No recent users' })
    }

    const submittedEmails = await Submission.distinct('email')
    const submittedSet = new Set(submittedEmails.map((e: string) => e.toLowerCase()))
    const pending = recentUsers.filter(u => !submittedSet.has(u.email.toLowerCase()))

    if (pending.length === 0) {
      return NextResponse.json({ sent: 0, message: 'All recent users have submitted' })
    }

    const transporter = mailer()
    let sent = 0
    const errors: string[] = []

    for (const user of pending) {
      try {
        await transporter.sendMail({
          from: `"Western Beats" <contactwesternbeats@gmail.com>`,
          to: user.email,
          subject: `🎵 ${esc(user.artistName)}, your music is waiting to be heard`,
          html: `
            <!DOCTYPE html><html><body style="margin:0;padding:0;background:#040A14;font-family:Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#040A14;padding:32px 0;">
              <tr><td align="center">
                <table width="560" cellpadding="0" cellspacing="0" style="background:#060C18;border-radius:20px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;max-width:560px;width:100%;">
                  <tr><td style="background:linear-gradient(135deg,#0A1535,#060C18);padding:24px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td><img src="https://www.westernbeats.com/partners/westernbeats-BpLvGE3e.png" width="40" height="40" alt="Western Beats" style="border-radius:8px;display:block;" /></td>
                      <td style="padding-left:12px;">
                        <div style="font-size:16px;font-weight:900;color:#fff;letter-spacing:0.04em;">WESTERN BEATS</div>
                        <div style="font-size:10px;color:#5CB2DC;letter-spacing:2px;margin-top:2px;">YOUR MUSIC DESERVES TO BE HEARD</div>
                      </td>
                    </tr></table>
                  </td></tr>
                  <tr><td style="padding:36px 40px;">
                    <p style="color:#5CB2DC;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">Reminder</p>
                    <h1 style="color:#fff;font-size:24px;font-weight:900;margin:0 0 16px;line-height:1.3;">
                      Hi ${esc(user.artistName)},<br/>your account is ready.<br/>Now upload your music. 🎵
                    </h1>
                    <p style="color:#B0BEC5;font-size:15px;line-height:1.7;margin:0 0 28px;">
                      You signed up on Western Beats but haven't uploaded your first track yet. Your music could be live on <strong style="color:#fff;">150+ platforms</strong> including Spotify, Apple Music, JioSaavn, and YouTube Music — all for free.
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                      <tr>
                        <td style="text-align:center;padding:16px;background:#0A1535;border-radius:12px 0 0 12px;border:1px solid rgba(255,255,255,0.06);">
                          <p style="color:#0A64C3;font-size:22px;font-weight:900;margin:0;">FREE</p>
                          <p style="color:#8899AA;font-size:11px;margin:4px 0 0;">To Upload</p>
                        </td>
                        <td width="4"></td>
                        <td style="text-align:center;padding:16px;background:#0A1535;border:1px solid rgba(255,255,255,0.06);">
                          <p style="color:#0A64C3;font-size:22px;font-weight:900;margin:0;">72hrs</p>
                          <p style="color:#8899AA;font-size:11px;margin:4px 0 0;">Go Live</p>
                        </td>
                        <td width="4"></td>
                        <td style="text-align:center;padding:16px;background:#0A1535;border-radius:0 12px 12px 0;border:1px solid rgba(255,255,255,0.06);">
                          <p style="color:#0A64C3;font-size:22px;font-weight:900;margin:0;">80%</p>
                          <p style="color:#8899AA;font-size:11px;margin:4px 0 0;">Royalties Yours</p>
                        </td>
                      </tr>
                    </table>
                    <p style="color:#B0BEC5;font-size:14px;line-height:1.7;margin:0 0 8px;"><strong style="color:#fff;">It only takes 2 minutes:</strong></p>
                    <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                      ${[
                        'Log in to your Western Beats account',
                        'Fill in your track details (artist name, release date, language)',
                        'Upload your WAV audio file and 3000×3000px cover artwork',
                        'Submit — our team reviews within 24 hours',
                      ].map((step, i) => `
                        <tr>
                          <td style="padding:5px 12px 5px 0;vertical-align:top;">
                            <div style="width:22px;height:22px;border-radius:50%;background:#0A64C3;color:#fff;font-size:11px;font-weight:900;text-align:center;line-height:22px;">${i + 1}</div>
                          </td>
                          <td style="padding:5px 0;color:#B0BEC5;font-size:14px;line-height:1.6;">${step}</td>
                        </tr>
                      `).join('')}
                    </table>
                    <a href="https://www.westernbeats.com/submit" style="display:inline-block;background:#0A64C3;color:#fff;padding:15px 36px;border-radius:12px;text-decoration:none;font-weight:700;font-size:15px;">Upload Your Music Now →</a>
                    <p style="color:#4A5568;font-size:13px;line-height:1.6;margin:28px 0 0;">
                      Questions? Reply to this email or reach us at <a href="mailto:contact@westernbeats.com" style="color:#5CB2DC;">contact@westernbeats.com</a>
                    </p>
                    <div style="margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.06);">
                      <p style="color:#4A5568;font-size:12px;margin:0 0 4px;">© 2026 Western Beats Private Limited</p>
                      <p style="color:#4A5568;font-size:12px;margin:0;">Sector-4A, H.No.357P, Dharuhera, Rewari, Haryana 123106</p>
                    </div>
                  </td></tr>
                </table>
              </td></tr>
            </table>
            </body></html>
          `,
        })
        sent++
      } catch (err) {
        errors.push(`${user.email}: ${err instanceof Error ? err.message : String(err)}`)
      }
    }

    return NextResponse.json({ sent, total: pending.length, errors: errors.length ? errors : undefined })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('upload-reminder cron error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
