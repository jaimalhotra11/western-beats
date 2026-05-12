'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import { Music2, Calendar, Users, Video, Mic2, BarChart3 } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

const SERVICES = [
  {
    icon: Music2,
    title: 'Music Distribution',
    tag: 'Core Service',
    color: '#0A64C3',
    desc: 'Upload once. We deliver to 150+ streaming platforms simultaneously — JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and 145 more. Live in 48-72 hours. 100% royalties. Free.',
    points: ['150+ platforms worldwide', '48-72 hour delivery', '100% royalties kept', 'ISRC/UPC generation'],
  },
  {
    icon: Calendar,
    title: 'Event Management',
    tag: 'Full Service',
    color: '#C41230',
    desc: 'Full-service concert and event production from concept to curtain call. Artist concerts, album launches, listening parties, brand activations, and festival partnerships.',
    points: ['Venue booking & stage production', 'PR & media outreach', 'Artist rider management', 'Live streaming & recording'],
  },
  {
    icon: Users,
    title: 'Talent Management',
    tag: 'Artist Growth',
    color: '#5CB2DC',
    desc: 'End-to-end artist management: brand partnerships, career strategy, booking, and direct access to the Warner Music India ecosystem of curators, labels, and media.',
    points: ['Career strategy & planning', 'Brand partnership deals', 'Industry connections via WMI', 'Social media growth'],
  },
  {
    icon: Mic2,
    title: 'Audio Production',
    tag: 'Studio Quality',
    color: '#002A8D',
    desc: 'Studio recording, mixing, mastering, and sound design to international streaming standards. From demos and singles to full album productions backed by WMI quality benchmarks.',
    points: ['Professional recording sessions', 'Mixing & mastering', 'WMI quality standards', 'Demo to full album'],
  },
  {
    icon: Video,
    title: 'Video Direction',
    tag: 'Visual Identity',
    color: '#C41230',
    desc: 'Music video direction, Instagram Reels, YouTube Shorts, promo clips, and social media content designed to go viral and match the WB Digital visual identity.',
    points: ['Music video production', 'Instagram Reels & Shorts', 'Promo & campaign videos', 'BTS & EPK content'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Strategy',
    tag: 'Data Driven',
    color: '#0A64C3',
    desc: 'Real-time streaming analytics, audience demographics, playlist tracking, and revenue reporting across all 150+ platforms. Make data-driven decisions about your music career.',
    points: ['Real-time streaming data', 'Audience demographics', 'Revenue transparency', 'Monthly detailed reports'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,21,53,0.3) 0%, transparent 50%, rgba(10,21,53,0.3) 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <motion.div variants={fadeUp} className="platform-pill mb-5 inline-flex">What We Do</motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-outfit font-black tracking-[-0.02em] leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
          >
            <span className="text-white">Full-Service</span>{' '}
            <span style={{ color: '#0A64C3' }}>Music Company.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed">
            Distribution is just the beginning. WB Digital provides everything an independent artist
            needs to build a sustainable music career at major-label scale.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: EASE }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-hover group rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col"
              style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: s.color }}
              />
              {/* BG number */}
              <div
                className="absolute bottom-4 right-4 font-outfit font-black text-[64px] leading-none opacity-[0.04] select-none"
                style={{ color: s.color }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon + tag */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${s.color}20` }}
                >
                  <s.icon size={20} style={{ color: s.color }} />
                </div>
                <span
                  className="font-outfit font-semibold text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                  style={{ background: `${s.color}18`, color: s.color, border: `1px solid ${s.color}33` }}
                >
                  {s.tag}
                </span>
              </div>

              <div className="font-outfit font-extrabold text-white text-[18px] mb-3">{s.title}</div>
              <div className="font-inter text-[13.5px] text-mut leading-relaxed mb-5 flex-1">{s.desc}</div>

              {/* Points */}
              <div className="flex flex-col gap-2 pt-5 border-t border-white/[0.06]">
                {s.points.map(p => (
                  <div key={p} className="flex items-center gap-2.5 font-inter text-[12.5px] text-ice/70">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
