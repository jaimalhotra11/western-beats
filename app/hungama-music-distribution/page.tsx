import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Get Your Song on Hungama Music Free India 2026 | Western Beats',
  description: 'Distribute your music to Hungama Music India free in 72 hours. Western Beats covers Hungama, JioSaavn, Gaana, Spotify, Apple Music & 150+ platforms. 100% ownership, ₹0 upfront.',
  keywords: [
    'Hungama Music distribution India free',
    'upload song Hungama Music India',
    'how to get song on Hungama India',
    'Hungama distribution independent artist India',
    'Hungama Music upload India free 2026',
    'distribute music Hungama India',
    'Hungama Music submission India',
    'Hungama distribution without label India',
    'free Hungama distribution India',
    'Hungama Music royalties India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/hungama-music-distribution' },
  openGraph: {
    title: 'Free Hungama Music Distribution India 2026 | Western Beats',
    description: 'Get on Hungama Music India free in 72 hours. Plus JioSaavn, Gaana, Spotify & 150+ platforms. 100% ownership.',
    url: 'https://www.westernbeats.com/hungama-music-distribution',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Free Hungama Music Distribution India 2026 | Western Beats' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I upload my song to Hungama Music India for free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Submit your music to Western Beats for free. We distribute to Hungama Music and 150+ other platforms within 72 hours. Zero cost, 100% ownership retained.' },
    },
    {
      '@type': 'Question',
      name: 'What is Hungama Music?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hungama Music is one of India\'s oldest and most popular music streaming platforms with 40M+ monthly active users. It is particularly strong in Bollywood, Bhojpuri, and regional Indian music.' },
    },
    {
      '@type': 'Question',
      name: 'How much does Hungama Music pay per stream?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hungama Music pays approximately ₹0.001–₹0.002 per stream. While lower than global platforms, Hungama\'s reach into Tier 2 and Tier 3 Indian cities makes it important for regional artists.' },
    },
    {
      '@type': 'Question',
      name: 'Is Hungama Music good for Bhojpuri and regional artists?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Hungama has one of the largest regional music catalogues in India and is especially popular for Bhojpuri, Rajasthani, and Marathi music. Western Beats can help regional artists get on Hungama for free.' },
    },
  ],
}

const ROWS = [
  { label: 'Distribution Cost', value: '₹0 — Free Forever' },
  { label: 'Go-Live Time', value: '72 Hours' },
  { label: 'Hungama Monthly Users', value: '40M+ Active Users' },
  { label: 'Ownership', value: '100% Yours Always' },
  { label: 'Regional Music', value: 'Bhojpuri, Rajasthani, Marathi & More' },
  { label: 'Other Platforms', value: '150+ (JioSaavn, Spotify, YouTube Music…)' },
]

export default function HungamaMusicDistribution() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: '#FF6B00', boxShadow: '0 0 20px rgba(255,107,0,0.4)' }} />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/platforms" className="hover:text-white transition-colors">Platforms</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">Hungama Music Distribution</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.25)', color: '#FF6B00' }}>
              ✦ Free Hungama Music Distribution India
            </div>
            <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-5"
              style={{ fontSize: 'clamp(34px, 5vw, 64px)' }}>
              <span className="text-white">Get Your Song on</span><br />
              <span style={{ color: '#FF6B00' }}>Hungama Music</span><br />
              <span className="text-white">Free in 72 Hours</span>
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-8 max-w-2xl">
              Western Beats distributes your music to Hungama Music and <strong className="text-white">150+ streaming platforms</strong> — all for free. Ideal for Bollywood, Bhojpuri, and regional Indian artists. Keep 100% ownership of your masters.
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
              Why Distribute to Hungama Music?
            </h2>
            <p className="font-inter text-[15px] text-[#8899AA] leading-relaxed mb-8 max-w-3xl">
              Hungama Music is one of India&apos;s oldest streaming platforms with <strong className="text-white">40M+ monthly active users</strong>. It has exceptional penetration in Tier 2 and Tier 3 cities — an underserved market that most global distributors ignore. For Bollywood, Bhojpuri, and regional artists, Hungama is a critical platform.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: '40M+ Users', desc: 'Strong Tier 2/3 city penetration where many global platforms are weak.' },
                { title: 'Regional Focus', desc: 'Best platform for Bhojpuri, Rajasthani, Marathi, and regional Indian music.' },
                { title: '₹0 Distribution', desc: 'Western Beats distributes to Hungama and 150+ platforms at zero cost.' },
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
                { label: 'Wynk Music', href: '/wynk-music-distribution' },
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
