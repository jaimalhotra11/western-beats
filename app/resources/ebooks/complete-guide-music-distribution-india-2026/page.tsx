import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Free Ebook: Complete Guide to Music Distribution in India 2026 (PDF) | Western Beats',
  description: 'Download the free 62-page guide to music distribution in India 2026. Covers Spotify, JioSaavn, Apple Music, ISRC codes, royalties, metadata, cover art specs and global distribution strategy.',
  keywords: ['music distribution India guide 2026', 'free music distribution ebook India', 'how to distribute music India 2026', 'music distribution guide PDF India', 'Spotify JioSaavn distribution guide free'],
  alternates: { canonical: 'https://www.westernbeats.com/resources/ebooks/complete-guide-music-distribution-india-2026' },
  openGraph: {
    title: 'Free Ebook: Complete Guide to Music Distribution India 2026 | Western Beats',
    description: '62-page free guide covering every platform, royalty, ISRC, metadata spec and release strategy for Indian artists.',
    url: 'https://www.westernbeats.com/resources/ebooks/complete-guide-music-distribution-india-2026',
    siteName: 'Western Beats', type: 'article',
  },
}

const SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'The Complete Guide to Music Distribution in India 2026',
    description: '62-page definitive guide covering platforms, royalties, ISRC codes, metadata, cover art and release strategy for independent artists in India.',
    author: { '@type': 'Organization', name: 'Western Beats' },
    publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
    url: 'https://www.westernbeats.com/resources/ebooks/complete-guide-music-distribution-india-2026',
    numberOfPages: 62,
    bookFormat: 'EBook',
    inLanguage: 'en',
    isAccessibleForFree: true,
    datePublished: '2026-01-01',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is this ebook really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the complete 62-page guide is completely free. No email required, no credit card, no trial. Just start distributing on Western Beats and you\'ll receive it automatically.' } },
      { '@type': 'Question', name: 'What does the ebook cover?', acceptedAnswer: { '@type': 'Answer', text: 'The guide covers: choosing the right distributor, understanding ISRC codes, metadata optimisation, cover art technical specs, release date strategy, how to pitch to editorial playlists, understanding royalty statements, and how to reach the international diaspora market.' } },
    ],
  },
]

const CHAPTERS = [
  { n: '01', title: 'How Music Distribution Works in 2026', pages: 'Pages 1–8', topics: ['Aggregators vs labels vs direct deals', 'How royalties flow from platforms to artists', 'Why independent distribution has overtaken label deals', 'The India-specific distribution landscape'] },
  { n: '02', title: 'Choosing Your Distributor', pages: 'Pages 9–18', topics: ['Western Beats vs DistroKid vs TuneCore vs CD Baby', 'The JioSaavn factor — why it changes everything', 'Annual fee structures and what they actually cost', 'Commission models: who takes the biggest cut?'] },
  { n: '03', title: 'ISRC Codes & Rights', pages: 'Pages 19–26', topics: ['What is an ISRC code and why you need one', 'How to get a free ISRC through Western Beats', 'Neighbouring rights and publishing royalties', 'Registering with IPRS and PPL India'] },
  { n: '04', title: 'Metadata That Gets You Found', pages: 'Pages 27–36', topics: ['Title, artist name and featured artist formatting', 'Genre and sub-genre: how algorithms use them', 'Mood tags: the hidden lever behind playlist placement', 'Bilingual metadata for Hindi/Punjabi + English reach'] },
  { n: '05', title: 'Cover Art That Converts', pages: 'Pages 37–44', topics: ['3000×3000px: the spec that matters', 'Designing for mobile thumbnail (40px)', 'Typography rules for streaming platforms', 'What Spotify and JioSaavn editors look for'] },
  { n: '06', title: 'Release Strategy', pages: 'Pages 45–52', topics: ['Why Friday release dates matter (and when to break the rule)', 'Pre-save campaigns: 3-week vs 6-week window', 'How to pitch to Spotify and JioSaavn editorial', 'Timing around Bollywood release calendar'] },
  { n: '07', title: 'Understanding Royalty Statements', pages: 'Pages 53–58', topics: ['Reading your Western Beats royalty dashboard', 'Per-stream rates by platform and territory', 'Why your payout looks low and what to do about it', 'Currency conversion and international royalty collection'] },
  { n: '08', title: 'Going Global: The Diaspora Strategy', pages: 'Pages 59–62', topics: ['The 30M South Asian diaspora market', 'UK, USA, Canada, UAE, Australia: platform differences', 'Social media funnels by territory', 'Building a press kit for international playlists'] },
]

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 800, margin: '0 auto', padding: '0 24px' },
  h1: { fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: '16px 0 20px', lineHeight: 1.15 },
  h2: { fontSize: 24, fontWeight: 800, margin: '48px 0 16px' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.8, margin: '0 0 20px' },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 16, fontWeight: 700, textDecoration: 'none' },
}

export default function EbookPage1() {
  return (
    <>
      {SCHEMA.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <div style={S.page}>
        <Nav />

        <header style={{ background: 'linear-gradient(180deg,#060C18 0%,#040A14 100%)', padding: '100px 24px 60px' }}>
          <div style={S.wrap}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <Link href="/resources" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Resources</Link>
              <span style={{ color: '#4A5568' }}>/</span>
              <Link href="/resources#ebooks" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Free Ebooks</Link>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(245,158,11,0.1)', color: '#F59E0B', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 10px', borderRadius: 6 }}>Free Ebook · 62 Pages · No Email Required</span>
            <h1 style={S.h1}>The Complete Guide to Music Distribution in India 2026</h1>
            <p style={{ ...S.p, fontSize: 18 }}>Everything independent artists need to distribute music in India and globally — from choosing the right distributor to reading your first royalty statement. 62 pages, completely free.</p>

            {/* Hero CTA box */}
            <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 20, padding: '32px', marginTop: 32 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' as const }}>
                <div style={{ fontSize: 64, lineHeight: 1 }}>📖</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 18, fontWeight: 900, margin: '0 0 8px', color: '#fff' }}>Get the guide free — start distributing today</p>
                  <p style={{ ...S.p, margin: '0 0 20px', fontSize: 14 }}>Sign up to Western Beats and receive the complete guide automatically. No annual fee, no commission — just free music distribution to 150+ platforms.</p>
                  <Link href="/sign-up" style={S.cta}>Get the Ebook Free →</Link>
                  <p style={{ fontSize: 12, color: '#4A5568', margin: '12px 0 0' }}>No credit card. No email capture. Free forever.</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <article style={{ padding: '48px 24px 80px' }}>
          <div style={S.wrap}>

            <h2 style={S.h2}>What's inside the guide</h2>
            <p style={S.p}>The Complete Guide to Music Distribution in India 2026 is an 8-chapter, 62-page walkthrough of everything an independent artist needs to know — from your first track submission to reading your royalty statement six months later.</p>

            <div style={{ display: 'grid', gap: 16, margin: '0 0 40px' }}>
              {CHAPTERS.map(ch => (
                <div key={ch.n} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '24px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0 }}>
                    <span style={{ fontSize: 12, fontWeight: 900, color: '#F59E0B', fontFamily: 'monospace' }}>CH {ch.n}</span>
                    <p style={{ fontSize: 11, color: '#4A5568', margin: '4px 0 0', fontWeight: 600 }}>{ch.pages}</p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 12px' }}>{ch.title}</h3>
                    <ul style={{ paddingLeft: 16, margin: 0 }}>
                      {ch.topics.map(t => <li key={t} style={{ ...S.p, margin: '0 0 4px', fontSize: 14 }}>{t}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>Who this guide is for</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14, margin: '0 0 28px' }}>
              {[
                { icon: '🎤', label: 'First-time artists', desc: 'Never distributed before and don\'t know where to start' },
                { icon: '🌍', label: 'NRI artists', desc: 'Based in UK, USA, Canada, UAE or Australia and want to reach India' },
                { icon: '🎶', label: 'Independent artists', desc: 'Already distributing but want to optimise metadata and royalties' },
                { icon: '🏷️', label: 'Label managers', desc: 'Managing multiple artists and need a distribution strategy framework' },
              ].map(g => (
                <div key={g.label} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px' }}>
                  <span style={{ fontSize: 28, display: 'block', marginBottom: 8 }}>{g.icon}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 6px' }}>{g.label}</h3>
                  <p style={{ ...S.p, fontSize: 13, margin: 0 }}>{g.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const, marginTop: 48 }}>
              <span style={{ fontSize: 48, display: 'block', marginBottom: 16 }}>📖</span>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Get the complete guide — free</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Sign up to Western Beats. Distribute your music free to 150+ platforms. Receive the full 62-page guide automatically.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing & Get Guide Free →</Link>
            </div>

            <div style={{ marginTop: 48 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, margin: '0 0 20px' }}>Related Resources</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
                {[
                  { href: '/resources/ebooks/music-distribution-nri-artists-guide', label: 'NRI Artist Playbook: UK, USA & Canada', tag: 'Free Ebook' },
                  { href: '/resources/research/state-of-indian-music-streaming-2026', label: 'State of Indian Music Streaming 2026', tag: 'Research' },
                  { href: '/resources/infographics/streaming-royalties-india-2026', label: 'Streaming Royalty Rates India 2026', tag: 'Infographic' },
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
