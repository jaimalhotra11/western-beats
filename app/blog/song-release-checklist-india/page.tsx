import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "Song Release Checklist India 2026 — Plan Your Release Week by Week",
  description: "A week-by-week song release checklist for Indian independent artists — audio, artwork, metadata, distribution, playlist pitching, Reels and post-release promotion for JioSaavn, Spotify and YouTube Music.",
  keywords: [
    "song release checklist India",
    "how to release a song India",
    "music release plan independent artist",
    "song release strategy India 2026",
    "how to promote new song India",
    "release a song on Spotify India",
    "music marketing plan India",
    "pre-release checklist song",
    "new song launch plan",
    "independent artist release guide India",
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/song-release-checklist-india' },
  openGraph: {
    title: "Song Release Checklist India 2026 — Plan Your Release Week by Week | Western Beats",
    description: "The complete week-by-week checklist for releasing a song in India — from final master to post-release promotion.",
    url: 'https://www.westernbeats.com/blog/song-release-checklist-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: "Song Release Checklist India 2026 — Plan Your Release Week by Week | Western Beats" },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Song Release Checklist India 2026 — What to Do 4 Weeks Before to 4 Weeks After Release",
  description: "The complete week-by-week checklist for releasing a song in India — from final master to post-release promotion.",
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  datePublished: '2026-11-16',
  dateModified: '2026-11-16',
  url: 'https://www.westernbeats.com/blog/song-release-checklist-india',
  image: 'https://www.westernbeats.com/og-image.jpg',
  step: [
    { '@type': 'HowToStep', name: "4 Weeks Before: Lock the Audio", text: "Final mix and master approved. Export a WAV (44.1kHz, 16-bit or higher). Confirm every sample and beat is cleared or owned by you." },
    { '@type': 'HowToStep', name: "4 Weeks Before: Finish the Artwork", text: "Square cover at 3000×3000px, JPG or PNG. No URLs, handles or platform logos. Make sure the artist name and title on the art match your metadata exactly." },
    { '@type': 'HowToStep', name: "3 Weeks Before: Submit for Distribution", text: "Submit with full credits, language, genre and mood. Mark explicit tracks with Parental Advisory. Choose a Friday release date at least 2–3 weeks away." },
    { '@type': 'HowToStep', name: "2 Weeks Before: Pitch and Set Up Profiles", text: "Once the release appears in Spotify for Artists, pitch it to editorial playlists. Claim or update your artist profiles with a fresh photo and bio." },
    { '@type': 'HowToStep', name: "1 Week Before: Build the Hype", text: "Post teasers — a hook clip, behind-the-scenes, lyric snippets. Tell your audience the exact release date and where to listen." },
    { '@type': 'HowToStep', name: "Release Day: Show Up Everywhere", text: "Share the song on every channel, post a Reel and a Short, message your close fans directly, and ask them to save the song, not just play it." },
    { '@type': 'HowToStep', name: "Weeks 1–4 After: Keep It Moving", text: "Post fresh content around the song every few days, reshare fan videos, check your analytics for top cities, and plan your next release." },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How early should I submit my song before release?",
      acceptedAnswer: { '@type': 'Answer', text: "Aim for at least 2–3 weeks before your release date. That gives platforms time to process the release and gives you time to pitch to Spotify editorial playlists, which needs at least 7 days." },
    },
    {
      '@type': 'Question',
      name: "What day should I release my song in India?",
      acceptedAnswer: { '@type': 'Answer', text: "Friday. Most streaming platforms refresh their new-music playlists on Fridays, so a Friday release gives your song the best chance of being picked up in its first week." },
    },
    {
      '@type': 'Question',
      name: "What do I need to release a song?",
      acceptedAnswer: { '@type': 'Answer', text: "A WAV master, square cover art (3000×3000px recommended), complete credits and metadata, and a distributor. Western Beats distributes free and issues your ISRC code." },
    },
    {
      '@type': 'Question',
      name: "How do I promote a new song with no budget?",
      acceptedAnswer: { '@type': 'Answer', text: "Short-form video is the biggest free lever: post Reels and Shorts built around the song's hook, reshare fan content, and message your closest listeners directly on release day." },
    },
  ],
}

const STEPS = [
  { n: '01', t: "4 Weeks Before: Lock the Audio", d: "Final mix and master approved. Export a WAV (44.1kHz, 16-bit or higher). Confirm every sample and beat is cleared or owned by you." },
  { n: '02', t: "4 Weeks Before: Finish the Artwork", d: "Square cover at 3000×3000px, JPG or PNG. No URLs, handles or platform logos. Make sure the artist name and title on the art match your metadata exactly." },
  { n: '03', t: "3 Weeks Before: Submit for Distribution", d: "Submit with full credits, language, genre and mood. Mark explicit tracks with Parental Advisory. Choose a Friday release date at least 2–3 weeks away." },
  { n: '04', t: "2 Weeks Before: Pitch and Set Up Profiles", d: "Once the release appears in Spotify for Artists, pitch it to editorial playlists. Claim or update your artist profiles with a fresh photo and bio." },
  { n: '05', t: "1 Week Before: Build the Hype", d: "Post teasers — a hook clip, behind-the-scenes, lyric snippets. Tell your audience the exact release date and where to listen." },
  { n: '06', t: "Release Day: Show Up Everywhere", d: "Share the song on every channel, post a Reel and a Short, message your close fans directly, and ask them to save the song, not just play it." },
  { n: '07', t: "Weeks 1–4 After: Keep It Moving", d: "Post fresh content around the song every few days, reshare fan videos, check your analytics for top cities, and plan your next release." },
]

const CARDS = [
  { title: "Audio", desc: "Final WAV master, plus a clean version if the original is explicit and you want caller tunes or radio." },
  { title: "Artwork", desc: "Cover art (3000×3000px), plus vertical versions for Reels, Shorts and Stories." },
  { title: "Metadata", desc: "Exact song title, artist names, featured artists, lyricist, composer, producer, language, genre and release date." },
  { title: "Content", desc: "At least 5–10 short videos: hook clips, lyric videos, studio footage, a reaction or a story behind the song." },
]

const TIPS = [
  "Release on a Friday — most platforms refresh new-music playlists that day",
  "Never change your artist name spelling between releases",
  "Ask fans to save and add the song to playlists — saves matter more than single plays",
  "Turn your best 15 seconds into multiple Reels and Shorts with different visuals",
  "Release consistently — a song every 4–8 weeks builds momentum faster than one big drop a year",
  "Check which cities stream you most and focus promotion there",
]

const RELATED = [
  { label: "Submit Your Music", href: "/submit" },
  { label: "Release an EP or Album", href: "/blog/how-to-release-ep-album-india" },
  { label: "First 1,000 Spotify Streams", href: "/blog/how-to-get-first-1000-streams-spotify-india" },
  { label: "Spotify Playlists India", href: "/blog/how-to-get-on-spotify-playlists-india" },
  { label: "All Blog Posts", href: "/blog" },
]

export default function SongReleaseChecklistIndia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        <section className="pt-32 pb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#34D399' }} />
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">{"Song Release Checklist"}</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', color: '#34D399' }}>
              {"✅ Release Planning"}
            </div>
            <h1 className="font-outfit font-black leading-tight tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              {"Song Release Checklist India 2026 — What to Do 4 Weeks Before to 4 Weeks After Release"}
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-6">
              {"Most songs that flop weren't bad songs — they were rushed releases. Use this week-by-week checklist to give your next single, EP or album the launch it deserves."}
            </p>
            <div className="flex items-center gap-3 text-[12px] text-[#8899AA] font-inter">
              <span>By Western Beats</span>
              <span>·</span>
              <span>November 16, 2026</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>
        </section>

        <article className="pb-20">
          <div className="max-w-3xl mx-auto px-6">

            <h2 className="font-outfit font-black text-white text-[24px] mb-6 mt-10">{"The Week-by-Week Release Checklist"}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {STEPS.map(s => (
                <div key={s.n} className="flex gap-4 items-start rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-black text-[18px] w-10 flex-shrink-0" style={{ color: '#34D399' }}>{s.n}</div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[15px] mb-1">{s.t}</div>
                    <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"The Assets You Need Ready"}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CARDS.map(card => (
                <div key={card.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{card.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Release Tips That Make a Difference"}</h2>
            <ul className="flex flex-col gap-2 mb-8">
              {TIPS.map(tip => (
                <li key={tip} className="flex gap-3 items-start font-inter text-[14px] text-[#8899AA]">
                  <span className="mt-0.5" style={{ color: '#34D399' }}>✓</span>
                  {tip}
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-6 mb-10" style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
              <div className="font-outfit font-black text-white text-[18px] mb-2">{"Ready to Release? Submit Free"}</div>
              <p className="font-inter text-[14px] text-[#8899AA] leading-relaxed mb-4">
                {"Western Beats distributes your single, EP or album to JioSaavn, Spotify, Apple Music, Gaana, YouTube Music and 150+ platforms, with free ISRC codes and caller tune distribution."}
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
