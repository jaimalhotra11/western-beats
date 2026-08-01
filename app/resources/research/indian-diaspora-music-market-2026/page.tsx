import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'The $2.4B Indian Diaspora Music Market 2026 | Western Beats Research',
  description: 'Data-driven analysis of the 30M+ South Asian diaspora music audience in UK, USA, Canada, Australia and UAE — and how independent Indian artists can monetise it in 2026.',
  keywords: ['Indian diaspora music market 2026', 'South Asian music market UK USA', 'NRI music streaming market', 'Indian music UK market size', 'diaspora music revenue India'],
  alternates: { canonical: 'https://www.westernbeats.com/resources/research/indian-diaspora-music-market-2026' },
  openGraph: {
    title: 'The $2.4B Indian Diaspora Music Market 2026 | Western Beats',
    description: 'How independent Indian artists can access the 30M+ South Asian diaspora music audience.',
    url: 'https://www.westernbeats.com/resources/research/indian-diaspora-music-market-2026',
    siteName: 'Western Beats', type: 'article',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Report',
  name: 'The $2.4B Indian Diaspora Music Market 2026',
  description: 'Data analysis of the South Asian diaspora music audience in UK, USA, Canada, Australia and UAE.',
  author: { '@type': 'Organization', name: 'Western Beats' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  url: 'https://www.westernbeats.com/resources/research/indian-diaspora-music-market-2026',
  datePublished: '2026-03-01',
}

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 800, margin: '0 auto', padding: '0 24px' },
  h1: { fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: '16px 0 20px', lineHeight: 1.15 },
  h2: { fontSize: 24, fontWeight: 800, margin: '48px 0 16px' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.8, margin: '0 0 20px' },
  stat: { background: '#060C18', border: '1px solid rgba(92,178,220,0.2)', borderRadius: 16, padding: '20px 24px', textAlign: 'center' as const },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 16, fontWeight: 700, textDecoration: 'none' },
}

const MARKETS = [
  { flag: '🇬🇧', country: 'United Kingdom', pop: '1.8M', city: 'London, Birmingham, Leicester', platforms: 'Spotify UK, Apple Music, Amazon UK', streams: '$480M', insight: 'Largest per-capita South Asian diaspora market in Europe. Brit-Asian music has its own editorial ecosystem on Spotify.' },
  { flag: '🇺🇸', country: 'United States', pop: '4.4M', city: 'New York, New Jersey, California', platforms: 'Spotify USA, Apple Music, Amazon US', streams: '$890M', insight: 'Largest absolute market. Desi-American listeners have the highest streaming spend of any diaspora group.' },
  { flag: '🇨🇦', country: 'Canada', pop: '1.8M', city: 'Toronto, Vancouver, Brampton', platforms: 'Spotify Canada, Apple Music', streams: '$380M', insight: 'Brampton is the Punjabi music capital of North America. The "Desi Toronto" Spotify editorial playlist has 200K+ followers.' },
  { flag: '🇦🇪', country: 'UAE', pop: '3.5M', city: 'Dubai, Abu Dhabi, Sharjah', platforms: 'Spotify, Apple Music, Anghami', streams: '$420M', insight: 'Indian expats in the UAE are among the highest-spending music consumers globally. Anghami is the dominant Arabic platform and also indexes Indian music.' },
  { flag: '🇦🇺', country: 'Australia', pop: '0.8M', city: 'Melbourne, Sydney', platforms: 'Spotify AU, Apple Music', streams: '$230M', insight: 'Fastest growing South Asian diaspora market. Significant Punjabi and Tamil communities with high streaming engagement.' },
]

export default function ResearchPage2() {
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
              <Link href="/resources#research" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Research</Link>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(92,178,220,0.1)', color: '#5CB2DC', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 10px', borderRadius: 6 }}>Market Research · 10 min read</span>
            <h1 style={S.h1}>The $2.4B Indian Diaspora Music Market: Where Artists Are Leaving Money Behind</h1>
            <p style={{ ...S.p, fontSize: 18 }}>30 million South Asians outside India stream music on platforms that pay 10–30x more per stream than Indian free-tier apps. Most Indian artists are not on those platforms. Here's what they're missing.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 16, marginTop: 40 }}>
              {[['$2.4B', 'Market Size'], ['30M+', 'Listeners'], ['5 Countries', 'Analyzed'], ['10–30x', 'Higher Royalties']].map(([n, l]) => (
                <div key={l} style={S.stat}>
                  <p style={{ fontSize: 26, fontWeight: 900, color: '#5CB2DC', margin: '0 0 4px' }}>{n}</p>
                  <p style={{ fontSize: 12, color: '#8899AA', margin: 0, textTransform: 'uppercase' as const, letterSpacing: 1, fontWeight: 600 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <article style={{ padding: '48px 24px 80px' }}>
          <div style={S.wrap}>
            <h2 style={S.h2}>The Core Opportunity</h2>
            <p style={S.p}>India has 400M+ music streamers. The average stream from a free-tier Indian listener pays ₹0.005–0.03. An Indian artist needs tens of millions of streams to earn meaningful royalties from the domestic market alone.</p>
            <p style={S.p}>Meanwhile, 30 million South Asians outside India stream the same music — Hindi film songs, Punjabi pop, independent Hindi indie — on Spotify, Apple Music and Amazon Music in markets where streams pay $0.002–$0.005 USD each. That's ₹0.17–₹0.42 per stream.</p>
            <p style={S.p}>The math is stark: one stream from a UK listener on Spotify Premium is worth roughly what 30–50 free-tier Indian streams pay. This is not a niche advantage — it's a structural revenue shift available to any Indian artist willing to be on the right platforms.</p>

            <h2 style={S.h2}>Market-by-Market Analysis</h2>
            <div style={{ display: 'grid', gap: 20, margin: '0 0 28px' }}>
              {MARKETS.map(m => (
                <div key={m.country} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap' as const, gap: 8 }}>
                    <div>
                      <span style={{ fontSize: 28, marginRight: 10 }}>{m.flag}</span>
                      <span style={{ fontSize: 20, fontWeight: 900 }}>{m.country}</span>
                    </div>
                    <div style={{ textAlign: 'right' as const }}>
                      <p style={{ fontSize: 22, fontWeight: 900, color: '#5CB2DC', margin: 0 }}>{m.streams}</p>
                      <p style={{ fontSize: 11, color: '#4A5568', margin: 0, textTransform: 'uppercase' as const, letterSpacing: 1 }}>Annual music revenue</p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                    <div>
                      <p style={{ fontSize: 11, color: '#8899AA', margin: '0 0 4px', textTransform: 'uppercase' as const, letterSpacing: 1 }}>S. Asian Population</p>
                      <p style={{ fontSize: 18, fontWeight: 800, color: '#E2E8F0', margin: 0 }}>{m.pop}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 11, color: '#8899AA', margin: '0 0 4px', textTransform: 'uppercase' as const, letterSpacing: 1 }}>Key Cities</p>
                      <p style={{ fontSize: 14, fontWeight: 600, color: '#E2E8F0', margin: 0, lineHeight: 1.3 }}>{m.city}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: '#5CB2DC', margin: '0 0 8px', fontWeight: 700 }}>Key platforms: {m.platforms}</p>
                  <p style={{ ...S.p, fontSize: 14, margin: 0 }}>{m.insight}</p>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>Why Most Indian Artists Are Missing This Market</h2>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 28px' }}>
              {[
                { issue: 'Wrong distributor', fix: 'Most Indian distributors don\'t cover Spotify UK or Apple Music UK, or have weak metadata for international search. Most international distributors don\'t have JioSaavn.' },
                { issue: 'No international ISRC', fix: 'Some Indian distributors assign ISRC codes that don\'t conform to international standards, preventing tracks from being properly indexed on Spotify and Apple Music globally.' },
                { issue: 'India-only metadata', fix: 'Tracks filed only in Hindi/Devanagari script don\'t surface in English-language searches by UK or US listeners. Bilingual metadata is essential.' },
                { issue: 'No editorial pitching internationally', fix: 'JioSaavn editorial and Spotify India editorial are different teams with different processes than Spotify UK or Apple Music UK. A distributor needs relationships with all of them.' },
              ].map(r => (
                <div key={r.issue} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '18px 20px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ background: 'rgba(239,68,68,0.1)', color: '#F87171', fontSize: 12, fontWeight: 700, padding: '4px 8px', borderRadius: 6, whiteSpace: 'nowrap' as const, textTransform: 'uppercase' as const, letterSpacing: 1 }}>{r.issue}</span>
                  <p style={{ ...S.p, margin: 0, fontSize: 14 }}>{r.fix}</p>
                </div>
              ))}
            </div>

            <p style={S.p}>Western Beats solves all four: global platform coverage including JioSaavn, international ISRC assignment, bilingual metadata support, and editorial pitching relationships across both Indian and international streaming teams.</p>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const, marginTop: 48 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Reach the diaspora market — free.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>One submission. JioSaavn, Spotify UK/USA/Canada, Apple Music globally and 150+ platforms. No annual fee.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  )
}
