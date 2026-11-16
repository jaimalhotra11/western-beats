import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "Explicit Content & Parental Advisory Label for Songs in India 2026",
  description: "When should Indian artists mark a song explicit? A guide to the parental advisory label on Spotify, Apple Music and JioSaavn — gaaliyan, violence, drugs, clean versions and what happens if you don't tag it.",
  keywords: [
    "explicit content song India",
    "parental advisory label song",
    "how to mark song explicit Spotify",
    "explicit tag Apple Music India",
    "gaali in songs streaming",
    "clean version song release",
    "explicit lyrics Hindi rap",
    "Punjabi song explicit label",
    "explicit content distribution India",
    "E label Spotify meaning",
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/explicit-content-parental-advisory-music-india' },
  openGraph: {
    title: "Explicit Content & Parental Advisory Label for Songs in India 2026 | Western Beats",
    description: "When to mark your song explicit, what the 'E' label means on Spotify and Apple Music, and how to release clean versions in India.",
    url: 'https://www.westernbeats.com/blog/explicit-content-parental-advisory-music-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: "Explicit Content & Parental Advisory Label for Songs in India 2026 | Western Beats" },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Explicit Content & Parental Advisory for Songs in India — When to Mark Your Track Explicit",
  description: "When to mark your song explicit, what the 'E' label means on Spotify and Apple Music, and how to release clean versions in India.",
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  datePublished: '2026-11-16',
  dateModified: '2026-11-16',
  url: 'https://www.westernbeats.com/blog/explicit-content-parental-advisory-music-india',
  image: 'https://www.westernbeats.com/og-image.jpg',
  step: [
    { '@type': 'HowToStep', name: "Listen to the Full Lyrics", text: "Go through the whole song, including ad-libs, intros and outros. One line of strong language anywhere in the track is enough to need the explicit label." },
    { '@type': 'HowToStep', name: "Check Against the Common Triggers", text: "Strong language or abuses (gaaliyan) in any language, graphic violence, references to drug use, and sexual content are the usual reasons platforms expect an explicit tag." },
    { '@type': 'HowToStep', name: "Tick Parental Advisory When You Submit", text: "On the Western Beats submission form, tick the Parental Advisory box for a single. For an EP or album, mark each explicit track individually." },
    { '@type': 'HowToStep', name: "Consider a Clean Version", text: "If you want radio play, caller tunes or family-friendly playlists, submit a separate clean edit with the strong language muted or replaced. It gets its own ISRC." },
    { '@type': 'HowToStep', name: "Keep the Artwork Clean", text: "The explicit label covers the audio. Cover art itself still must not contain nudity, graphic violence or offensive text — platforms reject that regardless of the tag." },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Can I upload songs with gaali on Spotify and JioSaavn?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Songs with strong language are allowed on streaming platforms — they just need to be marked explicit when you submit them. Tick the Parental Advisory box on the Western Beats submission form." },
    },
    {
      '@type': 'Question',
      name: "What happens if I don't mark an explicit song?",
      acceptedAnswer: { '@type': 'Answer', text: "Platforms can relabel the track, limit where it appears, or take it down for review if listeners or their own checks flag it. Labelling it correctly from the start avoids that." },
    },
    {
      '@type': 'Question',
      name: "Does the explicit label reduce my streams?",
      acceptedAnswer: { '@type': 'Answer', text: "No — it only hides the song from listeners who have switched on an explicit-content filter. Many chart-topping rap songs carry the label." },
    },
    {
      '@type': 'Question',
      name: "Should I release a clean version too?",
      acceptedAnswer: { '@type': 'Answer', text: "If you want caller tunes, radio play or family-friendly playlists, yes. A clean version is a separate recording with its own ISRC, so submit it as its own release or track." },
    },
  ],
}

const STEPS = [
  { n: '01', t: "Listen to the Full Lyrics", d: "Go through the whole song, including ad-libs, intros and outros. One line of strong language anywhere in the track is enough to need the explicit label." },
  { n: '02', t: "Check Against the Common Triggers", d: "Strong language or abuses (gaaliyan) in any language, graphic violence, references to drug use, and sexual content are the usual reasons platforms expect an explicit tag." },
  { n: '03', t: "Tick Parental Advisory When You Submit", d: "On the Western Beats submission form, tick the Parental Advisory box for a single. For an EP or album, mark each explicit track individually." },
  { n: '04', t: "Consider a Clean Version", d: "If you want radio play, caller tunes or family-friendly playlists, submit a separate clean edit with the strong language muted or replaced. It gets its own ISRC." },
  { n: '05', t: "Keep the Artwork Clean", d: "The explicit label covers the audio. Cover art itself still must not contain nudity, graphic violence or offensive text — platforms reject that regardless of the tag." },
]

const CARDS = [
  { title: "The 'E' Badge", desc: "Spotify, Apple Music and other platforms show a small 'E' next to the track title so listeners know what to expect before pressing play." },
  { title: "Respects Content Filters", desc: "Listeners who turn on explicit-content filters — common on family and kids' accounts — won't be served the track. Everyone else hears it normally." },
  { title: "Protects Your Release", desc: "Correctly labelled music is far less likely to be flagged, relabelled or pulled after release than a track that was submitted as clean." },
  { title: "Doesn't Hurt Your Reach", desc: "Many of the biggest rap and hip-hop songs carry the explicit label. It is a content descriptor, not a penalty." },
]

const TIPS = [
  "When in doubt, mark it explicit — mislabelling a song as clean is the bigger risk",
  "Gaaliyan count in every language, not just English",
  "Bleeped or partially muted words can still need the label if the meaning is clear",
  "Release a clean version alongside the explicit one if you want caller tune or radio use",
  "Keep explicit wording out of the song title and artwork where you can",
  "Be consistent: label the same song the same way across singles, EPs and albums",
]

const RELATED = [
  { label: "Submit Your Music", href: "/submit" },
  { label: "Release Checklist", href: "/blog/song-release-checklist-india" },
  { label: "Music Distribution Mistakes", href: "/blog/music-distribution-mistakes-to-avoid-india" },
  { label: "Caller Tune Distribution", href: "/blog/caller-tune-crbt-distribution-india" },
  { label: "All Blog Posts", href: "/blog" },
]

export default function ExplicitContentMusicIndia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        <section className="pt-32 pb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#F87171' }} />
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">{"Explicit Content & Parental Advisory"}</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.25)', color: '#F87171' }}>
              {"🅴 Content Guidelines"}
            </div>
            <h1 className="font-outfit font-black leading-tight tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              {"Explicit Content & Parental Advisory for Songs in India — When to Mark Your Track Explicit"}
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-6">
              {"Hindi rap, Punjabi drill, Haryanvi and street music regularly use strong language — and that's fine. Streaming platforms just need you to label it. Here is when to mark a song explicit, what the label does, and how to handle clean versions."}
            </p>
            <div className="flex items-center gap-3 text-[12px] text-[#8899AA] font-inter">
              <span>By Western Beats</span>
              <span>·</span>
              <span>November 16, 2026</span>
              <span>·</span>
              <span>6 min read</span>
            </div>
          </div>
        </section>

        <article className="pb-20">
          <div className="max-w-3xl mx-auto px-6">

            <h2 className="font-outfit font-black text-white text-[24px] mb-6 mt-10">{"How to Label Your Song Correctly"}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {STEPS.map(s => (
                <div key={s.n} className="flex gap-4 items-start rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-black text-[18px] w-10 flex-shrink-0" style={{ color: '#F87171' }}>{s.n}</div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[15px] mb-1">{s.t}</div>
                    <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"What the Explicit Label Does"}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CARDS.map(card => (
                <div key={card.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{card.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Explicit Content Tips for Indian Artists"}</h2>
            <ul className="flex flex-col gap-2 mb-8">
              {TIPS.map(tip => (
                <li key={tip} className="flex gap-3 items-start font-inter text-[14px] text-[#8899AA]">
                  <span className="mt-0.5" style={{ color: '#F87171' }}>✓</span>
                  {tip}
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-6 mb-10" style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
              <div className="font-outfit font-black text-white text-[18px] mb-2">{"Submit Your Track — Explicit or Clean"}</div>
              <p className="font-inter text-[14px] text-[#8899AA] leading-relaxed mb-4">
                {"Western Beats distributes explicit and clean music to 150+ platforms for free. Just tick Parental Advisory on the submission form and we handle the labelling on every store."}
              </p>
              <Link href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-outfit font-bold text-[13px] text-white"
                style={{ background: '#0A64C3' }}>
                {"Submit Your Music Free →"}
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
