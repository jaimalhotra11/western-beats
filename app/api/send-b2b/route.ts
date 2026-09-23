import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { connectDB } from '@/lib/mongodb'
import mongoose from 'mongoose'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'wb-admin-2026'
const B2B_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdfsEF0PkiTfgym3b0Qsoo_0dbhrkbMZr36Zhw7tnBsMpcdpg/viewform'

export async function POST(req: NextRequest) {
  if (req.headers.get('x-admin-password') !== ADMIN_PASSWORD)
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })

  const { submissionId, email, artistName, trackName } = await req.json()
  if (!submissionId || !email)
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  })

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#040A14;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#040A14;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#060C18;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;max-width:600px;width:100%">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#0A64C3,#5CB2DC);padding:32px 40px;text-align:center">
          <div style="font-size:28px;font-weight:900;color:#fff;letter-spacing:-0.5px">Western Beats</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.8);margin-top:4px">Distribution Partner — Warner Music India</div>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px">
          <p style="color:#CBD5E1;font-size:15px;margin:0 0 20px">Hi <strong style="color:#fff">${artistName}</strong>,</p>
          <p style="color:#CBD5E1;font-size:15px;margin:0 0 20px">
            Great news! We're moving forward with your track <strong style="color:#fff">"${trackName}"</strong> and are ready to formalise our distribution agreement.
          </p>
          <p style="color:#CBD5E1;font-size:15px;margin:0 0 28px">
            Please fill out the B2B Agreement Form below. This is a quick form that captures your details for our official distribution contract. It takes less than 5 minutes.
          </p>

          <!-- CTA Button -->
          <table cellpadding="0" cellspacing="0" width="100%"><tr><td align="center" style="padding:0 0 32px">
            <a href="${B2B_FORM_URL}" target="_blank"
              style="display:inline-block;background:#0A64C3;color:#fff;text-decoration:none;font-size:16px;font-weight:700;padding:16px 40px;border-radius:12px;letter-spacing:0.3px">
              📋 Fill B2B Agreement Form →
            </a>
          </td></tr></table>

          <!-- Info box -->
          <div style="background:rgba(10,100,195,0.08);border:1px solid rgba(10,100,195,0.2);border-radius:10px;padding:16px 20px;margin-bottom:28px">
            <p style="color:#5CB2DC;font-size:12px;font-weight:700;margin:0 0 6px;text-transform:uppercase;letter-spacing:0.8px">What to expect next</p>
            <p style="color:#8899AA;font-size:13px;margin:0;line-height:1.6">
              Once you submit the form, our team will review and send you the official agreement for signing. After signing, your music will proceed to distribution on all 150+ platforms.
            </p>
          </div>

          <p style="color:#8899AA;font-size:13px;margin:0 0 6px">
            If you have any questions, reply to this email or reach us at
            <a href="mailto:contact@westernbeats.com" style="color:#5CB2DC">contact@westernbeats.com</a>
          </p>
          <p style="color:#8899AA;font-size:13px;margin:0">WhatsApp / Instagram: <a href="https://instagram.com/wb_digital_" style="color:#5CB2DC">@wb_digital_</a></p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#030810;padding:20px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.06)">
          <p style="color:#4A5568;font-size:11px;margin:0">Western Beats Private Limited · Warner Music India Partner</p>
          <p style="color:#4A5568;font-size:11px;margin:4px 0 0">
            <a href="https://www.westernbeats.com/terms" style="color:#4A5568">Terms & Conditions</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

  await transporter.sendMail({
    from: `"Western Beats" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `📋 B2B Agreement Form — "${trackName}" | Western Beats`,
    html,
  })

  // Update agreement status in DB
  await connectDB()
  const db = mongoose.connection.db!
  await db.collection('submissions').updateOne(
    { _id: new mongoose.Types.ObjectId(submissionId) },
    { $set: { agreementStatus: 'B2B Sent', agreementSentAt: new Date().toISOString() } }
  )

  return NextResponse.json({ ok: true })
}
