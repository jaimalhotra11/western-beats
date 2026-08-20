import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Submission } from '@/lib/models/Submission'
import nodemailer from 'nodemailer'


function esc(str: unknown): string {
  return String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function mailer() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER || 'contactwesternbeats@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const adminPassword = req.headers.get('x-admin-password')
    const correctPassword = process.env.ADMIN_PASSWORD || 'wb-admin-2026'
    if (!adminPassword || adminPassword !== correctPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const sub = await Submission.findByIdAndUpdate(
      id,
      { agreementStatus: 'Sent', agreementSentAt: new Date(), updatedAt: new Date() },
      { new: true }
    )
    if (!sub) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const transporter = mailer()
    await transporter.sendMail({
      from: `"Western Beats" <contactwesternbeats@gmail.com>`,
      to: sub.email,
      cc: 'legal@westernbeats.com',
      subject: `📄 Your Content Licensing Agreement — ${esc(sub.trackName)} | Western Beats`,
      html: `
        <!DOCTYPE html><html><body style="margin:0;padding:0;background:#040A14;font-family:Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#040A14;padding:32px 0;">
          <tr><td align="center">
            <table width="560" cellpadding="0" cellspacing="0" style="background:#060C18;border-radius:20px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;max-width:560px;width:100%;">

              <!-- Header -->
              <tr><td style="background:linear-gradient(135deg,#0A1535,#060C18);padding:24px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
                <table cellpadding="0" cellspacing="0"><tr>
                  <td><img src="https://www.westernbeats.com/partners/westernbeats-BpLvGE3e.png" width="40" height="40" alt="Western Beats" style="border-radius:8px;display:block;" /></td>
                  <td style="padding-left:12px;">
                    <div style="font-size:16px;font-weight:900;color:#fff;letter-spacing:0.04em;">WESTERN BEATS</div>
                    <div style="font-size:10px;color:#5CB2DC;letter-spacing:2px;margin-top:2px;">CONTENT LICENSING AGREEMENT</div>
                  </td>
                </tr></table>
              </td></tr>

              <!-- Body -->
              <tr><td style="padding:36px 40px;">
                <p style="color:#5CB2DC;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">Agreement Ready</p>
                <h1 style="color:#fff;font-size:24px;font-weight:900;margin:0 0 16px;line-height:1.3;">Hi ${esc(sub.artistName)},<br/>your agreement is ready to sign.</h1>

                <p style="color:#B0BEC5;font-size:15px;line-height:1.7;margin:0 0 24px;">
                  We have prepared your <strong style="color:#fff;">Content Licensing Agreement</strong> for the following submission:
                </p>

                <!-- Track card -->
                <div style="background:#0A1535;border-radius:12px;padding:20px 24px;margin-bottom:28px;border:1px solid rgba(10,100,195,0.2);">
                  <p style="color:#8899AA;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin:0 0 8px;">Track Submitted</p>
                  <p style="color:#fff;font-size:18px;font-weight:800;margin:0 0 4px;">${esc(sub.trackName)}</p>
                  <p style="color:#8899AA;font-size:13px;margin:0;">by ${esc(sub.artistName)}</p>
                </div>

                <!-- Instructions -->
                <p style="color:#B0BEC5;font-size:14px;line-height:1.7;margin:0 0 8px;"><strong style="color:#fff;">What you need to do:</strong></p>
                <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                  ${['Read the agreement carefully — it covers your 80% revenue share, IP ownership, distribution term, and your rights.', 'Sign the agreement digitally or as instructed in the document.', 'Return the signed copy to <a href="mailto:legal@westernbeats.com" style="color:#5CB2DC;">legal@westernbeats.com</a>'].map((step, i) => `
                    <tr>
                      <td style="padding:6px 12px 6px 0;vertical-align:top;">
                        <div style="width:22px;height:22px;border-radius:50%;background:#0A64C3;color:#fff;font-size:11px;font-weight:900;text-align:center;line-height:22px;">${i + 1}</div>
                      </td>
                      <td style="padding:6px 0;color:#B0BEC5;font-size:14px;line-height:1.6;">${step}</td>
                    </tr>
                  `).join('')}
                </table>

                <!-- Key terms reminder -->
                <div style="background:rgba(52,211,153,0.06);border:1px solid rgba(52,211,153,0.2);border-left:4px solid #34D399;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:28px;">
                  <p style="color:#34D399;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin:0 0 8px;">Key Terms Summary</p>
                  <p style="color:#E2E8F0;font-size:13px;line-height:1.7;margin:0;">
                    ✅ <strong>80%</strong> of net royalties go directly to you<br/>
                    ✅ <strong>100%</strong> IP and copyright stays yours forever<br/>
                    ✅ Distribution to <strong>150+ platforms</strong> worldwide<br/>
                    ✅ <strong>₹0</strong> upfront — no hidden fees
                  </p>
                </div>

                <p style="color:#B0BEC5;font-size:14px;line-height:1.7;margin:0 0 28px;">
                  If you have any questions about the agreement, reply to this email or contact us at
                  <a href="mailto:legal@westernbeats.com" style="color:#5CB2DC;">legal@westernbeats.com</a>.
                  We are happy to walk you through any clause.
                </p>

                <a href="https://www.westernbeats.com/dashboard" style="display:inline-block;background:#0A64C3;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;">View My Submission →</a>

                <!-- Footer -->
                <div style="margin-top:32px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.06);">
                  <p style="color:#4A5568;font-size:12px;margin:0 0 4px;">© 2026 Western Beats Private Limited</p>
                  <p style="color:#4A5568;font-size:12px;margin:0;">Sector-4A, H.No.357P, Dharuhera, Rewari, Haryana 123106 · PAN: AACCW9613Q</p>
                </div>
              </td></tr>
            </table>
          </td></tr>
        </table>
        </body></html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('send-agreement error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
