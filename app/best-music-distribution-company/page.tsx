import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Best Music Distribution Company 2026',
  description: 'Free distribution to 150+ platforms worldwide — Spotify, Apple Music, Amazon Music & more. 100% ownership, no upfront cost, any country.',
  keywords: [
    'best music distribution company',
    'best music distribution company 2026',
    'best music distributor worldwide',
    'best global music distribution company',
    'free music distribution company',
    'top music distribution platform 2026',
    'music distribution company for independent artists',
    'best music distributor for international artists',
    'free music distribution worldwide',
    'distribute music to all platforms free',
    'best online music distribution service',
    'music distribution company comparison 2026',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/best-music-distribution-company' },
  openGraph: {
    title: 'Best Music Distribution Company 2026 — Free, 150+ Platforms | Western Beats',
    description: 'Free distribution to 150+ platforms worldwide. 100% ownership. No upfront cost. Artists from any country welcome.',
    url: 'https://www.westernbeats.com/best-music-distribution-company',
    siteName: 'Western Beats', type: 'website', locale: 'en_US',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Best Music Distribution Company 2026 | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://www.westernbeats.com/best-music-distribution-company',
  name: 'Best Music Distribution Company 2026',
  description: 'Western Beats is a free, global music distribution company reaching 150+ platforms with 100% ownership for independent artists worldwide.',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Best Music Distribution Company', item: 'https://www.westernbeats.com/best-music-distribution-company' },
  ]},
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best music distribution company in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Western Beats is a top choice for independent artists in 2026: free distribution to 150+ platforms including Spotify, Apple Music, Amazon Music, and YouTube Music, 100% ownership of your masters, and no upfront cost. Artists from any country can submit music.' } },
    { '@type': 'Question', name: 'Can artists outside India use Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes to global platforms available worldwide — Spotify, Apple Music, Amazon Music, YouTube Music, Deezer, Tidal and more — so artists anywhere can submit and reach fans in their market. We are actively onboarding artists from the USA, Canada, Australia, the UAE, and 100+ other countries.' } },
    { '@type': 'Question', name: 'Is Western Beats really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. There is no upfront fee, no per-release charge, and no annual renewal to keep your music live. Western Beats only earns when you earn, so the incentives are aligned with the artist from day one.' } },
    { '@type': 'Question', name: 'Do I keep 100% ownership of my music with Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You retain 100% ownership of your masters and recordings at all times. Western Beats is a distribution partner, not a label — your rights stay with you.' } },
    { '@type': 'Question', name: 'How is Western Beats different from DistroKid, TuneCore, or CD Baby?', acceptedAnswer: { '@type': 'Answer', text: 'DistroKid charges $22.99/year, TuneCore charges per release, and CD Baby charges an upfront fee plus a 9% royalty cut. Western Beats has no upfront cost and no royalty percentage taken, while still reaching the same major global platforms.' } },
  ],
}

const FEATURES = [
  { title: '150+ Platforms Worldwide', desc: 'Spotify, Apple Music, Amazon Music, YouTube Music, Deezer, Tidal and 140+ more — one submission reaches every major platform your fans use, wherever they are.' },
  { title: '100% Ownership, Always', desc: 'Your masters, your rights. Western Beats distributes your music without ever taking ownership of your recordings.' },
  { title: 'No Upfront Cost', desc: 'No annual fee, no per-release charge to submit. We only earn when you earn — so there is no financial barrier to getting your music out.' },
  { title: 'Built for Independent Artists', desc: 'Whether you are releasing your first single or your fiftieth, the process is the same: upload, review, distribute. No label, no manager, no gatekeeper required.' },
  { title: 'Fast Turnaround', desc: 'Most releases are reviewed within 24 hours and go live within 72 hours of approval — faster than many legacy distributors.' },
  { title: 'Real-Time Royalty Dashboard', desc: 'Track streams and earnings across every platform in one place, so you always know exactly how your music is performing.' },
]

export default function BestMusicDistributionCompanyPage() {
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
              <li style={{ color: '#5CB2DC' }}>Best Music Distribution Company</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>2026 · Worldwide</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Best Music Distribution<br /><span style={{ color: '#0A64C3' }}>Company — Free, Worldwide</span>
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 660, lineHeight: 1.7, marginBottom: 36 }}>
            Wherever you make music — India, the USA, Canada, Australia, the UAE, or anywhere else — Western Beats gets it onto 150+ platforms free, with 100% ownership and no upfront cost.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/sign-up" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Distribute Your Music Free →</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Why Western Beats Is a Top Choice for Independent Artists Worldwide</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {FEATURES.map(f => (
                <div key={f.title} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: 16, marginBottom: 8 }}>{f.title}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Distributing From Outside India?</h2>
          <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.8, maxWidth: 780, marginBottom: 32 }}>
            Western Beats started in India and is officially backed by Warner Music India Partner — but our distribution network reaches the same global platforms your fans already use, no matter where you or they are. We&apos;re actively welcoming independent artists from the USA, Canada, Australia, the UAE, and 100+ other countries to distribute through Western Beats.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/best-music-distributor-usa" style={{ color: '#5CB2DC', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Best Music Distributor — USA →</Link>
            <Link href="/best-music-distributor-canada" style={{ color: '#5CB2DC', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Best Music Distributor — Canada →</Link>
            <Link href="/best-music-distributor-australia" style={{ color: '#5CB2DC', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Best Music Distributor — Australia →</Link>
            <Link href="/best-music-distributor-uae" style={{ color: '#5CB2DC', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Best Music Distributor — UAE →</Link>
            <Link href="/best-music-distributor-india" style={{ color: '#5CB2DC', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Best Music Distributor — India →</Link>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 780, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Best Music Distribution Company — FAQ</h2>
          {FAQ_SCHEMA.mainEntity.map(faq => (
            <div key={faq.name} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px', marginBottom: 16 }}>
              <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.name}</div>
              <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.acceptedAnswer.text}</div>
            </div>
          ))}
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Distribute Your Music Free — Worldwide</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>150+ platforms · 100% ownership · ₹0 / $0 upfront · Any country</p>
          <Link href="/sign-up" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Get Started Free →</Link>
          <div style={{ marginTop: 24 }}><Link href="/compare" style={{ color: '#5CB2DC', fontSize: 14 }}>Full Distributor Comparison →</Link></div>
        </section>
      </main>
      <Footer />
    </>
  )
}
