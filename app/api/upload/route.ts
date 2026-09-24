import { NextRequest, NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export const maxDuration = 30
export const dynamic = 'force-dynamic'

const s3 = new S3Client({
  region: process.env.AWS_REGION || 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

const BUCKET = process.env.AWS_S3_BUCKET || 'western-beats-media'
const REGION = process.env.AWS_REGION || 'ap-south-1'

const ALLOWED_AUDIO = ['audio/wav', 'audio/x-wav', 'audio/wave']
const ALLOWED_IMAGE = ['image/jpeg', 'image/jpg', 'image/png']
const ALLOWED_DOC   = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']

// POST /api/upload
// Body: { type: 'audio'|'artwork'|'document', contentType: string, fileName: string }
// Returns: { uploadUrl, secure_url, public_id }
// Client uploads the file directly to S3 using uploadUrl (PUT), bypassing Vercel body limit.
export async function POST(req: NextRequest) {
  try {
    const { type, contentType, fileName } = await req.json()

    if (!type || !contentType || !fileName) {
      return NextResponse.json({ error: 'Missing type, contentType, or fileName' }, { status: 400 })
    }

    if (type === 'audio' && !ALLOWED_AUDIO.includes(contentType)) {
      return NextResponse.json({ error: 'Only WAV audio files are accepted.' }, { status: 400 })
    }
    if (type === 'artwork' && !ALLOWED_IMAGE.includes(contentType)) {
      return NextResponse.json({ error: 'Artwork must be JPG or PNG.' }, { status: 400 })
    }
    if (type === 'document' && !ALLOWED_DOC.includes(contentType)) {
      return NextResponse.json({ error: 'Documents must be JPG, PNG, or PDF.' }, { status: 400 })
    }

    const ext = fileName.split('.').pop()?.toLowerCase() || (type === 'audio' ? 'wav' : 'jpg')
    const key = `submissions/${type}-${Date.now()}.${ext}`

    const command = new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      ContentType: contentType,
    })

    // Presigned URL valid for 15 minutes — enough time to upload a large WAV
    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 900 })
    const secure_url = `https://${BUCKET}.s3.${REGION}.amazonaws.com/${key}`

    return NextResponse.json({ uploadUrl, secure_url, public_id: key })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('upload error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
