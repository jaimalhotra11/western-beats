'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

type Stat = { value: number; suffix: string; prefix?: string; label: string; sub: string; color: string }
const STATS: Stat[] = [
  { value: 150,  suffix: '+',   label: 'Streaming Platforms', sub: 'Worldwide distribution', color: '#0A64C3' },
  { value: 100,  suffix: '%',   label: 'Artist Royalties',    sub: 'Always kept by you',     color: '#C41230' },
  { value: 27.8, suffix: 'K',   label: 'Instagram Followers', sub: 'Verified account',       color: '#5CB2DC' },
  { value: 4.1,  suffix: 'M',   label: 'Top Reel Views',      sub: 'Organic reach',          color: '#0A64C3' },
  { value: 48,   suffix: 'hrs', label: 'Go Live Time',        sub: 'From upload to platform',color: '#C41230' },
  { value: 0,    suffix: '',    prefix: '₹', label: 'Cost to Distribute', sub: 'Completely free', color: '#5CB2DC' },
]

function Counter({ value, suffix, prefix, color, inView }: { value: number; suffix: string; prefix?: string; color: string; inView: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  const formatted = value % 1 === 0 ? Math.round(display).toString() : display.toFixed(1)

  return (
    <span className="font-outfit font-black leading-none tabular-nums" style={{ color }}>
      {prefix}{formatted}{suffix}
    </span>
  )
}

const EASE = [0.22, 1, 0.36, 1] as const

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stats" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Dark panel */}
      <div className="absolute inset-0 bg-[#060C18]" />
      {/* Ambient concert background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600&q=60&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.055] mix-blend-luminosity"
          priority={false}
        />
      </div>
      <div className="crm-stripe absolute top-0 left-0 right-0" />
      <div className="crm-stripe absolute bottom-0 left-0 right-0" />
      {/* Radial */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
            className="platform-pill mb-5 inline-flex"
          >
            By the Numbers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-outfit font-black tracking-[-0.02em] leading-[1.0]"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
          >
            <span className="text-white">The Numbers</span>{' '}
            <span style={{ color: '#0A64C3' }}>Don&apos;t Lie.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed mt-5 max-w-xl mx-auto"
          >
            Real metrics from a real, growing music platform — built by independent
            artists, for independent artists.
          </motion.p>
        </div>

        {/* Stats grid — centered cards with real gaps */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 60, scale: 0.85 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.1,
                type: 'spring',
                stiffness: 80,
                damping: 14,
              }}
              whileHover={{ y: -10, scale: 1.04, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
              className="w-full sm:w-[300px] rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center relative overflow-hidden group"
              style={{
                background: 'linear-gradient(180deg, rgba(10,21,53,0.7) 0%, rgba(6,12,24,0.92) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: s.color }}
              />
              {/* Glow */}
              <div
                className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
                style={{ background: s.color }}
              />

              <div className="text-[56px] sm:text-[64px] md:text-[72px] leading-none mb-4 relative z-10">
                <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} color={s.color} inView={inView} />
              </div>
              <div className="font-outfit font-bold text-white text-[15px] sm:text-[17px] mb-1.5 relative z-10">
                {s.label}
              </div>
              <div className="font-inter text-[12px] sm:text-[13px] text-mut relative z-10">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* WMI partnership bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
          className="mt-14 sm:mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 p-6 sm:p-8 rounded-2xl text-center md:text-left"
          style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}
        >
          <div className="font-inter text-[12px] sm:text-[13px] text-sky tracking-[0.1em] uppercase font-semibold">
            Official Distribution Partner
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div className="font-outfit font-extrabold text-white text-[20px] sm:text-[22px]">Warner Music India</div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div className="font-inter text-[12px] sm:text-[13px] text-mut">
            @warnermusicindia · A Warner Music Group Company
          </div>
        </motion.div>
      </div>
    </section>
  )
}
