import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Case Study: Punjabi Artist Canada — Distributing to India, UK & North America | Western Beats',
  description: 'How a Toronto-based Punjabi artist used Western Beats to distribute to Canadian Spotify, UK Apple Music and Indian JioSaavn simultaneously — without paying DistroKid\'s annual fee.',
  keywords: ['Punjabi artist Canada music distribution', 'distribute Punjabi music from Canada', 'JioSaavn distribution Canada', 'Spotify Canada Indian artist', 'NRI Punjabi music distribution'],
  alternates: { canonical: 'https://www.westernbeats.com/resources/case-studies/punjabi-artist-canada-diaspora' },
  openGraph: {
    title: 'Case Study: Punjabi Artist Canada — 3 Countries, 1 Submission | Western Beats',
    description: 'How a Toronto-based Punjabi artist reached India, UK and North America simultaneously with free music distribution.',
    url: 'https://www.westernbeats.com/resources/case-studies/punjabi-artist-canada-diaspora',
    siteName: 'Western Beats', type: 'article',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Punjabi Artist in Canada: Reaching India, UK and North America Simultaneously',
  description: 'Case study of a Toronto-based Punjabi artist who distributed music to Canadian Spotify, UK Apple Music and JioSaavn India using Western Beats — for free.',
  author: { '@type': 'Organization', name: 'Western Beats' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  url: 'https://www.westernbeats.com/resources/case-studies/punjabi-artist-canada-diaspora',
  datePublished: '2026-03-01',
}

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

export default function CaseStudy3() {
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
              <Link href="/resources#case-studies" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Case Studies</Link>
            </div>
            <span style={S.tag}>Case Study · 5 min read · 🇨🇦+🌏</span>
            <h1 style={S.h1}>Punjabi Artist in Canada: Reaching India, UK and North America Simultaneously</h1>
            <p style={{ ...S.p, fontSize: 18 }}>Harpreet moved from Ludhiana to Toronto on a student visa. Three years later, his Punjabi pop track is on JioSaavn in India, Apple Music in the UK, and Spotify in Canada — all from one free submission on Western Beats.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 16, marginTop: 40 }}>
              {[['3 Countries', 'Simultaneously'], ['150+', 'Platforms'], ['$0 CAD', 'Annual Fee'], ['100%', 'Royalties']].map(([n, l]) => (
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
            <h2 style={S.h2}>The Challenge for NRI Artists in Canada</h2>
            <p style={S.p}>Canada has one of the largest South Asian diaspora populations in the world — over 1.8 million people of Indian origin, concentrated in Toronto, Vancouver, and Brampton. For a Punjabi artist in Toronto, this is both the home audience and the launchpad for India.</p>
            <p style={S.p}>But the platforms are fragmented. The Punjabi diaspora in Canada streams on Spotify Canada. Family back in India is on JioSaavn. UK cousins are on Apple Music. A DistroKid subscription covers Spotify Canada — but JioSaavn requires a separate Indian distributor relationship that most western distributors don't have.</p>

            <div style={S.quote}>"DistroKid doesn't have JioSaavn. TuneCore didn't have it either. I was paying $22 USD per year and my dad still couldn't find my music on his phone in Ludhiana." <br /><span style={{ fontSize: 14, color: '#5CB2DC', fontStyle: 'normal', fontWeight: 700 }}>— Harpreet, Toronto-based Punjabi artist</span></div>

            <h2 style={S.h2}>The Western Beats Solution</h2>
            <p style={S.p}>Harpreet submitted his track on Western Beats with a single form — no annual subscription, no USD payment, no secondary Indian distributor needed. Western Beats pushed the track to:</p>
            <ul style={{ paddingLeft: 24, margin: '0 0 20px' }}>
              {['Spotify Canada, USA, UK, India', 'Apple Music (all territories)', 'JioSaavn', 'Gaana', 'Wynk Music', 'Amazon Music (Canada, India, UK)', 'YouTube Music', '140+ additional platforms'].map(p => <li key={p} style={{ ...S.p, margin: '0 0 8px', fontSize: 15 }}>{p}</li>)}
            </ul>

            <h2 style={S.h2}>What Made the Difference</h2>
            <div style={{ display: 'grid', gap: 16, margin: '0 0 28px' }}>
              {[
                { title: 'JioSaavn Editorial Access', body: 'Western Beats\' direct relationship with JioSaavn meant the track was considered for editorial playlists — something no western distributor offers. It was added to "Punjabi Pop Hits" and "Fresh Punjabi" within 3 weeks of release.' },
                { title: 'Canadian Spotify Playlist Pitching', body: 'Western Beats also pitched to Spotify Canada editorial with a focus on the Punjabi-Canadian diaspora angle — "Desi Toronto" playlists that Spotify has been growing. The track landed on two.' },
                { title: 'ISRC + Metadata Compliance', body: 'International Standard Recording Codes (ISRC) were assigned automatically. Metadata was filed in both English and Punjabi (Gurmukhi script), improving discoverability in India.' },
              ].map(s => (
                <div key={s.title} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px' }}>{s.title}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>Results</h2>
            <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', margin: '0 0 28px' }}>
              {[['JioSaavn (India)', '62,000 streams — family found it'], ['Spotify Canada', '38,000 streams — local diaspora'], ['Apple Music UK', '19,000 streams'], ['Spotify India', '14,000 streams'], ['Gaana + Wynk', '9,000 streams combined'], ['Total', '142,000+ in 90 days']].map(([k, v], i) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16, padding: '14px 24px', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <span style={{ fontSize: 13, color: '#8899AA' }}>{k}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#E2E8F0' }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={S.quote}>"My dad called me from Ludhiana. He said 'puttar, teri song JioSaavn te aa gayi' — son, your song came on JioSaavn. That was worth more than any stream count." <br /><span style={{ fontSize: 14, color: '#5CB2DC', fontStyle: 'normal', fontWeight: 700 }}>— Harpreet</span></div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const, marginTop: 48 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Distribute from anywhere in the world — free.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>No annual fee. No commission. JioSaavn, Spotify, Apple Music and 150+ platforms — one submission.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  )
}
