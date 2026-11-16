import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "How to Upload Your Song on Apple Music India 2026 — Free Guide",
  description: "How independent artists in India can get their songs on Apple Music for free — file requirements, using a distributor, claiming Apple Music for Artists and growing your listeners.",
  keywords: [
    "how to upload song on Apple Music India",
    "Apple Music distribution India",
    "get my song on Apple Music free",
    "Apple Music for Artists India",
    "release song on Apple Music",
    "Apple Music independent artist India",
    "how to put music on Apple Music",
    "iTunes distribution India",
    "Apple Music royalties India",
    "Apple Music upload free 2026",
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-to-upload-song-on-apple-music-india' },
  openGraph: {
    title: "How to Upload Your Song on Apple Music India 2026 — Free Guide | Western Beats",
    description: "Step-by-step guide for Indian artists to get their music on Apple Music free, claim Apple Music for Artists and grow listeners.",
    url: 'https://www.westernbeats.com/blog/how-to-upload-song-on-apple-music-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: "How to Upload Your Song on Apple Music India 2026 — Free Guide | Western Beats" },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "How to Upload Your Song on Apple Music in India 2026 — Free Step-by-Step Guide",
  description: "Step-by-step guide for Indian artists to get their music on Apple Music free, claim Apple Music for Artists and grow listeners.",
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  datePublished: '2026-11-16',
  dateModified: '2026-11-16',
  url: 'https://www.westernbeats.com/blog/how-to-upload-song-on-apple-music-india',
  image: 'https://www.westernbeats.com/og-image.jpg',
  step: [
    { '@type': 'HowToStep', name: "Prepare Your Audio", text: "Export your final master as a WAV file (44.1kHz, 16-bit or higher). Avoid MP3 — lossy files are rejected or sound worse after conversion." },
    { '@type': 'HowToStep', name: "Prepare Your Artwork", text: "Square cover art, ideally 3000×3000px, JPG or PNG, with no blurriness, URLs, social handles or other store logos." },
    { '@type': 'HowToStep', name: "Submit Through a Distributor", text: "Apple Music only accepts music from approved distributors. Submit your song to Western Beats with your credits, language and genre — distribution is free." },
    { '@type': 'HowToStep', name: "Get Your ISRC and UPC", text: "Your song gets an ISRC code and your release a UPC. These identify your music on Apple Music and every other store. Western Beats issues both free." },
    { '@type': 'HowToStep', name: "Go Live and Claim Apple Music for Artists", text: "Once your song is live, sign in at artists.apple.com, search for your artist name and request access to see your plays, listeners and top cities." },
    { '@type': 'HowToStep', name: "Promote Your Apple Music Link", text: "Share your Apple Music link alongside Spotify and JioSaavn. Apple Music listeners in India skew towards iPhone users in big cities — target your promotion accordingly." },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Can I upload my song to Apple Music myself?",
      acceptedAnswer: { '@type': 'Answer', text: "No. Apple Music only accepts releases from approved distributors. Submit your song to a distributor like Western Beats, and they deliver it to Apple Music for you." },
    },
    {
      '@type': 'Question',
      name: "Is it free to put a song on Apple Music in India?",
      acceptedAnswer: { '@type': 'Answer', text: "With Western Beats, yes — there is no upfront fee to distribute your music to Apple Music and 150+ other platforms." },
    },
    {
      '@type': 'Question',
      name: "How long does it take for a song to appear on Apple Music?",
      acceptedAnswer: { '@type': 'Answer', text: "Western Beats reviews submissions within 24 hours and releases typically go live within 72 hours of approval, though we recommend submitting 2–3 weeks before your planned release date." },
    },
    {
      '@type': 'Question',
      name: "How do I get Apple Music for Artists access?",
      acceptedAnswer: { '@type': 'Answer', text: "Once at least one of your songs is live, go to artists.apple.com, sign in with your Apple ID, search for your artist name and request access." },
    },
  ],
}

const STEPS = [
  { n: '01', t: "Prepare Your Audio", d: "Export your final master as a WAV file (44.1kHz, 16-bit or higher). Avoid MP3 — lossy files are rejected or sound worse after conversion." },
  { n: '02', t: "Prepare Your Artwork", d: "Square cover art, ideally 3000×3000px, JPG or PNG, with no blurriness, URLs, social handles or other store logos." },
  { n: '03', t: "Submit Through a Distributor", d: "Apple Music only accepts music from approved distributors. Submit your song to Western Beats with your credits, language and genre — distribution is free." },
  { n: '04', t: "Get Your ISRC and UPC", d: "Your song gets an ISRC code and your release a UPC. These identify your music on Apple Music and every other store. Western Beats issues both free." },
  { n: '05', t: "Go Live and Claim Apple Music for Artists", d: "Once your song is live, sign in at artists.apple.com, search for your artist name and request access to see your plays, listeners and top cities." },
  { n: '06', t: "Promote Your Apple Music Link", d: "Share your Apple Music link alongside Spotify and JioSaavn. Apple Music listeners in India skew towards iPhone users in big cities — target your promotion accordingly." },
]

const CARDS = [
  { title: "Listener Analytics", desc: "Plays, listeners, Shazams and purchases — broken down by song, city and country." },
  { title: "Shazam Data", desc: "See where people are Shazam-ing your song, often an early signal of where it is catching on." },
  { title: "Artist Profile", desc: "Manage how your artist page looks and keep your releases correctly grouped under your name." },
  { title: "Promotional Assets", desc: "Generate shareable cards and links for social media straight from your Apple Music for Artists dashboard." },
]

const TIPS = [
  "Keep your artist name spelled identically on every release so all songs land on one profile",
  "Submit at least 2–3 weeks before release to leave time for processing",
  "Include lyrics where possible — synced lyrics make your song more engaging in the app",
  "Use the same release date across all platforms so your launch is coordinated",
  "Mark explicit songs correctly — Apple shows the 'E' badge and respects content filters",
  "Check your Shazam data to find cities where your song is spreading",
]

const RELATED = [
  { label: "Apple Music Distribution", href: "/apple-music-distribution" },
  { label: "Spotify Verification Guide", href: "/blog/how-to-get-verified-spotify-india" },
  { label: "WAV vs MP3", href: "/blog/wav-vs-mp3-audio-format-music-distribution" },
  { label: "Release Checklist", href: "/blog/song-release-checklist-india" },
  { label: "All Blog Posts", href: "/blog" },
]

export default function UploadSongAppleMusicIndia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        <section className="pt-32 pb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#FA586A' }} />
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">{"Upload Your Song on Apple Music"}</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(250,88,106,0.1)', border: '1px solid rgba(250,88,106,0.25)', color: '#FA586A' }}>
              {"🍎 Apple Music Guide"}
            </div>
            <h1 className="font-outfit font-black leading-tight tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              {"How to Upload Your Song on Apple Music in India 2026 — Free Step-by-Step Guide"}
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-6">
              {"Apple Music doesn't let artists upload songs directly — every release reaches the store through a distributor. Here is how to get your song on Apple Music in India for free, and what to do once it's live."}
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

            <h2 className="font-outfit font-black text-white text-[24px] mb-6 mt-10">{"Step-by-Step: Get Your Song on Apple Music"}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {STEPS.map(s => (
                <div key={s.n} className="flex gap-4 items-start rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-black text-[18px] w-10 flex-shrink-0" style={{ color: '#FA586A' }}>{s.n}</div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[15px] mb-1">{s.t}</div>
                    <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Apple Music for Artists: What You Get"}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CARDS.map(card => (
                <div key={card.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{card.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Apple Music Tips for Indian Artists"}</h2>
            <ul className="flex flex-col gap-2 mb-8">
              {TIPS.map(tip => (
                <li key={tip} className="flex gap-3 items-start font-inter text-[14px] text-[#8899AA]">
                  <span className="mt-0.5" style={{ color: '#FA586A' }}>✓</span>
                  {tip}
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-6 mb-10" style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
              <div className="font-outfit font-black text-white text-[18px] mb-2">{"Get on Apple Music Free"}</div>
              <p className="font-inter text-[14px] text-[#8899AA] leading-relaxed mb-4">
                {"Western Beats distributes your music to Apple Music, Spotify, JioSaavn, Gaana, YouTube Music and 150+ platforms at no upfront cost, with free ISRC codes."}
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
