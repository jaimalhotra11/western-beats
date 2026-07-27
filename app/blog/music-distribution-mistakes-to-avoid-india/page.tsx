import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: '10 Music Distribution Mistakes Indian Artists Make in 2026 | Western Beats',
  description: 'The 10 biggest music distribution mistakes Indian artists make — from choosing the wrong distributor to missing JioSaavn and skipping ISRC codes. Avoid these and earn more.',
  keywords: [
    'music distribution mistakes India',
    'music distribution mistakes to avoid India',
    'common music distribution errors India',
    'music distribution tips India 2026',
    'independent artist mistakes India',
    'music distribution guide India 2026',
    'how to distribute music India correctly',
    'music release mistakes India',
    'avoid music distribution fees India',
    'music distribution checklist India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/music-distribution-mistakes-to-avoid-india' },
  openGraph: {
    title: '10 Music Distribution Mistakes Indian Artists Make in 2026 | Western Beats',
    description: 'Avoid these 10 costly distribution mistakes — wrong distributor, missing JioSaavn, no ISRC, hidden fees and more. A must-read for every Indian independent artist.',
    url: 'https://www.westernbeats.com/blog/music-distribution-mistakes-to-avoid-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: '10 Music Distribution Mistakes India 2026 | Western Beats' },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '10 Music Distribution Mistakes Indian Artists Make in 2026 (and How to Avoid Them)',
  description: 'The 10 most common and costly music distribution mistakes made by Indian independent artists, with actionable solutions.',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', logo: { '@type': 'ImageObject', url: 'https://www.westernbeats.com/logo.png' } },
  datePublished: '2026-07-11',
  dateModified: '2026-07-11',
  url: 'https://www.westernbeats.com/blog/music-distribution-mistakes-to-avoid-india',
}

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  hero: { background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '120px 24px 60px', textAlign: 'center' as const },
  badge: { display: 'inline-block', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 20, padding: '6px 16px', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#F87171', marginBottom: 20 },
  h1: { fontSize: 'clamp(28px,5vw,46px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.15 },
  lead: { fontSize: 18, color: '#8899AA', maxWidth: 640, margin: '0 auto 32px', lineHeight: 1.7 },
  body: { maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' },
  h2: { fontSize: 28, fontWeight: 800, margin: '48px 0 16px', color: '#fff' },
  p: { fontSize: 16, color: '#8899AA', lineHeight: 1.8, margin: '0 0 20px' },
  mistakeCard: { background: '#060C18', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 16, padding: '28px', margin: '20px 0' },
  mistakeNum: { display: 'inline-block', background: 'rgba(239,68,68,0.15)', color: '#F87171', borderRadius: 8, padding: '4px 10px', fontSize: 12, fontWeight: 700, marginBottom: 10 },
  fixBox: { background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 10, padding: '14px 18px', marginTop: 12 },
  cta: { display: 'block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 32px', fontSize: 16, fontWeight: 700, textAlign: 'center' as const, textDecoration: 'none', margin: '40px auto 0', maxWidth: 340 },
}

const mistakes = [
  {
    num: '01',
    title: 'Choosing a Distributor That Doesn\'t Have JioSaavn',
    body: 'JioSaavn has 100+ million monthly active users in India. It\'s the #1 streaming platform in the country. Yet the two biggest global distributors — DistroKid and TuneCore — do NOT distribute to JioSaavn. Indian artists using them are invisible to 100 million listeners.',
    fix: 'Use Western Beats, which includes JioSaavn (and Gaana, Wynk, Hungama) as standard. Your music reaches every Indian platform for free.',
  },
  {
    num: '02',
    title: 'Paying Annual Fees When Free Options Exist',
    body: 'Many Indian artists pay DistroKid ($22.99/year), TuneCore ($9.99/release/year) or Deliver My Tune (₹999+/year) without realising that Western Beats offers the same — or better — distribution completely free, forever. That\'s thousands of rupees saved every year.',
    fix: 'Switch to Western Beats. ₹0 signup, ₹0 annual fee, ₹0 per release. 100% of royalties go to you.',
  },
  {
    num: '03',
    title: 'Skipping Caller Tune (CRBT) Distribution',
    body: 'Jio Caller Tune is one of India\'s most lucrative and unique revenue streams. When someone sets your song as their Jio Hello Tune, you earn every time their phone rings. Most artists completely ignore this. No global distributor covers caller tunes — so artists using DistroKid or TuneCore miss out entirely.',
    fix: 'Western Beats distributes your song as a Jio Caller Tune, Airtel Hello Tune and Vi Hello Tune as standard. Activate this revenue stream with every release.',
  },
  {
    num: '04',
    title: 'Releasing Without an ISRC Code',
    body: 'Some artists distribute music through informal channels without proper ISRC codes. Without an ISRC, streams may not be attributed to you, royalties get miscalculated, and your song can\'t be properly tracked across platforms. This is a silent royalty killer.',
    fix: 'Western Beats assigns a free ISRC code to every track automatically. Every release through us is fully coded and ready for proper royalty tracking.',
  },
  {
    num: '05',
    title: 'Poor Cover Art (Below Platform Specs)',
    body: 'Platforms reject releases with low-resolution cover art. The minimum is 3000×3000 pixels. Text-heavy covers or covers with platform logos (Spotify, JioSaavn) also get rejected. Artists lose weeks waiting for re-approval.',
    fix: 'Always upload square cover art at exactly 3000×3000px in JPG or PNG format. Keep text minimal and ensure no streaming platform logos appear.',
  },
  {
    num: '06',
    title: 'Not Setting a Future Release Date',
    body: 'Artists who submit music and select "release immediately" miss the opportunity to pre-pitch to platform editorial playlists. Spotify requires at least 7 days notice for playlist pitching. JioSaavn\'s editorial team also works ahead of release. Releasing immediately means zero playlist consideration.',
    fix: 'Always set your release date at least 14 days in the future. Use the extra time to submit for playlist pitching, build social buzz, and prepare your press.',
  },
  {
    num: '07',
    title: 'Incorrect Metadata (Wrong Language, Genre, Composer Credits)',
    body: 'Metadata errors — wrong language tag (e.g., marking a Punjabi song as Hindi), incorrect genre, missing composer or lyricist credits — lead to poor algorithmic placement. Streaming algorithms use metadata to decide which listeners to show your music to.',
    fix: 'Fill in every metadata field accurately. Language, genre, mood, featuring artists, composers, lyricists, and publisher — all of it affects how the algorithm distributes your music internally.',
  },
  {
    num: '08',
    title: 'Distributing to Only 3–4 Platforms',
    body: 'Some artists choose a limited distribution package and only appear on Spotify, YouTube Music, and Apple Music. They miss out on Gaana (185M users), Wynk Music, Hungama, and dozens of platforms where Indian listeners actually stream.',
    fix: 'Always distribute to all platforms available. Western Beats covers 150+ platforms — all free. There is no reason to limit your reach.',
  },
  {
    num: '09',
    title: 'Not Claiming Your Artist Profiles',
    body: 'After distribution, most artists don\'t claim their Spotify for Artists profile, their JioSaavn artist page, or their Apple Music for Artists account. Unclaimed profiles look incomplete, don\'t show artist images, and miss out on analytics.',
    fix: 'Claim your profiles on every platform after your first release. Spotify for Artists and Apple Music for Artists give you valuable stream data and let you add a bio and photo.',
  },
  {
    num: '10',
    title: 'Deleting Releases When Switching Distributors',
    body: 'When switching distributors, many artists delete their old releases. This wipes out playlist placements, saves, and algorithmic history. A song that took months to build an audience suddenly disappears, and the Spotify URI changes — destroying any existing links or playlist features.',
    fix: 'Never delete an existing release before the new distribution is confirmed live. If switching to Western Beats, keep your old releases active until Western Beats has uploaded the same content. Then take down the old one after the new one is verified.',
  },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <div style={S.page}>
        <Nav />
        <header style={S.hero}>
          <div style={S.badge}>Must Read 2026</div>
          <h1 style={S.h1}>10 Music Distribution Mistakes<br />Indian Artists Make in 2026</h1>
          <p style={S.lead}>From choosing the wrong distributor to ignoring caller tunes and skipping ISRC codes — these mistakes are costing Indian artists thousands of rupees in lost streams and royalties every month.</p>
          <p style={{ fontSize: 13, color: '#4A5568' }}>Last updated: July 2026 · 9 min read</p>
        </header>

        <article style={S.body}>
          {mistakes.map(({ num, title, body, fix }) => (
            <div key={num} style={S.mistakeCard}>
              <span style={S.mistakeNum}>Mistake #{num}</span>
              <p style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '0 0 12px' }}>{title}</p>
              <p style={{ ...S.p, margin: '0 0 8px' }}>{body}</p>
              <div style={S.fixBox}>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#34D399', margin: '0 0 4px' }}>✓ The Fix:</p>
                <p style={{ ...S.p, margin: 0, fontSize: 14, color: '#A7F3D0' }}>{fix}</p>
              </div>
            </div>
          ))}

          <div style={{ background: '#060C18', border: '1px solid rgba(10,100,195,0.3)', borderRadius: 16, padding: '32px', marginTop: 40 }}>
            <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: '0 0 12px' }}>Avoid All 10 Mistakes with Western Beats</p>
            <p style={S.p}>Western Beats eliminates all 10 of these mistakes by design. Free distribution to 150+ platforms including JioSaavn and Gaana, automatic ISRC codes, caller tune distribution, and zero fees — all with a Warner Music India partnership backing every release.</p>
          </div>

          <Link href="/sign-up" style={S.cta}>Start Distributing Correctly — Free →</Link>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ ...S.p, fontSize: 14 }}>Related: <Link href="/blog/how-to-distribute-music-india-free" style={{ color: '#5CB2DC' }}>How to Distribute Music India Free</Link> · <Link href="/caller-tune-distribution" style={{ color: '#5CB2DC' }}>Caller Tune Distribution</Link> · <Link href="/free-isrc-codes" style={{ color: '#5CB2DC' }}>Free ISRC Codes</Link></p>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}
