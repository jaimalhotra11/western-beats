import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Get Your Song on Gaana Free India 2026 — Gaana Distribution | Western Beats',
  description: 'Distribute your song to Gaana India free in 72 hours. Western Beats also covers JioSaavn, Spotify, Apple Music and 150+ more platforms — all in one free submission. No subscription needed.',
  keywords: [
    'Gaana distribution India free',
    'how to get song on Gaana India free',
    'upload music to Gaana India free',
    'Gaana music distribution India 2026',
    'free Gaana distribution India',
    'put song on Gaana India without paying',
    'Gaana distribution independent artist India',
    'how to distribute music Gaana India',
    'get on Gaana India free 2026',
    'Gaana music submission India free',
    'distribute music Gaana free',
    'Gaana upload song free India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/gaana-distribution' },
  openGraph: {
    title: 'Free Gaana Distribution India 2026 — Upload Your Song | Western Beats',
    description: 'Get on Gaana India free in 72 hours, plus JioSaavn, Spotify and 150+ more platforms. No subscription.',
    url: 'https://www.westernbeats.com/gaana-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Free Gaana Distribution India 2026 | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://www.westernbeats.com/gaana-distribution',
  name: 'Free Gaana Distribution India 2026',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Gaana Distribution', item: 'https://www.westernbeats.com/gaana-distribution' },
  ]},
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I get my song on Gaana India for free?', acceptedAnswer: { '@type': 'Answer', text: 'Submit at westernbeats.com/submit. Western Beats delivers your music to Gaana India (and 150+ other platforms) within 72 hours. Completely free — no subscription, no fee.' } },
    { '@type': 'Question', name: 'How much does Gaana pay per stream in India?', acceptedAnswer: { '@type': 'Answer', text: 'Gaana pays approximately ₹0.06–₹0.12 per stream for Indian listeners (~$0.001 USD). Use our free Royalty Calculator to estimate your Gaana earnings.' } },
    { '@type': 'Question', name: 'Does Western Beats distribute to Gaana AND JioSaavn?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. One submission distributes to both Gaana and JioSaavn — plus Spotify, Apple Music, Wynk, Hungama, Jio Caller Tune, and 143 more platforms simultaneously.' } },
    { '@type': 'Question', name: 'Does DistroKid distribute to Gaana?', acceptedAnswer: { '@type': 'Answer', text: 'No. DistroKid does not distribute to Gaana, JioSaavn, or any Indian streaming platform. For Gaana distribution, you need Western Beats — which is also free.' } },
    { '@type': 'Question', name: 'How many users does Gaana have?', acceptedAnswer: { '@type': 'Answer', text: 'Gaana has 200+ million monthly active users, making it the largest music streaming platform in India by user count. It is especially popular in Tier 2 and Tier 3 cities.' } },
  ],
}

export default function GaanaPage() {
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
              <li style={{ color: '#5CB2DC' }}>Gaana Distribution India</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(255,67,54,0.15)', border: '1px solid rgba(255,67,54,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#ff6b6b', marginBottom: 20 }}>Gaana Distribution</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Get Your Song on <span style={{ color: '#FF4336' }}>Gaana</span><br />India — Free in 72 Hours
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 640, lineHeight: 1.7, marginBottom: 36 }}>
            Western Beats distributes your music to Gaana India (200M+ users) — plus JioSaavn, Spotify, Apple Music, Jio Caller Tune and 147 more platforms, all in one free submission. No subscription.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#FF4336', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Submit to Gaana Free →</Link>
            <Link href="/royalty-calculator" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>Calculate Gaana Earnings</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '60px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
            {[{ stat: '200M+', lbl: 'Gaana Monthly Users' }, { stat: '#1', lbl: 'Largest Indian Platform' }, { stat: '72hrs', lbl: 'Go Live Speed' }, { stat: '₹0', lbl: 'Distribution Cost' }].map(s => (
              <div key={s.stat} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: '#FF4336' }}>{s.stat}</div>
                <div style={{ fontSize: 13, color: '#8899AA', marginTop: 6 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 40 }}>Gaana + Every Indian Platform. One Submission.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 16 }}>
            {['Gaana', 'JioSaavn', 'Spotify', 'Apple Music', 'YouTube Music', 'Wynk Music', 'Amazon Music', 'Hungama', 'Jio Caller Tune', 'Airtel Hello Tune'].map(p => (
              <div key={p} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '14px', textAlign: 'center', fontWeight: 600, color: 'white', fontSize: 13 }}>{p}</div>
            ))}
          </div>
          <p style={{ color: '#4A5568', textAlign: 'center', fontSize: 13, marginTop: 16 }}>+ 140 more platforms worldwide</p>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Why Gaana Matters for Indian Artists</h2>
            <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>Gaana has 200M+ monthly active users — more than any other streaming platform in India. It dominates Tier 2 and Tier 3 cities where JioSaavn and Spotify have less penetration. For Hindi, Bollywood, Bhojpuri, Haryanvi, and devotional music artists, Gaana is essential.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 40 }}>
              {[
                { title: '200M+ Users', desc: 'Largest music streaming platform in India by monthly active users' },
                { title: 'Tier 2 & 3 India', desc: 'Dominates in smaller cities where Spotify hasn\'t penetrated' },
                { title: 'Regional Friendly', desc: 'Strong Bhojpuri, Haryanvi, Devotional, and folk music listener base' },
                { title: 'CRBT Integration', desc: 'Gaana songs can be set as caller tunes on Airtel Hello Tune' },
              ].map(f => (
                <div key={f.title} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px' }}>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: 15, marginBottom: 6 }}>{f.title}</div>
                  <div style={{ color: '#4A5568', fontSize: 13, lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>Gaana Distribution FAQ</h2>
            {[
              { q: 'How do I get my song on Gaana India for free?', a: 'Submit at westernbeats.com/submit. Western Beats delivers your music to Gaana (and 150+ other platforms) within 72 hours. Completely free — no subscription, no fee.' },
              { q: 'How much does Gaana pay per stream?', a: 'Gaana pays approximately ₹0.06–₹0.12 per stream for Indian listeners. At 1 lakh streams, expect ₹6,000–₹12,000 from Gaana. Use our Royalty Calculator for detailed estimates.' },
              { q: 'Does DistroKid distribute to Gaana?', a: 'No. DistroKid does not distribute to Gaana, JioSaavn, or any Indian platform. Western Beats covers all Indian platforms including Gaana — and it\'s free.' },
              { q: 'Does Western Beats distribute to both Gaana and JioSaavn?', a: 'Yes. One submission covers both Gaana and JioSaavn — plus Spotify, Apple Music, Wynk, Hungama, Jio Caller Tune, and 143 more platforms simultaneously.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px', marginBottom: 16 }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Get on Gaana India in 72 Hours — Free</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>Plus JioSaavn, Spotify, Apple Music, Caller Tune, and 147 more. ₹0 forever.</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
          <div style={{ marginTop: 24, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/jiosaavn-distribution" style={{ color: '#5CB2DC', fontSize: 14 }}>JioSaavn Distribution →</Link>
            <Link href="/spotify-distribution" style={{ color: '#5CB2DC', fontSize: 14 }}>Spotify Distribution →</Link>
            <Link href="/royalty-calculator" style={{ color: '#5CB2DC', fontSize: 14 }}>Calculate Earnings →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
