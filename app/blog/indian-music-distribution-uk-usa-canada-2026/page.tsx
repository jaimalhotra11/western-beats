import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Indian Music Distribution for UK, USA & Canada Artists 2026 | Western Beats',
  description: 'The complete guide for Indian and South Asian artists in UK, USA, Canada, Australia & UAE to distribute music to Spotify, Apple Music, JioSaavn & 150+ platforms free.',
  keywords: [
    'Indian music distribution UK USA Canada', 'South Asian artist music distribution abroad',
    'Bollywood music distribution worldwide', 'Indian diaspora music distribution',
    'distribute Indian music internationally free', 'NRI artist music distribution',
    'music distribution for Indians abroad', 'best music distributor for Indian artists UK',
    'free music distribution South Asian artists', 'JioSaavn distribution from UK USA Canada',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/indian-music-distribution-uk-usa-canada-2026' },
  openGraph: {
    title: 'Indian Music Distribution for UK, USA & Canada Artists 2026 | Western Beats',
    description: 'South Asian artists abroad: distribute to JioSaavn, Spotify, Apple Music & 150+ platforms free.',
    url: 'https://www.westernbeats.com/blog/indian-music-distribution-uk-usa-canada-2026',
    siteName: 'Western Beats', type: 'article', locale: 'en_GB',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Indian Music Distribution for UK, USA & Canada Artists 2026',
  description: 'Complete guide for South Asian artists in the UK, USA, Canada, Australia and UAE to distribute music free.',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', logo: { '@type': 'ImageObject', url: 'https://www.westernbeats.com/wb-logo.png' } },
  datePublished: '2026-07-29',
  dateModified: '2026-07-29',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.westernbeats.com/blog/indian-music-distribution-uk-usa-canada-2026' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can Indian artists living in the UK distribute music to JioSaavn?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes to JioSaavn from anywhere in the world — you do not need to be based in India. British Indian, Indian-American, and Canadian Indian artists all get JioSaavn distribution free.' } },
    { '@type': 'Question', name: 'Do I need an Indian bank account to receive royalties from Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'No. Western Beats pays royalties internationally via PayPal or international bank transfer. Artists in UK, USA, Canada, Australia and UAE can all receive royalty payments.' } },
    { '@type': 'Question', name: 'Is Western Beats free for NRI artists?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats is completely free for all artists regardless of country of residence. No annual subscription, no commission — 100% of royalties go to you.' } },
  ],
}

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  hero: { background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '120px 24px 64px', textAlign: 'center' as const },
  badge: { display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#5CB2DC', marginBottom: 20 },
  h1: { fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.15 },
  lead: { fontSize: 18, color: '#8899AA', maxWidth: 680, margin: '0 auto 36px', lineHeight: 1.7 },
  article: { maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' },
  h2: { fontSize: 28, fontWeight: 800, margin: '52px 0 16px', color: '#fff' },
  h3: { fontSize: 20, fontWeight: 700, margin: '32px 0 10px', color: '#E2E8F0' },
  p: { fontSize: 16, color: '#8899AA', lineHeight: 1.85, margin: '0 0 20px' },
  card: { background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '24px', margin: '16px 0' },
  highlight: { background: 'rgba(10,100,195,0.1)', border: '1px solid rgba(10,100,195,0.25)', borderRadius: 12, padding: '20px 24px', margin: '24px 0' },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 16, fontWeight: 700, textDecoration: 'none', marginTop: 32 },
}

const countries = [
  { flag: '🇬🇧', name: 'United Kingdom', pop: '1.5M', note: 'British Indians, British Pakistanis, British Bangladeshis', slug: 'best-music-distributor-uk' },
  { flag: '🇺🇸', name: 'United States', pop: '4.4M', note: 'Indian-Americans, largest South Asian diaspora outside Asia', slug: 'best-music-distributor-usa' },
  { flag: '🇨🇦', name: 'Canada', pop: '1.7M', note: 'Large Punjabi community in Toronto and Vancouver', slug: 'best-music-distributor-canada' },
  { flag: '🇦🇺', name: 'Australia', pop: '780K', note: 'Fast-growing Indian community, major cities', slug: 'best-music-distributor-australia' },
  { flag: '🇦🇪', name: 'UAE', pop: '3.5M', note: 'Largest South Asian community by percentage of population', slug: 'best-music-distributor-uae' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <div style={S.page}>
        <Nav />
        <header style={S.hero}>
          <div style={S.badge}>NRI Artists — Global Guide 2026</div>
          <h1 style={S.h1}>Music Distribution for Indian Artists<br />in UK, USA, Canada & Beyond</h1>
          <p style={S.lead}>If you're a South Asian artist living abroad, this is the complete guide to distributing your music to India and the world — for free.</p>
        </header>

        <article style={S.article}>
          <h2 style={S.h2}>The Challenge: Reaching Two Audiences at Once</h2>
          <p style={S.p}>As an Indian or South Asian artist living in the UK, USA, Canada, Australia or UAE, you face a unique challenge that domestic Indian artists don't: you want to reach both your local audience (Spotify, Apple Music) and your Indian audience (JioSaavn, Gaana) simultaneously.</p>
          <p style={S.p}>Most music distributors — DistroKid, TuneCore, CD Baby — are built for Western markets. They distribute to Spotify and Apple Music, but they don't include JioSaavn or Gaana. So Indian artists abroad are stuck: pay for one distributor to reach India, and another to reach global platforms.</p>

          <div style={S.highlight}>
            <p style={{ ...S.p, margin: 0, color: '#5CB2DC', fontWeight: 700 }}>Western Beats solves this in one submission, for free.</p>
            <p style={{ ...S.p, margin: '8px 0 0' }}>One account. One upload. Music live on Spotify, Apple Music, Amazon Music, JioSaavn, Gaana, Jio Caller Tune and 150+ platforms globally within 72 hours.</p>
          </div>

          <h2 style={S.h2}>South Asian Diaspora by Country</h2>
          <p style={S.p}>The South Asian music audience outside India is massive — and largely underserved by Indian-focused distributors:</p>
          <div style={{ display: 'grid', gap: 12, margin: '20px 0' }}>
            {countries.map(({ flag, name, pop, note, slug }) => (
              <div key={name} style={{ ...S.card, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontSize: 32, lineHeight: 1 }}>{flag}</span>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>{name} — {pop} South Asians</p>
                  <p style={{ ...S.p, margin: '0 0 6px', fontSize: 14 }}>{note}</p>
                  <Link href={`/${slug}`} style={{ color: '#5CB2DC', fontSize: 13, fontWeight: 600 }}>Distribution guide for {name} →</Link>
                </div>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>What Western Beats Gives You as an NRI Artist</h2>
          {[
            { t: 'JioSaavn + Gaana Distribution from Anywhere', d: 'You do NOT need to be based in India. Sign up from London, New York, Toronto, Dubai — and your music goes on JioSaavn and Gaana just the same as if you were in Mumbai.' },
            { t: '150+ Global Platforms in One Upload', d: 'Spotify, Apple Music, Amazon Music, Tidal, YouTube Music, Deezer, and 140+ more. One submission covers your local market and India simultaneously.' },
            { t: 'Free ISRC Codes', d: 'Every track needs an ISRC code for royalty tracking. Western Beats provides them free — essential whether your listeners are in Bangalore or Birmingham.' },
            { t: 'International Royalty Payments', d: 'Royalties paid via PayPal or international bank transfer. You don\'t need an Indian bank account. Payments work from UK, USA, Canada, Australia, UAE and most other countries.' },
            { t: '100% Royalty Retention', d: 'DistroKid costs $22.99/yr. TuneCore charges per album. Western Beats costs nothing and takes no commission — ever.' },
            { t: 'Jio Caller Tune Revenue', d: 'Jio Caller Tune is a massive revenue stream unique to India — over 100M users set caller tunes. Western Beats distributes to Jio Caller Tune; most global distributors don\'t.' },
          ].map(({ t, d }) => (
            <div key={t} style={S.card}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>✓ {t}</p>
              <p style={{ ...S.p, margin: 0 }}>{d}</p>
            </div>
          ))}

          <h2 style={S.h2}>Step-by-Step: How NRI Artists Distribute with Western Beats</h2>
          {[
            ['Sign up free', 'Go to westernbeats.com/sign-up. No credit card, no subscription. Takes under 2 minutes.'],
            ['Prepare your release', 'Export your track as WAV or MP3 (320kbps+). Prepare your artwork at 3000×3000px minimum. Gather your ISRC (or let Western Beats assign one free).'],
            ['Submit your music', 'Upload your track and artwork, add your release details (title, genre, language, release date), and submit. The form takes about 10 minutes.'],
            ['Go live in 72 hours', 'Your music goes live on Spotify, JioSaavn, Apple Music and 150+ platforms within 72 hours. You\'ll receive a confirmation email.'],
            ['Collect royalties', 'Stream royalties from all platforms — UK Spotify, US Apple Music, Indian JioSaavn — are aggregated and paid to you via PayPal or bank transfer.'],
          ].map(([step, desc], i) => (
            <div key={i} style={{ ...S.card, display: 'flex', gap: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#0A64C3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 14, fontWeight: 800 }}>{i + 1}</div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>{step}</p>
                <p style={{ ...S.p, margin: 0, fontSize: 15 }}>{desc}</p>
              </div>
            </div>
          ))}

          <h2 style={S.h2}>Western Beats vs DistroKid for NRI Artists</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14, margin: '16px 0' }}>
              <thead>
                <tr>{['Feature', 'DistroKid', 'Western Beats'].map(h => <th key={h} style={{ background: '#0A1535', color: '#5CB2DC', padding: '12px 16px', textAlign: 'left' as const, borderBottom: '2px solid rgba(10,100,195,0.3)' }}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {[
                  ['Annual Fee', '$22.99/yr', 'Free forever'],
                  ['JioSaavn', '✗ Not available', '✓ Included'],
                  ['Gaana', '✗ Not available', '✓ Included'],
                  ['Jio Caller Tune', '✗ Not available', '✓ Included'],
                  ['Spotify (Global)', '✓', '✓'],
                  ['Apple Music (Global)', '✓', '✓'],
                  ['International Royalty Payments', '✓ (via Stripe)', '✓ (PayPal/bank)'],
                  ['Works from UK/USA/Canada', '✓', '✓'],
                  ['Warner Music Partnership', '✗', '✓'],
                ].map(([f, dk, wb], i) => (
                  <tr key={i}>
                    <td style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#E2E8F0', fontWeight: 600 }}>{f}</td>
                    <td style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: dk.startsWith('✗') ? '#F87171' : '#CBD5E1' }}>{dk}</td>
                    <td style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#34D399', fontWeight: 600 }}>{wb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>Frequently Asked Questions</h2>
          {[
            ['Can I distribute to JioSaavn from the UK or USA?', 'Yes. Western Beats distributes to JioSaavn from any country. Your location doesn\'t affect which platforms your music reaches.'],
            ['Do I need an Indian bank account to receive royalties?', 'No. International bank transfer and PayPal are supported. Artists in UK, USA, Canada, Australia and UAE all receive royalties normally.'],
            ['Is Western Beats free for NRI artists?', 'Yes — no annual fee, no per-release fee, no commission. Completely free for artists worldwide.'],
            ['How long does distribution take from outside India?', 'The same as for India-based artists: 72 hours to go live on all 150+ platforms.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ ...S.card, marginTop: 12 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>{q}</p>
              <p style={{ ...S.p, margin: 0 }}>{a}</p>
            </div>
          ))}

          <div style={{ textAlign: 'center' as const, marginTop: 52 }}>
            <p style={{ ...S.p, marginBottom: 0 }}>Ready to distribute your music globally — from wherever you are?</p>
            <Link href="/sign-up" style={S.cta}>Start Free — No Card Required →</Link>
          </div>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ ...S.p, fontSize: 14, fontWeight: 700, color: '#E2E8F0' }}>Country-specific guides:</p>
            <p style={{ ...S.p, fontSize: 14 }}>
              <Link href="/best-music-distributor-uk" style={{ color: '#5CB2DC' }}>UK</Link> ·{' '}
              <Link href="/best-music-distributor-usa" style={{ color: '#5CB2DC' }}>USA</Link> ·{' '}
              <Link href="/best-music-distributor-canada" style={{ color: '#5CB2DC' }}>Canada</Link> ·{' '}
              <Link href="/best-music-distributor-australia" style={{ color: '#5CB2DC' }}>Australia</Link> ·{' '}
              <Link href="/best-music-distributor-uae" style={{ color: '#5CB2DC' }}>UAE</Link>
            </p>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
