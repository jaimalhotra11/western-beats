import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Music Copyright India 2026 — Complete Guide for Independent Artists | Western Beats',
  description: 'Music copyright India explained — how copyright works, how to protect your music, ISRC codes, copyright registration, and how Western Beats protects your IP. Complete guide for Indian artists 2026.',
  keywords: [
    'music copyright India',
    'how to copyright music India',
    'music copyright registration India',
    'music IP protection India',
    'copyright law music India 2026',
    'how to protect music India',
    'music copyright independent artist India',
    'ISRC code India copyright',
    'music rights India',
    'copyright music India free',
  ],
  alternates: { canonical: 'https://westernbeats.com/blog/music-copyright-india' },
  openGraph: {
    title: 'Music Copyright India 2026 — Complete Guide | Western Beats',
    description: 'How to protect your music copyright in India. ISRC codes, registration, rights explained for independent artists.',
    url: 'https://westernbeats.com/blog/music-copyright-india',
    siteName: 'Western Beats', type: 'article', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Music Copyright India 2026 — Complete Guide | Western Beats' },
}

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Music Copyright India 2026 — Complete Guide for Independent Artists',
  description: 'How copyright works in Indian music, how to protect your tracks, and what Western Beats does to protect your IP.',
  author: { '@type': 'Organization', name: 'Western Beats', url: 'https://westernbeats.com' },
  publisher: { '@type': 'Organization', name: 'Western Beats', url: 'https://westernbeats.com', logo: { '@type': 'ImageObject', url: 'https://westernbeats.com/partners/westernbeats-BpLvGE3e.png' } },
  datePublished: '2026-06-25',
  dateModified: '2026-06-25',
  url: 'https://westernbeats.com/blog/music-copyright-india',
  image: 'https://westernbeats.com/og-image.jpg',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://westernbeats.com/blog/music-copyright-india' },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does music get automatically copyrighted in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Under the Indian Copyright Act 1957, copyright is automatic from the moment you create an original musical work. You do not need to formally register it — but registration provides strong legal evidence in disputes.' },
    },
    {
      '@type': 'Question',
      name: 'How do I register my music copyright in India?',
      acceptedAnswer: { '@type': 'Answer', text: 'You can register your music copyright with the Copyright Office of India at copyright.gov.in. Submit Form XIV with your audio recording, lyrics, and a fee of approximately ₹500. The process takes 1–2 months.' },
    },
    {
      '@type': 'Question',
      name: 'What is an ISRC code and does it protect my copyright?',
      acceptedAnswer: { '@type': 'Answer', text: 'An ISRC (International Standard Recording Code) is a unique 12-character identifier for your recording. It does not replace copyright but acts as a digital fingerprint that helps track and monetise your music across all platforms. Western Beats provides free ISRC codes for every track you distribute.' },
    },
    {
      '@type': 'Question',
      name: 'Does Western Beats take my copyright?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Western Beats never takes any ownership of your music. You retain 100% of your copyright and IP always. We are a distribution partner, not a label — your masters belong to you.' },
    },
  ],
}

export default function MusicCopyrightIndia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Nav />
      <main className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

        <section className="pt-32 pb-16 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230' }} />
          <div className="max-w-3xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-inter text-[12px] text-[#8899AA]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20">›</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li className="text-white/20">›</li>
                <li className="text-[#5CB2DC]">Music Copyright India</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(10,100,195,0.12)', border: '1px solid rgba(10,100,195,0.25)', color: '#5CB2DC' }}>
              ⚖️ Music Law & Copyright Guide
            </div>
            <h1 className="font-outfit font-black leading-tight tracking-[-0.02em] text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              Music Copyright India 2026 — Complete Guide for Independent Artists
            </h1>
            <p className="font-inter text-[16px] text-[#8899AA] leading-relaxed mb-6">
              Your music is your intellectual property. Understanding copyright law in India is essential to protect your work, earn royalties, and avoid disputes. This guide explains everything — from automatic copyright to ISRC codes to registration.
            </p>
            <div className="flex items-center gap-3 text-[12px] text-[#8899AA] font-inter">
              <span>By Western Beats</span>
              <span>·</span>
              <span>June 25, 2026</span>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </div>
        </section>

        <article className="pb-20">
          <div className="max-w-3xl mx-auto px-6">

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">How Music Copyright Works in India</h2>
            <p className="font-inter text-[15px] text-[#8899AA] leading-relaxed mb-4">
              India&apos;s copyright law is governed by the <strong className="text-white">Copyright Act, 1957</strong> (amended in 2012). The key principle: <strong className="text-white">copyright is automatic</strong>. The moment you record an original song, you own the copyright. No registration needed.
            </p>
            <p className="font-inter text-[15px] text-[#8899AA] leading-relaxed mb-4">
              In music, there are typically <strong className="text-white">two separate copyrights</strong>:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { title: 'Composition Copyright', desc: 'Covers the melody and lyrics of the song. Owned by the songwriter/composer. Lasts 60 years after the creator\'s death.' },
                { title: 'Recording Copyright (Master)', desc: 'Covers the specific recorded version of the song. Usually owned by the producer or label — but with Western Beats, it stays with you.' },
              ].map(c => (
                <div key={c.title} className="rounded-xl p-5" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-outfit font-bold text-white text-[15px] mb-2">{c.title}</div>
                  <div className="font-inter text-[13px] text-[#8899AA] leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">ISRC Codes — Your Music&apos;s Digital Fingerprint</h2>
            <p className="font-inter text-[15px] text-[#8899AA] leading-relaxed mb-4">
              An <strong className="text-white">ISRC (International Standard Recording Code)</strong> is a 12-character code assigned to each unique recording. Format: <code className="text-[#5CB2DC] bg-[#060D1F] px-1 rounded">IN-G64-23-00741</code>
            </p>
            <p className="font-inter text-[15px] text-[#8899AA] leading-relaxed mb-4">
              ISRCs are how streaming platforms track your music, pay royalties, and identify your work internationally. <strong className="text-white">Western Beats provides free ISRC codes</strong> for every track you distribute — no extra cost.
            </p>

            <h2 className="font-outfit font-black text-white text-[24px] mb-4 mt-10">How to Register Your Copyright in India</h2>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { n: '1', t: 'Visit copyright.gov.in', d: 'Go to the official Copyright Office of India website and create an account.' },
                { n: '2', t: 'Fill Form XIV', d: 'Complete the copyright registration form for a musical work or sound recording.' },
                { n: '3', t: 'Upload Your Work', d: 'Submit your audio file, lyrics (if applicable), and proof of authorship.' },
                { n: '4', t: 'Pay the Fee', d: 'Pay approximately ₹500 per work. The process takes 1–2 months.' },
                { n: '5', t: 'Receive Certificate', d: 'You get an official copyright registration certificate — strong evidence in any legal dispute.' },
              ].map(s => (
                <div key={s.n} className="flex gap-4 items-start rounded-xl p-4" style={{ background: '#060D1F', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-outfit font-black text-[12px]" style={{ background: '#0A64C3', color: 'white' }}>{s.n}</div>
                  <div>
                    <div className="font-outfit font-bold text-white text-[14px]">{s.t}</div>
                    <div className="font-inter text-[12px] text-[#8899AA] mt-0.5">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-6 mb-10" style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}>
              <div className="font-outfit font-black text-white text-[18px] mb-2">Western Beats Never Takes Your Copyright</div>
              <p className="font-inter text-[14px] text-[#8899AA] leading-relaxed mb-4">
                100% of your intellectual property — composition copyright, master recording copyright, publishing rights — stays with you always. Western Beats is a distribution partner, not a label that takes ownership of your music.
              </p>
              <Link href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-outfit font-bold text-[13px] text-white"
                style={{ background: '#0A64C3' }}>
                Distribute Your Music Free →
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
              {[
                { label: 'Free ISRC Codes', href: '/free-isrc-codes' },
                { label: 'YouTube Content ID India', href: '/blog/youtube-content-id-india' },
                { label: 'How to Earn Money from Music', href: '/blog/how-to-earn-money-from-music-india' },
                { label: 'Music Distribution Beginners Guide', href: '/music-distribution-beginners' },
                { label: 'All Blog Posts', href: '/blog' },
              ].map(l => (
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
