import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Western Beats vs All Competitors 2026 | Best Music Distribution India',
  description: "How Western Beats compares to every music distribution competitor — DistroKid, TuneCore, CD Baby, Deliver My Tune, ForeVision Digital, RouteNote. Western Beats wins: ₹0 forever, 150+ platforms, WMG backed, JioSaavn + Gaana + caller tunes.",
  keywords: [
    'Western Beats vs competitors',
    'best music distribution India comparison 2026',
    'DistroKid vs Western Beats',
    'TuneCore vs Western Beats',
    'CD Baby vs Western Beats',
    'Deliver My Tune vs Western Beats',
    'ForeVision Digital vs Western Beats',
    'RouteNote vs Western Beats',
    'music distribution comparison India',
    'best free music distribution comparison India',
    'Western Beats compare',
  ],
  alternates: { canonical: 'https://westernbeats.com/compare' },
  openGraph: {
    title: 'Western Beats vs All Competitors 2026 — India Comparison',
    description: 'Western Beats vs DistroKid, TuneCore, CD Baby, Deliver My Tune, ForeVision, RouteNote. See why Western Beats wins for Indian artists.',
    url: 'https://westernbeats.com/compare',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Western Beats vs All Competitors India 2026', description: 'See how Western Beats beats every competitor for Indian artists.', site: '@wb_digital_' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  url: 'https://westernbeats.com/compare',
  name: 'Western Beats vs Competitors — India 2026',
  isPartOf: { '@id': 'https://westernbeats.com/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://westernbeats.com/compare' },
    ],
  },
}

const COMPS = [
  { name: 'DistroKid', slug: 'distrokid-vs-western-beats', price: '$22.99/year', verdict: 'WB wins: ₹0 forever + JioSaavn + WMG' },
  { name: 'TuneCore', slug: 'tunecore-vs-western-beats', price: '₹1,599/year', verdict: "WB wins: TuneCore free plan can't include JioSaavn" },
  { name: 'CD Baby', slug: 'cd-baby-vs-western-beats', price: '$9.99/release + 9%', verdict: 'WB wins: ₹0 + no royalty cut' },
  { name: 'Deliver My Tune', slug: 'deliver-my-tune-vs-western-beats', price: '₹1,999+/plan', verdict: 'WB wins: ₹0 + 150 platforms + WMG' },
  { name: 'ForeVision Digital', slug: 'forevision-vs-western-beats', price: '₹499/release', verdict: 'WB wins: 150 platforms vs 47, free' },
  { name: 'RouteNote', slug: 'routenote-vs-western-beats', price: 'Free but 15% forever', verdict: 'WB wins: no permanent commission + 150 platforms' },
]

export default function ComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Nav />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Outfit, sans-serif' }}>
        <section style={{ padding: '120px 24px 80px', textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
          <span style={{ background: '#C41230', color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: 2, padding: '6px 16px', borderRadius: 20, textTransform: 'uppercase' }}>Comparison Hub</span>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 900, margin: '24px 0 16px', lineHeight: 1.1 }}>
            Western Beats vs<br /><span style={{ color: '#C41230' }}>Every Competitor</span>
          </h1>
          <p style={{ fontSize: 18, color: '#aaa', maxWidth: 640, margin: '0 auto' }}>
            See exactly how Western Beats stacks up against every major music distribution platform for Indian artists. Spoiler: ₹0 forever, 150+ platforms, Warner Music Group backing. We win.
          </p>
        </section>
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 120px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {COMPS.map(c => (
            <Link key={c.slug} href={`/compare/${c.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: '32px 28px', transition: 'border-color 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#C41230')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#222')}>
                <div style={{ fontSize: 13, color: '#C41230', fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>WB vs</div>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 8 }}>{c.name}</h2>
                <div style={{ fontSize: 13, color: '#666', marginBottom: 16 }}>Their price: {c.price}</div>
                <p style={{ fontSize: 14, color: '#888' }}>{c.verdict}</p>
                <div style={{ marginTop: 20, fontSize: 14, color: '#C41230', fontWeight: 600 }}>See full comparison →</div>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
