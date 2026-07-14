import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Independent Artist India Music Distribution | Western Beats',
  description: 'Independent artist India music distribution — no label, no gatekeepers, 100% ownership. Free distribution to 150+ platforms including Spotify, JioSaavn, Apple Music. Submit free.',
  keywords: [
    'independent artist india music distribution',
    'indie artist music distribution india',
    'bedroom producer music distribution india',
    'self release music india',
    'no label music distribution india',
    'free music distribution independent artist',
    'how to release music without a label india',
    'indie music distribution platform india',
    'home studio music distribution india',
    'independent musician india spotify',
    'diy music distribution india',
    'indian indie scene music distribution',
    'release music without label india',
    'independent artist platform india',
    'free music distribution india 2026',
    'unsigned artist distribution india',
    'lo-fi bedroom pop distribution india',
    'indie hip hop distribution india',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/independent-artist-india' },
  openGraph: {
    title: 'Independent Artist India Music Distribution | Western Beats',
    description: 'No label. No gatekeepers. 100% ownership. Distribute your music to 150+ platforms free, built for India’s independent artist movement.',
    url: 'https://www.westernbeats.com/independent-artist-india',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Independent Artist India Music Distribution | Western Beats' },
  robots: { index: true, follow: true },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://www.westernbeats.com/independent-artist-india',
      name: 'Independent Artist India Music Distribution',
      description: 'Free music distribution for India’s independent artists. No label, no gatekeepers, 100% ownership, 150+ platforms.',
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
        { '@type': 'ListItem', position: 2, name: 'Independent Artist India', item: 'https://www.westernbeats.com/independent-artist-india' },
      ]},
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a label to release music in India?', acceptedAnswer: { '@type': 'Answer', text: 'No. Independent artists can distribute directly to Spotify, JioSaavn, Apple Music, Gaana and 150+ platforms through Western Beats without ever signing to a label.' } },
        { '@type': 'Question', name: 'Do I keep full rights to my music as an independent artist?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You retain 100% ownership of your masters and publishing at all times. Western Beats never takes rights to your music.' } },
        { '@type': 'Question', name: 'Is Western Beats really free for independent artists?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. There is no upfront cost and no annual subscription to distribute your music through Western Beats.' } },
        { '@type': 'Question', name: 'Which platforms can I reach as an independent artist?', acceptedAnswer: { '@type': 'Answer', text: 'Spotify, Apple Music, JioSaavn, Gaana, YouTube Music, Amazon Music, Jio Caller Tune and 140+ additional platforms worldwide.' } },
        { '@type': 'Question', name: 'How is this different from signing to a record label?', acceptedAnswer: { '@type': 'Answer', text: 'A label typically takes ownership or a share of your masters in exchange for distribution and marketing support. Western Beats distributes your music while you keep 100% ownership and full creative control.' } },
        { '@type': 'Question', name: 'Can I release as much music as I want?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, there is no limit. Independent artists can submit unlimited singles, EPs, and albums.' } },
        { '@type': 'Question', name: 'Do I need to be a full-time or professional musician?', acceptedAnswer: { '@type': 'Answer', text: 'No. Western Beats works for bedroom producers, hobbyists, and full-time independent artists alike — there is no professional status required to distribute your music.' } },
        { '@type': 'Question', name: 'Is Western Beats credible for independent artists?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats is an official Warner Music India Partner, giving independent releases real editorial and playlist consideration without requiring a label deal.' } },
      ],
    },
  ],
}

export default function IndependentArtistIndiaPage() {
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
              <li style={{ color: '#5CB2DC' }}>Independent Artist India</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>For India&apos;s Indie Movement</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20, fontFamily: 'var(--font-outfit, sans-serif)' }}>
            Independent Artist India<br />Music <span style={{ color: '#0A64C3' }}>Distribution</span>
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 640, lineHeight: 1.7, marginBottom: 36, fontFamily: 'var(--font-inter, sans-serif)' }}>
            No label. No A&amp;R meeting. No gatekeeper deciding whether your music deserves to exist. India&apos;s independent artist movement is being built from bedrooms in Mumbai, Delhi, Bengaluru and Chennai — and Western Beats exists to get that music onto Spotify, JioSaavn, Apple Music and 150+ platforms, free, with 100% ownership staying exactly where it belongs: with you.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Distribute Your Music Free →</Link>
            <Link href="/how-it-works" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>How It Works</Link>
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '60px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28 }}>
            {[
              { val: '100%', lbl: 'Ownership Retained' },
              { val: '150+', lbl: 'Platforms Covered' },
              { val: '0', lbl: 'Labels Required' },
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
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>The Gatekeepers Are Gone. The Music Doesn&apos;t Need Permission Anymore.</h2>
          <p style={{ color: '#8899AA', fontSize: 16, lineHeight: 1.8, marginBottom: 40, maxWidth: 800 }}>
            Ten years ago, getting your music heard in India meant convincing someone else first — a label A&amp;R, a radio programmer, a music supervisor with a roster already full. That gate is gone. A laptop, an affordable audio interface, and a pair of decent monitors are now enough to make a record that sounds finished. Bedroom producers in Andheri, home-studio rappers in Old Delhi, lo-fi acts uploading from hostel rooms in Bengaluru, indie folk and bedroom pop artists in Chennai — they&apos;re not waiting for a deal anymore. They&apos;re releasing. Instagram Reels and YouTube Shorts have become the new A&amp;R desk, where a 15-second hook can outperform a six-figure marketing budget, and that hook is just as likely to come from someone&apos;s bedroom as from someone&apos;s studio. Western Beats was built for exactly this shift: artists who write, record, and release on their own terms, and who shouldn&apos;t have to give up ownership of their work just to be heard.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { title: '100% Ownership Always', desc: 'Your masters and publishing stay yours, permanently. Western Beats never takes a stake in your music.' },
              { title: 'No Label, No Gatekeepers', desc: 'No A&R approval, no roster slot, no waiting for permission. Upload and release on your own schedule.' },
              { title: 'Direct to 150+ Platforms', desc: 'Spotify, Apple Music, JioSaavn, Gaana, YouTube Music, Amazon Music and 140+ more from a single submission.' },
              { title: 'Free Forever', desc: 'No upfront fee, no annual subscription, no hidden cost to release your music as an independent artist.' },
              { title: 'Warner Music India Partner', desc: 'Real editorial and playlist consideration through an official Warner Music India partnership — credibility without surrendering independence.' },
              { title: 'Your Music, Your Masters', desc: 'Every release stays registered to you. No contracts, no recoupment, no fine print signing away your rights.' },
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
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Built for the Artist Who Does It All Themselves</h2>
            <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              India&apos;s independent scene isn&apos;t a niche anymore — it&apos;s a movement with its own infrastructure. Affordable DAWs, cheap interfaces, and a smartphone camera have replaced the need for a studio booking. Discovery happens on Instagram and YouTube before it happens on radio. Indie hip-hop collectives in Delhi, bedroom pop acts in Mumbai, lo-fi producers in Bengaluru, and genre-blurring artists in Chennai are proving every month that you don&apos;t need a label&apos;s approval to build an audience — you need your music to actually be available where people listen. That&apos;s the part labels used to control, and it&apos;s the part Western Beats hands back to you.
            </p>
            <p style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.8 }}>
              The process is simple: create an account, upload your track with cover art and metadata, choose your platforms, and submit. Most releases are approved within 24 hours and go live across every platform within 72 hours. There&apos;s no contract that locks up your catalogue, no recoupment clause, and no manager taking a cut before you ever see one. Read the full <Link href="/pricing" style={{ color: '#5CB2DC' }}>pricing details</Link> or see how independent artists are already releasing through Western Beats in our <Link href="/artist-stories" style={{ color: '#5CB2DC' }}>artist stories</Link>.
            </p>
          </div>
        </section>

        <section style={{ padding: '80px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>FAQ — Independent Artist Music Distribution in India</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Do I need a label to release music in India?', a: 'No. Independent artists can distribute directly to Spotify, JioSaavn, Apple Music, Gaana and 150+ platforms through Western Beats without ever signing to a label.' },
              { q: 'Do I keep full rights to my music as an independent artist?', a: 'Yes. You retain 100% ownership of your masters and publishing at all times. Western Beats never takes rights to your music.' },
              { q: 'Is Western Beats really free for independent artists?', a: 'Yes. There is no upfront cost and no annual subscription to distribute your music through Western Beats.' },
              { q: 'Which platforms can I reach as an independent artist?', a: 'Spotify, Apple Music, JioSaavn, Gaana, YouTube Music, Amazon Music, Jio Caller Tune and 140+ additional platforms worldwide.' },
              { q: 'How is this different from signing to a record label?', a: 'A label typically takes ownership or a share of your masters in exchange for distribution and marketing support. Western Beats distributes your music while you keep 100% ownership and full creative control.' },
              { q: 'Can I release as much music as I want?', a: 'Yes, there is no limit. Independent artists can submit unlimited singles, EPs, and albums.' },
              { q: 'Do I need to be a full-time or professional musician?', a: 'No. Western Beats works for bedroom producers, hobbyists, and full-time independent artists alike — there is no professional status required to distribute your music.' },
              { q: 'Is Western Beats credible for independent artists?', a: 'Yes. Western Beats is an official Warner Music India Partner, giving independent releases real editorial and playlist consideration without requiring a label deal.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Your Music. Your Masters. No Label Required.</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>150+ platforms. 100% ownership. Zero gatekeepers. Completely free.</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
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
