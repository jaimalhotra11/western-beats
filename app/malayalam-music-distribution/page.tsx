import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Malayalam Music Distribution India Free 2026 | Western Beats',
  description: 'Distribute Malayalam songs free to JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms in 72 hours. 100% ownership, Warner Music India Partner. Submit free.',
  keywords: [
    'malayalam music distribution india free',
    'distribute malayalam songs online free',
    'malayalam music distribution jiosaavn',
    'malayalam song distribution india 2026',
    'free malayalam music distribution',
    'best malayalam music distributor india',
    'upload malayalam song jiosaavn free',
    'malayalam music distribution gaana',
    'distribute malayalam music spotify',
    'malayalam singer music distribution india',
    'kerala independent music distribution',
    'malayalam indie music platform',
    'malayalam hip-hop distribution',
    'malayalam music streaming india',
    'malayalam song release free india',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/malayalam-music-distribution' },
  openGraph: {
    title: 'Malayalam Music Distribution Free India 2026 | Western Beats',
    description: 'Distribute Malayalam songs to 150+ platforms free in 72 hours. JioSaavn, Gaana, Spotify, Jio Caller Tune included.',
    url: 'https://www.westernbeats.com/malayalam-music-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Malayalam Music Distribution Free India | Western Beats' },
  robots: { index: true, follow: true },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://www.westernbeats.com/malayalam-music-distribution',
      name: 'Malayalam Music Distribution India Free 2026',
      description: 'Free Malayalam music distribution to JioSaavn, Gaana, Spotify and 150+ platforms in 72 hours.',
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
        { '@type': 'ListItem', position: 2, name: 'Malayalam Music Distribution', item: 'https://www.westernbeats.com/malayalam-music-distribution' },
      ]},
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is Malayalam music distribution free with Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes Malayalam music to JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms with zero upfront cost and no annual subscription.' } },
        { '@type': 'Question', name: 'Which platforms matter most for Malayalam listeners?', acceptedAnswer: { '@type': 'Answer', text: 'JioSaavn and Gaana lead for Malayalam listenership in Kerala, followed by Spotify, YouTube Music, and Jio Caller Tune. Western Beats covers all of these in one submission.' } },
        { '@type': 'Question', name: 'Can I distribute Malayalam folk, devotional, or Mollywood-adjacent independent music?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats supports all Malayalam sub-genres including indie and folk, devotional, Malayalam hip-hop, fusion, and Mollywood-adjacent independent releases, with accurate metadata tagging.' } },
        { '@type': 'Question', name: 'How long until my Malayalam song is live?', acceptedAnswer: { '@type': 'Answer', text: 'After approval, typically within 24 hours, your Malayalam release goes live across all platforms within 72 hours.' } },
        { '@type': 'Question', name: 'Do I keep ownership of my Malayalam music?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You retain 100% ownership of your masters and publishing rights at all times.' } },
        { '@type': 'Question', name: 'Does Western Beats support Malayalam caller tunes?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Jio and Airtel caller tune (CRBT) distribution is included free, which is especially valuable for festival and devotional Malayalam songs.' } },
        { '@type': 'Question', name: 'Is there a limit on how many Malayalam songs I can submit?', acceptedAnswer: { '@type': 'Answer', text: 'No limit. Independent Malayalam artists and labels can submit as many singles, EPs, or albums as they want.' } },
        { '@type': 'Question', name: 'Does Western Beats support Kochi and Thiruvananthapuram indie artists specifically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats works with independent artists across Kerala, including the active indie scenes in Kochi and Thiruvananthapuram, with no requirement to be label-affiliated.' } },
      ],
    },
  ],
}

export default function MalayalamPage() {
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
              <li><Link href="/regional-music-distribution" style={{ color: '#4A5568', textDecoration: 'none' }}>Regional Music</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>Malayalam Music Distribution</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>Malayalam Music</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20, fontFamily: 'var(--font-outfit, sans-serif)' }}>
            Malayalam Music Distribution<br />India <span style={{ color: '#0A64C3' }}>Free</span> in 72 Hours
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 640, lineHeight: 1.7, marginBottom: 36, fontFamily: 'var(--font-inter, sans-serif)' }}>
            Kerala is home to over 35 million Malayalam speakers and one of India&apos;s most distinctive independent music cultures — from Kochi&apos;s indie and fusion scene to Thiruvananthapuram&apos;s growing Malayalam hip-hop community. Western Beats distributes your Malayalam music to JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms, completely free, with 100% ownership retained.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Distribute Your Malayalam Song Free →</Link>
            <Link href="/how-it-works" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>How It Works</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '60px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28 }}>
            {[
              { val: '35M+', lbl: 'Malayalam Speakers' },
              { val: '150+', lbl: 'Platforms Covered' },
              { val: '72hr', lbl: 'Time to Go Live' },
              { val: '₹0', lbl: 'Distribution Cost' },
            ].map(s => (
              <div key={s.val} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: '#0A64C3' }}>{s.val}</div>
                <div style={{ fontSize: 14, color: '#8899AA', marginTop: 6 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Why Kerala&apos;s Indie Scene Needs Real Distribution</h2>
          <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.8, marginBottom: 40, maxWidth: 800 }}>
            Malayalam independent music has grown rapidly over the last several years — Kochi, Thiruvananthapuram, Kozhikode and Thrissur all have active original-music communities spanning indie folk, Malayalam hip-hop, fusion, and devotional music alongside a steady stream of Mollywood-adjacent independent releases from session musicians and composers working outside the studio system. Yet most global distributors like DistroKid and TuneCore have no meaningful presence on JioSaavn or Gaana — the two platforms where the vast majority of Malayalam listening actually happens. Western Beats was built specifically to close that gap for Indian-language artists.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { title: 'JioSaavn & Gaana Included', desc: 'Both platforms dominate Malayalam streaming in Kerala. Most global distributors skip them entirely — Western Beats includes them free.' },
              { title: 'Jio Caller Tune Free', desc: 'Malayalam festival and devotional songs perform exceptionally well as caller tunes. CRBT distribution to Jio, Airtel, Vi and BSNL is included.' },
              { title: 'Warner Music India Partner', desc: 'Western Beats is an official Warner Music India Partner, giving Malayalam releases editorial consideration and playlist access.' },
              { title: '100% Ownership', desc: 'You retain full ownership of your masters and publishing at all times — Western Beats never takes rights to your music.' },
              { title: '72 Hours Live', desc: 'Submit your Malayalam single, EP, or album and it goes live across all platforms within 72 hours of approval.' },
              { title: 'All Sub-Genres Supported', desc: 'Malayalam indie and folk, Mollywood-adjacent independent releases, Malayalam hip-hop, devotional, and fusion — accurate genre and language metadata across every platform.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                <div style={{ fontWeight: 700, color: 'white', fontSize: 16, marginBottom: 8 }}>{f.title}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>How to Distribute Your Malayalam Song</h2>
            <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              The process is straightforward: create your account, upload your track with cover art and metadata (song title, artist name, genre, release date), select your platforms, and submit for review. Western Beats reviews submissions within 24 hours and pushes approved releases live across JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and 145+ other platforms within 72 hours total.
            </p>
            <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8 }}>
              Unlike subscription distributors that charge annually regardless of whether your music earns anything, Western Beats has no upfront cost — making it especially valuable for independent Malayalam artists and small labels releasing multiple tracks per year. See full <Link href="/pricing" style={{ color: '#5CB2DC' }}>pricing details</Link> for transparency on the model.
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>FAQ — Malayalam Music Distribution</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Is Malayalam music distribution free with Western Beats?', a: 'Yes. Western Beats distributes Malayalam music to JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms with zero upfront cost and no annual subscription.' },
              { q: 'Which platforms matter most for Malayalam listeners?', a: 'JioSaavn and Gaana lead for Malayalam listenership in Kerala, followed by Spotify, YouTube Music, and Jio Caller Tune. Western Beats covers all of these in one submission.' },
              { q: 'Can I distribute Malayalam folk, devotional, or Mollywood-adjacent independent music?', a: 'Yes. Western Beats supports all Malayalam sub-genres including indie and folk, devotional, Malayalam hip-hop, fusion, and Mollywood-adjacent independent releases, with accurate metadata tagging.' },
              { q: 'How long until my Malayalam song is live?', a: 'After approval, typically within 24 hours, your Malayalam release goes live across all platforms within 72 hours.' },
              { q: 'Do I keep ownership of my Malayalam music?', a: 'Yes. You retain 100% ownership of your masters and publishing rights at all times.' },
              { q: 'Does Western Beats support Malayalam caller tunes?', a: 'Yes, Jio and Airtel caller tune (CRBT) distribution is included free, which is especially valuable for festival and devotional Malayalam songs.' },
              { q: 'Is there a limit on how many Malayalam songs I can submit?', a: 'No limit. Independent Malayalam artists and labels can submit as many singles, EPs, or albums as they want.' },
              { q: 'Does Western Beats support Kochi and Thiruvananthapuram indie artists specifically?', a: 'Yes. Western Beats works with independent artists across Kerala, including the active indie scenes in Kochi and Thiruvananthapuram, with no requirement to be label-affiliated.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Distribute Your Malayalam Song — Free</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>JioSaavn + Gaana + Spotify + Caller Tune + 146 more. 100% ownership. 72 hours.</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
          <div style={{ marginTop: 24, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/regional-music-distribution" style={{ color: '#5CB2DC', fontSize: 14 }}>Other Regional Music →</Link>
            <Link href="/pricing" style={{ color: '#5CB2DC', fontSize: 14 }}>See Pricing →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
