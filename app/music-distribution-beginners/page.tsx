import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Music Distribution for Beginners India 2026 — First-Time Artist Guide | Western Beats',
  description: 'First time distributing your music in India? Complete beginner guide: what you need, how to prepare your files, how to pick the right distributor, and how to go live on JioSaavn & Spotify free in 72 hours.',
  keywords: [
    'music distribution for beginners India',
    'how to distribute music first time India',
    'new artist music distribution India 2026',
    'first time music distribution India',
    'music distribution guide beginners India',
    'how to upload first song online India',
    'independent artist guide India beginners',
    'distribute music without label India',
    'first release music distribution India',
    'beginner guide music distribution',
  ],
  alternates: { canonical: 'https://westernbeats.com/music-distribution-beginners' },
  openGraph: {
    title: 'Music Distribution for Beginners India 2026 | Western Beats',
    description: 'First time distributing music in India? Step-by-step guide — prepare files, pick a distributor, go live on JioSaavn & Spotify in 72 hours.',
    url: 'https://westernbeats.com/music-distribution-beginners',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Music Distribution for Beginners India | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://westernbeats.com/music-distribution-beginners',
      name: 'Music Distribution for Beginners India 2026',
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
        { '@type': 'ListItem', position: 2, name: 'Music Distribution Beginners Guide', item: 'https://westernbeats.com/music-distribution-beginners' },
      ]},
    },
    {
      '@type': 'HowTo',
      name: 'How to Distribute Music for the First Time in India',
      description: 'A beginner\'s guide to distributing music online in India.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Record and mix your track', text: 'Record your song and have it properly mixed and mastered to streaming loudness standards.' },
        { '@type': 'HowToStep', position: 2, name: 'Design your cover art', text: 'Create a square cover image (minimum 3000×3000px JPG or PNG). This is required by all platforms.' },
        { '@type': 'HowToStep', position: 3, name: 'Choose your release details', text: 'Decide your artist name, track name, genre, language, and release date exactly as you want them on platforms.' },
        { '@type': 'HowToStep', position: 4, name: 'Submit to Western Beats', text: 'Go to westernbeats.com/submit, fill the form with your details and upload link. Takes 2 minutes.' },
        { '@type': 'HowToStep', position: 5, name: 'Wait for approval', text: 'Western Beats reviews your submission in 24 hours and contacts you if anything needs correction.' },
        { '@type': 'HowToStep', position: 6, name: 'Go live on 150+ platforms', text: 'Your music goes live on JioSaavn, Gaana, Spotify, Apple Music and 147+ more platforms within 72 hours.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How do I distribute music for the first time in India?', acceptedAnswer: { '@type': 'Answer', text: 'Record and master your track, design square artwork (3000×3000px), upload both to Google Drive, and submit at westernbeats.com/submit. Western Beats reviews in 24 hours and distributes to 150+ platforms within 72 hours — completely free.' } },
        { '@type': 'Question', name: 'Do I need a label to distribute music in India?', acceptedAnswer: { '@type': 'Answer', text: 'No. Independent artists can distribute music without a label through Western Beats. You retain 100% IP ownership and deal directly with Western Beats — no label required.' } },
        { '@type': 'Question', name: 'What do I need before submitting my music?', acceptedAnswer: { '@type': 'Answer', text: 'You need: a mixed and mastered audio file (WAV or 320kbps MP3), square cover artwork (min 3000×3000px), your artist name, track name, genre, language, release date, and an email address.' } },
      ],
    },
  ],
}

const CHECKLIST = [
  { item: 'Audio file (WAV preferred or 320kbps MP3)', note: 'Fully mixed and mastered' },
  { item: 'Square cover artwork', note: 'Minimum 3000×3000px, JPG or PNG' },
  { item: 'Artist name', note: 'Exactly as you want it on streaming platforms' },
  { item: 'Track name', note: 'Correct spelling — hard to change after release' },
  { item: 'Genre & language', note: 'For accurate platform categorisation' },
  { item: 'Release date', note: 'Minimum 7 days from submission date' },
  { item: 'Singer, Lyric Writer, Music Director', note: 'Required by platforms for metadata' },
  { item: 'Google Drive or WeTransfer link', note: 'To share your audio + artwork with us' },
  { item: 'Active email address', note: 'For approval updates and royalty reports' },
]

export default function BeginnersPage() {
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
              <li style={{ color: '#5CB2DC' }}>Music Distribution for Beginners</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>Beginner Guide</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            First Time Distributing<br />Your Music in India?<br /><span style={{ color: '#0A64C3' }}>Start Here.</span>
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 620, lineHeight: 1.7, marginBottom: 36 }}>
            This guide is for artists releasing their first song online in India. We cover everything — what you need, how to prepare, what to expect, and how to go live on 150+ platforms in 72 hours, free.
          </p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Submit Your First Song Free →</Link>
        </section>

        {/* Checklist */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 12 }}>What You Need Before You Submit</h2>
            <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 36 }}>Make sure you have all of these ready — it saves time and gets your music live faster.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {CHECKLIST.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '16px 20px' }}>
                  <div style={{ width: 24, height: 24, borderRadius: 8, background: 'rgba(10,100,195,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, color: '#5CB2DC', fontWeight: 700 }}>✓</div>
                  <div>
                    <div style={{ color: 'white', fontWeight: 600, fontSize: 15 }}>{c.item}</div>
                    <div style={{ color: '#4A5568', fontSize: 13, marginTop: 2 }}>{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, textAlign: 'center', marginBottom: 48 }}>6 Steps to Your First Release</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { n: '01', title: 'Record & Master', desc: 'Record your track and have it mixed and mastered. The audio should be clean and at streaming loudness levels. If you need mastering help, Western Beats offers production services.' },
              { n: '02', title: 'Create Cover Art', desc: 'Design a square cover image — minimum 3000×3000 pixels. Save as JPG or PNG. Canva works well for beginners. Avoid text at the edges and blurry images.' },
              { n: '03', title: 'Prepare Your Info', desc: 'Decide your artist name, track name, genre, language, and release date exactly as you want them on platforms. Once released, artist name and track name are hard to change.' },
              { n: '04', title: 'Upload to Drive', desc: 'Upload your audio file and artwork to Google Drive. Set sharing to "Anyone with the link" → "Viewer". Copy the share link.' },
              { n: '05', title: 'Submit to Western Beats', desc: 'Go to westernbeats.com/submit and fill the form. Takes about 2 minutes. We assign your free ISRC code and UPC barcode automatically.' },
              { n: '06', title: 'Go Live in 72hrs', desc: 'After our 24-hour review, your music is delivered to JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and 145+ more platforms. You get notified when it is live.' },
            ].map(step => (
              <div key={step.n} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '28px' }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#0A64C3', marginBottom: 10 }}>{step.n}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 10 }}>{step.title}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 36 }}>Common Questions for First-Time Artists</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { q: 'Do I need a label to release music in India?', a: 'No. You can distribute independently through Western Beats — no label needed. You retain 100% IP ownership.' },
                { q: 'How much does it cost to release my first song?', a: '₹0. Western Beats is completely free — no upfront fee, no subscription, no per-release charge.' },
                { q: 'What happens if I make a mistake in my metadata?', a: 'Contact us at contact@westernbeats.com before your release goes live. We can correct metadata during the review period. After a release is live, some changes (especially artist name) can be complex.' },
                { q: 'Can I release a song in my regional language?', a: 'Yes. Western Beats distributes music in Hindi, Punjabi, Tamil, Telugu, Malayalam, Kannada, Bengali, Bhojpuri, Haryanvi, Gujarati, Marathi, and all Indian languages.' },
                { q: 'When will I start earning royalties?', a: 'Royalties start accruing from your first stream. Platforms report after a delay (typically 2 months for YouTube, quarterly for others). Western Beats pays you directly once royalties are received and processed.' },
                { q: 'Can I release the same song on YouTube too?', a: 'Yes. You can upload your official music video to your YouTube channel. Western Beats also handles YouTube Content ID, which lets you earn from other videos that use your song.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Ready for Your First Release?</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>Free forever · 150+ platforms · 72 hours · 100% ownership · Warner Music Partner</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
          <div style={{ marginTop: 24, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/blog/how-to-distribute-music-india-free" style={{ color: '#5CB2DC', fontSize: 14 }}>Full Distribution Guide →</Link>
            <Link href="/blog/free-isrc-upc-code-india" style={{ color: '#5CB2DC', fontSize: 14 }}>ISRC & UPC Guide →</Link>
            <Link href="/how-it-works" style={{ color: '#5CB2DC', fontSize: 14 }}>How It Works →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
