'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Upload, Globe2, DollarSign, CheckCircle, ArrowRight,
  Music2, FileText, Clock, Zap, Shield, BarChart3,
  ChevronRight,
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.7, ease: EASE } },
}
const container: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const WAVEFORM_HEIGHTS   = [0.3,0.6,0.9,0.5,1.0,0.4,0.7,0.8,0.3,0.6,0.95,0.5,0.4,0.8,0.6,0.3,0.9,0.7,0.4,0.6,0.85]
const WAVEFORM_DURATIONS = [1.1,0.9,1.3,0.8,1.4,1.0,1.2,0.85,1.35,0.95,1.15,0.75,1.25,1.05,0.9,1.4,0.8,1.2,1.1,0.95,1.3]

const STEPS = [
  {
    num: '01',
    icon: Upload,
    color: '#0A64C3',
    title: 'Submit Your Music',
    subtitle: 'Takes less than 10 minutes',
    desc: 'Send us your track, album artwork, and release details. Our team reviews everything within 24 hours and ensures your metadata, artwork, and audio meet platform requirements.',
    checklist: [
      'WAV or high-quality MP3 audio file',
      'Square album artwork (3000×3000px minimum)',
      'Track name, artist name, release date',
      'Genre, language & mood tags',
      'We generate your ISRC & UPC codes free',
    ],
    badge: 'Step 1',
    badgeColor: '#0A64C3',
  },
  {
    num: '02',
    icon: Globe2,
    color: '#5CB2DC',
    title: 'We Distribute',
    subtitle: '150+ platforms in 48 hours',
    desc: 'Once approved, WB Digital delivers your music to every major streaming platform simultaneously. JioSaavn and Gaana are prioritized for Indian artists — then Spotify, Apple Music, YouTube Music, and 145+ more globally.',
    checklist: [
      'JioSaavn, Gaana, Hungama, Resso, Wynk — India first',
      'Spotify, Apple Music, YouTube Music worldwide',
      'Amazon Music, Tidal, Deezer, SoundCloud & more',
      'Live on all platforms within 48 hours of approval',
      'Priority processing via Warner Music India partnership',
    ],
    badge: 'Step 2',
    badgeColor: '#5CB2DC',
  },
  {
    num: '03',
    icon: DollarSign,
    color: '#C41230',
    title: 'Earn 70% Royalties',
    subtitle: 'Paid monthly, every month',
    desc: '70% of all streaming royalties from every platform flow directly to you every month. We take 30% only when you earn — we never charge you upfront. The more you earn, the more we both earn. Perfectly aligned.',
    checklist: [
      '70% royalties paid directly to you monthly',
      'We earn 30% only when you earn — zero upfront cost',
      'Real-time dashboard: track every stream live',
      'Revenue breakdown by platform & territory',
      'Transparent monthly PDF payout reports',
    ],
    badge: 'Step 3',
    badgeColor: '#C41230',
  },
]

const TIMELINE = [
  { time: 'Day 0', event: 'You submit your music', icon: Upload, color: '#0A64C3' },
  { time: '< 24 hrs', event: 'WB Digital reviews & approves', icon: CheckCircle, color: '#5CB2DC' },
  { time: '< 48 hrs', event: 'Live on JioSaavn, Gaana, Spotify & 147+ platforms', icon: Globe2, color: '#0A64C3' },
  { time: 'Monthly', event: 'Royalties paid directly to you', icon: DollarSign, color: '#C41230' },
]

const WHY_ITEMS = [
  { icon: Zap,        color: '#0A64C3', title: '48-Hour Go-Live',         desc: 'While DistroKid takes 7–10 days and TuneCore 7–10 days, your music is live in 48 hours.' },
  { icon: Shield,     color: '#C41230', title: 'Warner Music India Backed', desc: 'Official partnership with Warner Music India — major-label credibility, priority DSP placement.' },
  { icon: Music2,     color: '#5CB2DC', title: 'India-First Distribution', desc: 'JioSaavn and Gaana distribution prioritized — something no foreign distributor can match.' },
  { icon: BarChart3,  color: '#0A64C3', title: 'Real-Time Analytics',      desc: 'Live streaming data, audience demographics, and revenue tracking across all 150+ platforms.' },
  { icon: FileText,   color: '#C41230', title: 'Free ISRC & UPC Codes',    desc: 'We generate your ISRC and UPC codes at no cost — DistroKid charges extra for these.' },
  { icon: Clock,      color: '#5CB2DC', title: '24/7 Artist Support',      desc: 'Direct WhatsApp and email support — not a ticket system. Real people, real answers.' },
]

export default function HowItWorksPage() {
  const heroRef  = useRef(null)
  const stepsRef = useRef(null)
  const whyRef   = useRef(null)
  const stepsView = useInView(stepsRef, { once: true, margin: '-80px' })
  const whyView   = useInView(whyRef, { once: true, margin: '-80px' })

  return (
    <div className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

      {/* ── NAV ──────────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060C18]/95 backdrop-blur-xl border-b border-white/[0.06] py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-9 rounded-lg overflow-hidden bg-white p-0.5 flex-shrink-0 group-hover:shadow-[0_0_12px_rgba(10,100,195,0.5)] transition-all duration-300">
              <Image src="/partners/westernbeats-BpLvGE3e.png" alt="Western Beats" fill sizes="40px" className="object-contain" />
            </div>
            <div>
              <div className="font-outfit font-black text-[15px] tracking-[0.04em] text-white leading-none">WESTERN BEATS</div>
              <div className="font-inter text-[9px] text-mut tracking-[0.12em] uppercase">Official Warner Music India Partner</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/how-it-works', label: 'How It Works', active: true },
              { href: '/pricing', label: 'Pricing' },
              { href: '/submit', label: 'Submit Music' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 relative group ${l.active ? 'text-white' : 'text-mut hover:text-white'}`}
              >
                {l.label}
                {l.active
                  ? <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blu rounded-full" />
                  : <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blu scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                }
              </Link>
            ))}
          </div>
          <Link href="/submit" className="hidden md:flex px-5 py-2.5 bg-blu rounded-lg font-outfit font-bold text-[13px] text-white hover:bg-[#0D77E0] transition-colors duration-200">
            Submit Music Free
          </Link>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div className="absolute top-1/2 left-1/4 w-[700px] h-[500px] rounded-full -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.14) 0%, transparent 70%)' }} />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">How It Works</li>
            </ol>
          </nav>

          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="platform-pill mb-6 inline-flex">
              ✦ Simple. Transparent. Free.
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(42px, 7vw, 88px)' }}
            >
              <span className="block text-white">3 Steps.</span>
              <span className="block" style={{ color: '#0A64C3' }}>150+ Platforms.</span>
              <span className="block text-white">70% Yours.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-inter text-[16px] sm:text-[18px] text-mut leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              WB Digital makes music distribution the simplest thing you&apos;ll do today.
              Submit your music, we handle the rest — 150+ platforms in 48 hours, 70% royalties straight to you.
              <strong className="text-white"> Always free to distribute.</strong>
            </motion.p>

            {/* Waveform */}
            <motion.div variants={fadeUp} className="flex items-end justify-center gap-[3px] h-10 mb-10">
              {WAVEFORM_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="w-[3px] bg-blu/60 rounded-full origin-bottom"
                  style={{
                    height: `${h * 40}px`,
                    animation: `wave ${WAVEFORM_DURATIONS[i]}s ease-in-out ${i * 0.05}s infinite alternate`,
                  }}
                />
              ))}
            </motion.div>

            {/* Timeline bar */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-3 sm:gap-0 sm:divide-x sm:divide-white/10"
            >
              {TIMELINE.map((t, i) => (
                <div key={i} className="flex flex-col items-center px-6 py-2">
                  <span className="font-outfit font-black text-[15px] sm:text-[17px]" style={{ color: t.color }}>{t.time}</span>
                  <span className="font-inter text-[11px] text-mut mt-1 text-center max-w-[120px]">{t.event}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STEPS ────────────────────────────────────────────────────────────── */}
      <section ref={stepsRef} className="py-20 sm:py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-16 sm:gap-20">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 1
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 50 }}
                  animate={stepsView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Text side */}
                  <div className={isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="font-outfit font-bold text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full"
                        style={{ background: `${step.color}18`, color: step.color, border: `1px solid ${step.color}33` }}
                      >
                        {step.badge}
                      </span>
                      <span className="font-inter text-[12px] text-mut">{step.subtitle}</span>
                    </div>
                    <h2
                      className="font-outfit font-black text-white leading-[1.0] tracking-[-0.02em] mb-5"
                      style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
                    >
                      {step.title}
                    </h2>
                    <p className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed mb-7">
                      {step.desc}
                    </p>
                    <div className="flex flex-col gap-3">
                      {step.checklist.map((item, j) => (
                        <div key={j} className="flex items-start gap-3 font-inter text-[14px] text-ice/80">
                          <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: step.color }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual card side */}
                  <div className={isEven ? 'lg:col-start-1' : ''}>
                    <motion.div
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                      className="rounded-3xl p-8 sm:p-10 relative overflow-hidden"
                      style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: step.color }} />
                      <div
                        className="absolute bottom-4 right-6 font-outfit font-black text-[80px] leading-none opacity-[0.05]"
                        style={{ color: step.color }}
                      >
                        {step.num}
                      </div>
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                        style={{ background: `${step.color}22` }}
                      >
                        <Icon size={28} style={{ color: step.color }} />
                      </div>
                      <div className="font-outfit font-extrabold text-white text-[22px] sm:text-[26px] mb-3">{step.title}</div>
                      <div className="font-inter text-[14px] text-mut leading-relaxed">{step.desc}</div>

                      {/* Progress indicator */}
                      <div className="mt-8 flex items-center gap-3">
                        {[0, 1, 2].map(dot => (
                          <div
                            key={dot}
                            className="h-1.5 rounded-full transition-all duration-300"
                            style={{
                              width: dot === i ? '32px' : '8px',
                              background: dot === i ? step.color : 'rgba(255,255,255,0.1)',
                            }}
                          />
                        ))}
                        <span className="font-inter text-[11px] text-mut ml-1">Step {i + 1} of 3</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY WB DIGITAL ───────────────────────────────────────────────────── */}
      <section ref={whyRef} className="py-20 sm:py-28 relative">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,21,53,0.4) 0%, transparent 50%, rgba(10,21,53,0.4) 100%)' }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={whyView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE }}
              className="platform-pill mb-5 inline-flex"
            >
              Why WB Digital
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={whyView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-outfit font-black tracking-[-0.02em] leading-[1.05]"
              style={{ fontSize: 'clamp(30px, 5vw, 54px)' }}
            >
              <span className="text-white">What Makes Us</span>{' '}
              <span style={{ color: '#0A64C3' }}>Different.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={whyView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="font-inter text-[15px] text-mut leading-relaxed mt-4 max-w-xl mx-auto"
            >
              The same Warner Music India that works with Armaan Malik, Diljit Dosanjh, King, and Darshan Raval
              — now powers every independent artist on WB Digital.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_ITEMS.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={whyView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: EASE }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="rounded-2xl p-6 sm:p-7 relative overflow-hidden"
                  style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: item.color }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}20` }}>
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <div className="font-outfit font-extrabold text-white text-[16px] mb-2">{item.title}</div>
                  <div className="font-inter text-[13px] text-mut leading-relaxed">{item.desc}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="rounded-3xl p-10 sm:p-14 relative overflow-hidden"
            style={{ background: '#0A64C3', boxShadow: '0 40px 100px rgba(10,100,195,0.3)' }}
          >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)' }} />
            <div className="relative z-10">
              <div className="font-outfit font-black text-white text-[40px] sm:text-[52px] leading-none mb-3">Ready?</div>
              <div className="font-inter text-ice/90 text-[16px] sm:text-[18px] mb-8 leading-relaxed">
                Submit your music today. Live on 150+ platforms in 48 hours.
                <br />
                <strong className="text-white">70% royalties. Free forever.</strong>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/submit"
                  className="group flex items-center gap-2 px-7 py-4 bg-[#080F1A] rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-[#0A1535] transition-colors duration-200"
                >
                  Submit Your Music
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center gap-2 px-7 py-4 bg-white/10 rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-white/20 transition-colors duration-200"
                >
                  View Pricing
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-inter text-[12px] text-mut">© 2025 Western Beats Private Limited · WB Digital</div>
          <div className="flex items-center gap-5">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/submit', label: 'Submit' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="font-inter text-[12px] text-mut hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}
