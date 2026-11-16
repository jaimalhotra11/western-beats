import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "How to Release an EP or Album in India 2026 — Free Distribution Guide",
  description: "Step-by-step guide to releasing an EP or full album in India — track count rules, ISRC and UPC codes, artwork, release planning and free distribution to JioSaavn, Spotify, Apple Music and 150+ platforms.",
  keywords: [
    "how to release an EP India",
    "how to release album India",
    "EP distribution India",
    "album distribution India free",
    "release EP on Spotify India",
    "upload album JioSaavn",
    "EP vs album difference",
    "independent album release India 2026",
    "free album distribution India",
    "how many songs in an EP",
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-to-release-ep-album-india' },
  openGraph: {
    title: "How to Release an EP or Album in India 2026 — Free Distribution Guide | Western Beats",
    description: "Everything Indian artists need to release an EP or album: track rules, ISRC/UPC, artwork, planning and free distribution.",
    url: 'https://www.westernbeats.com/blog/how-to-release-ep-album-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: "How to Release an EP or Album in India 2026 — Free Distribution Guide | Western Beats" },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "How to Release an EP or Album in India 2026 — Complete Guide for Independent Artists",
  description: "Everything Indian artists need to release an EP or album: track rules, ISRC/UPC, artwork, planning and free distribution.",
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  datePublished: '2026-11-16',
  dateModified: '2026-11-16',
  url: 'https://www.westernbeats.com/blog/how-to-release-ep-album-india',
  image: 'https://www.westernbeats.com/og-image.jpg',
  step: [
    { '@type': 'HowToStep', name: "Decide: Single, EP or Album", text: "Most stores treat 1–3 short tracks as a single, roughly 4–6 tracks under 30 minutes as an EP, and 7+ tracks or anything over 30 minutes as an album. Pick the format that fits your songs, not the other way round." },
    { '@type': 'HowToStep', name: "Finalise the Tracklist and Order", text: "Lead with your strongest song. Group songs that flow into each other, and keep any interlude or intro short. The order you submit is the order listeners will see on every platform." },
    { '@type': 'HowToStep', name: "Master Every Track to the Same Standard", text: "Export each song as a WAV (44.1kHz, 16-bit or higher). Keep loudness consistent across tracks so the release sounds like one project rather than a playlist of different sessions." },
    { '@type': 'HowToStep', name: "Prepare One Artwork for the Whole Release", text: "An EP or album uses a single square cover (3000×3000px recommended, JPG or PNG). No URLs, social handles or platform logos on the artwork." },
    { '@type': 'HowToStep', name: "Collect Credits and Metadata Per Track", text: "Each song needs its own title, singer, lyricist, composer, producer and language. Mark any track with strong language or gaaliyan as explicit — on a per-track basis." },
    { '@type': 'HowToStep', name: "Submit and Get ISRC + UPC Codes", text: "Every track receives its own ISRC code and the release as a whole receives one UPC. With Western Beats, both are issued free when you submit through the EP / Album release form." },
    { '@type': 'HowToStep', name: "Plan the Launch", text: "Set a release date at least 2–3 weeks out so there is time for playlist pitching and pre-release promotion. Many artists release a focus single first, then drop the full EP or album." },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How many songs are in an EP?",
      acceptedAnswer: { '@type': 'Answer', text: "Most streaming stores treat a release of roughly 4 to 6 tracks with a total length under 30 minutes as an EP. Fewer, shorter tracks are usually treated as a single, and 7 or more tracks, or more than 30 minutes in total, as an album." },
    },
    {
      '@type': 'Question',
      name: "Do I need a separate ISRC for each song on an album?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Every track needs its own ISRC code, and the release as a whole needs one UPC code. Western Beats issues both free when you submit your EP or album." },
    },
    {
      '@type': 'Question',
      name: "Can I release an EP or album for free in India?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Western Beats distributes EPs and albums to 150+ platforms including JioSaavn, Spotify, Apple Music and Gaana with no upfront fee." },
    },
    {
      '@type': 'Question',
      name: "Can I include songs I have already released as singles?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes, you can include previously released singles on an EP or album. Tell us when you submit so the existing ISRC codes are reused and the streams stay connected to the original recordings." },
    },
  ],
}

const STEPS = [
  { n: '01', t: "Decide: Single, EP or Album", d: "Most stores treat 1–3 short tracks as a single, roughly 4–6 tracks under 30 minutes as an EP, and 7+ tracks or anything over 30 minutes as an album. Pick the format that fits your songs, not the other way round." },
  { n: '02', t: "Finalise the Tracklist and Order", d: "Lead with your strongest song. Group songs that flow into each other, and keep any interlude or intro short. The order you submit is the order listeners will see on every platform." },
  { n: '03', t: "Master Every Track to the Same Standard", d: "Export each song as a WAV (44.1kHz, 16-bit or higher). Keep loudness consistent across tracks so the release sounds like one project rather than a playlist of different sessions." },
  { n: '04', t: "Prepare One Artwork for the Whole Release", d: "An EP or album uses a single square cover (3000×3000px recommended, JPG or PNG). No URLs, social handles or platform logos on the artwork." },
  { n: '05', t: "Collect Credits and Metadata Per Track", d: "Each song needs its own title, singer, lyricist, composer, producer and language. Mark any track with strong language or gaaliyan as explicit — on a per-track basis." },
  { n: '06', t: "Submit and Get ISRC + UPC Codes", d: "Every track receives its own ISRC code and the release as a whole receives one UPC. With Western Beats, both are issued free when you submit through the EP / Album release form." },
  { n: '07', t: "Plan the Launch", d: "Set a release date at least 2–3 weeks out so there is time for playlist pitching and pre-release promotion. Many artists release a focus single first, then drop the full EP or album." },
]

const CARDS = [
  { title: "Longer Listening Sessions", desc: "A listener who enjoys one song can move straight on to the next track on the same release, instead of leaving your profile." },
  { title: "A Bigger Launch Moment", desc: "Several songs landing together gives fans, press and playlist curators more reason to pay attention than a single release." },
  { title: "Room to Tell a Story", desc: "An EP or album lets you explore a theme, a mood or a language across tracks — something a single can't do." },
  { title: "Every Track Earns", desc: "Each track on the release is streamed and paid separately, so a strong body of work keeps earning across all its songs." },
]

const TIPS = [
  "Release a focus single 2–4 weeks before the full EP or album to build momentum",
  "Keep the title of the release different from any single track title unless it is the title track",
  "Use consistent artist name spelling across every track — mismatches split your profile",
  "Mark explicit tracks individually so clean songs stay visible to all listeners",
  "Schedule your release for a Friday — most platforms refresh new-music playlists on Fridays",
  "Plan short-form video content (Reels, Shorts) for at least the first three tracks",
]

const RELATED = [
  { label: "Release EP / Album", href: "/release" },
  { label: "Release Checklist", href: "/blog/song-release-checklist-india" },
  { label: "Free ISRC & UPC Codes", href: "/blog/free-isrc-upc-code-india" },
  { label: "Cover Art Size Guide", href: "/blog/cover-art-size-dimensions-music-distribution" },
  { label: "All Blog Posts", href: "/blog" },
]

export default function ReleaseEpAlbumIndia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        <section className="pt-32 pb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#5CB2DC' }} />
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">{"Release an EP or Album"}</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(92,178,220,0.1)', border: '1px solid rgba(92,178,220,0.25)', color: '#5CB2DC' }}>
              {"💿 EP & Album Guide"}
            </div>
            <h1 className="font-outfit font-black leading-tight tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              {"How to Release an EP or Album in India 2026 — Complete Guide for Independent Artists"}
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-6">
              {"Releasing several songs together as an EP or album gives listeners a body of work, keeps them on your profile longer, and gives you a bigger launch moment than a one-off single. Here is how to plan, prepare and distribute an EP or album in India — free."}
            </p>
            <div className="flex items-center gap-3 text-[12px] text-[#8899AA] font-inter">
              <span>By Western Beats</span>
              <span>·</span>
              <span>November 16, 2026</span>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </section>

        <article className="pb-20">
          <div className="max-w-3xl mx-auto px-6">

            <h2 className="font-outfit font-black text-white text-[24px] mb-6 mt-10">{"Step-by-Step: Releasing Your EP or Album"}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {STEPS.map(s => (
                <div key={s.n} className="flex gap-4 items-start rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-black text-[18px] w-10 flex-shrink-0" style={{ color: '#5CB2DC' }}>{s.n}</div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[15px] mb-1">{s.t}</div>
                    <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Why Release an EP or Album?"}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CARDS.map(card => (
                <div key={card.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{card.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"EP and Album Release Tips for Indian Artists"}</h2>
            <ul className="flex flex-col gap-2 mb-8">
              {TIPS.map(tip => (
                <li key={tip} className="flex gap-3 items-start font-inter text-[14px] text-[#8899AA]">
                  <span className="mt-0.5" style={{ color: '#5CB2DC' }}>✓</span>
                  {tip}
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-6 mb-10" style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
              <div className="font-outfit font-black text-white text-[18px] mb-2">{"Release Your EP or Album Free"}</div>
              <p className="font-inter text-[14px] text-[#8899AA] leading-relaxed mb-4">
                {"Western Beats distributes your full EP or album to JioSaavn, Spotify, Apple Music, Gaana, YouTube Music and 150+ platforms with free ISRC and UPC codes. Upload all your tracks in one go."}
              </p>
              <Link href="/release"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-outfit font-bold text-[13px] text-white"
                style={{ background: '#0A64C3' }}>
                {"Release Your EP / Album →"}
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
