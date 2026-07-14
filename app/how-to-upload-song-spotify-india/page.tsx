import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'How to Upload Your Song on Spotify India Free in 2026 — Step by Step | Western Beats',
  description: 'Learn exactly how to upload your song on Spotify India free in 2026. You need a music distributor — Western Beats is free, gets your song on Spotify in 72 hours, plus JioSaavn, Gaana & 148 more platforms.',
  keywords: [
    'how to upload song on spotify india free',
    'how to get my song on spotify india',
    'upload music on spotify india 2026',
    'how to upload song spotify india free 2026',
    'how to put my song on spotify india',
    'spotify music upload india free',
    'get song on spotify india without cost',
    'spotify india music distribution free',
    'how to distribute music to spotify india',
    'spotify for artists india upload',
    'indie artist spotify india upload',
    'upload song spotify india no cost',
    'how to add music to spotify india',
    'spotify distribution india free',
    'upload music spotify india independent artist',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/how-to-upload-song-spotify-india' },
  openGraph: {
    title: 'How to Upload Your Song on Spotify India Free in 2026 | Western Beats',
    description: 'Step-by-step guide: upload your song on Spotify India free in 2026 via Western Beats. 72 hours, 150+ platforms, 100% ownership.',
    url: 'https://www.westernbeats.com/how-to-upload-song-spotify-india',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'How to Upload Song on Spotify India Free 2026 | Western Beats' },
  robots: { index: true, follow: true },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://www.westernbeats.com/how-to-upload-song-spotify-india',
      name: 'How to Upload Your Song on Spotify India Free in 2026',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Spotify Distribution', item: 'https://www.westernbeats.com/spotify-distribution' },
          { '@type': 'ListItem', position: 3, name: 'How to Upload Song on Spotify India', item: 'https://www.westernbeats.com/how-to-upload-song-spotify-india' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      name: 'How to Upload Your Song on Spotify India Free in 2026',
      description: 'Step-by-step guide to get your music on Spotify India for free using Western Beats as your music distributor.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Prepare Your Music Files', text: 'Export your song as a WAV file (44.1kHz, 16-bit or higher). Spotify accepts WAV and FLAC. Prepare your square cover artwork at minimum 3000×3000px in JPG or PNG format.' },
        { '@type': 'HowToStep', position: 2, name: 'Sign Up with Western Beats (Free)', text: 'Go to westernbeats.com/submit. Western Beats is a free music distributor that sends your music to Spotify India and 150+ other platforms — no subscription, no annual fee.' },
        { '@type': 'HowToStep', position: 3, name: 'Fill in Your Release Details', text: 'Enter your song title, artist name, genre, language, release date, and composer/lyricist credits. These details appear on Spotify exactly as entered.' },
        { '@type': 'HowToStep', position: 4, name: 'Upload Your Audio and Artwork', text: 'Upload your song file and cover art through the Western Beats submission form. Western Beats assigns a free ISRC code to your track automatically.' },
        { '@type': 'HowToStep', position: 5, name: 'Western Beats Delivers to Spotify', text: 'After reviewing your submission (within 24 hours), Western Beats delivers your song to Spotify India and all 150+ platforms simultaneously. Your song goes live within 72 hours.' },
        { '@type': 'HowToStep', position: 6, name: 'Claim Your Spotify for Artists Profile', text: 'Once your song is live, go to artists.spotify.com and claim your artist profile. This gives you analytics, playlist pitching access, and a verified profile badge.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Can I upload my song directly to Spotify India?', acceptedAnswer: { '@type': 'Answer', text: 'No. Spotify does not allow direct uploads from artists. You must use a music distributor. Western Beats is a free distributor that submits your music to Spotify India within 72 hours.' } },
        { '@type': 'Question', name: 'Is uploading to Spotify India free?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on which distributor you use. Western Beats is completely free — no subscription, no annual fee. DistroKid charges $22.99/year. TuneCore charges ₹999/year per album.' } },
        { '@type': 'Question', name: 'How long does it take to get on Spotify India?', acceptedAnswer: { '@type': 'Answer', text: 'With Western Beats, your song is live on Spotify India within 72 hours of approval. Plan for at least 7 days before your intended release date to allow buffer time.' } },
        { '@type': 'Question', name: 'What file format does Spotify accept?', acceptedAnswer: { '@type': 'Answer', text: 'Spotify accepts WAV (44.1kHz, 16-bit minimum) and FLAC files. MP3 at 320kbps is also accepted by Western Beats for distribution. Cover art must be at least 3000×3000px.' } },
        { '@type': 'Question', name: 'Do I need an ISRC code to upload to Spotify India?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every song on Spotify requires an ISRC code. Western Beats provides free ISRC codes with every distribution — you don\'t need to get one separately.' } },
        { '@type': 'Question', name: 'Will my song also go on JioSaavn when I upload to Spotify via Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. When you submit to Western Beats, your song goes to Spotify AND JioSaavn, Gaana, Apple Music, YouTube Music, Jio Caller Tune and 145+ other platforms simultaneously — all from one free submission.' } },
      ],
    },
  ],
}

export default function HowToUploadSongSpotifyIndiaPage() {
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
              <li><Link href="/spotify-distribution" style={{ color: '#4A5568', textDecoration: 'none' }}>Spotify Distribution</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>How to Upload to Spotify India</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(29,185,84,0.15)', border: '1px solid rgba(29,185,84,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#1DB954', marginBottom: 20 }}>Spotify Guide</div>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 60px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            How to Upload Your Song on<br /><span style={{ color: '#1DB954' }}>Spotify India</span> Free in 2026 —<br />Step by Step
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 640, lineHeight: 1.7, marginBottom: 36 }}>
            You cannot upload directly to Spotify — you need a music distributor. The good news: Western Beats is completely free, gets your song on Spotify India in 72 hours, and simultaneously distributes to JioSaavn, Gaana, Apple Music, and 147 more platforms.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#1DB954', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Upload to Spotify Free via Western Beats →</Link>
            <Link href="/spotify-distribution" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>Spotify Distribution Details</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 12 }}>Why You Can&apos;t Upload Directly to Spotify</h2>
            <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
              Unlike YouTube or SoundCloud, Spotify does not have a direct upload feature for artists. Every song on Spotify was placed there by a licensed music distributor. To get your song on Spotify India, you must submit it through a distributor like Western Beats.
            </p>
            <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
              This is actually good for artists — distributors handle the technical delivery, ISRC codes, metadata standards, royalty collection, and more. Western Beats does all of this for free.
            </p>
            <div style={{ background: '#0A1535', border: '1px solid rgba(29,185,84,0.2)', borderRadius: 16, padding: '24px', marginTop: 24 }}>
              <p style={{ color: 'white', fontWeight: 600, fontSize: 15, marginBottom: 4 }}>The answer to &quot;how to upload song on Spotify India free&quot; is:</p>
              <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.7 }}>Submit to Western Beats → Western Beats delivers to Spotify India within 72 hours → your song goes live simultaneously on JioSaavn, Gaana, Apple Music, and 147 more platforms.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 48 }}>How to Upload Your Song on Spotify India — 6 Steps</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { num: '01', title: 'Prepare Your Music Files', body: 'Export your song as a WAV file (44.1kHz, 16-bit or higher) — this is the highest quality Spotify accepts. Prepare square cover artwork at minimum 3000×3000px in JPG or PNG. Your cover art cannot include website URLs, social media handles, or explicit references.' },
              { num: '02', title: 'Go to Western Beats Submit Page', body: 'Visit westernbeats.com/submit. Western Beats is a free music distributor — no subscription, no annual fee. Fill in your artist name and contact details to start the submission.' },
              { num: '03', title: 'Enter Your Release Details', body: 'Fill in: Song Title, Artist Name, Genre, Language, Release Date, Composer Name, Lyricist Name. These details will appear on your Spotify page exactly as you enter them. Double-check spelling — changes after release can take days.' },
              { num: '04', title: 'Upload Audio and Cover Art', body: 'Upload your WAV or MP3 (320kbps) file and your square cover art. Western Beats automatically assigns a free ISRC code to your track — you don\'t need to source one separately.' },
              { num: '05', title: 'Western Beats Delivers to Spotify and 150+ Platforms', body: 'After reviewing your submission (usually within 24 hours), Western Beats delivers your song to Spotify India, JioSaavn, Gaana, Apple Music, YouTube Music, Jio Caller Tune, and 145+ more platforms simultaneously.' },
              { num: '06', title: 'Claim Your Spotify for Artists Profile', body: 'Once your song is live on Spotify (within 72 hours of approval), go to artists.spotify.com and claim your profile. You\'ll get an artist photo, bio, analytics, and the ability to pitch your songs directly to Spotify\'s editorial team for playlist consideration.' },
            ].map(step => (
              <div key={step.num} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '28px 32px', display: 'flex', gap: 24 }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: '#1DB954', minWidth: 56, lineHeight: 1 }}>{step.num}</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: 18, marginBottom: 10 }}>{step.title}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.8 }}>{step.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 36 }}>Western Beats vs Paid Distributors for Spotify India</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ background: '#0A1535' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', color: '#8899AA', fontWeight: 600 }}>Feature</th>
                    <th style={{ padding: '14px 16px', textAlign: 'center', color: '#0A64C3', fontWeight: 700 }}>Western Beats</th>
                    <th style={{ padding: '14px 16px', textAlign: 'center', color: '#8899AA', fontWeight: 600 }}>DistroKid</th>
                    <th style={{ padding: '14px 16px', textAlign: 'center', color: '#8899AA', fontWeight: 600 }}>TuneCore</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Annual Cost', '₹0 Free', '$22.99/year', '₹999/year per album'],
                    ['Spotify India', '✓ Yes', '✓ Yes', '✓ Yes'],
                    ['JioSaavn', '✓ Yes', '✗ No', '✗ No'],
                    ['Gaana', '✓ Yes', '✗ No', '✗ No'],
                    ['Jio Caller Tune', '✓ Yes', '✗ No', '✗ No'],
                    ['Free ISRC Codes', '✓ Yes', '✓ Yes', '₹ Paid'],
                    ['100% Ownership', '✓ Yes', '✓ Yes', '✓ Yes'],
                    ['Warner Music India', '✓ Partner', '✗ No', '✗ No'],
                  ].map(([feature, wb, dk, tc], i) => (
                    <tr key={feature} style={{ background: i % 2 === 0 ? 'transparent' : '#060C18', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '12px 16px', color: '#8899AA' }}>{feature}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'center', color: '#5CB2DC', fontWeight: 600 }}>{wb}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'center', color: '#4A5568' }}>{dk}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'center', color: '#4A5568' }}>{tc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 36 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { q: 'Can I upload my song directly to Spotify India?', a: 'No. Spotify requires a licensed distributor. Western Beats is free — submit at westernbeats.com/submit and your song is on Spotify India in 72 hours.' },
              { q: 'Is uploading to Spotify India free?', a: 'It depends on the distributor. Western Beats is completely free — ₹0, no subscription. DistroKid charges $22.99/year. TuneCore charges ₹999/year per album.' },
              { q: 'How long does it take to get on Spotify India?', a: 'With Western Beats, your song is live on Spotify India within 72 hours of approval. Allow at least 7 days before your intended release date.' },
              { q: 'What format does Spotify accept for uploads?', a: 'Spotify requires WAV (44.1kHz, 16-bit minimum) or FLAC. Western Beats also accepts MP3 at 320kbps. Cover art must be at least 3000×3000px.' },
              { q: 'Do I need an ISRC code to upload to Spotify?', a: 'Yes, every Spotify track needs an ISRC code. Western Beats provides free ISRC codes automatically with every submission.' },
              { q: 'Will my song go on JioSaavn too when I use Western Beats?', a: 'Yes. One submission to Western Beats distributes to Spotify, JioSaavn, Gaana, Apple Music, YouTube Music, Jio Caller Tune and 145+ more platforms simultaneously.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 14 }}>
            <Link href="/spotify-distribution" style={{ color: '#0A64C3', fontWeight: 600 }}>Spotify Distribution India →</Link>
            <Link href="/blog/how-to-get-verified-spotify-india" style={{ color: '#0A64C3', fontWeight: 600 }}>How to Get Verified on Spotify →</Link>
            <Link href="/blog/spotify-royalties-india-2026" style={{ color: '#0A64C3', fontWeight: 600 }}>Spotify Royalty Rates India →</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Upload Your Song to Spotify India Free — Right Now</h2>
          <p style={{ color: '#8899AA', fontSize: 16, maxWidth: 560, margin: '0 auto 32px' }}>Spotify + JioSaavn + Gaana + Apple Music + Jio Caller Tune + 145 more. 72 hours. ₹0 forever.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#1DB954', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
            <Link href="/how-it-works" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '16px 32px', borderRadius: 14, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>How It Works</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
