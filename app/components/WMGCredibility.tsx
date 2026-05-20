'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const EASE = [0.22, 1, 0.36, 1] as const

/* ── Warner Music India artists with Unsplash concert images ─────────── */
const INDIA_ARTISTS = [
  { name: 'Armaan Malik',   genre: 'Pop / Bollywood',    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80&auto=format&fit=crop' },
  { name: 'Diljit Dosanjh', genre: 'Punjabi / Pop',       img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80&auto=format&fit=crop' },
  { name: 'King',           genre: 'Hip-Hop / Urban',     img: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&q=80&auto=format&fit=crop' },
  { name: 'Darshan Raval',  genre: 'Romantic Pop',        img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=80&auto=format&fit=crop' },
  { name: 'Guru Randhawa',  genre: 'Punjabi Hits',        img: 'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=400&q=80&auto=format&fit=crop' },
  { name: 'Karan Aujla',   genre: 'Punjabi Rap',         img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80&auto=format&fit=crop' },
  { name: 'Karma',          genre: 'Independent Pop',     img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80&auto=format&fit=crop' },
  { name: 'Sanjith Hegde',  genre: 'Kannada / Pan-India', img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&q=80&auto=format&fit=crop' },
  { name: 'Sid Sriram',     genre: 'Carnatic Fusion',     img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80&auto=format&fit=crop' },
  { name: 'Jonita Gandhi',  genre: 'Indie Pop',           img: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&q=80&auto=format&fit=crop' },
]

/* ── WMG Global artists with concert images ─────────────────────────── */
const GLOBAL_ARTISTS = [
  { name: 'Bruno Mars',   stat: '150M+ Spotify listeners',            img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80&auto=format&fit=crop' },
  { name: 'Coldplay',     stat: '10.3M tickets — one world tour',     img: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&q=80&auto=format&fit=crop' },
  { name: 'Ed Sheeran',   stat: "'Sapphire' breaks records in India", img: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&q=80&auto=format&fit=crop' },
  { name: 'Dua Lipa',     stat: "PPL's Most Played Artist",           img: 'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=400&q=80&auto=format&fit=crop' },
  { name: 'Charli XCX',  stat: "Variety's 2024 Hitmaker of the Year",img: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&q=80&auto=format&fit=crop' },
  { name: 'Benson Boone', stat: "2024's #1 best-selling single",      img: 'https://images.unsplash.com/photo-1415886026292-4c1ba4a97e96?w=400&q=80&auto=format&fit=crop' },
  { name: 'Lady Gaga',    stat: '"Die with a Smile" — Global #1',     img: 'https://images.unsplash.com/photo-1483393458019-411bc6bd104e?w=400&q=80&auto=format&fit=crop' },
  { name: 'David Guetta', stat: '20 No. 1s on Dance Airplay',         img: 'https://images.unsplash.com/photo-1573921470445-8d99a8b9b9c0?w=400&q=80&auto=format&fit=crop' },
]

function ArtistCard({ name, genre, stat, img, color }: {
  name: string; genre?: string; stat?: string; img: string; color: string
}) {
  return (
    <div
      className="relative flex-shrink-0 w-[200px] sm:w-[220px] rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: '3/4' }}
    >
      <Image
        src={img}
        alt={name}
        fill
        sizes="220px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 35%, rgba(4,10,20,0.98) 100%)' }} />
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: color }} />
      {/* Label badge */}
      <div
        className="absolute top-3 left-3 font-inter text-[9px] font-bold tracking-[0.12em] uppercase px-2 py-1 rounded-full"
        style={{ background: `${color}33`, color, border: `1px solid ${color}55` }}
      >
        Warner Music India
      </div>
      {/* Artist info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="font-outfit font-extrabold text-white text-[16px] leading-tight mb-1">{name}</div>
        <div className="font-inter text-[11px]" style={{ color: color === '#C41230' ? '#f87171' : '#7dd3fc' }}>
          {genre || stat}
        </div>
      </div>
    </div>
  )
}

export default function WMGCredibility() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#040A14]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
            className="platform-pill mb-5 inline-flex"
          >
            ✦ Warner Music Group · India &amp; Global
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-outfit font-black tracking-[-0.02em] leading-[1.02] mb-4"
            style={{ fontSize: 'clamp(30px, 5vw, 58px)' }}
          >
            <span className="text-white">The Label Behind</span>{' '}
            <span style={{ color: '#0A64C3' }}>The World&apos;s Biggest.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed max-w-2xl"
          >
            WB Digital is officially backed by <strong className="text-white">Warner Music India</strong> — the Indian arm of
            Warner Music Group. The same infrastructure powering Bruno Mars, Coldplay &amp; Ed Sheeran globally
            now powers <strong className="text-white">your independent music career</strong>.
          </motion.p>
        </div>

        {/* ── India Artists Slider ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-0.5 flex-shrink-0">
              <Image src="/partners/warnermusicindia-3pJs86tg.png" alt="Warner Music India" width={32} height={32} className="object-contain w-full h-full" />
            </div>
            <div>
              <div className="font-outfit font-extrabold text-white text-[15px]">Warner Music India Artists</div>
              <div className="font-inter text-[11px] text-crm uppercase tracking-wide">Our official label partner</div>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-4 artist-slider-track">
              {[...INDIA_ARTISTS, ...INDIA_ARTISTS].map((a, i) => (
                <ArtistCard key={i} {...a} color="#C41230" />
              ))}
            </div>
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none" style={{ background: 'linear-gradient(90deg, #040A14, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none" style={{ background: 'linear-gradient(270deg, #040A14, transparent)' }} />
          </div>
        </motion.div>

        {/* ── Global Artists Slider ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[18px]" style={{ background: 'rgba(10,100,195,0.2)', border: '1px solid rgba(10,100,195,0.3)' }}>
              🌍
            </div>
            <div>
              <div className="font-outfit font-extrabold text-white text-[15px]">Warner Music Group Global</div>
              <div className="font-inter text-[11px] text-sky uppercase tracking-wide">75+ years · 40+ countries</div>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-4 artist-slider-track-rev">
              {[...GLOBAL_ARTISTS, ...GLOBAL_ARTISTS].map((a, i) => (
                <ArtistCard key={i} name={a.name} stat={a.stat} img={a.img} color="#0A64C3" />
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none" style={{ background: 'linear-gradient(90deg, #040A14, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none" style={{ background: 'linear-gradient(270deg, #040A14, transparent)' }} />
          </div>
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-8 py-5 rounded-2xl"
          style={{ background: 'rgba(10,100,195,0.1)', border: '1px solid rgba(10,100,195,0.25)' }}
        >
          {[
            { num: '75+',  lbl: 'Years of WMG History' },
            { num: '40+',  lbl: 'Countries Worldwide' },
            { num: '10+',  lbl: 'WMI India Artists' },
            { num: '150M+',lbl: 'Bruno Mars Spotify Listeners' },
            { num: '10.3M',lbl: 'Coldplay Tour Tickets' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-outfit font-black text-[22px] sm:text-[26px] text-blu leading-none">{s.num}</span>
              <span className="font-inter text-[10px] text-mut tracking-[0.07em] uppercase mt-1 text-center">{s.lbl}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
