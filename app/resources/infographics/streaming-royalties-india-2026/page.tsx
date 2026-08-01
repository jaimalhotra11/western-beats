import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Streaming Royalties India 2026: How Much Do Platforms Pay? [Infographic] | Western Beats',
  description: 'Visual comparison of per-stream royalty rates across JioSaavn, Spotify India, Apple Music India, Gaana, Wynk Music and YouTube Music in 2026. Free infographic for artists.',
  keywords: ['streaming royalties India 2026 infographic', 'JioSaavn royalty rate 2026', 'Spotify India royalty per stream 2026', 'music streaming royalties comparison India', 'how much streaming pays India'],
  alternates: { canonical: 'https://www.westernbeats.com/resources/infographics/streaming-royalties-india-2026' },
  openGraph: {
    title: 'Streaming Royalties India 2026 [Infographic] | Western Beats',
    description: 'Visual breakdown of per-stream royalty rates across all major Indian streaming platforms.',
    url: 'https://www.westernbeats.com/resources/infographics/streaming-royalties-india-2026',
    siteName: 'Western Beats', type: 'article',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Do Streaming Platforms Pay in India? 2026 Royalty Rate Comparison',
  description: 'Infographic and data guide comparing per-stream royalty rates on JioSaavn, Spotify India, Apple Music, Gaana, Wynk Music and YouTube Music in 2026.',
  author: { '@type': 'Organization', name: 'Western Beats' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  url: 'https://www.westernbeats.com/resources/infographics/streaming-royalties-india-2026',
  datePublished: '2026-01-15',
}

const PLATFORMS = [
  { name: 'Apple Music India', inr: '₹0.18–0.25', usd: '$0.0023–0.0031', bar: 100, color: '#FC3C44', note: 'Subscription only — highest per-stream rate in India', model: 'Subscription' },
  { name: 'Spotify India (Premium)', inr: '₹0.09–0.12', usd: '$0.0011–0.0015', bar: 52, color: '#1DB954', note: 'Most global reach, good editorial playlist access', model: 'Freemium' },
  { name: 'JioSaavn (Premium)', inr: '₹0.07–0.10', usd: '$0.0009–0.0013', bar: 40, color: '#0A64C3', note: 'Largest India userbase (310M), essential for Hindi/Punjabi', model: 'Freemium' },
  { name: 'Wynk Music (Premium)', inr: '₹0.06–0.09', usd: '$0.0008–0.0011', bar: 34, color: '#8B5CF6', note: 'Airtel subscriber base, strong tier-2 city reach', model: 'Freemium' },
  { name: 'Gaana (Premium)', inr: '₹0.05–0.08', usd: '$0.0006–0.0010', bar: 28, color: '#F59E0B', note: 'Large free-tier userbase, Times Internet platform', model: 'Freemium' },
  { name: 'YouTube Music', inr: '₹0.03–0.06', usd: '$0.0004–0.0008', bar: 18, color: '#FF0000', note: 'Counts content ID separately; ad-dependent rate varies widely', model: 'Freemium' },
  { name: 'JioSaavn (Free tier)', inr: '₹0.005–0.02', usd: '$0.00006–0.0003', bar: 6, color: '#4A5568', note: 'Ad-supported free tier — lowest rate but highest volume', model: 'Free/Ad' },
]

const DIASPORA = [
  { market: 'Spotify UK/USA', inr: '₹0.25–0.42', usd: '$0.003–0.005', multiplier: '20–35x', color: '#1DB954' },
  { market: 'Apple Music UK/USA', inr: '₹0.33–0.58', usd: '$0.004–0.007', multiplier: '25–45x', color: '#FC3C44' },
  { market: 'Spotify Canada', inr: '₹0.17–0.33', usd: '$0.002–0.004', multiplier: '15–25x', color: '#1DB954' },
  { market: 'Spotify UAE', inr: '₹0.17–0.33', usd: '$0.002–0.004', multiplier: '15–25x', color: '#1DB954' },
]

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 840, margin: '0 auto', padding: '0 24px' },
  h1: { fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, margin: '16px 0 20px', lineHeight: 1.15 },
  h2: { fontSize: 22, fontWeight: 800, margin: '48px 0 16px' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.8, margin: '0 0 20px' },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 16, fontWeight: 700, textDecoration: 'none' },
}

export default function Infographic1() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <div style={S.page}>
        <Nav />

        <header style={{ background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '100px 24px 60px' }}>
          <div style={S.wrap}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <Link href="/resources" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Resources</Link>
              <span style={{ color: '#4A5568' }}>/</span>
              <Link href="/resources#infographics" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Infographics</Link>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(167,139,250,0.1)', color: '#A78BFA', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 10px', borderRadius: 6 }}>Infographic · 3 min read · Updated 2026</span>
            <h1 style={S.h1}>How Much Do Streaming Platforms Pay in India? [2026 Royalty Comparison]</h1>
            <p style={{ ...S.p, fontSize: 17 }}>A complete visual breakdown of per-stream royalty rates across every major Indian streaming platform — and how they compare to what diaspora streams pay.</p>
          </div>
        </header>

        <article style={{ padding: '48px 24px 80px' }}>
          <div style={S.wrap}>

            {/* Main infographic */}
            <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: '32px', margin: '0 0 48px' }}>
              <h2 style={{ ...S.h2, margin: '0 0 8px', fontSize: 20 }}>Per-Stream Royalty Rates — India 2026</h2>
              <p style={{ ...S.p, fontSize: 13, margin: '0 0 28px', color: '#4A5568' }}>Approximate rates for premium (paid) listener streams. Free tier rates shown at bottom.</p>
              <div style={{ display: 'grid', gap: 16 }}>
                {PLATFORMS.map(p => (
                  <div key={p.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' as const, gap: 4 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#E2E8F0' }}>{p.name}</span>
                      <div style={{ textAlign: 'right' as const }}>
                        <span style={{ fontSize: 16, fontWeight: 900, color: p.color, marginRight: 12, fontFamily: 'monospace' }}>{p.inr}</span>
                        <span style={{ fontSize: 12, color: '#4A5568', fontFamily: 'monospace' }}>{p.usd}</span>
                      </div>
                    </div>
                    <div style={{ height: 10, background: 'rgba(255,255,255,0.06)', borderRadius: 5 }}>
                      <div style={{ width: `${p.bar}%`, height: '100%', background: p.color, borderRadius: 5, transition: 'width 0.3s' }} />
                    </div>
                    <p style={{ fontSize: 12, color: '#4A5568', margin: '6px 0 0' }}>{p.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 style={S.h2}>Diaspora Streams: The Multiplier Effect</h2>
            <p style={S.p}>Streams from South Asian diaspora listeners in UK, USA, Canada and UAE pay dramatically more — because those markets have higher subscription prices and more premium listeners.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16, margin: '0 0 28px' }}>
              {DIASPORA.map(d => (
                <div key={d.market} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px', textAlign: 'center' as const }}>
                  <p style={{ fontSize: 14, color: '#8899AA', margin: '0 0 8px', fontWeight: 600 }}>{d.market}</p>
                  <p style={{ fontSize: 24, fontWeight: 900, color: d.color, margin: '0 0 4px', fontFamily: 'monospace' }}>{d.inr}</p>
                  <p style={{ fontSize: 12, color: '#4A5568', margin: '0 0 12px', fontFamily: 'monospace' }}>{d.usd}</p>
                  <span style={{ background: 'rgba(52,211,153,0.1)', color: '#34D399', fontSize: 13, fontWeight: 900, padding: '4px 10px', borderRadius: 8 }}>{d.multiplier} vs free India</span>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>Key Takeaways</h2>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 40px' }}>
              {[
                { title: 'Apple Music pays the most per stream in India', body: 'At ₹0.18–0.25 per stream, Apple Music India has the highest royalty rate — but with only 18M users vs JioSaavn\'s 310M, total volume may be lower.' },
                { title: 'JioSaavn is essential despite lower per-stream rates', body: 'With 310M users and India\'s largest editorial playlist library, JioSaavn drives the most total streams for Hindi and Punjabi artists. Volume compensates for lower rates.' },
                { title: 'Diaspora streams pay 20–45x more than Indian free tier', body: 'A UK or US listener on Spotify Premium generates 20–45x the royalties of an Indian free-tier stream. Reaching the diaspora market is the fastest path to meaningful royalty income.' },
                { title: 'Free tier streams require millions to be meaningful', body: 'At ₹0.005–0.02 per stream on free tiers, an artist needs 5–10 million streams just to earn ₹50,000. Premium listeners and diaspora streams are the real revenue driver.' },
              ].map(k => (
                <div key={k.title} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '18px 22px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 8px' }}>{k.title}</h3>
                  <p style={{ ...S.p, fontSize: 14, margin: 0 }}>{k.body}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const }}>
              <h2 style={{ fontSize: 24, fontWeight: 900, margin: '0 0 12px' }}>Distribute to all platforms — free.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Get on Apple Music, JioSaavn, Spotify India, Gaana, Wynk and 150+ more — at zero cost. No annual fee.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  )
}
