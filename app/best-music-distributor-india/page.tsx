import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Best Music Distributor India 2026 | Western Beats',
  description: 'India\'s best free music distributor — JioSaavn, Gaana, Spotify, Jio Caller Tune. Better than DistroKid & TuneCore.',
  keywords: [
    'best music distributor India 2026',
    'best music distribution company India',
    'best free music distributor India',
    'top music distributor India 2026',
    'best music distribution platform India',
    'best music distribution service India',
    'best music distributor for Indian artists',
    'best music distribution India free',
    'music distributor India comparison 2026',
    'which is best music distributor India',
    'top music distribution India',
    'best online music distribution India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/best-music-distributor-india' },
  openGraph: {
    title: 'Best Music Distributor India 2026 — Free | Western Beats',
    description: 'India\'s best free music distributor — JioSaavn, Gaana, Spotify, Caller Tune, 150+ platforms. Better than DistroKid.',
    url: 'https://www.westernbeats.com/best-music-distributor-india',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Best Music Distributor India 2026 | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://www.westernbeats.com/best-music-distributor-india',
  name: 'Best Music Distributor India 2026',
  description: 'Comparison of the best music distributors for Indian artists in 2026.',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Best Music Distributor India', item: 'https://www.westernbeats.com/best-music-distributor-india' },
  ]},
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which is the best music distributor in India 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Western Beats is the best music distributor for Indian artists in 2026. It is free, distributes to JioSaavn and Gaana (which DistroKid and TuneCore miss), includes Jio Caller Tune and Airtel Hello Tune CRBT distribution, and is the only free distributor with a Warner Music Group partnership.' } },
    { '@type': 'Question', name: 'Is Western Beats better than DistroKid for Indian artists?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. DistroKid costs $22.99/year and does not distribute to JioSaavn, Gaana, or Jio Caller Tune. Western Beats is free and covers all Indian platforms including JioSaavn, Gaana, Wynk, Hungama, and Jio CRBT.' } },
    { '@type': 'Question', name: 'What is the best free music distributor in India?', acceptedAnswer: { '@type': 'Answer', text: 'Western Beats is the best free music distributor in India. Unlike Deliver My Tune (₹899/year) or Routenote (15% royalty cut), Western Beats is truly free with no annual fee, no per-release fee, and no royalty percentage taken.' } },
    { '@type': 'Question', name: 'Which music distributor distributes to JioSaavn for free?', acceptedAnswer: { '@type': 'Answer', text: 'Western Beats is the only major distributor that distributes to JioSaavn completely free. DistroKid and TuneCore don\'t cover JioSaavn at all. Deliver My Tune covers JioSaavn but charges ₹899/year.' } },
  ],
}

const DISTRIBUTORS = [
  { name: 'Western Beats', cost: '₹0 Free', jiosaavn: true, gaana: true, crbt: true, warner: true, isrc: true, highlight: true },
  { name: 'DistroKid', cost: '$22.99/yr', jiosaavn: false, gaana: false, crbt: false, warner: false, isrc: true, highlight: false },
  { name: 'TuneCore', cost: '$14.99/release', jiosaavn: false, gaana: false, crbt: false, warner: false, isrc: true, highlight: false },
  { name: 'CD Baby', cost: '$9.95 + 9%', jiosaavn: false, gaana: false, crbt: false, warner: false, isrc: false, highlight: false },
  { name: 'Deliver My Tune', cost: '₹899/yr', jiosaavn: true, gaana: true, crbt: true, warner: false, isrc: true, highlight: false },
  { name: 'RouteNote', cost: '0% or 15%', jiosaavn: false, gaana: false, crbt: false, warner: false, isrc: false, highlight: false },
]

export default function BestDistributorPage() {
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
              <li style={{ color: '#5CB2DC' }}>Best Music Distributor India 2026</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>2026 Comparison</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Best Music Distributor<br /><span style={{ color: '#0A64C3' }}>India 2026 — Ranked</span>
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 660, lineHeight: 1.7, marginBottom: 36 }}>
            Indian artists have different needs than Western artists. You need JioSaavn, Gaana, Jio Caller Tune, and Airtel Hello Tune — platforms most global distributors don&apos;t even cover. Here&apos;s the honest 2026 comparison.
          </p>
        </section>

        <section style={{ padding: '0 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 32 }}>Head-to-Head Comparison — All Major Distributors</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 700 }}>
              <thead>
                <tr style={{ background: '#0A64C3', color: 'white' }}>
                  <th style={{ padding: '14px 16px', textAlign: 'left' }}>Distributor</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>Cost</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>JioSaavn</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>Gaana</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>Jio CRBT</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>Warner</th>
                  <th style={{ padding: '14px 16px', textAlign: 'center' }}>Free ISRC</th>
                </tr>
              </thead>
              <tbody>
                {DISTRIBUTORS.map((d, i) => (
                  <tr key={d.name} style={{ background: d.highlight ? 'rgba(10,100,195,0.12)' : i % 2 === 0 ? '#0A1535' : '#060D1F', border: d.highlight ? '1px solid rgba(10,100,195,0.4)' : 'none' }}>
                    <td style={{ padding: '14px 16px', color: 'white', fontWeight: d.highlight ? 800 : 600 }}>
                      {d.name} {d.highlight && <span style={{ background: '#0A64C3', color: 'white', borderRadius: 6, padding: '2px 8px', fontSize: 10, fontWeight: 700, marginLeft: 8 }}>BEST</span>}
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', color: d.highlight ? '#4ade80' : '#f87171', fontWeight: 700 }}>{d.cost}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: 18 }}>{d.jiosaavn ? '✅' : '❌'}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: 18 }}>{d.gaana ? '✅' : '❌'}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: 18 }}>{d.crbt ? '✅' : '❌'}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: 18 }}>{d.warner ? '✅' : '❌'}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontSize: 18 }}>{d.isrc ? '✅' : '❌'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: '#4A5568', fontSize: 12, marginTop: 12 }}>Data verified June 2026. DistroKid, TuneCore, CD Baby and RouteNote confirmed to not include JioSaavn, Gaana or Indian CRBT platforms.</p>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Why Western Beats is India&apos;s Best Music Distributor in 2026</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {[
                { title: '₹0 — Truly Free', desc: 'No annual fee, no per-release fee, no royalty percentage. Western Beats earns when you earn — there\'s no upfront cost ever.' },
                { title: 'All Indian Platforms', desc: 'JioSaavn, Gaana, Wynk, Hungama, Jio Caller Tune, Airtel Hello Tune — the platforms that matter for Indian audiences. Most global distributors miss these entirely.' },
                { title: 'Warner Music India Partner', desc: 'The only free Indian distributor backed by Warner Music Group. This gives your releases priority placement, editorial consideration, and major-label credibility.' },
                { title: '150+ Platforms', desc: 'Spotify, Apple Music, Amazon Music, YouTube Music, Deezer, Tidal and 140+ more — global reach included in every free submission.' },
                { title: '72-Hour Delivery', desc: 'Submit on Monday, live on Thursday. Faster than DistroKid\'s 7-14 day delivery for most platforms.' },
                { title: 'Free ISRC & UPC', desc: 'Every release gets a free ISRC code and UPC barcode. DistroKid charges extra for custom ISRC codes.' },
              ].map(f => (
                <div key={f.title} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: 16, marginBottom: 8 }}>{f.title}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 780, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Best Music Distributor India 2026 — FAQ</h2>
          {[
            { q: 'Which is the best music distributor in India 2026?', a: 'Western Beats is India\'s best music distributor in 2026 for independent artists. It\'s free, covers all Indian platforms (JioSaavn, Gaana, Jio CRBT, Airtel Hello Tune), has a Warner Music Group partnership, and distributes to 150+ global platforms in 72 hours.' },
            { q: 'Is Western Beats better than DistroKid for Indian artists?', a: 'Yes — significantly. DistroKid costs $22.99/year and misses JioSaavn, Gaana, and all Indian caller tune platforms. Western Beats is free and covers all of these. For Indian artists, Western Beats is the clear winner.' },
            { q: 'What is the best free music distributor in India?', a: 'Western Beats is India\'s best truly free music distributor. Unlike Deliver My Tune (₹899/year) or RouteNote (15% cut on free plan), Western Beats charges nothing upfront and takes no royalty percentage.' },
            { q: 'Which music distributor distributes to JioSaavn?', a: 'Western Beats and Deliver My Tune are the main distributors covering JioSaavn. DistroKid, TuneCore, CD Baby, and RouteNote do not distribute to JioSaavn. Western Beats is free; Deliver My Tune charges ₹899/year.' },
            { q: 'Which distributor includes Jio Caller Tune (CRBT)?', a: 'Western Beats includes Jio CRBT, Airtel Hello Tune, Vi Tune, and BSNL Tune in every free submission. No global distributor (DistroKid, TuneCore, CD Baby) includes Indian caller tune distribution.' },
          ].map(faq => (
            <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px', marginBottom: 16 }}>
              <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
              <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
            </div>
          ))}
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>India&apos;s Best Music Distributor — Free</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>JioSaavn · Gaana · Spotify · Apple Music · Jio Caller Tune · 145 more · ₹0 · 72 hours · 100% ownership</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Distribute Your Music Free →</Link>
          <div style={{ marginTop: 24 }}><Link href="/compare" style={{ color: '#5CB2DC', fontSize: 14 }}>Full Distributor Comparison →</Link></div>
        </section>
      </main>
      <Footer />
    </>
  )
}
