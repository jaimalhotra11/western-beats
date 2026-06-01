'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'
import Image from 'next/image'
import Link from 'next/link'
import {
  Music2, Calendar, Users, Video, Mic2, BarChart3,
  Shield, Zap, Globe2, Heart, Star, Award,
  Check, X, ChevronDown, ArrowRight, Play,
} from 'lucide-react'

/* ─── Waveform ───────────────────────────────────────────────────────────────── */
const WAVEFORM_HEIGHTS   = [0.3,0.6,0.9,0.5,1.0,0.4,0.7,0.8,0.3,0.6,0.95,0.5,0.4,0.8,0.6,0.3,0.9,0.7,0.4,0.6,0.85]
const WAVEFORM_DURATIONS = [1.1,0.9,1.3,0.8,1.4,1.0,1.2,0.85,1.35,0.95,1.15,0.75,1.25,1.05,0.9,1.4,0.8,1.2,1.1,0.95,1.3]

/* ─── Animation constants ────────────────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.7, ease: EASE } },
}
const container: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

/* ─── Data ───────────────────────────────────────────────────────────────────── */
const STATS = [
  { value: 150,  suffix: '+',   prefix: '',  label: 'Streaming Platforms', color: '#0A64C3' },
  { value: 100,  suffix: '%',   prefix: '',  label: 'IP Ownership',          color: '#C41230' },
  { value: 48,   suffix: 'hrs', prefix: '',  label: 'Go-Live Time',         color: '#5CB2DC' },
  { value: 0,    suffix: '',    prefix: '₹', label: 'Cost to Distribute',   color: '#0A64C3' },
]

/* Comparison table */
const COMPARE_FEATURES = [
  'Price',
  'Royalties Kept',
  'India-First (JioSaavn & Gaana)',
  'Warner Music India Backing',
  'Go-Live Time',
  'Platforms',
  'ISRC / UPC',
  'Playlist Pitching',
  'Artist Support',
]

type Distributor = {
  name: string
  isUs: boolean
  badge?: string
  data: (string | boolean)[]
}

const DISTRIBUTORS: Distributor[] = [
  {
    name: 'WB Digital',
    isUs: true,
    badge: 'Best for India',
    data: [
      'FREE: ₹0 Forever',
      'Direct to you (T&C)',
      true,
      true,
      '48 Hours',
      '150+',
      'Free Included',
      true,
      '24/7 DM Support',
    ],
  },
  {
    name: 'DistroKid',
    isUs: false,
    data: [
      '$22.99/yr (₹1,900+)',
      '100%',
      false,
      false,
      '7–10 Days',
      '150+',
      'Free Included',
      false,
      'Ticket Only',
    ],
  },
  {
    name: 'TuneCore',
    isUs: false,
    data: [
      '$14.99/release (₹1,250+)',
      '100%',
      false,
      false,
      '7–10 Days',
      '150+',
      'Free Included',
      false,
      'Ticket Only',
    ],
  },
  {
    name: 'CD Baby',
    isUs: false,
    data: [
      '$9.99/release (₹830+)',
      '91% (takes 9%)',
      false,
      false,
      '5–7 Days',
      '150+',
      '$5/each',
      false,
      'Email Only',
    ],
  },
  {
    name: 'Ditto Music',
    isUs: false,
    data: [
      '£19/yr (₹2,000+)',
      '100%',
      false,
      false,
      '3–5 Days',
      '150+',
      'Free Included',
      false,
      'Email Only',
    ],
  },
  {
    name: 'Believe',
    isUs: false,
    data: [
      '15–25% revenue share',
      '70–85%',
      false,
      false,
      '5–7 Days',
      '100+',
      'Free Included',
      false,
      'Account Manager',
    ],
  },
  {
    name: 'The Orchard',
    isUs: false,
    data: [
      'Label / Enterprise only',
      'Revenue Share',
      false,
      false,
      'Varies',
      '200+',
      'Free Included',
      true,
      'Account Manager',
    ],
  },
  {
    name: 'Mad Verse',
    isUs: false,
    data: [
      'Paid Plans',
      'Varies',
      false,
      false,
      'Varies',
      'Limited',
      'Varies',
      false,
      'Limited',
    ],
  },
  {
    name: 'Fore Vision Digital',
    isUs: false,
    data: [
      'Paid Plans',
      'Varies',
      false,
      false,
      'Varies',
      'Limited',
      'Varies',
      false,
      'Limited',
    ],
  },
]

const VALUES = [
  {
    icon: Heart,
    title: 'Artist First, Always',
    color: '#C41230',
    desc: 'You own 100% of your music. Every rupee your music earns flows directly to you. We only make money when you make money. Your music, your rights, your success. We are always on your side.',
  },
  {
    icon: Globe2,
    title: 'India First',
    color: '#0A64C3',
    desc: 'JioSaavn and Gaana before Spotify. We are built specifically for the Indian music market and carry India-first distribution priority for every release.',
  },
  {
    icon: Shield,
    title: 'Radically Honest',
    color: '#5CB2DC',
    desc: '48-72 hours means 48-72 hours. Free means free, no hidden fees, no bait-and-switch, no fine print. What you see is exactly what you get.',
  },
  {
    icon: Award,
    title: 'Major-Label Quality',
    color: '#002A8D',
    desc: "Warner Music India partnership means major-label quality standards on every release: metadata, audio quality, and platform compliance you can't get elsewhere.",
  },
  {
    icon: Zap,
    title: 'Speed & Reliability',
    color: '#0A64C3',
    desc: "48-72 hour go-live time, zero downtime, real-time royalty reporting. While competitors take 7–10 days, your music is already streaming. That's the WB Digital difference.",
  },
  {
    icon: Star,
    title: 'Built for Growth',
    color: '#C41230',
    desc: 'From distribution to production, events to talent management, we are not just a distributor. We are a full-service music company built to grow independent artists into household names.',
  },
]

const SERVICES_BRIEF = [
  { icon: Music2,    title: 'Music Distribution',    color: '#0A64C3', desc: 'Free distribution to 150+ platforms in 48-72 hours. You keep 100% of royalties, we only earn when you do.' },
  { icon: Calendar,  title: 'Event Management',       color: '#C41230', desc: 'Full-service concert & album launch production from concept to curtain call.' },
  { icon: Users,     title: 'Talent Management',      color: '#5CB2DC', desc: 'Career strategy, brand deals, and WMI industry connections.' },
  { icon: Mic2,      title: 'Audio Production',       color: '#002A8D', desc: 'Studio recording, mixing & mastering to WMI quality standards.' },
  { icon: Video,     title: 'Video Direction',        color: '#C41230', desc: 'Music videos, Reels, Shorts, and viral social media content.' },
  { icon: BarChart3, title: 'Analytics & Strategy',  color: '#0A64C3', desc: 'Real-time streaming data and revenue transparency across all platforms.' },
]

const FAQS = [
  {
    q: 'What is WB Digital and how is it different from DistroKid?',
    a: "WB Digital is India's #1 free music distribution platform by Western Beats Private Limited, officially backed by Warner Music India. Unlike DistroKid, which charges $22.99/year (₹1,900+) with no India-first focus, WB Digital is completely free, prioritizes JioSaavn and Gaana, delivers music in 48-72 hours, and carries the credibility of Warner Music India, something no other distributor offers.",
  },
  {
    q: 'Is WB Digital really free, no hidden fees?',
    a: 'Distribution is completely free: ₹0 upfront. No annual subscription, no per-release fee. WB Digital earns only when you earn — there are no upfront costs and no annual fees. Compare: DistroKid charges $22.99/yr, TuneCore charges $14.99 per release, CD Baby charges $9.99 per release AND takes 9% of royalties. With WB Digital, there is no upfront risk — you only pay (via revenue share) when you earn.',
  },
  {
    q: 'Why should Indian artists choose WB Digital over TuneCore?',
    a: 'TuneCore is US-built and US-focused. WB Digital is built specifically for the Indian music market. WB Digital distributes to JioSaavn, Gaana, and more with priority, costs ₹0 upfront (TuneCore costs $14.99/release), is backed by Warner Music India for major-label credibility, goes live in 48-72 hours (TuneCore takes 7–10 days), and provides India-based artist support. Your royalties flow directly to you with no upfront fee.',
  },
  {
    q: 'How does WB Digital compare to CD Baby for Indian artists?',
    a: 'WB Digital wins on every metric for Indian artists: Price (₹0 upfront vs $9.99/release), Royalties (direct to you vs CD Baby taking 9% AND charging $9.99/release upfront, making WB Digital more cost-effective), India-first distribution (WB Digital has JioSaavn and Gaana priority), Warner Music India backing (CD Baby has no equivalent), and go-live speed (48 hrs vs 5–7 days). CD Baby has no dedicated presence in the Indian music market.',
  },
  {
    q: 'Does WB Digital distribute to JioSaavn and Gaana?',
    a: 'Yes, and we prioritize them. WB Digital distributes to JioSaavn, Gaana, and all major Indian platforms, along with Spotify, Apple Music, YouTube Music, Amazon Music, Tidal, Deezer, and 140+ more global platforms. Our Warner Music India partnership gives us priority placement on Indian DSPs, something DistroKid, TuneCore, CD Baby, Ditto Music, and other foreign distributors cannot match.',
  },
  {
    q: 'What does the Warner Music India partnership mean for me as an artist?',
    a: "WB Digital is officially backed by Warner Music India (@warnermusicindia), one of the world's three major record labels. This means major-label credibility on your releases, priority placement on Indian streaming platforms, access to WMI's network of playlist curators and industry contacts, audio quality standards that match major-label releases, and faster processing on platforms. No independent distributor in India, not Ditto Music, Believe, Orchard, Mad Verse, Fore Vision Digital, or anyone else, has this exclusive partnership.",
  },
  {
    q: 'How fast does WB Digital get music live on streaming platforms?',
    a: 'WB Digital delivers your music to streaming platforms within 48-72 hours. Compare that to: DistroKid (7–10 days), TuneCore (7–10 days), CD Baby (5–7 days), and Ditto Music (3–5 days). Our 48-72 hour turnaround is possible because of our direct relationships with all major platforms and our Warner Music India partnership.',
  },
  {
    q: 'How does WB Digital\'s royalty model work?',
    a: 'WB Digital pays your royalties directly to your bank account. We only earn when you earn — never upfront. Compare: CD Baby takes 9% AND charges $9.99/release; Believe takes 15–30%; The Orchard operates on revenue share. WB Digital costs ₹0 to start, and we only earn when you earn. That\'s fully aligned with your success.',
  },
  {
    q: 'Can I switch from DistroKid, TuneCore, or CD Baby to WB Digital?',
    a: "Absolutely. You can migrate from any distributor: DistroKid, TuneCore, CD Baby, Ditto Music, Believe, or any other. Contact us at contact@westernbeats.com or DM us @wb_digital_ on Instagram and our team will guide you through the migration at zero cost. Your existing ISRC codes and metadata are fully portable.",
  },
  {
    q: 'Does WB Digital only offer music distribution?',
    a: 'No, we are a full-service music company. WB Digital offers Music Distribution, Event Management, Talent Management, Audio Production, Video Direction, and Analytics & Strategy. We give independent artists access to major-label resources, the kind of support that DistroKid, TuneCore, and CD Baby simply do not offer, all under one roof and all at a fraction of the cost.',
  },
]

/* ─── Counter component ──────────────────────────────────────────────────────── */
function Counter({ value, suffix, prefix = '', color, inView }: {
  value: number; suffix: string; prefix?: string; color: string; inView: boolean
}) {
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

/* ─── FAQ Item ───────────────────────────────────────────────────────────────── */
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

/* ─── Main Component ─────────────────────────────────────────────────────────── */
export default function AboutPage() {
  const statsRef  = useRef(null)
  const statsView = useInView(statsRef, { once: true, margin: '-100px' })
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

      {/* ─── NAV ─────────────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#060C18]/95 backdrop-blur-xl border-b border-white/[0.06] py-3"
      >
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
              { href: '/about', label: 'About', active: true },
              { href: '/services', label: 'Services' },
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/submit', label: 'Submit' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 relative group ${
                  l.active ? 'text-white' : 'text-mut hover:text-white'
                }`}
              >
                {l.label}
                {l.active && (
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blu rounded-full" />
                )}
                {!l.active && (
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blu scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="platform-pill text-[10px]">Warner Music India</div>
            <Link
              href="/submit"
              className="px-5 py-2.5 bg-blu rounded-lg font-outfit font-bold text-[13px] text-white hover:bg-[#0D77E0] transition-colors duration-200"
            >
              Distribute Free
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────────────────── */}
      <section
        aria-label="About WB Digital Hero"
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
      >
        {/* Background glows */}
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div
          className="absolute top-1/2 left-1/4 w-[700px] h-[500px] rounded-full -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 100% 50%, rgba(196,18,48,0.08) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb: semantic nav for SEO */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">About WB Digital</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={fadeUp} className="platform-pill mb-6 inline-flex">
                ✦ About WB Digital · Official Distribution Partner @warnermusicindia
              </motion.div>

              {/* H1: primary keyword target */}
              <motion.h1
                variants={fadeUp}
                className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(42px, 7vw, 88px)' }}
              >
                <span className="page-hero-line block text-white">India&apos;s #1</span>
                <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Free Music</span>
                <span className="page-hero-line block text-white">Distribution</span>
                <span className="page-hero-line block text-white">Platform.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="page-subtext speakable font-inter text-[16px] sm:text-[18px] text-mut leading-relaxed mb-10 max-w-2xl"
              >
                WB Digital by Western Beats Private Limited is India&apos;s most trusted and 100% free music
                distribution platform, officially backed by <strong className="text-white">Warner Music India</strong>.
                Distribute to 150+ platforms including JioSaavn, Gaana, Spotify &amp; Apple Music.
                Earn <strong className="text-white">royalties from every stream</strong>, we only earn when you do. Always free to distribute.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-14">
                <Link
                  href="/submit"
                  className="group flex items-center gap-2 px-7 py-4 bg-blu rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-[#0D77E0] transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: '0 8px 30px rgba(10,100,195,0.35)' }}
                >
                  Start Distributing Free
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="#why-wb"
                  onClick={e => { e.preventDefault(); document.getElementById('why-wb')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="flex items-center gap-2 px-7 py-4 bg-white/[0.06] border border-white/10 rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <Play size={14} className="fill-white" />
                  Why Choose Us
                </a>
              </motion.div>

              {/* Sound waveform */}
              <motion.div variants={fadeUp} className="flex items-end gap-[3px] h-12 mb-8">
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

              {/* Quick stats bar */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-x-8 gap-y-4"
              >
                {[
                  { val: 'FREE', lbl: 'Forever, Always' },
                  { val: '100%', lbl: 'IP Ownership' },
                  { val: '150+', lbl: 'Platforms' },
                  { val: '48hrs', lbl: 'Go-Live Time' },
                  { val: 'WMI', lbl: 'Backed & Verified' },
                ].map(s => (
                  <div key={s.val} className="flex flex-col">
                    <span className="font-outfit font-black text-[26px] sm:text-[30px] leading-none" style={{ color: '#0A64C3' }}>{s.val}</span>
                    <span className="font-inter text-[11px] text-mut tracking-[0.08em] uppercase mt-1">{s.lbl}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right column: hero image (desktop only) */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80&auto=format&fit=crop"
                  alt="Independent artist performing on stage, WB Digital"
                  fill
                  sizes="(max-width:1280px) 50vw, 600px"
                  className="object-cover object-center"
                  priority
                />
                {/* Dark gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(4,10,20,0.1) 0%, rgba(4,10,20,0.25) 40%, rgba(4,10,20,0.85) 100%)' }}
                />
                {/* Red badge top-right */}
                <div className="absolute top-4 right-4">
                  <div
                    className="font-outfit font-bold text-white text-[11px] tracking-[0.06em] px-3 py-1.5 rounded-full"
                    style={{ background: '#C41230', boxShadow: '0 4px 16px rgba(196,18,48,0.4)' }}
                  >
                    ✦ Warner Music India Partner
                  </div>
                </div>
                {/* Stat mini-cards at bottom */}
                <div className="absolute bottom-5 left-4 right-4">
                  <div className="gsap-card grid grid-cols-3 gap-2">
                    {[
                      { val: '150+', lbl: 'Platforms' },
                      { val: '48h',  lbl: 'Go Live' },
                      { val: '₹0',   lbl: 'Forever Free' },
                    ].map(s => (
                      <div
                        key={s.val}
                        className="rounded-xl px-3 py-2.5 text-center"
                        style={{
                          background: 'rgba(10,21,53,0.72)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <div className="font-outfit font-black text-white text-[20px] leading-none">{s.val}</div>
                        <div className="font-inter text-[10px] text-mut mt-0.5 tracking-[0.06em] uppercase">{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR STORY ───────────────────────────────────────────────────────── */}
      <section
        id="our-story"
        aria-labelledby="story-heading"
        className="py-24 sm:py-32 relative overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(10,100,195,0.08) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={container}
            >
              <motion.div variants={fadeUp} className="platform-pill mb-6">Our Story</motion.div>
              <motion.h2
                id="story-heading"
                variants={fadeUp}
                className="font-outfit font-black leading-[1.0] tracking-[-0.02em] mb-6"
                style={{ fontSize: 'clamp(32px, 4.5vw, 54px)' }}
              >
                <span className="page-hero-line block text-white">Born in India.</span>
                <span className="page-hero-line block text-white">Built for</span>
                <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Independent Artists.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed mb-5">
                Western Beats Private Limited was founded with a single, bold mission: to give every Indian
                independent artist access to the same distribution power, platform reach, and industry
                credibility that only major labels once had, at zero cost.
              </motion.p>
              <motion.p variants={fadeUp} className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed mb-5">
                We watched talented artists get trapped paying annual subscriptions to foreign distributors
                like DistroKid, TuneCore, and CD Baby, platforms built for the West, with little understanding
                of the Indian market, Indian platforms, or Indian artists. We knew there was a better way.
              </motion.p>
              <motion.p variants={fadeUp} className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed mb-5">
                That&apos;s why we built WB Digital: India-first, artist-first, and backed by the partnership
                that changed everything: <strong className="text-white">Warner Music India</strong>.
              </motion.p>
              <motion.p variants={fadeUp} className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed mb-8">
                The same Warner Music India partnership that works with artists like <strong className="text-white">Armaan Malik, Diljit Dosanjh, King, and Darshan Raval</strong>, now powers every independent artist on WB Digital.
              </motion.p>

              {/* Mission callout */}
              <motion.blockquote
                variants={fadeUp}
                className="relative pl-5 border-l-2 border-blu"
              >
                <p className="font-outfit font-bold text-white text-[17px] sm:text-[19px] leading-snug italic">
                  &ldquo;Where Independent Meets Major.&rdquo;
                </p>
                <footer className="font-inter text-[12px] text-mut mt-2">
                  WB Digital Mission Statement · Western Beats Private Limited
                </footer>
              </motion.blockquote>
            </motion.div>

            {/* Right: tall portrait image with milestone overlays */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: '4/5' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80&auto=format&fit=crop"
                alt="Concert stage lights, Western Beats music distribution"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Dark overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(4,10,20,0.15) 0%, rgba(4,10,20,0.3) 50%, rgba(4,10,20,0.9) 100%)' }}
              />
              {/* Milestone cards as absolute overlays at bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="gsap-card grid grid-cols-2 gap-2">
                  {[
                    { num: '01', title: 'Founded in India', color: '#C41230' },
                    { num: '02', title: 'Warner Music India', color: '#0A64C3' },
                    { num: '03', title: '150+ Platforms', color: '#5CB2DC' },
                    { num: '04', title: 'Always Free', color: '#002A8D' },
                  ].map(card => (
                    <div
                      key={card.num}
                      className="rounded-xl p-3 relative overflow-hidden"
                      style={{
                        background: 'rgba(10,21,53,0.88)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl" style={{ background: card.color }} />
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: card.color }}
                        />
                        <div className="font-outfit font-bold text-white text-[12px] leading-snug">{card.title}</div>
                      </div>
                      <div
                        className="font-outfit font-black text-[10px] mt-1"
                        style={{ color: card.color, opacity: 0.7 }}
                      >
                        {card.num}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WARNER MUSIC INDIA PARTNERSHIP ──────────────────────────────────── */}
      <section
        id="wmi-partnership"
        aria-labelledby="wmi-heading"
        className="py-24 sm:py-32 relative overflow-hidden"
        style={{ background: '#060C18' }}
      >
        <div className="crm-stripe absolute top-0 left-0 right-0" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.12) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="platform-pill mb-5 inline-flex"
            >
              Exclusive Partnership
            </motion.div>
            <motion.h2
              id="wmi-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-5"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              <span className="text-white">The </span>
              <span style={{ color: '#0A64C3' }}>Warner Music India</span>
              <span className="text-white"> Advantage.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="speakable font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed max-w-2xl mx-auto"
            >
              WB Digital is India&apos;s only free distribution platform with an exclusive Warner Music India
              backing, a partnership that no other distributor (DistroKid, TuneCore, CD Baby, Ditto Music,
              Believe, Orchard, Mad Verse, or Fore Vision Digital) can match.
            </motion.p>
          </div>

          {/* 4 WMI advantage cards */}
          <div className="gsap-card grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              {
                icon: Award,
                title: 'Major-Label Credibility',
                color: '#0A64C3',
                desc: "Your releases carry the weight of Warner Music India's reputation, the same label behind some of India's biggest artists.",
              },
              {
                icon: Zap,
                title: 'Priority Platform Placement',
                color: '#C41230',
                desc: 'WMI relationships mean your music gets priority on JioSaavn, Gaana, and other Indian DSPs, faster and more prominently than any foreign distributor.',
              },
              {
                icon: Globe2,
                title: 'Industry Network Access',
                color: '#5CB2DC',
                desc: "Access to WMI's curators, playlist editors, A&R contacts, and industry events that no independent distributor can offer.",
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                color: '#002A8D',
                desc: 'Every release is checked against WMI quality standards: metadata, audio compliance, and platform specifications, before going live.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col"
                style={{ background: 'rgba(10,21,53,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: card.color }} />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${card.color}22` }}
                >
                  <card.icon size={22} style={{ color: card.color }} />
                </div>
                <div className="font-outfit font-extrabold text-white text-[15px] mb-3">{card.title}</div>
                <div className="font-inter text-[13px] text-mut leading-relaxed flex-1">{card.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* WMI badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl"
            style={{ background: 'rgba(10,100,195,0.1)', border: '1px solid rgba(10,100,195,0.25)' }}
          >
            <div className="w-14 h-14  flex-shrink-0">
              <Image src="/partners/westernbeats-BpLvGE3e.png" alt="Western Beats Logo" width={56} height={56} className="object-contain w-full h-full" />
            </div>
            <div className="text-center sm:text-left">
              <div className="font-inter text-[11px] text-sky tracking-[0.12em] uppercase font-semibold mb-1">
                Officially Backed By
              </div>
              <div className="font-outfit font-black text-white text-[22px] sm:text-[26px] leading-none">
                Warner Music India
              </div>
              <div className="font-inter text-[12px] text-mut mt-1">
                @warnermusicindia · A Warner Music Group Company
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <div className="text-center sm:text-right">
              <div className="font-inter text-[11px] text-sky tracking-[0.12em] uppercase font-semibold mb-1">
                Exclusive To
              </div>
              <div className="font-outfit font-black text-white text-[18px] sm:text-[20px]">Western Beats</div>
              <div className="font-inter text-[12px] text-mut mt-1">
                No other free distributor has this
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY WB DIGITAL: COMPARISON */}
      <section
        id="why-wb"
        aria-labelledby="why-heading"
        className="py-24 sm:py-32 relative overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,21,53,0.2) 0%, transparent 50%, rgba(10,21,53,0.2) 100%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="platform-pill mb-5 inline-flex"
            >
              Platform Comparison
            </motion.div>
            <motion.h2
              id="why-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-outfit font-black tracking-[-0.02em] leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              <span className="text-white">Why Indian Artists Choose </span>
              <span style={{ color: '#0A64C3' }}>WB Digital</span>
              <span className="text-white"> Over Everyone Else.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed max-w-2xl mx-auto"
            >
              Compare WB Digital against DistroKid, TuneCore, CD Baby, Ditto Music, Believe, The Orchard,
              Mad Verse &amp; Fore Vision Digital, and see why the answer is clear.
            </motion.p>
          </div>

          {/* Desktop comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="hidden lg:block overflow-x-auto rounded-2xl"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <table className="w-full" style={{ background: '#0A1535' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <th className="text-left px-5 py-4 font-outfit font-bold text-[12px] text-mut tracking-[0.1em] uppercase w-48">
                    Feature
                  </th>
                  {DISTRIBUTORS.map(d => (
                    <th key={d.name} className="px-3 py-4 min-w-[110px]">
                      <div className={`flex flex-col items-center gap-1.5 ${d.isUs ? 'text-white' : 'text-mut'}`}>
                        {d.isUs && (
                          <div className="w-full mb-1">
                            <span
                              className="inline-flex items-center gap-1 font-outfit font-bold text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 rounded-full"
                              style={{ background: '#0A64C3', color: 'white' }}
                            >
                              ★ {d.badge}
                            </span>
                          </div>
                        )}
                        <span className={`font-outfit font-extrabold text-[13px] ${d.isUs ? 'text-white' : 'text-mut'}`}>
                          {d.name}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_FEATURES.map((feature, fi) => (
                  <tr
                    key={feature}
                    style={{
                      borderBottom: fi < COMPARE_FEATURES.length - 1 ? '1px solid rgba(255,255,255,0.05)' : undefined,
                      background: fi % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
                    }}
                  >
                    <td className="px-5 py-3.5 font-inter text-[12px] text-mut font-semibold">{feature}</td>
                    {DISTRIBUTORS.map(d => {
                      const val = d.data[fi]
                      return (
                        <td key={d.name} className="px-3 py-3.5 text-center">
                          {typeof val === 'boolean' ? (
                            val ? (
                              <div className="flex justify-center">
                                <div
                                  className="w-6 h-6 rounded-full flex items-center justify-center"
                                  style={{ background: d.isUs ? 'rgba(10,100,195,0.25)' : 'rgba(196,18,48,0.15)' }}
                                >
                                  {d.isUs
                                    ? <Check size={12} style={{ color: '#5CB2DC' }} />
                                    : <Check size={12} style={{ color: '#5CB2DC' }} />
                                  }
                                </div>
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <div
                                  className="w-6 h-6 rounded-full flex items-center justify-center"
                                  style={{ background: 'rgba(255,255,255,0.04)' }}
                                >
                                  <X size={11} style={{ color: '#6B7A8D' }} />
                                </div>
                              </div>
                            )
                          ) : (
                            <span
                              className={`font-inter text-[11px] leading-tight ${
                                d.isUs ? 'text-white font-semibold' : 'text-mut'
                              }`}
                            >
                              {val as string}
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile: cards per distributor */}
          <div className="lg:hidden flex flex-col gap-4">
            {DISTRIBUTORS.map((d, di) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: di * 0.05, ease: EASE }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: d.isUs ? 'rgba(10,100,195,0.12)' : '#0A1535',
                  border: d.isUs ? '1px solid rgba(10,100,195,0.35)' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className={`font-outfit font-extrabold text-[16px] ${d.isUs ? 'text-white' : 'text-mut'}`}>
                    {d.name}
                  </span>
                  {d.isUs && (
                    <span
                      className="font-outfit font-bold text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full"
                      style={{ background: '#0A64C3', color: 'white' }}
                    >
                      ★ Best for India
                    </span>
                  )}
                </div>
                <div className="px-5 py-4 grid grid-cols-2 gap-3">
                  {COMPARE_FEATURES.map((feature, fi) => {
                    const val = d.data[fi]
                    return (
                      <div key={feature}>
                        <div className="font-inter text-[10px] text-mut tracking-[0.08em] uppercase mb-0.5">{feature}</div>
                        {typeof val === 'boolean' ? (
                          val
                            ? <div className="flex items-center gap-1"><Check size={13} style={{ color: '#5CB2DC' }} /><span className="font-inter text-[12px] text-sky">Yes</span></div>
                            : <div className="flex items-center gap-1"><X size={13} style={{ color: '#6B7A8D' }} /><span className="font-inter text-[12px] text-mut">No</span></div>
                        ) : (
                          <span className={`font-inter text-[12px] ${d.isUs ? 'text-white font-semibold' : 'text-mut'}`}>{val as string}</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA below table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="text-center mt-12"
          >
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blu rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-[#0D77E0] transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 8px 30px rgba(10,100,195,0.35)' }}
            >
              Start Free, No Credit Card Needed
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── OUR VALUES ──────────────────────────────────────────────────────── */}
      <section
        id="our-values"
        aria-labelledby="values-heading"
        className="py-24 sm:py-32 relative overflow-hidden"
        style={{ background: '#060C18' }}
      >
        <div className="crm-stripe absolute bottom-0 left-0 right-0" />
        <div
          className="absolute top-1/2 right-0 w-[500px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 100% 50%, rgba(10,100,195,0.1) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="platform-pill mb-5 inline-flex"
            >
              What We Stand For
            </motion.div>
            <motion.h2
              id="values-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-outfit font-black tracking-[-0.02em] leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              <span className="text-white">Our Core </span>
              <span style={{ color: '#0A64C3' }}>Values.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed max-w-xl mx-auto"
            >
              Six principles that set us apart from every other music distributor, and the reason
              artists trust WB Digital with their careers.
            </motion.p>
          </div>

          <div className="gsap-card grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: EASE }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="card-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: v.color }} />
                <div
                  className="absolute bottom-4 right-4 font-outfit font-black text-[60px] leading-none opacity-[0.04] select-none"
                  style={{ color: v.color }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${v.color}20` }}
                >
                  <v.icon size={22} style={{ color: v.color }} />
                </div>
                <div className="font-outfit font-extrabold text-white text-[16px] sm:text-[17px] mb-3">{v.title}</div>
                <div className="font-inter text-[13.5px] text-mut leading-relaxed">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────────────────────────── */}
      <section
        id="numbers"
        ref={statsRef}
        aria-labelledby="stats-heading"
        className="py-24 sm:py-32 relative overflow-hidden"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.1) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="platform-pill mb-5 inline-flex"
            >
              By the Numbers
            </motion.div>
            <motion.h2
              id="stats-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-outfit font-black tracking-[-0.02em] leading-[1.0]"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              <span className="text-white">The Numbers </span>
              <span style={{ color: '#0A64C3' }}>Don&apos;t Lie.</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 60, scale: 0.85 }}
                animate={statsView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, type: 'spring', stiffness: 80, damping: 14 }}
                whileHover={{ y: -10, scale: 1.04, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
                className="w-full sm:w-[280px] rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(180deg, rgba(10,21,53,0.7) 0%, rgba(6,12,24,0.92) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ background: s.color }} />
                <div
                  className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
                  style={{ background: s.color }}
                />
                <div className="text-[60px] sm:text-[68px] leading-none mb-4 relative z-10">
                  <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} color={s.color} inView={statsView} />
                </div>
                <div className="font-outfit font-bold text-white text-[15px] sm:text-[17px] mb-1.5 relative z-10">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────────────────────────── */}
      <section
        id="services-overview"
        aria-labelledby="services-heading"
        className="py-24 sm:py-32 relative overflow-hidden"
        style={{ background: '#060C18' }}
      >
        <div className="crm-stripe absolute top-0 left-0 right-0" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(10,100,195,0.1) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="platform-pill mb-5 inline-flex"
            >
              Full-Service Music Company
            </motion.div>
            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-outfit font-black tracking-[-0.02em] leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
            >
              <span className="text-white">More Than Just </span>
              <span style={{ color: '#0A64C3' }}>Distribution.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed max-w-2xl mx-auto"
            >
              Unlike DistroKid, TuneCore, or CD Baby which only offer distribution, WB Digital is a
              complete music company, giving you everything you need to build a sustainable career.
            </motion.p>
          </div>

          <div className="gsap-card grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SERVICES_BRIEF.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: EASE }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="card-hover rounded-2xl p-6 flex items-start gap-4 relative overflow-hidden"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: s.color }} />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${s.color}22` }}
                >
                  <s.icon size={20} style={{ color: s.color }} />
                </div>
                <div>
                  <div className="font-outfit font-extrabold text-white text-[15px] mb-2">{s.title}</div>
                  <div className="font-inter text-[13px] text-mut leading-relaxed">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-outfit font-bold text-[14px] text-sky hover:text-white transition-colors duration-200"
            >
              Explore All Services
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────────── */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="py-24 sm:py-32 relative overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(10,100,195,0.08) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="platform-pill mb-5 inline-flex"
            >
              Frequently Asked Questions
            </motion.div>
            <motion.h2
              id="faq-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-outfit font-black tracking-[-0.02em] leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(30px, 4.5vw, 52px)' }}
            >
              <span className="text-white">Everything You Need </span>
              <span style={{ color: '#0A64C3' }}>to Know.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed"
            >
              Comparing WB Digital vs DistroKid, TuneCore, CD Baby, Ditto Music and more? We answer it all.
            </motion.p>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────────── */}
      <section
        id="cta"
        aria-label="Call to Action"
        className="py-24 sm:py-32 relative overflow-hidden"
        style={{ background: '#060C18' }}
      >
        <div className="crm-stripe absolute top-0 left-0 right-0" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.18) 0%, transparent 70%)' }}
        />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="platform-pill mb-6 inline-flex"
          >
            ✦ Start Today, It&apos;s Free
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-6"
            style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
          >
            <span className="text-white">Ready to Distribute</span>
            <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Your Music Free?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="font-inter text-[15px] sm:text-[17px] text-mut leading-relaxed mb-10"
          >
            Stop paying DistroKid, TuneCore, CD Baby, or Ditto Music. Switch to WB Digital, India&apos;s #1 free
            music distribution platform, officially backed by Warner Music India. One upload. 150+ platforms.
            100% ownership always yours. ₹0 upfront. We only earn when you earn.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/submit"
              className="group flex items-center gap-2 px-8 py-4 bg-blu rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-[#0D77E0] transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 8px 35px rgba(10,100,195,0.4)' }}
            >
              Start Distributing Free
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-white/[0.06] border border-white/10 rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              Talk to Our Team
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12"
          >
            {[
              '✓ 100% Free to Distribute',
              '✓ 100% Ownership Yours',
              '✓ Warner Music India Backed',
              '✓ JioSaavn & Gaana Priority',
              '✓ Live in 48 Hours',
            ].map(badge => (
              <span key={badge} className="font-inter text-[12px] text-mut">{badge}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER (minimal, links back to main) ────────────────────────────── */}
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
            © 2026 Western Beats Private Limited. All rights reserved. · Official Distribution Partner @warnermusicindia
          </div>
          <div className="flex items-center gap-5">
            <Link href="/" className="font-inter text-[12px] text-mut hover:text-white transition-colors">Home</Link>
            <Link href="/contact" className="font-inter text-[12px] text-mut hover:text-white transition-colors">Contact</Link>
            <a href="https://instagram.com/wb_digital_" target="_blank" rel="noopener noreferrer" className="font-inter text-[12px] text-mut hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
