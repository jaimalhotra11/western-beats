import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

const Release = mongoose.models.Release || mongoose.model('Release', new mongoose.Schema({}, { strict: false }))

function mailer() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com', port: 465, secure: true,
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  })
}

function esc(s: unknown) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}

const STATUS_COLOR: Record<string, string> = {
  'Submitted': '#F59E0B', 'Under Review': '#5CB2DC', 'Approved': '#34D399',
  'Distributing': '#0A64C3', 'Live': '#34D399', 'Rejected': '#F87171',
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const pw = req.headers.get('x-admin-password')
  if (pw !== process.env.ADMIN_PASSWORD) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const body = await req.json()
  await connectDB()

  const release = await Release.findByIdAndUpdate(
    id,
    { $set: { status: body.status, statusNote: body.statusNote, agreementStatus: body.agreementStatus, adminNote: body.adminNote, updatedAt: new Date() } },
    { new: true }
  )
  if (!release) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  // Notify artist
  if (release.email) {
    try {
      const statusNote = body.statusNote ? `<p style="margin:16px 0 0;padding:14px;background:#0A1535;border-radius:10px;border-left:3px solid #0A64C3;font-size:13px;color:#CBD5E0;line-height:1.6;">${esc(body.statusNote)}</p>` : ''
      await mailer().sendMail({
        from: '"Western Beats" <contact@westernbeats.com>',
        to: release.email,
        subject: `Update on your ${esc(release.releaseType)}: ${esc(release.albumTitle)} — ${esc(body.status)}`,
        html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#040A14;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#040A14;padding:32px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#060C18;border-radius:16px;border:1px solid rgba(255,255,255,0.08);max-width:600px;width:100%;">
<tr><td style="padding:24px 32px;">
  <p style="margin:0 0 4px;font-size:18px;font-weight:900;color:#fff;">${esc(release.releaseType)} Status Update</p>
  <p style="margin:0 0 20px;font-size:13px;color:#8899AA;">${esc(release.albumTitle)}</p>
  <div style="display:inline-block;background:${STATUS_COLOR[body.status] ?? '#4A5568'}22;color:${STATUS_COLOR[body.status] ?? '#8899AA'};padding:6px 16px;border-radius:20px;font-size:13px;font-weight:700;margin-bottom:16px;">${esc(body.status)}</div>
  ${statusNote}
  <p style="margin:20px 0 0;font-size:12px;color:#8899AA;">Questions? Reply to this email or write to <a href="mailto:contact@westernbeats.com" style="color:#5CB2DC;">contact@westernbeats.com</a></p>
</td></tr>
</table>
</td></tr>
</table></body></html>`,
      })
    } catch { /* email errors don't fail the PATCH */ }
  }

  return NextResponse.json({ success: true })
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const pw = req.headers.get('x-admin-password')
  if (pw !== process.env.ADMIN_PASSWORD) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  await connectDB()
  await Release.findByIdAndDelete(id)
  return NextResponse.json({ success: true })
}
