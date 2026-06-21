import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Free ISRC Code & UPC Barcode India — For Every Release | Western Beats',
  description: 'Get free ISRC codes and UPC barcodes for your music in India. Western Beats assigns ISRC and UPC to every release at zero cost. Required for Spotify, JioSaavn, Apple Music distribution.',
  keywords: [
    'free ISRC code India',
    'free UPC barcode music India',
    'ISRC code free independent artist India',
    'how to get ISRC code India free',
    'free ISRC UPC music distribution India',
    'ISRC code India 2026',
    'UPC barcode music India free',
    'music identifier code India free',
    'ISRC registration India',
    'free music codes India distribution',
  ],
  alternates: { canonical: 'https://westernbeats.com/free-isrc-codes' },
  openGraph: {
    title: 'Free ISRC Code & UPC Barcode for Every Release | Western Beats India',
    description: 'Western Beats assigns free ISRC codes and UPC barcodes to every release. Required for Spotify, JioSaavn & Apple Music. Always free.',
    url: 'https://westernbeats.com/free-isrc-codes',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Free ISRC Code & UPC India | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://westernbeats.com/free-isrc-codes',
      name: 'Free ISRC Code & UPC Barcode India — For Every Release',
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
        { '@type': 'ListItem', position: 2, name: 'Free ISRC Codes', item: 'https://westernbeats.com/free-isrc-codes' },
      ]},
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is an ISRC code?', acceptedAnswer: { '@type': 'Answer', text: 'ISRC (International Standard Recording Code) is a unique 12-character code identifying a specific sound recording. Every song needs one before being distributed to streaming platforms.' } },
        { '@type': 'Question', name: 'Do I get a free ISRC code with Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats assigns free ISRC codes and UPC barcodes to every release at no extra cost. These codes are yours permanently.' } },
        { '@type': 'Question', name: 'What is a UPC code in music?', acceptedAnswer: { '@type': 'Answer', text: 'UPC (Universal Product Code) identifies your release as a whole product — one UPC per album, EP, or single. Each individual track within the release has its own ISRC code.' } },
      ],
    },
  ],
}

const FACTS = [
  { code: 'ISRC', full: 'International Standard Recording Code', for: 'Each individual track', format: '12 characters (e.g. IN-WB1-26-00001)', free: true },
  { code: 'UPC', full: 'Universal Product Code', for: 'Entire release (album/EP/single)', format: '12-13 digits barcode', free: true },
]

export default function FreeIsrcPage() {
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
              <li style={{ color: '#5CB2DC' }}>Free ISRC Codes</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>Free ISRC & UPC</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Free ISRC Code &<br /><span style={{ color: '#0A64C3' }}>UPC Barcode</span><br />with Every Release
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 620, lineHeight: 1.7, marginBottom: 36 }}>
            Before your song can go on Spotify, JioSaavn, or Apple Music, it needs an ISRC code and UPC barcode. Western Beats assigns both to every release — completely free, permanently yours.
          </p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Get Your Free ISRC Code →</Link>
        </section>

        {/* What are they */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 900, textAlign: 'center', marginBottom: 48 }}>ISRC vs UPC — What&apos;s the Difference?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
              {FACTS.map(f => (
                <div key={f.code} style={{ background: '#0A1535', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '36px 32px' }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: '#0A64C3', marginBottom: 12 }}>{f.code}</div>
                  <div style={{ color: '#8899AA', fontSize: 14, marginBottom: 24 }}>{f.full}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div><span style={{ color: '#4A5568', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>Identifies</span><br /><span style={{ color: 'white', fontWeight: 600 }}>{f.for}</span></div>
                    <div><span style={{ color: '#4A5568', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>Format</span><br /><span style={{ color: 'white', fontWeight: 600, fontFamily: 'monospace', fontSize: 13 }}>{f.format}</span></div>
                    <div><span style={{ color: '#4A5568', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1 }}>Cost with Western Beats</span><br /><span style={{ color: '#5CB2DC', fontWeight: 700 }}>₹0 — Free forever</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why you need them */}
        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 900, marginBottom: 12, textAlign: 'center' }}>Why Every Song Needs an ISRC Code</h2>
          <p style={{ color: '#8899AA', textAlign: 'center', fontSize: 16, marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}>Without an ISRC, streaming platforms can&apos;t track your streams — which means missed royalties.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { title: 'Royalty Tracking', desc: 'Platforms use ISRC to count every stream and calculate your payment accurately. No ISRC = lost royalties.' },
              { title: 'Platform Acceptance', desc: 'JioSaavn, Spotify, and Apple Music require ISRC codes before accepting a song. No ISRC = no distribution.' },
              { title: 'YouTube Content ID', desc: 'ISRC lets YouTube identify your song when others upload it — enabling monetisation of covers and UGC.' },
              { title: 'Publishing Royalties', desc: 'PPL India and IPRS use ISRC to track radio plays, hotel use, and public performance — all additional income.' },
              { title: 'Permanent Identity', desc: 'Your ISRC stays with your recording forever — through distributor changes, label changes, and re-releases.' },
              { title: 'Global Recognition', desc: 'The same ISRC is used on every platform worldwide — from Spotify in Germany to JioSaavn in India.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 8 }}>{item.title}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 36 }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { q: 'Do I get a free ISRC code when I distribute through Western Beats?', a: 'Yes. Western Beats assigns free ISRC codes and UPC barcodes to every release. You do not need to register separately or pay any fee.' },
                { q: 'Are the ISRC codes mine permanently?', a: 'Yes. Once assigned, an ISRC code belongs to that recording permanently — even if you switch distributors later.' },
                { q: 'How much do ISRC codes cost otherwise?', a: 'Registering directly with IFPI for your own ISRC registrant code has a setup cost. Some distributors charge per ISRC. With Western Beats, it is always free.' },
                { q: 'Can I use my own ISRC codes?', a: 'Yes. If you already have ISRC codes from a previous distributor, you can provide them during submission and we will use those same codes for continuity.' },
                { q: 'Do I need a UPC for a single track?', a: 'Yes. Every release — even a single — needs a UPC. Western Beats assigns both UPC (for the release) and ISRC (per track) for free.' },
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
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Get Your Free ISRC Code Today</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32 }}>Submit your music — we assign ISRC + UPC codes free, then distribute to 150+ platforms.</p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
          <div style={{ marginTop: 24 }}>
            <Link href="/blog/free-isrc-upc-code-india" style={{ color: '#5CB2DC', fontSize: 14 }}>Read: ISRC & UPC Guide for Indian Artists →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
