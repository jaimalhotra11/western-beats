import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { OTP } from '@/lib/models/OTP'
import { User } from '@/lib/models/User'
import { getSession } from '@/lib/session'

export async function POST(req: NextRequest) {
  try {
    const { email, code, mode, name, phone, artistName, genre } = await req.json()

    if (!email || !code) {
      return NextResponse.json({ error: 'Email and OTP code are required' }, { status: 400 })
    }

    await connectDB()

    const otpRecord = await OTP.findOne({ email: email.toLowerCase() })

    if (!otpRecord) {
      return NextResponse.json({ error: 'OTP expired or not found. Please request a new one.' }, { status: 400 })
    }

    if (otpRecord.code !== code) {
      return NextResponse.json({ error: 'Incorrect OTP. Please try again.' }, { status: 400 })
    }

    if (new Date() > otpRecord.expiresAt) {
      await OTP.deleteOne({ _id: otpRecord._id })
      return NextResponse.json({ error: 'OTP has expired. Please request a new one.' }, { status: 400 })
    }

    // OTP valid — delete it
    await OTP.deleteOne({ _id: otpRecord._id })

    let user = await User.findOne({ email: email.toLowerCase() })

    if (mode === 'signup') {
      if (user) {
        return NextResponse.json({ error: 'An account with this email already exists. Please sign in.' }, { status: 409 })
      }
      if (!name || !phone || !artistName) {
        return NextResponse.json({ error: 'Name, phone, and artist name are required for signup.' }, { status: 400 })
      }
      user = await User.create({
        name,
        email: email.toLowerCase(),
        phone,
        artistName,
        genre: genre || '',
      })
    } else {
      if (!user) {
        return NextResponse.json({ error: 'No account found. Please sign up first.' }, { status: 404 })
      }
    }

    const session = await getSession()
    session.userId = user._id.toString()
    session.email = user.email
    session.name = user.name
    session.artistName = user.artistName
    session.isLoggedIn = true
    await session.save()

    return NextResponse.json({
      success: true,
      user: { name: user.name, email: user.email, artistName: user.artistName },
    })
  } catch (err) {
    console.error('verify-otp error:', err)
    return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 500 })
  }
}
