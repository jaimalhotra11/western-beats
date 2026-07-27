import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Free Music Distribution India With No Hidden Fees 2026 | Western Beats',
  description: 'Distribute your music to 150+ platforms in India with absolutely no hidden fees, no annual charges, no commission. Western Beats is 100% free — JioSaavn, Gaana, Spotify, Apple Music included.',
  keywords: [
    'free music distribution India no fees',
    'music distribution no hidden fees India',
    'completely free music distribution India 2026',
    'music distribution zero cost India',
    'no fee music distribution India',
    'free music distributor India no subscription',
    'music distribution without charges India',
    'truly free music distribution India',
    'music distribution no annual fee India',
    'upload music free India no cost',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/free-music-distribution-no-fees-india' },
  openGraph: {
    title: 'Free Music Distribution India With No Hidden Fees 2026 | Western Beats',
    description: 'The only truly free music distributor in India — no hidden fees, no annual charges, no commission. JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms.',
    url: 'https://www.westernbeats.com/blog/free-music-distribution-no-fees-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Free Music Distribution No Fees India 2026 | Western Beats' },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Free Music Distribution India With No Hidden Fees 2026',
  description: 'How to distribute music in India to 150+ platforms with no hidden fees, no annual charges, no commission.',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', logo: { '@type': 'ImageObject', url: 'https://www.westernbeats.com/logo.png' } },
  datePublished: '2026-07-11',
  dateModified: '2026-07-11',
  url: 'https://www.westernbeats.com/blog/free-music-distribution-no-fees-india',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Western Beats really free with no hidden fees?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats is completely free — no signup fee, no annual fee, no per-release fee, no commission on royalties. You keep 100% of what the platforms pay you.' },
    },
    {
      '@type': 'Question',
      name: 'What platforms does Western Beats distribute to for free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Western Beats distributes to 150+ platforms including JioSaavn, Gaana, Spotify, Apple Music, Amazon Music, YouTube Music, Wynk, Hungama, Jio Caller Tune, Airtel Hello Tune and Vi Hello Tune — all free.' },
    },
    {
      '@type': 'Question',
      name: 'How long does free distribution take with Western Beats?',
      acceptedAnswer: { '@type': 'Answer', text: 'Your music goes live on all 150+ platforms within 72 hours of submission. Some platforms like JioSaavn may take slightly longer but are typically live within 5 days.' },
    },
  ],
}

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  hero: { background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '120px 24px 60px', textAlign: 'center' as const },
  badge: { display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC', marginBottom: 20 },
  h1: { fontSize: 'clamp(28px,5vw,46px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.15 },
  lead: { fontSize: 18, color: '#8899AA', maxWidth: 640, margin: '0 auto 32px', lineHeight: 1.7 },
  body: { maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' },
  h2: { fontSize: 28, fontWeight: 800, margin: '48px 0 16px', color: '#fff' },
  p: { fontSize: 16, color: '#8899AA', lineHeight: 1.8, margin: '0 0 20px' },
  card: { background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px', margin: '16px 0' },
  greenBox: { background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 16, padding: '24px 28px', margin: '24px 0' },
  cta: { display: 'block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 32px', fontSize: 16, fontWeight: 700, textAlign: 'center' as const, textDecoration: 'none', margin: '40px auto 0', maxWidth: 340 },
  tick: { color: '#34D399', marginRight: 8 },
  cross: { color: '#F87171', marginRight: 8 },
}

const fees = [
  { service: 'Western Beats', signup: 'Free', annual: 'Free', perRelease: 'Free', commission: 'Free', total: '₹0 always' },
  { service: 'DistroKid', signup: 'Free', annual: '$22.99/yr', perRelease: 'Free', commission: '0%', total: '$22.99+/yr' },
  { service: 'TuneCore', signup: 'Free', annual: '$9.99/single/yr', perRelease: '$9.99–$29.99', commission: 'Some', total: '$100+/yr' },
  { service: 'Deliver My Tune', signup: 'Free', annual: '₹999+/yr', perRelease: 'Varies', commission: 'Some', total: '₹999+/yr' },
  { service: 'RouteNote', signup: 'Free', annual: 'Free', perRelease: 'Free', commission: '15%', total: '15% royalties' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <div style={S.page}>
        <Nav />
        <header style={S.hero}>
          <div style={S.badge}>Guide 2026</div>
          <h1 style={S.h1}>Free Music Distribution in India<br />With Absolutely No Hidden Fees</h1>
          <p style={S.lead}>Most "free" distributors have annual fees, per-release charges, or commission cuts. Here's how to spot the hidden costs — and find the one that's genuinely free.</p>
          <p style={{ fontSize: 13, color: '#4A5568' }}>Last updated: July 2026 · 6 min read</p>
        </header>

        <article style={S.body}>
          <h2 style={S.h2}>What "Free" Really Means in Music Distribution</h2>
          <p style={S.p}>The word "free" is heavily misused in music distribution. Most distributors that claim to be free use one of three tricks to charge you eventually:</p>
          <div style={S.card}>
            {[
              'Annual subscription: "Free to sign up, but $22/year to keep your music live" (DistroKid)',
              'Per-release fee: "Free account, but you pay per single or album per year" (TuneCore)',
              'Commission cut: "No upfront fee, but we take 15% of every rupee you earn" (RouteNote)',
            ].map((item, i) => (
              <p key={i} style={{ ...S.p, margin: '0 0 12px', display: 'flex', alignItems: 'flex-start' as const }}>
                <span style={S.cross}>✗</span>{item}
              </p>
            ))}
          </div>
          <p style={S.p}>True free distribution means: no signup cost, no annual fee, no per-release fee, and zero commission on your royalties. Western Beats is the only distributor in India that meets all four criteria.</p>

          <h2 style={S.h2}>Fee Comparison: India's Top Distributors</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, margin: '16px 0', fontSize: 14 }}>
              <thead>
                <tr>
                  {['Distributor', 'Sign-up', 'Annual Fee', 'Per Release', 'Commission', 'Your Total Cost'].map(h => (
                    <th key={h} style={{ background: '#0A1535', color: '#5CB2DC', padding: '12px 16px', textAlign: 'left' as const, fontWeight: 700, borderBottom: '2px solid rgba(10,100,195,0.3)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fees.map((row, i) => (
                  <tr key={i}>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: i === 0 ? '#5CB2DC' : '#E2E8F0', fontWeight: i === 0 ? 700 : 400 }}>{row.service}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#CBD5E1', background: i === 0 ? 'rgba(10,100,195,0.06)' : 'transparent' }}>{row.signup}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#CBD5E1', background: i === 0 ? 'rgba(10,100,195,0.06)' : 'transparent' }}>{row.annual}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#CBD5E1', background: i === 0 ? 'rgba(10,100,195,0.06)' : 'transparent' }}>{row.perRelease}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#CBD5E1', background: i === 0 ? 'rgba(10,100,195,0.06)' : 'transparent' }}>{row.commission}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: i === 0 ? '#34D399' : '#F87171', fontWeight: 700, background: i === 0 ? 'rgba(10,100,195,0.06)' : 'transparent' }}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>What Western Beats Gives You for Free</h2>
          <div style={S.greenBox}>
            {[
              '150+ platforms including JioSaavn, Gaana, Spotify, Apple Music, Amazon Music',
              'Jio Caller Tune (CRBT), Airtel Hello Tune & Vi Hello Tune distribution',
              'Free ISRC code for every track',
              'Free UPC barcode for every release',
              '100% royalties — we take nothing',
              '100% IP ownership — your music is always yours',
              '72-hour delivery to all platforms',
              'Official Warner Music India partnership backing',
            ].map((item, i) => (
              <p key={i} style={{ ...S.p, margin: '0 0 10px', display: 'flex', alignItems: 'flex-start' as const }}>
                <span style={S.tick}>✓</span><span style={{ color: '#E2E8F0' }}>{item}</span>
              </p>
            ))}
          </div>

          <h2 style={S.h2}>Why Is Western Beats Free?</h2>
          <p style={S.p}>Western Beats operates as the distribution arm of Western Beats Private Limited, backed by its partnership with Warner Music India. Our mission is to make Indian independent artists competitive globally. We earn through premium value-added services for artists who want additional marketing and promotion — not by taxing your core distribution.</p>
          <p style={S.p}>This means the core act of getting your music on every major platform, earning 100% royalties, and owning your IP — that is free and will remain free.</p>

          <h2 style={S.h2}>How to Start Free Distribution in 3 Steps</h2>
          {[
            { step: '1', title: 'Create your free account', desc: 'Sign up at westernbeats.com/sign-up with your email. Verified in under 2 minutes via OTP.' },
            { step: '2', title: 'Submit your music', desc: 'Upload your track, cover art, and fill in the release details at westernbeats.com/submit. Takes about 10 minutes.' },
            { step: '3', title: 'Go live in 72 hours', desc: 'Your music appears on JioSaavn, Gaana, Spotify, Apple Music and 150+ platforms. Royalties flow directly to you.' },
          ].map(({ step, title, desc }) => (
            <div key={step} style={{ ...S.card, display: 'flex', gap: 20, alignItems: 'flex-start' as const }}>
              <div style={{ background: '#0A64C3', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center' as const, justifyContent: 'center' as const, fontWeight: 900, fontSize: 16, flexShrink: 0 }}>{step}</div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>{title}</p>
                <p style={{ ...S.p, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}

          <h2 style={S.h2}>Frequently Asked Questions</h2>
          {[
            ['Is Western Beats really free with no hidden fees?', 'Yes. Western Beats is completely free — no signup fee, no annual fee, no per-release fee, no commission on royalties. You keep 100% of what the platforms pay you.'],
            ['What platforms does Western Beats distribute to for free?', '150+ platforms including JioSaavn, Gaana, Spotify, Apple Music, Amazon Music, YouTube Music, Wynk, Hungama, Jio Caller Tune, Airtel Hello Tune and Vi Hello Tune.'],
            ['How long does free distribution take?', 'Your music goes live within 72 hours of submission. Some platforms may take slightly longer but are typically live within 5 days.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ ...S.card, marginTop: 12 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>{q}</p>
              <p style={{ ...S.p, margin: 0 }}>{a}</p>
            </div>
          ))}

          <Link href="/sign-up" style={S.cta}>Start Free Distribution Now →</Link>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ ...S.p, fontSize: 14 }}>Related: <Link href="/free-music-distribution-india" style={{ color: '#5CB2DC' }}>Free Music Distribution India</Link> · <Link href="/compare" style={{ color: '#5CB2DC' }}>Compare All Distributors</Link> · <Link href="/blog/how-to-distribute-music-india-free" style={{ color: '#5CB2DC' }}>How to Distribute Music India Free</Link></p>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
