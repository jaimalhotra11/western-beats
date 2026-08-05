import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'WAV vs MP3 for Music Distribution India 2026 — Which Format to Use? | Western Beats',
  description: 'Should you upload WAV or MP3 for music distribution? Complete guide to audio formats for Spotify, JioSaavn, Apple Music — bit depth, sample rate, FLAC and what platforms actually require.',
  keywords: ['WAV vs MP3 music distribution','audio format music distribution India','WAV file music distribution','MP3 music upload Spotify','audio format Spotify JioSaavn','FLAC music distribution India','bit depth sample rate music distribution','best audio format streaming India 2026'],
  alternates: { canonical: 'https://www.westernbeats.com/blog/wav-vs-mp3-audio-format-music-distribution' },
  openGraph: { title: 'WAV vs MP3 for Music Distribution 2026 | Western Beats', description: 'Definitive guide to audio formats for music distribution in India.', url: 'https://www.westernbeats.com/blog/wav-vs-mp3-audio-format-music-distribution', siteName: 'Western Beats', type: 'article' },
}

const SCHEMA = {
  '@context': 'https://schema.org', '@type': 'Article', headline: 'WAV vs MP3 for Music Distribution India 2026 — Which Format to Use?',
  description: 'Complete guide to audio formats for music distribution — WAV, MP3, FLAC, bit depth and sample rate for Spotify, JioSaavn and Apple Music.',
  author: { '@type': 'Organization', name: 'Western Beats' }, publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  url: 'https://www.westernbeats.com/blog/wav-vs-mp3-audio-format-music-distribution', datePublished: '2026-08-01',
}

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 760, margin: '0 auto', padding: '0 24px' },
  h2: { fontSize: 24, fontWeight: 800, margin: '48px 0 16px', letterSpacing: '-0.01em' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.85, margin: '0 0 20px' },
  li: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.85, margin: '0 0 10px' },
  tip: { background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', borderLeft: '4px solid #34D399', borderRadius: '0 12px 12px 0', padding: '16px 20px', margin: '24px 0', fontSize: 14, color: '#E2E8F0', lineHeight: 1.7 },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 15, fontWeight: 800, textDecoration: 'none' },
}

export default function WavVsMp3() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <div style={S.page}>
        <Nav />
        <header style={{ background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '100px 24px 60px' }}>
          <div style={S.wrap}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <Link href="/blog" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Blog</Link>
              <span style={{ color: '#4A5568' }}>/</span>
              <span style={{ color: '#5CB2DC', fontSize: 13 }}>Audio Formats</span>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(92,178,220,0.1)', color: '#5CB2DC', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 6, marginBottom: 20 }}>Audio · Technical · Guide</span>
            <h1 style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>WAV vs MP3 for Music Distribution 2026 — Which Format Should You Upload?</h1>
            <p style={{ ...S.p, fontSize: 18 }}>The wrong audio format can get your track rejected, reduce your sound quality, or cause problems on specific platforms. Here&apos;s exactly what Spotify, JioSaavn, Apple Music and every other platform actually requires.</p>
          </div>
        </header>

        <article style={{ padding: '48px 24px 100px' }}>
          <div style={S.wrap}>

            {/* The answer upfront */}
            <div style={{ background: 'linear-gradient(135deg,#060F22,#0A1535)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '28px 32px', margin: '0 0 40px' }}>
              <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2, color: '#5CB2DC', textTransform: 'uppercase' as const, margin: '0 0 12px' }}>Quick Answer</p>
              <p style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: '0 0 8px' }}>Always upload WAV (44.1kHz, 16-bit minimum). Never upload MP3 to your distributor.</p>
              <p style={{ fontSize: 14, color: '#8899AA', margin: 0, lineHeight: 1.7 }}>Distributors like Western Beats transcode your file to the format each platform requires. If you give them a compressed MP3, they can't restore quality that was already lost. Give them the best possible source file.</p>
            </div>

            <h2 style={S.h2}>WAV vs MP3 — Key Differences</h2>
            <div style={{ overflowX: 'auto', margin: '0 0 32px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    {['', 'WAV', 'MP3', 'FLAC'].map(h => <th key={h} style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#8899AA', fontWeight: 700, fontSize: 12, textTransform: 'uppercase' as const, letterSpacing: 1 }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Compression', 'None (lossless)', 'Lossy (quality lost)', 'Lossless compressed'],
                    ['File size (3 min track)', '~50MB', '~7MB', '~25MB'],
                    ['Quality loss', 'None', 'Yes — permanent', 'None'],
                    ['Accepted by distributors', '✓ Yes', '⚠️ Often rejected', '✓ Yes'],
                    ['Best for', 'Distribution upload', 'Social media previews', 'Distribution upload'],
                  ].map(([label, wav, mp3, flac], i) => (
                    <tr key={label} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                      <td style={{ padding: '14px 16px', color: '#8899AA', fontWeight: 700 }}>{label}</td>
                      <td style={{ padding: '14px 16px', color: '#34D399', fontWeight: 700 }}>{wav}</td>
                      <td style={{ padding: '14px 16px', color: '#F87171' }}>{mp3}</td>
                      <td style={{ padding: '14px 16px', color: '#34D399' }}>{flac}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={S.h2}>Exact Requirements by Platform</h2>
            <div style={{ overflowX: 'auto', margin: '0 0 32px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    {['Platform', 'Accepted Format', 'Sample Rate', 'Bit Depth', 'Notes'].map(h => <th key={h} style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#8899AA', fontWeight: 700, fontSize: 11, textTransform: 'uppercase' as const, letterSpacing: 1 }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Spotify', 'WAV / FLAC', '44.1kHz+', '16-bit+', 'Streams at OGG 320kbps to users'],
                    ['Apple Music', 'WAV / FLAC / AIFF', '44.1kHz+', '16-bit+', 'Lossless up to 24-bit/192kHz for Lossless tier'],
                    ['JioSaavn', 'WAV / FLAC', '44.1kHz', '16-bit+', 'Streams at MP3 320kbps to premium users'],
                    ['Amazon Music', 'WAV / FLAC', '44.1kHz+', '16-bit+', 'HD tier plays up to 24-bit/192kHz'],
                    ['Gaana', 'WAV / MP3 (320kbps)', '44.1kHz', '16-bit', 'Accepts 320kbps MP3 as minimum'],
                    ['Wynk Music', 'WAV / MP3 (320kbps)', '44.1kHz', '16-bit', 'Similar to Gaana requirements'],
                  ].map(([p, fmt, sr, bd, note], i) => (
                    <tr key={p} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                      <td style={{ padding: '14px 16px', color: '#E2E8F0', fontWeight: 700 }}>{p}</td>
                      <td style={{ padding: '14px 16px', color: '#34D399', fontWeight: 700 }}>{fmt}</td>
                      <td style={{ padding: '14px 16px', color: '#8899AA', fontFamily: 'monospace' }}>{sr}</td>
                      <td style={{ padding: '14px 16px', color: '#8899AA', fontFamily: 'monospace' }}>{bd}</td>
                      <td style={{ padding: '14px 16px', color: '#4A5568', fontSize: 12 }}>{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={S.tip}>
              <strong>🟢 What to upload to Western Beats:</strong> WAV file, 44.1kHz sample rate, 16-bit or 24-bit, stereo. If your DAW exports 24-bit/48kHz, that's also perfectly fine — we handle the transcoding to each platform's required format automatically.
            </div>

            <h2 style={S.h2}>Common Mistakes Indian Artists Make</h2>
            <ul style={{ paddingLeft: 24, margin: '0 0 32px' }}>
              {[
                'Uploading an MP3 exported from a DAW — even 320kbps MP3 has irreversible quality loss compared to WAV.',
                'Converting an old MP3 to WAV and uploading that — this does NOT restore quality. The quality was lost when the MP3 was created.',
                'Uploading 22kHz or 32kHz files — these sound noticeably worse on quality speakers and audiophile listeners will notice.',
                'Using 8-bit files — these sound like old phone audio. Always use 16-bit minimum.',
                'Uploading in CMYK — audio files don\'t have colour mode, but WAV files exported incorrectly from some video editors can have issues.',
                'Normalising to -14 LUFS before upload — let the distributor handle loudness normalisation. Spotify will normalise to -14 LUFS anyway.',
              ].map(l => <li key={l} style={{ ...S.li, color: '#F87171' }}>{l}</li>)}
            </ul>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const, marginTop: 48 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Upload your WAV — we handle the rest.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Western Beats accepts WAV and FLAC files and transcodes them perfectly for every platform. Free forever.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
