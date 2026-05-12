'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const PILLARS = [
  { title: 'Artist First',   color: '#C41230', desc: 'Your music, your rights, your money. We never take a percentage of your royalties.' },
  { title: 'India First',    color: '#0A64C3', desc: 'JioSaavn and Gaana before Spotify. Built for India, reaching the world.' },
  { title: 'Honest',         color: '#5CB2DC', desc: '48 hours means 48 hours. No ambiguity, no fine print, no surprises.' },
  { title: 'Major Quality',  color: '#002A8D', desc: 'Warner Music India partnership means major-label standards on every release.' },
]

const EASE = [0.22, 1, 0.36, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
}
const cardItem: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.96 },
  show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(10,100,195,0.08) 0%, transparent 70%)' }} />

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div variants={item} className="platform-pill mb-6">About WB Digital</motion.div>
            <motion.h2
              variants={item}
              className="font-outfit font-black leading-[1.0] tracking-[-0.02em] mb-6"
              style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              <span className="block text-white">Premium Music</span>
              <span className="block text-white">Production &amp;</span>
              <span className="block" style={{ color: '#0A64C3' }}>Distribution.</span>
            </motion.h2>
            <motion.p
              variants={item}
              className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed mb-6"
            >
              Western Beats Private Limited is India&apos;s most credible independent music company —
              officially backed by Warner Music India. We are built to give independent artists
              access to major-label reach without major-label restrictions.
            </motion.p>
            <motion.p
              variants={item}
              className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed mb-10"
            >
              From JioSaavn and Gaana to Spotify, Apple Music, YouTube Music, and 145+ more
              platforms worldwide — your music goes everywhere your fans are. One upload,
              150+ destinations, 100% of your royalties. Always free.
            </motion.p>

            {/* WMI badge */}
            <motion.div
              variants={item}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-blu/30"
              style={{ background: 'rgba(10,100,195,0.1)' }}
            >
              <div className="w-9 h-9 rounded-full overflow-hidden border border-blu/40 flex-shrink-0">
                <Image src="/logo.jpg" alt="WB Digital" width={36} height={36} className="object-cover" />
              </div>
              <div>
                <div className="font-inter text-[10px] text-sky tracking-[0.1em] uppercase font-semibold">Official Distribution Partner</div>
                <div className="font-outfit font-bold text-white text-[13px] sm:text-[14px]">Warner Music India · @warnermusicindia</div>
              </div>
            </motion.div>
          </div>

          {/* Right — Brand pillars */}
          <motion.div variants={container} className="grid grid-cols-2 gap-3 sm:gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                variants={cardItem}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-hover rounded-2xl p-5 sm:p-6 relative overflow-hidden"
                style={{ background: 'rgba(10,21,53,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: p.color }} />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-outfit font-black text-[18px] text-white"
                  style={{ background: `${p.color}33`, border: `1px solid ${p.color}66` }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="font-outfit font-extrabold text-white text-[15px] sm:text-[16px] mb-2">{p.title}</div>
                <div className="font-inter text-[12px] sm:text-[13px] text-mut leading-relaxed">{p.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
