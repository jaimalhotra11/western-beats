'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
  'Warner Music India backing',
  'Go-live time',
  'ISRC & UPC codes',
  'Playlist pitching',
  'Artist support',
  'Keep 100% masters ownership',
]

const DISTRIBUTORS = [
  {
    name: 'WB Digital',
    highlight: true,
    badge: 'Best for India',
    color: '#0A64C3',
    price: 'FREE — ₹0 Forever',
    priceNote: '25% revenue share only when you earn',
    data: [
      '150+ (India-first)',
      '75% to you',
      '₹0 — none ever',
      true,
      true,
      '48 Hours',
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
      '$22.99/yr — mandatory',
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
      '$14.99/release — mandatory',
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
      '£19/yr — mandatory',
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
    priceNote: 'Higher cut than WB Digital',
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
    q: 'Is WB Digital distribution really free — forever?',
    a: 'Yes. Distribution costs ₹0 upfront — no annual fee, no per-release charge, ever. WB Digital earns a 25% royalty share only when you earn. We never charge you a single rupee before you make money. Think of it as a partner who only gets paid when you succeed.',
  },
  {
    q: 'How does the 75/25 royalty split work?',
    a: 'When your music generates streaming royalties, WB Digital pays you 75% directly every month. We keep 25% as our service fee. There are no upfront costs — we only earn when you earn. This aligns our interests completely with yours: the more you earn, the more we both earn.',
  },
  {
    q: 'Is WB Digital cheaper than DistroKid for Indian artists?',
    a: 'Absolutely. DistroKid charges $22.99/year (₹1,900+) regardless of whether you earn anything. WB Digital charges ₹0 upfront — our 25% service fee only applies when royalties are generated. If you earn ₹0, you pay ₹0.',
  },
  {
    q: 'How does WB Digital compare to CD Baby?',
    a: 'WB Digital wins on every metric: ₹0 upfront (vs $9.99/release + 9% royalties), India-first distribution with JioSaavn & Gaana priority (CD Baby has no India focus), Warner Music India backing (CD Baby has no equivalent), 48-hour go-live (vs 5–7 days), and free ISRC codes (CD Baby charges $5 each).',
  },
  {
    q: 'What happens if I earn nothing from streaming?',
    a: 'You pay nothing. WB Digital only takes its 25% service fee when royalties are generated. If your music earns ₹0, WB Digital earns ₹0. Zero risk, zero upfront commitment.',
  },
  {
    q: 'Are there any hidden fees I should know about?',
    a: 'No hidden fees. Free means free — no premium tier required for basic features, no charge for ISRC/UPC codes, no take-down fees if you want to remove a release, no fee to update metadata. What you see is exactly what you get.',
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

  return (
    <div className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

      {/* ── NAV ──────────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060C18]/95 backdrop-blur-xl border-b border-white/[0.06] py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0 group-hover:opacity-90 transition-opacity duration-300">
              <Image src="/wb-digital-logo.png" alt="Western Beats" fill sizes="40px" className="object-contain" />
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
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/pricing', label: 'Pricing', active: true },
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
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div className="absolute top-1/2 left-1/4 w-[700px] h-[500px] rounded-full -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.14) 0%, transparent 70%)' }} />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">Pricing</li>
            </ol>
          </nav>

          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="platform-pill mb-6 inline-flex">
              ✦ Transparent. No Surprises.
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(42px, 7vw, 88px)' }}
            >
              <span className="block" style={{ color: '#0A64C3' }}>₹0 Forever.</span>
              <span className="block text-white">75% Yours.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-inter text-[16px] sm:text-[18px] text-mut leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              WB Digital charges <strong className="text-white">zero upfront</strong> — no annual fee, no per-release charge.
              We earn a <strong className="text-white">25% revenue share only when you earn</strong>.
              If you earn ₹0, we take ₹0. Simple, aligned, honest.
            </motion.p>

            {/* Price hero card */}
            <motion.div
              variants={fadeUp}
              className="inline-flex flex-col items-center rounded-3xl p-8 sm:p-10 max-w-md w-full text-left mx-auto relative overflow-hidden"
              style={{ background: '#0A64C3', boxShadow: '0 40px 100px rgba(10,100,195,0.35)' }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)' }} />
              <div className="relative z-10 w-full">
                <div className="platform-pill bg-white/10 text-white border-white/20 mb-4 self-start">WB Digital — Core Plan</div>
                <div className="font-outfit font-black text-white text-[52px] sm:text-[64px] leading-none mb-1">₹0</div>
                <div className="font-inter text-ice/80 text-[14px] mb-6">Forever. No card required. No hidden fees.</div>
                <div className="w-full h-px bg-white/15 mb-6" />
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    '150+ platforms — India-first',
                    '75% royalties paid to you monthly',
                    '25% service fee only when you earn',
                    '48-hour go-live time',
                    'Free ISRC & UPC codes',
                    'Warner Music India backed',
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
                  Start Free — Submit Your Music
                </Link>
              </div>
            </motion.div>
          </motion.div>
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
              <span className="text-white">WB Digital vs</span>{' '}
              <span style={{ color: '#0A64C3' }}>Everyone Else.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={tableView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-inter text-[15px] text-mut leading-relaxed mt-4 max-w-xl mx-auto"
            >
              How does WB Digital stack up against DistroKid, TuneCore, CD Baby, Ditto Music, and Believe?
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Globe2,   color: '#0A64C3', title: 'India First', desc: 'JioSaavn, Gaana & Hungama distribution with Warner Music India priority — no foreign distributor can match this.' },
              { icon: Shield,   color: '#C41230', title: 'Zero Risk',    desc: 'No upfront cost means zero financial risk. Submit your music for free — we only earn when you earn.' },
              { icon: Zap,      color: '#5CB2DC', title: '48-Hour Live', desc: 'Fastest distribution in India. DistroKid takes 7–10 days. WB Digital gets you live in 48 hours.' },
              { icon: Music2,   color: '#0A64C3', title: 'Full Service', desc: 'Distribution is just the start. Events, talent management, audio production, video direction — all under one roof.' },
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
            <div className="font-outfit font-extrabold text-white text-[20px]">Warner Music India</div>
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div className="font-inter text-[12px] text-mut">The same label that works with Armaan Malik, Diljit Dosanjh, King &amp; Darshan Raval — now powers WB Digital artists.</div>
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
                Submit your music now — live on 150+ platforms in 48 hours.
                <br /><strong className="text-white">No card required. No annual fee. 75% royalties. Free forever.</strong>
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
          <div className="font-inter text-[12px] text-mut">© 2025 Western Beats Private Limited · WB Digital</div>
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
