import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'India Music Industry Statistics 2026 — Streaming, Revenue & Artist Data | Western Beats',
  description: 'Comprehensive India music industry statistics 2026: streaming users, platform market share, royalty rates, independent artist data, digital music revenue and growth trends.',
  keywords: [
    'India music industry statistics 2026',
    'Indian music streaming statistics',
    'JioSaavn users India 2026',
    'India digital music revenue 2026',
    'Indian music market size',
    'music streaming India statistics',
    'independent music India statistics',
    'India music industry report',
    'Spotify users India 2026',
    'Indian music industry data',
    'music industry India growth',
    'streaming music India market share',
  ],
  alternates: { canonical: 'https://westernbeats.com/india-music-industry' },
  openGraph: {
    title: 'India Music Industry Statistics 2026 | Western Beats',
    description: 'Streaming users, revenue, royalty rates, platform market share — comprehensive India music industry data 2026.',
    url: 'https://westernbeats.com/india-music-industry',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'India Music Industry Statistics 2026 | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'India Music Industry Statistics 2026',
  description: 'Comprehensive statistics on India\'s digital music industry — streaming users, revenue, platform data, and independent artist trends.',
  url: 'https://westernbeats.com/india-music-industry',
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://westernbeats.com' },
  dateModified: '2026-06-21',
  license: 'https://creativecommons.org/licenses/by/4.0/',
}

const PLATFORMS_DATA = [
  { name: 'JioSaavn', mau: '150M+', share: '32%', type: 'Indian', premium: '₹299/mo', color: '#0A64C3' },
  { name: 'Gaana', mau: '200M+', share: '30%', type: 'Indian', premium: '₹149/mo', color: '#C41230' },
  { name: 'Spotify', mau: '80M+', share: '18%', type: 'Global', premium: '₹119/mo', color: '#1DB954' },
  { name: 'Wynk Music', mau: '100M+', share: '12%', type: 'Indian', premium: '₹49/mo', color: '#5CB2DC' },
  { name: 'YouTube Music', mau: '70M+', share: '10%', type: 'Global', premium: '₹99/mo', color: '#FF0000' },
  { name: 'Apple Music', mau: '10M+', share: '2%', type: 'Global', premium: '₹99/mo', color: '#FC3C44' },
  { name: 'Amazon Music', mau: '8M+', share: '1.5%', type: 'Global', premium: 'Prime incl.', color: '#00A8E0' },
  { name: 'Hungama', mau: '50M+', share: '3%', type: 'Indian', premium: '₹99/mo', color: '#FF6B00' },
]

const ROYALTY_RATES = [
  { platform: 'Apple Music', rateINR: '₹0.50–₹0.83', rateUSD: '$0.005–$0.010', tier: 'Highest' },
  { platform: 'Amazon Music Unlimited', rateINR: '₹0.25–₹0.42', rateUSD: '$0.003–$0.005', tier: 'High' },
  { platform: 'Spotify', rateINR: '₹0.08–₹0.25', rateUSD: '$0.001–$0.003', tier: 'Medium' },
  { platform: 'YouTube Music', rateINR: '₹0.08–₹0.17', rateUSD: '$0.001–$0.002', tier: 'Medium' },
  { platform: 'JioSaavn', rateINR: '₹0.08–₹0.13', rateUSD: '$0.001–$0.0015', tier: 'Medium' },
  { platform: 'Gaana', rateINR: '₹0.04–₹0.09', rateUSD: '$0.0005–$0.001', tier: 'Lower' },
  { platform: 'Wynk Music', rateINR: '₹0.04–₹0.09', rateUSD: '$0.0005–$0.001', tier: 'Lower' },
  { platform: 'Hungama', rateINR: '₹0.03–₹0.07', rateUSD: '$0.0004–$0.0008', tier: 'Lower' },
]

export default function IndiaMusicIndustryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Nav />
      <main style={{ background: '#040A14', minHeight: '100vh', color: 'white' }}>

        {/* Hero */}
        <section style={{ padding: '120px 24px 60px', maxWidth: 1100, margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 28 }}>
            <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: '#4A5568', listStyle: 'none', padding: 0 }}>
              <li><Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ color: '#ffffff30' }}>›</li>
              <li style={{ color: '#5CB2DC' }}>India Music Industry Statistics</li>
            </ol>
          </nav>
          <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>Industry Data 2026</div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 58px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            India Music Industry<br /><span style={{ color: '#0A64C3' }}>Statistics 2026</span>
          </h1>
          <p style={{ fontSize: 17, color: '#8899AA', maxWidth: 700, lineHeight: 1.7, marginBottom: 16 }}>
            Comprehensive data on India&apos;s digital music industry — streaming users, platform market share, royalty rates, independent artist trends, and revenue growth. Updated June 2026.
          </p>
          <p style={{ fontSize: 13, color: '#4A5568' }}>Sources: IFPI, Statista, platform public disclosures, industry reports. Last updated: June 2026.</p>
        </section>

        {/* Key stats */}
        <section style={{ background: '#060C18', padding: '60px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 40, textAlign: 'center' }}>India Music Market — Key Numbers 2026</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
              {[
                { stat: '₹4,200 Cr+', label: 'Digital Music Revenue', note: '2025 figure, growing 15% YoY' },
                { stat: '500M+', label: 'Music Streaming Users', note: 'Across all platforms in India' },
                { stat: '1.1B+', label: 'Mobile Subscribers', note: 'Jio, Airtel, Vi, BSNL combined' },
                { stat: '15%', label: 'YoY Growth', note: 'India music streaming revenue growth' },
                { stat: '#1', label: 'Global Growth Market', note: 'India is the fastest-growing music market' },
                { stat: '₹1,000 Cr+', label: 'CRBT/Caller Tune Revenue', note: 'Annual caller tune market India' },
                { stat: '200M+', label: 'YouTube Music Users', note: 'YouTube (all tiers) India monthly users' },
                { stat: '40%', label: 'Regional Language Share', note: 'Non-Hindi music as % of streams' },
              ].map(s => (
                <div key={s.stat} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: '#0A64C3', marginBottom: 6 }}>{s.stat}</div>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: 14, marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: '#4A5568' }}>{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform market share */}
        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Music Streaming Platform Market Share — India 2026</h2>
          <p style={{ color: '#8899AA', fontSize: 15, marginBottom: 36 }}>Monthly active users and estimated market share by platform. Indian platforms dominate India&apos;s market.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#0A1535' }}>
                  {['Platform', 'Monthly Active Users', 'Est. Market Share', 'Type', 'Premium Price'].map(h => (
                    <th key={h} style={{ padding: '14px 16px', textAlign: 'left', color: '#8899AA', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PLATFORMS_DATA.map((p, i) => (
                  <tr key={p.name} style={{ background: i % 2 === 0 ? '#060C18' : '#040A14' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 700, color: 'white', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{p.name}</td>
                    <td style={{ padding: '14px 16px', color: '#5CB2DC', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{p.mau}</td>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 80, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }}>
                          <div style={{ width: p.share, height: '100%', background: p.color, borderRadius: 3 }} />
                        </div>
                        <span style={{ color: '#8899AA' }}>{p.share}</span>
                      </div>
                    </td>
                    <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <span style={{ background: p.type === 'Indian' ? 'rgba(10,100,195,0.15)' : 'rgba(255,255,255,0.06)', color: p.type === 'Indian' ? '#5CB2DC' : '#8899AA', borderRadius: 8, padding: '3px 10px', fontSize: 12, fontWeight: 600 }}>{p.type}</span>
                    </td>
                    <td style={{ padding: '14px 16px', color: '#8899AA', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{p.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Royalty rates */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Per-Stream Royalty Rates by Platform — India 2026</h2>
            <p style={{ color: '#8899AA', fontSize: 15, marginBottom: 36 }}>Estimated per-stream royalty rates in INR and USD. Indian platform rates reflect lower subscription prices vs global markets.</p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ background: '#0A1535' }}>
                    {['Platform', 'Rate per Stream (INR)', 'Rate per Stream (USD)', 'Tier'].map(h => (
                      <th key={h} style={{ padding: '14px 16px', textAlign: 'left', color: '#8899AA', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROYALTY_RATES.map((r, i) => (
                    <tr key={r.platform} style={{ background: i % 2 === 0 ? '#060C18' : '#040A14' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 700, color: 'white', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{r.platform}</td>
                      <td style={{ padding: '14px 16px', color: '#5CB2DC', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{r.rateINR}</td>
                      <td style={{ padding: '14px 16px', color: '#8899AA', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{r.rateUSD}</td>
                      <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <span style={{ background: r.tier === 'Highest' ? 'rgba(92,178,220,0.15)' : r.tier === 'High' ? 'rgba(10,100,195,0.15)' : r.tier === 'Medium' ? 'rgba(255,255,255,0.06)' : 'rgba(196,18,48,0.1)', color: r.tier === 'Highest' ? '#5CB2DC' : r.tier === 'High' ? '#7BB8E8' : r.tier === 'Medium' ? '#8899AA' : '#f87171', borderRadius: 8, padding: '3px 10px', fontSize: 12, fontWeight: 600 }}>{r.tier}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: '#4A5568', marginTop: 16 }}>* Rates are estimates based on industry reporting. Actual rates vary by listener country, premium vs free tier, and quarterly fluctuations. USD/INR at ₹83.5.</p>
          </div>
        </section>

        {/* Independent artist section */}
        <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 40 }}>Independent Artists in India — 2026 Data</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { stat: '200,000+', label: 'Independent Artists in India', note: 'Releasing music without a major label deal' },
              { stat: '40%', label: 'Streaming Share', note: 'Percentage of Indian streams from independent artists' },
              { stat: '3x', label: 'Growth Since 2021', note: 'Independent music release volume increase' },
              { stat: '₹500 Cr+', label: 'Independent Artist Revenue', note: 'Annual royalties earned by indie artists India' },
              { stat: '72hrs', label: 'Avg. Distribution Time', note: 'Industry standard for digital delivery (Western Beats)' },
              { stat: '₹0', label: 'Cost to Distribute (WB)', note: 'Western Beats charges nothing upfront for distribution' },
            ].map(s => (
              <div key={s.stat} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: '#0A64C3', marginBottom: 6 }}>{s.stat}</div>
                <div style={{ fontWeight: 700, color: 'white', fontSize: 14, marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: '#4A5568' }}>{s.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Regional music */}
        <section style={{ background: '#060C18', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Regional Language Music — India Streaming Data 2026</h2>
            <p style={{ color: '#8899AA', fontSize: 15, marginBottom: 36 }}>Regional language music is the fastest-growing segment of India&apos;s streaming market.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              {[
                { lang: 'Hindi / Bollywood', share: '38%', growth: '+8% YoY' },
                { lang: 'Punjabi', share: '18%', growth: '+22% YoY' },
                { lang: 'Tamil', share: '12%', growth: '+15% YoY' },
                { lang: 'Telugu', share: '10%', growth: '+18% YoY' },
                { lang: 'Bhojpuri', share: '8%', growth: '+30% YoY' },
                { lang: 'Malayalam', share: '5%', growth: '+12% YoY' },
                { lang: 'Kannada', share: '4%', growth: '+14% YoY' },
                { lang: 'Haryanvi', share: '3%', growth: '+35% YoY' },
                { lang: 'Bengali', share: '2%', growth: '+10% YoY' },
              ].map(l => (
                <div key={l.lang} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px' }}>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{l.lang}</div>
                  <div style={{ fontSize: 24, fontWeight: 900, color: '#0A64C3' }}>{l.share}</div>
                  <div style={{ fontSize: 12, color: '#5CB2DC', fontWeight: 600, marginTop: 4 }}>{l.growth}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attribution + CTA */}
        <section style={{ padding: '60px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Data Sources & Methodology</h3>
              <ul style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
                <li>IFPI Global Music Report 2025</li>
                <li>Statista India Music Industry Data 2025-2026</li>
                <li>Platform public earnings announcements</li>
                <li>Music industry analyst reports (MiDiA, Midia Research)</li>
                <li>Independent artist earnings disclosures</li>
                <li>Telecom Regulatory Authority of India (TRAI) data</li>
              </ul>
              <p style={{ color: '#4A5568', fontSize: 12, marginTop: 12 }}>All figures are estimates based on available public data. Western Beats does not guarantee accuracy. Cite as: &ldquo;Western Beats India Music Industry Statistics 2026, westernbeats.com/india-music-industry&rdquo;</p>
            </div>
            <div style={{ background: '#0A1535', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '32px', textAlign: 'center' }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>Ready to Be Part of This Growth?</h3>
              <p style={{ color: '#8899AA', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>Join 200,000+ independent artists distributing in India. Free, 150+ platforms, 72 hours.</p>
              <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '14px 28px', borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'inline-block' }}>Submit Your Music Free →</Link>
              <div style={{ marginTop: 16 }}>
                <Link href="/royalty-calculator" style={{ color: '#5CB2DC', fontSize: 13 }}>Calculate Your Earnings →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
