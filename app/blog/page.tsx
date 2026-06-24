import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Music Distribution Blog India 2026 — Guides, Tips & Tutorials | Western Beats',
  description: 'Free guides for independent artists in India: how to distribute music online, get on JioSaavn & Spotify free, understand ISRC codes, caller tune distribution, and earn more royalties in 2026.',
  keywords: [
    'music distribution guide India 2026',
    'how to distribute music India',
    'independent artist guide India',
    'music distribution tips India',
    'how to get song on JioSaavn free',
    'ISRC code guide India',
    'caller tune distribution guide',
    'music royalties India guide',
    'free music distribution blog',
    'Western Beats blog',
  ],
  alternates: { canonical: 'https://westernbeats.com/blog' },
  openGraph: {
    title: 'Music Distribution Blog India 2026 | Western Beats',
    description: 'Free guides for Indian artists: distribute music, get on JioSaavn, understand ISRC codes, caller tunes, and earn royalties.',
    url: 'https://westernbeats.com/blog',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Music Distribution Blog India | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  url: 'https://westernbeats.com/blog',
  name: 'Western Beats Blog — Music Distribution Guides for Indian Artists',
  description: 'Free guides, tutorials and tips for independent artists in India to distribute their music online and earn royalties.',
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://westernbeats.com' },
}

const POSTS = [
  {
    slug: 'how-to-distribute-music-india-free',
    title: 'How to Distribute Your Music in India for Free in 2026 — Complete Guide',
    excerpt: 'A complete step-by-step guide for Indian independent artists to distribute their music to 150+ platforms including JioSaavn, Gaana, Spotify, and Apple Music — at zero cost.',
    tag: 'Distribution Guide',
    color: '#0A64C3',
    readTime: '8 min read',
    date: 'June 2026',
  },
  {
    slug: 'caller-tune-crbt-distribution-india',
    title: 'Caller Tune / CRBT Distribution India: How to Get Your Song as a Jio & Airtel Caller Tune',
    excerpt: 'Everything Indian artists need to know about CRBT (Caller Ring Back Tone) distribution — how it works, which platforms support it, and how to get your song set as a caller tune on Jio, Airtel, Vi and BSNL for free.',
    tag: 'Caller Tune',
    color: '#C41230',
    readTime: '6 min read',
    date: 'June 2026',
  },
  {
    slug: 'free-isrc-upc-code-india',
    title: 'Free ISRC & UPC Codes for Independent Artists in India — Everything You Need to Know',
    excerpt: 'What are ISRC and UPC codes, why every song needs them before distribution, and how to get them completely free as an independent artist in India.',
    tag: 'ISRC & UPC',
    color: '#0A64C3',
    readTime: '5 min read',
    date: 'June 2026',
  },
  {
    slug: 'distrokid-india-problems',
    title: 'Why DistroKid Doesn\'t Work for Indian Artists — And What to Use Instead',
    excerpt: 'DistroKid charges $22.99/year, doesn\'t include JioSaavn or Gaana, and has no support for caller tunes. Here\'s why Indian artists are switching to Western Beats.',
    tag: 'Comparison',
    color: '#C41230',
    readTime: '7 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-much-jiosaavn-pays-per-stream',
    title: 'How Much Does JioSaavn Pay Per Stream in India? (2026 Real Rates)',
    excerpt: 'JioSaavn pays ₹0.08–₹0.15 per stream for Indian listeners. Full breakdown of 2026 royalty rates, earnings calculator by stream count, and how to maximise your JioSaavn income.',
    tag: 'Royalties',
    color: '#0A64C3',
    readTime: '6 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-submit-song-jio-caller-tune',
    title: 'How to Submit Your Song to Jio Caller Tune (CRBT) Free 2026',
    excerpt: 'Step-by-step guide to get your song as a Jio Caller Tune. Covers the full submission process, how much Jio pays per CRBT subscription, and which distributors actually include Jio CRBT.',
    tag: 'Caller Tune',
    color: '#C41230',
    readTime: '7 min read',
    date: 'June 2026',
  },
  {
    slug: 'haryanvi-music-distribution-india',
    title: 'Haryanvi Music Distribution India Free 2026 — JioSaavn, Gaana, Caller Tune',
    excerpt: 'Haryanvi music is India\'s fastest-growing genre at +35% YoY. Complete guide for independent Haryanvi artists to distribute music to JioSaavn, Gaana, Jio Caller Tune and 150+ platforms free.',
    tag: 'Regional Music',
    color: '#0A64C3',
    readTime: '6 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-earn-money-from-music-india',
    title: 'How to Earn Money from Music in India 2026 — 7 Revenue Streams',
    excerpt: 'All 7 ways Indian independent artists can earn money from music: streaming royalties, caller tunes, YouTube Content ID, sync licensing, live shows, brand deals, and merch — with real earning estimates.',
    tag: 'Income Guide',
    color: '#0A64C3',
    readTime: '9 min read',
    date: 'June 2026',
  },
  {
    slug: 'bhojpuri-music-distribution-india',
    title: 'Bhojpuri Music Distribution India Free 2026 — JioSaavn, Gaana, Caller Tune',
    excerpt: 'Bhojpuri music is growing at +30% YoY with 150M+ speakers. Complete guide for independent Bhojpuri artists to distribute music free to JioSaavn, Gaana, Jio Caller Tune and 150+ platforms.',
    tag: 'Regional Music',
    color: '#C41230',
    readTime: '6 min read',
    date: 'June 2026',
  },
  {
    slug: 'youtube-content-id-india',
    title: 'YouTube Content ID India 2026 — What It Is & How to Get It Free',
    excerpt: 'Every time someone uses your music in a YouTube video, you should earn money. YouTube Content ID makes that happen. Complete guide for Indian independent artists — what it is, how it works, and how to get it free.',
    tag: 'YouTube Guide',
    color: '#FF4444',
    readTime: '8 min read',
    date: 'June 2026',
  },
  {
    slug: 'music-copyright-india',
    title: 'Music Copyright India 2026 — Complete Guide for Independent Artists',
    excerpt: 'Music copyright in India explained — how automatic copyright works, the difference between composition and master rights, ISRC codes, formal registration at copyright.gov.in, and how Western Beats protects your IP.',
    tag: 'Copyright & Law',
    color: '#0A64C3',
    readTime: '10 min read',
    date: 'June 2026',
  },
  {
    slug: 'how-to-get-verified-spotify-india',
    title: 'How to Get Verified on Spotify India 2026 — Spotify for Artists Blue Tick',
    excerpt: 'Complete step-by-step guide to getting the Spotify for Artists verified badge, claiming your profile, pitching to editorial playlists, and growing your Spotify streams in India.',
    tag: 'Spotify Guide',
    color: '#1DB954',
    readTime: '7 min read',
    date: 'June 2026',
  },
]

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', color: 'white' }}>

        {/* Hero */}
        <section style={{ padding: '120px 24px 60px', maxWidth: 900, margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
            <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: '#4A5568', listStyle: 'none', padding: 0 }}>
              <li><Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>Blog</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>
            Artist Resources
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            Music Distribution <span style={{ color: '#0A64C3' }}>Guides</span> for Indian Artists
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 640, lineHeight: 1.7 }}>
            Free tutorials, tips, and step-by-step guides to help independent artists in India distribute their music, understand royalties, and grow their career.
          </p>
        </section>

        {/* Posts Grid */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 100px' }}>
          <div style={{ display: 'grid', gap: 28 }}>
            {POSTS.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '32px 36px', display: 'flex', flexDirection: 'column', gap: 12, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ background: `${post.color}22`, color: post.color, border: `1px solid ${post.color}44`, borderRadius: 20, padding: '4px 12px', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>{post.tag}</span>
                    <span style={{ fontSize: 12, color: '#4A5568' }}>{post.date} · {post.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: 'white', lineHeight: 1.3, margin: 0 }}>{post.title}</h2>
                  <p style={{ fontSize: 15, color: '#8899AA', lineHeight: 1.7, margin: 0 }}>{post.excerpt}</p>
                  <span style={{ fontSize: 14, color: post.color, fontWeight: 600, marginTop: 4 }}>Read article →</span>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#060C18', padding: '60px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Ready to Distribute Your Music?</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 28 }}>Free forever. 150+ platforms. 100% ownership. Warner Music Partner backed.</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            Submit Your Music Free →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
