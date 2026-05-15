'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import Image from 'next/image'
import { Play, ChevronDown } from 'lucide-react'
import { PLATFORMS } from './platforms'

const WAVEFORM_HEIGHTS = [0.3,0.6,0.9,0.5,1.0,0.4,0.7,0.8,0.3,0.6,0.95,0.5,0.4,0.8,0.6,0.3,0.9,0.7,0.4,0.6,0.85]
const WAVEFORM_DURATIONS = [1.1,0.9,1.3,0.8,1.4,1.0,1.2,0.85,1.35,0.95,1.15,0.75,1.25,1.05,0.9,1.4,0.8,1.2,1.1,0.95,1.3]

const EASE = [0.22, 1, 0.36, 1] as const

const container: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const lineItem: Variants = {
  hidden: { y: 80, opacity: 0 },
  show:   { y: 0, opacity: 1, transition: { duration: 0.85, ease: EASE } },
}
const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show:   { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -160])
  const y2 = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#040A14]" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-crm/60" style={{ boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />

      {/* Radial glows (parallax) */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 800], [0, 200]) }}
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full" style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.18) 0%, transparent 70%)' }} />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollY, [0, 800], [0, 120]) }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
      >
        <div className="w-full h-full" style={{ background: 'radial-gradient(ellipse, rgba(196,18,48,0.1) 0%, transparent 70%)' }} />
      </motion.div>

      {/* Animated orbit ring — Western Beats logo only */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: EASE }}
          className="absolute right-8 xl:right-16 top-[32%] -translate-y-1/2 hidden lg:block z-[5]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="w-[360px] xl:w-[420px] h-[360px] xl:h-[420px] rounded-full border border-blu/10 relative"
          >
            {[0,60,120,180,240,300].map((deg, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-blu/50"
                style={{
                  top: '50%', left: '50%',
                  transform: `rotate(${deg}deg) translateX(180px) translateY(-50%)`,
                  boxShadow: '0 0 10px rgba(10,100,195,0.6)',
                }}
              />
            ))}
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[60px] rounded-full border border-sky/15"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[120px] rounded-full border border-blu/10 border-dashed"
          />
          {/* Logo only */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-36 xl:w-40 h-36 xl:h-40 rounded-full overflow-hidden border-2 border-blu/40 glow-pulse"
            >
              <Image src="/partners/westernbeats-BpLvGE3e.png" alt="Western Beats" width={160} height={160} sizes="160px" className="object-contain bg-white w-full h-full p-3" />
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Main content */}
      <motion.div
        style={{ y: y1, opacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-12 sm:pt-32 sm:pb-16"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="platform-pill mb-6 inline-flex">
          ✦ Western Beats · Official Warner Music India Partner
        </motion.div>

        {/* Headline */}
        <div className="max-w-3xl">
          <h1
            className="font-outfit font-black leading-[0.92] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(44px, 8vw, 96px)' }}
          >
            <motion.span variants={lineItem} className="block text-white overflow-hidden">Where</motion.span>
            <motion.span variants={lineItem} className="block overflow-hidden" style={{ color: '#0A64C3' }}>Independent</motion.span>
            <motion.span variants={lineItem} className="block text-white overflow-hidden">Meets Major.</motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="font-inter text-[15px] sm:text-[17px] text-mut leading-relaxed mb-8 sm:mb-10 max-w-xl"
          >
            <strong className="text-white">Western Beats</strong> — India&apos;s most credible full-service music company,
            officially backed by Warner Music India. Distribute to 150+ platforms worldwide via WB Digital.
            Keep 100% of your royalties. Always free.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16">
            <a
              href="#distribution"
              onClick={e => { e.preventDefault(); document.querySelector('#distribution')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="group flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-blu rounded-xl font-outfit font-bold text-[14px] sm:text-[15px] text-white hover:bg-[#0D77E0] transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 8px 30px rgba(10,100,195,0.35)' }}
            >
              Start Distributing Free
              <span className="text-ice/80 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#services"
              onClick={e => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-white/[0.06] border border-white/[0.1] rounded-xl font-outfit font-bold text-[14px] sm:text-[15px] text-white hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300 hover:-translate-y-1"
            >
              <Play size={14} className="fill-white" />
              Our Services
            </a>
          </motion.div>

          {/* Waveform */}
          <motion.div variants={fadeUp} className="flex items-end gap-[3px] h-12 mb-3">
            {WAVEFORM_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className="w-[3px] bg-blu/60 rounded-full origin-bottom"
                style={{
                  height: `${h * 48}px`,
                  animation: `wave ${WAVEFORM_DURATIONS[i]}s ease-in-out ${i * 0.05}s infinite alternate`,
                }}
              />
            ))}
            <span className="ml-3 font-inter text-[12px] text-mut self-center">150+ Platforms Worldwide</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Platforms marquee */}
      <motion.div style={{ y: y2 }} className="relative z-10 w-full border-y border-white/[0.06] bg-white/[0.02] py-5 overflow-hidden">
        <div className="flex">
          <div className="marquee-track flex items-center gap-10 sm:gap-12 whitespace-nowrap">
            {[...PLATFORMS, ...PLATFORMS].map((p, i) => {
              const Icon = p.Icon
              return (
                <span key={i} className="flex items-center gap-2.5 text-mut hover:text-white transition-colors duration-300">
                  <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" style={{ color: p.color }} aria-hidden />
                  <span className="font-outfit font-semibold text-[12px] tracking-[0.1em] uppercase">{p.name}</span>
                  <span className="text-blu/30 ml-2">◆</span>
                </span>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Stats bar — centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 sm:py-8"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-6">
          {[
            { num: '150+', lbl: 'Streaming Platforms' },
            { num: '100%', lbl: 'Royalties Kept' },
            { num: '27.8K', lbl: 'Instagram Followers' },
            { num: '4.1M', lbl: 'Top Reel Views' },
            { num: 'Free', lbl: 'Distribution Cost' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + i * 0.08, duration: 0.5, ease: EASE }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-outfit font-black text-2xl sm:text-3xl text-blu leading-none tabular-nums">{s.num}</span>
              <span className="font-inter text-[10px] sm:text-[11px] text-mut tracking-[0.08em] uppercase mt-1.5">{s.lbl}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hidden sm:flex"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} className="text-mut" />
        </motion.div>
        <span className="font-inter text-[10px] text-mut/50 tracking-[0.14em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
