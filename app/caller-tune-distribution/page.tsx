import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Caller Tune Distribution India — CRBT for Jio, Airtel & Vi | Western Beats',
  description: 'Distribute your song as a caller tune on Jio, Airtel Hello Tune, Vi Hello Tune and BSNL — free for independent artists. Western Beats handles CRBT distribution across all Indian telecoms with every music release.',
  keywords: [
    'caller tune distribution India',
    'CRBT music distribution India free',
    'Jio caller tune distribution',
    'Airtel Hello Tune distribution',
    'Vi Hello Tune music distribution',
    'BSNL caller tune music',
    'caller ring back tone India artists',
    'how to get song on Jio caller tune',
    'CRBT distribution free India',
    'music caller tune India 2026',
  ],
  alternates: { canonical: 'https://westernbeats.com/caller-tune-distribution' },
  openGraph: {
    title: 'Caller Tune Distribution India — Jio, Airtel & Vi | Western Beats',
    description: 'Get your song as a Jio Caller Tune, Airtel Hello Tune & Vi Hello Tune free. Western Beats handles CRBT distribution for all Indian telecoms.',
    url: 'https://westernbeats.com/caller-tune-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Caller Tune Distribution India | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://westernbeats.com/caller-tune-distribution',
      name: 'Caller Tune Distribution India — CRBT for Jio, Airtel & Vi',
      description: 'Distribute your song as a caller tune across all Indian telecoms, free with Western Beats.',
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
        { '@type': 'ListItem', position: 2, name: 'Caller Tune Distribution', item: 'https://westernbeats.com/caller-tune-distribution' },
      ]},
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is CRBT distribution for artists?', acceptedAnswer: { '@type': 'Answer', text: 'CRBT (Caller Ring Back Tone) distribution means making your song available for mobile subscribers to set as their caller tune. In India, this covers Jio Caller Tune, Airtel Hello Tune, Vi Hello Tune, and BSNL Tune.' } },
        { '@type': 'Question', name: 'Is CRBT distribution free with Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Caller tune / CRBT distribution is included as part of Western Beats\' free music distribution service. No extra charge.' } },
        { '@type': 'Question', name: 'How do I get my song on Jio caller tune?', acceptedAnswer: { '@type': 'Answer', text: 'Submit your music at westernbeats.com/submit. Western Beats distributes your music to 150+ platforms including Jio Caller Tune, Airtel Hello Tune, Vi Hello Tune and BSNL Tune within 72 hours.' } },
      ],
    },
  ],
}

const TELECOMS = [
  { name: 'Jio', tune: 'Jio Caller Tune / Jio Tune', users: '450M+ subscribers', color: '#0A64C3' },
  { name: 'Airtel', tune: 'Hello Tune / Airtel Thanks', users: '370M+ subscribers', color: '#C41230' },
  { name: 'Vi', tune: 'Vi Hello Tune', users: '230M+ subscribers', color: '#5CB2DC' },
  { name: 'BSNL', tune: 'BSNL Tune', users: '100M+ subscribers', color: '#0A64C3' },
]

export default function CallerTunePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', color: 'white' }}>

        {/* Hero */}
        <section style={{ padding: '120px 24px 80px', maxWidth: 1100, margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 28 }}>
            <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: '#4A5568', listStyle: 'none', padding: 0 }}>
              <li><Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>Caller Tune Distribution</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(196,18,48,0.15)', border: '1px solid rgba(196,18,48,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#f87171', marginBottom: 20 }}>CRBT Distribution India</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
            Get Your Song on<br /><span style={{ color: '#C41230' }}>Jio, Airtel & Vi</span><br />Caller Tune — Free
          </h1>
          <p style={{ fontSize: 18, color: '#8899AA', maxWidth: 620, lineHeight: 1.7, marginBottom: 36 }}>
            Western Beats distributes your music to Jio Caller Tune, Airtel Hello Tune, Vi Hello Tune, and BSNL Tune as part of every free distribution. Reach 1.1 billion Indian mobile subscribers and earn CRBT royalties.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/submit" style={{ background: '#C41230', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Submit Your Music Free →</Link>
            <Link href="/blog/caller-tune-crbt-distribution-india" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', padding: '14px 32px', borderRadius: 12, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>Learn How CRBT Works</Link>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: '#060C18', padding: '60px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
            {[
              { val: '1.1B+', lbl: 'Indian Mobile Subscribers' },
              { val: '4 Telecoms', lbl: 'Jio, Airtel, Vi & BSNL' },
              { val: '₹0', lbl: 'Extra Cost for CRBT' },
              { val: '72hrs', lbl: 'To Go Live' },
            ].map(s => (
              <div key={s.val} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: '#C41230' }}>{s.val}</div>
                <div style={{ fontSize: 14, color: '#8899AA', marginTop: 6 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Telecoms */}
        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, textAlign: 'center', marginBottom: 12 }}>All 4 Indian Telecoms. One Submission.</h2>
          <p style={{ color: '#8899AA', textAlign: 'center', fontSize: 16, marginBottom: 48 }}>Submit once — Western Beats handles CRBT delivery to every Indian telecom operator.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {TELECOMS.map(t => (
              <div key={t.name} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '32px 28px', borderTop: `3px solid ${t.color}` }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: 'white', marginBottom: 6 }}>{t.name}</div>
                <div style={{ fontSize: 14, color: t.color, fontWeight: 600, marginBottom: 8 }}>{t.tune}</div>
                <div style={{ fontSize: 13, color: '#8899AA' }}>{t.users}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, textAlign: 'center', marginBottom: 48 }}>How Caller Tune Distribution Works</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {[
                { num: '01', title: 'Submit Your Music', desc: 'Upload your track and artwork. Fill the submission form at westernbeats.com/submit — it takes 2 minutes.' },
                { num: '02', title: 'We Review in 24 Hours', desc: 'Our team checks audio quality and metadata. CRBT-specific edits (short preview clips, telecom formatting) are handled by us.' },
                { num: '03', title: 'Delivered to 150+ Platforms + All CRBT', desc: 'Your music goes live on Spotify, JioSaavn, Gaana and all platforms — PLUS Jio Caller Tune, Airtel Hello Tune, Vi Hello Tune, and BSNL Tune.' },
                { num: '04', title: 'Earn CRBT Royalties', desc: 'Every time a subscriber sets your song as their caller tune, you earn a royalty — reported quarterly, paid directly.' },
              ].map(step => (
                <div key={step.num} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(196,18,48,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 13, fontWeight: 800, color: '#C41230' }}>{step.num}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'white', fontSize: 17, marginBottom: 6 }}>{step.title}</div>
                    <div style={{ color: '#8899AA', fontSize: 15, lineHeight: 1.7 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '80px 24px', maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 900, marginBottom: 36 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { q: 'What is CRBT distribution for artists?', a: 'CRBT (Caller Ring Back Tone) distribution makes your song available for mobile users to set as their caller tune on Jio, Airtel, Vi and BSNL.' },
              { q: 'Does CRBT distribution cost extra?', a: 'No. CRBT distribution is included in Western Beats\' free distribution service. No extra fee.' },
              { q: 'How much do artists earn from caller tunes?', a: 'Royalties vary by operator and plan. Popular tracks can earn ₹50,000–₹5,00,000+ monthly from CRBT activations.' },
              { q: 'Can regional language songs be caller tunes?', a: 'Yes. Punjabi, Bhojpuri, Haryanvi, Tamil, Telugu and all regional language songs can be caller tunes — regional music is one of the biggest CRBT categories.' },
              { q: 'Does DistroKid or TuneCore support caller tunes in India?', a: 'No. Neither DistroKid nor TuneCore distributes CRBT for Indian telecoms. Western Beats is among the few distributors offering this free to Indian artists.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#060C18', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Ready for Your Jio Caller Tune?</h2>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Submit once. Western Beats handles CRBT delivery to all Indian telecoms — free.</p>
          <Link href="/submit" style={{ background: '#C41230', color: 'white', padding: '16px 40px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Submit Your Music Free →</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
