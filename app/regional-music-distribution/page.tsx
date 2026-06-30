import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Regional Music Distribution India Free 2026 — Bhojpuri, Haryanvi, Tamil, Telugu | Western Beats',
  description: 'Distribute regional Indian music free — Bhojpuri, Haryanvi, Tamil, Telugu, Malayalam, Kannada, Bengali, Marathi and all Indian languages to 150+ platforms in 72 hours.',
  keywords: [
    'regional music distribution India free',
    'Bhojpuri music distribution India',
    'Haryanvi music distribution India free',
    'Tamil music distribution India free',
    'Telugu music distribution India',
    'Malayalam music distribution India',
    'Kannada music distribution India',
    'Bengali music distribution India',
    'Marathi music distribution India',
    'regional language music distribution',
    'distribute regional music India 2026',
    'Indian regional music distribution platform',
  ],
  alternates: { canonical: 'https://westernbeats.com/regional-music-distribution' },
  openGraph: {
    title: 'Regional Music Distribution India Free — Bhojpuri, Haryanvi, Tamil & More | Western Beats',
    description: 'Distribute Bhojpuri, Haryanvi, Tamil, Telugu, Malayalam and all regional Indian music free to 150+ platforms.',
    url: 'https://westernbeats.com/regional-music-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Regional Music Distribution India Free | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://westernbeats.com/regional-music-distribution',
  name: 'Regional Music Distribution India Free 2026',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Regional Music Distribution', item: 'https://westernbeats.com/regional-music-distribution' },
  ]},
}

const LANGUAGES = [
  { lang: 'Punjabi', growth: '+22% YoY', note: 'Bhangra, Sufi, Desi Pop, Sad Punjabi', link: '/punjabi-music-distribution' },
  { lang: 'Bhojpuri', growth: '+30% YoY', note: 'Bhojpuri Film, Folk, Dance — fastest growing regional genre', link: null },
  { lang: 'Haryanvi', growth: '+35% YoY', note: 'Haryanvi Dance, Folk, Sad — highest YoY growth in India', link: null },
  { lang: 'Tamil', growth: '+15% YoY', note: 'Kollywood Film, Tamil Folk, Tamil Pop', link: null },
  { lang: 'Telugu', growth: '+18% YoY', note: 'Tollywood Film, Telugu Folk, Telugu Pop', link: null },
  { lang: 'Malayalam', growth: '+12% YoY', note: 'Mollywood Film, Malayalam Folk, Indie', link: null },
  { lang: 'Kannada', growth: '+14% YoY', note: 'Sandalwood Film, Kannada Folk', link: null },
  { lang: 'Bengali', growth: '+10% YoY', note: 'Bengali Film, Rabindra Sangeet, Baul', link: null },
  { lang: 'Marathi', growth: '+13% YoY', note: 'Marathi Film, Lavani, Folk', link: null },
  { lang: 'Gujarati', growth: '+11% YoY', note: 'Garba, Gujarati Pop, Devotional', link: null },
  { lang: 'Devotional', growth: '+8% YoY', note: 'Bhajan, Aarti, Kirtan, Qawwali, Mantra', link: null },
]

export default function RegionalPage() {
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
              <li style={{ color: '#5CB2DC' }}>Regional Music Distribution</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>All Indian Languages</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Regional Music Distribution<br /><span style={{ color: '#0A64C3' }}>India — All Languages Free</span>
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 660, lineHeight: 1.7, marginBottom: 36 }}>
            Bhojpuri. Haryanvi. Tamil. Telugu. Malayalam. Kannada. Bengali. Marathi. Whatever language you sing in, Western Beats distributes your music to 150+ platforms free in 72 hours — including JioSaavn, Gaana, and Jio Caller Tune.
          </p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Distribute Your Music Free →</Link>
        </section>

        <section style={{ background: '#060C18', padding: '60px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {[{ stat: '11+', lbl: 'Indian Languages Supported' }, { stat: '40%', lbl: 'India Streams are Regional' }, { stat: '+25%', lbl: 'Avg. YoY Growth' }, { stat: '₹0', lbl: 'Distribution Cost' }].map(s => (
              <div key={s.stat} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: '#0A64C3' }}>{s.stat}</div>
                <div style={{ fontSize: 14, color: '#8899AA', marginTop: 6 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>All Indian Regional Languages — Supported</h2>
          <p style={{ color: '#8899AA', fontSize: 15, marginBottom: 36 }}>Regional music is the fastest-growing segment of India&apos;s streaming market. Haryanvi (+35% YoY) and Bhojpuri (+30% YoY) are growing faster than Bollywood.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {LANGUAGES.map(l => (
              <div key={l.lang} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ fontWeight: 800, color: 'white', fontSize: 18 }}>{l.lang}</div>
                  <span style={{ background: 'rgba(92,178,220,0.15)', color: '#5CB2DC', borderRadius: 8, padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>{l.growth}</span>
                </div>
                <div style={{ color: '#8899AA', fontSize: 13, lineHeight: 1.6, marginBottom: l.link ? 12 : 0 }}>{l.note}</div>
                {l.link && <Link href={l.link} style={{ color: '#0A64C3', fontSize: 13, fontWeight: 600 }}>Dedicated page →</Link>}
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Your Language. Your Music. Free Distribution.</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>150+ platforms · 72 hours · ₹0 · 100% ownership · Warner Music India Partner</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
