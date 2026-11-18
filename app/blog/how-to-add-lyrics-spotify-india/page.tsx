import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "How to Add Lyrics to Spotify in India 2026 — Synced Lyrics Guide",
  description: "How Indian artists can get lyrics showing on Spotify — how Spotify lyrics work, submitting synced lyrics through Musixmatch, Hindi and regional-language lyrics, and common reasons lyrics don't appear.",
  keywords: [
    "how to add lyrics to Spotify India",
    "Spotify lyrics not showing",
    "Musixmatch lyrics Spotify India",
    "add Hindi lyrics Spotify",
    "synced lyrics Spotify",
    "how to get lyrics on Spotify for my song",
    "Spotify lyrics independent artist",
    "Punjabi song lyrics Spotify",
    "Musixmatch for Artists India",
    "lyrics on streaming platforms India",
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-to-add-lyrics-spotify-india' },
  openGraph: {
    title: "How to Add Lyrics to Spotify in India 2026 — Synced Lyrics Guide | Western Beats",
    description: "Step-by-step guide to getting your lyrics on Spotify, including Hindi and regional-language songs.",
    url: 'https://www.westernbeats.com/blog/how-to-add-lyrics-spotify-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: "How to Add Lyrics to Spotify in India 2026 — Synced Lyrics Guide | Western Beats" },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "How to Add Lyrics to Your Song on Spotify in India (2026 Guide)",
  description: "Step-by-step guide to getting your lyrics on Spotify, including Hindi and regional-language songs.",
  inLanguage: 'en-IN',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  datePublished: '2026-11-19',
  dateModified: '2026-11-19',
  url: 'https://www.westernbeats.com/blog/how-to-add-lyrics-spotify-india',
  image: 'https://www.westernbeats.com/og-image.jpg',
  step: [
    { '@type': 'HowToStep', name: "Release the Song First", text: "Lyrics attach to a song that already exists on Spotify. Distribute your track, then wait until it is live." },
    { '@type': 'HowToStep', name: "Claim Your Spotify for Artists Profile", text: "Claim your profile at artists.spotify.com so you are verified as the artist — this helps when connecting other services to your music." },
    { '@type': 'HowToStep', name: "Create a Musixmatch Account", text: "Spotify's lyrics are provided by Musixmatch. Sign up for Musixmatch for Artists and connect it to your Spotify artist profile to get verified." },
    { '@type': 'HowToStep', name: "Find Your Song and Add Lyrics", text: "Search for your track in Musixmatch, paste the full lyrics exactly as sung, and check spelling and line breaks." },
    { '@type': 'HowToStep', name: "Sync the Lyrics", text: "Use Musixmatch's sync tool to time each line to the audio, so lyrics scroll along with your song in Spotify." },
    { '@type': 'HowToStep', name: "Wait for Review", text: "Lyrics go through review before appearing. Once approved, they show up in Spotify and other apps that use Musixmatch." },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Why are my lyrics not showing on Spotify?",
      acceptedAnswer: { '@type': 'Answer', text: "Spotify's lyrics come from Musixmatch. If no one has added and synced lyrics for your song on Musixmatch, or they are still under review, they won't appear. Add them through Musixmatch for Artists." },
    },
    {
      '@type': 'Question',
      name: "Can I add Hindi lyrics to Spotify?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes. You can submit lyrics in Hindi and other Indian languages. Use one script consistently and write the lyrics exactly as they are sung." },
    },
    {
      '@type': 'Question',
      name: "Is adding lyrics to Spotify free?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Creating a Musixmatch account and submitting lyrics for your own songs is free." },
    },
    {
      '@type': 'Question',
      name: "How long do lyrics take to appear on Spotify?",
      acceptedAnswer: { '@type': 'Answer', text: "It varies. Lyrics go through review on Musixmatch first and then appear in Spotify once approved." },
    },
  ],
}

const STEPS = [
  { n: '01', t: "Release the Song First", d: "Lyrics attach to a song that already exists on Spotify. Distribute your track, then wait until it is live." },
  { n: '02', t: "Claim Your Spotify for Artists Profile", d: "Claim your profile at artists.spotify.com so you are verified as the artist — this helps when connecting other services to your music." },
  { n: '03', t: "Create a Musixmatch Account", d: "Spotify's lyrics are provided by Musixmatch. Sign up for Musixmatch for Artists and connect it to your Spotify artist profile to get verified." },
  { n: '04', t: "Find Your Song and Add Lyrics", d: "Search for your track in Musixmatch, paste the full lyrics exactly as sung, and check spelling and line breaks." },
  { n: '05', t: "Sync the Lyrics", d: "Use Musixmatch's sync tool to time each line to the audio, so lyrics scroll along with your song in Spotify." },
  { n: '06', t: "Wait for Review", d: "Lyrics go through review before appearing. Once approved, they show up in Spotify and other apps that use Musixmatch." },
]

const CARDS = [
  { title: "More Engagement", desc: "Listeners who follow along with lyrics tend to stay with the song and come back to it." },
  { title: "Easy Sharing", desc: "Fans can share a lyric line from your song straight to Instagram Stories." },
  { title: "Discoverability", desc: "People often search for a line they remember — accurate lyrics help them find your song." },
  { title: "Regional Reach", desc: "Hindi, Punjabi and regional-language lyrics help listeners outside your home state connect with the song." },
]

const TIPS = [
  "Write lyrics exactly as they are sung, including repeated lines",
  "Choose one script consistently — Devanagari, Gurmukhi or Roman — for a song",
  "Don't add extra notes, credits or emojis inside the lyrics",
  "Keep a copy of the final lyrics before release so they're ready to submit",
  "Add your lyrics in the Western Beats submission form so they're on file with your release",
  "Check your lyrics on the app after approval and correct any mistakes",
]

const RELATED = [
  { label: "Spotify Distribution", href: "/spotify-distribution" },
  { label: "Get Verified on Spotify", href: "/blog/how-to-get-verified-spotify-india" },
  { label: "Spotify Playlists India", href: "/blog/how-to-get-on-spotify-playlists-india" },
  { label: "Song Release Checklist", href: "/blog/song-release-checklist-india" },
  { label: "All Blog Posts", href: "/blog" },
]

export default function AddLyricsSpotifyIndia() {
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
                <li className="text-[#5CB2DC]">{"Add Lyrics to Spotify"}</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(29,185,84,0.1)', border: '1px solid rgba(29,185,84,0.25)', color: '#1DB954' }}>
              {"🎤 Lyrics Guide"}
            </div>
            <h1 className="font-outfit font-black leading-tight tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              {"How to Add Lyrics to Your Song on Spotify in India (2026 Guide)"}
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-6">
              {"Lyrics on screen keep listeners engaged and help fans sing along — and share your song. Here is how lyrics reach Spotify and how to get yours showing, including Hindi and regional-language songs."}
            </p>
            <div className="flex items-center gap-3 text-[12px] text-[#8899AA] font-inter">
              <span>{"By Western Beats"}</span>
              <span>·</span>
              <span>{"November 19, 2026"}</span>
              <span>·</span>
              <span>{"5 min read"}</span>
            </div>
          </div>
        </section>

        <article className="pb-20">
          <div className="max-w-3xl mx-auto px-6">

            <h2 className="font-outfit font-black text-white text-[24px] mb-6 mt-10">{"Step-by-Step: Getting Your Lyrics on Spotify"}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {STEPS.map(s => (
                <div key={s.n} className="flex gap-4 items-start rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-black text-[18px] w-10 flex-shrink-0" style={{ color: '#1DB954' }}>{s.n}</div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[15px] mb-1">{s.t}</div>
                    <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Why Lyrics Matter"}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CARDS.map(card => (
                <div key={card.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{card.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Lyrics Tips for Indian Artists"}</h2>
            <ul className="flex flex-col gap-2 mb-8">
              {TIPS.map(tip => (
                <li key={tip} className="flex gap-3 items-start font-inter text-[14px] text-[#8899AA]">
                  <span className="mt-0.5" style={{ color: '#1DB954' }}>✓</span>
                  {tip}
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-6 mb-10" style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
              <div className="font-outfit font-black text-white text-[18px] mb-2">{"Get Your Song on Spotify Free"}</div>
              <p className="font-inter text-[14px] text-[#8899AA] leading-relaxed mb-4">
                {"Western Beats distributes your music to Spotify, JioSaavn, Apple Music and 150+ platforms with no upfront fee. Add your lyrics in the submission form so they're ready when your song goes live."}
              </p>
              <Link href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-outfit font-bold text-[13px] text-white"
                style={{ background: '#0A64C3' }}>
                {"Submit Your Music Free →"}
              </Link>
            </div>

            <h2 className="font-outfit font-black text-white text-[22px] mb-6">{"Frequently Asked Questions"}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {FAQ_SCHEMA.mainEntity.map(q => (
                <div key={q.name} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{q.name}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{q.acceptedAnswer.text}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {RELATED.map(l => (
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
