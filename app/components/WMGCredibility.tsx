'use client'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const EASE = [0.22, 1, 0.36, 1] as const

/* ─── Warner Music India Partner artists: real WMG CDN + Wikipedia photos ──── */
const INDIA_ARTISTS = [
  {
    name: 'King',
    genre: 'Hip-Hop / Urban',
    img: 'https://www.wmg.com/wp-content/uploads/2025/03/KING-Feb2025.jpg',
  },
  {
    name: 'Nora Fatehi',
    genre: 'Pop / Dance',
    img: 'https://www.wmg.com/wp-content/uploads/2025/03/NoraFatehi-Feb2025-scaled.jpg',
  },
  {
    name: 'Diljit Dosanjh',
    genre: 'Punjabi / Pop',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Diljit_Dosanjh.jpg/500px-Diljit_Dosanjh.jpg',
  },
  {
    name: 'Karan Aujla',
    genre: 'Punjabi Rap',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Karan_Aujla_2020.jpg/500px-Karan_Aujla_2020.jpg',
  },
  {
    name: 'Darshan Raval',
    genre: 'Romantic Pop',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Darshan-Raval-grace-the-12th-radio-mirchi-music-awards-2020.jpg/500px-Darshan-Raval-grace-the-12th-radio-mirchi-music-awards-2020.jpg',
  },
  {
    name: 'Guru Randhawa',
    genre: 'Punjabi Hits',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Guru_Randhawa_at_the_launch_of_MTV_Unplugged_Season_8_%28cropped%29.jpg/500px-Guru_Randhawa_at_the_launch_of_MTV_Unplugged_Season_8_%28cropped%29.jpg',
  },
  {
    name: 'Sid Sriram',
    genre: 'Carnatic Fusion',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sid_Sriram.jpg/500px-Sid_Sriram.jpg',
  },
]

/* ─── WMG Global artists: real WMG CDN photos ───────────────────────── */
const GLOBAL_ARTISTS = [
  {
    name: 'Bruno Mars',
    stat: '150M+ monthly Spotify listeners',
    img: 'https://www.wmg.com/wp-content/uploads/2026/02/BrunoMars.jpg',
  },
  {
    name: 'Coldplay',
    stat: '10.3M tickets, one world tour',
    img: 'https://www.wmg.com/wp-content/uploads/2024/08/Coldplay2.jpg',
  },
  {
    name: 'Ed Sheeran',
    stat: "'Sapphire', record-breaking India tour",
    img: 'https://www.wmg.com/wp-content/uploads/2025/03/Ed-Sheeran-1900x1900-000000-80-0-0-1.jpg',
  },
  {
    name: 'Charli XCX',
    stat: "Variety's 2024 Hitmaker of the Year",
    img: 'https://www.wmg.com/wp-content/uploads/2026/02/CharliPaletteC-Radiant1.jpg',
  },
  {
    name: 'David Guetta',
    stat: '20 No.1s on Billboard Dance Airplay',
    img: 'https://www.wmg.com/wp-content/uploads/2026/02/DavidGuetta-scaled.jpg',
  },
  {
    name: 'Charlie Puth',
    stat: '2B+ streams on "Attention"',
    img: 'https://www.wmg.com/wp-content/uploads/2026/02/CharliePuth-scaled.jpg',
  },
  {
    name: 'ROSÉ',
    stat: 'APT.: Global #1 in 50+ countries',
    img: 'https://www.wmg.com/wp-content/uploads/2026/02/ROSE-683x1024.jpg',
  },
  {
    name: 'Fred again..',
    stat: 'BRIT Award, Best New Artist',
    img: 'https://www.wmg.com/wp-content/uploads/2026/02/Fredagain-scaled.jpg',
  },
]

function ArtistCard({
  name, genre, stat, img, color,
}: {
  name: string; genre?: string; stat?: string; img: string; color: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex-shrink-0 w-[190px] sm:w-[210px] rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: '3/4' }}
    >
      <Image
        src={img}
        alt={name}
        fill
        sizes="210px"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        unoptimized
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(4,10,20,0.05) 0%, rgba(4,10,20,0.6) 55%, rgba(4,10,20,0.98) 100%)' }} />

      {/* Top colour bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: color }} />

      {/* WMI badge */}
      <div
        className="absolute top-3 left-3 font-inter text-[8px] font-bold tracking-[0.14em] uppercase px-2 py-1 rounded-full backdrop-blur-sm"
        style={{ background: `${color}30`, color, border: `1px solid ${color}50` }}
      >
        Warner Music India
      </div>

      {/* Name + genre */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="font-outfit font-extrabold text-white text-[15px] leading-tight mb-1">{name}</div>
        <div className="font-inter text-[11px] tracking-wide"
          style={{ color: color === '#C41230' ? '#f87171' : '#7dd3fc' }}>
          {genre ?? stat}
        </div>
      </div>

      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${color}40` }} />
    </motion.div>
  )
}

/* ─── Kinetic marquee headline (WMG-style) ────────────────────────────── */
function KineticStrip({ text, color }: { text: string; color: string }) {
  return (
    <div className="overflow-hidden py-3 select-none"
      style={{ background: color, transform: 'skewY(-1deg)', margin: '0 -2rem' }}>
      <div className="marquee-track flex gap-8 whitespace-nowrap" style={{ transform: 'skewY(1deg)' }}>
        {Array(12).fill(text).map((t, i) => (
          <span key={i} className="font-outfit font-black text-white text-[12px] tracking-[0.15em] uppercase flex-shrink-0">
            {t} &nbsp;✦
          </span>
        ))}
      </div>
    </div>
  )
}

export default function WMGCredibility() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40])
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#040A14]" />

      {/* Parallax ambient glows */}
      <motion.div style={{ y: y1 }}
        className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.12) 0%, transparent 70%)' }} />
      </motion.div>
      <motion.div style={{ y: y2 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(196,18,48,0.08) 0%, transparent 70%)' }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
            className="platform-pill mb-5 inline-flex"
          >
            ✦ Warner Music Group · India &amp; Global
          </motion.div>

          <div className="overflow-hidden mb-3">
            <motion.h2
              initial={{ y: 80, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: EASE }}
              className="font-outfit font-black tracking-[-0.03em] leading-[0.95] text-white"
              style={{ fontSize: 'clamp(32px, 5.5vw, 64px)' }}
            >
              The Label Behind
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: 80, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
              className="font-outfit font-black tracking-[-0.03em] leading-[0.95]"
              style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', color: '#0A64C3' }}
            >
              The World&apos;s Biggest.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed max-w-2xl"
          >
            WB is officially backed by <strong className="text-white">Warner Music India Partner</strong>, giving us access to
            Warner Music Group&apos;s global infrastructure. The same reach powering Bruno Mars, Coldplay &amp; Ed Sheeran globally
            now powers <strong className="text-white">your independent music career</strong>.
          </motion.p>
        </div>

        {/* ── India Artists Slider ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="mb-5"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-0.5 flex-shrink-0">
              <Image src="/partners/warnermusicindia-3pJs86tg.png" alt="Warner Music India Partner" width={32} height={32} className="object-contain w-full h-full" />
            </div>
            <div>
              <div className="font-outfit font-extrabold text-white text-[15px]">Warner Music Group</div>
              <div className="font-inter text-[11px] text-crm uppercase tracking-wide font-semibold">Our official label partner</div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex gap-4 artist-slider-track py-2">
              {[...INDIA_ARTISTS, ...INDIA_ARTISTS].map((a, i) => (
                <ArtistCard key={i} {...a} color="#C41230" />
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
              style={{ background: 'linear-gradient(90deg, #040A14 0%, transparent 100%)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
              style={{ background: 'linear-gradient(270deg, #040A14 0%, transparent 100%)' }} />
          </div>
        </motion.div>

        {/* WMG-style kinetic strip */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-6"
        >
          <KineticStrip text="Warner Music India Partner · WB · Official Partner" color="#C41230" />
        </motion.div>

        {/* ── Global Artists Slider ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-[18px]"
              style={{ background: 'rgba(10,100,195,0.2)', border: '1px solid rgba(10,100,195,0.3)' }}>
              🌍
            </div>
            <div>
              <div className="font-outfit font-extrabold text-white text-[15px]">Warner Music Group Global</div>
              <div className="font-inter text-[11px] text-sky uppercase tracking-wide font-semibold">75+ years · 40+ countries</div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex gap-4 artist-slider-track-rev py-2">
              {[...GLOBAL_ARTISTS, ...GLOBAL_ARTISTS].map((a, i) => (
                <ArtistCard key={i} name={a.name} stat={a.stat} img={a.img} color="#0A64C3" />
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
              style={{ background: 'linear-gradient(90deg, #040A14 0%, transparent 100%)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
              style={{ background: 'linear-gradient(270deg, #040A14 0%, transparent 100%)' }} />
          </div>
        </motion.div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-8 py-6 rounded-2xl"
          style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}
        >
          {[
            { num: '75+',  lbl: 'Years of WMG History' },
            { num: '40+',  lbl: 'Countries Worldwide' },
            { num: '10+',  lbl: 'WMI India Artists' },
            { num: '150M+',lbl: 'Bruno Mars Monthly Listeners' },
            { num: '10.3M',lbl: 'Coldplay Tour Tickets Sold' },
          ].map((s, i) => (
            <motion.div key={i} className="flex flex-col items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: EASE }}
            >
              <span className="font-outfit font-black text-[24px] sm:text-[28px] text-blu leading-none">{s.num}</span>
              <span className="font-inter text-[10px] text-mut tracking-[0.08em] uppercase mt-1 text-center">{s.lbl}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
