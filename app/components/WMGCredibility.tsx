'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const EASE = [0.22, 1, 0.36, 1] as const

/* ── WMG India roster ───────────────────────────────────────────────────── */
const INDIA_ARTISTS = [
  { name: 'Armaan Malik',    genre: 'Pop / Bollywood',   flag: '🇮🇳' },
  { name: 'Diljit Dosanjh',  genre: 'Punjabi / Pop',     flag: '🇮🇳' },
  { name: 'King',            genre: 'Hip-Hop / Urban',   flag: '🇮🇳' },
  { name: 'Darshan Raval',   genre: 'Romantic Pop',      flag: '🇮🇳' },
  { name: 'Guru Randhawa',   genre: 'Punjabi Hits',      flag: '🇮🇳' },
  { name: 'Karan Aujla',     genre: 'Punjabi Rap',       flag: '🇮🇳' },
  { name: 'Karma',           genre: 'Independent Pop',   flag: '🇮🇳' },
  { name: 'Sanjith Hegde',   genre: 'Kannada / Pan-India', flag: '🇮🇳' },
  { name: 'Sid Sriram',      genre: 'Carnatic Fusion',   flag: '🇮🇳' },
  { name: 'Jonita Gandhi',   genre: 'Indie Pop',         flag: '🇮🇳' },
]

/* ── WMG Global roster ──────────────────────────────────────────────────── */
const GLOBAL_ARTISTS = [
  { name: 'Bruno Mars',    stat: '150M+ monthly Spotify listeners' },
  { name: 'Coldplay',      stat: '10.3M tickets — Music of the Spheres Tour' },
  { name: 'Ed Sheeran',    stat: 'Sapphire breaks records in India' },
  { name: 'Dua Lipa',      stat: "PPL's Most Played Artist" },
  { name: 'Charli XCX',    stat: "Variety's 2024 Hitmaker of the Year" },
  { name: 'Benson Boone',  stat: "2024's #1 best-selling single worldwide" },
  { name: 'Lady Gaga',     stat: '"Die with a Smile" dominated Global Charts' },
  { name: 'David Guetta',  stat: '20 No. 1s on Dance/Mix Show Airplay' },
  { name: 'Zach Bryan',    stat: 'Biggest ticketed show in US history' },
  { name: 'Charlie Puth',  stat: 'WMG Global Chart-Topper' },
]

/* ── Marquee row ────────────────────────────────────────────────────────── */
function MarqueeRow({ items, direction = 'left' }: { items: string[]; direction?: 'left' | 'right' }) {
  return (
    <div className="relative overflow-hidden py-1">
      <div
        className="flex items-center gap-0 whitespace-nowrap"
        style={{
          animation: `marquee${direction === 'right' ? 'Rev' : ''} 40s linear infinite`,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-4">
            <span className="font-outfit font-bold text-[13px] sm:text-[14px] tracking-wide text-white/80 hover:text-white transition-colors duration-200">
              {item}
            </span>
            <span className="text-blu/40 text-[10px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function WMGCredibility() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const indiaNames  = INDIA_ARTISTS.map(a => `${a.flag} ${a.name}`)
  const globalNames = GLOBAL_ARTISTS.map(a => `🌍 ${a.name}`)

  return (
    <section ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#040A14]" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,21,53,0.6) 0%, transparent 50%, rgba(10,21,53,0.6) 100%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.12) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
            className="platform-pill mb-5 inline-flex"
          >
            ✦ Warner Music Group · Global + India
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-outfit font-black tracking-[-0.02em] leading-[1.02] mb-5"
            style={{ fontSize: 'clamp(30px, 5vw, 58px)' }}
          >
            <span className="text-white">The Label Behind</span>{' '}
            <span style={{ color: '#0A64C3' }}>The World&apos;s Biggest.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="font-inter text-[15px] sm:text-[17px] text-mut leading-relaxed max-w-2xl mx-auto"
          >
            WB Digital is officially backed by <strong className="text-white">Warner Music India</strong> — the Indian arm of
            Warner Music Group, the global label home of Bruno Mars, Coldplay, Ed Sheeran & Dua Lipa.
            The same infrastructure now powers <strong className="text-white">your independent music career</strong>.
          </motion.p>
        </div>

        {/* Two columns: India + Global */}
        <div className="grid lg:grid-cols-2 gap-6 mb-14">

          {/* India Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="rounded-3xl p-7 sm:p-8 relative overflow-hidden"
            style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#C41230' }} />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex-shrink-0">
                <Image src="/partners/warnermusicindia-3pJs86tg.png" alt="Warner Music India" width={40} height={40} className="object-contain w-full h-full" />
              </div>
              <div>
                <div className="font-outfit font-black text-white text-[16px]">Warner Music India</div>
                <div className="font-inter text-[11px] text-crm tracking-[0.1em] uppercase">Our Official Partner</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {INDIA_ARTISTS.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05, ease: EASE }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{ background: 'rgba(196,18,48,0.08)', border: '1px solid rgba(196,18,48,0.15)' }}
                >
                  <span className="text-[14px]">{a.flag}</span>
                  <div>
                    <div className="font-outfit font-bold text-white text-[12px] leading-tight">{a.name}</div>
                    <div className="font-inter text-[9px] text-mut">{a.genre}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 font-inter text-[12px] text-mut text-center">
              + many more India-based artists under Warner Music India
            </div>
          </motion.div>

          {/* Global Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="rounded-3xl p-7 sm:p-8 relative overflow-hidden"
            style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#0A64C3' }} />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[20px]" style={{ background: 'rgba(10,100,195,0.2)' }}>
                🌍
              </div>
              <div>
                <div className="font-outfit font-black text-white text-[16px]">Warner Music Group Global</div>
                <div className="font-inter text-[11px] text-sky tracking-[0.1em] uppercase">75+ Years of Music History</div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              {GLOBAL_ARTISTS.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05, ease: EASE }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl"
                  style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.15)' }}
                >
                  <div className="font-outfit font-bold text-white text-[13px]">{a.name}</div>
                  <div className="font-inter text-[10px] text-mut text-right max-w-[160px] leading-snug">{a.stat}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scrolling artist name tickers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="rounded-2xl overflow-hidden py-4"
          style={{ background: 'rgba(10,21,53,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="mb-1 text-center font-inter text-[10px] text-mut tracking-[0.12em] uppercase mb-3">Warner Music India Artists</div>
          <MarqueeRow items={indiaNames} direction="left" />
          <div className="my-1 text-center font-inter text-[10px] text-mut tracking-[0.12em] uppercase my-3">Warner Music Group Global</div>
          <MarqueeRow items={globalNames} direction="right" />
        </motion.div>

        {/* Bottom credibility statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
          className="mt-10 text-center"
        >
          <div
            className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-8 py-5 rounded-2xl"
            style={{ background: 'rgba(10,100,195,0.1)', border: '1px solid rgba(10,100,195,0.25)' }}
          >
            {[
              { num: '75+', lbl: 'Years of WMG History' },
              { num: '40+', lbl: 'Countries Worldwide' },
              { num: '10+', lbl: 'WMI India Artists' },
              { num: '150M+', lbl: 'Bruno Mars Spotify Listeners' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center px-3 sm:px-5">
                <span className="font-outfit font-black text-[22px] sm:text-[26px] text-blu leading-none">{s.num}</span>
                <span className="font-inter text-[10px] text-mut tracking-[0.07em] uppercase mt-1 text-center">{s.lbl}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
