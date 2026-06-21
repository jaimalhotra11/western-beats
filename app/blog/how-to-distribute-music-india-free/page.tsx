import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'How to Distribute Music in India for Free in 2026 — Complete Guide | Western Beats',
  description: 'Step-by-step guide for Indian independent artists to distribute music to JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms in 2026 — completely free, no subscription, 100% ownership.',
  keywords: [
    'how to distribute music in India free 2026',
    'free music distribution India guide',
    'how to upload song JioSaavn free',
    'how to get song on Spotify India free',
    'music distribution independent artist India',
    'how to distribute music without paying',
    'upload music all platforms free India',
    'independent music distribution India 2026',
    'music distribution no subscription India',
    'distribute music online India free',
  ],
  alternates: { canonical: 'https://westernbeats.com/blog/how-to-distribute-music-india-free' },
  openGraph: {
    title: 'How to Distribute Music in India for Free in 2026 | Western Beats',
    description: 'Complete guide: distribute to 150+ platforms including JioSaavn, Gaana, Spotify — free, no subscription, 100% ownership.',
    url: 'https://westernbeats.com/blog/how-to-distribute-music-india-free',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'How to Distribute Music Free in India 2026 | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Distribute Your Music in India for Free in 2026 — Complete Guide',
      description: 'Step-by-step guide for Indian independent artists to distribute music to 150+ platforms free.',
      author: { '@type': 'Organization', name: 'Western Beats', url: 'https://westernbeats.com' },
      publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://westernbeats.com', logo: { '@type': 'ImageObject', url: 'https://westernbeats.com/icon.png' } },
      datePublished: '2026-06-01',
      dateModified: '2026-06-21',
      url: 'https://westernbeats.com/blog/how-to-distribute-music-india-free',
      image: 'https://westernbeats.com/og-image.jpg',
    },
    {
      '@type': 'HowTo',
      name: 'How to Distribute Music in India for Free',
      description: 'Distribute your music to JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms for free in India.',
      totalTime: 'PT30M',
      supply: [
        { '@type': 'HowToSupply', name: 'Audio file (WAV preferred, or 320kbps MP3)' },
        { '@type': 'HowToSupply', name: 'Album artwork (square JPG/PNG, minimum 3000×3000px)' },
        { '@type': 'HowToSupply', name: 'Google Drive or WeTransfer link to your files' },
      ],
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Prepare your audio file', text: 'Export your track as WAV (preferred) or 320kbps MP3. Make sure it is fully mixed and mastered before distribution.' },
        { '@type': 'HowToStep', position: 2, name: 'Create square album artwork', text: 'Design a square cover image at minimum 3000×3000 pixels. Save as JPG or PNG. Avoid blurry images — platforms reject low-quality artwork.' },
        { '@type': 'HowToStep', position: 3, name: 'Upload to Google Drive', text: 'Upload both your audio file and artwork to Google Drive or WeTransfer. Make sure sharing is set to "Anyone with the link can view".' },
        { '@type': 'HowToStep', position: 4, name: 'Submit to Western Beats', text: 'Fill out the submission form at westernbeats.com/submit with your artist name, track details, genre, language, release date, and your Drive link.' },
        { '@type': 'HowToStep', position: 5, name: 'Wait for review (24 hours)', text: 'Western Beats reviews your submission within 24 hours — checking metadata, artwork quality, and audio standards.' },
        { '@type': 'HowToStep', position: 6, name: 'Go live on 150+ platforms', text: 'After approval, your music goes live on JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and 145+ more platforms within 72 hours.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is music distribution in India really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — with Western Beats, music distribution to 150+ platforms is completely free. ₹0 upfront, no annual subscription, no per-release fee. Western Beats only earns a revenue share when you earn royalties.' } },
        { '@type': 'Question', name: 'How long does it take to go live on JioSaavn?', acceptedAnswer: { '@type': 'Answer', text: 'Western Beats delivers your music to JioSaavn, Gaana, Spotify, and all other platforms within 72 hours of approval. Approval itself takes up to 24 hours after submission.' } },
        { '@type': 'Question', name: 'Do I keep ownership of my music?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats never takes ownership of your music. You keep 100% IP ownership of your masters and compositions always.' } },
        { '@type': 'Question', name: 'Can I distribute regional language songs?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — Western Beats distributes music in Hindi, Punjabi, Tamil, Telugu, Malayalam, Kannada, Bengali, Bhojpuri, Haryanvi, Gujarati, Marathi, and all Indian languages.' } },
        { '@type': 'Question', name: 'What file format should I submit?', acceptedAnswer: { '@type': 'Answer', text: 'WAV files are preferred for the best audio quality. If WAV is not available, submit at least 320kbps MP3. Artwork should be square JPG or PNG, minimum 3000×3000 pixels.' } },
      ],
    },
  ],
}

const s = { color: '#8899AA', fontSize: 16, lineHeight: '1.8', marginBottom: 16 } as const
const h2 = { fontSize: 26, fontWeight: 800, color: 'white', marginTop: 48, marginBottom: 16 } as const
const h3 = { fontSize: 18, fontWeight: 700, color: 'white', marginTop: 28, marginBottom: 10 } as const
const li = { color: '#8899AA', fontSize: 15, lineHeight: '1.7', marginBottom: 8 } as const

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', color: 'white' }}>
        <article style={{ maxWidth: 760, margin: '0 auto', padding: '120px 24px 80px' }}>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: '#4A5568', listStyle: 'none', padding: 0, flexWrap: 'wrap' }}>
              <li><Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li><Link href="/blog" style={{ color: '#4A5568', textDecoration: 'none' }}>Blog</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>How to Distribute Music India Free</li>
            </ol>
          </nav>

          {/* Header */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
            <span style={{ background: 'rgba(10,100,195,0.15)', color: '#5CB2DC', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '4px 12px', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Distribution Guide</span>
            <span style={{ fontSize: 13, color: '#4A5568' }}>June 2026 · 8 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            How to Distribute Your Music in India for Free in 2026 — Complete Guide
          </h1>
          <p style={{ ...s, fontSize: 18, color: '#aabbcc', borderLeft: '3px solid #0A64C3', paddingLeft: 20, marginBottom: 40 }}>
            A full step-by-step guide for Indian independent artists to get their music on JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and 150+ platforms — ₹0 upfront, no subscription, keeping 100% ownership.
          </p>

          {/* Content */}
          <p style={s}>India has over 200 million paid music streaming subscribers — and tens of millions more on free tiers. As an independent artist, getting your music on these platforms is no longer optional. It is the difference between earning royalties and leaving money on the table.</p>
          <p style={s}>The good news: you do not need a record label or a big budget. With the right music distributor, you can get your music on every major platform in India and worldwide — completely free.</p>
          <p style={s}>This guide explains exactly what to do, step by step.</p>

          <h2 style={h2}>What is Music Distribution?</h2>
          <p style={s}>Music distribution is the process of delivering your recorded music to streaming platforms like JioSaavn, Gaana, Spotify, Apple Music, and YouTube Music so listeners can find and stream it.</p>
          <p style={s}>In the old days, physical distribution required a label deal and manufacturing CDs. Today, digital music distribution is done through online distributors who deliver your audio files and metadata to all platforms simultaneously.</p>
          <p style={s}>As an independent artist, you work directly with a distributor — no label required.</p>

          <h2 style={h2}>What You Need Before You Start</h2>
          <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
            <li style={li}><strong style={{ color: 'white' }}>Audio file:</strong> WAV (preferred) or 320kbps MP3. Make sure it is fully mixed and mastered.</li>
            <li style={li}><strong style={{ color: 'white' }}>Album artwork:</strong> Square JPG or PNG, minimum 3000×3000 pixels. No blurry images — platforms will reject them.</li>
            <li style={li}><strong style={{ color: 'white' }}>Track metadata:</strong> Artist name, track name, genre, language, release date — exactly as you want them to appear on platforms.</li>
            <li style={li}><strong style={{ color: 'white' }}>Active email address:</strong> For approval notifications and royalty updates.</li>
            <li style={li}><strong style={{ color: 'white' }}>Google Drive or WeTransfer link:</strong> Upload your files and share the link with your distributor.</li>
          </ul>
          <p style={s}>You do NOT need an ISRC code or UPC barcode — a good distributor assigns these to you for free.</p>

          <h2 style={h2}>Step-by-Step: How to Distribute Your Music Free in India</h2>

          <h3 style={h3}>Step 1 — Prepare and Master Your Audio</h3>
          <p style={s}>Before distribution, your track must be mixed and mastered to streaming standards. Platforms like Spotify and Apple Music normalize audio to around -14 LUFS. If your track is too quiet or has distortion, it will sound poor on streams.</p>
          <p style={s}>If you do not have a mixing engineer, Western Beats offers audio production services — including professional mixing and mastering to streaming standards.</p>

          <h3 style={h3}>Step 2 — Create Your Artwork</h3>
          <p style={s}>Your cover art is the first thing listeners see. Make it square (1:1 ratio) and at least 3000×3000 pixels. Platforms including JioSaavn and Spotify will reject artwork that is too small, blurry, or contains URLs or pricing information.</p>
          <p style={s}>Keep it clean, brand-consistent, and professional. You can use tools like Canva, Photoshop, or hire a designer.</p>

          <h3 style={h3}>Step 3 — Upload Files to Google Drive</h3>
          <p style={s}>Upload both your audio file and artwork to Google Drive. Right-click the folder and select "Share" → "Anyone with the link" → "Viewer". Copy the share link — you will need this for submission.</p>

          <h3 style={h3}>Step 4 — Submit to Western Beats</h3>
          <p style={s}>Visit <Link href="/submit" style={{ color: '#0A64C3' }}>westernbeats.com/submit</Link> and fill in the form. You will need:</p>
          <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
            <li style={li}>Artist name (exactly as it should appear on platforms)</li>
            <li style={li}>Track name</li>
            <li style={li}>Genre and language</li>
            <li style={li}>Preferred release date (minimum 7 days from submission)</li>
            <li style={li}>Singer, lyric writer, music director details</li>
            <li style={li}>Your Drive link to audio + artwork</li>
            <li style={li}>Your email and phone number for updates</li>
          </ul>

          <h3 style={h3}>Step 5 — Our Team Reviews in 24 Hours</h3>
          <p style={s}>Western Beats reviews every submission manually within 24 hours. We check audio quality, artwork standards, and metadata for accuracy. If anything needs correction, we contact you immediately.</p>

          <h3 style={h3}>Step 6 — Go Live on 150+ Platforms</h3>
          <p style={s}>After approval, your music is delivered to all 150+ platforms simultaneously — JioSaavn, Gaana, Spotify, Apple Music, YouTube Music, Wynk, Hungama, Amazon Music, and more. The music is typically live within 72 hours.</p>
          <p style={s}>You will receive free ISRC codes and a UPC barcode for your release, which you can use forever.</p>

          <h2 style={h2}>Which Platforms Will My Music Be On?</h2>
          <p style={s}>Western Beats delivers to 150+ platforms including all the major Indian and global streaming services:</p>
          <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
            <li style={li}><strong style={{ color: 'white' }}>India:</strong> JioSaavn, Gaana, Wynk Music, Hungama, Resso, JioPhone Next</li>
            <li style={li}><strong style={{ color: 'white' }}>Global:</strong> Spotify, Apple Music, YouTube Music, Amazon Music, Deezer, Tidal, Pandora</li>
            <li style={li}><strong style={{ color: 'white' }}>Caller Tunes:</strong> Jio Caller Tune, Airtel Hello Tune, Vi Hello Tune (CRBT)</li>
            <li style={li}><strong style={{ color: 'white' }}>Video:</strong> YouTube Content ID</li>
          </ul>

          <h2 style={h2}>How Much Does It Cost?</h2>
          <p style={s}>With Western Beats — nothing. Zero rupees upfront. No annual subscription. No per-release fee. Western Beats earns only when you earn, through a revenue share model. This means your success is aligned with ours.</p>
          <p style={s}>Compare this to DistroKid ($22.99/year, ~₹1,900/year), TuneCore (₹1,599+/year), or CD Baby ($9.99/release + 9% royalty cut). Western Beats is the only major distributor offering completely free distribution for Indian artists.</p>

          <h2 style={h2}>Do I Keep Ownership?</h2>
          <p style={s}>Yes, always. Western Beats never takes ownership of your music or masters. You own 100% of your recordings and compositions. You can leave at any time, take your music with you, and Western Beats has no claim on your catalogue.</p>

          <h2 style={h2}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 12 }}>
            {[
              { q: 'Is music distribution in India really free?', a: 'Yes — with Western Beats, distribution to 150+ platforms is ₹0 upfront, no subscription, no per-release fee. We earn only when you earn.' },
              { q: 'How long does it take for my song to appear on JioSaavn?', a: 'Typically 72 hours after we approve your submission. Approval itself takes up to 24 hours, so plan for 3–4 days total from submission to live.' },
              { q: 'Can I distribute Punjabi, Bhojpuri, or regional language music?', a: 'Yes. Western Beats distributes music in all Indian languages: Hindi, Punjabi, Tamil, Telugu, Malayalam, Kannada, Bengali, Bhojpuri, Haryanvi, Gujarati, Marathi, and more.' },
              { q: 'What if I already have a song on another distributor?', a: 'You need to remove it from your current distributor first to avoid duplicate content issues. Contact us and we will guide you through the migration process.' },
              { q: 'Do I get an ISRC code?', a: 'Yes. Western Beats assigns free ISRC codes and UPC barcodes to every release. These are yours to keep permanently.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8, fontSize: 15 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: '#0A1535', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '36px', textAlign: 'center', marginTop: 56 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Ready to Get Your Music on 150+ Platforms?</h2>
            <p style={{ color: '#8899AA', fontSize: 15, marginBottom: 24 }}>Free forever. 72 hours. 100% ownership. Warner Music Partner backed.</p>
            <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-block' }}>
              Submit Your Music Free →
            </Link>
          </div>

          {/* Related */}
          <div style={{ marginTop: 56 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Related Articles</h3>
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                { href: '/blog/caller-tune-crbt-distribution-india', title: 'Caller Tune / CRBT Distribution India Guide' },
                { href: '/blog/free-isrc-upc-code-india', title: 'Free ISRC & UPC Codes for Indian Artists' },
                { href: '/compare/distrokid-vs-western-beats', title: 'DistroKid vs Western Beats: Full Comparison' },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ color: '#0A64C3', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
                  → {l.title}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
