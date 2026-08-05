import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Cover Art Size & Dimensions for Music Distribution 2026 — Full Spec Guide | Western Beats',
  description: 'Exact cover art size requirements for Spotify, JioSaavn, Apple Music, Amazon Music, Gaana and all platforms in 2026. Avoid rejections with the right dimensions, format and design rules.',
  keywords: ['cover art size music distribution','album art dimensions Spotify','music cover art requirements 2026','album artwork specifications India','Spotify cover art size','JioSaavn cover art requirements','music artwork size pixels'],
  alternates: { canonical: 'https://www.westernbeats.com/blog/cover-art-size-dimensions-music-distribution' },
  openGraph: { title: 'Cover Art Size & Dimensions for Music Distribution 2026 | Western Beats', description: 'Exact artwork specs for every major platform — Spotify, JioSaavn, Apple Music and more.', url: 'https://www.westernbeats.com/blog/cover-art-size-dimensions-music-distribution', siteName: 'Western Beats', type: 'article' },
}

const SCHEMA = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Cover Art Size & Dimensions for Music Distribution 2026 — Full Spec Guide', description: 'Exact cover art specifications for Spotify, JioSaavn, Apple Music, Amazon Music and all major streaming platforms.', author: { '@type': 'Organization', name: 'Western Beats' }, publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' }, url: 'https://www.westernbeats.com/blog/cover-art-size-dimensions-music-distribution', datePublished: '2026-08-01' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'What size should music cover art be?', acceptedAnswer: { '@type': 'Answer', text: 'All major streaming platforms require a minimum of 3000×3000 pixels (square), saved as JPEG or PNG at 72 DPI or higher. The maximum file size is typically 10MB. This single spec works across Spotify, Apple Music, JioSaavn, Gaana, Amazon Music and all other platforms.' } },
    { '@type': 'Question', name: 'Can I use text on my album cover art?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but with limits. Spotify and Apple Music reject artwork that contains: website URLs, social media handles, pricing information, streaming platform logos (Spotify, Apple Music, etc.), and explicit content. Artist name and track title are fine.' } },
    { '@type': 'Question', name: 'What format should music cover art be?', acceptedAnswer: { '@type': 'Answer', text: 'JPEG (.jpg) or PNG (.png) format. JPEG is preferred for photographs and complex artwork. PNG is better for artwork with text or sharp edges. Avoid TIFF, BMP, GIF or WebP formats — most distributors reject these.' } },
  ]},
]

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 760, margin: '0 auto', padding: '0 24px' },
  h2: { fontSize: 24, fontWeight: 800, margin: '48px 0 16px', letterSpacing: '-0.01em' },
  h3: { fontSize: 18, fontWeight: 800, margin: '28px 0 12px' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.85, margin: '0 0 20px' },
  li: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.85, margin: '0 0 10px' },
  tip: { background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', borderLeft: '4px solid #34D399', borderRadius: '0 12px 12px 0', padding: '16px 20px', margin: '24px 0', fontSize: 14, color: '#E2E8F0', lineHeight: 1.7 },
  warn: { background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderLeft: '4px solid #EF4444', borderRadius: '0 12px 12px 0', padding: '16px 20px', margin: '24px 0', fontSize: 14, color: '#E2E8F0', lineHeight: 1.7 },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 15, fontWeight: 800, textDecoration: 'none' },
}

export default function CoverArtGuide() {
  return (
    <>
      {SCHEMA.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <div style={S.page}>
        <Nav />
        <header style={{ background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '100px 24px 60px' }}>
          <div style={S.wrap}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <Link href="/blog" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Blog</Link>
              <span style={{ color: '#4A5568' }}>/</span>
              <span style={{ color: '#5CB2DC', fontSize: 13 }}>Cover Art Specs</span>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(167,139,250,0.1)', color: '#A78BFA', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 6, marginBottom: 20 }}>Artwork · Specs · Design</span>
            <h1 style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Cover Art Size & Dimensions for Music Distribution 2026 — Complete Spec Guide</h1>
            <p style={{ ...S.p, fontSize: 18 }}>Wrong cover art is the #1 reason tracks get rejected by distributors. Here are the exact specifications for every platform — Spotify, JioSaavn, Apple Music, Amazon Music, Gaana, Wynk and more.</p>
          </div>
        </header>

        <article style={{ padding: '48px 24px 100px' }}>
          <div style={S.wrap}>

            {/* The golden spec */}
            <div style={{ background: 'linear-gradient(135deg, #060F22 0%, #0A1535 100%)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '32px', margin: '0 0 48px', textAlign: 'center' as const }}>
              <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC', margin: '0 0 12px' }}>The Universal Spec That Works Everywhere</p>
              <p style={{ fontSize: 'clamp(32px,5vw,64px)', fontWeight: 900, margin: '0 0 8px', background: 'linear-gradient(90deg,#fff,#8899AA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>3000 × 3000 px</p>
              <p style={{ fontSize: 16, color: '#8899AA', margin: '0 0 20px' }}>Square · JPEG or PNG · RGB colour mode · Max 10MB</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const }}>
                {['✓ Spotify', '✓ JioSaavn', '✓ Apple Music', '✓ Amazon Music', '✓ Gaana', '✓ Wynk', '✓ Deezer', '✓ Tidal'].map(p => (
                  <span key={p} style={{ fontSize: 12, color: '#34D399', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', padding: '4px 12px', borderRadius: 20, fontWeight: 700 }}>{p}</span>
                ))}
              </div>
            </div>

            <h2 style={S.h2}>Platform-by-Platform Specifications</h2>
            <div style={{ overflowX: 'auto', margin: '0 0 32px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    {['Platform', 'Min Size', 'Max Size', 'Format', 'Colour Mode'].map(h => <th key={h} style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#8899AA', fontWeight: 700, fontSize: 11, textTransform: 'uppercase' as const, letterSpacing: 1 }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Spotify', '3000×3000px', '10MB', 'JPEG/PNG', 'RGB'],
                    ['Apple Music', '3000×3000px', '10MB', 'JPEG/PNG', 'RGB'],
                    ['JioSaavn', '3000×3000px', '5MB', 'JPEG/PNG', 'RGB'],
                    ['Amazon Music', '3000×3000px', '10MB', 'JPEG/PNG', 'RGB'],
                    ['Gaana', '3000×3000px', '5MB', 'JPEG/PNG', 'RGB'],
                    ['Wynk Music', '3000×3000px', '5MB', 'JPEG/PNG', 'RGB'],
                    ['Deezer', '3000×3000px', '10MB', 'JPEG/PNG', 'RGB'],
                    ['YouTube Music', '3000×3000px', '10MB', 'JPEG/PNG', 'RGB'],
                    ['Tidal', '3000×3000px', '10MB', 'JPEG/PNG', 'RGB'],
                  ].map(([p, min, max, fmt, col], i) => (
                    <tr key={p} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                      <td style={{ padding: '14px 16px', color: '#E2E8F0', fontWeight: 700 }}>{p}</td>
                      <td style={{ padding: '14px 16px', color: '#34D399', fontWeight: 700, fontFamily: 'monospace' }}>{min}</td>
                      <td style={{ padding: '14px 16px', color: '#8899AA' }}>{max}</td>
                      <td style={{ padding: '14px 16px', color: '#8899AA' }}>{fmt}</td>
                      <td style={{ padding: '14px 16px', color: '#8899AA' }}>{col}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={S.h2}>What Will Get Your Artwork Rejected</h2>
            <div style={S.warn}>
              <strong>🚫 Automatic rejection reasons — avoid all of these:</strong>
            </div>
            <ul style={{ paddingLeft: 24, margin: '0 0 28px' }}>
              {[
                'Image smaller than 3000×3000px — the most common rejection reason',
                'Non-square image (any aspect ratio other than 1:1)',
                'CMYK colour mode — always use RGB',
                'Including streaming platform logos (Spotify logo, Apple Music logo, etc.)',
                'Including website URLs or social media handles (e.g. @yourname, yoursite.com)',
                'Pricing information or "free download" text',
                'Explicit sexual content',
                'Third-party brand logos without permission',
                'Blurry, pixelated or low-quality images',
                'TIFF, BMP, GIF, WebP or any format other than JPEG/PNG',
              ].map(l => <li key={l} style={{ ...S.li, color: '#F87171' }}>{l}</li>)}
            </ul>

            <h2 style={S.h2}>Design Tips That Actually Get You Noticed</h2>
            <p style={S.p}>Passing the technical spec check is the minimum. Good cover art that gets added to editorial playlists, shared on social media, and remembered by listeners is a different standard entirely.</p>

            <div style={{ display: 'grid', gap: 14, margin: '0 0 28px' }}>
              {[
                { tip: 'Design for 40px, not 3000px', body: 'Your cover art will appear at thumbnail size (40–60px) on mobile apps most of the time. Open your design at that size — is the key visual element still readable? A face, bold text, or a single strong shape works. Complex detailed illustrations become mud at small sizes.' },
                { tip: 'High contrast beats beautiful detail', body: 'The cover arts that stand out on playlist screens have extreme contrast between foreground and background. Light subject on dark background (or vice versa). Pastel-on-pastel, or complex photographic compositions with no clear focal point, disappear in a sea of album art.' },
                { tip: 'Use a safe zone for text', body: 'Keep all text within 10% margin from the edges. Some platforms overlay "Explicit" badges or track information on corners of your artwork — text too close to edges gets obscured.' },
                { tip: 'Check it in greyscale', body: 'Your artwork should be legible even in greyscale. This ensures it works on smart speakers with e-ink displays and in any low-colour environment.' },
              ].map(t => (
                <div key={t.tip} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 8px', color: '#A78BFA' }}>💡 {t.tip}</h3>
                  <p style={{ ...S.p, margin: 0, fontSize: 14 }}>{t.body}</p>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>Free Tools to Create Cover Art</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14, margin: '0 0 40px' }}>
              {[
                { name: 'Canva', url: 'canva.com', desc: 'Has pre-built 3000×3000 album art templates. Free tier sufficient for most artists.', tag: 'Free / Paid' },
                { name: 'Adobe Express', url: 'express.adobe.com', desc: 'Adobe quality, free tier available. Better typography control than Canva.', tag: 'Free / Paid' },
                { name: 'Photoshop', url: 'adobe.com', desc: 'Professional standard. Essential for photo-based artwork.', tag: 'Paid' },
                { name: 'Figma', url: 'figma.com', desc: 'Best for illustration-based or graphic design artwork. Free tier available.', tag: 'Free / Paid' },
              ].map(t => (
                <div key={t.name} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>{t.name}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#5CB2DC', background: 'rgba(92,178,220,0.1)', padding: '2px 8px', borderRadius: 10 }}>{t.tag}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#8899AA', margin: 0, lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>FAQ: Cover Art for Music Distribution</h2>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 48px' }}>
              {[
                { q: 'What size should music cover art be?', a: '3000×3000 pixels minimum, saved as JPEG or PNG in RGB colour mode. This single spec works across every major platform — Spotify, JioSaavn, Apple Music, Amazon Music, Gaana and all others.' },
                { q: 'Can I use text on my album cover art?', a: 'Yes — artist name and track title are fine. You cannot include: streaming platform logos, social media handles, website URLs, pricing, or explicit content.' },
                { q: 'What format should music cover art be?', a: 'JPEG (.jpg) or PNG (.png). JPEG for photo-based artwork, PNG for designs with sharp edges or text. Avoid TIFF, BMP, GIF or WebP.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 10px' }}>{faq.q}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Ready to distribute? We check your artwork automatically.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Western Beats validates your cover art spec before submission — so you never get a platform rejection.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
