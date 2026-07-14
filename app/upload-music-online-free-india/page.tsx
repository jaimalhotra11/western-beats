import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Upload Music Online Free India 2026 | Western Beats',
  description: 'Upload your music online free in India and get it on Spotify, JioSaavn, Apple Music, Gaana and 150+ platforms. Step-by-step beginner guide. 100% ownership. Submit free.',
  keywords: [
    'upload music online free india',
    'how to upload music online free',
    'upload song online free india',
    'free music upload india',
    'upload music to spotify free india',
    'upload music to jiosaavn free',
    'how to release a song online india',
    'upload song to streaming platforms free',
    'free music distribution india beginners',
    'how to put my song on spotify india',
    'upload my song online free',
    'first time uploading music india',
    'free song upload website india',
    'how to distribute music for free india',
    'upload music online without label india',
    'independent artist upload song free',
    'how to publish music online india',
    'upload track to apple music free india',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/upload-music-online-free-india' },
  openGraph: {
    title: 'Upload Music Online Free India 2026 | Western Beats',
    description: 'Step-by-step beginner guide to uploading your music online free in India — Spotify, JioSaavn, Apple Music, Gaana and 150+ platforms.',
    url: 'https://www.westernbeats.com/upload-music-online-free-india',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Upload Music Online Free India | Western Beats' },
  robots: { index: true, follow: true },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://www.westernbeats.com/upload-music-online-free-india',
      name: 'Upload Music Online Free India 2026',
      description: 'Beginner guide to uploading music online free in India to Spotify, JioSaavn, Apple Music, Gaana and 150+ platforms.',
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
        { '@type': 'ListItem', position: 2, name: 'Upload Music Online Free India', item: 'https://www.westernbeats.com/upload-music-online-free-india' },
      ]},
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need experience to upload music online?', acceptedAnswer: { '@type': 'Answer', text: 'No. Western Beats is built for first-time artists. There is no industry experience required — if you have a finished song and cover art, you can submit it for distribution.' } },
        { '@type': 'Question', name: 'Is it really free to upload my music?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats charges zero upfront cost and no annual subscription to upload and distribute your music to Spotify, JioSaavn, Apple Music, Gaana and 150+ platforms.' } },
        { '@type': 'Question', name: 'What audio file formats are accepted?', acceptedAnswer: { '@type': 'Answer', text: 'WAV files are recommended for the best audio quality. High-quality MP3 (320kbps) is also accepted if WAV is not available.' } },
        { '@type': 'Question', name: 'What is an ISRC code and do I need one?', acceptedAnswer: { '@type': 'Answer', text: 'An ISRC (International Standard Recording Code) is a unique ID assigned to every song so platforms and royalty systems can track it. Western Beats assigns ISRC and UPC codes to every release free of charge — you do not need to buy or generate them yourself.' } },
        { '@type': 'Question', name: 'How long until my song is live on streaming platforms?', acceptedAnswer: { '@type': 'Answer', text: 'After you submit, Western Beats reviews your release within 24 hours, and approved songs go live across all selected platforms within 72 hours total.' } },
        { '@type': 'Question', name: 'Do I keep ownership of my music after uploading?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You retain 100% ownership of your masters and publishing rights at all times. Western Beats never takes rights to your music.' } },
        { '@type': 'Question', name: 'Can I upload a cover song?', acceptedAnswer: { '@type': 'Answer', text: 'Cover songs require additional mechanical licensing clearance before distribution. Contact Western Beats support for guidance on clearing a cover before you submit it.' } },
        { '@type': 'Question', name: 'Can I upload more than one song?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. There is no limit. You can upload as many singles, EPs, or albums as you want, whenever you want.' } },
      ],
    },
  ],
}

export default function UploadMusicOnlineFreeIndiaPage() {
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
              <li><Link href="/how-it-works" style={{ color: '#4A5568', textDecoration: 'none' }}>How It Works</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>Upload Music Online Free India</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>Beginner Guide</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20, fontFamily: 'var(--font-outfit, sans-serif)' }}>
            Upload Music Online <span style={{ color: '#0A64C3' }}>Free</span><br />in India
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 640, lineHeight: 1.7, marginBottom: 36, fontFamily: 'var(--font-inter, sans-serif)' }}>
            Never uploaded a song before? You&apos;re in the right place. This guide walks you through exactly how to upload your music online free in India and get it live on Spotify, JioSaavn, Apple Music, Gaana and 150+ platforms — no experience, no label, and no cost required. Western Beats handles the technical part so you can focus on your music.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Upload Your Music Free →</Link>
            <Link href="/how-it-works" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>How It Works</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '60px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28 }}>
            {[
              { val: '150+', lbl: 'Platforms Covered' },
              { val: '72hr', lbl: 'Time to Go Live' },
              { val: '₹0', lbl: 'Upload Cost' },
              { val: '100%', lbl: 'Ownership Retained' },
            ].map(s => (
              <div key={s.val} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: '#0A64C3' }}>{s.val}</div>
                <div style={{ fontSize: 14, color: '#8899AA', marginTop: 6 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Uploading vs. Distributing — What&apos;s the Difference?</h2>
          <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.8, marginBottom: 40, maxWidth: 800 }}>
            A lot of first-time artists confuse &quot;uploading&quot; with &quot;distributing.&quot; Uploading a song to YouTube or Instagram just puts a video or clip on that one platform — it does not get your song onto Spotify, JioSaavn, Apple Music or Gaana. Music distribution is different: it&apos;s the licensed process of sending your song, with all its official metadata, to every major streaming platform at once, so it appears as a proper release with your name as the artist, available for streaming and royalty collection everywhere. Western Beats is a music distributor — when you upload your song here, it doesn&apos;t just sit on one app, it goes out to the entire streaming ecosystem in one submission.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { title: 'No Experience Needed', desc: 'You don’t need a label, a manager, or any industry contacts. If you have a finished song, you can distribute it yourself.' },
              { title: 'All Major Platforms', desc: 'One submission reaches Spotify, JioSaavn, Apple Music, Gaana, YouTube Music, Amazon Music and 150+ more.' },
              { title: 'Free ISRC & UPC Codes', desc: 'Every release gets the official tracking codes it needs — assigned automatically, at no cost to you.' },
              { title: '100% Ownership', desc: 'You retain full ownership of your masters and publishing at all times — Western Beats never takes rights to your music.' },
              { title: '72 Hours to Go Live', desc: 'Submit your song and it goes live across all selected platforms within 72 hours of approval.' },
              { title: 'Zero Cost', desc: 'No upfront fee and no annual subscription. Uploading and distributing your music is completely free.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                <div style={{ fontWeight: 700, color: 'white', fontSize: 16, marginBottom: 8 }}>{f.title}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, textAlign: 'center' }}>How to Upload Your Music — Step by Step</h2>
            <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 40, maxWidth: 700, margin: '0 auto 40px', textAlign: 'center' }}>
              Here&apos;s exactly what happens from the moment you start your upload to the moment your song is streaming on Spotify and JioSaavn.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
              {[
                { num: '01', title: 'Prepare Your Audio File', body: 'Export your song as a WAV file for the best quality. If WAV isn’t available, a high-quality MP3 (320kbps) also works. Avoid low-bitrate or distorted files.' },
                { num: '02', title: 'Prepare Your Cover Art', body: 'Create a square image, 3000x3000 pixels, in JPG or PNG format. No blurry images, no streaming platform logos, and no extra text beyond your song or artist name.' },
                { num: '03', title: 'Fill In Your Metadata', body: 'Enter your song title, artist name, genre, and release date exactly as you want them to appear. This information is sent to every platform, so accuracy matters.' },
                { num: '04', title: 'Get Your ISRC & UPC Codes', body: 'These are unique tracking codes every song and release needs for royalty and streaming systems. Western Beats assigns both automatically, completely free.' },
                { num: '05', title: 'Select Your Platforms', body: 'Choose where you want your song to appear — Spotify, JioSaavn, Apple Music, Gaana and more. Most artists simply select all available platforms.' },
                { num: '06', title: 'Submit for Review', body: 'Once submitted, Western Beats reviews your release within 24 hours to check audio quality, artwork, and metadata before sending it to platforms.' },
                { num: '07', title: 'Your Song Goes Live', body: 'After approval, your song goes live across all selected platforms within 72 hours total. You can then share your streaming links anywhere.' },
              ].map(s => (
                <div key={s.num} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#5CB2DC', letterSpacing: 1, marginBottom: 10 }}>STEP {s.num}</div>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: 16, marginBottom: 8 }}>{s.title}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{s.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>What Happens After You Upload</h2>
          <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Once your song is live, it stays live — there&apos;s no need to re-upload it or manage it on each platform separately. You&apos;ll be able to see your release on Spotify, JioSaavn, Apple Music and every other platform you selected, all using the same ISRC code that was assigned to your track during the upload process. This is what allows your streams to be tracked accurately and your royalties to be collected properly.
          </p>
          <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8 }}>
            Because there is no upfront cost and no annual subscription, this process works just as well whether you&apos;re uploading your very first single or releasing your tenth album. See full <Link href="/pricing" style={{ color: '#5CB2DC' }}>pricing details</Link> for complete transparency, or read more about <Link href="/free-isrc-codes" style={{ color: '#5CB2DC' }}>free ISRC codes</Link> if you want to understand the tracking system in more depth.
          </p>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>FAQ — Uploading Music Online Free in India</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { q: 'Do I need experience to upload music online?', a: 'No. Western Beats is built for first-time artists. There is no industry experience required — if you have a finished song and cover art, you can submit it for distribution.' },
                { q: 'Is it really free to upload my music?', a: 'Yes. Western Beats charges zero upfront cost and no annual subscription to upload and distribute your music to Spotify, JioSaavn, Apple Music, Gaana and 150+ platforms.' },
                { q: 'What audio file formats are accepted?', a: 'WAV files are recommended for the best audio quality. High-quality MP3 (320kbps) is also accepted if WAV is not available.' },
                { q: 'What is an ISRC code and do I need one?', a: 'An ISRC (International Standard Recording Code) is a unique ID assigned to every song so platforms and royalty systems can track it. Western Beats assigns ISRC and UPC codes to every release free of charge — you do not need to buy or generate them yourself.' },
                { q: 'How long until my song is live on streaming platforms?', a: 'After you submit, Western Beats reviews your release within 24 hours, and approved songs go live across all selected platforms within 72 hours total.' },
                { q: 'Do I keep ownership of my music after uploading?', a: 'Yes. You retain 100% ownership of your masters and publishing rights at all times. Western Beats never takes rights to your music.' },
                { q: 'Can I upload a cover song?', a: 'Cover songs require additional mechanical licensing clearance before distribution. Contact Western Beats support for guidance on clearing a cover before you submit it.' },
                { q: 'Can I upload more than one song?', a: 'Yes. There is no limit. You can upload as many singles, EPs, or albums as you want, whenever you want.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Upload Your First Song — Free</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>Spotify + JioSaavn + Apple Music + Gaana + 146 more. 100% ownership. 72 hours.</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Upload Your Music Free →</Link>
          <div style={{ marginTop: 24, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/how-it-works" style={{ color: '#5CB2DC', fontSize: 14 }}>How It Works →</Link>
            <Link href="/pricing" style={{ color: '#5CB2DC', fontSize: 14 }}>See Pricing →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
