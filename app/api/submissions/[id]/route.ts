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
      user: process.env.GMAIL_USER || 'contactwesternbeats@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || 'hzdceckogjbaitzu',
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
    if (!adminPassword || adminPassword !== (process.env.ADMIN_PASSWORD || 'wb-admin-2026')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { status, statusNote, agreementStatus } = await req.json()

    const update: Record<string, unknown> = { status, statusNote: statusNote || '', updatedAt: new Date() }
    if (agreementStatus) update.agreementStatus = agreementStatus

    await connectDB()
    const sub = await Submission.findByIdAndUpdate(id, update, { new: true })
    if (!sub) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    // Send status update email to artist
    const transporter = mailer()
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
                <a href="https://www.westernbeats.com/sign-in?next=%2Fmy-submissions" style="display:inline-block;background:#0A64C3;color:#fff;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;">View Full Status →</a>
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

    return NextResponse.json({ success: true, submission: sub })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('patch error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
