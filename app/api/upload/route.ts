import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'sxbb8x9x',
  api_key: process.env.CLOUDINARY_API_KEY || '895777538154666',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'YFQqxjk0NKCg6g2T5sp-F6GqMEQ',
})

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    const type = formData.get('type') as string // 'audio' or 'artwork'

    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const result = await new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'western-beats/submissions',
          resource_type: type === 'audio' ? 'video' : 'image', // Cloudinary uses 'video' for audio
          public_id: `${type}-${Date.now()}`,
        },
        (error, result) => {
          if (error || !result) reject(error || new Error('Upload failed'))
          else resolve({ secure_url: result.secure_url, public_id: result.public_id })
        }
      )
      uploadStream.end(buffer)
    })

    return NextResponse.json({ url: result.secure_url, publicId: result.public_id })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('upload error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
