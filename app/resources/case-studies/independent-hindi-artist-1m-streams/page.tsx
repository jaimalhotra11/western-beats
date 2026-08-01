import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Case Study: 0 to 1M Streams — Hindi Artist Global Distribution | Western Beats',
  description: 'How an independent Delhi-based Hindi artist reached 1 million streams in 47 countries using Western Beats free music distribution — Spotify, Apple Music, JioSaavn.',
  keywords: ['music distribution case study India', 'Hindi artist Spotify success', 'independent artist 1 million streams', 'free music distribution India case study', 'music distribution Western Beats review'],
  alternates: { canonical: 'https://www.westernbeats.com/resources/case-studies/independent-hindi-artist-1m-streams' },
  openGraph: {
    title: 'Case Study: 0 to 1M Streams — Hindi Artist Global Distribution | Western Beats',
    description: 'How a Delhi-based indie artist went global with zero upfront cost using Western Beats.',
    url: 'https://www.westernbeats.com/resources/case-studies/independent-hindi-artist-1m-streams',
    siteName: 'Western Beats', type: 'article',
  },
}

const SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'From 0 to 1M Streams: How an Independent Hindi Artist Went Global',
    description: 'Case study of a Delhi-based independent Hindi artist who reached 1 million streams on Spotify and JioSaavn using Western Beats.',
    author: { '@type': 'Organization', name: 'Western Beats' },
    publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
    url: 'https://www.westernbeats.com/resources/case-studies/independent-hindi-artist-1m-streams',
    datePublished: '2026-01-15',
    dateModified: '2026-07-01',
    image: 'https://www.westernbeats.com/og-image.jpg',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How long did it take to reach 1 million streams?', acceptedAnswer: { '@type': 'Answer', text: 'The artist reached 1 million streams in approximately 6 months after distribution, driven by playlist placements on Spotify India and JioSaavn.' } },
      { '@type': 'Question', name: 'Which platforms drove the most streams?', acceptedAnswer: { '@type': 'Answer', text: 'JioSaavn drove 41% of total streams for Indian listeners, while Spotify India contributed 28%. International listeners came primarily via Spotify UK, Spotify USA and Apple Music.' } },
      { '@type': 'Question', name: 'How much did Western Beats cost?', acceptedAnswer: { '@type': 'Answer', text: 'Western Beats is completely free — no annual subscription, no per-release fee. The artist paid nothing to distribute across 150+ platforms globally.' } },
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

export default function CaseStudy1() {
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
            <span style={S.tag}>Case Study · 6 min read</span>
            <h1 style={S.h1}>From 0 to 1M Streams: How an Independent Hindi Artist Went Global</h1>
            <p style={{ ...S.p, fontSize: 18 }}>A Delhi-based singer-songwriter with no label, no manager and no budget for distribution fees went from zero streams to over 1 million across 47 countries — in six months. Here's exactly how they did it.</p>

            {/* Stats bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 16, marginTop: 40 }}>
              {[['1M+', 'Total Streams'], ['47', 'Countries Reached'], ['6 Months', 'To Milestone'], ['₹0', 'Distribution Cost']].map(([n, l]) => (
                <div key={l} style={S.stat}>
                  <p style={{ fontSize: 30, fontWeight: 900, color: '#0A64C3', margin: '0 0 4px' }}>{n}</p>
                  <p style={{ fontSize: 12, color: '#8899AA', margin: 0, textTransform: 'uppercase' as const, letterSpacing: 1, fontWeight: 600 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <article style={{ padding: '48px 24px 80px' }}>
          <div style={S.wrap}>

            <h2 style={S.h2}>The Artist</h2>
            <p style={S.p}>Rohan is an independent Hindi singer-songwriter based in South Delhi. Before Western Beats, he had been releasing music on SoundCloud for two years and performing at local open mics — but his recorded music wasn't on any streaming platform. He didn't know how to get an ISRC code, had never heard of metadata standards, and assumed music distribution cost thousands of rupees.</p>
            <p style={S.p}>He had exactly one track he believed in: a melancholic Hindi pop song with a hook strong enough to travel beyond its lyrics. What he needed was distribution. What he didn't have was budget.</p>

            <div style={S.quote}>"I thought music distribution meant hiring someone for ₹20,000 or paying DistroKid in dollars every year. When I found Western Beats was free — actually free, not 'free trial' — I didn't believe it at first." <br /><span style={{ fontSize: 14, color: '#5CB2DC', fontStyle: 'normal', fontWeight: 700 }}>— Rohan, Delhi-based artist</span></div>

            <h2 style={S.h2}>The Challenge</h2>
            <p style={S.p}>Independent artists in India face a specific set of obstacles that their counterparts in the UK or USA don't encounter in the same way:</p>
            <ul style={{ paddingLeft: 24, margin: '0 0 20px' }}>
              {[
                'Most global distributors charge in USD — which becomes ₹8,000–₹15,000/year at current rates',
                'Indian streaming platforms like JioSaavn and Gaana require separate relationships most global distributors don\'t have',
                'Artists often don\'t understand how to optimise metadata for algorithmic discovery',
                'International audiences for Hindi music exist (diaspora in UK, USA, Canada, UAE) but are hard to reach without being on the right platforms',
              ].map(t => <li key={t} style={{ ...S.p, margin: '0 0 10px' }}>{t}</li>)}
            </ul>
            <p style={S.p}>Rohan faced all four. His answer was Western Beats: a distributor built for exactly this gap — free for Indian artists, with direct access to JioSaavn, Spotify, Apple Music, Amazon Music and 150+ other platforms.</p>

            <h2 style={S.h2}>The Strategy</h2>
            <p style={S.p}>Rather than releasing the track immediately, Rohan worked with the Western Beats team on three things before the release date:</p>

            <div style={{ display: 'grid', gap: 16, margin: '0 0 28px' }}>
              {[
                { n: '01', title: 'Metadata Optimisation', body: 'Genre tagged as "Hindi Pop" with secondary tag "Indie Hindi." Mood keywords: melancholic, emotional, heartbreak. These tags determine which Spotify and JioSaavn algorithmic playlists see the track.' },
                { n: '02', title: 'Release Date Timing', body: 'Released on a Friday (global standard) with a 3-week pre-save campaign on Spotify. Pre-saves signal to Spotify\'s algorithm that there\'s existing demand.' },
                { n: '03', title: 'Platform-Specific Artwork', body: 'Square 3000×3000px artwork optimised for both the JioSaavn card format and the Spotify mobile player. Simple, high-contrast design that works at 40px thumbnail size.' },
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

            <h2 style={S.h2}>The Results</h2>
            <p style={S.p}>Within 8 weeks of release, the track was added to three JioSaavn editorial playlists: "Hindi Indie Picks," "New Bollywood Vibes," and "Late Night Hindi." That alone drove 280,000 streams in the first two months.</p>
            <p style={S.p}>Spotify's algorithm picked it up via the Release Radar and Discover Weekly feeds of listeners who had saved similar tracks. By month three, it had been added to six user-created playlists with a combined following of 420,000.</p>

            <div style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, overflow: 'hidden', margin: '28px 0' }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800 }}>Stream Breakdown by Platform</h3>
              </div>
              {[
                ['JioSaavn (India)', '41%', '410,000+', '#34D399'],
                ['Spotify India', '28%', '280,000+', '#1DB954'],
                ['Spotify UK / USA / Canada', '14%', '140,000+', '#1DB954'],
                ['Apple Music', '9%', '90,000+', '#FC3C44'],
                ['YouTube Music', '5%', '50,000+', '#FF0000'],
                ['Amazon & Others', '3%', '30,000+', '#FF9900'],
              ].map(([plat, pct, num, col]) => (
                <div key={plat} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 16, padding: '14px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, color: '#E2E8F0' }}>{plat}</span>
                  <div style={{ width: 80, height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3 }}>
                    <div style={{ width: pct, height: '100%', background: col, borderRadius: 3 }} />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#E2E8F0', textAlign: 'right' as const }}>{num}</span>
                </div>
              ))}
            </div>

            <p style={S.p}>The diaspora angle was particularly striking: 14% of streams came from Spotify UK, USA and Canada — representing the South Asian diaspora audience. This validated Western Beats' core thesis: Indian artists have global audiences waiting for them, they just need to be on the right platforms.</p>

            <div style={S.quote}>"I never expected UK listeners. But apparently there are thousands of people in London and Toronto listening to Hindi indie music. Western Beats put me in front of them." <br /><span style={{ fontSize: 14, color: '#5CB2DC', fontStyle: 'normal', fontWeight: 700 }}>— Rohan</span></div>

            <h2 style={S.h2}>The Royalties</h2>
            <p style={S.p}>At 1 million streams across platforms, Rohan earned approximately ₹35,000–₹45,000 in royalties (exact amount varies by platform and territory). Every rupee went directly to him — Western Beats charges no commission and no annual fee.</p>
            <p style={S.p}>For comparison: a label deal would typically pay 15–20% of net royalties, and a DistroKid subscription (the most popular international alternative) would have cost him $22.99/year (~₹1,900). Western Beats cost him nothing.</p>

            <h2 style={S.h2}>Key Takeaways</h2>
            <ul style={{ paddingLeft: 24, margin: '0 0 28px' }}>
              {[
                'Metadata and tags matter as much as the music — they determine which editorial and algorithmic playlists consider you',
                'JioSaavn editorial playlists are among the highest-value placement opportunities for Hindi artists — distributors without JioSaavn access are leaving streams on the table',
                'The diaspora audience (UK, USA, Canada, UAE) is real and reachable — global distribution is not optional for Indian artists',
                'Free distribution removes the biggest barrier for independent artists: the upfront cost',
              ].map(t => <li key={t} style={{ ...S.p, margin: '0 0 10px' }}>{t}</li>)}
            </ul>

            <h2 style={S.h2}>Frequently Asked Questions</h2>
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                { q: 'How long did it take to reach 1 million streams?', a: 'Six months from the release date, with the bulk of growth happening in months two and three after editorial playlist placements on JioSaavn.' },
                { q: 'Which platforms drove the most streams?', a: 'JioSaavn drove 41% of total streams, followed by Spotify India at 28%. The diaspora audience contributed 14% from Spotify in UK, USA and Canada.' },
                { q: 'How much did Western Beats cost?', a: 'Zero — completely free. No annual subscription, no per-release fee, no commission on royalties.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 10px' }}>{faq.q}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const, marginTop: 48 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Ready to distribute your music?</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Join 10,000+ artists on Western Beats. Free forever — no annual fee, no commission.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>

            {/* Related */}
            <div style={{ marginTop: 48 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 20px' }}>Related Resources</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
                {[
                  { href: '/resources/case-studies/british-indian-artist-dual-market', label: 'Case Study: British Indian Artist — Dual Market Strategy', tag: 'Case Study' },
                  { href: '/resources/research/state-of-indian-music-streaming-2026', label: 'State of Indian Music Streaming 2026', tag: 'Research' },
                  { href: '/resources/ebooks/complete-guide-music-distribution-india-2026', label: 'Complete Guide to Music Distribution India 2026', tag: 'Free Ebook' },
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
