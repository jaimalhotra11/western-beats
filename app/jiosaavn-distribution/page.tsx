import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'JioSaavn Music Distribution Free India 2026 — Upload Your Song to JioSaavn | Western Beats',
  description: 'Get your song on JioSaavn free. Western Beats distributes to JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms in 72 hours. India\'s best free music distributor with Warner Music backing.',
  keywords: [
    'JioSaavn music distribution free',
    'upload song on JioSaavn India',
    'how to get song on JioSaavn',
    'JioSaavn distribution independent artist',
    'JioSaavn upload music free 2026',
    'how to upload music on JioSaavn India',
    'JioSaavn music distribution India free',
    'JioSaavn artist upload song',
    'get music on JioSaavn without label',
    'JioSaavn distribution India 2026',
  ],
  alternates: { canonical: 'https://westernbeats.com/jiosaavn-distribution' },
  openGraph: {
    title: 'JioSaavn Music Distribution Free 2026 — Upload Your Song | Western Beats',
    description: 'Get your song on JioSaavn free with Western Beats. 72 hours, 150+ platforms, 100% ownership, Warner Music India Partner.',
    url: 'https://westernbeats.com/jiosaavn-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'JioSaavn Music Distribution Free India | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://westernbeats.com/jiosaavn-distribution',
      name: 'JioSaavn Music Distribution Free India 2026',
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
        { '@type': 'ListItem', position: 2, name: 'JioSaavn Distribution', item: 'https://westernbeats.com/jiosaavn-distribution' },
      ]},
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do I get my song on JioSaavn?', acceptedAnswer: { '@type': 'Answer', text: 'Submit your music to Western Beats at westernbeats.com/submit. We distribute to JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms within 72 hours — completely free.' } },
        { '@type': 'Question', name: 'Is JioSaavn distribution free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — with Western Beats, distribution to JioSaavn and all other platforms is ₹0 upfront, no subscription, no annual fee.' } },
        { '@type': 'Question', name: 'Does DistroKid distribute to JioSaavn?', acceptedAnswer: { '@type': 'Answer', text: 'No. DistroKid and most global distributors do not include JioSaavn. Western Beats distributes to JioSaavn as part of its standard free distribution.' } },
        { '@type': 'Question', name: 'How long does it take to get on JioSaavn?', acceptedAnswer: { '@type': 'Answer', text: 'After Western Beats approves your submission (within 24 hours), your music is live on JioSaavn within 72 hours.' } },
      ],
    },
  ],
}

const PLATFORMS_INDIA = [
  { name: 'JioSaavn', users: '150M+ users', note: 'India\'s biggest music app' },
  { name: 'Gaana', users: '200M+ users', note: 'Times Internet\'s music platform' },
  { name: 'Wynk Music', users: '100M+ users', note: 'Airtel\'s music streaming service' },
  { name: 'Hungama', users: '50M+ users', note: 'Bollywood & regional content' },
  { name: 'Resso', users: '20M+ users', note: 'ByteDance social music app' },
  { name: 'Jio Caller Tune', users: '450M subscribers', note: 'CRBT for Jio users' },
]

export default function JioSaavnPage() {
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
              <li style={{ color: '#5CB2DC' }}>JioSaavn Distribution</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>JioSaavn Distribution</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Get Your Song on<br /><span style={{ color: '#0A64C3' }}>JioSaavn</span> Free<br />in 72 Hours
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 620, lineHeight: 1.7, marginBottom: 36 }}>
            JioSaavn has 150+ million monthly active users — India&apos;s largest music streaming platform. Western Beats distributes your music to JioSaavn, Gaana, Spotify, Apple Music, and 150+ more platforms, all at zero cost.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Submit Your Music Free →</Link>
            <Link href="/platforms" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>See All 150+ Platforms</Link>
          </div>
        </section>

        {/* Why JioSaavn matters */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, textAlign: 'center', marginBottom: 48 }}>Why JioSaavn is Essential for Indian Artists</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {[
                { stat: '150M+', label: 'Monthly Active Users', note: 'India\'s largest music streaming platform by user base' },
                { stat: '400M+', label: 'Jio Subscribers', note: 'Every Jio SIM includes JioSaavn — built-in audience' },
                { stat: '#1', label: 'Hindi Music Platform', note: 'Dominant for Bollywood, Punjabi, and regional music' },
                { stat: 'Free', label: 'To Distribute via WB', note: 'No extra charge — JioSaavn is included in Western Beats\' free service' },
              ].map(s => (
                <div key={s.stat} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '28px', textAlign: 'center' }}>
                  <div style={{ fontSize: 44, fontWeight: 900, color: '#0A64C3', marginBottom: 6 }}>{s.stat}</div>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: 6 }}>{s.label}</div>
                  <div style={{ color: '#8899AA', fontSize: 13 }}>{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* India platforms we cover */}
        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 12 }}>All Major Indian Platforms — Included</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 40 }}>One submission distributes to all Indian platforms simultaneously — not just JioSaavn.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {PLATFORMS_INDIA.map(p => (
              <div key={p.name} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ fontWeight: 700, color: 'white', fontSize: 17 }}>{p.name}</div>
                <div style={{ color: '#5CB2DC', fontSize: 14, fontWeight: 600 }}>{p.users}</div>
                <div style={{ color: '#4A5568', fontSize: 13 }}>{p.note}</div>
              </div>
            ))}
          </div>
          <p style={{ color: '#4A5568', fontSize: 13, marginTop: 20 }}>Plus Spotify, Apple Music, YouTube Music, Amazon Music, and 130+ more international platforms.</p>
        </section>

        {/* DistroKid doesn't cover */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>DistroKid & TuneCore Don&apos;t Include JioSaavn</h2>
            <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              Most global distributors like DistroKid and TuneCore are built for Western markets. They don&apos;t distribute to JioSaavn or Gaana — India&apos;s two most important platforms. If you use them, your music simply doesn&apos;t exist for 350M+ Indian listeners.
            </p>
            <Link href="/compare/distrokid-vs-western-beats" style={{ color: '#0A64C3', fontWeight: 600, fontSize: 15 }}>See full DistroKid vs Western Beats comparison →</Link>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '80px 24px', maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 36 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { q: 'How do I get my song on JioSaavn?', a: 'Submit at westernbeats.com/submit. Western Beats distributes to JioSaavn and 150+ platforms within 72 hours — free.' },
              { q: 'Is JioSaavn distribution free with Western Beats?', a: 'Yes. JioSaavn distribution is included in Western Beats\' free service. ₹0 upfront, no subscription.' },
              { q: 'How long does it take to appear on JioSaavn?', a: 'After our 24-hour review, your music is live on JioSaavn within 72 hours of approval.' },
              { q: 'Does DistroKid distribute to JioSaavn?', a: 'No. DistroKid, TuneCore, and most global distributors do not include JioSaavn. Western Beats distributes to JioSaavn as standard.' },
              { q: 'Can I distribute Punjabi or Bhojpuri music to JioSaavn?', a: 'Yes. Western Beats distributes music in all Indian languages to JioSaavn — Hindi, Punjabi, Tamil, Telugu, Bhojpuri, Haryanvi, and more.' },
              { q: 'Will my song appear in JioSaavn\'s recommendations?', a: 'Eligibility for JioSaavn editorial playlists and recommendations depends on streams, listener data, and platform algorithms. Western Beats\' Warner Music India Partnership gives your releases priority consideration for playlist pitching.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Get on JioSaavn in 72 Hours — Free</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>Plus Gaana, Spotify, Apple Music, Wynk, Hungama, caller tunes, and 140+ more platforms.</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
