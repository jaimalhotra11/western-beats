'use client'
import { useState } from 'react'
import Link from 'next/link'

const PLATFORMS = [
  { id: 'spotify',      name: 'Spotify',        rate: 0.003,   currency: 'USD', flag: '🎵' },
  { id: 'jiosaavn',     name: 'JioSaavn',        rate: 0.0015,  currency: 'USD', flag: '🎶' },
  { id: 'apple',        name: 'Apple Music',     rate: 0.005,   currency: 'USD', flag: '🍎' },
  { id: 'youtube',      name: 'YouTube Music',   rate: 0.002,   currency: 'USD', flag: '▶️' },
  { id: 'gaana',        name: 'Gaana',           rate: 0.001,   currency: 'USD', flag: '🎼' },
  { id: 'wynk',         name: 'Wynk Music',      rate: 0.001,   currency: 'USD', flag: '🎤' },
  { id: 'amazon',       name: 'Amazon Music',    rate: 0.004,   currency: 'USD', flag: '📦' },
  { id: 'hungama',      name: 'Hungama',         rate: 0.0008,  currency: 'USD', flag: '🎭' },
]

const USD_TO_INR = 83.5

function fmt(n: number) {
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)}L`
  if (n >= 1000) return `₹${(n / 1000).toFixed(1)}K`
  return `₹${n.toFixed(0)}`
}

export default function RoyaltyCalculatorClient() {
  const [streams, setStreams] = useState(100000)
  const [selected, setSelected] = useState<string[]>(['spotify', 'jiosaavn', 'apple', 'youtube', 'gaana'])
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const multiplier = period === 'yearly' ? 12 : 1

  const results = PLATFORMS.filter(p => selected.includes(p.id)).map(p => {
    const usd = p.rate * streams * multiplier
    const inr = usd * USD_TO_INR
    return { ...p, usd, inr }
  })

  const totalInr = results.reduce((s, r) => s + r.inr, 0)
  const distrokidLoss = period === 'yearly' ? (22.99 * USD_TO_INR) : (22.99 * USD_TO_INR / 12)
  const cdbabyCut = totalInr * 0.09

  const toggle = (id: string) =>
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const input = `w-full bg-[#060D1F] border border-white/[0.09] rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-[#0A64C3] transition-all`

  return (
    <main style={{ background: '#040A14', minHeight: '100vh', color: 'white', paddingTop: 80 }}>

      {/* Hero */}
      <section style={{ padding: '60px 24px 40px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 28, display: 'flex', justifyContent: 'center' }}>
          <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: '#4A5568', listStyle: 'none', padding: 0 }}>
            <li><Link href="/" style={{ color: '#4A5568', textDecoration: 'none' }}>Home</Link></li>
            <li style={{ color: '#ffffff30' }}>›</li>
            <li style={{ color: '#5CB2DC' }}>Royalty Calculator</li>
          </ol>
        </nav>
        <div style={{ display: 'inline-block', background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#5CB2DC', marginBottom: 20 }}>Free Tool</div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
          Music Royalty Calculator India <span style={{ color: '#0A64C3' }}>2026</span>
        </h1>
        <p style={{ fontSize: 17, color: '#8899AA', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
          Calculate how much you&apos;d earn from Spotify, JioSaavn, Apple Music, YouTube Music and more — and see how much you save by choosing Western Beats over DistroKid or CD Baby.
        </p>
      </section>

      {/* Calculator */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 24, padding: '40px' }}>

          {/* Controls */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 36 }}>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#8899AA', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Monthly Streams</label>
              <input
                type="number"
                className={input}
                value={streams}
                min={1000}
                step={1000}
                onChange={e => setStreams(Math.max(0, Number(e.target.value)))}
              />
              <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
                {[10000, 50000, 100000, 500000, 1000000].map(n => (
                  <button key={n} onClick={() => setStreams(n)}
                    style={{ background: streams === n ? '#0A64C3' : 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '4px 10px', fontSize: 11, color: 'white', cursor: 'pointer', fontWeight: 600 }}>
                    {n >= 1000000 ? '1M' : n >= 100000 ? `${n / 1000}K` : `${n / 1000}K`}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#8899AA', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Period</label>
              <div style={{ display: 'flex', gap: 12 }}>
                {(['monthly', 'yearly'] as const).map(p => (
                  <button key={p} onClick={() => setPeriod(p)}
                    style={{ flex: 1, padding: '12px', borderRadius: 12, border: '1px solid', borderColor: period === p ? '#0A64C3' : 'rgba(255,255,255,0.09)', background: period === p ? 'rgba(10,100,195,0.15)' : 'transparent', color: period === p ? '#5CB2DC' : '#8899AA', fontWeight: 700, fontSize: 13, cursor: 'pointer', textTransform: 'capitalize' }}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Platform selection */}
          <div style={{ marginBottom: 36 }}>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#8899AA', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Select Platforms</label>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {PLATFORMS.map(p => (
                <button key={p.id} onClick={() => toggle(p.id)}
                  style={{ padding: '8px 14px', borderRadius: 10, border: '1px solid', borderColor: selected.includes(p.id) ? '#0A64C3' : 'rgba(255,255,255,0.09)', background: selected.includes(p.id) ? 'rgba(10,100,195,0.15)' : 'transparent', color: selected.includes(p.id) ? '#5CB2DC' : '#4A5568', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
                  {p.flag} {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#4A5568', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Estimated Earnings — {streams.toLocaleString()} streams/month</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {results.map(r => (
                <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 120, fontSize: 14, fontWeight: 600, color: 'white', flexShrink: 0 }}>{r.flag} {r.name}</div>
                  <div style={{ flex: 1, height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', borderRadius: 4, background: '#0A64C3', width: `${Math.min(100, (r.inr / (totalInr || 1)) * 100 * results.length / results.length * results.length)}%`, maxWidth: '100%', transition: 'width 0.4s' }} />
                  </div>
                  <div style={{ width: 80, textAlign: 'right', fontSize: 15, fontWeight: 800, color: '#5CB2DC' }}>{fmt(r.inr)}</div>
                  <div style={{ width: 70, textAlign: 'right', fontSize: 12, color: '#4A5568' }}>${r.usd.toFixed(2)}</div>
                </div>
              ))}
            </div>

            {/* Total + comparison */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              <div style={{ background: 'rgba(10,100,195,0.12)', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 16, padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#5CB2DC', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Total ({period})</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#5CB2DC' }}>{fmt(totalInr)}</div>
                <div style={{ fontSize: 12, color: '#4A5568', marginTop: 4 }}>With Western Beats (free)</div>
              </div>
              <div style={{ background: 'rgba(196,18,48,0.08)', border: '1px solid rgba(196,18,48,0.2)', borderRadius: 16, padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#f87171', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>DistroKid Fee Lost ({period})</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#f87171' }}>-{fmt(distrokidLoss)}</div>
                <div style={{ fontSize: 12, color: '#4A5568', marginTop: 4 }}>$22.99/yr subscription</div>
              </div>
              <div style={{ background: 'rgba(196,18,48,0.08)', border: '1px solid rgba(196,18,48,0.2)', borderRadius: 16, padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#f87171', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>CD Baby 9% Cut ({period})</div>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#f87171' }}>-{fmt(cdbabyCut)}</div>
                <div style={{ fontSize: 12, color: '#4A5568', marginTop: 4 }}>9% of every royalty</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: '#4A5568', marginTop: 20, lineHeight: 1.6 }}>
              * Estimates based on average per-stream rates. Actual royalties vary by listener country, subscription tier (premium vs free), and platform agreements. USD/INR rate: ₹{USD_TO_INR}. These are projections only, not guaranteed earnings.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: '#0A1535', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 20, padding: '40px', textAlign: 'center', marginTop: 32 }}>
          <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>Keep Every Rupee You Earn</div>
          <p style={{ color: '#8899AA', fontSize: 16, marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
            Western Beats is free. No subscription. No per-release fee. You earned that {fmt(totalInr)} — keep it all.
          </p>
          <Link href="/submit" style={{ background: '#0A64C3', color: 'white', padding: '15px 36px', borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none', display: 'inline-block' }}>
            Submit Your Music Free →
          </Link>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 64 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>Royalty FAQ for Indian Artists</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'How much does Spotify pay per stream in India?', a: 'Spotify pays approximately $0.003–$0.005 per stream globally. For Indian listeners specifically, the rate is around $0.001–$0.003 due to lower subscription prices in India compared to the US or UK.' },
              { q: 'How much does JioSaavn pay per stream?', a: 'JioSaavn pays approximately ₹0.08–₹0.15 per stream (~$0.001–$0.002). Rates vary based on premium vs free-tier users and quarterly payment cycles.' },
              { q: 'How many streams do I need to earn ₹1 lakh?', a: 'On Spotify, roughly 500,000–1,000,000 streams. On JioSaavn, roughly 700,000–1,200,000 streams. The exact number depends on where your listeners are and which subscription tier they use.' },
              { q: 'How often does Western Beats pay royalties?', a: 'Western Beats pays royalties on a quarterly basis (every 3 months) for most platforms, and every 2 months for YouTube royalties, once the platform reporting is received.' },
              { q: 'Does Western Beats take a percentage of my royalties?', a: 'Western Beats operates on a revenue share model — we earn only when you earn. The exact share is outlined in the distribution agreement. There is no upfront fee or annual subscription.' },
            ].map(faq => (
              <div key={faq.q} style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: '#8899AA', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 40, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <Link href="/royalties" style={{ color: '#0A64C3', fontSize: 14, fontWeight: 600 }}>→ How Royalties Work at Western Beats</Link>
          <Link href="/blog/how-to-distribute-music-india-free" style={{ color: '#0A64C3', fontSize: 14, fontWeight: 600 }}>→ How to Distribute Music Free in India</Link>
          <Link href="/pricing" style={{ color: '#0A64C3', fontSize: 14, fontWeight: 600 }}>→ Western Beats Pricing (Free)</Link>
        </div>
      </section>
    </main>
  )
}
