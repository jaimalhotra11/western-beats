import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { getSession } from '@/lib/session'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

// ── Schema ──────────────────────────────────────────────────────────────────
const TrackSchema = new mongoose.Schema({
  trackNumber: Number,
  title: String,
  featuring: String,
  singer: String,
  lyricWriter: String,
  musicDirector: String,
  musicArranger: String,
  director: String,
  mixer: String,
  producer: String,
  isrc: String,
  explicit: { type: Boolean, default: false },
  audioUrl: String,
  audioPublicId: String,
}, { _id: false })

const ReleaseSchema = new mongoose.Schema({
  releaseType: { type: String, enum: ['EP', 'Album'], required: true },
  albumTitle: { type: String, required: true },
  artistName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  genre: String,
  subGenre: String,
  language: String,
  releaseDate: String,
  upc: String,
  labelName: String,
  artworkUrl: String,
  artworkPublicId: String,
  tracks: [TrackSchema],
  // KYC
  legalName: String,
  address: String,
  clientType: { type: String, default: 'India' },
  panCardUrl: String,
  aadhaarFrontUrl: String,
  aadhaarBackUrl: String,
  gstUrl: String,
  passportUrl: String,
  // Links
  youtubeLink: String,
  instagramLink: String,
  spotifyLink: String,
  createSpotify: { type: Boolean, default: false },
  youtubeContentId: { type: String, default: 'No Action' },
  message: String,
  // Status
  status: { type: String, default: 'Submitted' },
  statusNote: String,
  agreementStatus: { type: String, default: 'Not Sent' },
  agreementSentAt: String,
  adminNote: String,
  submittedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Release = mongoose.models.Release || mongoose.model('Release', ReleaseSchema)

function esc(s: unknown) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}

function mailer() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com', port: 465, secure: true,
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  })
}

// ── POST: Create release ─────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const session = await getSession()
    const emailFromSession = session.isLoggedIn ? session.email : null
    const submitterEmail = (emailFromSession || body.email || '').toLowerCase().trim()
    if (!submitterEmail) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

    await connectDB()

    const release = await Release.create({
      ...body,
      email: submitterEmail,
      status: 'Submitted',
      submittedAt: new Date(),
      updatedAt: new Date(),
    })

    const transporter = mailer()
    const trackList = (body.tracks || []).map((t: { trackNumber: number; title: string }, i: number) =>
      `<tr><td style="padding:6px 8px;color:#8899AA;font-size:12px;">${t.trackNumber ?? i + 1}</td><td style="padding:6px 8px;color:#E2E8F0;font-size:12px;">${esc(t.title)}</td></tr>`
    ).join('')

    // Admin notification
    await transporter.sendMail({
      from: '"Western Beats" <contact@westernbeats.com>',
      to: 'contact@westernbeats.com',
      subject: `🎵 New ${body.releaseType}: ${body.albumTitle} by ${body.artistName}`,
      html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#040A14;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#040A14;padding:32px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#060C18;border-radius:16px;border:1px solid rgba(255,255,255,0.08);max-width:600px;width:100%;">
<tr><td style="background:linear-gradient(135deg,#0A1535,#060C18);padding:24px 32px;border-bottom:1px solid rgba(255,255,255,0.06);">
  <p style="margin:0;font-size:20px;font-weight:900;color:#fff;">🎵 New ${esc(body.releaseType)}: ${esc(body.albumTitle)}</p>
  <p style="margin:4px 0 0;font-size:13px;color:#8899AA;">${esc(body.artistName)} · ${esc(body.tracks?.length ?? 0)} tracks</p>
</td></tr>
<tr><td style="padding:24px 32px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
    ${[['Release Type', body.releaseType],['Artist', body.artistName],['Email', submitterEmail],['Phone', body.phone||'—'],['Genre', body.genre||'—'],['Language', body.language||'—'],['Release Date', body.releaseDate||'—'],['Tracks', body.tracks?.length ?? 0]].map(([l,v])=>`<tr><td style="padding:5px 0;color:#8899AA;font-size:12px;width:40%;">${esc(l)}</td><td style="padding:5px 0;color:#E2E8F0;font-size:12px;font-weight:600;">${esc(v)}</td></tr>`).join('')}
  </table>
  <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#8899AA;text-transform:uppercase;letter-spacing:1px;">Tracklist</p>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A1535;border-radius:8px;overflow:hidden;">
    ${trackList}
  </table>
  <div style="margin-top:20px;"><a href="https://www.westernbeats.com/admin" style="background:#0A64C3;color:#fff;padding:12px 24px;border-radius:10px;text-decoration:none;font-size:14px;font-weight:700;display:inline-block;">View in Admin Panel →</a></div>
</td></tr>
</table>
</td></tr>
</table></body></html>`,
    })

    // Artist confirmation
    await transporter.sendMail({
      from: '"Western Beats" <contact@westernbeats.com>',
      to: submitterEmail,
      subject: `✅ ${body.releaseType} Received: ${body.albumTitle}`,
      html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#040A14;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#040A14;padding:32px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#060C18;border-radius:16px;border:1px solid rgba(255,255,255,0.08);max-width:600px;width:100%;">
<tr><td style="background:linear-gradient(135deg,#0A1535,#060C18);padding:24px 32px;border-bottom:1px solid rgba(255,255,255,0.06);">
  <img src="https://www.westernbeats.com/partners/westernbeats-BpLvGE3e.png" width="40" height="40" alt="Western Beats" style="border-radius:8px;display:block;margin-bottom:12px;" />
  <p style="margin:0;font-size:20px;font-weight:900;color:#fff;">Your ${esc(body.releaseType)} is In! 🎉</p>
  <p style="margin:4px 0 0;font-size:13px;color:#8899AA;">We've received <strong style="color:#fff;">${esc(body.albumTitle)}</strong> — ${esc(body.tracks?.length ?? 0)} tracks</p>
</td></tr>
<tr><td style="padding:24px 32px;">
  <p style="font-size:14px;color:#CBD5E0;line-height:1.7;margin:0 0 16px;">Hi ${esc(body.artistName)},</p>
  <p style="font-size:14px;color:#CBD5E0;line-height:1.7;margin:0 0 16px;">Our team will review your ${esc(body.releaseType).toLowerCase()} within <strong style="color:#fff;">24 hours</strong>. You'll receive another email with your status update.</p>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A1535;border-radius:10px;padding:16px;margin-bottom:20px;">
    ${(body.tracks || []).map((t: { trackNumber: number; title: string }, i: number) => `<tr><td style="padding:4px 8px;color:#8899AA;font-size:12px;">${t.trackNumber ?? i+1}.</td><td style="padding:4px 8px;color:#E2E8F0;font-size:13px;">${esc(t.title)}</td></tr>`).join('')}
  </table>
  <p style="font-size:12px;color:#8899AA;margin:0;">Questions? Reply to this email or write to <a href="mailto:contact@westernbeats.com" style="color:#5CB2DC;">contact@westernbeats.com</a></p>
</td></tr>
</table>
</td></tr>
</table></body></html>`,
    })

    return NextResponse.json({ success: true, id: release._id })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('release POST error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

// ── GET: Admin list ──────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const pw = req.headers.get('x-admin-password')
  if (pw !== process.env.ADMIN_PASSWORD) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  await connectDB()
  const releases = await Release.find({}).sort({ submittedAt: -1 }).lean()
  return NextResponse.json({ releases })
}
