import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'How to Get Verified on Spotify India 2026 — Spotify for Artists Blue Tick | Western Beats',
  description: 'Step-by-step guide to getting verified on Spotify India — Spotify for Artists blue tick, profile setup, playlist pitching and getting your music on Spotify India free in 2026.',
  keywords: [
    'how to get verified on Spotify India',
    'Spotify for Artists India',
    'Spotify blue tick India',
    'Spotify artist verification India',
    'how to get on Spotify India free',
    'Spotify for Artists setup India',
    'Spotify playlist pitching India',
    'Spotify verification independent artist India',
    'get Spotify artist profile India',
    'Spotify India 2026 verification',
  ],
  alternates: { canonical: 'https://westernbeats.com/blog/how-to-get-verified-spotify-india' },
  openGraph: {
    title: 'How to Get Verified on Spotify India 2026 | Western Beats',
    description: 'Complete step-by-step guide to Spotify for Artists verification for Indian independent artists.',
    url: 'https://westernbeats.com/blog/how-to-get-verified-spotify-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'How to Get Verified on Spotify India 2026 | Western Beats' },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get Verified on Spotify India 2026',
  description: 'Step-by-step guide to Spotify for Artists verification for Indian independent artists.',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://westernbeats.com' },
  datePublished: '2026-06-25',
  dateModified: '2026-06-25',
  url: 'https://westernbeats.com/blog/how-to-get-verified-spotify-india',
  image: 'https://westernbeats.com/og-image.jpg',
  totalTime: 'PT72H',
  step: [
    { '@type': 'HowToStep', name: 'Distribute your music to Spotify', text: 'Submit your music to Western Beats. We distribute to Spotify India for free within 72 hours.' },
    { '@type': 'HowToStep', name: 'Wait for your track to go live', text: 'Once your song is live on Spotify, your artist profile is created automatically.' },
    { '@type': 'HowToStep', name: 'Claim your Spotify for Artists profile', text: 'Go to artists.spotify.com and claim your profile. You will need to verify via your distributor (Western Beats).' },
    { '@type': 'HowToStep', name: 'Complete your profile', text: 'Add your artist photo, bio, pick your artist\'s pick, and connect your social media.' },
    { '@type': 'HowToStep', name: 'Pitch to Spotify playlists', text: 'Use Spotify for Artists to pitch upcoming releases to Spotify\'s editorial playlist curators at least 7 days before release.' },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get the Spotify for Artists blue checkmark in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Once your music is on Spotify, claim your profile at artists.spotify.com. After claiming, your profile automatically gets the blue verification checkmark. You need to have at least one song distributed to Spotify to claim it.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get my music on Spotify India for free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Submit your music to Western Beats for free. We distribute to Spotify India and 150+ other platforms within 72 hours at zero cost. You keep 100% ownership of your music.' },
    },
    {
      '@type': 'Question',
      name: 'How do I pitch my song to Spotify playlists India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Through your Spotify for Artists dashboard, go to "Music" → select an upcoming release → click "Pitch to Playlists." You must pitch at least 7 days before the release date. Provide a compelling pitch describing your song\'s mood, genre, and story.' },
    },
    {
      '@type': 'Question',
      name: 'How many streams do I need for Spotify India verification?',
      acceptedAnswer: { '@type': 'Answer', text: 'There is no minimum stream count required for Spotify for Artists verification. Any artist with at least one song on Spotify can claim and verify their profile — even with zero streams.' },
    },
  ],
}

const STEPS = [
  { n: '01', t: 'Get Your Music on Spotify', d: 'Submit your music free at Western Beats. We distribute to Spotify India within 72 hours. No subscription, no upfront cost.' },
  { n: '02', t: 'Your Artist Profile is Created', d: 'Once your song goes live, Spotify automatically creates an artist profile under your name.' },
  { n: '03', t: 'Go to artists.spotify.com', d: 'Visit artists.spotify.com and sign up. Search for your artist name and click "Claim Your Profile."' },
  { n: '04', t: 'Verify via Your Distributor', d: 'Spotify will ask you to verify through your distributor. If you distributed with Western Beats, contact us and we\'ll verify your profile instantly.' },
  { n: '05', t: 'Complete Your Profile', d: 'Add your artist photo (minimum 750×750px), bio, social links, and pick your Artist\'s Pick — a song you want to spotlight.' },
  { n: '06', t: 'Pitch to Editorial Playlists', d: 'Use Spotify for Artists to pitch upcoming releases to Spotify\'s editorial curators. Pitch at least 7 days before release for the best chance.' },
]

export default function SpotifyVerificationIndia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        <section className="pt-32 pb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#1DB954' }} />
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">Get Verified on Spotify India</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(29,185,84,0.1)', border: '1px solid rgba(29,185,84,0.25)', color: '#1DB954' }}>
              🎵 Spotify for Artists Guide
            </div>
            <h1 className="font-outfit font-black leading-tight tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              How to Get Verified on Spotify India 2026 — Complete Guide
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-6">
              Getting verified on Spotify India (the blue checkmark) is free and open to any artist with music on the platform. Here is the complete step-by-step guide — from uploading your first song to pitching editorial playlists.
            </p>
            <div className="flex items-center gap-3 text-[12px] text-[#8899AA] font-inter">
              <span>By Western Beats</span>
              <span>·</span>
              <span>June 25, 2026</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>
        </section>

        <article className="pb-20">
          <div className="max-w-3xl mx-auto px-6">

            <h2 className="font-outfit font-black text-white text-[24px] mb-6 mt-10">Step-by-Step: Get Verified on Spotify India</h2>
            <div className="flex flex-col gap-4 mb-10">
              {STEPS.map(s => (
                <div key={s.n} className="flex gap-4 items-start rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-black text-[#1DB954] text-[18px] w-10 flex-shrink-0">{s.n}</div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[15px] mb-1">{s.t}</div>
                    <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">Spotify for Artists: What You Can Do</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Real-Time Analytics', desc: 'See how many streams, listeners, saves, and playlist adds your songs are getting — by country, city, and age group.' },
                { title: 'Playlist Pitching', desc: 'Pitch upcoming releases directly to Spotify\'s editorial team. One editorial playlist can add 100,000+ streams.' },
                { title: 'Artist Pick', desc: 'Highlight a specific song, album, or playlist at the top of your profile. Change it anytime.' },
                { title: 'Canvas', desc: 'Add a looping 3–8 second video behind your song when listeners play it on mobile. Increases saves by up to 145%.' },
              ].map(c => (
                <div key={c.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{c.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">Spotify Playlist Pitching Tips for India</h2>
            <ul className="flex flex-col gap-2 mb-8">
              {[
                'Submit your pitch at least 7 days before release — earlier is better',
                'Pick the most accurate mood and genre tags for your song',
                'Write a personal, honest pitch — explain the story behind the song',
                'Target "New Music" playlists specifically for Indian genres (Punjabi, Bollywood, Indie)',
                'Build your own playlists on Spotify to grow listener engagement',
                'Ask fans to save and add your song to their playlists — saves signal editorial curators',
              ].map(tip => (
                <li key={tip} className="flex gap-3 items-start font-inter text-[14px] text-[#8899AA]">
                  <span className="text-[#1DB954] mt-0.5">✓</span>
                  {tip}
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-6 mb-10" style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
              <div className="font-outfit font-black text-white text-[18px] mb-2">Get on Spotify India Free in 72 Hours</div>
              <p className="font-inter text-[14px] text-[#8899AA] leading-relaxed mb-4">
                Western Beats distributes your music to Spotify India and 150+ platforms for free. Submit once, go live everywhere in 72 hours. We also help you claim and verify your Spotify for Artists profile.
              </p>
              <Link href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-outfit font-bold text-[13px] text-white"
                style={{ background: '#0A64C3' }}>
                Submit Your Music Free →
              </Link>
            </div>

            <h2 className="font-outfit font-black text-white text-[22px] mb-6">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-4 mb-10">
              {FAQ_SCHEMA.mainEntity.map(q => (
                <div key={q.name} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{q.name}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{q.acceptedAnswer.text}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Spotify Distribution India', href: '/spotify-distribution' },
                { label: 'How Much JioSaavn Pays', href: '/blog/how-much-jiosaavn-pays-per-stream' },
                { label: 'YouTube Content ID India', href: '/blog/youtube-content-id-india' },
                { label: 'Free ISRC Codes', href: '/free-isrc-codes' },
                { label: 'All Blog Posts', href: '/blog' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="px-4 py-2 rounded-lg font-inter text-[12px] text-[#8899AA] hover:text-white transition-colors"
                  style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
