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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Try session first; fall back to email in request body (user must be logged in to reach /submit)
    const session = await getSession()
    const emailFromSession = session.isLoggedIn ? session.email : null
    const submitterEmail = (emailFromSession || body.email || '').toLowerCase().trim()
    if (!submitterEmail) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    await connectDB()

    const sub = await Submission.create({
      ...body,
      email: submitterEmail,
      status: 'Submitted',
      submittedAt: new Date(),
      updatedAt: new Date(),
    })

    const transporter = mailer()

    // ── Email to admin ──────────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Western Beats" <contactwesternbeats@gmail.com>`,
      to: 'contactwesternbeats@gmail.com',
      subject: `🎵 New Submission: ${body.trackName} by ${body.artistName}`,
      html: `
        <!DOCTYPE html><html><body style="margin:0;padding:0;background:#040A14;font-family:Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#040A14;padding:32px 0;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#060C18;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;max-width:600px;width:100%;">
              <tr><td style="background:linear-gradient(135deg,#0A1535,#060C18);padding:24px 32px;border-bottom:1px solid rgba(255,255,255,0.06);">
                <div style="display:flex;align-items:center;gap:12px;">
                  <img src="https://www.westernbeats.com/partners/westernbeats-BpLvGE3e.png" width="40" height="40" alt="Western Beats" style="border-radius:8px;display:block;" />
                  <div>
                    <div style="font-size:16px;font-weight:900;color:#fff;letter-spacing:0.04em;">WESTERN BEATS</div>
                    <div style="font-size:10px;color:#5CB2DC;letter-spacing:2px;margin-top:2px;">NEW MUSIC SUBMISSION</div>
                  </div>
                </div>
              </td></tr>
              <tr><td style="padding:32px;">
                <h2 style="color:#fff;margin:0 0 24px;font-size:22px;">🎵 ${esc(body.trackName)}</h2>
                <table width="100%" cellpadding="0" cellspacing="0">
                  ${[
                    ['Artist Name', esc(body.artistName)],
                    ['Track Name', esc(body.trackName)],
                    ['Album Name', esc(body.albumName) || '—'],
                    ['Email', esc(session.email)],
                    ['Phone', esc(body.phone) || '—'],
                    ['Genre', `${esc(body.genre)}${body.subGenre ? ' / ' + esc(body.subGenre) : ''}`],
                    ['Language', esc(body.language)],
                    ['Release Date', esc(body.releaseDate)],
                    ['Singer', esc(body.singer) || '—'],
                    ['Lyric Writer', esc(body.lyricWriter) || '—'],
                    ['Music Director', esc(body.musicDirector) || '—'],
                    ['Music Arranger', esc(body.musicArranger) || '—'],
                    ['Producer', esc(body.producer) || '—'],
                    ['Label', esc(body.labelName) || '—'],
                    ['Moods', esc(body.moods) || '—'],
                    ['Legal Name', esc(body.legalName) || '—'],
                    ['Client Type', esc(body.clientType) || '—'],
                    ['YouTube Content ID', esc(body.youtubeContentId) || '—'],
                    ['YouTube', esc(body.youtubeLink) || '—'],
                    ['Instagram', esc(body.instagramLink) || '—'],
                    ['Spotify Profile', esc(body.spotifyLink) || '—'],
                  ].map(([label, value]) => `
                    <tr>
                      <td style="padding:8px 0;color:#8899AA;font-size:13px;width:40%;vertical-align:top;">${label}</td>
                      <td style="padding:8px 0;color:#E2E8F0;font-size:13px;font-weight:600;">${value}</td>
                    </tr>
                  `).join('')}
                </table>

                ${body.audioUrl ? `
                <div style="margin:24px 0;padding:16px;background:#0A1535;border-radius:10px;border:1px solid rgba(10,100,195,0.3);">
                  <p style="color:#5CB2DC;font-size:12px;font-weight:700;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">🎧 Audio File</p>
                  <a href="${esc(body.audioUrl)}" style="color:#fff;font-size:14px;word-break:break-all;">${esc(body.audioUrl)}</a>
                </div>` : ''}

                ${body.artworkUrl ? `
                <div style="margin:16px 0 24px;padding:16px;background:#0A1535;border-radius:10px;border:1px solid rgba(10,100,195,0.3);">
                  <p style="color:#5CB2DC;font-size:12px;font-weight:700;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">🖼️ Artwork</p>
                  <a href="${esc(body.artworkUrl)}" style="color:#fff;font-size:14px;word-break:break-all;">${esc(body.artworkUrl)}</a>
                  <br/><img src="${esc(body.artworkUrl)}" width="120" height="120" style="margin-top:10px;border-radius:8px;object-fit:cover;" />
                </div>` : ''}

                ${body.songLyrics ? `<div style="margin:16px 0;padding:16px;background:#0A1535;border-radius:10px;"><p style="color:#8899AA;font-size:12px;margin:0 0 8px;">Lyrics</p><p style="color:#E2E8F0;font-size:13px;white-space:pre-wrap;">${esc(body.songLyrics)}</p></div>` : ''}
                ${body.message ? `<div style="margin:16px 0;padding:16px;background:#0A1535;border-radius:10px;"><p style="color:#8899AA;font-size:12px;margin:0 0 8px;">Message</p><p style="color:#E2E8F0;font-size:13px;">${esc(body.message)}</p></div>` : ''}

                <div style="margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.06);">
                  <a href="https://www.westernbeats.com/admin" style="display:inline-block;background:#0A64C3;color:#fff;padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;">Open Admin Panel →</a>
                </div>

                <p style="color:#4A5568;font-size:11px;margin:20px 0 0;">Submission ID: ${sub._id} · ${new Date().toLocaleString('en-IN')}</p>
              </td></tr>
            </table>
          </td></tr>
        </table>
        </body></html>
      `,
    })

    // ── Confirmation email to artist ────────────────────────────────────────
    await transporter.sendMail({
      from: `"Western Beats" <contactwesternbeats@gmail.com>`,
      to: session.email,
      subject: `✅ We received your submission — ${esc(body.trackName)}`,
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
                    <div style="font-size:10px;color:#5CB2DC;letter-spacing:2px;margin-top:2px;">OFFICIAL WARNER MUSIC INDIA PARTNER</div>
                  </div>
                </div>
              </td></tr>
              <tr><td style="padding:36px 40px;">
                <p style="color:#34D399;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">Submission Received</p>
                <h1 style="color:#fff;font-size:28px;font-weight:900;margin:0 0 20px;line-height:1.2;">Hi ${esc(body.artistName)},<br/>we've got your track! 🎵</h1>
                <p style="color:#8899AA;font-size:15px;line-height:1.7;margin:0 0 28px;">
                  <strong style="color:#fff;">${esc(body.trackName)}</strong> has been received by our team. We'll review it within 24 hours and update your status.
                </p>
                <div style="background:#0A1535;border-radius:12px;padding:20px 24px;margin-bottom:28px;">
                  ${[
                    ['Track', esc(body.trackName)],
                    ['Genre', esc(body.genre)],
                    ['Language', esc(body.language)],
                    ['Release Date', esc(body.releaseDate)],
                    ['Current Status', '🟡 Submitted'],
                  ].map(([l, v]) => `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:#8899AA;font-size:13px;">${l}</span><span style="color:#E2E8F0;font-size:13px;font-weight:600;">${v}</span></div>`).join('')}
                </div>
                <div style="background:rgba(10,100,195,0.12);border:1px solid rgba(10,100,195,0.3);border-radius:14px;padding:24px 28px;margin-bottom:28px;">
                  <p style="color:#5CB2DC;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px;">Track Your Progress</p>
                  <p style="color:#E2E8F0;font-size:15px;font-weight:700;margin:0 0 6px;">Check your submission status live</p>
                  <p style="color:#8899AA;font-size:13px;line-height:1.7;margin:0 0 18px;">Log in to your Western Beats account to see real-time updates — Submitted → Under Review → Approved → Distributing → Live. We'll also email you every time your status changes.</p>
                  <a href="https://www.westernbeats.com/dashboard" style="display:inline-block;background:#0A64C3;color:#fff;padding:13px 26px;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;margin-right:10px;">View My Submissions →</a>
                </div>
                <p style="color:#8899AA;font-size:13px;line-height:1.7;margin:0 0 6px;">
                  Not signed up yet? <a href="https://www.westernbeats.com/sign-up" style="color:#5CB2DC;font-weight:700;text-decoration:none;">Create your free account →</a>
                </p>
                <p style="color:#8899AA;font-size:13px;line-height:1.7;margin:0 0 28px;">
                  Already have an account? <a href="https://www.westernbeats.com/dashboard" style="color:#5CB2DC;font-weight:700;text-decoration:none;">Log in to check your status →</a>
                </p>
                <div style="margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.06);">
                  <p style="color:#4A5568;font-size:12px;margin:0;">© 2026 Western Beats Private Limited · India's most credible music distributor</p>
                </div>
              </td></tr>
            </table>
          </td></tr>
        </table>
        </body></html>
      `,
    })

    return NextResponse.json({ success: true, id: sub._id })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('submission error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const adminPassword = req.headers.get('x-admin-password')
    const correctPassword = process.env.ADMIN_PASSWORD || 'wb-admin-2026'
    if (!adminPassword || adminPassword !== correctPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    await connectDB()
    const submissions = await Submission.find({}).sort({ submittedAt: -1 }).lean()
    return NextResponse.json({ submissions })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
