import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Submission } from '@/lib/models/Submission'
import { getSession } from '@/lib/session'

export async function GET() {
  try {
    const session = await getSession()
    if (!session.isLoggedIn || !session.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }
    await connectDB()
    const submissions = await Submission.find({ email: session.email }).sort({ submittedAt: -1 }).lean()
    return NextResponse.json({ submissions })
  } catch (err: unknown) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
