import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "How to Upload Your Song on Amazon Music India 2026 — Free Guide",
  description: "How Indian artists can get their songs on Amazon Music for free — file requirements, using a distributor, claiming your profile with Amazon Music for Artists, and reaching Alexa and Prime listeners.",
  keywords: [
    "how to upload song on Amazon Music India",
    "Amazon Music distribution India",
    "get my song on Amazon Music free",
    "Amazon Music for Artists India",
    "release song on Amazon Music",
    "Amazon Music independent artist India",
    "Alexa play my song",
    "Amazon Prime Music upload song",
    "Amazon Music royalties India",
    "Amazon Music upload free 2026",
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-to-upload-song-on-amazon-music-india' },
  openGraph: {
    title: "How to Upload Your Song on Amazon Music India 2026 — Free Guide | Western Beats",
    description: "Step-by-step guide for Indian artists to get their music on Amazon Music free and claim Amazon Music for Artists.",
    url: 'https://www.westernbeats.com/blog/how-to-upload-song-on-amazon-music-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: "How to Upload Your Song on Amazon Music India 2026 — Free Guide | Western Beats" },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "How to Upload Your Song on Amazon Music in India — Free Guide (2026)",
  description: "Step-by-step guide for Indian artists to get their music on Amazon Music free and claim Amazon Music for Artists.",
  inLanguage: 'en-IN',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  datePublished: '2026-11-19',
  dateModified: '2026-11-19',
  url: 'https://www.westernbeats.com/blog/how-to-upload-song-on-amazon-music-india',
  image: 'https://www.westernbeats.com/og-image.jpg',
  step: [
    { '@type': 'HowToStep', name: "Prepare Your Audio", text: "Export your final master as a WAV file (44.1kHz, 16-bit or higher)." },
    { '@type': 'HowToStep', name: "Prepare Your Artwork", text: "Square cover art, ideally 3000×3000px, JPG or PNG, with no URLs, social handles or other store logos." },
    { '@type': 'HowToStep', name: "Submit Through a Distributor", text: "Amazon Music accepts releases from distributors. Submit your song to Western Beats with your credits, language and genre — distribution is free." },
    { '@type': 'HowToStep', name: "Get Your ISRC and UPC", text: "Your song gets an ISRC code and your release a UPC, so streams on Amazon Music are tracked to you. Western Beats issues both free." },
    { '@type': 'HowToStep', name: "Claim Amazon Music for Artists", text: "Once your song is live, download the Amazon Music for Artists app, find your artist profile and claim it to see your streams and listeners." },
    { '@type': 'HowToStep', name: "Make Your Song Easy to Ask For", text: "Alexa listeners request songs by voice, so a clear, easy-to-say song title and consistent artist name help people find your music." },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Can I upload my song to Amazon Music myself?",
      acceptedAnswer: { '@type': 'Answer', text: "No. Amazon Music accepts releases through distributors. Submit your song to Western Beats and we deliver it to Amazon Music for you." },
    },
    {
      '@type': 'Question',
      name: "Is it free to put a song on Amazon Music in India?",
      acceptedAnswer: { '@type': 'Answer', text: "With Western Beats, yes — there's no upfront fee to distribute to Amazon Music and 150+ other platforms." },
    },
    {
      '@type': 'Question',
      name: "How do I claim my Amazon Music for Artists profile?",
      acceptedAnswer: { '@type': 'Answer', text: "Once your music is live, download the Amazon Music for Artists app, search for your artist name and follow the steps to claim your profile." },
    },
    {
      '@type': 'Question',
      name: "Will my song play on Alexa?",
      acceptedAnswer: { '@type': 'Answer', text: "Once your song is live on Amazon Music, Alexa users with access to Amazon Music can ask for it by name." },
    },
  ],
}

const STEPS = [
  { n: '01', t: "Prepare Your Audio", d: "Export your final master as a WAV file (44.1kHz, 16-bit or higher)." },
  { n: '02', t: "Prepare Your Artwork", d: "Square cover art, ideally 3000×3000px, JPG or PNG, with no URLs, social handles or other store logos." },
  { n: '03', t: "Submit Through a Distributor", d: "Amazon Music accepts releases from distributors. Submit your song to Western Beats with your credits, language and genre — distribution is free." },
  { n: '04', t: "Get Your ISRC and UPC", d: "Your song gets an ISRC code and your release a UPC, so streams on Amazon Music are tracked to you. Western Beats issues both free." },
  { n: '05', t: "Claim Amazon Music for Artists", d: "Once your song is live, download the Amazon Music for Artists app, find your artist profile and claim it to see your streams and listeners." },
  { n: '06', t: "Make Your Song Easy to Ask For", d: "Alexa listeners request songs by voice, so a clear, easy-to-say song title and consistent artist name help people find your music." },
]

const CARDS = [
  { title: "Prime Members", desc: "Amazon Music is bundled with Prime, putting your song in front of a large base of Prime subscribers in India." },
  { title: "Alexa and Smart Speakers", desc: "Listeners ask Alexa for songs by voice — being on Amazon Music means your song can be played on request." },
  { title: "Artist Analytics", desc: "Amazon Music for Artists shows streams, listeners and top songs so you can see what's working." },
  { title: "One More Revenue Stream", desc: "Every stream on Amazon Music adds to your royalties alongside Spotify, JioSaavn and other platforms." },
]

const TIPS = [
  "Pick a song title that's easy to say out loud for Alexa requests",
  "Keep your artist name identical across every platform",
  "Submit 2–3 weeks before your release date",
  "Share your Amazon Music link alongside Spotify and JioSaavn",
  "Mark explicit songs correctly so content filters work as listeners expect",
  "Claim your Amazon Music for Artists profile as soon as your first song is live",
]

const RELATED = [
  { label: "Platforms We Cover", href: "/platforms" },
  { label: "Upload on Apple Music", href: "/blog/how-to-upload-song-on-apple-music-india" },
  { label: "Get Verified on Spotify", href: "/blog/how-to-get-verified-spotify-india" },
  { label: "Song Release Checklist", href: "/blog/song-release-checklist-india" },
  { label: "All Blog Posts", href: "/blog" },
]

export default function UploadSongAmazonMusicIndia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        <section className="pt-32 pb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#25D1DA' }} />
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">{"Upload Your Song on Amazon Music"}</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(37,209,218,0.1)', border: '1px solid rgba(37,209,218,0.25)', color: '#25D1DA' }}>
              {"🎧 Amazon Music Guide"}
            </div>
            <h1 className="font-outfit font-black leading-tight tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              {"How to Upload Your Song on Amazon Music in India — Free Guide (2026)"}
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-6">
              {"Amazon Music reaches listeners through Prime, the Amazon Music app and Alexa smart speakers. Like other major stores, it only accepts music through distributors. Here is how to get your song there for free."}
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

            <h2 className="font-outfit font-black text-white text-[24px] mb-6 mt-10">{"Step-by-Step: Get Your Song on Amazon Music"}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {STEPS.map(s => (
                <div key={s.n} className="flex gap-4 items-start rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-black text-[18px] w-10 flex-shrink-0" style={{ color: '#25D1DA' }}>{s.n}</div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[15px] mb-1">{s.t}</div>
                    <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Why Be on Amazon Music"}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CARDS.map(card => (
                <div key={card.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{card.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Amazon Music Tips for Indian Artists"}</h2>
            <ul className="flex flex-col gap-2 mb-8">
              {TIPS.map(tip => (
                <li key={tip} className="flex gap-3 items-start font-inter text-[14px] text-[#8899AA]">
                  <span className="mt-0.5" style={{ color: '#25D1DA' }}>✓</span>
                  {tip}
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-6 mb-10" style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
              <div className="font-outfit font-black text-white text-[18px] mb-2">{"Get on Amazon Music Free"}</div>
              <p className="font-inter text-[14px] text-[#8899AA] leading-relaxed mb-4">
                {"Western Beats distributes your music to Amazon Music, Spotify, JioSaavn, Apple Music, Gaana, YouTube Music and 150+ platforms with no upfront fee and free ISRC codes."}
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
