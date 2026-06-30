import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Punjabi Music Distribution Free India 2026 — JioSaavn, Gaana, Spotify | Western Beats',
  description: 'Distribute your Punjabi songs free to JioSaavn, Gaana, Spotify, Apple Music, Jio Caller Tune and 150+ platforms in 72 hours. Western Beats is the best Punjabi music distribution platform in India.',
  keywords: [
    'Punjabi music distribution India free',
    'distribute Punjabi songs online free',
    'Punjabi music distribution JioSaavn',
    'Punjabi song distribution India 2026',
    'free Punjabi music distribution',
    'best Punjabi music distributor India',
    'upload Punjabi song JioSaavn free',
    'Punjabi music distribution Gaana',
    'distribute Punjabi music Spotify',
    'Punjabi singer music distribution India',
  ],
  alternates: { canonical: 'https://westernbeats.com/punjabi-music-distribution' },
  openGraph: {
    title: 'Punjabi Music Distribution Free — JioSaavn, Gaana, Caller Tune | Western Beats',
    description: 'Distribute Punjabi songs to 150+ platforms free in 72 hours. JioSaavn, Gaana, Spotify, Jio Caller Tune included.',
    url: 'https://westernbeats.com/punjabi-music-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Punjabi Music Distribution Free India | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://westernbeats.com/punjabi-music-distribution',
  name: 'Punjabi Music Distribution Free India 2026',
  description: 'Free Punjabi music distribution to JioSaavn, Gaana, Spotify and 150+ platforms in 72 hours.',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Punjabi Music Distribution', item: 'https://westernbeats.com/punjabi-music-distribution' },
  ]},
}

export default function PunjabiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', color: 'white' }}>
        <section style={{ padding: '120px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 28 }}>
            <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: '#4A5568', listStyle: 'none', padding: 0 }}>
              <li><Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>Punjabi Music Distribution</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(196,18,48,0.15)', border: '1px solid rgba(196,18,48,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#f87171', marginBottom: 20 }}>Punjabi Music</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Distribute Your <span style={{ color: '#C41230' }}>Punjabi Songs</span><br />to 150+ Platforms Free
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 640, lineHeight: 1.7, marginBottom: 36 }}>
            Punjabi music is India&apos;s fastest-growing genre on JioSaavn, Gaana, and Spotify. Western Beats distributes your Punjabi songs to every platform — including Jio Caller Tune and Airtel Hello Tune — completely free in 72 hours.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#C41230', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Distribute Your Punjabi Song Free →</Link>
            <Link href="/caller-tune-distribution" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>Caller Tune Distribution</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '60px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28 }}>
            {[
              { val: '18%', lbl: 'of India\'s Streaming' },
              { val: '+22%', lbl: 'YoY Growth' },
              { val: '#1', lbl: 'CRBT Genre India' },
              { val: '₹0', lbl: 'Distribution Cost' },
            ].map(s => (
              <div key={s.val} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: '#C41230' }}>{s.val}</div>
                <div style={{ fontSize: 14, color: '#8899AA', marginTop: 6 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 40 }}>Why Punjabi Artists Choose Western Beats</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { title: 'JioSaavn & Gaana Included', desc: 'Punjabi music dominates India\'s top streaming charts. Both JioSaavn (150M users) and Gaana (200M users) are included — most global distributors skip these.' },
              { title: 'Jio Caller Tune Free', desc: 'Punjabi songs are India\'s #1 caller tune genre. We include CRBT distribution to Jio, Airtel, Vi and BSNL — a major revenue stream no global distributor offers.' },
              { title: 'Warner Music India Partner', desc: 'Western Beats is an official Warner Music India Partner — giving your Punjabi releases major-label credibility, editorial consideration, and playlist access on Indian platforms.' },
              { title: '₹0 Forever', desc: 'No annual fee, no per-release charge. Distributors like DistroKid charge $22.99/year and skip JioSaavn. Western Beats is free and covers every platform.' },
              { title: '72 Hours Live', desc: 'Your Punjabi song goes live on all 150+ platforms within 72 hours of approval. Submit on Monday, live on Thursday.' },
              { title: 'All Sub-Genres', desc: 'Bhangra, Sufi, Desi Pop, Sad Punjabi, Party Punjabi — we support all Punjabi music sub-genres with accurate metadata categorisation.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                <div style={{ fontWeight: 700, color: 'white', fontSize: 16, marginBottom: 8 }}>{f.title}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>FAQ — Punjabi Music Distribution</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { q: 'Which platforms should Punjabi artists distribute to?', a: 'For maximum reach, Punjabi artists should distribute to JioSaavn, Gaana, Spotify, Apple Music, YouTube Music, Wynk, and Jio/Airtel Caller Tune. Western Beats covers all of these and 140+ more in one submission.' },
                { q: 'Is Punjabi music popular on caller tunes?', a: 'Extremely. Punjabi music is consistently India\'s #1 caller tune genre. CRBT revenue from Jio, Airtel and Vi can be significant for popular Punjabi tracks.' },
                { q: 'Can I submit Punjabi Bhangra, Sufi, or Desi Pop music?', a: 'Yes. Western Beats supports all Punjabi sub-genres. You select the sub-genre during submission and we apply accurate metadata across all platforms.' },
                { q: 'How long does it take for a Punjabi song to appear on JioSaavn?', a: 'After approval (within 24 hours), your Punjabi song is live on JioSaavn within 72 hours.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Distribute Your Punjabi Song — Free</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>JioSaavn + Gaana + Spotify + Caller Tune + 147 more. ₹0 forever. 72 hours.</p>
          <Link href="/submit" style={{ background: '#C41230', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Song Free →</Link>
          <div style={{ marginTop: 24, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/regional-music-distribution" style={{ color: '#5CB2DC', fontSize: 14 }}>Other Regional Music →</Link>
            <Link href="/caller-tune-distribution" style={{ color: '#5CB2DC', fontSize: 14 }}>Caller Tune Distribution →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
