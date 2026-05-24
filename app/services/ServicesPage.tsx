'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'
import Image from 'next/image'
import Link from 'next/link'
import {
  Music2, Calendar, Users, Video, Mic2, BarChart3,
  Upload, Globe2, DollarSign, Zap, CheckCircle,
  ArrowRight, ChevronDown, Star, Shield, Award,
  Play, Radio, Headphones, TrendingUp, MapPin,
} from 'lucide-react'
import { PLATFORMS } from '../components/platforms'
import { ARTISTS, PARTNERS } from '../components/artistsData'

/* ─── Constants ──────────────────────────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.7, ease: EASE } },
}
const container: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

/* ─── Services master data ───────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'distribution',
    icon: Music2,
    color: '#0A64C3',
    tag: 'Core · Always Free',
    title: 'Music Distribution',
    headline: 'One Upload. 150+ Platforms. 48 Hours. Free.',
    desc: 'Upload once and reach every major streaming platform worldwide simultaneously, free distribution with 75% royalties straight to you. Our Warner Music India partnership means priority placement on JioSaavn, Gaana, and every Indian DSP.',
    points: [
      'Free forever, no annual fee, no per-release charge',
      '75% royalties paid monthly, we only earn when you earn',
      '150+ platforms: JioSaavn, Gaana, Spotify, Apple Music & more',
      'Live in 48 hours, faster than DistroKid & TuneCore',
      'Free ISRC & UPC code generation',
      'Real-time royalty dashboard',
      'Keep 100% ownership of your masters',
      'Dedicated WhatsApp & email support',
      'Priority placement via Warner Music India',
      'Metadata & artwork compliance guaranteed',
    ],
    steps: [
      { icon: Upload,      num: '01', title: 'Upload',     desc: 'Submit your track, artwork, and release info. We review within 24 hours.' },
      { icon: Globe2,      num: '02', title: 'Distribute', desc: 'We push your music to 150+ platforms simultaneously within 48 hours.' },
      { icon: DollarSign, num: '03', title: 'Earn 75%',   desc: '75% of every rupee earned flows directly to you monthly. We only earn when you earn, zero upfront cost.' },
    ],
    featured: true,
  },
  {
    id: 'events',
    icon: Calendar,
    color: '#C41230',
    tag: 'Full Production',
    title: 'Event Management',
    headline: 'Concerts, Launches & Live Experiences.',
    desc: 'From intimate album listening parties to full-scale stadium concerts. WB Digital handles every aspect of live event production. Artist riders, venue booking, PR, live streaming, and on-ground management across India.',
    points: [
      'Venue scouting, booking & stage design',
      'Artist rider management & hospitality',
      'PR & media outreach pre & post event',
      'Sound engineering & production crew',
      'Live streaming & recording services',
      'Brand activation & sponsorship tie-ups',
      'Album launch & listening party curation',
      'Festival partnerships & bookings',
      'Post-event analytics & reporting',
      'End-to-end budget management',
    ],
    steps: [
      { icon: Star,    num: '01', title: 'Concept',     desc: 'We design the vision: theme, venue, production scale, and audience experience.' },
      { icon: Users,   num: '02', title: 'Execute',     desc: 'Our production team handles every detail from venue to sound to PR.' },
      { icon: TrendingUp, num: '03', title: 'Amplify', desc: 'Post-event coverage, media clips, and audience growth analytics.' },
    ],
    featured: false,
  },
  {
    id: 'talent',
    icon: Users,
    color: '#5CB2DC',
    tag: 'Artist Growth',
    title: 'Talent Management',
    headline: 'Your Career. Managed by the Best.',
    desc: 'WB Digital provides end-to-end artist management, from career strategy and brand partnership deals to industry connections through our exclusive Warner Music India network. We grow independent artists into household names.',
    points: [
      'Personalized career strategy & roadmap',
      'Brand partnership deals & endorsements',
      'Industry network via Warner Music India',
      'Playlist pitching to editors & curators',
      'Social media growth & content strategy',
      'Booking & live performance management',
      'Press & media coverage coordination',
      'Merchandise & licensing opportunities',
      'Contract review & negotiation support',
      'Monthly performance reviews & reporting',
    ],
    steps: [
      { icon: Award,    num: '01', title: 'Assess',     desc: 'Deep-dive into your music, brand, audience, and career goals.' },
      { icon: Zap,      num: '02', title: 'Strategize', desc: 'Custom growth plan leveraging our WMI network and industry contacts.' },
      { icon: TrendingUp, num: '03', title: 'Grow',    desc: 'Execute the plan, track KPIs monthly, adjust and scale.' },
    ],
    featured: false,
  },
  {
    id: 'audio',
    icon: Mic2,
    color: '#002A8D',
    tag: 'Studio Quality',
    title: 'Audio Production',
    headline: 'Major-Label Sound. Independent Spirit.',
    desc: 'Professional recording, mixing, mastering, and sound design benchmarked against Warner Music India quality standards. From raw demos to chart-ready masters; every release meets international streaming platform requirements.',
    points: [
      'Professional studio recording sessions',
      'Multi-track mixing & arrangement',
      'Mastering to Spotify, Apple Music & DSP specs',
      'Dolby Atmos & spatial audio support',
      'WMI quality compliance & review',
      'Sound design & instrumental production',
      'Demo to full album productions',
      'Vocal tuning & editing',
      'Stem exports & session backups',
      'Rush turnaround available',
    ],
    steps: [
      { icon: Headphones, num: '01', title: 'Pre-Production', desc: 'Song arrangement, reference tracks, and session planning.' },
      { icon: Radio,      num: '02', title: 'Production',     desc: 'Studio recording, tracking, and arrangement finalization.' },
      { icon: CheckCircle, num: '03', title: 'Master',        desc: 'Mixing, mastering, and DSP compliance to WMI standards.' },
    ],
    featured: false,
  },
  {
    id: 'video',
    icon: Video,
    color: '#C41230',
    tag: 'Visual Identity',
    title: 'Video Direction',
    headline: 'Visuals That Go Viral.',
    desc: 'Music videos, Instagram Reels, YouTube Shorts, promotional campaigns, and social media content, designed to match the WB Digital visual identity and engineered to maximize organic reach and streams.',
    points: [
      'Full music video concept & direction',
      'Instagram Reels & YouTube Shorts production',
      'Lyric video & visualizer creation',
      'BTS & EPK content packages',
      'Colour grading & VFX post-production',
      'Social media campaign content',
      'Promotional teaser & trailer cuts',
      'Multi-platform format exports',
      'Talent coordination on set',
      'Distribution-ready video delivery',
    ],
    steps: [
      { icon: Play,        num: '01', title: 'Concept',    desc: 'Creative direction, mood board, location scouting & storyboarding.' },
      { icon: Video,       num: '02', title: 'Shoot',      desc: 'Full production: crew, camera, lighting, and direction on set.' },
      { icon: Star,        num: '03', title: 'Deliver',    desc: 'Edit, grade, VFX, and final delivery in all required formats.' },
    ],
    featured: false,
  },
  {
    id: 'analytics',
    icon: BarChart3,
    color: '#0A64C3',
    tag: 'Data Driven',
    title: 'Analytics & Strategy',
    headline: 'Real Data. Real Decisions. Real Growth.',
    desc: 'Real-time streaming analytics, audience demographics, playlist tracking, and revenue reporting across all 150+ platforms. Make data-driven decisions about your music career instead of guessing.',
    points: [
      'Real-time streams & royalty dashboard',
      'Platform-by-platform revenue breakdown',
      'Audience demographics & geography',
      'Playlist add tracking & playlist pitching',
      'Social media performance analytics',
      'Release performance vs. benchmarks',
      'Monthly detailed PDF reports',
      'Year-on-year growth tracking',
      'Competitor benchmarking',
      'Strategic recommendations each quarter',
    ],
    steps: [
      { icon: BarChart3,   num: '01', title: 'Track',     desc: 'Centralized dashboard pulling data from all 150+ platforms in real time.' },
      { icon: TrendingUp,  num: '02', title: 'Analyse',   desc: 'Deep-dive into what is working, what is not, and where to focus.' },
      { icon: Zap,         num: '03', title: 'Optimise',  desc: 'Data-backed recommendations: release timing, platforms, and strategy.' },
    ],
    featured: false,
  },
]

const FAQS = [
  {
    q: 'What services does WB Digital offer?',
    a: 'WB Digital offers six core services: Free Music Distribution (to 150+ platforms, 48 hrs, 75% royalties to you), Event Management (concerts, album launches), Talent Management (career strategy, brand deals, WMI network), Audio Production (recording, mixing, mastering), Video Direction (music videos, Reels, Shorts), and Analytics & Strategy (real-time data across all platforms). All backed by Warner Music India.',
  },
  {
    q: 'Is music distribution with WB Digital really free?',
    a: 'Yes, distribution is completely free. ₹0 forever. No annual subscription, no per-release fee. WB Digital earns a 25% royalty share only when you earn, so you keep 75% of every stream with zero upfront cost. Compare: DistroKid charges $22.99/yr, TuneCore charges $14.99/release, CD Baby charges $9.99/release AND takes 9% of royalties. WB Digital charges nothing upfront, we are fully invested in your success.',
  },
  {
    q: 'How quickly does music go live with WB Digital?',
    a: 'Within 48 hours of submission and approval, your music is live on all 150+ streaming platforms simultaneously, including JioSaavn, Gaana, Spotify, Apple Music, YouTube Music, and more. DistroKid takes 7–10 days, TuneCore takes 7–10 days, CD Baby takes 5–7 days. We are the fastest distributor in India.',
  },
  {
    q: 'Which platforms does WB Digital distribute to?',
    a: 'WB Digital distributes to 150+ platforms: JioSaavn, Gaana, Hungama, Resso, Wynk, Spotify, Apple Music, YouTube Music, Amazon Music, Tidal, Deezer, SoundCloud, Boomplay, Pandora, Audiomack, Napster, and 130+ more globally. Our Warner Music India partnership gives us priority placement on Indian DSPs.',
  },
  {
    q: 'How do I book event management or talent management?',
    a: 'Simply email contact@westernbeats.com or DM @wb_digital_ on Instagram with your requirements: event type, scale, date, and budget for events; career stage and goals for talent management. Our team responds within 24 hours with a custom proposal.',
  },
  {
    q: 'What audio quality standards does WB Digital use?',
    a: "WB Digital's audio production is benchmarked against Warner Music India quality standards, the same standards used by major-label releases. This means LUFS-compliant mastering for each platform, high-resolution audio exports, Dolby Atmos support, and full metadata compliance for every distribution platform.",
  },
]

/* ─── Sub-components ─────────────────────────────────────────────────────────── */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: EASE }}
      className="rounded-2xl overflow-hidden"
      style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="font-outfit font-bold text-white text-[15px] sm:text-[16px] leading-snug">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: open ? '#0A64C3' : 'rgba(255,255,255,0.06)' }}
        >
          <ChevronDown size={14} className="text-white" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 font-inter text-[14px] sm:text-[15px] text-mut leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  )
}

/* ─── Main Page ──────────────────────────────────────────────────────────────── */
export default function ServicesPage() {
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

      {/* ── NAV ────────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060C18]/95 backdrop-blur-xl border-b border-white/[0.06] py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-9 flex-shrink-0">
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
              { href: '/services', label: 'Services', active: true },
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/submit', label: 'Submit' },
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
          <div className="hidden md:flex items-center gap-3">
            <div className="platform-pill page-badge text-[10px]">Warner Music India</div>
            <Link href="/#distribution" className="px-5 py-2.5 bg-blu rounded-lg font-outfit font-bold text-[13px] text-white hover:bg-[#0D77E0] transition-colors duration-200">
              Distribute Free
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div className="absolute top-1/2 left-1/3 w-[700px] h-[500px] -translate-y-1/2 pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.13) 0%, transparent 70%)' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(196,18,48,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">Services</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="platform-pill mb-6 inline-flex">
                ✦ Full-Service Music Company · Warner Music India Backed
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(40px, 6.5vw, 82px)' }}
              >
                <span className="page-hero-line block text-white">Everything</span>
                <span className="page-hero-line block text-white">Your Music</span>
                <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Career Needs.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="font-inter text-[16px] sm:text-[18px] text-mut leading-relaxed mb-8 max-w-xl">
                WB Digital is India&apos;s only <strong className="text-white">full-service music company</strong> backed by Warner Music India, offering free distribution, events, talent management, audio production, video direction, and analytics under one roof.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                <Link href="#distribution" onClick={e => { e.preventDefault(); document.getElementById('distribution')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="group flex items-center gap-2 px-6 py-3.5 bg-blu rounded-xl font-outfit font-bold text-[14px] text-white hover:bg-[#0D77E0] transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: '0 8px 30px rgba(10,100,195,0.35)' }}>
                  Start Distributing Free <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/#contact"
                  className="flex items-center gap-2 px-6 py-3.5 bg-white/[0.06] border border-white/10 rounded-xl font-outfit font-bold text-[14px] text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  Book a Service
                </Link>
              </motion.div>
              {/* Quick service pills */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-inter text-[11px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: `${s.color}18`, border: `1px solid ${s.color}35`, color: s.color }}
                  >
                    <s.icon size={11} />
                    {s.title}
                  </button>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: 2x3 visual service grid */}
            <motion.div
              initial="hidden" animate="show" variants={container}
              className="gsap-card grid grid-cols-2 gap-3"
            >
              {SERVICES.map((s, i) => (
                <motion.button
                  key={s.id}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="card-hover rounded-2xl p-5 text-left relative overflow-hidden"
                  style={{ background: 'rgba(10,21,53,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: s.color }} />
                  <div className="absolute bottom-3 right-3 font-outfit font-black text-[44px] leading-none opacity-[0.05]" style={{ color: s.color }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${s.color}22` }}>
                    <s.icon size={18} style={{ color: s.color }} />
                  </div>
                  <div className="font-outfit font-extrabold text-white text-[13px] sm:text-[14px] leading-snug mb-1">{s.title}</div>
                  <div className="font-inter text-[10px] sm:text-[11px]" style={{ color: s.color }}>{s.tag}</div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICE DETAIL SECTIONS ─────────────────────────────────────────── */}
      {SERVICES.map((service, si) => {
        const isEven = si % 2 === 0
        return (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-heading`}
            className="py-24 sm:py-32 relative overflow-hidden"
            style={{ background: si % 2 === 0 ? '#060C18' : '#040A14' }}
          >
            {si % 2 === 0 && <div className="crm-stripe absolute top-0 left-0 right-0" />}
            <div
              className={`absolute ${isEven ? 'top-1/2 left-0' : 'top-1/2 right-0'} w-[500px] h-[500px] pointer-events-none`}
              style={{ background: `radial-gradient(ellipse at ${isEven ? '0%' : '100%'} 50%, ${service.color}15 0%, transparent 70%)` }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              {/* Section header */}
              <div className="text-center mb-16 sm:mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE }}
                  className="platform-pill mb-5 inline-flex"
                  style={{ borderColor: `${service.color}40`, background: `${service.color}12` }}
                >
                  <service.icon size={11} style={{ color: service.color }} />
                  <span style={{ color: service.color }}>{service.tag}</span>
                </motion.div>
                <motion.h2
                  id={`${service.id}-heading`}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                  className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-5"
                  style={{ fontSize: 'clamp(30px, 4.5vw, 58px)' }}
                >
                  <span style={{ color: service.color }}>{service.title}.</span>{' '}
                  <span className="text-white">{service.headline.replace(service.title + '.', '').trim()}</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                  className="page-subtext font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed max-w-2xl mx-auto"
                >
                  {service.desc}
                </motion.p>
              </div>

              {/* 3-step process */}
              <div className="grid md:grid-cols-3 gap-5 mb-20">
                {service.steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="card-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden"
                    style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: service.color }} />
                    <div className="absolute top-4 right-4 font-outfit font-black text-[64px] leading-none opacity-[0.06]" style={{ color: service.color }}>{step.num}</div>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${service.color}22` }}>
                      <step.icon size={20} style={{ color: service.color }} />
                    </div>
                    <div className="font-outfit font-extrabold text-white text-[17px] mb-3">{step.title}</div>
                    <div className="font-inter text-[13.5px] text-mut leading-relaxed">{step.desc}</div>
                  </motion.div>
                ))}
              </div>

              {/* Features + visual panel */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Features list */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
                >
                  <div className="font-outfit font-extrabold text-white text-[20px] sm:text-[24px] mb-8">
                    Everything Included.
                  </div>
                  <div className="gsap-card grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {service.points.map((pt, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                        className="flex items-start gap-3 font-inter text-[13.5px] text-ice"
                      >
                        <CheckCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                        {pt}
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.5 }}
                    className="mt-10"
                  >
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-outfit font-bold text-[14px] text-white hover:-translate-y-1 transition-all duration-300"
                      style={{ background: service.color, boxShadow: `0 8px 30px ${service.color}50` }}
                    >
                      Get Started: {service.id === 'distribution' ? "It's Free" : 'Book Now'}
                      <ArrowRight size={15} />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Visual panel: unique per service */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                >
                  {service.id === 'distribution' && <DistributionVisual color={service.color} />}
                  {service.id === 'events'        && <EventsVisual color={service.color} />}
                  {service.id === 'talent'        && <TalentVisual color={service.color} />}
                  {service.id === 'audio'         && <AudioVisual color={service.color} />}
                  {service.id === 'video'         && <VideoVisual color={service.color} />}
                  {service.id === 'analytics'     && <AnalyticsVisual color={service.color} />}
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── PLATFORMS GRID ─────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ background: '#060C18' }}>
        <div className="crm-stripe absolute top-0 left-0 right-0" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(10,100,195,0.1) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="platform-pill mb-5 inline-flex">
              150+ Platforms
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-4"
              style={{ fontSize: 'clamp(30px, 4.5vw, 54px)' }}
            >
              <span className="text-white">Everywhere Your </span>
              <span style={{ color: '#0A64C3' }}>Fans Are.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="font-inter text-[15px] text-mut max-w-xl mx-auto">
              One upload reaches all 150+ platforms simultaneously, in 48 hours, for free.
            </motion.p>
          </div>
          <div className="gsap-card grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {PLATFORMS.map((p, i) => {
              const Icon = p.Icon
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: EASE }}
                  whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.25 } }}
                  className="card-hover rounded-xl p-4 flex flex-col items-center text-center"
                  style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2.5" style={{ background: `${p.color}1A`, border: `1px solid ${p.color}40` }}>
                    <Icon className="w-5 h-5" style={{ color: p.color }} aria-hidden />
                  </div>
                  <div className="font-outfit font-bold text-white text-[11px] leading-tight mb-0.5">{p.name}</div>
                  <div className="font-inter text-[9px]" style={{ color: p.color }}>{p.tag}</div>
                </motion.div>
              )
            })}
            {/* +139 more */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.6 }}
              className="rounded-xl p-4 flex flex-col items-center text-center"
              style={{ background: 'rgba(10,100,195,0.1)', border: '1px solid rgba(10,100,195,0.3)' }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2.5" style={{ background: 'rgba(10,100,195,0.2)' }}>
                <span className="font-outfit font-black text-blu text-[12px]">+139</span>
              </div>
              <div className="font-outfit font-bold text-white text-[11px]">More</div>
              <div className="font-inter text-[9px] text-blu">Worldwide</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ARTIST GALLERY: proof via real images */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(10,100,195,0.08) 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="platform-pill mb-5 inline-flex">
              Our Roster
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-5"
              style={{ fontSize: 'clamp(30px, 4.5vw, 56px)' }}
            >
              <span className="text-white">Artists Who Trust </span>
              <span style={{ color: '#0A64C3' }}>WB Digital.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="font-inter text-[15px] text-mut max-w-2xl mx-auto">
              From Haryanvi folk icons to Punjabi hip-hop stars, our artists collectively reach millions of fans across 150+ platforms worldwide.
            </motion.p>
          </div>

          {/* Featured artist, large */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {ARTISTS.slice(0, 2).map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden relative"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="relative h-72 sm:h-80">
                  <Image src={a.image} alt={a.name} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(4,10,20,0.1) 0%, rgba(4,10,20,0.85) 100%)' }} />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full font-outfit font-bold text-[11px] text-white" style={{ background: 'rgba(10,100,195,0.9)', backdropFilter: 'blur(6px)' }}>{a.followers} Followers</div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="font-outfit font-black text-white text-[26px] leading-tight">{a.name}</div>
                    <div className="font-inter text-[12px] text-blu uppercase tracking-[0.08em] mt-1">{a.genre}</div>
                    <div className="flex items-center gap-1.5 text-mut font-inter text-[11px] mt-1.5">
                      <MapPin size={10} /><span>{a.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-inter text-[13px] text-ice/80 leading-relaxed mb-4">{a.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.hits.map(h => (
                      <span key={h} className="px-2 py-0.5 rounded-full font-inter text-[10px] text-ice" style={{ background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.25)' }}>{h}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rest: smaller grid */}
          <div className="gsap-card grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {ARTISTS.slice(2, 10).map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl overflow-hidden relative"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={a.image} alt={a.name} fill sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(4,10,20,0.9) 100%)' }} />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full font-outfit font-bold text-[9px] text-white" style={{ background: 'rgba(10,100,195,0.85)', backdropFilter: 'blur(6px)' }}>{a.followers}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="font-outfit font-black text-white text-[14px] leading-tight">{a.name}</div>
                    <div className="font-inter text-[9px] text-blu uppercase tracking-[0.08em] mt-0.5">{a.genre}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS STRIP ─────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#060C18' }}>
        <div className="crm-stripe absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="platform-pill mb-4 inline-flex">Partner Ecosystem</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-outfit font-black text-white tracking-[-0.02em]" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
              The Companies That <span style={{ color: '#0A64C3' }}>Trust Us.</span>
            </motion.h2>
          </div>
          <div className="gsap-card grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {PARTNERS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                className="rounded-xl p-3 flex flex-col items-center gap-2"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
                title={p.name}
              >
                <div className="relative w-full h-10">
                  <Image src={p.logo} alt={p.name} fill sizes="80px" className="object-contain filter brightness-90 hover:brightness-110 transition-all" />
                </div>
                <div className="font-inter text-[8px] text-mut text-center leading-tight">{p.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(10,100,195,0.08) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="platform-pill mb-5 inline-flex">FAQ</motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-outfit font-black tracking-[-0.02em] leading-[1.05] mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 50px)' }}
            >
              <span className="text-white">Common Questions </span>
              <span style={{ color: '#0A64C3' }}>Answered.</span>
            </motion.h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 relative overflow-hidden" style={{ background: '#060C18' }}>
        <div className="crm-stripe absolute top-0 left-0 right-0" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(10,100,195,0.15) 0%, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="platform-pill mb-6 inline-flex">
            ✦ Start Today, It&apos;s Free
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(34px, 5vw, 64px)' }}
          >
            <span className="text-white">Ready to Take Your</span>
            <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Music Further?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="font-inter text-[15px] sm:text-[17px] text-mut leading-relaxed mb-10">
            Free music distribution to 150+ platforms. Professional events. Expert talent management. Major-label audio & video production. All backed by Warner Music India. One company. Everything you need.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="gsap-fade-up flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/#distribution"
              className="group flex items-center gap-2 px-8 py-4 bg-blu rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-[#0D77E0] transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 8px 35px rgba(10,100,195,0.4)' }}>
              Distribute Free Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/#contact"
              className="flex items-center gap-2 px-8 py-4 bg-white/[0.06] border border-white/10 rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              Book Any Service
            </Link>
          </motion.div>
          {/* Trust badges */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {['✓ 100% Free Forever', '✓ 100% Royalties Kept', '✓ Warner Music India Backed', '✓ Live in 48 Hours', '✓ JioSaavn & Gaana Priority'].map(b => (
              <span key={b} className="font-inter text-[12px] text-mut">{b}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#040810] border-t border-white/[0.06]">
        <div className="crm-stripe" />
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 ">
              <Image src="/partners/westernbeats-BpLvGE3e.png" alt="Western Beats" width={32} height={32} className="object-contain w-full h-full" />
            </div>
            <div>
              <div className="font-outfit font-black text-white text-[13px] tracking-[0.04em]">WESTERN BEATS</div>
              <div className="font-inter text-[9px] text-mut tracking-[0.12em] uppercase">Western Beats Private Limited</div>
            </div>
          </div>
          <div className="font-inter text-[12px] text-mut text-center">
            © 2026 Western Beats Private Limited · Official Distribution Partner @warnermusicindia
          </div>
          <div className="flex items-center gap-5">
            <Link href="/" className="font-inter text-[12px] text-mut hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="font-inter text-[12px] text-mut hover:text-white transition-colors">About</Link>
            <Link href="/#contact" className="font-inter text-[12px] text-mut hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ─── Service-specific visual panels ─────────────────────────────────────────── */

function DistributionVisual({ color }: { color: string }) {
  const platforms = ['JioSaavn', 'Gaana', 'Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music']
  return (
    <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: color, boxShadow: `0 30px 80px ${color}50` }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)' }} />
      <div className="relative z-10">
        <div className="font-outfit font-black text-white text-[40px] leading-none mb-2">₹0</div>
        <div className="font-inter text-[15px] text-white/80 mb-6">Forever free. No hidden fees.</div>
        <div className="flex flex-col gap-2.5 mb-6">
          {platforms.map(p => (
            <div key={p} className="flex items-center gap-3">
              <CheckCircle size={14} className="text-white flex-shrink-0" />
              <span className="font-inter text-[13px] text-white/90">{p}</span>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <CheckCircle size={14} className="text-white flex-shrink-0" />
            <span className="font-inter text-[13px] text-white/90">+ 144 more platforms</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10">
          <Shield size={14} className="text-white" />
          <span className="font-inter text-[12px] text-white/90">Warner Music India Backed</span>
        </div>
      </div>
    </div>
  )
}

function EventsVisual({ color }: { color: string }) {
  return (
    <div className="rounded-2xl overflow-hidden relative" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="relative h-56">
        <Image src="/artists/sapnachoudhary-DkPyzJGL.jpg" alt="WB Digital Live Event" fill sizes="600px" className="object-cover object-top" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(196,18,48,0.7) 100%)' }} />
        <div className="absolute bottom-4 left-4">
          <div className="font-outfit font-black text-white text-[20px]">Live Events</div>
          <div className="font-inter text-[12px] text-white/80">Concept to Curtain Call</div>
        </div>
      </div>
      <div className="p-5" style={{ background: '#0A1535' }}>
        {['Concerts & Album Launches', 'Festival Partnerships', 'Brand Activations', 'Live Streaming & Recording'].map(item => (
          <div key={item} className="flex items-center gap-3 py-2 border-b border-white/[0.05] last:border-0">
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
            <span className="font-inter text-[13px] text-ice">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TalentVisual({ color }: { color: string }) {
  const artists = ARTISTS.slice(0, 4)
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="gsap-card grid grid-cols-2 gap-px">
        {artists.map((a, i) => (
          <div key={a.name} className="relative h-36 overflow-hidden group">
            <Image src={a.image} alt={a.name} fill sizes="200px" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(4,10,20,0.9) 100%)' }} />
            <div className="absolute bottom-2 left-2">
              <div className="font-outfit font-bold text-white text-[11px] leading-tight">{a.name}</div>
              <div className="font-inter text-[8px] uppercase tracking-wide" style={{ color }}>{a.followers}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="font-outfit font-black text-white text-[16px]">10+ Managed Artists</div>
          <div className="font-inter text-[11px] text-mut">Collectively reaching millions of fans</div>
        </div>
        <div className="px-3 py-1.5 rounded-lg font-outfit font-bold text-[10px] text-white" style={{ background: color }}>WMI Network</div>
      </div>
    </div>
  )
}

function AudioVisual({ color }: { color: string }) {
  const bars = [0.4, 0.7, 0.9, 0.6, 1.0, 0.75, 0.5, 0.85, 0.65, 0.45, 0.8, 0.55, 0.7, 0.9, 0.4, 0.6, 1.0, 0.75, 0.5, 0.85]
  return (
    <div className="rounded-2xl p-7 relative overflow-hidden" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: color }} />
      <div className="font-outfit font-bold text-white text-[16px] mb-6">Audio Waveform</div>
      {/* Waveform */}
      <div className="flex items-center gap-1 h-20 mb-6">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-full"
            style={{ background: color, opacity: 0.7 + h * 0.3 }}
            animate={{ scaleY: [h, h * 0.5, h, h * 0.8, h] }}
            transition={{ duration: 1.2 + i * 0.1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.05 }}
            initial={{ height: `${h * 80}px`, originY: 0.5 }}
          />
        ))}
      </div>
      {[
        { label: 'Mastered Loudness', val: '-9 LUFS' },
        { label: 'Sample Rate',       val: '48kHz / 32-bit' },
        { label: 'Quality Standard',  val: 'WMI Certified' },
        { label: 'Delivery Format',   val: 'WAV / FLAC / MP3' },
      ].map(row => (
        <div key={row.label} className="flex items-center justify-between py-2 border-b border-white/[0.06] last:border-0">
          <span className="font-inter text-[12px] text-mut">{row.label}</span>
          <span className="font-outfit font-bold text-[12px]" style={{ color }}>{row.val}</span>
        </div>
      ))}
    </div>
  )
}

function VideoVisual({ color }: { color: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="relative h-52 overflow-hidden group">
        <Image src="/artists/harshsandhu-CfMNV-ao.jpeg" alt="WB Digital Video Production" fill sizes="600px" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(196,18,48,0.6) 100%)' }} />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.3)' }}>
            <Play size={24} className="text-white ml-1 fill-white" />
          </div>
        </div>
        <div className="absolute bottom-3 left-4">
          <div className="font-outfit font-black text-white text-[17px]">Music Videos & Reels</div>
          <div className="font-inter text-[11px] text-white/80">Concept to delivery</div>
        </div>
      </div>
      <div className="p-5 grid grid-cols-2 gap-3">
        {['Music Videos', 'Instagram Reels', 'YouTube Shorts', 'Lyric Videos', 'Promo Teasers', 'BTS Content'].map(item => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
            <span className="font-inter text-[12px] text-ice">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyticsVisual({ color }: { color: string }) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const streams = [42, 58, 75, 68, 90, 100]
  return (
    <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: color }} />
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="font-outfit font-black text-white text-[24px] leading-none">4.1M</div>
          <div className="font-inter text-[11px] text-mut mt-1">Total Streams (Sample)</div>
        </div>
        <div className="px-3 py-1.5 rounded-lg font-inter text-[11px] font-semibold" style={{ background: `${color}20`, color }}>
          ↑ 34% MoM
        </div>
      </div>
      {/* Bar chart */}
      <div className="flex items-end gap-2 h-28 mb-4">
        {streams.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <motion.div
              className="w-full rounded-t-md"
              style={{ background: i === streams.length - 1 ? color : `${color}50` }}
              initial={{ height: 0 }}
              whileInView={{ height: `${val}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            />
            <div className="font-inter text-[9px] text-mut">{months[i]}</div>
          </div>
        ))}
      </div>
      <div className="gsap-card grid grid-cols-2 gap-3">
        {[
          { label: 'Platforms Tracked', val: '150+' },
          { label: 'Top Market',         val: 'India' },
          { label: 'Avg. Monthly Growth', val: '+28%' },
          { label: 'Report Frequency',   val: 'Monthly' },
        ].map(row => (
          <div key={row.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="font-outfit font-black text-white text-[14px]">{row.val}</div>
            <div className="font-inter text-[9px] text-mut mt-0.5">{row.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
