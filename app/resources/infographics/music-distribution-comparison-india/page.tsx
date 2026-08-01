import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Western Beats vs DistroKid vs TuneCore vs CD Baby 2026 [India Comparison] | Western Beats',
  description: 'Side-by-side visual comparison of Western Beats, DistroKid, TuneCore and CD Baby for Indian artists — JioSaavn coverage, fees, royalty splits, and which distributor wins for India.',
  keywords: ['Western Beats vs DistroKid India', 'music distributor comparison India 2026', 'DistroKid JioSaavn India', 'TuneCore vs Western Beats', 'best music distributor India free', 'CD Baby India comparison'],
  alternates: { canonical: 'https://www.westernbeats.com/resources/infographics/music-distribution-comparison-india' },
  openGraph: {
    title: 'Western Beats vs DistroKid vs TuneCore vs CD Baby 2026 [India] | Western Beats',
    description: 'Visual comparison of all major music distributors for Indian artists — who has JioSaavn, who charges fees, who takes commission.',
    url: 'https://www.westernbeats.com/resources/infographics/music-distribution-comparison-india',
    siteName: 'Western Beats', type: 'article',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Western Beats vs DistroKid vs TuneCore vs CD Baby: The India Music Distributor Comparison 2026',
  description: 'Visual side-by-side comparison of every major music distributor for Indian artists.',
  author: { '@type': 'Organization', name: 'Western Beats' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  url: 'https://www.westernbeats.com/resources/infographics/music-distribution-comparison-india',
  datePublished: '2026-01-01',
  dateModified: '2026-07-01',
}

type DistributorKey = 'wb' | 'dk' | 'tc' | 'cd'

const DISTRIBUTORS: { key: DistributorKey; name: string; color: string }[] = [
  { key: 'wb', name: 'Western Beats', color: '#0A64C3' },
  { key: 'dk', name: 'DistroKid', color: '#7C3AED' },
  { key: 'tc', name: 'TuneCore', color: '#DC2626' },
  { key: 'cd', name: 'CD Baby', color: '#B45309' },
]

type Val = { val: string; good: boolean }
type CompRow = { feature: string; wb: Val; dk: Val; tc: Val; cd: Val }

const COMPARISON: CompRow[] = [
  { feature: 'Annual fee', wb: { val: 'Free forever', good: true }, dk: { val: '$22.99/yr', good: false }, tc: { val: '$14.99–49.99/yr', good: false }, cd: { val: '$9.95 per release', good: false } },
  { feature: 'Commission on royalties', wb: { val: '0%', good: true }, dk: { val: '0%', good: true }, tc: { val: '0%', good: true }, cd: { val: '9–15%', good: false } },
  { feature: 'JioSaavn distribution', wb: { val: '✓ Yes', good: true }, dk: { val: '✗ No', good: false }, tc: { val: '✗ No', good: false }, cd: { val: '✗ No', good: false } },
  { feature: 'Gaana distribution', wb: { val: '✓ Yes', good: true }, dk: { val: '✗ No', good: false }, tc: { val: '✗ No', good: false }, cd: { val: '✗ No', good: false } },
  { feature: 'Wynk Music distribution', wb: { val: '✓ Yes', good: true }, dk: { val: '✗ No', good: false }, tc: { val: '✗ No', good: false }, cd: { val: '✗ No', good: false } },
  { feature: 'Spotify distribution', wb: { val: '✓ Yes', good: true }, dk: { val: '✓ Yes', good: true }, tc: { val: '✓ Yes', good: true }, cd: { val: '✓ Yes', good: true } },
  { feature: 'Apple Music distribution', wb: { val: '✓ Yes', good: true }, dk: { val: '✓ Yes', good: true }, tc: { val: '✓ Yes', good: true }, cd: { val: '✓ Yes', good: true } },
  { feature: 'Free ISRC codes', wb: { val: '✓ Yes', good: true }, dk: { val: '✓ Yes', good: true }, tc: { val: '✓ Yes', good: true }, cd: { val: '✓ Yes', good: true } },
  { feature: 'Number of platforms', wb: { val: '150+', good: true }, dk: { val: '150+', good: true }, tc: { val: '150+', good: true }, cd: { val: '100+', good: true } },
  { feature: 'Editorial playlist pitching', wb: { val: '✓ India + Global', good: true }, dk: { val: '✓ Global only', good: false }, tc: { val: '✓ Global only', good: false }, cd: { val: 'Limited', good: false } },
  { feature: 'Unlimited releases', wb: { val: '✓ Yes', good: true }, dk: { val: '✓ Yes (paid)', good: false }, tc: { val: 'Per release fee', good: false }, cd: { val: 'Per release fee', good: false } },
  { feature: 'India-based support', wb: { val: '✓ Yes', good: true }, dk: { val: '✗ No (US only)', good: false }, tc: { val: '✗ No (US only)', good: false }, cd: { val: '✗ No (US only)', good: false } },
]

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 900, margin: '0 auto', padding: '0 24px' },
  h1: { fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, margin: '16px 0 20px', lineHeight: 1.15 },
  h2: { fontSize: 22, fontWeight: 800, margin: '48px 0 16px' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.8, margin: '0 0 20px' },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 16, fontWeight: 700, textDecoration: 'none' },
}

export default function Infographic2() {
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
            <span style={{ display: 'inline-block', background: 'rgba(167,139,250,0.1)', color: '#A78BFA', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 10px', borderRadius: 6 }}>Infographic · 4 min read · Updated July 2026</span>
            <h1 style={S.h1}>Western Beats vs DistroKid vs TuneCore vs CD Baby: Which Distributor Wins for Indian Artists?</h1>
            <p style={{ ...S.p, fontSize: 17 }}>The definitive visual comparison — fees, platforms, JioSaavn coverage, royalty splits and India-specific support. One table to settle every debate.</p>
          </div>
        </header>

        <article style={{ padding: '48px 24px 80px' }}>
          <div style={S.wrap}>

            {/* Comparison table */}
            <div style={{ overflowX: 'auto', margin: '0 0 48px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '16px', textAlign: 'left' as const, color: '#4A5568', fontSize: 13, fontWeight: 700 }}>Feature</th>
                    {DISTRIBUTORS.map(d => (
                      <th key={d.key} style={{ padding: '16px 12px', textAlign: 'center' as const, fontSize: 13, fontWeight: 900, color: d.color, borderBottom: d.key === 'wb' ? `3px solid ${d.color}` : 'none' }}>
                        {d.name}
                        {d.key === 'wb' && <div style={{ fontSize: 10, background: d.color, color: '#fff', borderRadius: 4, padding: '2px 6px', marginTop: 4, fontWeight: 700, letterSpacing: 1 }}>INDIA PICK</div>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.feature} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                      <td style={{ padding: '14px 16px', fontSize: 13, color: '#8899AA', fontWeight: 600 }}>{row.feature}</td>
                      {DISTRIBUTORS.map(d => {
                        const cell = row[d.key as keyof typeof row] as Val
                        return (
                          <td key={d.key} style={{ padding: '14px 12px', textAlign: 'center' as const, fontSize: 13, fontWeight: 700, color: cell.good ? '#34D399' : '#F87171', background: d.key === 'wb' ? 'rgba(10,100,195,0.04)' : 'transparent' }}>
                            {cell.val}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={S.h2}>The Verdict: Why JioSaavn Changes Everything</h2>
            <p style={S.p}>For artists based in India or making Indian music (Hindi, Punjabi, Tamil, Telugu, Bengali — any language), JioSaavn distribution is non-negotiable. It is India's largest streaming platform with 310 million users. DistroKid, TuneCore and CD Baby do not distribute to JioSaavn.</p>
            <p style={S.p}>Western Beats is the only major distributor that covers both JioSaavn and the full global platform ecosystem (Spotify, Apple Music, Amazon Music across UK, USA, Canada, UAE, Australia) — at zero cost.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16, margin: '0 0 40px' }}>
              {[
                { title: 'Choose Western Beats if:', items: ['You make Hindi/Punjabi/regional music', 'You want JioSaavn distribution', 'You don\'t want to pay annual fees', 'You\'re an NRI artist targeting both markets'] },
                { title: 'Consider DistroKid if:', items: ['You don\'t need JioSaavn at all', 'You only make English-language music', 'You\'re happy paying $22.99/year', 'You need very specific DistroKid-only features'] },
              ].map(s => (
                <div key={s.title} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px' }}>
                  <h3 style={{ fontSize: 14, fontWeight: 800, margin: '0 0 14px', color: '#E2E8F0' }}>{s.title}</h3>
                  {s.items.map(i => <p key={i} style={{ ...S.p, fontSize: 13, margin: '0 0 6px' }}>→ {i}</p>)}
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const }}>
              <h2 style={{ fontSize: 24, fontWeight: 900, margin: '0 0 12px' }}>The best distributor for Indian artists. Free.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>JioSaavn, Gaana, Wynk + Spotify, Apple Music, Amazon globally. Zero fees. 100% royalties.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  )
}
