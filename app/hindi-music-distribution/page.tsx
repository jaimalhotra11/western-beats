import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Hindi Music Distribution India Free 2026 — 150+ Platforms in 72 Hours | Western Beats',
  description: 'Distribute your Hindi music to JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms free in 72 hours. Western Beats is India\'s best free Hindi music distributor. 100% ownership, free ISRC codes.',
  keywords: [
    'hindi music distribution india free',
    'hindi song distribution free 2026',
    'distribute hindi music JioSaavn',
    'upload hindi song online free india',
    'hindi music distribution independent artist',
    'bollywood independent music distribution',
    'hindi song upload JioSaavn Gaana free',
    'best music distributor hindi songs india',
    'free hindi music distribution no subscription',
    'distribute hindi music 150 platforms',
    'hindi music streaming distribution india',
    'upload hindi song spotify india',
    'hindi music distribution Warner Music India',
    'independent hindi artist distribution',
    'hindi song distribution 72 hours',
    'hindi music distribution western beats',
  ],
  alternates: { canonical: 'https://westernbeats.com/hindi-music-distribution' },
  openGraph: {
    title: 'Hindi Music Distribution India Free 2026 — 150+ Platforms | Western Beats',
    description: 'Distribute Hindi music to JioSaavn, Gaana, Spotify and 150+ platforms free. 72 hours, 100% ownership. Western Beats — India\'s free music distributor.',
    url: 'https://westernbeats.com/hindi-music-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Hindi Music Distribution India Free 2026 | Western Beats' },
  robots: { index: true, follow: true },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://westernbeats.com/hindi-music-distribution',
      name: 'Hindi Music Distribution India Free 2026',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Distribution', item: 'https://westernbeats.com' },
          { '@type': 'ListItem', position: 3, name: 'Hindi Music Distribution', item: 'https://westernbeats.com/hindi-music-distribution' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      name: 'How to Distribute Hindi Music in India for Free',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Submit Your Music', text: 'Go to westernbeats.com/submit and fill in your track details — title, artist name, genre, release date.' },
        { '@type': 'HowToStep', position: 2, name: 'Upload Audio & Artwork', text: 'Upload your Hindi song in WAV or MP3 (320kbps) format and a square cover image (3000x3000px minimum).' },
        { '@type': 'HowToStep', position: 3, name: 'We Distribute to 150+ Platforms', text: 'Within 24 hours of approval, your Hindi music goes live on JioSaavn, Gaana, Spotify, Apple Music, and 150+ platforms simultaneously.' },
        { '@type': 'HowToStep', position: 4, name: 'Earn Royalties', text: 'Collect streaming royalties from all platforms directly. Western Beats pays you 100% of your earnings.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do I distribute Hindi music to JioSaavn for free?', acceptedAnswer: { '@type': 'Answer', text: 'Submit at westernbeats.com/submit. Western Beats distributes your Hindi music to JioSaavn, Gaana, Spotify, and 150+ platforms within 72 hours — completely free with no subscription fee.' } },
        { '@type': 'Question', name: 'Can independent Hindi artists use Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats is designed for independent Hindi artists. You don\'t need a label, a contract, or any upfront payment to distribute your music.' } },
        { '@type': 'Question', name: 'What percentage of royalties do I keep?', acceptedAnswer: { '@type': 'Answer', text: 'You keep 100% ownership of your music. Western Beats does not take a percentage of your streaming royalties.' } },
        { '@type': 'Question', name: 'Does Western Beats distribute Hindi music to JioSaavn?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. JioSaavn is one of the primary platforms in Western Beats\' distribution network. JioSaavn has 150M+ users and is the most important platform for Hindi music.' } },
        { '@type': 'Question', name: 'How is Hindi music distribution different from other languages?', acceptedAnswer: { '@type': 'Answer', text: 'Hindi music represents 44% of all Indian music streams. Distribution to JioSaavn and Gaana is especially critical for Hindi artists as these platforms dominate Hindi music consumption in India.' } },
        { '@type': 'Question', name: 'Can I get my Hindi song on Jio Caller Tune?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes to Jio Caller Tune (CRBT) as part of its standard free service — no extra charge. This is unique to Indian distributors like Western Beats.' } },
        { '@type': 'Question', name: 'How long does Hindi music distribution take?', acceptedAnswer: { '@type': 'Answer', text: 'After Western Beats reviews your submission (within 24 hours), your Hindi music is live on all platforms within 72 hours.' } },
        { '@type': 'Question', name: 'Does DistroKid support Hindi music distribution to Indian platforms?', acceptedAnswer: { '@type': 'Answer', text: 'No. DistroKid does not distribute to JioSaavn or Gaana — India\'s two most important platforms for Hindi music. Western Beats is built specifically for Indian artists and distributes to all major Indian platforms.' } },
      ],
    },
  ],
}

const PLATFORMS = [
  { name: 'JioSaavn', users: '150M+ users', note: '#1 platform for Hindi music in India' },
  { name: 'Gaana', users: '200M+ users', note: 'Largest Hindi Bollywood catalogue' },
  { name: 'Spotify India', users: '80M+ users', note: 'Growing Hindi & independent music' },
  { name: 'Apple Music', users: '15M+ India users', note: 'Premium Hindi music listeners' },
  { name: 'YouTube Music', users: '100M+ India users', note: 'Massive Hindi music streaming' },
  { name: 'Jio Caller Tune', users: '450M Jio subscribers', note: 'CRBT for every Jio SIM' },
]

export default function HindiMusicDistributionPage() {
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
              <li><Link href="/regional-music-distribution" style={{ color: '#4A5568', textDecoration: 'none' }}>Distribution</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>Hindi Music Distribution</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>Hindi Music Distribution</div>
          <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Hindi Music Distribution India —<br /><span style={{ color: '#0A64C3' }}>Free, 150+ Platforms, 72 Hours</span>
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 640, lineHeight: 1.7, marginBottom: 36 }}>
            Hindi is the language of 44% of all Indian music streams. Whether you make independent Hindi pop, ghazals, bhajans, or Bollywood-adjacent songs — Western Beats gets your music to every major platform, completely free.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Submit Your Hindi Music Free →</Link>
            <Link href="/platforms" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>View All 150+ Platforms</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, textAlign: 'center', marginBottom: 16 }}>Why Hindi Music Distribution Matters</h2>
            <p style={{ color: '#8899AA', fontSize: 16, textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>Hindi is the world&apos;s third most spoken language and India&apos;s dominant music market. Getting your Hindi music on the right platforms is the single biggest growth lever for an independent Hindi artist.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
              {[
                { stat: '44%', label: 'of Indian Music Streams', note: 'Hindi music dominates Indian streaming' },
                { stat: '450M+', label: 'Hindi Speakers in India', note: 'Largest language audience in the country' },
                { stat: '150M+', label: 'JioSaavn Monthly Users', note: 'India\'s biggest Hindi music platform' },
                { stat: '72 hrs', label: 'Time to Go Live', note: 'Western Beats distributes in 72 hours' },
              ].map(s => (
                <div key={s.stat} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '28px', textAlign: 'center' }}>
                  <div style={{ fontSize: 42, fontWeight: 900, color: '#0A64C3', marginBottom: 6 }}>{s.stat}</div>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: 6 }}>{s.label}</div>
                  <div style={{ color: '#8899AA', fontSize: 13 }}>{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 12 }}>Platforms Where Your Hindi Music Will Live</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 40 }}>One free submission distributes your Hindi music to all Indian platforms and 140+ international platforms simultaneously.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {PLATFORMS.map(p => (
              <div key={p.name} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '22px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', fontSize: 17, marginBottom: 4 }}>{p.name}</div>
                <div style={{ color: '#5CB2DC', fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{p.users}</div>
                <div style={{ color: '#4A5568', fontSize: 13 }}>{p.note}</div>
              </div>
            ))}
          </div>
          <p style={{ color: '#4A5568', fontSize: 13, marginTop: 20 }}>Plus Wynk Music, Hungama, Amazon Music, Resso, Boomplay, Deezer, Tidal, and 130+ more platforms worldwide.</p>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>How to Distribute Hindi Music in 4 Steps</h2>
            <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 40 }}>Getting your Hindi song on JioSaavn, Spotify and 148 other platforms takes less than 10 minutes.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
              {[
                { num: '01', title: 'Submit Your Music', body: 'Visit westernbeats.com/submit. Fill in your track title, artist name, genre (Hindi), and desired release date.' },
                { num: '02', title: 'Upload Audio & Artwork', body: 'Upload your Hindi song in WAV or MP3 320kbps. Add square cover art (minimum 3000×3000px).' },
                { num: '03', title: 'We Send It Everywhere', body: 'Within 24 hours of approval, your Hindi song goes live on JioSaavn, Gaana, Spotify and 150+ platforms — including Jio Caller Tune.' },
                { num: '04', title: 'Collect Royalties', body: 'Earn streaming royalties from every platform. Your music, your earnings, your 100% ownership.' },
              ].map(step => (
                <div key={step.num} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '28px' }}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: '#0A64C3', marginBottom: 12 }}>{step.num}</div>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: 17, marginBottom: 8 }}>{step.title}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{step.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>Why Western Beats for Hindi Music?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { title: 'JioSaavn & Gaana Included', body: 'DistroKid and TuneCore don\'t distribute to JioSaavn or Gaana. Western Beats includes both as standard — critical for Hindi music reach in India.' },
              { title: 'Jio Caller Tune Distribution', body: 'Your Hindi song can become a Jio Caller Tune (Hello Tune) — 450M Jio subscribers could set it. Western Beats distributes CRBT at no extra cost.' },
              { title: 'Warner Music India Partnership', body: 'Western Beats is an official Warner Music India Partner — your Hindi releases get priority consideration for editorial playlist pitching.' },
              { title: '100% Ownership, Zero Cost', body: 'Completely free distribution. No annual subscription. No per-song fee. You keep 100% ownership of your Hindi music forever.' },
              { title: 'Free ISRC Codes', body: 'Every Hindi song submitted through Western Beats gets a free ISRC code — needed for tracking streams and collecting royalties across all platforms.' },
              { title: 'All Hindi Genres Supported', body: 'Bollywood-adjacent, independent Hindi pop, ghazal, bhajan, qawwali, Sufi, indie folk — all genres are welcome.' },
            ].map(card => (
              <div key={card.title} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                <div style={{ fontWeight: 700, color: 'white', fontSize: 16, marginBottom: 8 }}>{card.title}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{card.body}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 14 }}>
            <Link href="/compare/distrokid-vs-western-beats" style={{ color: '#0A64C3', fontWeight: 600 }}>DistroKid vs Western Beats →</Link>
            <Link href="/jiosaavn-distribution" style={{ color: '#0A64C3', fontWeight: 600 }}>JioSaavn Distribution →</Link>
            <Link href="/caller-tune-distribution" style={{ color: '#0A64C3', fontWeight: 600 }}>Caller Tune Distribution →</Link>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 36 }}>Frequently Asked Questions — Hindi Music Distribution</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { q: 'How do I distribute Hindi music to JioSaavn for free?', a: 'Submit at westernbeats.com/submit. Western Beats distributes to JioSaavn, Gaana, Spotify and 150+ platforms within 72 hours — completely free.' },
              { q: 'Can independent Hindi artists use Western Beats?', a: 'Yes. Western Beats is designed for independent artists — no label needed, no contracts, no upfront cost.' },
              { q: 'What percentage of royalties do I keep from Hindi music streaming?', a: 'You keep 100% of your earnings. Western Beats charges ₹0 and takes nothing from your royalties.' },
              { q: 'How long does it take to get Hindi music on JioSaavn?', a: 'After our 24-hour review, your music is live on JioSaavn and all platforms within 72 hours.' },
              { q: 'Does DistroKid distribute Hindi songs to Indian platforms?', a: 'No. DistroKid doesn\'t include JioSaavn or Gaana. For Hindi music to reach Indian listeners, you need Western Beats.' },
              { q: 'Can I get my Hindi song as a Jio Caller Tune?', a: 'Yes. Jio Caller Tune (CRBT) distribution is included in Western Beats\' free service — no extra fee.' },
              { q: 'Do I need a ISRC code to distribute Hindi music?', a: 'Western Beats provides free ISRC codes with every distribution. You don\'t need to get one separately.' },
              { q: 'Can I distribute Bollywood-style Hindi music as an independent artist?', a: 'Absolutely. Western Beats distributes all genres of Hindi music including independent Bollywood-adjacent songs, covers of originals you own rights to, and original compositions.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Distribute Your Hindi Music Free Today</h2>
          <p style={{ color: '#8899AA', fontSize: 16, maxWidth: 560, margin: '0 auto 32px' }}>JioSaavn, Gaana, Spotify, Apple Music, Jio Caller Tune and 145+ more platforms. 72 hours. ₹0 forever.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Hindi Music Free →</Link>
            <Link href="/how-it-works" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '16px 32px', borderRadius: 14, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>How It Works</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
