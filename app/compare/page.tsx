import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CompareHubCards from './CompareHubCards'

export const metadata: Metadata = {
  title: 'Western Beats vs All Competitors 2026',
  description: "How Western Beats compares to DistroKid, TuneCore, CD Baby & more. ₹0 forever, 150+ platforms, WMG backed, JioSaavn + Gaana.",
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
  alternates: { canonical: 'https://www.westernbeats.com/compare' },
  openGraph: {
    title: 'Western Beats vs All Competitors 2026 — India Comparison',
    description: 'Western Beats vs DistroKid, TuneCore, CD Baby, Deliver My Tune, ForeVision, RouteNote. See why Western Beats wins for Indian artists.',
    url: 'https://www.westernbeats.com/compare',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Western Beats vs All Competitors India 2026', description: 'See how Western Beats beats every competitor for Indian artists.', site: '@wb_digital_' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  url: 'https://www.westernbeats.com/compare',
  name: 'Western Beats vs Competitors — India 2026',
  isPartOf: { '@id': 'https://www.westernbeats.com/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.westernbeats.com/compare' },
    ],
  },
}


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
        <CompareHubCards />
      </main>
      <Footer />
    </>
  )
}
