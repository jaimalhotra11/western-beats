import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Case Study: British Indian Artist — Spotify UK + JioSaavn Dual Market | Western Beats',
  description: 'How a London-based South Asian artist released music that charted simultaneously on UK Spotify and JioSaavn India — using one distributor, for free.',
  keywords: ['South Asian artist UK music distribution', 'British Indian artist Spotify', 'JioSaavn distribution UK', 'music distribution UK India simultaneously', 'NRI artist music case study'],
  alternates: { canonical: 'https://www.westernbeats.com/resources/case-studies/british-indian-artist-dual-market' },
  openGraph: {
    title: 'Case Study: British Indian Artist — Spotify UK + JioSaavn India | Western Beats',
    description: 'A London-based South Asian artist\'s blueprint for releasing music in two markets simultaneously.',
    url: 'https://www.westernbeats.com/resources/case-studies/british-indian-artist-dual-market',
    siteName: 'Western Beats', type: 'article',
  },
}

const SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'British Indian Artist Cracks Both Markets: Spotify UK + JioSaavn India',
    description: 'A London-based South Asian artist\'s blueprint for dual-market music distribution — releasing simultaneously on UK Spotify and JioSaavn India using Western Beats.',
    author: { '@type': 'Organization', name: 'Western Beats' },
    publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
    url: 'https://www.westernbeats.com/resources/case-studies/british-indian-artist-dual-market',
    datePublished: '2026-02-01',
    dateModified: '2026-07-15',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Can I distribute to JioSaavn from the UK?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes to JioSaavn from anywhere in the world — UK, USA, Canada, Australia, UAE. You do not need to be based in India.' } },
      { '@type': 'Question', name: 'Do I need two separate distributors for UK and India?', acceptedAnswer: { '@type': 'Answer', text: 'No. Western Beats covers both markets in one submission — Spotify UK, Apple Music UK, JioSaavn, Gaana, and 150+ platforms globally.' } },
    ],
  },
]

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 760, margin: '0 auto', padding: '0 24px' },
  tag: { display: 'inline-block', background: 'rgba(52,211,153,0.1)', color: '#34D399', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 10px', borderRadius: 6 },
  h1: { fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: '16px 0 20px', lineHeight: 1.15 },
  stat: { background: '#060C18', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 16, padding: '20px 24px', textAlign: 'center' as const },
  h2: { fontSize: 24, fontWeight: 800, margin: '48px 0 16px' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.8, margin: '0 0 20px' },
  quote: { background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderLeft: '4px solid #0A64C3', borderRadius: '0 12px 12px 0', padding: '20px 24px', margin: '28px 0', fontSize: 17, fontStyle: 'italic', color: '#E2E8F0', lineHeight: 1.7 },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 16, fontWeight: 700, textDecoration: 'none' },
}

export default function CaseStudy2() {
  return (
    <>
      {SCHEMA.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <div style={S.page}>
        <Nav />

        <header style={{ background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '100px 24px 60px' }}>
          <div style={S.wrap}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' as const }}>
              <Link href="/resources" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Resources</Link>
              <span style={{ color: '#4A5568' }}>/</span>
              <Link href="/resources#case-studies" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Case Studies</Link>
            </div>
            <span style={S.tag}>Case Study · 7 min read · 🇬🇧+🇮🇳</span>
            <h1 style={S.h1}>British Indian Artist Cracks Both Markets: Spotify UK + JioSaavn India</h1>
            <p style={{ ...S.p, fontSize: 18 }}>A London-based South Asian artist needed to reach listeners in two very different markets simultaneously — the British Asian community via Spotify UK, and family and fans back home via JioSaavn. One distributor, one submission, zero cost.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 16, marginTop: 40 }}>
              {[['2 Markets', 'Reached'], ['150+', 'Platforms'], ['1 Submission', 'Zero Duplicates'], ['100%', 'Royalties Kept']].map(([n, l]) => (
                <div key={l} style={S.stat}>
                  <p style={{ fontSize: 26, fontWeight: 900, color: '#0A64C3', margin: '0 0 4px' }}>{n}</p>
                  <p style={{ fontSize: 12, color: '#8899AA', margin: 0, textTransform: 'uppercase' as const, letterSpacing: 1, fontWeight: 600 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <article style={{ padding: '48px 24px 80px' }}>
          <div style={S.wrap}>

            <h2 style={S.h2}>The Artist</h2>
            <p style={S.p}>Priya is a 26-year-old singer based in East London. Born in Leicester to Punjabi parents, she grew up listening to both Dua Lipa and Arijit Singh — and her music reflects that: English verses over Hindi choruses, with production that sits between UK indie pop and filmi-adjacent melodies.</p>
            <p style={S.p}>Her challenge was one that every NRI artist knows: she had two distinct audiences. British Asians in the UK who found her through Instagram Reels and local open mics. And family, friends and fans in Punjab and Delhi who wanted to find her on JioSaavn.</p>
            <p style={S.p}>Most distributors she researched were built for one market or the other. DistroKid covered Spotify UK well. But JioSaavn? Their artist services page didn't even list it.</p>

            <div style={S.quote}>"I searched 'how to get on JioSaavn from UK' for months. Every answer was either 'contact JioSaavn directly' (they don't reply) or 'use this Indian distributor' (they don't cover Spotify UK). Western Beats was the only one that did both." <br /><span style={{ fontSize: 14, color: '#5CB2DC', fontStyle: 'normal', fontWeight: 700 }}>— Priya, London-based artist</span></div>

            <h2 style={S.h2}>The Dual-Market Problem</h2>
            <p style={S.p}>The core challenge for British Indian artists is platform fragmentation. The UK market runs on Spotify and Apple Music. The Indian market runs on JioSaavn (310M+ users), Gaana (200M+), Wynk Music (100M+), and Spotify India — which has a different algorithm and editorial team than Spotify UK.</p>
            <p style={S.p}>Distributors that only cover one side leave artists either invisible to their Indian family or absent from UK editorial playlists. The result is typically one of two bad choices: pay two separate distributors, or accept being invisible in one market.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '0 0 28px' }}>
              <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px' }}>
                <p style={{ fontSize: 12, color: '#5CB2DC', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, margin: '0 0 10px' }}>UK Market</p>
                {['Spotify UK', 'Apple Music UK', 'Amazon Music UK', 'Deezer UK', 'TIDAL'].map(p => <p key={p} style={{ ...S.p, margin: '0 0 6px', fontSize: 14 }}>✓ {p}</p>)}
              </div>
              <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px' }}>
                <p style={{ fontSize: 12, color: '#34D399', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, margin: '0 0 10px' }}>India Market</p>
                {['JioSaavn', 'Gaana', 'Wynk Music', 'Spotify India', 'YouTube Music India'].map(p => <p key={p} style={{ ...S.p, margin: '0 0 6px', fontSize: 14 }}>✓ {p}</p>)}
              </div>
            </div>
            <p style={S.p}>Western Beats covered both columns — in a single submission.</p>

            <h2 style={S.h2}>The Release Strategy</h2>
            <p style={S.p}>Rather than choosing between markets, Priya optimised for both simultaneously. Her strategy had three pillars:</p>

            <div style={{ display: 'grid', gap: 16, margin: '0 0 28px' }}>
              {[
                { n: '01', title: 'Bilingual Metadata', body: 'Track title and artist bio filed in both English and Hindi/Punjabi transliteration. This ensures the song surfaces in both English-language searches ("british indian pop") and Hindi-language searches on JioSaavn ("नई हिंदी पॉप").' },
                { n: '02', title: 'Territory-Specific Pitching', body: 'Western Beats pitched to Spotify UK editorial (Brit-Asia) and JioSaavn editorial (New Indie Hindi) separately, with different pitching notes for each — emphasising her UK story for British playlists and her Hindi-English crossover for Indian playlists.' },
                { n: '03', title: 'Diaspora-First Social Strategy', body: 'Instagram Reels targeting the UK South Asian community drove Spotify UK streams. YouTube Shorts targeting India drove JioSaavn streams. Two separate funnels, same song.' },
              ].map(s => (
                <div key={s.n} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: 'rgba(10,100,195,0.3)', flexShrink: 0, lineHeight: 1 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px' }}>{s.title}</h3>
                    <p style={{ ...S.p, margin: 0 }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>Results at 90 Days</h2>
            <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', margin: '0 0 28px' }}>
              {[
                ['JioSaavn Editorial', 'Added to "Indie Hindi Hits" — 45K streams in first month'],
                ['Spotify UK', 'Added to "Brit-Asia" playlist — 28K UK streams'],
                ['Apple Music UK', '12K streams, appeared in UK South Asian genre charts'],
                ['Spotify India', '18K streams via Release Radar'],
                ['Total 90-Day Streams', '110,000+ across all platforms'],
              ].map(([k, v], i) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16, padding: '14px 24px', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: '#8899AA' }}>{k}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#E2E8F0' }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={S.quote}>"My mum called me from Chandigarh to say she found my song on JioSaavn. And the same week, a playlist blog in Birmingham wrote about me. That's everything." <br /><span style={{ fontSize: 14, color: '#5CB2DC', fontStyle: 'normal', fontWeight: 700 }}>— Priya</span></div>

            <h2 style={S.h2}>FAQ: Music Distribution UK to India</h2>
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                { q: 'Can I distribute to JioSaavn from the UK?', a: 'Yes. Western Beats distributes to JioSaavn from anywhere in the world — UK, USA, Canada, Australia, UAE. You submit once and your music appears on all platforms globally.' },
                { q: 'Do I need two separate distributors for UK and India?', a: 'No. Western Beats covers both markets in one submission — Spotify UK, Apple Music UK, JioSaavn, Gaana, and 150+ platforms. One submission, global reach.' },
                { q: 'How long does it take for music to appear on JioSaavn?', a: 'Typically 5–7 business days from submission approval. Spotify and Apple Music usually go live within 3–5 business days.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 10px' }}>{faq.q}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const, marginTop: 48 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Based outside India? Distribute to both markets for free.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Western Beats distributes to JioSaavn, Spotify UK, Apple Music UK and 150+ platforms — from anywhere in the world, at zero cost.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>

            <div style={{ marginTop: 48 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 20px' }}>More Resources for International Artists</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
                {[
                  { href: '/best-music-distributor-uk', label: 'Best Music Distributor for UK Artists 2026', tag: 'Guide' },
                  { href: '/resources/ebooks/music-distribution-nri-artists-guide', label: 'NRI Artist Playbook: UK, USA & Canada', tag: 'Free Ebook' },
                  { href: '/resources/research/indian-diaspora-music-market-2026', label: 'The $2.4B Indian Diaspora Music Market', tag: 'Research' },
                ].map(r => (
                  <Link key={r.href} href={r.href} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '18px 20px', textDecoration: 'none', color: '#fff', display: 'block' }}>
                    <span style={{ fontSize: 10, color: '#5CB2DC', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>{r.tag}</span>
                    <p style={{ fontSize: 14, fontWeight: 700, margin: '6px 0 0', lineHeight: 1.4 }}>{r.label}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  )
}
