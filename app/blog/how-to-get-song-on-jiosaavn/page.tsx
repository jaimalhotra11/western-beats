import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'How to Get Your Song on JioSaavn India 2026 — Free Step-by-Step Guide | Western Beats',
  description: 'Complete free step-by-step guide to get your song on JioSaavn India in 2026. Learn the exact submission process, what JioSaavn pays per stream, and how to pitch to editorial playlists.',
  keywords: [
    'how to get song on jiosaavn',
    'jiosaavn music submission india',
    'how to upload song on jiosaavn free',
    'jiosaavn distribution independent artist',
    'how to submit music to jiosaavn india',
    'get music on jiosaavn 2026',
    'jiosaavn music upload guide',
    'jiosaavn artist submission india free',
    'how to distribute music jiosaavn',
    'upload music jiosaavn india 2026',
    'jiosaavn submission process india',
    'how to add song to jiosaavn',
    'jiosaavn music distribution guide',
    'independent artist jiosaavn india',
    'jiosaavn free music upload',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-to-get-song-on-jiosaavn' },
  openGraph: {
    title: 'How to Get Your Song on JioSaavn India 2026 — Free Step-by-Step | Western Beats',
    description: 'Free guide: get your song on JioSaavn in 72 hours via Western Beats. 5 steps, editorial pitching tips, and what JioSaavn pays per stream.',
    url: 'https://www.westernbeats.com/blog/how-to-get-song-on-jiosaavn',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'How to Get Song on JioSaavn India 2026 | Western Beats' },
  robots: { index: true, follow: true },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Get Your Song on JioSaavn India 2026 — Free Step-by-Step Guide',
      datePublished: '2026-07-01',
      dateModified: '2026-07-01',
      author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
      publisher: { '@type': 'Organization', name: 'Western Beats', logo: { '@type': 'ImageObject', url: 'https://www.westernbeats.com/partners/westernbeats-BpLvGE3e.png' } },
      image: 'https://www.westernbeats.com/og-image.jpg',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.westernbeats.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'How to Get Song on JioSaavn', item: 'https://www.westernbeats.com/blog/how-to-get-song-on-jiosaavn' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      name: 'How to Get Your Song on JioSaavn India Free',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Prepare Your Files', text: 'Export your song as WAV (44.1kHz, 16-bit minimum). Prepare 3000×3000px cover art in JPG or PNG.' },
        { '@type': 'HowToStep', position: 2, name: 'Submit to Western Beats', text: 'Go to westernbeats.com/submit and fill in your song details: title, artist name, genre, language, release date, and composer/lyricist credits.' },
        { '@type': 'HowToStep', position: 3, name: 'Upload Audio and Artwork', text: 'Upload your audio file and cover art. Western Beats assigns a free ISRC code automatically.' },
        { '@type': 'HowToStep', position: 4, name: 'Approval and Distribution', text: 'Western Beats reviews your submission within 24 hours and distributes to JioSaavn and 150+ platforms simultaneously.' },
        { '@type': 'HowToStep', position: 5, name: 'Pitch to JioSaavn Playlists', text: 'Once live, Western Beats\' Warner Music India Partnership gives your release priority access to JioSaavn\'s editorial playlist team.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do I get my song on JioSaavn?', acceptedAnswer: { '@type': 'Answer', text: 'You need a music distributor. Submit at westernbeats.com/submit — Western Beats distributes to JioSaavn and 150+ platforms within 72 hours for free.' } },
        { '@type': 'Question', name: 'Can I submit music to JioSaavn directly?', acceptedAnswer: { '@type': 'Answer', text: 'No. JioSaavn does not accept direct submissions from independent artists. You must go through a licensed music distributor like Western Beats.' } },
        { '@type': 'Question', name: 'How long does it take to get on JioSaavn?', acceptedAnswer: { '@type': 'Answer', text: 'With Western Beats, your song is live on JioSaavn within 72 hours of approval. Review typically takes less than 24 hours.' } },
        { '@type': 'Question', name: 'How much does JioSaavn pay per stream?', acceptedAnswer: { '@type': 'Answer', text: 'JioSaavn pays approximately ₹0.08–₹0.15 per stream for Indian listeners. 10,000 streams = ₹800–₹1,500. Rates vary based on subscription type and geography.' } },
        { '@type': 'Question', name: 'Does DistroKid distribute to JioSaavn?', acceptedAnswer: { '@type': 'Answer', text: 'No. DistroKid, TuneCore, and most global distributors do not distribute to JioSaavn. Western Beats includes JioSaavn as a standard platform.' } },
        { '@type': 'Question', name: 'How do I get on JioSaavn editorial playlists?', acceptedAnswer: { '@type': 'Answer', text: 'Distribute via Western Beats — our Warner Music India Partnership gives your releases priority consideration for JioSaavn editorial playlists. Submit your music at least 7 days before your release date.' } },
      ],
    },
  ],
}

export default function HowToGetSongOnJioSaavnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', color: 'white' }}>
        <article style={{ maxWidth: 800, margin: '0 auto', padding: '120px 24px 80px' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 28 }}>
            <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: '#4A5568', listStyle: 'none', padding: 0 }}>
              <li><Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li><Link href="/blog" style={{ color: '#4A5568', textDecoration: 'none' }}>Blog</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>How to Get Song on JioSaavn</li>
            </ol>
          </nav>

          <div style={{ display: 'flex', gap: 12, marginBottom: 24, alignItems: 'center' }}>
            <span style={{ background: 'rgba(10,100,195,0.2)', color: '#5CB2DC', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '4px 12px', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>JioSaavn Guide</span>
            <span style={{ fontSize: 13, color: '#4A5568' }}>July 2026 · 8 min read</span>
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            How to Get Your Song on JioSaavn India 2026 — Free Step-by-Step Guide
          </h1>
          <p style={{ fontSize: 17, color: '#8899AA', lineHeight: 1.8, marginBottom: 36 }}>
            JioSaavn is India&apos;s largest music streaming platform with 150M+ monthly active users. Every Jio SIM — and there are 450M of them — comes with built-in JioSaavn access. If you&apos;re an independent artist in India and your music isn&apos;t on JioSaavn, you&apos;re invisible to the majority of Indian listeners.
          </p>

          <div style={{ background: '#0A1535', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 16, padding: '20px 24px', marginBottom: 40 }}>
            <p style={{ fontWeight: 700, color: 'white', marginBottom: 4 }}>The short answer:</p>
            <p style={{ color: '#8899AA', fontSize: 15 }}>You cannot submit directly to JioSaavn. Submit to Western Beats (free) → your song goes live on JioSaavn and 150+ platforms in 72 hours.</p>
            <Link href="/submit" style={{ display: 'inline-block', marginTop: 12, background: '#0A64C3', color: 'white', padding: '10px 24px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Submit Your Music Free →</Link>
          </div>

          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, marginTop: 48 }}>Why JioSaavn Is the Most Important Platform for Indian Artists</h2>
          <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Unlike Spotify, which is a global platform with a relatively small Indian user base, JioSaavn is India-native. It hosts the most comprehensive Hindi, Punjabi, Tamil, Telugu, and regional music catalogue of any Indian platform. It is the go-to destination for Indian listeners across all age groups.
          </p>
          <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            JioSaavn also powers Jio Caller Tune (Hello Tune) — when users set your song as their incoming call tone, it reaches callers who have never searched for you. This passive discovery mechanism is unique to Indian telecom and has no equivalent anywhere else in the world.
          </p>
          <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
            Most global distributors (DistroKid, TuneCore, CD Baby) do not distribute to JioSaavn. This is the single biggest gap in global distribution for Indian artists. <Link href="/jiosaavn-distribution" style={{ color: '#0A64C3' }}>Western Beats includes JioSaavn as standard</Link> — free, with every submission.
          </p>

          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, marginTop: 48 }}>How to Get Your Song on JioSaavn — 5 Steps</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 48 }}>
            {[
              { num: '01', title: 'Prepare Your Files', body: 'Export your song as a WAV file at 44.1kHz, 16-bit or higher. This is the quality standard for major streaming platforms. If WAV isn\'t available, MP3 at 320kbps is also accepted. Prepare your album cover art as a square image (1:1 ratio) at minimum 3000×3000px in JPG or PNG format. JioSaavn will reject artwork with URLs, social media handles, or low-resolution images.' },
              { num: '02', title: 'Submit to Western Beats (Free)', body: 'Go to westernbeats.com/submit. Western Beats is a free music distributor with JioSaavn as a standard distribution platform. Fill in your basic artist information and contact details.' },
              { num: '03', title: 'Enter Your Song Details', body: 'Complete your release information: Song Title (exactly as you want it to appear on JioSaavn), Artist Name, Genre, Language, Release Date, Composer Name, Lyricist Name. Accuracy matters — JioSaavn catalogs music with this metadata and it affects how your song surfaces in search.' },
              { num: '04', title: 'Upload Audio and Artwork', body: 'Upload your audio file and cover art. Western Beats automatically assigns a free ISRC code to your track — this international code uniquely identifies your recording and is required for JioSaavn distribution. You receive it at no charge.' },
              { num: '05', title: 'Live on JioSaavn in 72 Hours', body: 'Western Beats reviews your submission (typically within 24 hours) and distributes to JioSaavn and all 150+ platforms simultaneously. You\'ll receive confirmation when your music is live. Your song will also be available as a Jio Caller Tune automatically.' },
            ].map(step => (
              <div key={step.num} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px 28px', display: 'flex', gap: 20 }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: '#0A64C3', minWidth: 48 }}>{step.num}</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: 16, marginBottom: 8 }}>{step.title}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.8 }}>{step.body}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, marginTop: 48 }}>How Much Does JioSaavn Pay Per Stream in 2026?</h2>
          <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            JioSaavn pays approximately ₹0.08–₹0.15 per stream for Indian listeners in 2026. This is higher than Spotify&apos;s effective India rate ($0.001–$0.003) and reflects JioSaavn&apos;s subscriber mix.
          </p>
          <div style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px', marginBottom: 32 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, textAlign: 'center' }}>
              {[
                { streams: '10,000', earnings: '₹800–₹1,500' },
                { streams: '100,000', earnings: '₹8,000–₹15,000' },
                { streams: '1,000,000', earnings: '₹80,000–₹1,50,000' },
              ].map(row => (
                <div key={row.streams}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#0A64C3', marginBottom: 4 }}>{row.streams}</div>
                  <div style={{ fontSize: 12, color: '#4A5568', marginBottom: 4 }}>JioSaavn Streams</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#5CB2DC' }}>{row.earnings}</div>
                  <div style={{ fontSize: 11, color: '#4A5568' }}>estimated earnings</div>
                </div>
              ))}
            </div>
          </div>
          <p style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7, marginBottom: 36 }}>
            Beyond streaming, JioSaavn Caller Tune (CRBT) earnings add another revenue stream — approximately ₹1.50–₹3.00 per subscriber per month. Read our <Link href="/blog/how-much-jiosaavn-pays-per-stream" style={{ color: '#0A64C3' }}>full JioSaavn pay per stream guide</Link> for a detailed breakdown.
          </p>

          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, marginTop: 48 }}>How to Get on JioSaavn Editorial Playlists</h2>
          <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            JioSaavn&apos;s editorial team curates playlists like &quot;Fresh Hindi Hits,&quot; &quot;Punjabi Fire,&quot; &quot;Tamil Hits,&quot; and genre/mood playlists. Getting placed on one can add thousands of streams overnight.
          </p>
          <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Western Beats&apos; Warner Music India Partnership gives your releases priority consideration for JioSaavn editorial playlists. Submit your music to Western Beats at least 7–10 days before your intended release date. The earlier you submit, the more time the editorial team has to review your track.
          </p>
          <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
            When submitting, include: genre, language, mood, target audience, and any notable facts about the song (featured artists, notable collaborators, related film/project). Specific context helps the editorial team match your song to the right playlist.
          </p>

          <div style={{ marginTop: 40, padding: '20px 24px', background: '#060D1F', borderRadius: 12, fontSize: 13, color: '#4A5568' }}>
            Related: <Link href="/jiosaavn-distribution" style={{ color: '#0A64C3' }}>JioSaavn Distribution India</Link> · <Link href="/blog/how-much-jiosaavn-pays-per-stream" style={{ color: '#0A64C3' }}>JioSaavn Pay Per Stream</Link> · <Link href="/caller-tune-distribution" style={{ color: '#0A64C3' }}>Caller Tune Distribution</Link>
          </div>

          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24, marginTop: 48 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'How do I get my song on JioSaavn?', a: 'Submit at westernbeats.com/submit. Western Beats distributes to JioSaavn and 150+ platforms within 72 hours — free.' },
              { q: 'Can I submit music to JioSaavn directly?', a: 'No. JioSaavn doesn\'t accept direct artist submissions. You need a licensed distributor like Western Beats.' },
              { q: 'How long does it take to get on JioSaavn?', a: 'With Western Beats: 24-hour review + 72 hours to go live. Plan for at least 7 days before your intended release date.' },
              { q: 'How much does JioSaavn pay per stream?', a: 'Approximately ₹0.08–₹0.15 per stream for Indian listeners. 100,000 streams = approximately ₹8,000–₹15,000.' },
              { q: 'Does DistroKid distribute to JioSaavn?', a: 'No. DistroKid, TuneCore, and most global distributors don\'t include JioSaavn. Western Beats includes it as standard.' },
              { q: 'How do I get on JioSaavn editorial playlists?', a: 'Distribute via Western Beats — our Warner Music India Partnership gives your releases priority playlist consideration. Submit at least 7–10 days before release.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </article>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>Get Your Song on JioSaavn Free in 72 Hours</h2>
          <p style={{ color: '#8899AA', fontSize: 16, maxWidth: 520, margin: '0 auto 28px' }}>Plus Gaana, Spotify, Apple Music, Jio Caller Tune and 145+ more platforms. ₹0 forever.</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
