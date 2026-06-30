'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'
import Link from 'next/link'
import Nav from '../components/Nav'
import { Check, X, ArrowRight, ChevronDown, Zap, Shield, Globe2, Music2 } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.7, ease: EASE } },
}
const container: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const FEATURES = [
  'Distribution to 150+ platforms',
  'Artist royalty share',
  'Annual / per-release fee',
  'India-First (JioSaavn & Gaana)',
  'Warner Music India Partnership',
  'Go-live time',
  'ISRC & UPC codes',
  'Playlist pitching',
  'Artist support',
  'Keep 100% ownership (T&C apply, masters ownership',
]

const DISTRIBUTORS = [
  {
    name: 'Western Beats',
    highlight: true,
    badge: 'Best for India',
    color: '#0A64C3',
    price: 'FREE: ₹0 Forever',
    priceNote: '30% Distribution Fee only when you earn',
    data: [
      '150+ (India-first)',
      'Direct (T&C)',
      '₹0, none ever',
      true,
      true,
      '72 Hours',
      'Free Included',
      true,
      'WhatsApp + Email 24/7',
      true,
    ],
  },
  {
    name: 'DistroKid',
    highlight: false,
    color: '#6B7A8D',
    price: '$22.99/year',
    priceNote: '≈ ₹1,900+ per year',
    data: [
      '150+',
      '100% (after annual fee)',
      '$22.99/yr, mandatory',
      false,
      false,
      '7–10 Days',
      'Free Included',
      false,
      'Ticket system only',
      true,
    ],
  },
  {
    name: 'TuneCore',
    highlight: false,
    color: '#6B7A8D',
    price: '$14.99/release',
    priceNote: '≈ ₹1,250+ per release',
    data: [
      '150+',
      '100% (after per-release fee)',
      '$14.99/release, mandatory',
      false,
      false,
      '7–10 Days',
      'Free Included',
      false,
      'Ticket system only',
      true,
    ],
  },
  {
    name: 'CD Baby',
    highlight: false,
    color: '#6B7A8D',
    price: '$9.99/release + 9%',
    priceNote: '≈ ₹830+ per release, takes 9% royalties',
    data: [
      '150+',
      '91% (takes 9%)',
      '$9.99/release + 9% royalties',
      false,
      false,
      '5–7 Days',
      '$5/each',
      false,
      'Email only',
      true,
    ],
  },
  {
    name: 'Ditto Music',
    highlight: false,
    color: '#6B7A8D',
    price: '£19/year',
    priceNote: '≈ ₹2,000+ per year',
    data: [
      '150+',
      '100% (after annual fee)',
      '£19/yr, mandatory',
      false,
      false,
      '3–5 Days',
      'Free Included',
      false,
      'Email only',
      true,
    ],
  },
  {
    name: 'Believe',
    highlight: false,
    color: '#6B7A8D',
    price: '15–25% revenue share',
    priceNote: 'Higher cut than Western Beats',
    data: [
      '100+',
      '70–85%',
      'Takes 15–25% revenue share',
      false,
      false,
      '5–7 Days',
      'Free Included',
      false,
      'Account Manager',
      true,
    ],
  },
]

const FAQS = [
  {
    q: 'Is Western Beats distribution really free, forever?',
    a: 'Yes. Distribution costs ₹0 upfront, no annual fee, no per-release charge, ever. Western Beats only earns when you earn. We never charge you a single rupee before you make money. Think of it as a partner who only gets paid when you succeed.',
  },
  {
    q: 'How does the 70/30 royalty split work?',
    a: 'When your music generates streaming royalties, Western Beats pays your royalties directly to your bank account with no upfront costs. We only earn when you earn. Full details in our Terms & Conditions. This aligns our interests completely with yours: the more you earn, the more we both earn.',
  },
  {
    q: 'Is Western Beats cheaper than DistroKid for Indian artists?',
    a: 'Absolutely. DistroKid charges $22.99/year (₹1,900+) regardless of whether you earn anything. Western Beats charges ₹0 upfront, our 30% Distribution Fee only applies when royalties are generated. If you earn ₹0, you pay ₹0.',
  },
  {
    q: 'How does Western Beats compare to CD Baby?',
    a: 'Western Beats wins on every metric: ₹0 upfront (vs $9.99/release + 9% royalties), India-first distribution with JioSaavn & Gaana priority (CD Baby has no India focus), Warner Music India Partnership backing (CD Baby has no equivalent), 72-hour go-live (vs 5–7 days), and free ISRC codes (CD Baby charges $5 each).',
  },
  {
    q: 'What happens if I earn nothing from streaming?',
    a: 'You pay nothing. Western Beats only earns when you earn — if your music generates nothing, Western Beats earns nothing. If your music earns ₹0, Western Beats earns ₹0. Zero risk, zero upfront commitment.',
  },
  {
    q: 'Are there any hidden fees I should know about?',
    a: 'No hidden fees. Free means free, no premium tier required for basic features, no charge for ISRC/UPC codes, no take-down fees if you want to remove a release, no fee to update metadata. What you see is exactly what you get.',
  },
]

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

export default function PricingPage() {
  const heroRef    = useRef(null)
  const tableRef   = useRef(null)
  const tableView  = useInView(tableRef, { once: true, margin: '-80px' })
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
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div className="absolute top-1/2 left-1/4 w-[700px] h-[500px] rounded-full -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.14) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">Pricing</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: headline */}
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="platform-pill page-badge mb-6 inline-flex">
                ✦ Transparent. No Surprises.
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(42px, 7vw, 88px)' }}
              >
                <span className="page-hero-line block" style={{ color: '#0A64C3' }}>₹0 Forever.</span>
                <span className="page-hero-line block text-white">100% Ownership.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="page-subtext font-inter text-[16px] sm:text-[17px] text-mut leading-relaxed mb-10 max-w-xl"
              >
                Western Beats charges <strong className="text-white">zero upfront</strong>, no annual fee, no per-release charge.
                We <strong className="text-white">only earn when you earn</strong> — zero upfront cost, ever.
                If you earn ₹0, we take ₹0. Simple, aligned, honest.
              </motion.p>

              {/* Quick proof points */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {['₹0 upfront forever','100% IP ownership (T&C apply)','Royalties paid direct to you','₹0 upfront forever','48-hr go-live'].map(pt => (
                  <span key={pt} className="px-3 py-1.5 rounded-full font-inter text-[12px] font-semibold text-ice/80" style={{ background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)' }}>{pt}</span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Price hero card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22,1,0.36,1] }}
              className="flex flex-col rounded-3xl p-8 sm:p-10 w-full text-left relative overflow-hidden"
              style={{ background: '#0A64C3', boxShadow: '0 40px 100px rgba(10,100,195,0.35)' }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)' }} />
              <div className="relative z-10 w-full">
                <div className="platform-pill bg-white/10 text-white border-white/20 mb-4 self-start">Western Beats: Core Plan</div>
                <div className="font-outfit font-black text-white text-[52px] sm:text-[64px] leading-none mb-1">₹0</div>
                <div className="font-inter text-ice/80 text-[14px] mb-6">Forever. No card required. No hidden fees.</div>
                <div className="w-full h-px bg-white/15 mb-6" />
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    '150+ platforms, India-first',
                    'Royalties paid direct to your bank (T&C)',
                    '30% Distribution Fee only when you earn',
                    '72 hour go-live time',
                    'Free ISRC & UPC codes',
                    'Warner Music India Partner backed',
                    'Real-time analytics dashboard',
                    'WhatsApp & email support',
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 font-inter text-[13px] text-ice/90">
                      <Check size={14} className="flex-shrink-0 text-white" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  href="/submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#080F1A] rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-[#0A1535] transition-colors duration-200"
                >
                  <Zap size={16} />
                  Start Free: Submit Your Music
                </Link>
              </div>
            </motion.div>
          </div>{/* end grid */}
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────────── */}
      <section ref={tableRef} className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={tableView ? { opacity: 1, y: 0 } : {}}
              className="platform-pill mb-5 inline-flex"
            >
              The Comparison
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={tableView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-outfit font-black tracking-[-0.02em] leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 4vw, 50px)' }}
            >
              <span className="text-white">Western Beats vs</span>{' '}
              <span style={{ color: '#0A64C3' }}>Everyone Else.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={tableView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-inter text-[15px] text-mut leading-relaxed mt-4 max-w-xl mx-auto"
            >
              How does Western Beats stack up against DistroKid, TuneCore, CD Baby, Ditto Music, and Believe?
            </motion.p>
          </div>

          {/* Desktop Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={tableView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="hidden lg:block overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 pr-4 font-inter text-[12px] text-mut tracking-[0.08em] uppercase w-[200px]">Feature</th>
                  {DISTRIBUTORS.map(d => (
                    <th key={d.name} className="py-4 px-3 text-center">
                      <div
                        className={`rounded-xl py-3 px-4 ${d.highlight ? '' : ''}`}
                        style={d.highlight ? { background: '#0A64C3', boxShadow: '0 8px 32px rgba(10,100,195,0.4)' } : { background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
                      >
                        {d.badge && (
                          <div className="font-inter text-[9px] text-white/80 tracking-[0.1em] uppercase mb-1">{d.badge}</div>
                        )}
                        <div className={`font-outfit font-extrabold text-[15px] ${d.highlight ? 'text-white' : 'text-white/60'}`}>{d.name}</div>
                        <div className={`font-outfit font-bold text-[12px] mt-1 ${d.highlight ? 'text-ice/90' : 'text-mut'}`}>{d.price}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((feat, fi) => (
                  <tr key={feat} className="border-t border-white/[0.04]">
                    <td className="py-4 pr-4 font-inter text-[13px] text-mut">{feat}</td>
                    {DISTRIBUTORS.map(d => {
                      const val = d.data[fi]
                      return (
                        <td key={d.name} className="py-4 px-3 text-center">
                          {typeof val === 'boolean' ? (
                            val
                              ? <Check size={16} className="mx-auto" style={{ color: d.highlight ? '#5CB2DC' : '#3B4A5A' }} />
                              : <X size={16} className="mx-auto text-white/20" />
                          ) : (
                            <span
                              className="font-inter text-[12px] leading-tight"
                              style={{ color: d.highlight ? 'white' : '#6B7A8D' }}
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

          {/* Mobile: Cards */}
          <div className="lg:hidden flex flex-col gap-5">
            {DISTRIBUTORS.map((d, di) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                animate={tableView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + di * 0.08 }}
                className="rounded-2xl p-6 relative overflow-hidden"
                style={d.highlight
                  ? { background: '#0A64C3', boxShadow: '0 16px 48px rgba(10,100,195,0.35)' }
                  : { background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }
                }
              >
                {d.badge && <div className="font-inter text-[10px] text-white/70 tracking-[0.1em] uppercase mb-1">{d.badge}</div>}
                <div className={`font-outfit font-extrabold text-[20px] ${d.highlight ? 'text-white' : 'text-white/80'} mb-1`}>{d.name}</div>
                <div className={`font-outfit font-bold text-[13px] mb-4 ${d.highlight ? 'text-ice' : 'text-mut'}`}>{d.price}</div>
                <div className="flex flex-col gap-2.5">
                  {FEATURES.map((feat, fi) => {
                    const val = d.data[fi]
                    return (
                      <div key={feat} className="flex items-start gap-3">
                        {typeof val === 'boolean'
                          ? val
                            ? <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: d.highlight ? '#5CB2DC' : '#3B4A5A' }} />
                            : <X size={14} className="flex-shrink-0 mt-0.5 text-white/20" />
                          : null
                        }
                        <div className="flex-1">
                          <div className={`font-inter text-[11px] ${d.highlight ? 'text-ice/60' : 'text-mut/60'} uppercase tracking-wide`}>{feat}</div>
                          {typeof val !== 'boolean' && (
                            <div className={`font-inter text-[12px] ${d.highlight ? 'text-white' : 'text-mut'}`}>{val}</div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,21,53,0.5) 0%, transparent 100%)' }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="gsap-card grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Globe2,   color: '#0A64C3', title: 'India First', desc: 'JioSaavn, Gaana & distribution with our Warner Music India Partnership priority, no foreign distributor can match this.' },
              { icon: Shield,   color: '#C41230', title: 'Zero Risk',    desc: 'No upfront cost means zero financial risk. Submit your music for free, we only earn when you earn.' },
              { icon: Zap,      color: '#5CB2DC', title: '72-Hour Live', desc: 'Fastest distribution in India. DistroKid takes 7–10 days. Western Beats gets you live in 72 hours.' },
              { icon: Music2,   color: '#0A64C3', title: 'Full Service', desc: 'Distribution is just the start. Events, talent management, audio production, video direction, all under one roof.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                  className="rounded-2xl p-6 relative overflow-hidden"
                  style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: item.color }} />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}20` }}>
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div className="font-outfit font-extrabold text-white text-[15px] mb-2">{item.title}</div>
                  <div className="font-inter text-[13px] text-mut leading-relaxed">{item.desc}</div>
                </motion.div>
              )
            })}
          </div>

          {/* WMI bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 p-6 sm:p-8 rounded-2xl text-center md:text-left"
            style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}
          >
            <div className="font-inter text-[12px] text-sky tracking-[0.1em] uppercase font-semibold">Official Partner</div>
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div className="font-outfit font-extrabold text-white text-[20px]">Warner Music India Partner</div>
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div className="font-inter text-[12px] text-mut">The same Warner Music Group network that powers global superstars, now powers Western Beats artists.</div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="platform-pill mb-5 inline-flex">Pricing FAQ</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.05]" style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}>
              <span className="text-white">Common Questions.</span>{' '}
              <span style={{ color: '#0A64C3' }}>Honest Answers.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
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
              <div className="font-outfit font-black text-white text-[40px] sm:text-[52px] leading-none mb-3">₹0 to Start.</div>
              <div className="font-inter text-ice/90 text-[16px] sm:text-[18px] mb-8 leading-relaxed">
                Submit your music now, live on 150+ platforms in 72 hours.
                <br /><strong className="text-white">No card required. No annual fee. 100% ownership (T&C apply). Free forever.</strong>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/submit"
                  className="group flex items-center gap-2 px-7 py-4 bg-[#080F1A] rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-[#0A1535] transition-colors duration-200"
                >
                  Submit Your Music Free
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="flex items-center gap-2 px-7 py-4 bg-white/10 rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-white/20 transition-colors duration-200"
                >
                  How It Works
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
              { href: '/how-it-works', label: 'How It Works' },
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
