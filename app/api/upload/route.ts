import { NextRequest, NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3 = new S3Client({
  region: process.env.AWS_REGION || 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

const BUCKET = process.env.AWS_S3_BUCKET || 'western-beats-media'
const MAX_AUDIO_MB = 100
const MAX_IMAGE_MB = 20

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    const type = (formData.get('type') as string) || 'image'

    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

    const maxBytes = type === 'audio' ? MAX_AUDIO_MB * 1024 * 1024 : MAX_IMAGE_MB * 1024 * 1024
    if (file.size > maxBytes) {
      return NextResponse.json({ error: `File too large. Max ${type === 'audio' ? MAX_AUDIO_MB : MAX_IMAGE_MB}MB.` }, { status: 413 })
    }

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

    const ext = file.name.split('.').pop() || (type === 'audio' ? 'wav' : 'jpg')
    const key = `submissions/${type}-${Date.now()}.${ext}`

    await s3.send(new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    }))

    const secure_url = `https://${BUCKET}.s3.${process.env.AWS_REGION || 'ap-south-1'}.amazonaws.com/${key}`

    return NextResponse.json({ secure_url, public_id: key })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('upload error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
