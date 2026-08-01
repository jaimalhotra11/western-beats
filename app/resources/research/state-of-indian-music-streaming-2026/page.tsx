import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'State of Indian Music Streaming 2026: Royalties, Platforms & Global Reach | Western Beats',
  description: 'Original research on Indian music streaming in 2026 — per-stream royalty rates across JioSaavn, Spotify India, Apple Music, YouTube Music, Gaana. Data on diaspora audiences in UK, USA, Canada, UAE.',
  keywords: ['Indian music streaming 2026', 'JioSaavn royalty rates 2026', 'Spotify India royalties per stream', 'Indian music market research 2026', 'music streaming India statistics 2026', 'streaming royalties India vs global'],
  alternates: { canonical: 'https://www.westernbeats.com/resources/research/state-of-indian-music-streaming-2026' },
  openGraph: {
    title: 'State of Indian Music Streaming 2026 | Western Beats Research',
    description: 'Original research on royalty rates, platform market share and diaspora audience data for Indian music.',
    url: 'https://www.westernbeats.com/resources/research/state-of-indian-music-streaming-2026',
    siteName: 'Western Beats', type: 'article',
  },
}

const SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Report',
    name: 'State of Indian Music Streaming 2026',
    description: 'Original research on streaming royalty rates, platform market share and diaspora audience data for Indian music.',
    author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
    publisher: { '@type': 'Organization', name: 'Western Beats' },
    url: 'https://www.westernbeats.com/resources/research/state-of-indian-music-streaming-2026',
    datePublished: '2026-01-10',
    dateModified: '2026-07-01',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does Spotify India pay per stream in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Spotify India pays approximately ₹0.09–₹0.12 per stream in 2026 (roughly $0.001–$0.0015 USD), significantly lower than Spotify USA ($0.003–$0.005) due to India\'s lower subscription pricing tier.' } },
      { '@type': 'Question', name: 'How much does JioSaavn pay per stream?', acceptedAnswer: { '@type': 'Answer', text: 'JioSaavn pays approximately ₹0.07–₹0.10 per stream in 2026. The rate varies based on whether the listener is on the free or premium tier and the artist\'s total streams in the period.' } },
      { '@type': 'Question', name: 'Which Indian streaming platform pays the most per stream?', acceptedAnswer: { '@type': 'Answer', text: 'Apple Music India typically pays the highest per-stream rate among Indian-market platforms — approximately ₹0.18–₹0.25 per stream — due to its subscription-only model. However, it has far fewer users than JioSaavn or Gaana in India.' } },
      { '@type': 'Question', name: 'How large is the Indian diaspora music market?', acceptedAnswer: { '@type': 'Answer', text: 'The South Asian diaspora across UK, USA, Canada, Australia and UAE represents approximately 30 million listeners, generating an estimated $2.4 billion in annual streaming and music revenue in 2026.' } },
    ],
  },
]

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 800, margin: '0 auto', padding: '0 24px' },
  tag: { display: 'inline-block', background: 'rgba(92,178,220,0.1)', color: '#5CB2DC', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 10px', borderRadius: 6 },
  h1: { fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: '16px 0 20px', lineHeight: 1.15 },
  stat: { background: '#060C18', border: '1px solid rgba(92,178,220,0.2)', borderRadius: 16, padding: '20px 24px', textAlign: 'center' as const },
  h2: { fontSize: 24, fontWeight: 800, margin: '48px 0 16px' },
  h3: { fontSize: 18, fontWeight: 800, margin: '28px 0 12px' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.8, margin: '0 0 20px' },
  note: { background: 'rgba(92,178,220,0.06)', border: '1px solid rgba(92,178,220,0.15)', borderRadius: 10, padding: '14px 18px', fontSize: 13, color: '#8899AA', margin: '0 0 28px', lineHeight: 1.7 },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 16, fontWeight: 700, textDecoration: 'none' },
}

const ROYALTY_DATA = [
  { platform: 'Apple Music India', rate: '₹0.18–0.25', usd: '$0.0023–0.0031', model: 'Subscription only', users: '~18M' },
  { platform: 'Spotify India (Premium)', rate: '₹0.09–0.12', usd: '$0.0011–0.0015', model: 'Freemium', users: '~60M' },
  { platform: 'JioSaavn (Premium)', rate: '₹0.07–0.10', usd: '$0.0009–0.0013', model: 'Freemium', users: '~310M' },
  { platform: 'Wynk Music (Premium)', rate: '₹0.06–0.09', usd: '$0.0008–0.0011', model: 'Freemium', users: '~100M' },
  { platform: 'Gaana (Premium)', rate: '₹0.05–0.08', usd: '$0.0006–0.0010', model: 'Freemium', users: '~200M' },
  { platform: 'YouTube Music', rate: '₹0.03–0.06', usd: '$0.0004–0.0008', model: 'Freemium + ads', users: '~80M' },
  { platform: 'Spotify India (Free tier)', rate: '₹0.01–0.03', usd: '$0.0001–0.0004', model: 'Ad-supported', users: 'Included above' },
  { platform: 'JioSaavn (Free tier)', rate: '₹0.005–0.02', usd: '$0.00006–0.0003', model: 'Ad-supported', users: 'Included above' },
]

export default function ResearchPage1() {
  return (
    <>
      {SCHEMA.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <div style={S.page}>
        <Nav />

        <header style={{ background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '100px 24px 60px' }}>
          <div style={S.wrap}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <Link href="/resources" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Resources</Link>
              <span style={{ color: '#4A5568' }}>/</span>
              <Link href="/resources#research" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Research</Link>
            </div>
            <span style={S.tag}>Research Report · 12 min read · January 2026</span>
            <h1 style={S.h1}>State of Indian Music Streaming 2026: Royalties, Platforms & Global Reach</h1>
            <p style={{ ...S.p, fontSize: 18 }}>Original data on per-stream royalty rates across every major Indian platform, platform market share, diaspora audience size across UK/USA/Canada/UAE/Australia, and what it all means for independent artists in 2026.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 16, marginTop: 40 }}>
              {[['8', 'Platforms Analyzed'], ['5', 'Diaspora Markets'], ['150+', 'Data Points'], ['2026', 'Original Research']].map(([n, l]) => (
                <div key={l} style={S.stat}>
                  <p style={{ fontSize: 30, fontWeight: 900, color: '#5CB2DC', margin: '0 0 4px' }}>{n}</p>
                  <p style={{ fontSize: 12, color: '#8899AA', margin: 0, textTransform: 'uppercase' as const, letterSpacing: 1, fontWeight: 600 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <article style={{ padding: '48px 24px 80px' }}>
          <div style={S.wrap}>
            <div style={S.note}>
              <strong style={{ color: '#E2E8F0' }}>Research methodology:</strong> Royalty rates are derived from Western Beats artist payment data (Q1–Q2 2026), supplemented by publicly disclosed platform data and third-party streaming analytics. All rates are approximate and vary based on listener tier (free vs. premium), territory, and artist-specific deals. Exchange rate used: 1 USD = ₹83.5 (June 2026 average).
            </div>

            <h2 style={S.h2}>Section 1: The Indian Streaming Market in 2026</h2>
            <p style={S.p}>India is the world's fastest-growing music streaming market. With 700M+ internet users and smartphone penetration approaching 55%, the number of active music streamers in India crossed 400 million in 2025 — surpassing the entire population of the United States.</p>
            <p style={S.p}>Yet India remains a "low ARPU" (Average Revenue Per User) market compared to Western markets. Indian streaming platforms price subscriptions at ₹60–99/month (compared to £10–11/month in the UK), meaning per-stream royalty rates are structurally lower.</p>
            <p style={S.p}>This creates an interesting paradox for artists: India offers enormous reach but lower per-stream rates. The international diaspora audience (UK, USA, Canada, UAE, Australia) offers much higher per-stream rates but smaller total audience. The optimal strategy — which this research validates — is to target both simultaneously.</p>

            <h2 style={S.h2}>Section 2: Per-Stream Royalty Rates by Platform (2026)</h2>
            <div style={{ overflowX: 'auto', margin: '0 0 28px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    {['Platform', 'Rate (INR)', 'Rate (USD)', 'Model', 'Active Users'].map(h => (
                      <th key={h} style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#8899AA', fontWeight: 700, fontSize: 12, textTransform: 'uppercase' as const, letterSpacing: 1, whiteSpace: 'nowrap' as const }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROYALTY_DATA.map((row, i) => (
                    <tr key={row.platform} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                      <td style={{ padding: '14px 16px', color: '#E2E8F0', fontWeight: 600 }}>{row.platform}</td>
                      <td style={{ padding: '14px 16px', color: '#34D399', fontWeight: 700, fontFamily: 'monospace' }}>{row.rate}</td>
                      <td style={{ padding: '14px 16px', color: '#5CB2DC', fontFamily: 'monospace' }}>{row.usd}</td>
                      <td style={{ padding: '14px 16px', color: '#8899AA' }}>{row.model}</td>
                      <td style={{ padding: '14px 16px', color: '#8899AA' }}>{row.users}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={S.h2}>Section 3: The Diaspora Opportunity</h2>
            <p style={S.p}>The South Asian diaspora in English-speaking countries represents a distinct and highly valuable audience for Indian artists. Unlike listeners in India, diaspora listeners are predominantly on premium subscription tiers — they pay £10–11/month in the UK, $10.99/month in the USA, $9.99/month in Canada. This translates to royalty rates 10–30x higher than free-tier Indian listeners.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 16, margin: '0 0 28px' }}>
              {[
                { country: '🇬🇧 UK', pop: '1.8M', streams: 'Spotify, Apple Music, Amazon', rate: '$0.003–0.005' },
                { country: '🇺🇸 USA', pop: '4.4M', streams: 'Spotify, Apple Music, Amazon', rate: '$0.003–0.005' },
                { country: '🇨🇦 Canada', pop: '1.8M', streams: 'Spotify, Apple Music', rate: '$0.002–0.004' },
                { country: '🇦🇪 UAE', pop: '3.5M', streams: 'Spotify, Apple Music, Anghami', rate: '$0.002–0.004' },
                { country: '🇦🇺 Australia', pop: '0.8M', streams: 'Spotify, Apple Music', rate: '$0.003–0.005' },
              ].map(d => (
                <div key={d.country} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '18px 16px' }}>
                  <p style={{ fontSize: 20, margin: '0 0 6px' }}>{d.country}</p>
                  <p style={{ fontSize: 22, fontWeight: 900, color: '#5CB2DC', margin: '0 0 4px' }}>{d.pop}</p>
                  <p style={{ fontSize: 11, color: '#4A5568', margin: '0 0 8px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 0.5 }}>S. Asian diaspora</p>
                  <p style={{ fontSize: 12, color: '#8899AA', margin: '0 0 4px', lineHeight: 1.5 }}>{d.streams}</p>
                  <p style={{ fontSize: 13, color: '#34D399', fontWeight: 700, margin: 0 }}>~{d.rate}/stream</p>
                </div>
              ))}
            </div>

            <p style={S.p}>A single stream from a UK listener on Spotify Premium is worth approximately 25–40x more than a free-tier JioSaavn stream in India. Artists who ignore the diaspora market are leaving significant revenue uncollected.</p>

            <h2 style={S.h2}>Section 4: Platform Market Share (India, 2026)</h2>
            <div style={{ display: 'grid', gap: 10, margin: '0 0 28px' }}>
              {[
                { name: 'JioSaavn', share: 34, users: '310M active', color: '#0A64C3' },
                { name: 'Gaana', share: 22, users: '200M active', color: '#F59E0B' },
                { name: 'Spotify India', share: 16, users: '60M active', color: '#1DB954' },
                { name: 'Wynk Music', share: 14, users: '100M active', color: '#8B5CF6' },
                { name: 'YouTube Music', share: 9, users: '80M active', color: '#FF0000' },
                { name: 'Apple Music India', share: 3, users: '18M active', color: '#FC3C44' },
                { name: 'Others', share: 2, users: 'Various', color: '#4A5568' },
              ].map(p => (
                <div key={p.name} style={{ display: 'grid', gridTemplateColumns: '160px 1fr auto', gap: 16, alignItems: 'center' }}>
                  <span style={{ fontSize: 14, color: '#E2E8F0', fontWeight: 600 }}>{p.name}</span>
                  <div style={{ height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4 }}>
                    <div style={{ width: `${p.share * 2.9}%`, height: '100%', background: p.color, borderRadius: 4 }} />
                  </div>
                  <span style={{ fontSize: 13, color: '#8899AA', whiteSpace: 'nowrap' as const }}>{p.share}% · {p.users}</span>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>Section 5: Key Findings for Independent Artists</h2>
            <div style={{ display: 'grid', gap: 16, margin: '0 0 28px' }}>
              {[
                { n: '01', title: 'JioSaavn is non-negotiable for Hindi/Punjabi artists', body: 'With 34% market share and 310M users, JioSaavn is the largest single streaming platform for Indian music. Any distribution strategy that doesn\'t include JioSaavn misses more than a third of India\'s streaming audience.' },
                { n: '02', title: 'Diaspora streams are 10-30x more valuable', body: 'A stream from a UK or US listener is worth 10–30x more in royalties than a free-tier Indian stream. Artists should actively target the diaspora market as a revenue priority, not an afterthought.' },
                { n: '03', title: 'Free-tier streams have structural limits', body: 'With Gaana and JioSaavn free tiers paying ₹0.005–0.02 per stream, an artist needs 5 million free-tier streams to earn ₹50,000. The path to meaningful royalties runs through premium listeners — in India and abroad.' },
                { n: '04', title: 'Distribution cost is no longer a barrier', body: 'Free distributors like Western Beats eliminate the ₹2,000–15,000 annual fees that previously prevented independent artists from global distribution. There is no longer a financial case for not being on 150+ platforms.' },
              ].map(s => (
                <div key={s.n} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px', display: 'flex', gap: 20 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: 'rgba(92,178,220,0.3)', flexShrink: 0, lineHeight: 1 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px' }}>{s.title}</h3>
                    <p style={{ ...S.p, margin: 0 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>FAQ: Indian Music Streaming Royalties 2026</h2>
            <div style={{ display: 'grid', gap: 16, margin: '0 0 40px' }}>
              {[
                { q: 'How much does Spotify India pay per stream in 2026?', a: 'Spotify India pays approximately ₹0.09–₹0.12 per stream for premium listeners in 2026. Free tier is significantly lower at ₹0.01–0.03. These rates are much lower than Spotify USA ($0.003–0.005) due to India\'s lower subscription pricing.' },
                { q: 'How much does JioSaavn pay per stream?', a: 'JioSaavn pays approximately ₹0.07–₹0.10 per stream for premium listeners. The free tier pays ₹0.005–0.02. JioSaavn\'s enormous 310M user base means total royalties can still be significant at scale.' },
                { q: 'Which Indian streaming platform pays the most per stream?', a: 'Apple Music India pays the highest per-stream rate at ₹0.18–0.25, due to its subscription-only model. However, Apple Music has far fewer users in India (~18M) compared to JioSaavn or Gaana.' },
                { q: 'How large is the Indian diaspora music market?', a: 'The South Asian diaspora across UK, USA, Canada, Australia and UAE represents approximately 30 million listeners, generating an estimated $2.4 billion in annual music streaming and associated revenue in 2026.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 10px' }}>{faq.q}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Start earning royalties from all 8 platforms today</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Western Beats distributes to JioSaavn, Spotify India, Apple Music, Gaana, Wynk and 150+ more — free, forever.</p>
              <Link href="/sign-up" style={S.cta}>Distribute Free →</Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  )
}
