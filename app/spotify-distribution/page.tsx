import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Get Your Song on Spotify Free India 2026 — Spotify Distribution | Western Beats',
  description: 'Distribute your song to Spotify India free in 72 hours. Western Beats also covers JioSaavn, Gaana, Apple Music and 150+ more platforms — all in one free submission. No subscription needed.',
  keywords: [
    'Spotify distribution India free',
    'how to get song on Spotify India free',
    'upload music to Spotify India free',
    'Spotify music distribution India 2026',
    'free Spotify distribution India',
    'put song on Spotify India without paying',
    'Spotify distribution independent artist India',
    'how to distribute music Spotify India',
    'get on Spotify India free 2026',
    'Spotify submission India free',
  ],
  alternates: { canonical: 'https://westernbeats.com/spotify-distribution' },
  openGraph: {
    title: 'Free Spotify Distribution India 2026 — Upload Your Song | Western Beats',
    description: 'Get on Spotify India free in 72 hours, plus JioSaavn, Gaana and 150+ more platforms. No subscription.',
    url: 'https://westernbeats.com/spotify-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Free Spotify Distribution India 2026 | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://westernbeats.com/spotify-distribution',
  name: 'Free Spotify Distribution India 2026',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Spotify Distribution', item: 'https://westernbeats.com/spotify-distribution' },
  ]},
}

export default function SpotifyPage() {
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
              <li style={{ color: '#5CB2DC' }}>Spotify Distribution India</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>Spotify Distribution</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Get Your Song on <span style={{ color: '#1DB954' }}>Spotify</span><br />India — Free in 72 Hours
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 640, lineHeight: 1.7, marginBottom: 36 }}>
            Western Beats distributes your music to Spotify India — plus JioSaavn, Gaana, Apple Music, Jio Caller Tune and 147 more platforms, all in one free submission. No Spotify artist account fees. No subscription.
          </p>
          <Link href="/submit" style={{ background: '#1DB954', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Submit to Spotify Free →</Link>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 40 }}>Spotify + Every Indian Platform. One Submission.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
              {['Spotify', 'JioSaavn', 'Gaana', 'Apple Music', 'YouTube Music', 'Wynk Music', 'Amazon Music', 'Hungama', 'Jio Caller Tune', 'Airtel Hello Tune'].map(p => (
                <div key={p} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '16px', textAlign: 'center', fontWeight: 600, color: 'white', fontSize: 14 }}>{p}</div>
              ))}
            </div>
            <p style={{ color: '#4A5568', textAlign: 'center', fontSize: 13, marginTop: 16 }}>+ 140 more platforms worldwide</p>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Spotify Distribution FAQ — India</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'How do I get my song on Spotify India for free?', a: 'Submit at westernbeats.com/submit. Western Beats delivers your music to Spotify India (and 150+ other platforms) within 72 hours. Completely free — no subscription, no fee.' },
              { q: 'Do I need a Spotify for Artists account?', a: 'No, you don\'t need to create a Spotify for Artists account before submitting. Western Beats handles distribution. After your song is live, you can claim your Spotify for Artists profile to access analytics.' },
              { q: 'How much does Spotify pay per stream in India?', a: 'Approximately ₹0.08–₹0.25 per stream for Indian listeners ($0.001–$0.003). Rates vary based on premium vs free tier usage. Use our free Royalty Calculator to estimate your earnings.' },
              { q: 'Can I pitch to Spotify editorial playlists?', a: 'Yes. After submission, Western Beats can pitch your unreleased track to Spotify India\'s editorial team for playlist consideration. Submit at least 7 days before release date for pitching eligibility.' },
              { q: 'Does Western Beats distribute to Spotify AND JioSaavn?', a: 'Yes. One submission distributes to both Spotify and JioSaavn — plus Gaana, Apple Music, Wynk, Hungama, Jio Caller Tune, and 143 more platforms simultaneously.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Get on Spotify India in 72 Hours</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>Free forever. Plus JioSaavn, Gaana, Apple Music, Caller Tune, and 147 more.</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
          <div style={{ marginTop: 24 }}><Link href="/royalty-calculator" style={{ color: '#5CB2DC', fontSize: 14 }}>Calculate Your Spotify Royalties →</Link></div>
        </section>
      </main>
      <Footer />
    </>
  )
}
