import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Get Your Song on Wynk Music Free India 2026 | Western Beats',
  description: 'Distribute your music to Wynk Music (Airtel) India free in 72 hours with Western Beats. Also covers JioSaavn, Gaana, Spotify, Apple Music & 150+ platforms. 100% ownership, ₹0 upfront.',
  keywords: [
    'Wynk Music distribution India free',
    'upload song Wynk Music India',
    'how to get song on Wynk Music',
    'Wynk distribution independent artist India',
    'Airtel Wynk music distribution free',
    'Wynk Music upload India free 2026',
    'distribute music Wynk India',
    'Wynk Music submission India',
    'Wynk Music distribution without label',
    'free Wynk distribution India',
  ],
  alternates: { canonical: 'https://westernbeats.com/wynk-music-distribution' },
  openGraph: {
    title: 'Free Wynk Music Distribution India 2026 | Western Beats',
    description: 'Get on Wynk Music (Airtel) India free in 72 hours. Plus JioSaavn, Gaana, Spotify & 150+ platforms. 100% ownership.',
    url: 'https://westernbeats.com/wynk-music-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Free Wynk Music Distribution India 2026 | Western Beats' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I upload my song to Wynk Music India for free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Submit your music to Western Beats for free. We distribute to Wynk Music (Airtel) and 150+ other platforms within 72 hours. Zero cost, 100% ownership retained.' },
    },
    {
      '@type': 'Question',
      name: 'What is Wynk Music?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wynk Music is Airtel\'s music streaming platform with 80M+ registered users in India. It is one of the top 5 music apps in India, offering free and premium tiers, and is pre-installed on Airtel devices.' },
    },
    {
      '@type': 'Question',
      name: 'How much does Wynk Music pay per stream?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wynk Music pays approximately ₹0.001–₹0.003 per stream in India. While lower than Spotify or Apple Music, the large user base and Airtel integration make it an important platform for Indian artists.' },
    },
    {
      '@type': 'Question',
      name: 'Does Western Beats distribute to Wynk Music?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes to Wynk Music (Airtel) as part of its 150+ platform distribution package — at zero cost, with 100% IP ownership retained by the artist.' },
    },
  ],
}

const ROWS = [
  { label: 'Distribution Cost', value: '₹0 — Free Forever' },
  { label: 'Go-Live Time', value: '72 Hours' },
  { label: 'Wynk Active Users', value: '80M+ Registered' },
  { label: 'Ownership', value: '100% Yours Always' },
  { label: 'Hello Tune / CRBT', value: 'Supported via Airtel' },
  { label: 'Other Platforms', value: '150+ (JioSaavn, Spotify, YouTube Music…)' },
]

export default function WynkMusicDistribution() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: '#E8003D', boxShadow: '0 0 20px rgba(232,0,61,0.4)' }} />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/platforms" className="hover:text-white transition-colors">Platforms</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">Wynk Music Distribution</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(232,0,61,0.1)', border: '1px solid rgba(232,0,61,0.25)', color: '#E8003D' }}>
              ✦ Free Wynk Music Distribution India
            </div>
            <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-5"
              style={{ fontSize: 'clamp(34px, 5vw, 64px)' }}>
              <span className="text-white">Get Your Song on</span><br />
              <span style={{ color: '#E8003D' }}>Wynk Music</span><br />
              <span className="text-white">Free in 72 Hours</span>
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-8 max-w-2xl">
              Western Beats distributes your music to Wynk Music (Airtel) and <strong className="text-white">150+ streaming platforms</strong> across India and worldwide — all free. Keep 100% ownership of your masters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-outfit font-bold text-[14px] text-white transition-all duration-200"
                style={{ background: '#0A64C3', boxShadow: '0 8px 24px rgba(10,100,195,0.3)' }}>
                Submit Your Music Free →
              </Link>
              <Link href="/platforms"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-outfit font-bold text-[14px] text-white border border-white/10 hover:bg-white/[0.05] transition-all duration-200">
                See All Platforms
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
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

        {/* Why */}
        <section className="py-16" style={{ background: '#040810' }}>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-outfit font-black text-white mb-4 tracking-[-0.02em]" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
              Why Distribute to Wynk Music?
            </h2>
            <p className="font-inter text-[15px] text-[#8899AA] leading-relaxed mb-8 max-w-3xl">
              Wynk Music is Airtel&apos;s streaming platform with <strong className="text-white">80M+ registered users</strong>. It is pre-installed on Airtel smartphones, giving your music immediate reach to millions of Airtel subscribers. Wynk also supports <strong className="text-white">Hello Tune (Airtel CRBT)</strong> which is a major revenue stream for Indian artists.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: '80M+ Users', desc: 'Wynk is pre-installed on Airtel devices reaching 80M+ registered users.' },
                { title: 'Hello Tune Revenue', desc: 'Earn extra from Airtel Hello Tunes (CRBT) — popular with Bollywood & Punjabi listeners.' },
                { title: '₹0 Distribution', desc: 'Western Beats distributes to Wynk and 150+ platforms at zero cost to you.' },
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
                { label: 'YouTube Music', href: '/youtube-music-distribution' },
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
