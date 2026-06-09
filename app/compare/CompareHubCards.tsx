'use client'
import Link from 'next/link'

const COMPS = [
  { name: 'DistroKid', slug: 'distrokid-vs-western-beats', price: '$22.99/year', verdict: 'WB wins: ₹0 forever + JioSaavn + WMG' },
  { name: 'TuneCore', slug: 'tunecore-vs-western-beats', price: '₹1,599/year', verdict: "WB wins: TuneCore free plan can't include JioSaavn" },
  { name: 'CD Baby', slug: 'cd-baby-vs-western-beats', price: '$9.99/release + 9%', verdict: 'WB wins: ₹0 + no royalty cut' },
  { name: 'Deliver My Tune', slug: 'deliver-my-tune-vs-western-beats', price: '₹1,999+/plan', verdict: 'WB wins: ₹0 + 150 platforms + WMG' },
  { name: 'ForeVision Digital', slug: 'forevision-vs-western-beats', price: '₹499/release', verdict: 'WB wins: 150 platforms vs 47, free' },
  { name: 'RouteNote', slug: 'routenote-vs-western-beats', price: 'Free but 15% forever', verdict: 'WB wins: no permanent commission + 150 platforms' },
]

export default function CompareHubCards() {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 120px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
      {COMPS.map(c => (
        <Link key={c.slug} href={`/compare/${c.slug}`} style={{ textDecoration: 'none' }}>
          <div
            style={{ background: '#111', border: '1px solid #222', borderRadius: 16, padding: '32px 28px', transition: 'border-color 0.2s', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#C41230')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#222')}
          >
            <div style={{ fontSize: 13, color: '#C41230', fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>WB vs</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 8 }}>{c.name}</h2>
            <div style={{ fontSize: 13, color: '#666', marginBottom: 16 }}>Their price: {c.price}</div>
            <p style={{ fontSize: 14, color: '#888' }}>{c.verdict}</p>
            <div style={{ marginTop: 20, fontSize: 14, color: '#C41230', fontWeight: 600 }}>See full comparison →</div>
          </div>
        </Link>
      ))}
    </section>
  )
}
