import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'How to Get Your First 1,000 Streams on Spotify India 2026 | Western Beats',
  description: 'Proven step-by-step strategy for independent Indian artists to reach 1,000 streams on Spotify — pre-save campaigns, playlist pitching, social funnels and metadata tips.',
  keywords: ['how to get 1000 streams Spotify India','first 1000 streams Spotify India','Spotify streams India independent artist','grow Spotify India 2026','Spotify streams tips India','how to get more streams Spotify India'],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-to-get-first-1000-streams-spotify-india' },
  openGraph: { title: 'How to Get Your First 1,000 Streams on Spotify India 2026 | Western Beats', description: 'Step-by-step strategy for Indian artists to hit 1,000 Spotify streams.', url: 'https://www.westernbeats.com/blog/how-to-get-first-1000-streams-spotify-india', siteName: 'Western Beats', type: 'article' },
}

const SCHEMA = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Get Your First 1,000 Streams on Spotify India 2026', description: 'Proven step-by-step strategy for independent Indian artists to reach 1,000 Spotify streams.', author: { '@type': 'Organization', name: 'Western Beats' }, publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' }, url: 'https://www.westernbeats.com/blog/how-to-get-first-1000-streams-spotify-india', datePublished: '2026-08-01' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'How long does it take to get 1000 streams on Spotify India?', acceptedAnswer: { '@type': 'Answer', text: 'With the right strategy — pre-save campaign, Spotify for Artists editorial pitch, and social media promotion — most Indian artists can reach 1,000 streams within 2–4 weeks of release. Without a strategy, the same milestone can take months or never happen at all.' } },
    { '@type': 'Question', name: 'How much does 1000 streams on Spotify India pay?', acceptedAnswer: { '@type': 'Answer', text: 'At the current Spotify India premium rate of ₹0.09–0.12 per stream, 1,000 premium streams earns approximately ₹90–120. Free-tier streams pay ₹0.01–0.03, so 1,000 free-tier streams earns ₹10–30. Your actual payout depends on your listeners\' tier mix.' } },
  ]},
]

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 760, margin: '0 auto', padding: '0 24px' },
  h2: { fontSize: 24, fontWeight: 800, margin: '48px 0 16px', letterSpacing: '-0.01em' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.85, margin: '0 0 20px' },
  li: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.85, margin: '0 0 10px' },
  tip: { background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)', borderLeft: '4px solid #34D399', borderRadius: '0 12px 12px 0', padding: '16px 20px', margin: '24px 0', fontSize: 14, color: '#E2E8F0', lineHeight: 1.7 },
  step: { background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px', marginBottom: 16, display: 'flex', gap: 20 },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 15, fontWeight: 800, textDecoration: 'none' },
}

const TIMELINE = [
  { week: 'Week -3', label: '3 Weeks Before Release', tasks: ['Submit track to Western Beats for distribution', 'Set up Spotify for Artists profile', 'Create pre-save link (Toneden or Feature.fm)', 'Design pre-save graphic for Instagram'] },
  { week: 'Week -2', label: '2 Weeks Before Release', tasks: ['Pitch to Spotify India editorial via Spotify for Artists', 'Post pre-save link on Instagram Stories daily', 'Share pre-save in WhatsApp groups and Telegram channels', 'Contact 5–10 playlist curators on SubmitHub'] },
  { week: 'Week -1', label: '1 Week Before Release', tasks: ['Post teaser clips (15–30 sec) of the track on Reels', 'DM personal contacts with the pre-save link', 'Confirm editorial pitch submitted (check Spotify for Artists)', 'Prepare launch day post content'] },
  { week: 'Week 0', label: 'Release Day', tasks: ['Post the release on all platforms at 12am IST', 'Share on WhatsApp status, Instagram story, post and reel', 'Ask close artist friends to stream, save and share', 'Reply to every comment on your release posts'] },
  { week: 'Week +1', label: 'Week After Release', tasks: ['Track your save rate in Spotify for Artists (target 20%+)', 'Re-share on Reels with new content (behind the scenes, cover)', 'Post stream milestone updates to Instagram Story', 'Submit to additional playlist curators'] },
]

export default function First1000Streams() {
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
              <span style={{ color: '#5CB2DC', fontSize: 13 }}>First 1000 Streams</span>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(30,215,96,0.1)', color: '#1DB954', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 6, marginBottom: 20 }}>Strategy · Spotify · India</span>
            <h1 style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>How to Get Your First 1,000 Streams on Spotify India 2026</h1>
            <p style={{ ...S.p, fontSize: 18 }}>1,000 streams is where Spotify&apos;s algorithm starts paying real attention. Here&apos;s the exact 5-week playbook Indian independent artists use to hit that milestone on release week — not six months later.</p>
          </div>
        </header>

        <article style={{ padding: '48px 24px 100px' }}>
          <div style={S.wrap}>

            <h2 style={S.h2}>Why 1,000 Streams Is the Right First Goal</h2>
            <p style={S.p}>It&apos;s not about the money from 1,000 streams — at ₹90–120, that&apos;s not going to change your life. The real reason to target 1,000 streams in your first week is algorithmic: Spotify&apos;s Release Radar and Discover Weekly algorithms use first-week engagement as a signal of quality. A track that reaches 1,000 streams in week one is 3x more likely to appear in algorithmic playlists in week two and three.</p>

            <div style={S.tip}>
              <strong>The key metric isn't streams — it's save rate.</strong> If 200 out of 1,000 listeners save your track (20% save rate), Spotify's algorithm treats it as a high-quality signal and pushes it to more listeners. Save rate matters more than raw stream count.
            </div>

            <h2 style={S.h2}>The 5-Week Playbook</h2>
            <div style={{ display: 'grid', gap: 16, margin: '0 0 40px' }}>
              {TIMELINE.map(t => (
                <div key={t.week} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px' }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' as const, marginBottom: 16 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: '#0A64C3', background: 'rgba(10,100,195,0.1)', border: '1px solid rgba(10,100,195,0.2)', padding: '4px 10px', borderRadius: 20, letterSpacing: 1, textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}>{t.week}</span>
                    <h3 style={{ fontSize: 15, fontWeight: 800, margin: 0, color: '#fff' }}>{t.label}</h3>
                  </div>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    {t.tasks.map(task => <li key={task} style={{ ...S.li, fontSize: 14 }}>{task}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>The 5 Tactics That Actually Work in India</h2>
            {[
              { n: '01', title: 'WhatsApp is your biggest asset', body: 'Indian artists have an advantage Western artists don\'t: WhatsApp. A well-timed WhatsApp status and broadcast to your contacts can generate 200–500 streams in the first 24 hours. Send your pre-save link to every contact personally. Ask your family and friends to stream it from the app (not YouTube — Spotify streams only). This is the fastest path to your first 500 streams.' },
              { n: '02', title: 'Instagram Reels over static posts', body: 'A Reel of you performing or reacting to your own track generates 10x more streams than a static "my song is out" post. Use the track as the audio. Post 3–5 Reels in the first week — pre-release teaser, release day clip, acoustic version, behind-the-scenes, reaction to a comment.' },
              { n: '03', title: 'Spotify for Artists editorial pitch', body: 'Submit your pitch to Spotify India editorial at least 7 days before release. Even if you don\'t get placed, the pitch teaches Spotify\'s algorithm your genre and mood tags, which improves your algorithmic playlist chances.' },
              { n: '04', title: 'Cross-artist collaboration streams', body: 'Find 5–10 artists at your level. Agree to genuinely stream and save each other\'s music. This is legitimate audience-sharing — not fake streams. Real saves from real listeners, even if they\'re fellow artists, count toward your algorithmic ranking.' },
              { n: '05', title: 'JioSaavn in parallel', body: 'Don\'t just focus on Spotify. A track that reaches 1,000 Spotify streams will often have 3,000–5,000 JioSaavn streams at the same time if you distribute there too. Western Beats distributes to both simultaneously — at zero cost.' },
            ].map(s => (
              <div key={s.n} style={S.step}>
                <span style={{ fontSize: 32, fontWeight: 900, color: 'rgba(30,215,96,0.25)', flexShrink: 0, lineHeight: 1, fontFamily: 'monospace' }}>{s.n}</span>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px' }}>{s.title}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}

            <h2 style={S.h2}>FAQ</h2>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 48px' }}>
              {[
                { q: 'How long does it take to get 1000 streams on Spotify India?', a: 'With the right strategy — pre-save campaign, Spotify for Artists editorial pitch, and social promotion — most Indian artists reach 1,000 streams within 2–4 weeks of release. Without strategy, it can take months.' },
                { q: 'How much does 1000 streams on Spotify India pay?', a: 'At ₹0.09–0.12 per premium stream, 1,000 premium streams earns ₹90–120. Free-tier streams pay ₹0.01–0.03, so 1,000 free-tier streams earns ₹10–30. Your mix of premium vs free listeners determines your total.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 10px' }}>{faq.q}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Get your track on Spotify India — free.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Western Beats distributes to Spotify India, JioSaavn and 150+ platforms. No fee, no commission.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
