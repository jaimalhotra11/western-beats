import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'How to Get on Spotify Playlists India 2026 — Complete Guide | Western Beats',
  description: 'Step-by-step guide to getting your music on Spotify playlists in India — editorial, algorithmic and user playlists. Pitch to Spotify India editorial, Release Radar, Discover Weekly and more.',
  keywords: ['how to get on Spotify playlists India','Spotify playlist India 2026','Spotify editorial playlist India','how to pitch Spotify India','Discover Weekly India','Release Radar India','Spotify playlist submission India'],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-to-get-on-spotify-playlists-india' },
  openGraph: { title: 'How to Get on Spotify Playlists India 2026 | Western Beats', description: 'Complete guide to editorial, algorithmic and curator playlists on Spotify India.', url: 'https://www.westernbeats.com/blog/how-to-get-on-spotify-playlists-india', siteName: 'Western Beats', type: 'article' },
  robots: { index: true, follow: true },
}

const SCHEMA = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Get on Spotify Playlists India 2026 — Complete Guide', description: 'Step-by-step guide to getting your music on Spotify editorial, algorithmic and user playlists in India.', author: { '@type': 'Organization', name: 'Western Beats' }, publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' }, url: 'https://www.westernbeats.com/blog/how-to-get-on-spotify-playlists-india', datePublished: '2026-08-01', dateModified: '2026-08-01' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'How do I submit my music to Spotify editorial playlists in India?', acceptedAnswer: { '@type': 'Answer', text: 'Use Spotify for Artists to pitch your unreleased track at least 7 days before release. Fill in all metadata fields — mood, genre, instruments, and a description. Spotify India editorial considers pitches for playlists like Bollywood Butter, Hindi Indie, and New Music Friday India.' } },
    { '@type': 'Question', name: 'What is the difference between editorial and algorithmic Spotify playlists?', acceptedAnswer: { '@type': 'Answer', text: 'Editorial playlists (like New Music Friday India, Bollywood Butter) are curated by Spotify\'s editorial team and require a pitch via Spotify for Artists. Algorithmic playlists (Release Radar, Discover Weekly, Daily Mix) are generated automatically based on listener data — you cannot pitch to them directly, but good metadata and engagement improve your chances.' } },
    { '@type': 'Question', name: 'How long does it take to get on a Spotify playlist?', acceptedAnswer: { '@type': 'Answer', text: 'Editorial pitches are reviewed before release — pitch at least 7 days early. Algorithmic placement happens within weeks of release based on streaming data. User-curated playlist placements depend on individual curators and can happen at any time.' } },
  ]},
]

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 760, margin: '0 auto', padding: '0 24px' },
  h2: { fontSize: 24, fontWeight: 800, margin: '48px 0 16px', letterSpacing: '-0.01em' },
  h3: { fontSize: 18, fontWeight: 800, margin: '32px 0 12px' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.85, margin: '0 0 20px' },
  li: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.85, margin: '0 0 10px' },
  tip: { background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', borderLeft: '4px solid #34D399', borderRadius: '0 12px 12px 0', padding: '16px 20px', margin: '24px 0', fontSize: 14, color: '#E2E8F0', lineHeight: 1.7 },
  warn: { background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderLeft: '4px solid #F59E0B', borderRadius: '0 12px 12px 0', padding: '16px 20px', margin: '24px 0', fontSize: 14, color: '#E2E8F0', lineHeight: 1.7 },
  step: { background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px', marginBottom: 16, display: 'flex', gap: 20 },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 15, fontWeight: 800, textDecoration: 'none' },
}

export default function BlogPost() {
  return (
    <>
      {SCHEMA.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <div style={S.page}>
        <Nav />
        <header style={{ background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '100px 24px 60px' }}>
          <div style={S.wrap}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' as const }}>
              <Link href="/blog" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Blog</Link>
              <span style={{ color: '#4A5568' }}>/</span>
              <span style={{ color: '#5CB2DC', fontSize: 13 }}>Spotify Playlists India</span>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(30,215,96,0.1)', color: '#1DB954', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 6, marginBottom: 20 }}>Spotify · Playlists · India</span>
            <h1 style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>How to Get on Spotify Playlists India 2026 — Complete Guide</h1>
            <p style={{ ...S.p, fontSize: 18 }}>Spotify playlists are the single fastest way to grow your streams in India — but most artists don't know how editorial pitching works, what algorithmic playlists need, or how to approach curators. This guide covers all three.</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const, marginTop: 24 }}>
              {[['📅', 'August 2026'], ['⏱️', '9 min read'], ['🎯', 'All artists']].map(([icon, label]) => (
                <span key={label} style={{ fontSize: 13, color: '#4A5568', display: 'flex', alignItems: 'center', gap: 6 }}>{icon} {label}</span>
              ))}
            </div>
          </div>
        </header>

        <article style={{ padding: '48px 24px 100px' }}>
          <div style={S.wrap}>

            <h2 style={S.h2}>The 3 Types of Spotify Playlists</h2>
            <p style={S.p}>Before you pitch, you need to understand what you're pitching to. Spotify playlists in India fall into three categories — and each requires a completely different strategy.</p>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 32px' }}>
              {[
                { type: '1. Editorial Playlists', color: '#1DB954', desc: 'Curated by Spotify\'s human editorial team. Examples in India: New Music Friday India, Bollywood Butter, Hindi Indie, Punjabi 101, Tamil Hits. You can pitch directly via Spotify for Artists — but only for unreleased tracks.' },
                { type: '2. Algorithmic Playlists', color: '#5CB2DC', desc: 'Generated automatically by Spotify\'s algorithm based on listener behaviour. The big ones: Release Radar, Discover Weekly, Daily Mix. You cannot pitch to these — but good metadata and early engagement drive placement.' },
                { type: '3. User-Curated Playlists', color: '#A78BFA', desc: 'Created by individual users and playlist curators with large followings. These are found through SubmitHub, PlaylistPush, or direct outreach. They don\'t have the same reach as editorial but are easier to get onto.' },
              ].map(c => (
                <div key={c.type} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 8px', color: c.color }}>{c.type}</h3>
                  <p style={{ ...S.p, margin: 0, fontSize: 14 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>Part 1: Pitching to Spotify Editorial India</h2>
            <p style={S.p}>Spotify's editorial team in India is small but actively looking for new Indian music. Here's the exact process.</p>

            {[
              { n: '01', title: 'Distribute your track (unreleased)', body: 'You must distribute through a distributor before you can pitch. The track needs to be in Spotify\'s system but not yet released. Submit via Western Beats with a release date at least 7 days away. This gives you the pitching window.' },
              { n: '02', title: 'Open Spotify for Artists and find your unreleased track', body: 'Log in at artists.spotify.com. Go to Music → Upcoming. Your unreleased track should appear there within 24–48 hours of distribution submission. Click "Pitch a song" next to it.' },
              { n: '03', title: 'Fill in every single metadata field', body: 'This is where most artists fail. Spotify\'s editorial team uses your answers to determine which playlists to consider. Fill in: genre (be specific — "Hindi Indie" not just "Pop"), mood (up to 5), instruments used, city you\'re recording in, and a 500-character pitch description.' },
              { n: '04', title: 'Write a pitch that tells a story', body: 'Don\'t just describe the sound. Tell the editor WHY this track matters right now. "This is a Hindi indie ballad about long-distance love — written during a 2-year separation from family, it captures what 40 million NRI Indians feel every day." Editors are human — give them a reason to care.' },
              { n: '05', title: 'Submit at least 7 days before release', body: 'The window closes on your release date. Pitch early — 2–3 weeks before release is ideal. Late pitches are rarely considered. Set a reminder when you submit your track for distribution.' },
            ].map(s => (
              <div key={s.n} style={S.step}>
                <span style={{ fontSize: 32, fontWeight: 900, color: 'rgba(30,215,96,0.25)', flexShrink: 0, lineHeight: 1, fontFamily: 'monospace' }}>{s.n}</span>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px' }}>{s.title}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}

            <div style={S.tip}>
              <strong>🟢 Key insight:</strong> Spotify India editorial looks for tracks with a strong "context" — a story that fits a specific playlist mood or moment. "Songs for late-night drives," "Monsoon feelings," "Office stress relief" — these are the angles that land on editorial playlists. Generic pitches ("great song, check it out") are ignored.
            </div>

            <h2 style={S.h2}>Part 2: Getting on Algorithmic Playlists</h2>
            <p style={S.p}>Release Radar and Discover Weekly are where the real scale happens. They each reach tens of millions of Indian listeners. You can't pitch to them — but you can engineer the conditions that make the algorithm include you.</p>

            <h3 style={S.h3}>What drives algorithmic placement</h3>
            <ul style={{ paddingLeft: 24, margin: '0 0 24px' }}>
              {[
                'Save rate — how many listeners who hear your track save it. Aim for 20%+ in the first week.',
                'Stream completion — listeners who hear the whole track signal quality to the algorithm.',
                'Playlist adds — users adding your track to their own playlists sends strong signals.',
                'Pre-saves — Spotify registers pre-save intent before release and uses it to populate Release Radar.',
                'Follower engagement — listeners who follow your artist profile get your music in Release Radar automatically.',
              ].map(l => <li key={l} style={S.li}>{l}</li>)}
            </ul>

            <div style={S.warn}>
              <strong>⚠️ Do NOT:</strong> Use stream bots, fake playlist services, or pay for streams. Spotify's fraud detection is sophisticated and will remove your music permanently. This includes many "playlist promotion" services sold on Instagram.
            </div>

            <h3 style={S.h3}>How to build a pre-save campaign</h3>
            <p style={S.p}>Run a pre-save campaign 2–3 weeks before release. Use free tools like Toneden or Feature.fm to create a pre-save link. Share it on Instagram, WhatsApp groups, and YouTube community posts. Every pre-save converts to an automatic Release Radar add on release day.</p>

            <h2 style={S.h2}>Part 3: User-Curated Playlists</h2>
            <p style={S.p}>India has thousands of high-follower playlist curators — mostly running Hindi, Punjabi, Tamil and Indie playlists. These are reachable through direct outreach.</p>
            <ul style={{ paddingLeft: 24, margin: '0 0 24px' }}>
              {[
                'Find curators via SubmitHub.com — filter for Hindi, Indian, or your specific genre.',
                'DM curators on Instagram — many Indian playlist curators have public Instagram accounts.',
                'Offer a genuine connection — follow their playlist, leave a comment, then reach out.',
                'Keep your pitch short: track name, genre, 2-line description, Spotify link. That\'s it.',
                'Don\'t pay for fake placement — always check that the playlist has real listeners (Spotify Charts or Chartmetric).',
              ].map(l => <li key={l} style={S.li}>{l}</li>)}
            </ul>

            <h2 style={S.h2}>Top Spotify Playlists in India to Target</h2>
            <div style={{ overflowX: 'auto', margin: '0 0 32px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    {['Playlist', 'Type', 'Genre', 'Followers'].map(h => <th key={h} style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#8899AA', fontWeight: 700, fontSize: 12, textTransform: 'uppercase' as const, letterSpacing: 1 }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['New Music Friday India', 'Editorial', 'All genres', '2M+'],
                    ['Bollywood Butter', 'Editorial', 'Bollywood / Hindi Pop', '5M+'],
                    ['Hindi Indie', 'Editorial', 'Hindi Indie', '800K+'],
                    ['Punjabi 101', 'Editorial', 'Punjabi', '3M+'],
                    ['Tamil Hits', 'Editorial', 'Tamil', '4M+'],
                    ['Discover Weekly', 'Algorithmic', 'All (personalised)', '100M+ users'],
                    ['Release Radar', 'Algorithmic', 'All (from artists you follow)', '80M+ users'],
                  ].map(([p, t, g, f], i) => (
                    <tr key={p} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                      <td style={{ padding: '14px 16px', color: '#E2E8F0', fontWeight: 700 }}>{p}</td>
                      <td style={{ padding: '14px 16px', color: '#8899AA' }}>{t}</td>
                      <td style={{ padding: '14px 16px', color: '#8899AA' }}>{g}</td>
                      <td style={{ padding: '14px 16px', color: '#34D399', fontWeight: 700 }}>{f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={S.h2}>FAQ: Spotify Playlists India</h2>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 48px' }}>
              {[
                { q: 'How do I submit my music to Spotify editorial playlists in India?', a: 'Via Spotify for Artists — go to Music → Upcoming, click "Pitch a song" on your unreleased track, and fill in all metadata fields. Submit at least 7 days before your release date.' },
                { q: 'What is the difference between editorial and algorithmic playlists?', a: 'Editorial playlists are curated by Spotify\'s human team (pitch required). Algorithmic playlists like Release Radar and Discover Weekly are generated automatically based on your listeners\' behaviour — no pitch needed, but good metadata and engagement drive inclusion.' },
                { q: 'How long does it take to get on a Spotify playlist?', a: 'Editorial decisions are made before your release date. Algorithmic placement typically happens within 1–4 weeks of release. User-curated placements depend on curators and can happen any time.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 10px' }}>{faq.q}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Distribute your track and start pitching — free.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Western Beats distributes your music to Spotify India and 150+ platforms. Free forever — no annual fee, no commission.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
