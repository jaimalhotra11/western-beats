import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Get Your Song on Apple Music Free India 2026 | Western Beats',
  description: 'Distribute your song to Apple Music India free in 72 hours. Western Beats covers Apple Music, JioSaavn, Gaana, Spotify and 150+ platforms — one free submission, no subscription needed.',
  keywords: [
    'Apple Music distribution India free',
    'how to get song on Apple Music India',
    'upload music to Apple Music India free',
    'Apple Music distribution India 2026',
    'free Apple Music distribution India',
    'put song on Apple Music India free',
    'Apple Music independent artist India',
    'how to distribute music Apple Music India',
    'get on Apple Music India free',
    'Apple Music submission India free',
    'Apple Music royalty rate India',
    'how much Apple Music pays per stream India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/apple-music-distribution' },
  openGraph: {
    title: 'Free Apple Music Distribution India 2026 — Upload Your Song | Western Beats',
    description: 'Get on Apple Music India free in 72 hours, plus JioSaavn, Gaana, Spotify and 150+ more. No subscription.',
    url: 'https://www.westernbeats.com/apple-music-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Free Apple Music Distribution India 2026 | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://www.westernbeats.com/apple-music-distribution',
  name: 'Free Apple Music Distribution India 2026',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Apple Music Distribution', item: 'https://www.westernbeats.com/apple-music-distribution' },
  ]},
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I get my song on Apple Music India for free?', acceptedAnswer: { '@type': 'Answer', text: 'Submit at westernbeats.com/submit. Western Beats delivers your music to Apple Music India (and 150+ other platforms) within 72 hours. Completely free — no Apple Music for Artists fee, no subscription.' } },
    { '@type': 'Question', name: 'How much does Apple Music pay per stream in India?', acceptedAnswer: { '@type': 'Answer', text: 'Apple Music pays approximately ₹0.35–₹0.50 per stream ($0.004–$0.006 USD) — the highest per-stream rate of any major platform. Apple Music only has premium subscribers, so every stream pays at the premium rate.' } },
    { '@type': 'Question', name: 'Do I need to pay Apple Music for Artists?', acceptedAnswer: { '@type': 'Answer', text: 'No. You do not need to pay anything to get on Apple Music. Western Beats handles distribution to Apple Music as part of your free submission. After your song is live, you can claim your Apple Music for Artists profile for free to access analytics.' } },
    { '@type': 'Question', name: 'Why does Apple Music pay more than Spotify?', acceptedAnswer: { '@type': 'Answer', text: 'Apple Music pays more because it has zero free-tier users — every listener is a paying subscriber. Spotify has many free-tier users who generate much lower royalties per stream.' } },
    { '@type': 'Question', name: 'Does Western Beats distribute to Apple Music AND JioSaavn?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. One submission covers both Apple Music and JioSaavn — plus Gaana, Spotify, Wynk, Hungama, Jio Caller Tune, and 143 more platforms simultaneously.' } },
  ],
}

export default function AppleMusicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', color: 'white' }}>
        <section style={{ padding: '120px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 28 }}>
            <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: '#4A5568', listStyle: 'none', padding: 0 }}>
              <li><Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>Apple Music Distribution India</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(252,60,96,0.12)', border: '1px solid rgba(252,60,96,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#fc3c60', marginBottom: 20 }}>Apple Music</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Get Your Song on <span style={{ color: '#fc3c60' }}>Apple Music</span><br />India — Free in 72 Hours
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 640, lineHeight: 1.7, marginBottom: 16 }}>
            Apple Music pays the highest per-stream rate of any platform — ₹0.35–₹0.50 per stream. Western Beats gets your music on Apple Music India free, plus JioSaavn, Gaana, Spotify, and 147 more platforms in one submission.
          </p>
          <div style={{ display: 'inline-block', background: 'rgba(252,60,96,0.1)', border: '1px solid rgba(252,60,96,0.2)', borderRadius: 10, padding: '10px 18px', fontSize: 14, color: '#fc3c60', fontWeight: 700, marginBottom: 32 }}>
            Apple Music pays ₹0.35–₹0.50/stream — highest of all platforms
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#fc3c60', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Submit to Apple Music Free →</Link>
            <Link href="/royalty-calculator" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>Calculate Apple Music Earnings</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '60px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
            {[{ stat: '₹0.42', lbl: 'Avg per Stream (highest)' }, { stat: '0', lbl: 'Free-tier users (all premium)' }, { stat: '72hrs', lbl: 'Go Live Speed' }, { stat: '₹0', lbl: 'Distribution Cost' }].map(s => (
              <div key={s.stat} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: '#fc3c60' }}>{s.stat}</div>
                <div style={{ fontSize: 13, color: '#8899AA', marginTop: 6 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Why Apple Music Pays the Most</h2>
          <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, maxWidth: 700, marginBottom: 40 }}>Apple Music has no free tier — every user is a paying subscriber. This means every stream generates a premium royalty. Compare: Spotify free-tier streams pay as little as ₹0.01, while Apple Music always pays ₹0.35+.</p>
          <div style={{ overflowX: 'auto', marginBottom: 40 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#0A64C3', color: 'white' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Platform</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right' }}>Per Stream (INR)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right' }}>1 Lakh Streams</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right' }}>Free Tier?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Apple Music', '₹0.35–₹0.50', '₹35,000–₹50,000', '❌ No'],
                  ['Spotify', '₹0.08–₹0.25', '₹8,000–₹25,000', '✅ Yes'],
                  ['JioSaavn', '₹0.08–₹0.15', '₹8,000–₹15,000', '✅ Yes'],
                  ['Gaana', '₹0.06–₹0.12', '₹6,000–₹12,000', '✅ Yes'],
                  ['Amazon Music', '₹0.30–₹0.40', '₹30,000–₹40,000', '❌ No'],
                ].map(([platform, rate, lakh, free], i) => (
                  <tr key={platform} style={{ background: i === 0 ? 'rgba(252,60,96,0.08)' : i % 2 === 0 ? '#0A1535' : '#060D1F' }}>
                    <td style={{ padding: '12px 16px', color: 'white', fontWeight: i === 0 ? 700 : 400 }}>{platform}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', color: i === 0 ? '#fc3c60' : '#5CB2DC', fontWeight: i === 0 ? 800 : 400 }}>{rate}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', color: '#4A5568' }}>{lakh}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', color: '#4A5568' }}>{free}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>Apple Music Distribution FAQ</h2>
          {[
            { q: 'How do I get my song on Apple Music India for free?', a: 'Submit at westernbeats.com/submit. Western Beats delivers to Apple Music India within 72 hours. No Apple Music for Artists account needed beforehand. Completely free.' },
            { q: 'How much does Apple Music pay per stream in India?', a: 'Apple Music pays ₹0.35–₹0.50 per stream — the highest of any major platform. This is because Apple Music has no free tier; every listener is a paying subscriber.' },
            { q: 'Do I need to pay Apple Music for Artists?', a: 'No. Getting on Apple Music costs nothing. Western Beats handles distribution free. After going live, you can claim your Apple Music for Artists profile (also free) for analytics.' },
            { q: 'Why should I distribute to Apple Music if it has fewer users in India?', a: 'Apple Music pays 3–5x more per stream than JioSaavn or Gaana. Even with fewer Indian users, the revenue per stream is significantly higher. Distribute to all platforms simultaneously — it\'s one submission.' },
          ].map(faq => (
            <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px', marginBottom: 16 }}>
              <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
              <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
            </div>
          ))}
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Get on Apple Music India — Free</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>Highest royalties. Plus JioSaavn, Gaana, Spotify and 147 more. ₹0 forever.</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
          <div style={{ marginTop: 24, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/spotify-distribution" style={{ color: '#5CB2DC', fontSize: 14 }}>Spotify Distribution →</Link>
            <Link href="/gaana-distribution" style={{ color: '#5CB2DC', fontSize: 14 }}>Gaana Distribution →</Link>
            <Link href="/royalty-calculator" style={{ color: '#5CB2DC', fontSize: 14 }}>Royalty Calculator →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
