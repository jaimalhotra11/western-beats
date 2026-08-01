import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Free Ebook: NRI Artist Music Distribution Playbook — UK, USA, Canada 2026 | Western Beats',
  description: 'Free 45-page playbook for South Asian artists abroad — how to distribute Indian music from UK, USA or Canada to reach both local and India audiences simultaneously.',
  keywords: ['NRI artist music distribution guide', 'South Asian artist UK music guide', 'Indian artist Canada music distribution', 'distribute music UK to India free', 'NRI music playbook 2026'],
  alternates: { canonical: 'https://www.westernbeats.com/resources/ebooks/music-distribution-nri-artists-guide' },
  openGraph: {
    title: 'Free Ebook: NRI Artist Music Distribution Playbook | Western Beats',
    description: '45-page free guide for South Asian artists in UK, USA and Canada.',
    url: 'https://www.westernbeats.com/resources/ebooks/music-distribution-nri-artists-guide',
    siteName: 'Western Beats', type: 'article',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'NRI Artist Playbook: Distributing Indian Music from the UK, USA & Canada',
  description: 'Step-by-step playbook for South Asian artists abroad — distributing to both local and Indian audiences simultaneously.',
  author: { '@type': 'Organization', name: 'Western Beats' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  url: 'https://www.westernbeats.com/resources/ebooks/music-distribution-nri-artists-guide',
  numberOfPages: 45,
  bookFormat: 'EBook',
  isAccessibleForFree: true,
  datePublished: '2026-02-01',
}

const S = {
  page: { background: '#040A14', minHeight: '100vh', color: '#fff', fontFamily: 'var(--font-outfit, sans-serif)' },
  wrap: { maxWidth: 800, margin: '0 auto', padding: '0 24px' },
  h1: { fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, margin: '16px 0 20px', lineHeight: 1.15 },
  h2: { fontSize: 24, fontWeight: 800, margin: '48px 0 16px' },
  p: { fontSize: 16, color: '#B0BEC5', lineHeight: 1.8, margin: '0 0 20px' },
  cta: { display: 'inline-block', background: '#0A64C3', color: '#fff', borderRadius: 12, padding: '16px 36px', fontSize: 16, fontWeight: 700, textDecoration: 'none' },
}

export default function EbookPage2() {
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
              <Link href="/resources#ebooks" style={{ color: '#8899AA', fontSize: 13, textDecoration: 'none' }}>Free Ebooks</Link>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(245,158,11,0.1)', color: '#F59E0B', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, padding: '4px 10px', borderRadius: 6 }}>Free Ebook · 45 Pages · For NRI Artists ✈️</span>
            <h1 style={S.h1}>NRI Artist Playbook: Distributing Indian Music from the UK, USA & Canada</h1>
            <p style={{ ...S.p, fontSize: 18 }}>You're in London, Toronto or New York. Your music lives between two cultures. Your audience does too — local South Asian listeners AND family back home in India. This is your step-by-step guide to reaching both.</p>
            <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 20, padding: '28px', marginTop: 32 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' as const }}>
                <span style={{ fontSize: 48 }}>✈️</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 17, fontWeight: 900, margin: '0 0 8px', color: '#fff' }}>Free — sign up to Western Beats to receive the full playbook</p>
                  <p style={{ ...S.p, fontSize: 14, margin: '0 0 16px' }}>Distribute to Spotify UK, Apple Music, JioSaavn, and 150+ platforms simultaneously — free. Playbook included.</p>
                  <Link href="/sign-up" style={S.cta}>Get the Playbook Free →</Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <article style={{ padding: '48px 24px 80px' }}>
          <div style={S.wrap}>
            <h2 style={S.h2}>What's in the NRI Artist Playbook</h2>
            <div style={{ display: 'grid', gap: 14, margin: '0 0 40px' }}>
              {[
                { ch: 'Chapter 1', title: 'Understanding Your Dual Audience', desc: 'How to think about your British Asian / Canadian South Asian / American Desi local audience and your India-based audience simultaneously — different platforms, different listening contexts, same music.' },
                { ch: 'Chapter 2', title: 'The Right Distributor from Abroad', desc: 'Which distributors cover both JioSaavn (India) and Spotify UK/Apple Music UK (your local market). Why this combination is rare and why it matters for every NRI artist.' },
                { ch: 'Chapter 3', title: 'Metadata for Two Markets', desc: 'Bilingual metadata strategy — how to file your track in both English and Hindi/Punjabi/Tamil to surface in searches across both markets. Genre tags that work for UK playlists vs JioSaavn editorial.' },
                { ch: 'Chapter 4', title: 'Territory-Specific Editorial Pitching', desc: 'Spotify UK editorial, Apple Music UK, JioSaavn editorial, Gaana — different teams with different pitching requirements. What each playlist editor wants to see from an NRI artist.' },
                { ch: 'Chapter 5', title: 'Social Media Funnels by Territory', desc: 'Instagram Reels for UK South Asian community (hashtags, timing, collaborations). YouTube Shorts for India. How to build two funnels for the same song without doubling your workload.' },
                { ch: 'Chapter 6', title: 'International Royalty Collection', desc: 'How to collect royalties from UK, USA, Canada and UAE streams. PPL, PRS for Music, SoundExchange — what you need to register for as a non-UK resident.' },
                { ch: 'Chapter 7', title: 'Building a Press Kit for UK & India', desc: 'What a UK music blog needs from an NRI artist (and why it\'s different from an India-focused press kit). How to position your dual-culture story as an asset, not a limitation.' },
              ].map(ch => (
                <div key={ch.ch} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px 24px' }}>
                  <p style={{ fontSize: 11, color: '#F59E0B', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, margin: '0 0 6px' }}>{ch.ch}</p>
                  <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 8px' }}>{ch.title}</h3>
                  <p style={{ ...S.p, fontSize: 14, margin: 0 }}>{ch.desc}</p>
                </div>
              ))}
            </div>

            <h2 style={S.h2}>Country-Specific Notes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14, margin: '0 0 28px' }}>
              {[
                { flag: '🇬🇧', country: 'UK Artists', notes: ['Brit-Asia Spotify editorial', 'BBC Asian Network press angle', 'British Asian community events', 'PRS for Music registration'] },
                { flag: '🇺🇸', country: 'USA Artists', notes: ['Desi American Spotify playlists', 'SoundExchange registration', 'ASCAP/BMI/SESAC choice', 'South Asian festival circuit'] },
                { flag: '🇨🇦', country: 'Canada Artists', notes: ['Desi Toronto Spotify editorial', 'SOCAN registration', 'Brampton/Mississauga scene', 'Canadian Content (CanCon) rules'] },
              ].map(c => (
                <div key={c.country} style={{ background: '#060C18', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '20px' }}>
                  <span style={{ fontSize: 28 }}>{c.flag}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: '8px 0 12px' }}>{c.country}</h3>
                  {c.notes.map(n => <p key={n} style={{ ...S.p, fontSize: 13, margin: '0 0 6px' }}>→ {n}</p>)}
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)', borderRadius: 20, padding: '40px 36px', textAlign: 'center' as const, marginTop: 48 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, margin: '0 0 12px' }}>Your music deserves both markets.</h2>
              <p style={{ ...S.p, fontSize: 15, margin: '0 0 28px', color: '#8899AA' }}>Western Beats distributes to JioSaavn, Spotify UK, Apple Music UK and 150+ platforms. Free. Get the full playbook when you sign up.</p>
              <Link href="/sign-up" style={S.cta}>Start Distributing Free →</Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  )
}
