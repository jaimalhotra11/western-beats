import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Best Music Distributor UAE & Dubai 2026',
  description: 'Free music distribution for UAE & Dubai artists to Spotify, Apple Music, Amazon Music & 150+ platforms. 100% ownership, no annual fee.',
  keywords: [
    'best music distributor UAE',
    'best music distributor Dubai',
    'best music distribution company UAE 2026',
    'free music distribution Dubai',
    'music distributor for UAE artists',
    'distribute music Dubai free',
    'best music distributor for independent artists UAE',
    'music distribution service Dubai UAE',
    'free DistroKid alternative UAE',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/best-music-distributor-uae' },
  openGraph: {
    title: 'Best Music Distributor for UAE & Dubai Artists 2026 | Western Beats',
    description: 'Free distribution to Spotify, Apple Music, Amazon Music and 150+ platforms for UAE and Dubai artists. 100% ownership, no annual fee.',
    url: 'https://www.westernbeats.com/best-music-distributor-uae',
    siteName: 'Western Beats', type: 'website', locale: 'en_AE',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Best Music Distributor for UAE & Dubai Artists 2026 | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://www.westernbeats.com/best-music-distributor-uae',
  name: 'Best Music Distributor for UAE & Dubai Artists 2026',
  description: 'Free music distribution for UAE and Dubai-based independent artists to 150+ platforms including Spotify, Apple Music, and Amazon Music.',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Best Music Distributor UAE', item: 'https://www.westernbeats.com/best-music-distributor-uae' },
  ]},
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can artists based in the UAE or Dubai distribute music through Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats welcomes independent artists based in the UAE, including Dubai and Abu Dhabi. Submit your music and it goes out to Spotify, Apple Music, Amazon Music, YouTube Music, and 150+ platforms worldwide, free of charge.' } },
    { '@type': 'Question', name: 'Is Western Beats free for UAE-based artists?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. There is no upfront fee, no per-release charge, and no annual subscription — unlike DistroKid ($22.99/year) or TuneCore (per-release fees). Western Beats only earns when you earn.' } },
    { '@type': 'Question', name: 'Do I keep ownership of my masters as an artist in the UAE?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100% always. Western Beats is a distribution partner, not a label — your recordings and rights remain entirely yours.' } },
    { '@type': 'Question', name: 'Does Western Beats support Arabic-language releases?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes music in any language, including Arabic, to every major platform — metadata and artwork are reviewed the same way regardless of language.' } },
  ],
}

const FEATURES = [
  { title: 'Reach Every Major Platform', desc: 'Spotify, Apple Music, Amazon Music, YouTube Music, Tidal, and 145+ more — wherever your fans across the Gulf and beyond are listening.' },
  { title: 'No Annual Fee', desc: 'Unlike DistroKid ($22.99/year), Western Beats has no recurring subscription to keep your catalog live.' },
  { title: '100% Ownership', desc: 'Your masters stay yours. Western Beats distributes — it never takes ownership of your recordings or rights.' },
  { title: 'Arabic & English Releases', desc: 'Submit music in any language. Metadata and artwork review works the same for Arabic, English, or any other language release.' },
  { title: 'Fast Turnaround', desc: 'Submit today, reviewed within 24 hours, live across platforms within 72 hours of approval.' },
  { title: 'No Hidden Royalty Cut', desc: 'Unlike CD Baby ($9.95 + 9% of royalties), Western Beats takes no percentage of your streaming income.' },
]

export default function BestMusicDistributorUAEPage() {
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
              <li><Link href="/best-music-distribution-company" style={{ color: '#4A5568', textDecoration: 'none' }}>Best Music Distribution Company</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>UAE</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>2026 · UAE &amp; Dubai</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Best Music Distributor<br /><span style={{ color: '#0A64C3' }}>for UAE &amp; Dubai Artists — Free</span>
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 660, lineHeight: 1.7, marginBottom: 36 }}>
            Western Beats gets your music onto Spotify, Apple Music, Amazon Music, and 150+ platforms worldwide — free, with 100% ownership. No annual fee, no per-release charge.
          </p>
          <Link href="/sign-up" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Distribute Your Music Free →</Link>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Why UAE &amp; Dubai Artists Choose Western Beats</h2>
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

        <section style={{ padding: '80px 24px', maxWidth: 780, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Best Music Distributor UAE — FAQ</h2>
          {FAQ_SCHEMA.mainEntity.map(faq => (
            <div key={faq.name} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px', marginBottom: 16 }}>
              <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.name}</div>
              <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.acceptedAnswer.text}</div>
            </div>
          ))}
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Distribute Your Music Free — From the UAE</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>Spotify · Apple Music · Amazon Music · 147 more · $0 upfront · 100% ownership</p>
          <Link href="/sign-up" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Get Started Free →</Link>
          <div style={{ marginTop: 24 }}><Link href="/best-music-distribution-company" style={{ color: '#5CB2DC', fontSize: 14 }}>See All Countries We Serve →</Link></div>
        </section>
      </main>
      <Footer />
    </>
  )
}
