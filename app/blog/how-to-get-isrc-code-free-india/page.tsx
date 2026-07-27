import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'How to Get Free ISRC Code in India 2026 — Step-by-Step Guide | Western Beats',
  description: 'Get a free ISRC code for your music in India in 2026. ISRC codes are required for Spotify, JioSaavn, Apple Music and all streaming platforms. Western Beats assigns them free with every release.',
  keywords: [
    'how to get ISRC code free India',
    'free ISRC code India 2026',
    'ISRC code India music',
    'get ISRC code India free',
    'ISRC code for Indian songs',
    'music ISRC code India',
    'free ISRC code Spotify India',
    'ISRC code JioSaavn India',
    'what is ISRC code music India',
    'ISRC UPC code free India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-to-get-isrc-code-free-india' },
  openGraph: {
    title: 'How to Get a Free ISRC Code in India 2026 | Western Beats',
    description: 'ISRC codes are required for every streaming platform. Get yours free — Western Beats assigns a unique ISRC code to every track at zero cost.',
    url: 'https://www.westernbeats.com/blog/how-to-get-isrc-code-free-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'How to Get Free ISRC Code India 2026 | Western Beats' },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get a Free ISRC Code in India 2026',
  description: 'Step-by-step guide to getting a free ISRC code for your music in India. ISRC codes are required for all streaming platforms.',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', logo: { '@type': 'ImageObject', url: 'https://www.westernbeats.com/logo.png' } },
  datePublished: '2026-07-11',
  dateModified: '2026-07-11',
  url: 'https://www.westernbeats.com/blog/how-to-get-isrc-code-free-india',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an ISRC code?',
      acceptedAnswer: { '@type': 'Answer', text: 'ISRC stands for International Standard Recording Code. It is a unique 12-character code assigned to each music recording. Every song needs an ISRC code to be distributed to streaming platforms like Spotify, JioSaavn, Apple Music and YouTube Music.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get a free ISRC code in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'The easiest way to get a free ISRC code in India is through Western Beats. When you submit a song through Western Beats, we automatically assign a free ISRC code to every track. You can also apply through PPL India (Phonographic Performance Limited) but this involves a registration process and fees.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a separate ISRC for every song?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every individual recording needs its own unique ISRC code. If you release a single with 3 tracks, each track gets its own ISRC. Western Beats assigns a free ISRC to every track you submit.' },
    },
    {
      '@type': 'Question',
      name: 'What is a UPC barcode for music?',
      acceptedAnswer: { '@type': 'Answer', text: 'UPC (Universal Product Code) is assigned to the album or release as a whole, while ISRC is assigned to each individual track. Both are required for music distribution. Western Beats provides both free of charge.' },
    },
  ],
}

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  hero: { background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '120px 24px 60px', textAlign: 'center' as const },
  badge: { display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC', marginBottom: 20 },
  h1: { fontSize: 'clamp(28px,5vw,46px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.15 },
  lead: { fontSize: 18, color: '#8899AA', maxWidth: 640, margin: '0 auto 32px', lineHeight: 1.7 },
  body: { maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' },
  h2: { fontSize: 28, fontWeight: 800, margin: '48px 0 16px', color: '#fff' },
  p: { fontSize: 16, color: '#8899AA', lineHeight: 1.8, margin: '0 0 20px' },
  card: { background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px', margin: '16px 0' },
  codeBox: { background: '#0A1535', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 12, padding: '20px 24px', margin: '16px 0', fontFamily: 'monospace', fontSize: 18, color: '#5CB2DC', textAlign: 'center' as const, letterSpacing: 4 },
  cta: { display: 'block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 32px', fontSize: 16, fontWeight: 700, textAlign: 'center' as const, textDecoration: 'none', margin: '40px auto 0', maxWidth: 340 },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <div style={S.page}>
        <Nav />
        <header style={S.hero}>
          <div style={S.badge}>Guide 2026</div>
          <h1 style={S.h1}>How to Get a Free ISRC Code<br />in India in 2026</h1>
          <p style={S.lead}>ISRC codes are required by every streaming platform. Here's exactly what they are, why you need one, and how to get yours free in under 5 minutes.</p>
          <p style={{ fontSize: 13, color: '#4A5568' }}>Last updated: July 2026 · 5 min read</p>
        </header>

        <article style={S.body}>
          <h2 style={S.h2}>What is an ISRC Code?</h2>
          <p style={S.p}>ISRC stands for <strong style={{ color: '#E2E8F0' }}>International Standard Recording Code</strong>. It is a unique 12-character identifier assigned to each individual music recording. Think of it like a fingerprint or Aadhaar number for your song.</p>
          <div style={S.codeBox}>IN-WB1-26-00001</div>
          <p style={{ ...S.p, fontSize: 14, textAlign: 'center' as const, marginTop: -8 }}>Example ISRC format: Country Code · Registrant · Year · Designation</p>
          <p style={S.p}>Every platform — Spotify, JioSaavn, Apple Music, Gaana, YouTube Music — requires an ISRC code before they will accept your track. Without it, your music simply cannot be distributed.</p>

          <h2 style={S.h2}>ISRC vs UPC: What's the Difference?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '16px 0' }}>
            {[
              { title: 'ISRC Code', desc: 'Assigned to each individual track. If your single has 3 songs, each gets its own ISRC.', color: '#5CB2DC' },
              { title: 'UPC Barcode', desc: 'Assigned to the release (album or single) as a whole. One UPC per release, regardless of track count.', color: '#34D399' },
            ].map(({ title, desc, color }) => (
              <div key={title} style={{ ...S.card, borderColor: color + '33' }}>
                <p style={{ fontSize: 15, fontWeight: 700, color, margin: '0 0 8px' }}>{title}</p>
                <p style={{ ...S.p, margin: 0, fontSize: 14 }}>{desc}</p>
              </div>
            ))}
          </div>
          <p style={S.p}>Western Beats gives you both — a free ISRC for every track and a free UPC for every release.</p>

          <h2 style={S.h2}>How to Get a Free ISRC Code in India</h2>
          <p style={S.p}>There are two main ways to get an ISRC code in India:</p>

          <div style={S.card}>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#34D399', margin: '0 0 8px' }}>Option 1: Through Western Beats (Free, Instant)</p>
            <p style={{ ...S.p, margin: 0 }}>When you submit a song through Western Beats, we automatically assign a unique ISRC code to every track at zero cost. You don't need to apply anywhere or fill any forms. The ISRC is generated and embedded in your release automatically.</p>
          </div>

          <div style={S.card}>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#8899AA', margin: '0 0 8px' }}>Option 2: Apply Directly to PPL India (Complex, Fees Apply)</p>
            <p style={{ ...S.p, margin: 0 }}>You can apply for ISRC codes directly through PPL India (Phonographic Performance Limited). However, this requires becoming a PPL member (fees: ₹5,000–₹50,000 depending on category), submitting documentation, and waiting for approval. Not recommended for independent artists when a free alternative exists.</p>
          </div>

          <h2 style={S.h2}>Step-by-Step: Get Your Free ISRC via Western Beats</h2>
          {[
            { n: '1', t: 'Sign up free', d: 'Create a free account at westernbeats.com/sign-up. Just your email — verified instantly via OTP.' },
            { n: '2', t: 'Go to Submit', d: 'Navigate to westernbeats.com/submit. Fill in your release details: song title, artist name, genre, language, release date.' },
            { n: '3', t: 'Upload your track', d: 'Upload your audio file (WAV or MP3, minimum 320kbps) and cover art (3000×3000px, JPG or PNG).' },
            { n: '4', t: 'ISRC assigned automatically', d: 'Western Beats assigns a unique ISRC code to your track. You receive it in your confirmation email within 24 hours.' },
            { n: '5', t: 'Go live in 72 hours', d: 'Your song — with its ISRC embedded — goes live on JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms.' },
          ].map(({ n, t, d }) => (
            <div key={n} style={{ ...S.card, display: 'flex', gap: 20, alignItems: 'flex-start' as const, marginTop: 12 }}>
              <div style={{ background: '#0A64C3', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center' as const, justifyContent: 'center' as const, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>{n}</div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>{t}</p>
                <p style={{ ...S.p, margin: 0 }}>{d}</p>
              </div>
            </div>
          ))}

          <h2 style={S.h2}>Why ISRC Codes Matter for Your Royalties</h2>
          <p style={S.p}>ISRC codes are how streaming platforms track your streams and calculate your royalties. If your song is on JioSaavn without an ISRC, the plays may not be attributed to you correctly. A missing or incorrect ISRC can mean lost royalties — money that gets unclaimed and stays with the platform.</p>
          <p style={S.p}>Western Beats ensures every track gets a correctly formatted ISRC before going live, protecting your royalty earnings from day one.</p>

          <h2 style={S.h2}>Frequently Asked Questions</h2>
          {[
            ['What is an ISRC code?', 'An ISRC (International Standard Recording Code) is a 12-character unique identifier for each music recording. Required by all streaming platforms to track streams and pay royalties.'],
            ['How do I get a free ISRC code in India?', 'Submit your song through Western Beats. We assign a free ISRC to every track automatically — no forms, no fees, no waiting.'],
            ['Do I need a separate ISRC for every song?', 'Yes. Each track needs its own unique ISRC. Western Beats assigns free ISRCs to every track in your release.'],
            ['What is a UPC barcode for music?', 'UPC is assigned to the release as a whole (album or single), while ISRC is per track. Both are required and both are free with Western Beats.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ ...S.card, marginTop: 12 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>{q}</p>
              <p style={{ ...S.p, margin: 0 }}>{a}</p>
            </div>
          ))}

          <Link href="/sign-up" style={S.cta}>Get Free ISRC with Western Beats →</Link>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ ...S.p, fontSize: 14 }}>Related: <Link href="/free-isrc-codes" style={{ color: '#5CB2DC' }}>Free ISRC Codes Page</Link> · <Link href="/blog/free-isrc-upc-code-india" style={{ color: '#5CB2DC' }}>Free ISRC & UPC India Guide</Link> · <Link href="/free-music-distribution-india" style={{ color: '#5CB2DC' }}>Free Music Distribution India</Link></p>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
