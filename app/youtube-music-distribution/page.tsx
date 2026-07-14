import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Get Your Song on YouTube Music Free India 2026 | Western Beats',
  description: 'Distribute your music to YouTube Music India free in 72 hours with Western Beats. Also covers JioSaavn, Gaana, Spotify, Apple Music & 150+ platforms. 100% ownership, ₹0 upfront. Official Warner Music India Partner.',
  keywords: [
    'YouTube Music distribution India free',
    'upload song YouTube Music India',
    'how to get song on YouTube Music India',
    'YouTube Music distribution independent artist',
    'free YouTube Music distribution India 2026',
    'YouTube Music upload India free',
    'YouTube Music distribution without label India',
    'YouTube Music submission India free',
    'distribute music YouTube Music India',
    'YouTube Music artist upload free India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/youtube-music-distribution' },
  openGraph: {
    title: 'Free YouTube Music Distribution India 2026 | Western Beats',
    description: 'Get on YouTube Music India free in 72 hours. Plus JioSaavn, Gaana, Spotify & 150+ platforms. 100% ownership.',
    url: 'https://www.westernbeats.com/youtube-music-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Free YouTube Music Distribution India 2026 | Western Beats' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get my song on YouTube Music India for free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Submit your music to Western Beats for free. We distribute to YouTube Music India and 150+ other platforms within 72 hours at zero cost. You keep 100% ownership of your masters.' },
    },
    {
      '@type': 'Question',
      name: 'How much does YouTube Music pay per stream in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'YouTube Music pays approximately ₹0.008–₹0.015 per stream in India (around $0.001–$0.002 USD), slightly higher than standard YouTube. Rates vary based on listener location and subscription type.' },
    },
    {
      '@type': 'Question',
      name: 'Is YouTube Music distribution different from YouTube Content ID?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. YouTube Music distribution makes your song appear on the YouTube Music streaming app. YouTube Content ID is a separate system that identifies and monetises your music on regular YouTube videos. Western Beats handles both.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get on YouTube Music?',
      acceptedAnswer: { '@type': 'Answer', text: 'Western Beats distributes your song to YouTube Music within 72 hours of approval. Friday submissions typically go live by Monday.' },
    },
  ],
}

const ROWS = [
  { label: 'Distribution Cost', value: '₹0 — Free Forever' },
  { label: 'Go-Live Time', value: '72 Hours' },
  { label: 'Pay Per Stream (India)', value: '₹0.008–₹0.015' },
  { label: 'Ownership', value: '100% Yours Always' },
  { label: 'YouTube Content ID', value: 'Included' },
  { label: 'Other Platforms', value: '150+ (JioSaavn, Spotify, Apple Music…)' },
]

export default function YouTubeMusicDistribution() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: '#FF0000', boxShadow: '0 0 20px rgba(255,0,0,0.4)' }} />
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] rounded-full -translate-y-1/2 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(255,0,0,0.07) 0%, transparent 70%)' }} />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/platforms" className="hover:text-white transition-colors">Platforms</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">YouTube Music Distribution</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(255,0,0,0.12)', border: '1px solid rgba(255,0,0,0.25)', color: '#FF4444' }}>
              ✦ Free YouTube Music Distribution India
            </div>
            <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-5"
              style={{ fontSize: 'clamp(34px, 5vw, 64px)' }}>
              <span className="text-white">Get Your Song on</span><br />
              <span style={{ color: '#FF4444' }}>YouTube Music</span><br />
              <span className="text-white">Free in 72 Hours</span>
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-8 max-w-2xl">
              Western Beats distributes your music to YouTube Music India and <strong className="text-white">150+ streaming platforms</strong> — all for free. Keep 100% ownership of your masters. Official Warner Music India Partner.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-outfit font-bold text-[14px] text-white transition-all duration-200"
                style={{ background: '#FF0000', boxShadow: '0 8px 24px rgba(255,0,0,0.25)' }}>
                Submit Your Music Free →
              </Link>
              <Link href="/how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-outfit font-bold text-[14px] text-white border border-white/10 hover:bg-white/[0.05] transition-all duration-200">
                How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Stats table */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              {ROWS.map((r, i) => (
                <div key={r.label} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? 'bg-[#060D1F]' : 'bg-[#040A14]'}`}>
                  <span className="font-inter text-[14px] text-[#8899AA]">{r.label}</span>
                  <span className="font-outfit font-bold text-[14px] text-white">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why section */}
        <section className="py-16" style={{ background: '#040810' }}>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-outfit font-black text-white mb-4 tracking-[-0.02em]" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
              Why Distribute to YouTube Music?
            </h2>
            <p className="font-inter text-[15px] text-[#8899AA] leading-relaxed mb-8 max-w-3xl">
              YouTube Music has <strong className="text-white">80M+ monthly active users globally</strong> and is the fastest-growing streaming platform in India. It pays slightly higher per-stream rates than standard YouTube, and comes with YouTube Content ID so you also earn from UGC videos using your music.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: '80M+ Users', desc: 'YouTube Music global monthly active users and growing fast in India.' },
                { title: 'Content ID', desc: 'Earn from every YouTube video that uses your music — not just streams.' },
                { title: '₹0 Forever', desc: 'Western Beats distributes to YouTube Music and 150+ platforms at zero cost.' },
              ].map(c => (
                <div key={c.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[16px] mb-2">{c.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-outfit font-black text-white mb-8 tracking-[-0.02em]" style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}>
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              {FAQ_SCHEMA.mainEntity.map((q) => (
                <div key={q.name} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[14px] mb-2">{q.name}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{q.acceptedAnswer.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12" style={{ background: '#040810' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="font-outfit font-bold text-white text-[16px] mb-4">Also Distribute To</div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'JioSaavn', href: '/jiosaavn-distribution' },
                { label: 'Gaana', href: '/gaana-distribution' },
                { label: 'Spotify', href: '/spotify-distribution' },
                { label: 'Apple Music', href: '/apple-music-distribution' },
                { label: 'Wynk Music', href: '/wynk-music-distribution' },
                { label: 'Hungama Music', href: '/hungama-music-distribution' },
                { label: 'All 150+ Platforms', href: '/platforms' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="px-4 py-2 rounded-lg font-inter text-[13px] text-[#8899AA] hover:text-white transition-colors"
                  style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
