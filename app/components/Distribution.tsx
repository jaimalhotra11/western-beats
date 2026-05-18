'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Upload, Globe, DollarSign, Zap, CheckCircle, MoreHorizontal } from 'lucide-react'
import { PLATFORMS } from './platforms'

const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

const STEPS = [
  {
    icon: Upload,
    num: '01',
    title: 'Upload Your Music',
    desc: 'Submit your track, album artwork, ISRC code, and release details. Our team reviews everything within 24 hours.',
    color: '#0A64C3',
  },
  {
    icon: Globe,
    num: '02',
    title: 'We Distribute',
    desc: 'We deliver your music to all 150+ platforms simultaneously — live within 48–72 hours of approval.',
    color: '#5CB2DC',
  },
  {
    icon: DollarSign,
    num: '03',
    title: 'You Earn 70%',
    desc: '70% of royalties from every platform flow directly to you. Monthly payouts, full transparency. We only earn when you earn.',
    color: '#C41230',
  },
]

const PLATFORMS_GRID = [
  ...PLATFORMS.slice(0, 11),
  { name: '+ 139 More', tag: 'Worldwide', color: '#0A64C3', Icon: MoreHorizontal as any },
]

const FEATURES = [
  'Free distribution — no annual fees, no per-track fees',
  '70% of all royalties paid directly to you — monthly',
  'We only earn when you earn — zero upfront risk',
  'Release to 150+ platforms simultaneously',
  'Live on all platforms in 48–72 hours',
  'ISRC and UPC code generation',
  'Real-time streaming analytics dashboard',
  'Keep 100% ownership of your masters',
  'Dedicated support team via WhatsApp & email',
]

export default function Distribution() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="distribution" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="crm-stripe absolute top-0 left-0 right-0" />
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,21,53,0.5) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <motion.div variants={fadeUp} className="platform-pill mb-5 inline-flex">Music Distribution</motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-outfit font-black tracking-[-0.02em] leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}
          >
            <span className="text-white">One Upload.</span>{' '}
            <span style={{ color: '#0A64C3' }}>150+ Platforms.</span>{' '}
            <span className="text-white">Free.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed">
            WB Digital distributes your music to every major streaming platform worldwide.
            We handle the delivery — you focus on the music.
          </motion.p>
        </motion.div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-20 sm:mb-24">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: EASE }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-hover relative rounded-2xl p-7 sm:p-8 overflow-hidden"
              style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: step.color }} />
              {/* Big number bg */}
              <div
                className="absolute top-4 right-4 font-outfit font-black text-[72px] leading-none opacity-[0.07]"
                style={{ color: step.color }}
              >
                {step.num}
              </div>
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${step.color}22` }}
              >
                <step.icon size={22} style={{ color: step.color }} />
              </div>
              <div className="font-outfit font-extrabold text-white text-[18px] mb-3">{step.title}</div>
              <div className="font-inter text-[14px] text-mut leading-relaxed">{step.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Platforms grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="mb-20 sm:mb-24"
        >
          <div className="text-center mb-10">
            <div className="font-outfit font-bold text-[20px] sm:text-[22px] text-white mb-2">150+ Platforms. Everywhere.</div>
            <div className="font-inter text-[13px] sm:text-[14px] text-mut">Your music goes where your fans are.</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {PLATFORMS_GRID.map((p, i) => {
              const Icon = p.Icon
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.04, ease: EASE }}
                  whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.25 } }}
                  className="card-hover rounded-xl p-4 flex flex-col items-center text-center"
                  style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${p.color}1A`, border: `1px solid ${p.color}40` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: p.color }} aria-hidden />
                  </div>
                  <div className="font-outfit font-bold text-white text-[12px] leading-tight mb-1">{p.name}</div>
                  <div className="font-inter text-[10px]" style={{ color: p.color }}>{p.tag}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Features + CTA */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {/* Artist image */}
            <div className="relative rounded-2xl overflow-hidden mb-8" style={{ aspectRatio: '16/9' }}>
              <Image
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80&auto=format&fit=crop"
                alt="Artist performing live — WB Digital distribution"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(10,100,195,0.3) 0%, rgba(4,10,20,0.55) 60%, rgba(4,10,20,0.85) 100%)' }}
              />
              {/* Overlay stats */}
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-crm animate-pulse" />
                  <span className="font-inter text-[10px] text-white/80 tracking-[0.1em] uppercase font-semibold">Now Distributing</span>
                </div>
                <div>
                  <div className="flex items-end gap-6 mb-3">
                    {[
                      { num: '150+', lbl: 'Platforms' },
                      { num: '48h', lbl: 'Go Live' },
                      { num: '70%', lbl: 'Royalties' },
                    ].map(s => (
                      <div key={s.lbl}>
                        <div className="font-outfit font-black text-white text-[20px] sm:text-[24px] leading-none">{s.num}</div>
                        <div className="font-inter text-[9px] text-white/60 tracking-[0.08em] uppercase mt-0.5">{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                  <div className="font-inter text-[10px] text-sky tracking-[0.08em] uppercase font-semibold">
                    ✦ Backed by Warner Music India
                  </div>
                </div>
              </div>
            </div>

            <div className="font-outfit font-extrabold text-white text-[22px] sm:text-[26px] mb-8">
              Everything included. Nothing hidden.
            </div>
            <div className="flex flex-col gap-3">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.65 + i * 0.06 }}
                  className="flex items-center gap-3 font-inter text-[14px] text-ice"
                >
                  <CheckCircle size={16} className="text-blu flex-shrink-0" />
                  {f}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
            className="rounded-2xl p-8 sm:p-10 relative overflow-hidden"
            style={{ background: '#0A64C3', boxShadow: '0 30px 80px rgba(10,100,195,0.35)' }}
          >
            {/* Shimmer */}
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)' }} />
            <div className="relative z-10">
              <div className="font-outfit font-black text-white text-[36px] sm:text-[42px] leading-none mb-2">Free.</div>
              <div className="font-inter text-ice text-[16px] mb-8 leading-relaxed">
                No annual fees. No per-track charges. You keep 70% of every stream — we only earn when you do.
                Just upload and distribute — it costs you nothing upfront.
              </div>
              <div className="flex flex-col gap-3">
                <div className="font-inter text-white/80 text-[13px]">✦ Instant setup — no approval wait</div>
                <div className="font-inter text-white/80 text-[13px]">✦ Warner Music India backed</div>
                <div className="font-inter text-white/80 text-[13px]">✦ 27.8K+ verified Instagram community</div>
              </div>
              <a
                href="mailto:contact@westernbeats.com?subject=Distribution Enquiry"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-[#080F1A] rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-[#0A1535] transition-colors duration-200"
              >
                <Zap size={16} />
                Start Distributing Today
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
