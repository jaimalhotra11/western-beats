import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "How to Start a Music Label in India 2026 — Registration, Rights & Distribution",
  description: "Step-by-step guide to starting your own music label in India — company registration, GST, trademarking your label name, artist contracts, PPL and IPRS, ISRC codes and distributing your catalogue to 150+ platforms free.",
  keywords: [
    "how to start a music label in India",
    "start record label India",
    "music label registration India",
    "how to open music company India",
    "music label business India 2026",
    "independent record label India",
    "label distribution India",
    "PPL registration music label",
    "IPRS membership publisher",
    "music label trademark India",
  ],
  alternates: { canonical: 'https://www.westernbeats.com/blog/how-to-start-music-label-india' },
  openGraph: {
    title: "How to Start a Music Label in India 2026 — Registration, Rights & Distribution | Western Beats",
    description: "How to legally set up a music label in India and get your artists' releases on JioSaavn, Spotify and 150+ platforms.",
    url: 'https://www.westernbeats.com/blog/how-to-start-music-label-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: "How to Start a Music Label in India 2026 — Registration, Rights & Distribution | Western Beats" },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "How to Start a Music Label in India in 2026 — Registration, Rights and Distribution",
  description: "How to legally set up a music label in India and get your artists' releases on JioSaavn, Spotify and 150+ platforms.",
  inLanguage: 'en-IN',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
  datePublished: '2026-11-19',
  dateModified: '2026-11-19',
  url: 'https://www.westernbeats.com/blog/how-to-start-music-label-india',
  image: 'https://www.westernbeats.com/og-image.jpg',
  step: [
    { '@type': 'HowToStep', name: "Choose a Business Structure", text: "Start as a sole proprietorship for simplicity, or register an LLP or private limited company if you plan to bring in partners or investors and want limited liability." },
    { '@type': 'HowToStep', name: "Get PAN, Bank Account and GST", text: "Open a current account in the label's name. Register for GST when your turnover crosses the threshold or if you work with clients and platforms that require it." },
    { '@type': 'HowToStep', name: "Protect Your Label Name", text: "Search and file a trademark for your label name and logo with IP India so no one else can release music under it." },
    { '@type': 'HowToStep', name: "Sign Written Artist Agreements", text: "Put every deal in writing: who owns the master recordings, royalty splits, term, territory and what happens when the deal ends. Never release music on a handshake." },
    { '@type': 'HowToStep', name: "Register for Performance and Publishing Rights", text: "Sound recording owners typically license public performance through PPL (Phonographic Performance Limited); composers, lyricists and publishers work with IPRS. Check which applies to your catalogue." },
    { '@type': 'HowToStep', name: "Get ISRC and UPC Codes", text: "Every recording needs an ISRC and every release a UPC. Your distributor can issue both — Western Beats includes them free." },
    { '@type': 'HowToStep', name: "Distribute Your Catalogue", text: "Deliver every release to JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and more through one distributor, with your label name on every release." },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Do I need to register a company to start a music label in India?",
      acceptedAnswer: { '@type': 'Answer', text: "No, you can start as a sole proprietor. Many labels later register an LLP or private limited company for limited liability and to make partnerships and investment easier." },
    },
    {
      '@type': 'Question',
      name: "Do I need a trademark for my label name?",
      acceptedAnswer: { '@type': 'Answer', text: "It is not mandatory, but filing a trademark with IP India protects your label name and logo from being used by someone else." },
    },
    {
      '@type': 'Question',
      name: "How does a new label get its music on Spotify and JioSaavn?",
      acceptedAnswer: { '@type': 'Answer', text: "Through a distributor. Western Beats delivers your label's releases to Spotify, JioSaavn, Apple Music, Gaana, YouTube Music and 150+ platforms with your label name on every release." },
    },
    {
      '@type': 'Question',
      name: "What is the difference between PPL and IPRS?",
      acceptedAnswer: { '@type': 'Answer', text: "Broadly, PPL licenses the public performance of sound recordings on behalf of their owners, while IPRS represents the authors, composers and publishers of the underlying musical works." },
    },
  ],
}

const STEPS = [
  { n: '01', t: "Choose a Business Structure", d: "Start as a sole proprietorship for simplicity, or register an LLP or private limited company if you plan to bring in partners or investors and want limited liability." },
  { n: '02', t: "Get PAN, Bank Account and GST", d: "Open a current account in the label's name. Register for GST when your turnover crosses the threshold or if you work with clients and platforms that require it." },
  { n: '03', t: "Protect Your Label Name", d: "Search and file a trademark for your label name and logo with IP India so no one else can release music under it." },
  { n: '04', t: "Sign Written Artist Agreements", d: "Put every deal in writing: who owns the master recordings, royalty splits, term, territory and what happens when the deal ends. Never release music on a handshake." },
  { n: '05', t: "Register for Performance and Publishing Rights", d: "Sound recording owners typically license public performance through PPL (Phonographic Performance Limited); composers, lyricists and publishers work with IPRS. Check which applies to your catalogue." },
  { n: '06', t: "Get ISRC and UPC Codes", d: "Every recording needs an ISRC and every release a UPC. Your distributor can issue both — Western Beats includes them free." },
  { n: '07', t: "Distribute Your Catalogue", d: "Deliver every release to JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and more through one distributor, with your label name on every release." },
]

const CARDS = [
  { title: "A&R", desc: "Finds and develops artists, picks the songs, and shapes each release." },
  { title: "Release Management", desc: "Handles metadata, artwork, release dates and delivery to every platform." },
  { title: "Marketing", desc: "Plans launches, playlist pitching, social content and press for each release." },
  { title: "Rights and Royalties", desc: "Collects revenue from platforms and pays artists accurately and on time." },
]

const TIPS = [
  "Start with one or two artists you believe in rather than a big roster",
  "Use the same label name on every release so your catalogue stays grouped",
  "Keep clean records of every contract, split sheet and payment",
  "Plan a release calendar — regular releases build a label's reputation",
  "Focus on a genre or language where you understand the audience",
  "Choose a distributor with India-first platform coverage and caller tunes",
]

const RELATED = [
  { label: "Contact Us", href: "/contact" },
  { label: "Music Publishing in India", href: "/blog/music-publishing-india-guide" },
  { label: "Music Copyright India", href: "/blog/music-copyright-india" },
  { label: "Release an EP or Album", href: "/blog/how-to-release-ep-album-india" },
  { label: "All Blog Posts", href: "/blog" },
]

export default function StartMusicLabelIndia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        <section className="pt-32 pb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#A78BFA' }} />
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">{"Start a Music Label"}</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.25)', color: '#A78BFA' }}>
              {"🏷️ Label Guide"}
            </div>
            <h1 className="font-outfit font-black leading-tight tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              {"How to Start a Music Label in India in 2026 — Registration, Rights and Distribution"}
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-6">
              {"India's independent music boom has made starting your own label more realistic than ever. Here is how to set one up properly — legally, contractually and commercially — so your artists' music reaches every platform."}
            </p>
            <div className="flex items-center gap-3 text-[12px] text-[#8899AA] font-inter">
              <span>{"By Western Beats"}</span>
              <span>·</span>
              <span>{"November 19, 2026"}</span>
              <span>·</span>
              <span>{"9 min read"}</span>
            </div>
          </div>
        </section>

        <article className="pb-20">
          <div className="max-w-3xl mx-auto px-6">

            <h2 className="font-outfit font-black text-white text-[24px] mb-6 mt-10">{"Step-by-Step: Setting Up Your Music Label"}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {STEPS.map(s => (
                <div key={s.n} className="flex gap-4 items-start rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-black text-[18px] w-10 flex-shrink-0" style={{ color: '#A78BFA' }}>{s.n}</div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[15px] mb-1">{s.t}</div>
                    <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"What a Label Actually Does"}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CARDS.map(card => (
                <div key={card.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{card.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">{"Tips for New Labels in India"}</h2>
            <ul className="flex flex-col gap-2 mb-8">
              {TIPS.map(tip => (
                <li key={tip} className="flex gap-3 items-start font-inter text-[14px] text-[#8899AA]">
                  <span className="mt-0.5" style={{ color: '#A78BFA' }}>✓</span>
                  {tip}
                </li>
              ))}
            </ul>

            <div className="rounded-xl p-6 mb-10" style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
              <div className="font-outfit font-black text-white text-[18px] mb-2">{"Distribute Your Label's Catalogue Free"}</div>
              <p className="font-inter text-[14px] text-[#8899AA] leading-relaxed mb-4">
                {"Western Beats distributes releases for labels and independent artists to 150+ platforms with no upfront fee, free ISRC and UPC codes, and caller tune distribution included."}
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-outfit font-bold text-[13px] text-white"
                style={{ background: '#0A64C3' }}>
                {"Talk to Us About Your Label →"}
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
