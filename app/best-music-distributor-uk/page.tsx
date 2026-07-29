import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Best Music Distributor for UK Artists 2026 — Free | Western Beats',
  description: 'Free music distribution for UK artists and South Asian diaspora in the UK. Get on Spotify, Apple Music, Amazon Music, JioSaavn and 150+ platforms. 100% royalties, no annual fee.',
  keywords: [
    'best music distributor UK 2026', 'free music distribution UK', 'music distributor UK independent artists',
    'distribute music UK free', 'South Asian music distribution UK', 'Bollywood music distribution UK',
    'Indian music distribution UK', 'British Indian artist music distribution', 'music distribution UK no fee',
    'get music on Spotify UK free', 'independent artist UK music distribution',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/best-music-distributor-uk' },
  openGraph: {
    title: 'Best Music Distributor for UK Artists 2026 — Free | Western Beats',
    description: 'Free distribution to Spotify, Apple Music, Amazon Music and 150+ platforms for UK artists. 100% royalties, no annual fee.',
    url: 'https://www.westernbeats.com/best-music-distributor-uk',
    siteName: 'Western Beats', type: 'website', locale: 'en_GB',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Best Music Distributor UK 2026 | Western Beats' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can UK artists use Western Beats for free music distribution?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats is completely free for artists worldwide including the UK. No annual fee, no per-release fee, no commission on royalties. UK artists get distribution to Spotify, Apple Music, Amazon Music and 150+ platforms.' } },
    { '@type': 'Question', name: 'Does Western Beats distribute to JioSaavn for UK-based Indian artists?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats is the only free distributor that includes JioSaavn, Gaana and Jio Caller Tune — essential for British Indian and South Asian artists reaching audiences back home in India.' } },
    { '@type': 'Question', name: 'How long does music distribution take for UK artists?', acceptedAnswer: { '@type': 'Answer', text: 'Your music goes live on all 150+ platforms within 72 hours of submission. This applies to UK artists the same as all other regions.' } },
  ],
}

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  hero: { background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '120px 24px 64px', textAlign: 'center' as const },
  badge: { display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC', marginBottom: 20 },
  h1: { fontSize: 'clamp(30px,5vw,52px)', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.1 },
  lead: { fontSize: 18, color: '#8899AA', maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.7 },
  body: { maxWidth: 860, margin: '0 auto', padding: '0 24px 80px' },
  h2: { fontSize: 30, fontWeight: 800, margin: '56px 0 16px' },
  p: { fontSize: 16, color: '#8899AA', lineHeight: 1.8, margin: '0 0 20px' },
  card: { background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px', margin: '16px 0' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16, margin: '24px 0' },
  statCard: { background: '#060C18', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 16, padding: '24px', textAlign: 'center' as const },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 16, fontWeight: 700, textDecoration: 'none', marginTop: 32 },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <div style={S.page}>
        <Nav />
        <header style={S.hero}>
          <div style={S.badge}>🇬🇧 United Kingdom</div>
          <h1 style={S.h1}>Best Free Music Distributor<br />for UK Artists in 2026</h1>
          <p style={S.lead}>Whether you're an independent UK artist or part of Britain's 1.5 million South Asian music community — distribute to Spotify, Apple Music, JioSaavn and 150+ platforms free.</p>
          <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
        </header>

        <div style={S.body}>
          <div style={S.grid}>
            {[
              { n: '150+', l: 'Platforms Worldwide' },
              { n: '£0', l: 'Forever — No Annual Fee' },
              { n: '100%', l: 'Royalties to You' },
              { n: '72hrs', l: 'To Go Live' },
            ].map(({ n, l }) => (
              <div key={l} style={S.statCard}>
                <p style={{ fontSize: 32, fontWeight: 900, color: '#5CB2DC', margin: '0 0 6px' }}>{n}</p>
                <p style={{ fontSize: 13, color: '#8899AA', margin: 0 }}>{l}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Why UK Artists Choose Western Beats</h2>
          <p style={S.p}>The UK music market is one of the most competitive in the world. Getting your music on every platform — from Spotify and Apple Music to Amazon Music and YouTube Music — is non-negotiable. Western Beats delivers to all of them for free, with no subscription and no commission.</p>
          <p style={S.p}>For British Indian, Pakistani, Bangladeshi and South Asian artists, Western Beats offers something no other distributor does: simultaneous distribution to JioSaavn, Gaana and Jio Caller Tune alongside every global platform. Reach your UK audience and your South Asian audience back home in a single submission.</p>

          <h2 style={S.h2}>What UK Artists Get — All Free</h2>
          {[
            { t: 'Spotify UK + Global', d: 'Your music on Spotify reaches UK listeners instantly. Track streams via Spotify for Artists.' },
            { t: 'Apple Music UK', d: 'Apple Music has a significant UK subscriber base. Western Beats gets you on the platform within 72 hours.' },
            { t: 'Amazon Music UK', d: 'Amazon Prime subscribers in the UK get access to your music through Amazon Music at no extra cost to them.' },
            { t: 'JioSaavn & Gaana (South Asian Diaspora)', d: 'Reach Indian listeners in India AND the UK diaspora simultaneously. No other distributor offers this for free.' },
            { t: 'Free ISRC & UPC Codes', d: 'Every track gets a free ISRC code and every release gets a free UPC — required by all platforms, provided free.' },
            { t: '100% Royalties via PayPal or Bank Transfer', d: 'All royalties earned from UK streams go to you in full. We take zero commission.' },
          ].map(({ t, d }) => (
            <div key={t} style={S.card}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>✓ {t}</p>
              <p style={{ ...S.p, margin: 0 }}>{d}</p>
            </div>
          ))}

          <h2 style={S.h2}>Western Beats vs DistroKid for UK Artists</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14, margin: '16px 0' }}>
              <thead>
                <tr>{['Feature', 'DistroKid', 'Western Beats'].map(h => <th key={h} style={{ background: '#0A1535', color: '#5CB2DC', padding: '12px 16px', textAlign: 'left' as const, borderBottom: '2px solid rgba(10,100,195,0.3)' }}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {[
                  ['Annual Fee', '$22.99/yr', '£0 forever'],
                  ['Spotify', '✓', '✓'],
                  ['Apple Music', '✓', '✓'],
                  ['Amazon Music', '✓', '✓'],
                  ['JioSaavn (India)', '✗ Not available', '✓ Included'],
                  ['Gaana (India)', '✗ Not available', '✓ Included'],
                  ['Jio Caller Tune', '✗ No', '✓ Yes'],
                  ['Royalty %', '100% (after fee)', '100% always'],
                  ['Warner Music Backed', '✗', '✓'],
                ].map(([f, dk, wb], i) => (
                  <tr key={i}>
                    <td style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#E2E8F0', fontWeight: 600 }}>{f}</td>
                    <td style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: dk.startsWith('✗') ? '#F87171' : '#CBD5E1' }}>{dk}</td>
                    <td style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#34D399', fontWeight: 600 }}>{wb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Frequently Asked Questions</h2>
          {[
            ['Can UK artists use Western Beats for free?', 'Yes. Western Beats is completely free for artists worldwide including the UK — no annual fee, no per-release fee, no commission.'],
            ['Does Western Beats distribute to JioSaavn for UK-based Indian artists?', 'Yes. This is Western Beats\' biggest advantage for South Asian UK artists — JioSaavn, Gaana and Jio Caller Tune distribution included free, alongside every global platform.'],
            ['How long does distribution take for UK artists?', 'Your music goes live on all 150+ platforms within 72 hours of submission.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ ...S.card, marginTop: 12 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>{q}</p>
              <p style={{ ...S.p, margin: 0 }}>{a}</p>
            </div>
          ))}

          <div style={{ textAlign: 'center' as const, marginTop: 48 }}>
            <Link href="/sign-up" style={S.cta}>Distribute Free — UK Artists Welcome →</Link>
          </div>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ ...S.p, fontSize: 14 }}>Related: <Link href="/best-music-distributor-usa" style={{ color: '#5CB2DC' }}>USA</Link> · <Link href="/best-music-distributor-canada" style={{ color: '#5CB2DC' }}>Canada</Link> · <Link href="/best-music-distributor-australia" style={{ color: '#5CB2DC' }}>Australia</Link> · <Link href="/best-music-distributor-uae" style={{ color: '#5CB2DC' }}>UAE</Link> · <Link href="/compare/distrokid-vs-western-beats" style={{ color: '#5CB2DC' }}>DistroKid vs Western Beats</Link></p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
