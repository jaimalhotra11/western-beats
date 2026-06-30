'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'
import Link from 'next/link'
import Nav from '../components/Nav'
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
    subtitle: '150+ platforms in 72 hours',
    desc: 'Once approved, we deliver your music to every major streaming platform simultaneously. JioSaavn and Gaana are prioritized for Indian artists, then Spotify, Apple Music, YouTube Music, and 145+ more globally.',
    checklist: [
      'JioSaavn, Gaana: India first',
      'Spotify, Apple Music, YouTube Music worldwide',
      'Amazon Music, Tidal, Deezer, SoundCloud & more',
      'Live on all platforms within 72 hours · Friday uploads go live Monday',
      'Priority processing via our Warner Music India Partnership',
    ],
    badge: 'Step 2',
    badgeColor: '#5CB2DC',
  },
  {
    num: '03',
    icon: DollarSign,
    color: '#C41230',
    title: 'Earn Your Royalties',
    subtitle: 'Paid directly to your bank account',
    desc: 'Your royalties flow directly to you from every platform. 100% ownership always yours. We only earn when you earn — never upfront. The more you earn, the more we both earn. Perfectly aligned.',
    checklist: [
      'Royalties paid direct to your bank account',
      'We only earn when you earn, zero upfront cost',
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
  { time: '< 24 hrs', event: 'Our team reviews & approves', icon: CheckCircle, color: '#5CB2DC' },
  { time: '< 72 hrs', event: 'Live on JioSaavn, Gaana, Spotify & 147+ platforms', icon: Globe2, color: '#0A64C3' },
  { time: 'Monthly', event: 'Royalties paid directly to you', icon: DollarSign, color: '#C41230' },
]

const WHY_ITEMS = [
  { icon: Zap,       color: '#0A64C3', title: '72-Hour Go-Live',          desc: 'DistroKid & TuneCore take 7–10 days. Your music is live on 150+ platforms in just 72 hours. Music uploaded Friday goes live Monday.' },
  { icon: Shield,    color: '#C41230', title: 'Same Network as Bruno Mars', desc: 'Warner Music Group, home to Bruno Mars (150M+ Spotify listeners), Coldplay, Ed Sheeran & Dua Lipa, backs us through our Warner Music India Partnership.' },
  { icon: Music2,    color: '#5CB2DC', title: "Major-Label Reach",  desc: 'Our Warner Music India Partnership means major-label quality standards and distribution reach — without major-label restrictions — for every independent artist.' },
  { icon: BarChart3, color: '#0A64C3', title: 'Real-Time Analytics',      desc: 'Live streaming data, audience demographics, playlist tracking, and revenue reporting across all 150+ platforms.' },
  { icon: FileText,  color: '#C41230', title: 'Free ISRC & UPC Codes',    desc: 'We generate your ISRC and UPC codes at no cost; DistroKid charges extra, CD Baby charges $5 each.' },
  { icon: Clock,     color: '#5CB2DC', title: '24/7 Artist Support',      desc: 'Direct WhatsApp and email support, not a ticket system. Real people, real answers within hours.' },
]

export default function HowItWorksPage() {
  const heroRef  = useRef(null)
  const stepsRef = useRef(null)
  const whyRef   = useRef(null)
  const stepsView = useInView(stepsRef, { once: true, margin: '-80px' })
  const whyView   = useInView(whyRef, { once: true, margin: '-80px' })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.page-hero-line', {
        y: 80, opacity: 0, skewY: 3, stagger: 0.12,
        duration: 1.0, ease: 'power4.out', delay: 0.1,
      })
      gsap.from('.page-badge', {
        y: -20, opacity: 0, duration: 0.6, ease: 'power3.out',
      })
      gsap.from('.page-subtext', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.5,
      })
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) => {
        gsap.from(el, {
          y: 60, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        })
      })
      gsap.utils.toArray<HTMLElement>('.gsap-card').forEach((el) => {
        const cards = el.querySelectorAll<HTMLElement>('.card-item')
        if (!cards.length) return
        gsap.from(cards, {
          y: 50, opacity: 0, scale: 0.95, stagger: 0.1, duration: 0.7,
          ease: 'back.out(1.4)',
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div className="absolute top-1/2 left-1/4 w-[700px] h-[500px] rounded-full -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.14) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">How It Works</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: headline */}
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="platform-pill page-badge mb-6 inline-flex">
                ✦ Simple. Transparent. Free.
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(42px, 7vw, 88px)' }}
              >
                <span className="page-hero-line block text-white">3 Steps.</span>
                <span className="page-hero-line block" style={{ color: '#0A64C3' }}>150+ Platforms.</span>
                <span className="page-hero-line block text-white">100% Yours.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="page-subtext font-inter text-[16px] sm:text-[17px] text-mut leading-relaxed mb-8 max-w-xl"
              >
                Western Beats makes music distribution the simplest thing you&apos;ll do today.
                Submit your music, we handle the rest: 150+ platforms in 72 hours, 100% ownership always yours.
                <strong className="text-white"> Always free. 100% IP ownership yours.</strong>
              </motion.p>

              {/* Waveform */}
              <motion.div variants={fadeUp} className="flex items-end gap-[3px] h-10 mb-8">
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

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Link href="/submit" className="px-6 py-3 bg-blu rounded-xl font-outfit font-bold text-[14px] text-white hover:bg-[#0D77E0] transition-colors">
                  Submit Music Free →
                </Link>
                <Link href="/pricing" className="px-6 py-3 bg-white/[0.07] border border-white/10 rounded-xl font-outfit font-bold text-[14px] text-white hover:bg-white/[0.12] transition-colors">
                  View Pricing
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22,1,0.36,1] }}
              className="rounded-3xl p-8 relative overflow-hidden hidden lg:block"
              style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#0A64C3' }} />
              <div className="font-outfit font-bold text-white text-[16px] mb-6">Your Music Journey</div>
              <div className="flex flex-col gap-0">
                {TIMELINE.map((t, i) => {
                  const Icon = t.icon
                  return (
                    <div key={i} className="flex items-start gap-4 relative">
                      {i < TIMELINE.length - 1 && (
                        <div className="absolute left-5 top-10 bottom-0 w-[2px]" style={{ background: 'rgba(10,100,195,0.3)' }} />
                      )}
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 z-10" style={{ background: `${t.color}22`, border: `1px solid ${t.color}44` }}>
                        <Icon size={18} style={{ color: t.color }} />
                      </div>
                      <div className="pb-6">
                        <div className="font-outfit font-black text-[15px] mb-0.5" style={{ color: t.color }}>{t.time}</div>
                        <div className="font-inter text-[13px] text-ice/80">{t.event}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>{/* end grid */}
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
              Why Western Beats
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
              Warner Music Group, home to Bruno Mars, Coldplay, Ed Sheeran & Dua Lipa globally,
              backs us through our exclusive Warner Music India Partnership.
            </motion.p>
          </div>

          <div className="gsap-card grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                Submit your music today. Live on 150+ platforms in 72 hours.
                <br />
                <strong className="text-white">100% ownership. Direct royalty payments. Free forever.</strong>
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
          <div className="font-inter text-[12px] text-mut">© 2025 Western Beats Private Limited · Western Beats</div>
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
