import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'How to Record Music at Home India 2026 — Budget Home Studio Guide | Western Beats',
  description: 'Complete guide to setting up a home recording studio in India on any budget. DAW software, microphones, audio interfaces, acoustic treatment — everything independent Indian artists need to record professional music at home.',
  keywords: ['how to record music at home India','home studio setup India','best DAW India 2026','home recording studio India budget','audio interface India','condenser microphone India recording','home recording tips India','record music laptop India'],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-to-record-music-at-home-india' },
  openGraph: { title: 'How to Record Music at Home India 2026 | Western Beats', description: 'Budget home studio guide for independent Indian artists — DAW, mic, interface and acoustic tips.', url: 'https://www.westernbeats.com/blog/how-to-record-music-at-home-india', siteName: 'Western Beats', type: 'article' },
}

const SCHEMA = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Record Music at Home India 2026 — Budget Home Studio Guide', description: 'Complete guide to home recording in India — DAW software, microphones, audio interfaces, and acoustic treatment for independent artists on any budget.', author: { '@type': 'Organization', name: 'Western Beats' }, publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' }, url: 'https://www.westernbeats.com/blog/how-to-record-music-at-home-india', datePublished: '2026-08-05' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'What equipment do I need to record music at home in India?', acceptedAnswer: { '@type': 'Answer', text: 'The essential home studio setup for Indian artists: (1) a laptop or desktop with at least 8GB RAM, (2) a DAW like GarageBand (free, Mac) or Reaper (₹5,500 one-time), (3) an audio interface like the Focusrite Scarlett Solo (₹9,000–12,000 in India), (4) a condenser microphone like the Audio-Technica AT2020 (₹8,000–10,000), and (5) studio headphones like the Audio-Technica ATH-M50x (₹12,000). Total minimum: ₹30,000–35,000 for a functional recording setup.' } },
    { '@type': 'Question', name: 'Which DAW is best for Indian artists in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'For beginners: GarageBand (free on Mac). For professional production: FL Studio (₹15,000 one-time), Ableton Live, or Logic Pro (₹18,000 on Mac). For producers focused on Indian music styles: FL Studio is the most popular among Punjabi and Hindi music producers in India. For singer-songwriters: Logic Pro (Mac) or Reaper (Windows/Mac).' } },
  ]},
]

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 760, margin: '0 auto', padding: '0 24px' },
  h2: { fontSize: 24, fontWeight: 800, margin: '48px 0 16px', letterSpacing: '-0.01em' },
  h3: { fontSize: 18, fontWeight: 800, margin: '28px 0 12px' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.85, margin: '0 0 20px' },
  li: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.85, margin: '0 0 10px' },
  tip: { background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', borderLeft: '4px solid #34D399', borderRadius: '0 12px 12px 0', padding: '16px 20px', margin: '24px 0', fontSize: 14, color: '#E2E8F0', lineHeight: 1.7 },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 15, fontWeight: 800, textDecoration: 'none' },
}

const BUDGETS = [
  {
    tier: 'Starter — ₹15,000–25,000',
    color: '#34D399',
    items: [
      { name: 'DAW', rec: 'GarageBand (free, Mac) or Reaper (₹5,500)', why: 'Reaper is the best paid DAW for the price — full professional features, no subscription.' },
      { name: 'Microphone', rec: 'Maono AU-A04 or similar (~₹4,000)', why: 'USB condenser mics skip the interface entirely. Lower quality ceiling but gets you recording immediately.' },
      { name: 'Headphones', rec: 'Sony MDR-7506 (~₹7,500) or AKG K240 (~₹5,000)', why: 'Flat monitoring headphones for mixing. Do not use consumer earbuds — boosted bass will ruin your mix.' },
      { name: 'Acoustic treatment', rec: 'Record in a wardrobe with clothes, or hang thick blankets', why: 'Clothes absorb high-frequency reflections. A wardrobe is the cheapest acoustic booth in India.' },
    ],
  },
  {
    tier: 'Mid-range — ₹40,000–70,000',
    color: '#5CB2DC',
    items: [
      { name: 'DAW', rec: 'FL Studio Producer Edition (~₹15,000) or Logic Pro (~₹18,000, Mac)', why: 'FL Studio is dominant among Hindi and Punjabi producers. Logic Pro is the standard for singer-songwriters.' },
      { name: 'Audio Interface', rec: 'Focusrite Scarlett Solo (₹9,000–12,000)', why: 'The global standard entry interface. Low latency, clean preamps, works on Windows and Mac.' },
      { name: 'Microphone', rec: 'Audio-Technica AT2020 XLR (~₹8,500)', why: 'The most trusted entry condenser mic worldwide. Requires an interface. Captures vocals cleanly.' },
      { name: 'Headphones', rec: 'Audio-Technica ATH-M50x (~₹12,000)', why: 'Studio standard. Accurate flat response for mixing decisions.' },
      { name: 'Acoustic panels', rec: '4–8 acoustic foam panels (₹3,000–6,000 on Amazon India)', why: 'Foam panels on the first reflection points — the walls beside and above your mic — significantly reduce room sound.' },
    ],
  },
  {
    tier: 'Professional — ₹1,00,000+',
    color: '#A78BFA',
    items: [
      { name: 'DAW', rec: 'Logic Pro (Mac) or Pro Tools (₹22,000/year)', why: 'Pro Tools is the industry standard for studio work. Logic Pro is sufficient for 95% of independent releases.' },
      { name: 'Audio Interface', rec: 'Universal Audio Volt 276 (₹22,000) or Focusrite Scarlett 2i2 (₹15,000)', why: 'Better preamps and conversion for professional-quality recordings.' },
      { name: 'Microphone', rec: 'Rode NT1-A (~₹18,000) or Audio-Technica AT4040 (~₹25,000)', why: 'Large diaphragm condensers with very low self-noise — the difference is audible on quiet vocals.' },
      { name: 'Studio monitors', rec: 'Yamaha HS5 (~₹28,000/pair) or KRK Rokit 5 (~₹20,000/pair)', why: 'Mixing on speakers gives a more accurate picture of how your track sounds on different systems than headphones alone.' },
      { name: 'Acoustic treatment', rec: 'Professional bass traps + broadband absorbers (₹15,000–30,000)', why: 'Bass buildup in corners is the most common home studio problem. Bass traps fix the low end that foam panels cannot.' },
    ],
  },
]

export default function HomeRecordingIndia() {
  return (
    <>
      {SCHEMA.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <div style={S.page}>
        <Nav />
        <header style={{ background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '100px 24px 60px' }}>
          <div style={S.wrap}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <Link href="/blog" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Blog</Link>
              <span style={{ color: '#4A5568' }}>/</span>
              <span style={{ color: '#5CB2DC', fontSize: 13 }}>Home Recording India</span>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(52,211,153,0.1)', color: '#34D399', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 6, marginBottom: 20 }}>Studio · Recording · India</span>
            <h1 style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>How to Record Music at Home India 2026 — Budget Studio Guide</h1>
            <p style={{ ...S.p, fontSize: 18 }}>Most professional-sounding independent releases in India today are recorded in home studios. You don&apos;t need a ₹10,000/hour studio — you need the right ₹30,000 setup. Here&apos;s exactly what to buy and how to use it.</p>
          </div>
        </header>

        <article style={{ padding: '48px 24px 100px' }}>
          <div style={S.wrap}>

            <div style={S.tip}>
              <strong>🟢 The most important thing:</strong> Room acoustics matter more than your microphone. A ₹30,000 microphone in a bad room sounds worse than a ₹8,000 microphone in a treated room. Fix your room first.
            </div>

            <h2 style={S.h2}>The 4 Essential Components of a Home Studio</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16, margin: '0 0 32px' }}>
              {[
                { n: '01', title: 'Computer / Laptop', desc: 'Minimum 8GB RAM, 16GB recommended. Any modern laptop (Mac or Windows) from the last 4 years works. MacBooks are preferred because GarageBand and Logic Pro are exclusive to Mac.' },
                { n: '02', title: 'DAW (Digital Audio Workstation)', desc: 'The software where you record, arrange, mix and export your music. GarageBand is free on Mac. FL Studio (Windows/Mac) costs ~₹15,000 one-time. Reaper costs ₹5,500 one-time.' },
                { n: '03', title: 'Audio Interface + Microphone', desc: 'An audio interface converts your microphone\'s signal to digital. You need both — a microphone alone plugs into the interface, which connects to your laptop via USB. The Focusrite Scarlett Solo + AT2020 combo (~₹18,000) is the entry standard.' },
                { n: '04', title: 'Acoustic Treatment', desc: 'Foam panels, bass traps, or improvised treatment (a wardrobe) to reduce room reflections. This is what separates a demo-quality recording from a releasable one.' },
              ].map(c => (
                <div key={c.n} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: '#0A64C3', letterSpacing: 2, marginBottom: 8 }}>{c.n}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 8px' }}>{c.title}</h3>
                  <p style={{ ...S.p, margin: 0, fontSize: 14 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>Budget Breakdowns for Indian Artists</h2>
            {BUDGETS.map(b => (
              <div key={b.tier} style={{ background: '#060C18', border: `1px solid rgba(255,255,255,0.07)`, borderTop: `3px solid ${b.color}`, borderRadius: 16, padding: '24px', marginBottom: 20 }}>
                <h3 style={{ fontSize: 16, fontWeight: 900, margin: '0 0 20px', color: b.color }}>{b.tier}</h3>
                <div style={{ display: 'grid', gap: 12 }}>
                  {b.items.map(item => (
                    <div key={item.name} style={{ display: 'flex', gap: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: '#8899AA', minWidth: 100, paddingTop: 2 }}>{item.name}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{item.rec}</div>
                        <div style={{ fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>{item.why}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <h2 style={S.h2}>Recording Tips Specific to India</h2>
            <ul style={{ paddingLeft: 24, margin: '0 0 28px' }}>
              {[
                'Record between 12am–5am if you\'re in a busy neighbourhood — traffic noise and generator hum peak during the day. Most Indian home studio recordings are done in the middle of the night for this reason.',
                'Monsoon humidity (June–September) affects condenser microphones. Store your mic with silica gel packets when not in use and let it warm up for 20 minutes before recording in humid conditions.',
                'Power fluctuations can damage audio interfaces. Use a UPS (Uninterruptible Power Supply) — a basic model (₹3,000–5,000) will protect your equipment and eliminate hum caused by unstable power.',
                'Inverter/generator hum at 50Hz is a common problem in Indian home studios. A hum remover plugin (iZotope RX Elements, ~₹4,000) can remove this from existing recordings.',
                'Indian summers (40°C+) cause laptops to throttle. Record during cooler hours or use a laptop cooling pad to prevent CPU-related audio dropouts.',
              ].map(l => <li key={l} style={S.li}>{l}</li>)}
            </ul>

            <h2 style={S.h2}>FAQ: Home Recording India</h2>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 48px' }}>
              {[
                { q: 'What equipment do I need to record music at home in India?', a: 'Minimum: laptop, DAW (GarageBand/Reaper), audio interface (Focusrite Scarlett Solo ~₹10,000), condenser mic (AT2020 ~₹8,500), and studio headphones (ATH-M50x ~₹12,000). Total: ₹30,000–35,000 for a professional-sounding home setup.' },
                { q: 'Which DAW is best for Indian artists in 2026?', a: 'FL Studio is the most popular among Punjabi and Hindi music producers. GarageBand is free on Mac and excellent for singer-songwriters. Logic Pro (Mac, ~₹18,000) is the professional standard. Reaper (~₹5,500) is the best budget paid option for Windows users.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 10px' }}>{faq.q}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Made your recording? Distribute it for free.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Western Beats gets your home recording on Spotify, JioSaavn and 150+ platforms. Upload WAV. We handle the rest. Free forever.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
