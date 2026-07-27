import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'YouTube Music Royalties India 2026 — How Much Do You Earn? | Western Beats',
  description: 'How much does YouTube Music pay per stream in India in 2026? Learn YouTube Music royalty rates, how Content ID works, and how to earn more from YouTube as an Indian artist.',
  keywords: [
    'YouTube Music royalties India 2026',
    'how much YouTube Music pays per stream India',
    'YouTube Music payment India',
    'YouTube Music royalty rate India',
    'YouTube Content ID India royalties',
    'earn from YouTube music India',
    'YouTube Music monetization India',
    'YouTube streaming income India 2026',
    'how much YouTube pays Indian artists',
    'YouTube Music vs Spotify royalties India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/youtube-music-royalties-india-2026' },
  openGraph: {
    title: 'YouTube Music Royalties India 2026 — Rates, Content ID & How to Earn More',
    description: 'Everything Indian artists need to know about YouTube Music royalties in 2026 — per-stream rates, Content ID earnings, and how to maximize your income.',
    url: 'https://www.westernbeats.com/blog/youtube-music-royalties-india-2026',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'YouTube Music Royalties India 2026 | Western Beats' },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'YouTube Music Royalties India 2026 — How Much Do You Earn Per Stream?',
  description: 'Complete guide to YouTube Music royalty rates for Indian artists in 2026, including Content ID earnings and tips to maximize income.',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', logo: { '@type': 'ImageObject', url: 'https://www.westernbeats.com/logo.png' } },
  datePublished: '2026-07-11',
  dateModified: '2026-07-11',
  url: 'https://www.westernbeats.com/blog/youtube-music-royalties-india-2026',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does YouTube Music pay per stream in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'YouTube Music pays approximately ₹0.03 to ₹0.08 per stream in India in 2026. This translates to roughly ₹30 to ₹80 per 1,000 streams. The exact rate depends on whether the listener is a YouTube Music Premium subscriber or a free user.' },
    },
    {
      '@type': 'Question',
      name: 'What is YouTube Content ID and how does it earn money?',
      acceptedAnswer: { '@type': 'Answer', text: 'YouTube Content ID is a system that automatically detects when your song is used in any YouTube video — even videos you did not make. When a match is found, you earn a share of the ad revenue from that video. This can significantly increase your total YouTube earnings beyond just YouTube Music streams.' },
    },
    {
      '@type': 'Question',
      name: 'Does Western Beats distribute to YouTube Music and set up Content ID?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes your music to YouTube Music as part of the standard free distribution. Content ID registration is also included, meaning your music is automatically matched across all YouTube videos.' },
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
  statGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 16, margin: '24px 0' },
  stat: { background: '#060C18', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '24px', textAlign: 'center' as const },
  statNum: { fontSize: 28, fontWeight: 900, color: '#5CB2DC', display: 'block', marginBottom: 4 },
  statLabel: { fontSize: 12, color: '#4A5568', textTransform: 'uppercase' as const, letterSpacing: 1 },
  cta: { display: 'block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 32px', fontSize: 16, fontWeight: 700, textAlign: 'center' as const, textDecoration: 'none', margin: '40px auto 0', maxWidth: 340 },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <div style={S.page}>
        <Nav />
        <header style={S.hero}>
          <div style={S.badge}>Royalties 2026</div>
          <h1 style={S.h1}>YouTube Music Royalties India 2026<br />— How Much Do You Really Earn?</h1>
          <p style={S.lead}>Per-stream rates, Content ID income, premium vs free listener differences — everything Indian artists need to know to maximize their YouTube Music earnings.</p>
          <p style={{ fontSize: 13, color: '#4A5568' }}>Last updated: July 2026 · 7 min read</p>
        </header>

        <article style={S.body}>
          <h2 style={S.h2}>YouTube Music Royalty Rates India 2026</h2>
          <div style={S.statGrid}>
            {[
              { num: '₹0.03–₹0.08', label: 'Per stream (India avg)' },
              { num: '₹30–₹80', label: 'Per 1,000 streams' },
              { num: '₹0.12+', label: 'Premium listener rate' },
              { num: '₹0.01–₹0.03', label: 'Free (ad-supported) rate' },
            ].map(({ num, label }) => (
              <div key={label} style={S.stat}>
                <span style={S.statNum}>{num}</span>
                <span style={S.statLabel}>{label}</span>
              </div>
            ))}
          </div>
          <p style={S.p}>YouTube Music royalties in India are significantly lower than Spotify's global average, mainly because India's per-capita music spend is lower and YouTube Premium penetration is still growing. However, the sheer volume of streams from India's 500+ million internet users can make up for the lower per-stream rate.</p>

          <h2 style={S.h2}>YouTube Music vs YouTube (Regular) — Two Different Revenue Streams</h2>
          <p style={S.p}>Many artists confuse YouTube Music (the streaming app) with regular YouTube (the video platform). They are two separate revenue streams:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '16px 0' }}>
            {[
              { title: 'YouTube Music Streams', desc: 'When someone plays your song on the YouTube Music app. Paid per stream — similar to Spotify or JioSaavn.', color: '#F59E0B' },
              { title: 'YouTube Content ID', desc: 'When your song is used in ANY YouTube video — even other people\'s. You earn ad revenue from their video. This is often much larger than music streams.', color: '#34D399' },
            ].map(({ title, desc, color }) => (
              <div key={title} style={{ ...S.card, borderColor: color + '44' }}>
                <p style={{ fontSize: 15, fontWeight: 700, color, margin: '0 0 8px' }}>{title}</p>
                <p style={{ ...S.p, margin: 0, fontSize: 14 }}>{desc}</p>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>What is YouTube Content ID?</h2>
          <p style={S.p}>YouTube Content ID is a powerful system that scans every video uploaded to YouTube and compares it to a database of registered music. When your song is detected in someone else's video — a wedding video, a vlog, a short film — YouTube gives you the choice to:</p>
          {['Monetize the video: ads run on it and you earn the ad revenue', 'Track it: see how many views it gets', 'Block it: remove the video (rarely recommended unless it\'s infringing)'].map((item, i) => (
            <p key={i} style={{ ...S.p, margin: '0 0 8px', paddingLeft: 24, borderLeft: '3px solid rgba(10,100,195,0.4)' }}>{item}</p>
          ))}
          <p style={{ ...S.p, marginTop: 16 }}>For Indian artists whose songs go viral on social media or get used in YouTube Shorts, Content ID can generate more money than the YouTube Music streams themselves.</p>

          <h2 style={S.h2}>YouTube Music vs JioSaavn vs Spotify: Royalty Comparison India</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, margin: '16px 0', fontSize: 14 }}>
              <thead>
                <tr>
                  {['Platform', 'Per Stream (India)', 'Per 1,000 Streams', 'India Users'].map(h => (
                    <th key={h} style={{ background: '#0A1535', color: '#5CB2DC', padding: '12px 16px', textAlign: 'left' as const, fontWeight: 700, borderBottom: '2px solid rgba(10,100,195,0.3)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['YouTube Music', '₹0.03–₹0.08', '₹30–₹80', '100M+'],
                  ['JioSaavn', '₹0.05–₹0.10', '₹50–₹100', '100M+'],
                  ['Spotify India', '₹0.04–₹0.09', '₹40–₹90', '10M+'],
                  ['Gaana', '₹0.02–₹0.06', '₹20–₹60', '185M'],
                  ['Apple Music India', '₹0.12–₹0.20', '₹120–₹200', '5M+'],
                ].map(([platform, per, per1k, users], i) => (
                  <tr key={i}>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#E2E8F0', fontWeight: 600 }}>{platform}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#CBD5E1' }}>{per}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#CBD5E1' }}>{per1k}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#CBD5E1' }}>{users}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={S.h2}>How to Maximize Your YouTube Music Royalties</h2>
          {[
            { t: 'Distribute to YouTube Music via a proper distributor', d: 'YouTube Music requires an approved distributor. Western Beats distributes your music to YouTube Music for free and sets up Content ID simultaneously.' },
            { t: 'Enable Content ID for all your releases', d: 'Content ID can multiply your total YouTube earnings. Every time your song appears in a video, you earn. Western Beats enables Content ID by default.' },
            { t: 'Release on all Indian platforms simultaneously', d: 'Getting on JioSaavn and Gaana alongside YouTube Music dramatically increases your total streaming income from India.' },
            { t: 'Promote on YouTube Shorts', d: 'YouTube Shorts uses licensed music for its audio library. Your songs distributed through Western Beats become eligible for use in Shorts, expanding your Content ID earnings.' },
          ].map(({ t, d }, i) => (
            <div key={i} style={{ ...S.card, marginTop: 12 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>{t}</p>
              <p style={{ ...S.p, margin: 0 }}>{d}</p>
            </div>
          ))}

          <h2 style={S.h2}>Frequently Asked Questions</h2>
          {[
            ['How much does YouTube Music pay per stream in India?', 'YouTube Music pays approximately ₹0.03 to ₹0.08 per stream in India in 2026 — about ₹30–₹80 per 1,000 streams. Premium subscriber streams pay more than ad-supported free streams.'],
            ['What is YouTube Content ID and how does it earn money?', 'Content ID detects your song in any YouTube video automatically. You earn ad revenue from those videos. For popular songs, Content ID income often exceeds direct YouTube Music streaming income.'],
            ['Does Western Beats distribute to YouTube Music?', 'Yes. Western Beats distributes to YouTube Music for free as part of its standard 150+ platform distribution. Content ID is also included.'],
          ].map(([q, a], i) => (
            <div key={i} style={{ ...S.card, marginTop: 12 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>{q}</p>
              <p style={{ ...S.p, margin: 0 }}>{a}</p>
            </div>
          ))}

          <Link href="/sign-up" style={S.cta}>Distribute to YouTube Music Free →</Link>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ ...S.p, fontSize: 14 }}>Related: <Link href="/blog/youtube-content-id-india" style={{ color: '#5CB2DC' }}>YouTube Content ID India Guide</Link> · <Link href="/blog/spotify-royalties-india-2026" style={{ color: '#5CB2DC' }}>Spotify Royalties India 2026</Link> · <Link href="/blog/how-much-jiosaavn-pays-per-stream" style={{ color: '#5CB2DC' }}>How Much JioSaavn Pays</Link></p>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
