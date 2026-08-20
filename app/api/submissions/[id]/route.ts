import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Submission } from '@/lib/models/Submission'
import { getSession } from '@/lib/session'
import nodemailer from 'nodemailer'


function esc(str: unknown): string {
  return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}

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

const STATUS_EMOJI: Record<string, string> = {
  'Submitted': '🟡',
  'Under Review': '🔵',
  'Approved': '🟢',
  'Distributing': '🚀',
  'Live': '✅',
  'Rejected': '❌',
}

// GET single submission by ID — only the owning artist can fetch it
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession()
    if (!session.isLoggedIn || !session.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }
    await connectDB()
    const { id } = await params
    const sub = await Submission.findById(id).lean()
    if (!sub) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    if (sub.email !== session.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }
    return NextResponse.json({ submission: sub })
  } catch (err: unknown) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// PATCH update submission status (admin only)
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const adminPassword = req.headers.get('x-admin-password')
    const correctPassword = process.env.ADMIN_PASSWORD || 'wb-admin-2026'
    if (!adminPassword || adminPassword !== correctPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { status, statusNote, agreementStatus } = await req.json()

    const update: Record<string, unknown> = { status, statusNote: statusNote || '', updatedAt: new Date() }
    if (agreementStatus) update.agreementStatus = agreementStatus

    await connectDB()
    // Fetch old doc before update so we can detect what actually changed
    const oldSub = await Submission.findById(id).lean()
    if (!oldSub) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const sub = await Submission.findByIdAndUpdate(id, update, { new: true })
    if (!sub) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const agreementChanged = agreementStatus && agreementStatus !== (oldSub.agreementStatus || 'Not Sent')
    const statusChanged = status && status !== oldSub.status

    const transporter = mailer()

    // Agreement status changed → send agreement email (for In Process, Sent, Signed — not for Not Sent)
    if (agreementChanged && agreementStatus !== 'Not Sent') {
      const AGREEMENT_META: Record<string, { badge: string; badgeColor: string; heading: string; body: string }> = {
        'In Process': {
          badge: 'Agreement In Process',
          badgeColor: '#5CB2DC',
          heading: `Hi ${esc(sub.artistName)},<br/>your agreement is being<br/>prepared.`,
          body: `Our team is currently drafting your Content Licensing Agreement for <strong style="color:#fff;">${esc(sub.trackName)}</strong>. We will send you the full agreement to review and sign very soon. No action needed from you right now.`,
        },
        'Sent': {
          badge: 'Agreement Sent — Action Required',
          badgeColor: '#F59E0B',
          heading: `Hi ${esc(sub.artistName)},<br/>your agreement is ready.<br/>Please read and sign.`,
          body: `We have sent you the Content Licensing Agreement for <strong style="color:#fff;">${esc(sub.trackName)}</strong>. Please read it carefully, sign as instructed, and return the signed copy to <a href="mailto:legal@westernbeats.com" style="color:#5CB2DC;">legal@westernbeats.com</a>.`,
        },
        'Signed': {
          badge: 'Agreement Signed',
          badgeColor: '#34D399',
          heading: `Hi ${esc(sub.artistName)},<br/>your agreement is signed.<br/>You're all set! 🎉`,
          body: `We have received your signed Content Licensing Agreement for <strong style="color:#fff;">${esc(sub.trackName)}</strong>. Everything is confirmed. Your music will now move forward in the distribution process. Thank you for being part of Western Beats!`,
        },
      }
      const meta = AGREEMENT_META[agreementStatus] ?? AGREEMENT_META['In Process']
      await transporter.sendMail({
        from: `"Western Beats" <contactwesternbeats@gmail.com>`,
        to: sub.email,
        cc: 'legal@westernbeats.com',
        subject: `📄 Agreement Update: ${agreementStatus} — ${esc(sub.trackName)} | Western Beats`,
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
                      <div style="font-size:10px;color:#5CB2DC;letter-spacing:2px;margin-top:2px;">CONTENT LICENSING AGREEMENT</div>
                    </td>
                  </tr></table>
                </td></tr>
                <tr><td style="padding:36px 40px;">
                  <p style="color:${meta.badgeColor};font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">${meta.badge}</p>
                  <h1 style="color:#fff;font-size:24px;font-weight:900;margin:0 0 20px;line-height:1.3;">${meta.heading}</h1>
                  <div style="background:#0A1535;border-radius:12px;padding:20px 24px;margin-bottom:24px;border:1px solid rgba(10,100,195,0.2);">
                    <p style="color:#8899AA;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin:0 0 8px;">Track</p>
                    <p style="color:#fff;font-size:18px;font-weight:800;margin:0 0 4px;">${esc(sub.trackName)}</p>
                    <p style="color:#8899AA;font-size:13px;margin:0;">by ${esc(sub.artistName)}</p>
                  </div>
                  <p style="color:#B0BEC5;font-size:14px;line-height:1.7;margin:0 0 24px;">${meta.body}</p>
                  <div style="background:rgba(52,211,153,0.06);border:1px solid rgba(52,211,153,0.2);border-left:4px solid #34D399;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:28px;">
                    <p style="color:#34D399;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin:0 0 8px;">Key Terms</p>
                    <p style="color:#E2E8F0;font-size:13px;line-height:1.7;margin:0;">✅ <strong>80%</strong> of net royalties go directly to you<br/>✅ <strong>100%</strong> IP and copyright stays yours forever<br/>✅ Distribution to <strong>150+ platforms</strong> worldwide<br/>✅ <strong>₹0</strong> upfront — no hidden fees</p>
                  </div>
                  <p style="color:#B0BEC5;font-size:14px;line-height:1.7;margin:0 0 28px;">Questions? Contact <a href="mailto:legal@westernbeats.com" style="color:#5CB2DC;">legal@westernbeats.com</a></p>
                  <div style="margin-top:32px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.06);">
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
    } else if (statusChanged) {
    // Submission status changed → send status update email only
    await transporter.sendMail({
      from: `"Western Beats" <contactwesternbeats@gmail.com>`,
      to: sub.email,
      subject: `${STATUS_EMOJI[status] || '📢'} Your submission status updated — ${sub.trackName}`,
      html: `
        <!DOCTYPE html><html><body style="margin:0;padding:0;background:#040A14;font-family:Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#040A14;padding:32px 0;">
          <tr><td align="center">
            <table width="560" cellpadding="0" cellspacing="0" style="background:#060C18;border-radius:20px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;max-width:560px;width:100%;">
              <tr><td style="background:linear-gradient(135deg,#0A1535,#060C18);padding:24px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
                <div style="display:flex;align-items:center;gap:12px;">
                  <img src="https://www.westernbeats.com/partners/westernbeats-BpLvGE3e.png" width="40" height="40" alt="Western Beats" style="border-radius:8px;display:block;" />
                  <div>
                    <div style="font-size:16px;font-weight:900;color:#fff;letter-spacing:0.04em;">WESTERN BEATS</div>
                    <div style="font-size:10px;color:#5CB2DC;letter-spacing:2px;margin-top:2px;">SUBMISSION STATUS UPDATE</div>
                  </div>
                </div>
              </td></tr>
              <tr><td style="padding:36px 40px;">
                <p style="color:#5CB2DC;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">Status Update</p>
                <h1 style="color:#fff;font-size:26px;font-weight:900;margin:0 0 20px;">Hi ${esc(sub.artistName)},<br/>your track status changed!</h1>
                <div style="background:#0A1535;border-radius:12px;padding:24px;margin-bottom:24px;text-align:center;">
                  <p style="color:#8899AA;font-size:12px;margin:0 0 8px;">Track</p>
                  <p style="color:#fff;font-size:18px;font-weight:800;margin:0 0 20px;">${esc(sub.trackName)}</p>
                  <p style="color:#8899AA;font-size:12px;margin:0 0 8px;">New Status</p>
                  <p style="color:#fff;font-size:26px;font-weight:900;margin:0;">${STATUS_EMOJI[status] || ''} ${esc(status)}</p>
                </div>
                ${statusNote ? `<div style="background:rgba(10,100,195,0.1);border:1px solid rgba(10,100,195,0.3);border-radius:10px;padding:16px 20px;margin-bottom:24px;"><p style="color:#8899AA;font-size:12px;margin:0 0 6px;">Message from our team:</p><p style="color:#E2E8F0;font-size:14px;margin:0;">${esc(statusNote)}</p></div>` : ''}
                <a href="https://www.westernbeats.com/dashboard" style="display:inline-block;background:#0A64C3;color:#fff;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;">View Full Status →</a>
                <div style="margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.06);">
                  <p style="color:#4A5568;font-size:12px;margin:0;">© 2026 Western Beats Private Limited</p>
                </div>
              </td></tr>
            </table>
          </td></tr>
        </table>
        </body></html>
      `,
    })
    }

    return NextResponse.json({ success: true, submission: sub })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('patch error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
