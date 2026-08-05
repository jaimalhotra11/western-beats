import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Music Publishing India 2026 — Complete Guide for Independent Artists | Western Beats',
  description: 'What is music publishing in India? How do royalties work, what is a publishing deal, how do you register with IPRS, and how do independent artists collect publishing royalties in India.',
  keywords: ['music publishing India','music publishing royalties India','IPRS registration India','how to collect publishing royalties India','music publishing deal India','what is music publishing','performance royalties India','mechanical royalties India'],
  alternates: { canonical: 'https://www.westernbeats.com/blog/music-publishing-india-guide' },
  openGraph: { title: 'Music Publishing India 2026 — Complete Guide | Western Beats', description: 'Everything Indian artists need to know about music publishing and collecting royalties.', url: 'https://www.westernbeats.com/blog/music-publishing-india-guide', siteName: 'Western Beats', type: 'article' },
}

const SCHEMA = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Music Publishing India 2026 — Complete Guide for Independent Artists', description: 'Complete guide to music publishing in India — IPRS, publishing royalties, performance rights and how independent artists can collect what they\'re owed.', author: { '@type': 'Organization', name: 'Western Beats' }, publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' }, url: 'https://www.westernbeats.com/blog/music-publishing-india-guide', datePublished: '2026-08-05' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'What is music publishing in India?', acceptedAnswer: { '@type': 'Answer', text: 'Music publishing in India refers to the management and monetisation of a song\'s composition rights — as distinct from the master recording rights. When a song is played on radio, TV, streaming platforms, or in a public place, the songwriter and music publisher earn publishing royalties. In India, these are collected by IPRS (Indian Performing Right Society).' } },
    { '@type': 'Question', name: 'How do I register with IPRS in India?', acceptedAnswer: { '@type': 'Answer', text: 'Apply at iprs.org. You\'ll need: proof of identity (Aadhaar/PAN), bank account details, and a list of your original compositions. IPRS membership is open to composers, lyricists and music publishers. Registration is free for individual artists.' } },
    { '@type': 'Question', name: 'Do I need a music publisher in India?', acceptedAnswer: { '@type': 'Answer', text: 'No — as an independent artist in India, you can retain your own publishing rights and collect directly from IPRS. A publishing deal makes sense only when a publisher offers significant advances, sync licensing relationships, or international collection services that you cannot access yourself.' } },
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

export default function MusicPublishingIndia() {
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
              <span style={{ color: '#5CB2DC', fontSize: 13 }}>Music Publishing India</span>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(167,139,250,0.1)', color: '#A78BFA', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 6, marginBottom: 20 }}>Publishing · Rights · IPRS</span>
            <h1 style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Music Publishing India 2026 — Complete Guide for Independent Artists</h1>
            <p style={{ ...S.p, fontSize: 18 }}>Most Indian artists distribute their music and collect streaming royalties — but miss an entirely separate royalty stream from publishing rights. This guide explains what music publishing is in India, how to register with IPRS, and how to collect every rupee you&apos;re owed.</p>
          </div>
        </header>

        <article style={{ padding: '48px 24px 100px' }}>
          <div style={S.wrap}>

            <h2 style={S.h2}>What Is Music Publishing?</h2>
            <p style={S.p}>Every song has two separate sets of rights:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16, margin: '0 0 28px' }}>
              {[
                { title: 'Master Rights (Recording)', color: '#5CB2DC', body: 'The rights to the specific recorded version of a song. When someone streams your track on Spotify or JioSaavn, the streaming royalty pays the master rights holder — usually the artist or label who paid for the recording.' },
                { title: 'Publishing Rights (Composition)', color: '#A78BFA', body: 'The rights to the underlying song — the melody, lyrics and chord structure. When a song is played on radio, TV, in a restaurant, or licensed for a film, the publishing royalty pays the songwriter and their publisher. In India, this is collected via IPRS.' },
              ].map(c => (
                <div key={c.title} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 8px', color: c.color }}>{c.title}</h3>
                  <p style={{ ...S.p, margin: 0, fontSize: 14 }}>{c.body}</p>
                </div>
              ))}
            </div>
            <p style={S.p}>An independent Indian artist who writes their own songs owns <strong style={{ color: '#fff' }}>both</strong> sets of rights. Most artists collect their master royalties through a distributor like Western Beats — but fail to register for and collect their publishing royalties from IPRS. This is unclaimed money.</p>

            <h2 style={S.h2}>Types of Publishing Royalties in India</h2>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 28px' }}>
              {[
                { type: 'Performance Royalties', who: 'Collected by IPRS', desc: 'Paid when your song is performed or broadcast publicly — on radio (All India Radio, private FM), TV channels, streaming platforms, in hotels, restaurants, gyms, and at live events. IPRS collects these from broadcasters and venues and distributes them to registered songwriters.' },
                { type: 'Mechanical Royalties', who: 'Paid per stream/copy', desc: 'Paid for each reproduction of your composition — when someone streams it on Spotify/JioSaavn or downloads it. In India, streaming platforms are increasingly paying mechanicals alongside performance royalties through IPRS agreements.' },
                { type: 'Sync Licensing Royalties', who: 'Direct licensing deal', desc: 'Paid when your song is licensed for use in a film, TV show, advertisement, YouTube video or podcast. You (or a publisher acting on your behalf) negotiate sync licensing directly. This can be the most lucrative single income source.' },
                { type: 'Print Royalties', who: 'Rare in India', desc: 'Paid when your song is printed in sheet music, lyric books, or educational materials. Small revenue stream in India but worth tracking.' },
              ].map(r => (
                <div key={r.type} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap' as const, gap: 8 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 800, margin: 0 }}>{r.type}</h3>
                    <span style={{ fontSize: 11, color: '#8899AA', background: 'rgba(255,255,255,0.05)', padding: '2px 10px', borderRadius: 10 }}>{r.who}</span>
                  </div>
                  <p style={{ ...S.p, margin: 0, fontSize: 14 }}>{r.desc}</p>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>IPRS — How to Register and Collect</h2>
            <p style={S.p}>The Indian Performing Right Society (IPRS) is India&apos;s performing rights organisation — equivalent to PRS (UK), ASCAP/BMI (USA), or SOCAN (Canada). It collects performance and mechanical royalties from broadcasters, streaming platforms, and public venues in India and distributes them to registered composers and lyricists.</p>

            <div style={S.tip}>
              <strong>🟢 Important:</strong> IPRS membership is mandatory to receive Indian performance royalties. If you&apos;re not registered, IPRS cannot pay you — even if they collect money owed to you. Register before your next release.
            </div>

            <h3 style={S.h3}>How to Register with IPRS</h3>
            {[
              { n: '01', title: 'Go to iprs.org and create an account', body: 'Visit the IPRS member portal. Select "Composer/Lyricist" as your membership type. Individual artists register as Ordinary Members.' },
              { n: '02', title: 'Gather required documents', body: 'You\'ll need: PAN card or Aadhaar card (identity proof), a cancelled cheque (for bank account verification), a photograph, and a list of your original works (song titles, co-writer names if any).' },
              { n: '03', title: 'Register your works', body: 'After membership approval, log in and register every song you\'ve written. Include co-writers and their percentage split. IPRS tracks royalties per registered work — unregistered songs cannot be paid out.' },
              { n: '04', title: 'Wait for distribution', body: 'IPRS distributes royalties quarterly. The first payment may take 3–6 months after registration as they reconcile data from broadcasters and streaming platforms.' },
            ].map(s => (
              <div key={s.n} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px', marginBottom: 12, display: 'flex', gap: 20 }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: 'rgba(167,139,250,0.3)', flexShrink: 0, lineHeight: 1, fontFamily: 'monospace' }}>{s.n}</span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 8px' }}>{s.title}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}

            <h2 style={S.h2}>Do You Need a Music Publisher?</h2>
            <p style={S.p}>As an independent artist in India, you <strong style={{ color: '#fff' }}>do not</strong> need a music publisher to collect publishing royalties. You can register directly with IPRS as a songwriter and receive payments directly.</p>
            <p style={S.p}>A music publishing deal makes sense only if a publisher offers:</p>
            <ul style={{ paddingLeft: 24, margin: '0 0 24px' }}>
              {[
                'A meaningful upfront advance against future royalties',
                'Active sync licensing pitching — they have relationships with Bollywood studios, OTT platforms (Netflix India, Amazon Prime), and ad agencies',
                'International collection — sub-publishing deals in the USA, UK and other markets where your music streams heavily',
              ].map(l => <li key={l} style={S.li}>{l}</li>)}
            </ul>
            <p style={S.p}>If a publisher offers none of these, there is no reason to give up a percentage of your publishing income. Self-publish through IPRS.</p>

            <h2 style={S.h2}>FAQ: Music Publishing India</h2>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 48px' }}>
              {[
                { q: 'What is music publishing in India?', a: 'Music publishing in India refers to managing and monetising the composition rights to a song. When a song is broadcast, streamed, or performed publicly in India, the songwriter earns publishing royalties collected by IPRS.' },
                { q: 'How do I register with IPRS in India?', a: 'Apply at iprs.org with your PAN/Aadhaar, bank details, and a list of your compositions. IPRS membership is free for individual artists. After approval, register each song separately to enable royalty tracking.' },
                { q: 'Do I need a music publisher in India?', a: 'No. Independent artists can self-publish by registering directly with IPRS. A publisher only adds value if they offer upfront advances, sync licensing, or international sub-publishing services.' },
              ].map(faq => (
                <div key={faq.q} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 10px' }}>{faq.q}</h3>
                  <p style={{ ...S.p, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Distribute your music and keep 100% of your master royalties.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Western Beats handles your distribution to Spotify, JioSaavn and 150+ platforms. You keep all your royalties. Free forever.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
