import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
import { getSession } from '@/lib/session'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const MAX_AUDIO_MB = 100
const MAX_IMAGE_MB = 20

export async function POST(req: NextRequest) {
  try {
    // Only logged-in artists can upload
    const session = await getSession()
    if (!session.isLoggedIn || !session.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get('file') as File
    const type = (formData.get('type') as string) || 'image'

    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

    // Enforce file size limits
    const maxBytes = type === 'audio' ? MAX_AUDIO_MB * 1024 * 1024 : MAX_IMAGE_MB * 1024 * 1024
    if (file.size > maxBytes) {
      return NextResponse.json({ error: `File too large. Max ${type === 'audio' ? MAX_AUDIO_MB : MAX_IMAGE_MB}MB.` }, { status: 413 })
    }

    // Validate MIME types
    if (type === 'audio' && !['audio/wav', 'audio/x-wav', 'audio/wave'].includes(file.type)) {
      return NextResponse.json({ error: 'Only WAV audio files are accepted.' }, { status: 400 })
    }
    if (type === 'artwork' && !['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
      return NextResponse.json({ error: 'Artwork must be JPG or PNG.' }, { status: 400 })
    }
    if (type === 'document' && !['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'].includes(file.type)) {
      return NextResponse.json({ error: 'Documents must be JPG, PNG, or PDF.' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const resourceType = type === 'audio' ? 'video' : 'image'

    const result = await new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'western-beats/submissions',
          resource_type: resourceType,
          public_id: `${type}-${Date.now()}`,
        },
        (error, result) => {
          if (error || !result) reject(error || new Error('Upload failed'))
          else resolve({ secure_url: result.secure_url, public_id: result.public_id })
        }
      )
      uploadStream.end(buffer)
    })

    return NextResponse.json({ secure_url: result.secure_url, public_id: result.public_id })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('upload error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
