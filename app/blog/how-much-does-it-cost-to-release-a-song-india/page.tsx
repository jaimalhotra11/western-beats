import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "How Much Does It Cost to Release a Song in India 2026? Full Breakdown",
  description: "What it really costs to release a song in India in 2026 — recording, mixing, mastering, artwork, ISRC codes, distribution and promotion — and how to release on JioSaavn, Spotify and 150+ platforms with ₹0 distribution cost.",
  keywords: [
    "how much does it cost to release a song in India",
    "song release cost India",
    "music distribution cost India",
    "cost to upload song on Spotify India",
    "cost to put song on JioSaavn",
    "free song release India",
    "cheapest way to release a song India",
    "song release budget India 2026",
    "music video cost India independent artist",
    "release song without money India",
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-much-does-it-cost-to-release-a-song-india' },
  openGraph: {
    title: "How Much Does It Cost to Release a Song in India 2026? Full Breakdown | Western Beats",
    description: "A full breakdown of the costs of releasing a song in India — and which ones you can bring down to zero.",
    url: 'https://www.westernbeats.com/blog/how-much-does-it-cost-to-release-a-song-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: "How Much Does It Cost to Release a Song in India 2026? Full Breakdown | Western Beats" },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "How Much Does It Cost to Release a Song in India in 2026?",
  description: "A full breakdown of the costs of releasing a song in India — and which ones you can bring down to zero.",
  inLanguage: 'en-IN',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  datePublished: '2026-11-19',
  dateModified: '2026-11-19',
  url: 'https://www.westernbeats.com/blog/how-much-does-it-cost-to-release-a-song-india',
  image: 'https://www.westernbeats.com/og-image.jpg',
  step: [
    { '@type': 'HowToStep', name: "Writing and Composition", text: "Free if you write and compose yourself. If you hire a lyricist or composer, agree the fee and the rights split in writing before recording." },
    { '@type': 'HowToStep', name: "Recording", text: "A home setup with a decent microphone and interface can be enough for many genres. Studio sessions are usually charged by the hour or by the song, and rates vary a lot from city to city." },
    { '@type': 'HowToStep', name: "Beat or Music Production", text: "Producing your own beat costs only your time. A purchased or commissioned beat needs a licence that allows commercial release on streaming platforms — always get it in writing." },
    { '@type': 'HowToStep', name: "Mixing and Mastering", text: "A professional mix and master makes your song sound right next to label releases. Many engineers offer a combined per-song price." },
    { '@type': 'HowToStep', name: "Cover Artwork", text: "Free if you design it yourself with a square 3000×3000px image. Hiring a designer or photographer adds a small, one-time cost." },
    { '@type': 'HowToStep', name: "ISRC, UPC and Distribution — ₹0", text: "With Western Beats, distribution to JioSaavn, Spotify, Apple Music, Gaana, YouTube Music and 150+ platforms is free, and ISRC and UPC codes are included. No annual fee, no per-release fee." },
    { '@type': 'HowToStep', name: "Promotion", text: "The most flexible line in your budget. Short-form video on Reels and Shorts is free; paid ads, influencer posts and music videos are optional extras." },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How much does it cost to put a song on Spotify in India?",
      acceptedAnswer: { '@type': 'Answer', text: "Distribution itself can cost nothing. Western Beats delivers your song to Spotify and 150+ other platforms with no upfront or annual fee. Your only costs are recording, production and any promotion you choose to do." },
    },
    {
      '@type': 'Question',
      name: "Is there a free way to release a song on JioSaavn?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Submit your song to Western Beats for free and we deliver it to JioSaavn, Gaana, Spotify, Apple Music and more, with free ISRC codes." },
    },
    {
      '@type': 'Question',
      name: "Do I have to pay for an ISRC code in India?",
      acceptedAnswer: { '@type': 'Answer', text: "Not with Western Beats — ISRC and UPC codes are included free with every release." },
    },
    {
      '@type': 'Question',
      name: "What is the minimum I need to release a song?",
      acceptedAnswer: { '@type': 'Answer', text: "A finished WAV master, square cover art (3000×3000px recommended), your song credits, and a distributor. With a free distributor, a home-recorded song can be released without any distribution cost." },
    },
  ],
}

const STEPS = [
  { n: '01', t: "Writing and Composition", d: "Free if you write and compose yourself. If you hire a lyricist or composer, agree the fee and the rights split in writing before recording." },
  { n: '02', t: "Recording", d: "A home setup with a decent microphone and interface can be enough for many genres. Studio sessions are usually charged by the hour or by the song, and rates vary a lot from city to city." },
  { n: '03', t: "Beat or Music Production", d: "Producing your own beat costs only your time. A purchased or commissioned beat needs a licence that allows commercial release on streaming platforms — always get it in writing." },
  { n: '04', t: "Mixing and Mastering", d: "A professional mix and master makes your song sound right next to label releases. Many engineers offer a combined per-song price." },
  { n: '05', t: "Cover Artwork", d: "Free if you design it yourself with a square 3000×3000px image. Hiring a designer or photographer adds a small, one-time cost." },
  { n: '06', t: "ISRC, UPC and Distribution — ₹0", d: "With Western Beats, distribution to JioSaavn, Spotify, Apple Music, Gaana, YouTube Music and 150+ platforms is free, and ISRC and UPC codes are included. No annual fee, no per-release fee." },
  { n: '07', t: "Promotion", d: "The most flexible line in your budget. Short-form video on Reels and Shorts is free; paid ads, influencer posts and music videos are optional extras." },
]

const CARDS = [
  { title: "Distribution", desc: "Many global distributors charge a yearly fee or a per-release fee. Western Beats charges nothing upfront, so this cost drops to zero." },
  { title: "ISRC and UPC Codes", desc: "Some services charge per code. With Western Beats they come free with every release." },
  { title: "Promotion", desc: "A steady stream of free short-form video often does more for a new artist than a one-off paid campaign." },
  { title: "Caller Tunes", desc: "Jio and Airtel caller tune distribution is included at no extra cost, giving your song another place to earn." },
]

const TIPS = [
  "Spend most of your budget on the mix and master — sound quality matters most",
  "Always get beat licences and collaborator agreements in writing before release",
  "Use a free distributor so every rupee goes into the music and promotion",
  "Design your cover at 3000×3000px from the start to avoid redoing it",
  "Plan 5–10 short videos around the song instead of one expensive video",
  "Release regularly — consistency often beats one big-budget release",
]

const RELATED = [
  { label: "Submit Your Music", href: "/submit" },
  { label: "Free ISRC & UPC Codes", href: "/blog/free-isrc-upc-code-india" },
  { label: "Song Release Checklist", href: "/blog/song-release-checklist-india" },
  { label: "Record Music at Home", href: "/blog/how-to-record-music-at-home-india" },
  { label: "All Blog Posts", href: "/blog" },
]

export default function CostToReleaseSongIndia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        <section className="pt-32 pb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#F59E0B' }} />
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">{"Cost to Release a Song"}</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#F59E0B' }}>
              {"₹ Release Budget Guide"}
            </div>
            <h1 className="font-outfit font-black leading-tight tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              {"How Much Does It Cost to Release a Song in India in 2026?"}
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-6">
              {"Releasing a song in India can cost almost nothing or a great deal, depending on where you spend. Here is every cost involved — from recording to promotion — and which ones you can bring down to zero."}
            </p>
            <div className="flex items-center gap-3 text-[12px] text-[#8899AA] font-inter">
              <span>{"By Western Beats"}</span>
              <span>·</span>
              <span>{"November 19, 2026"}</span>
              <span>·</span>
              <span>{"7 min read"}</span>
            </div>
          </div>
        </section>

        <article className="pb-20">
          <div className="max-w-3xl mx-auto px-6">

            <h2 className="font-outfit font-black text-white text-[24px] mb-6 mt-10">{"Every Cost of Releasing a Song, Step by Step"}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {STEPS.map(s => (
                <div key={s.n} className="flex gap-4 items-start rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-black text-[18px] w-10 flex-shrink-0" style={{ color: '#F59E0B' }}>{s.n}</div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[15px] mb-1">{s.t}</div>
                    <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Where You Can Save the Most"}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CARDS.map(card => (
                <div key={card.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{card.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Tips to Release on a Small Budget"}</h2>
            <ul className="flex flex-col gap-2 mb-8">
              {TIPS.map(tip => (
                <li key={tip} className="flex gap-3 items-start font-inter text-[14px] text-[#8899AA]">
                  <span className="mt-0.5" style={{ color: '#F59E0B' }}>✓</span>
                  {tip}
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-6 mb-10" style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
              <div className="font-outfit font-black text-white text-[18px] mb-2">{"Release Your Song With ₹0 Distribution Cost"}</div>
              <p className="font-inter text-[14px] text-[#8899AA] leading-relaxed mb-4">
                {"Western Beats distributes your music to JioSaavn, Spotify, Apple Music, Gaana, YouTube Music and 150+ platforms with no upfront fee, plus free ISRC and UPC codes."}
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
