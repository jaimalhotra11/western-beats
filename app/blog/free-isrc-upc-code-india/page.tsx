import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Free ISRC & UPC Codes for Independent Artists India 2026 | Western Beats',
  description: 'What are ISRC and UPC codes, why every song needs them before going on Spotify, JioSaavn or Apple Music, and how to get them completely free as an independent artist in India.',
  keywords: [
    'free ISRC code India',
    'ISRC code for independent artists India',
    'how to get ISRC code free India',
    'free UPC barcode music India',
    'what is ISRC code music',
    'ISRC code India 2026',
    'UPC code music distribution India',
    'free ISRC UPC code music',
    'ISRC code meaning music India',
    'music barcode free India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/free-isrc-upc-code-india' },
  openGraph: {
    title: 'Free ISRC & UPC Codes for Indian Artists 2026 | Western Beats',
    description: 'What ISRC and UPC codes are, why you need them, and how to get them free as an independent artist in India.',
    url: 'https://www.westernbeats.com/blog/free-isrc-upc-code-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Free ISRC & UPC Codes India 2026 | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Free ISRC & UPC Codes for Independent Artists in India — Everything You Need to Know',
      author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
      publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com', logo: { '@type': 'ImageObject', url: 'https://www.westernbeats.com/icon.png' } },
      datePublished: '2026-06-01', dateModified: '2026-06-21',
      url: 'https://www.westernbeats.com/blog/free-isrc-upc-code-india',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is an ISRC code?', acceptedAnswer: { '@type': 'Answer', text: 'ISRC stands for International Standard Recording Code. It is a unique 12-character code assigned to each individual sound recording or music video. It is the global standard for identifying music tracks on all streaming platforms.' } },
        { '@type': 'Question', name: 'What is a UPC code for music?', acceptedAnswer: { '@type': 'Answer', text: 'UPC stands for Universal Product Code. In music, a UPC (also called EAN) is a barcode assigned to an entire release (album, EP, or single). It identifies the release as a whole product, while ISRC identifies each individual track.' } },
        { '@type': 'Question', name: 'Do I need an ISRC code to distribute music in India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every song needs an ISRC code before it can be distributed to Spotify, JioSaavn, Apple Music, or any major streaming platform. Without an ISRC, platforms cannot properly track streams and you may not receive royalties correctly.' } },
        { '@type': 'Question', name: 'How do I get a free ISRC code in India?', acceptedAnswer: { '@type': 'Answer', text: 'The easiest way is to distribute through Western Beats, which assigns free ISRC codes and UPC barcodes to every release at no cost. These codes are yours permanently, even if you later switch distributors.' } },
        { '@type': 'Question', name: 'Can I use the same ISRC code on multiple platforms?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. An ISRC code is assigned once per recording and used across all platforms. The same ISRC code will appear on Spotify, JioSaavn, Apple Music, and all other platforms to identify the same recording.' } },
      ],
    },
  ],
}

const s = { color: '#8899AA', fontSize: 16, lineHeight: '1.8', marginBottom: 16 } as const
const h2 = { fontSize: 26, fontWeight: 800, color: 'white', marginTop: 48, marginBottom: 16 } as const
const li = { color: '#8899AA', fontSize: 15, lineHeight: '1.7', marginBottom: 8 } as const

export default function IsrcBlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', color: 'white' }}>
        <article style={{ maxWidth: 760, margin: '0 auto', padding: '120px 24px 80px' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: '#4A5568', listStyle: 'none', padding: 0, flexWrap: 'wrap' }}>
              <li><Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li><Link href="/blog" style={{ color: '#4A5568', textDecoration: 'none' }}>Blog</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>Free ISRC & UPC Codes India</li>
            </ol>
          </nav>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
            <span style={{ background: 'rgba(10,100,195,0.15)', color: '#5CB2DC', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '4px 12px', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>ISRC & UPC</span>
            <span style={{ fontSize: 13, color: '#4A5568' }}>June 2026 · 5 min read</span>
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Free ISRC & UPC Codes for Independent Artists in India 2026 — Everything You Need to Know
          </h1>
          <p style={{ ...s, fontSize: 18, color: '#aabbcc', borderLeft: '3px solid #0A64C3', paddingLeft: 20, marginBottom: 40 }}>
            Before your song can go live on Spotify, JioSaavn, or Apple Music, it needs two things: an ISRC code and a UPC barcode. Here is what they are, why you need them, and how to get both completely free in India.
          </p>

          <h2 style={h2}>What is an ISRC Code?</h2>
          <p style={s}>ISRC stands for <strong style={{ color: 'white' }}>International Standard Recording Code</strong>. It is a unique 12-character alphanumeric code that identifies a specific sound recording or music video globally.</p>
          <p style={s}>Think of it as a fingerprint for your song. No two songs have the same ISRC, and the same ISRC follows your song across every platform it appears on — Spotify, JioSaavn, Apple Music, Gaana, YouTube Music, and all others.</p>
          <p style={s}>An ISRC code looks like this: <strong style={{ color: 'white', fontFamily: 'monospace' }}>IN-WB1-26-00001</strong></p>
          <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
            <li style={li}><strong style={{ color: 'white' }}>IN</strong> — Country code (India)</li>
            <li style={li}><strong style={{ color: 'white' }}>WB1</strong> — Registrant code (assigned to the distributor or label)</li>
            <li style={li}><strong style={{ color: 'white' }}>26</strong> — Year of registration</li>
            <li style={li}><strong style={{ color: 'white' }}>00001</strong> — Unique designation number</li>
          </ul>

          <h2 style={h2}>What is a UPC Code?</h2>
          <p style={s}>UPC stands for <strong style={{ color: 'white' }}>Universal Product Code</strong>. In music, it is a barcode (also called EAN-13 in some regions) assigned to an entire release — a single, EP, or album — as a product.</p>
          <p style={s}>While ISRC identifies each track individually, UPC identifies the release as a whole. If you release a 10-track album, you will have one UPC for the album and 10 separate ISRC codes — one per track.</p>

          <h2 style={h2}>Why Do You Need ISRC and UPC Codes?</h2>
          <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
            <li style={li}><strong style={{ color: 'white' }}>Royalty tracking:</strong> Streaming platforms use ISRC codes to track exactly how many times your song is played and calculate your royalties accurately. Without an ISRC, streams may not be attributed to you correctly.</li>
            <li style={li}><strong style={{ color: 'white' }}>Platform acceptance:</strong> JioSaavn, Spotify, Apple Music, and all major platforms require ISRC codes before accepting a song for distribution. No ISRC = no distribution.</li>
            <li style={li}><strong style={{ color: 'white' }}>Content ID:</strong> YouTube uses ISRC codes to match your song when others upload it, enabling you to monetise covers and UGC (user-generated content) through YouTube Content ID.</li>
            <li style={li}><strong style={{ color: 'white' }}>Publishing royalties:</strong> Collection societies like PPL India and IPRS use ISRC codes to track public performance royalties — radio plays, hotel use, restaurant use, etc.</li>
            <li style={li}><strong style={{ color: 'white' }}>Permanent record:</strong> An ISRC code is yours permanently. Even if you move to a different distributor, the ISRC assigned to your recording stays with that recording forever.</li>
          </ul>

          <h2 style={h2}>How to Get a Free ISRC Code in India</h2>
          <p style={s}>There are two ways to get an ISRC code in India:</p>
          <p style={s}><strong style={{ color: 'white' }}>Option 1 — Through your distributor (easiest and free):</strong> When you distribute through Western Beats, free ISRC codes are assigned to every track automatically. You do not need to register anywhere or pay any fee. Western Beats handles it as part of the distribution process.</p>
          <p style={s}><strong style={{ color: 'white' }}>Option 2 — Register directly with IFPI India:</strong> As a label or registered entity, you can apply to IFPI (International Federation of the Phonographic Industry) for your own ISRC registrant code. This costs money and requires company registration. It makes sense only if you are running a label distributing many artists.</p>
          <p style={s}>For independent artists, Option 1 — getting free ISRC codes through Western Beats — is the correct and simplest path.</p>

          <h2 style={h2}>Do ISRC Codes Expire?</h2>
          <p style={s}>No. ISRC codes are permanent. Once assigned to a recording, they stay with that recording forever — across all platforms, all distributors, and all territories. Even if you change distributor or label years later, the ISRC code for that recording remains the same.</p>

          <h2 style={h2}>Can I Use One ISRC Code on Multiple Platforms?</h2>
          <p style={s}>Yes — and you must. The same ISRC code should be used on every platform where your song appears. Using different ISRC codes for the same song across platforms breaks royalty tracking and can lead to missed royalty payments.</p>

          <h2 style={h2}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 12 }}>
            {[
              { q: 'What is an ISRC code?', a: 'ISRC stands for International Standard Recording Code — a unique 12-character identifier for a specific sound recording used across all streaming platforms worldwide.' },
              { q: 'Do I need an ISRC code to distribute music in India?', a: 'Yes. Every song needs an ISRC code before distribution to Spotify, JioSaavn, Apple Music, or any major platform. Without it, royalties may not be tracked correctly.' },
              { q: 'How do I get a free ISRC code in India?', a: 'Distribute through Western Beats — we assign free ISRC codes and UPC barcodes to every release at no cost. These codes are yours permanently.' },
              { q: 'What is the difference between ISRC and UPC?', a: 'ISRC identifies each individual track (one per song). UPC identifies the entire release as a product (one per album, EP, or single). Both are needed for distribution.' },
              { q: 'Can I reuse an ISRC code?', a: 'No. Each unique recording gets its own ISRC code. You cannot reuse a code for a different song or a re-recorded version — a new recording, even of the same song, needs a new ISRC.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8, fontSize: 15 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>

          <div style={{ background: '#0A1535', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '36px', textAlign: 'center', marginTop: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Get Free ISRC & UPC Codes with Every Release</h2>
            <p style={{ color: '#8899AA', fontSize: 15, marginBottom: 24 }}>Submit your music to Western Beats — ISRC codes, UPC barcodes, and distribution to 150+ platforms, all free.</p>
            <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>Submit Your Music Free →</Link>
          </div>

          <div style={{ marginTop: 56 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Related Articles</h3>
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                { href: '/blog/how-to-distribute-music-india-free', title: 'How to Distribute Music in India for Free — Complete Guide' },
                { href: '/blog/caller-tune-crbt-distribution-india', title: 'Caller Tune & CRBT Distribution India Guide' },
                { href: '/royalties', title: 'How Royalties Work at Western Beats' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ color: '#0A64C3', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>→ {l.title}</Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
