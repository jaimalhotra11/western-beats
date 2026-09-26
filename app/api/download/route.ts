import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

// Proxy S3 files so the browser receives them with Content-Disposition: attachment
// (the HTML `download` attribute is silently ignored for cross-origin URLs)
// Usage: GET /api/download?url=<s3-url>&name=filename.wav
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const url  = searchParams.get('url')
  const name = searchParams.get('name') || 'download'

  if (!url) return NextResponse.json({ error: 'Missing url' }, { status: 400 })

  // Only allow our own S3 bucket
  if (!url.startsWith('https://western-beats-media.s3.')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const s3Res = await fetch(url)
  if (!s3Res.ok) return NextResponse.json({ error: 'File not found' }, { status: 404 })

  const contentType = s3Res.headers.get('content-type') || 'application/octet-stream'
  const buffer = await s3Res.arrayBuffer()

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename="${name}"`,
      'Content-Length': String(buffer.byteLength),
      'Cache-Control': 'private, max-age=3600',
    },
  })
}
