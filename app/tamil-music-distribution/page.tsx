import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Tamil Music Distribution India Free 2026 — 150+ Platforms in 72 Hours | Western Beats',
  description: 'Distribute Tamil music to JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms free in 72 hours. Western Beats is India\'s best free Tamil music distributor. 100% ownership, free ISRC codes.',
  keywords: [
    'tamil music distribution india free',
    'tamil song distribution free 2026',
    'distribute tamil music JioSaavn',
    'upload tamil song online free india',
    'tamil music distribution independent artist',
    'kollywood independent music distribution',
    'tamil song upload free india',
    'best music distributor tamil songs india',
    'free tamil music distribution no subscription',
    'distribute tamil music 150 platforms',
    'tamil music streaming distribution india',
    'upload tamil song spotify india',
    'independent tamil artist distribution',
    'tamil music distribution 72 hours',
    'tamil music distribution western beats',
    'tamil independent music free distribution',
  ],
  alternates: { canonical: 'https://westernbeats.com/tamil-music-distribution' },
  openGraph: {
    title: 'Tamil Music Distribution India Free 2026 — 150+ Platforms | Western Beats',
    description: 'Distribute Tamil music to JioSaavn, Gaana, Spotify and 150+ platforms free. 72 hours, 100% ownership. Western Beats — India\'s free music distributor.',
    url: 'https://westernbeats.com/tamil-music-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Tamil Music Distribution India Free 2026 | Western Beats' },
  robots: { index: true, follow: true },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://westernbeats.com/tamil-music-distribution',
      name: 'Tamil Music Distribution India Free 2026',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Regional Music Distribution', item: 'https://westernbeats.com/regional-music-distribution' },
          { '@type': 'ListItem', position: 3, name: 'Tamil Music Distribution', item: 'https://westernbeats.com/tamil-music-distribution' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do I distribute Tamil music to JioSaavn for free?', acceptedAnswer: { '@type': 'Answer', text: 'Submit at westernbeats.com/submit. Western Beats distributes your Tamil music to JioSaavn, Gaana, Spotify, and 150+ platforms within 72 hours for free.' } },
        { '@type': 'Question', name: 'Can independent Tamil artists use Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats is built for independent artists across all Indian languages including Tamil. No label needed, no contracts, no upfront payment.' } },
        { '@type': 'Question', name: 'What royalty percentage do Tamil artists keep?', acceptedAnswer: { '@type': 'Answer', text: 'You keep 100% ownership of your music. Western Beats does not take any percentage of your streaming royalties.' } },
        { '@type': 'Question', name: 'Does Western Beats distribute Tamil music globally?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes to 150+ platforms worldwide including JioSaavn, Gaana, Spotify, Apple Music, Amazon Music, Deezer, Tidal, and all major Indian and international streaming platforms.' } },
        { '@type': 'Question', name: 'How important is Tamil music in India?', acceptedAnswer: { '@type': 'Answer', text: 'Tamil is the second largest regional music market in India. With 80M+ Tamil speakers and a globally beloved film industry (Kollywood), Tamil music consistently charts on international platforms.' } },
        { '@type': 'Question', name: 'Can I get my Tamil song on Jio Caller Tune?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes to Jio Caller Tune (CRBT) — Tamil songs are some of the most popular caller tunes in South India.' } },
        { '@type': 'Question', name: 'How long does Tamil music distribution take?', acceptedAnswer: { '@type': 'Answer', text: 'After approval (within 24 hours), your Tamil music goes live on all platforms within 72 hours.' } },
        { '@type': 'Question', name: 'Does DistroKid distribute Tamil music to Indian platforms?', acceptedAnswer: { '@type': 'Answer', text: 'No. DistroKid does not distribute to JioSaavn or Gaana — the two platforms most important for Tamil music reach in India.' } },
      ],
    },
  ],
}

const PLATFORMS = [
  { name: 'JioSaavn', users: '150M+ users', note: 'Large Tamil catalogue, deep South India penetration' },
  { name: 'Gaana', users: '200M+ users', note: 'Major Tamil & regional music platform' },
  { name: 'Spotify India', users: '80M+ users', note: 'Tamil music growing rapidly on Spotify' },
  { name: 'Apple Music', users: '15M+ India users', note: 'Strong Tamil diaspora audience globally' },
  { name: 'YouTube Music', users: '100M+ India users', note: 'Tamil music has billions of YouTube plays' },
  { name: 'Jio Caller Tune', users: '450M Jio subscribers', note: 'Tamil songs are top caller tunes in TN & Kerala' },
]

export default function TamilMusicDistributionPage() {
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
              <li style={{ color: '#5CB2DC' }}>Tamil Music Distribution</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(196,18,48,0.15)', border: '1px solid rgba(196,18,48,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#F56565', marginBottom: 20 }}>Tamil Music Distribution</div>
          <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Tamil Music Distribution India —<br /><span style={{ color: '#0A64C3' }}>Free Distribution to 150+ Platforms</span>
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 640, lineHeight: 1.7, marginBottom: 36 }}>
            Tamil is India&apos;s second largest regional music market with 80M+ speakers and a globally beloved film industry. Western Beats distributes your Tamil music to every major streaming platform free — JioSaavn, Gaana, Spotify, Apple Music, and 146+ more.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Submit Your Tamil Music Free →</Link>
            <Link href="/platforms" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>View All 150+ Platforms</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, textAlign: 'center', marginBottom: 48 }}>The Tamil Music Market — Why Distribution Matters</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
              {[
                { stat: '80M+', label: 'Tamil Speakers in India', note: 'India\'s 2nd largest regional language audience' },
                { stat: '#2', label: 'Regional Music Market', note: 'Tamil is the second biggest regional music industry' },
                { stat: '150+', label: 'Platforms via Western Beats', note: 'JioSaavn, Spotify, Apple Music & more' },
                { stat: 'Free', label: 'Forever — No Subscription', note: '₹0 upfront, ₹0 annual fee, 100% ownership' },
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
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 12 }}>Where Your Tamil Music Will Stream</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 40 }}>One submission distributes your Tamil music to all major Indian and international platforms simultaneously.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {PLATFORMS.map(p => (
              <div key={p.name} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '22px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', fontSize: 17, marginBottom: 4 }}>{p.name}</div>
                <div style={{ color: '#5CB2DC', fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{p.users}</div>
                <div style={{ color: '#4A5568', fontSize: 13 }}>{p.note}</div>
              </div>
            ))}
          </div>
          <p style={{ color: '#4A5568', fontSize: 13, marginTop: 20 }}>Plus Wynk Music, Hungama, Amazon Music, Boomplay, Deezer, Tidal, and 130+ more platforms worldwide.</p>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>Why Independent Tamil Artists Choose Western Beats</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {[
                { title: 'JioSaavn & Gaana — Both Included', body: 'Global distributors skip JioSaavn and Gaana. Western Beats distributes to both — the top platforms where Tamil fans stream music in India.' },
                { title: 'Jio Caller Tune (CRBT)', body: 'Tamil songs are among India\'s most popular caller tunes. Western Beats distributes CRBT to all Jio subscribers — 450M potential listeners.' },
                { title: 'Zero Cost — No Subscription', body: 'No annual fee like DistroKid ($22.99/year) or TuneCore ($14.99/year). Western Beats is free forever for Tamil artists.' },
                { title: 'Warner Music India Partnership', body: 'As a Warner Music India Partner, Western Beats gets your Tamil music considered for editorial playlists on major platforms.' },
                { title: '100% Ownership of Your Music', body: 'You own your masters 100%. Western Beats never takes ownership of your Tamil music, no matter how many streams you get.' },
                { title: 'All Tamil Genres Welcome', body: 'Kollywood film songs, independent Tamil pop, Carnatic fusion, folk, devotional — all genres distributed to all platforms.' },
              ].map(card => (
                <div key={card.title} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: 16, marginBottom: 8 }}>{card.title}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{card.body}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 14 }}>
              <Link href="/regional-music-distribution" style={{ color: '#0A64C3', fontWeight: 600 }}>All Regional Music Distribution →</Link>
              <Link href="/telugu-music-distribution" style={{ color: '#0A64C3', fontWeight: 600 }}>Telugu Music Distribution →</Link>
              <Link href="/blog/best-music-distributors-india-2026" style={{ color: '#0A64C3', fontWeight: 600 }}>Best Distributors 2026 →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 36 }}>Frequently Asked Questions — Tamil Music Distribution</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { q: 'How do I distribute Tamil music to JioSaavn for free?', a: 'Submit at westernbeats.com/submit. Western Beats distributes your Tamil music to JioSaavn, Gaana, Spotify and 150+ platforms within 72 hours, free.' },
              { q: 'Can independent Tamil artists use Western Beats?', a: 'Yes. Western Beats is built for independent artists across all Indian languages including Tamil. No label, no contract, no fee.' },
              { q: 'What royalty percentage do I keep from Tamil music streams?', a: 'You keep 100% ownership. Western Beats takes nothing from your royalties.' },
              { q: 'Does Western Beats distribute Tamil music globally?', a: 'Yes. Your Tamil music goes to 150+ platforms worldwide — Indian platforms and international ones including Spotify, Apple Music, Amazon Music, Deezer, and Tidal.' },
              { q: 'How important is Tamil music on streaming platforms?', a: 'Tamil is India\'s second largest regional music market. Tamil songs regularly chart globally, and the Tamil diaspora in the US, UK, Sri Lanka, and Southeast Asia drives international streams.' },
              { q: 'Can I get my Tamil song on Jio Caller Tune?', a: 'Yes. Jio Caller Tune (CRBT) distribution is included in Western Beats\' free service — Tamil songs are top caller tunes across South India.' },
              { q: 'How long does Tamil music distribution take?', a: 'After review (within 24 hours), your Tamil music goes live on all platforms within 72 hours.' },
              { q: 'Does DistroKid support Tamil music distribution to Indian platforms?', a: 'No. DistroKid doesn\'t distribute to JioSaavn or Gaana. For Tamil music to reach Indian listeners, you need Western Beats.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Distribute Your Tamil Music Free Today</h2>
          <p style={{ color: '#8899AA', fontSize: 16, maxWidth: 560, margin: '0 auto 32px' }}>JioSaavn, Gaana, Spotify, Apple Music, Jio Caller Tune and 145+ more. 72 hours. ₹0 forever.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Tamil Music Free →</Link>
            <Link href="/how-it-works" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '16px 32px', borderRadius: 14, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>How It Works</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
