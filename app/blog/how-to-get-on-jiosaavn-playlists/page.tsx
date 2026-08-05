import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'How to Get on JioSaavn Playlists 2026 — Complete Guide | Western Beats',
  description: 'Step-by-step guide to getting your music on JioSaavn editorial playlists in 2026. Learn how to pitch to JioSaavn India, get featured on Hindi, Punjabi and regional playlists.',
  keywords: ['how to get on JioSaavn playlists','JioSaavn editorial playlist','JioSaavn playlist submission','get music on JioSaavn India','JioSaavn playlist pitch','JioSaavn featured artists India','JioSaavn playlist curator'],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-to-get-on-jiosaavn-playlists' },
  openGraph: { title: 'How to Get on JioSaavn Playlists 2026 | Western Beats', description: 'The only guide to JioSaavn editorial playlist pitching for Indian artists.', url: 'https://www.westernbeats.com/blog/how-to-get-on-jiosaavn-playlists', siteName: 'Western Beats', type: 'article' },
}

const SCHEMA = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Get on JioSaavn Playlists 2026 — Complete Guide', description: 'Complete guide to getting your music on JioSaavn editorial and curated playlists in India.', author: { '@type': 'Organization', name: 'Western Beats' }, publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' }, url: 'https://www.westernbeats.com/blog/how-to-get-on-jiosaavn-playlists', datePublished: '2026-08-01' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'How do I get my music on JioSaavn playlists?', acceptedAnswer: { '@type': 'Answer', text: 'There are two paths: (1) pitch through your distributor — Western Beats has a direct relationship with JioSaavn\'s editorial team and can submit your track for playlist consideration. (2) Once you\'re on JioSaavn, claim your JioSaavn Artist page and use it to track performance and improve discoverability.' } },
    { '@type': 'Question', name: 'Does JioSaavn have an editorial playlist submission system like Spotify for Artists?', acceptedAnswer: { '@type': 'Answer', text: 'JioSaavn does not have a public self-serve pitching system like Spotify for Artists. Playlist pitching is done through distributors who have editorial relationships with JioSaavn. Western Beats pitches tracks to JioSaavn editorial on behalf of artists.' } },
    { '@type': 'Question', name: 'Which JioSaavn playlists get the most streams in India?', acceptedAnswer: { '@type': 'Answer', text: 'Top JioSaavn playlists by streams include: Trending Today (50M+ streams monthly), Hindi Indie Picks, Fresh Punjabi, Bollywood Workout, New This Week, and genre-specific featured playlists. The "Trending Today" playlist is the highest-reach placement available on the platform.' } },
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
  step: { background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px', marginBottom: 16, display: 'flex', gap: 20 },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 15, fontWeight: 800, textDecoration: 'none' },
}

export default function BlogPost2() {
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
              <span style={{ color: '#5CB2DC', fontSize: 13 }}>JioSaavn Playlists</span>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(10,100,195,0.1)', color: '#5CB2DC', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 6, marginBottom: 20 }}>JioSaavn · India · Exclusive Guide</span>
            <h1 style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>How to Get on JioSaavn Playlists 2026 — The Guide Nobody Else Covers</h1>
            <p style={{ ...S.p, fontSize: 18 }}>JioSaavn has 310 million users and India&apos;s most powerful editorial playlist system — but almost no guide exists on how to actually get on their playlists. This is that guide, written from direct distributor experience with JioSaavn&apos;s editorial team.</p>
          </div>
        </header>

        <article style={{ padding: '48px 24px 100px' }}>
          <div style={S.wrap}>

            <div style={S.tip}>
              <strong>Why this guide is different:</strong> Western Beats has a direct editorial relationship with JioSaavn — we pitch tracks on behalf of artists. Everything in this guide comes from that direct experience, not speculation.
            </div>

            <h2 style={S.h2}>Why JioSaavn Playlists Matter More Than Spotify in India</h2>
            <p style={S.p}>Spotify India has ~60 million users. JioSaavn has 310 million. For Hindi, Punjabi, Tamil, Telugu and Bhojpuri artists, JioSaavn editorial placement drives far more streams than Spotify editorial — because the audience is 5x larger and far more engaged with Indian-language content.</p>
            <p style={S.p}>A feature on JioSaavn&apos;s "Trending Today" playlist can generate 500,000–2,000,000 streams in a single week. That&apos;s the scale we&apos;re talking about.</p>

            <h2 style={S.h2}>How JioSaavn Editorial Works</h2>
            <p style={S.p}>Unlike Spotify, JioSaavn does <strong style={{ color: '#fff' }}>not</strong> have a public self-serve pitching system like Spotify for Artists. You cannot go to a dashboard and submit a pitch yourself. Editorial access happens in two ways:</p>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 28px' }}>
              {[
                { title: 'Through your distributor', color: '#34D399', body: 'Distributors with direct editorial relationships at JioSaavn can submit your track for playlist consideration. Western Beats pitches to JioSaavn editorial on behalf of every qualifying artist we work with. This is the primary route.' },
                { title: 'Through JioSaavn\'s label/artist portal', color: '#5CB2DC', body: 'If you have a verified JioSaavn Artist profile, you can sometimes reach JioSaavn\'s team directly via their artist support. However, editorial decisions are still made by their team — this route is slower and less reliable than distributor pitching.' },
              ].map(c => (
                <div key={c.title} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 8px', color: c.color }}>{c.title}</h3>
                  <p style={{ ...S.p, margin: 0, fontSize: 14 }}>{c.body}</p>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>What JioSaavn Editorial Looks For</h2>
            <p style={S.p}>Based on direct experience pitching hundreds of tracks to JioSaavn&apos;s team, here&apos;s what increases your chances of editorial consideration:</p>
            <ul style={{ paddingLeft: 24, margin: '0 0 28px' }}>
              {[
                'High-quality production — JioSaavn editorial rejects lo-fi or demo-quality tracks regardless of how good the song is.',
                'Professional artwork — 3000×3000px, no text-heavy designs, no blurry images. This affects whether they feature you on the home screen.',
                'Complete metadata — artist name consistent across platforms, correct genre tags, ISRC codes assigned.',
                'A strong hook in the first 30 seconds — JioSaavn data shows listeners skip within 30 seconds if not engaged.',
                'Contextual relevance — tracks timed to festivals (Holi, Diwali, Navratri), seasons (monsoon), or trending topics get prioritised.',
                'Existing audience — even a small existing JioSaavn following signals to editors that real listeners care about your music.',
              ].map(l => <li key={l} style={S.li}>{l}</li>)}
            </ul>

            <h2 style={S.h2}>Top JioSaavn Playlists to Target</h2>
            <div style={{ overflowX: 'auto', margin: '0 0 32px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    {['Playlist', 'Genre', 'Monthly Reach', 'Difficulty'].map(h => <th key={h} style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#8899AA', fontWeight: 700, fontSize: 12, textTransform: 'uppercase' as const, letterSpacing: 1 }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Trending Today', 'All', '50M+ streams', '🔴 Very Hard'],
                    ['New This Week', 'All', '20M+ streams', '🟡 Medium'],
                    ['Hindi Indie Picks', 'Hindi Indie', '8M+ streams', '🟢 Accessible'],
                    ['Fresh Punjabi', 'Punjabi', '15M+ streams', '🟡 Medium'],
                    ['Bollywood Workout', 'Bollywood', '12M+ streams', '🟡 Medium'],
                    ['Haryanvi Hits', 'Haryanvi', '5M+ streams', '🟢 Accessible'],
                    ['Tamil New Hits', 'Tamil', '10M+ streams', '🟡 Medium'],
                    ['Bhojpuri Superhits', 'Bhojpuri', '6M+ streams', '🟢 Accessible'],
                  ].map(([p, g, r, d], i) => (
                    <tr key={p} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                      <td style={{ padding: '14px 16px', color: '#E2E8F0', fontWeight: 700 }}>{p}</td>
                      <td style={{ padding: '14px 16px', color: '#8899AA' }}>{g}</td>
                      <td style={{ padding: '14px 16px', color: '#34D399', fontWeight: 700 }}>{r}</td>
                      <td style={{ padding: '14px 16px', color: '#E2E8F0' }}>{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={S.h2}>Step-by-Step: How to Get Pitched to JioSaavn Editorial</h2>
            {[
              { n: '01', title: 'Distribute via Western Beats (free)', body: 'Submit your track on Western Beats at least 2 weeks before your release date. Fill in every metadata field — genre, language, mood, artist description. Incomplete submissions cannot be pitched.' },
              { n: '02', title: 'Mark your track for editorial consideration', body: 'In your Western Beats submission, note in the "message" field that you\'re requesting editorial playlist consideration and briefly describe the track\'s context (festival timing, language, genre angle). This triggers our editorial team to review it.' },
              { n: '03', title: 'Ensure professional artwork and audio', body: 'Your audio must be WAV/FLAC, 44.1kHz, 16-bit minimum. Artwork must be 3000×3000px JPEG or PNG. Our team reviews these before submitting to JioSaavn. Tracks that don\'t meet quality standards are not pitched.' },
              { n: '04', title: 'Western Beats submits to JioSaavn editorial', body: 'Our team sends your track details, artwork, and release context to JioSaavn\'s editorial team. Decisions are made within 5–10 business days of your release date.' },
              { n: '05', title: 'Claim your JioSaavn Artist profile', body: 'After your track is live, claim your JioSaavn for Artists profile. This lets you see your stream data, follow counts, and city-by-city listener breakdown — data that helps you pitch the next release more effectively.' },
            ].map(s => (
              <div key={s.n} style={S.step}>
                <span style={{ fontSize: 32, fontWeight: 900, color: 'rgba(10,100,195,0.3)', flexShrink: 0, lineHeight: 1, fontFamily: 'monospace' }}>{s.n}</span>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px' }}>{s.title}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}

            <h2 style={S.h2}>FAQ: JioSaavn Playlists</h2>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 48px' }}>
              {[
                { q: 'How do I get my music on JioSaavn playlists?', a: 'Distribute through Western Beats and request editorial consideration. We have a direct relationship with JioSaavn\'s editorial team and pitch qualifying tracks ahead of release.' },
                { q: 'Does JioSaavn have a Spotify for Artists equivalent?', a: 'Not a public self-serve pitching system. Playlist pitching happens through distributors with editorial relationships. Once you\'re on JioSaavn, you can claim your Artist profile at artists.jiosaavn.com to see analytics.' },
                { q: 'Which JioSaavn playlists get the most streams?', a: '"Trending Today" is the highest-reach placement with 50M+ monthly streams. "New This Week," "Fresh Punjabi" and "Hindi Indie Picks" are the most accessible editorial targets for independent artists.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 10px' }}>{faq.q}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Get your music pitched to JioSaavn editorial — free.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Western Beats distributes to JioSaavn and pitches qualifying tracks to editorial playlists. Free forever.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
