import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    MONGODB_URI: !!process.env.MONGODB_URI,
    GMAIL_USER: process.env.GMAIL_USER ?? 'NOT SET',
    GMAIL_APP_PASSWORD: !!process.env.GMAIL_APP_PASSWORD,
    SESSION_SECRET: !!process.env.SESSION_SECRET,
  })
}
