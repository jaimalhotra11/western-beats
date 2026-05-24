'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'

const EASE = [0.22, 1, 0.36, 1] as const

const FAQS = [
  {
    q: 'When do I get paid?',
    a: 'Payments are processed monthly. Once royalties are collected from all streaming platforms, we calculate your 75% share and transfer it directly to your bank account within the first two weeks of the following month.',
  },
  {
    q: 'What platforms are included in royalty collection?',
    a: 'All 150+ platforms we distribute to. That includes JioSaavn, Gaana, Spotify, Apple Music, YouTube Music, Amazon Music, Wynk, Hungama, Resso, and every other platform in our network. You earn from every stream, on every platform.',
  },
  {
    q: 'Do you deduct any fees before paying me?',
    a: 'No deductions except our 25% platform share. There are no processing fees, no administrative charges, no minimum payout thresholds that eat into your earnings. You get 75% of every rupee that comes in.',
  },
  {
    q: 'What is an ISRC and do I need one?',
    a: 'An ISRC (International Standard Recording Code) is a unique identifier for your recording. Every track needs one. We generate ISRC codes for every release at no extra cost. You do not need to buy or register them separately.',
  },
  {
    q: 'What is a UPC and do you provide it?',
    a: 'A UPC (Universal Product Code) identifies your release as a whole product (album or single). Just like ISRC codes, we generate and assign UPCs for every release for free. It is part of the standard distribution process.',
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: EASE }}
      className="rounded-2xl overflow-hidden" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
      <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="font-outfit font-bold text-white text-[15px] leading-snug">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: open ? '#0A64C3' : 'rgba(255,255,255,0.06)' }}>
          <ChevronDown size={14} className="text-white" />
        </motion.div>
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden">
        <p className="px-6 pb-5 font-inter text-[14px] text-mut leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  )
}

export default function RoyaltiesPage() {
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

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] rounded-full -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.15) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">Royalties & Payments</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="platform-pill page-badge mb-6 inline-flex">Royalties & Payments</div>
            <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6" style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}>
              <span className="page-hero-line block text-white">You Keep</span>
              <span className="page-hero-line block" style={{ color: '#0A64C3' }}>75%.</span>
              <span className="page-hero-line block text-white">Always.</span>
            </h1>
            <p className="page-subtext font-inter text-[16px] sm:text-[18px] text-mut leading-relaxed max-w-2xl">
              Every rupee your music earns on streaming platforms gets split 75/25. Three-quarters goes directly to you. One quarter stays with us. No upfront fees. No annual subscriptions. We only earn when you earn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Visual */}
      <section className="py-20 sm:py-28" style={{ background: '#060C18' }}>
        <div className="crm-stripe" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} className="gsap-fade-up mb-12">
            <div className="platform-pill mb-5 inline-flex">The Split</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              <span className="text-white">How the 75/25 Split Works.</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl p-8 sm:p-10" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
            {/* Bar */}
            <div className="flex h-12 rounded-xl overflow-hidden mb-6">
              <div className="flex items-center justify-center font-outfit font-black text-white text-[15px]"
                style={{ width: '75%', background: '#0A64C3' }}>75%</div>
              <div className="flex items-center justify-center font-outfit font-black text-white text-[15px]"
                style={{ width: '25%', background: '#C41230' }}>25%</div>
            </div>
            <div className="gsap-card grid sm:grid-cols-2 gap-5">
              <div className="rounded-xl p-5" style={{ background: 'rgba(10,100,195,0.12)', border: '1px solid rgba(10,100,195,0.3)' }}>
                <div className="font-outfit font-black text-white text-[40px] leading-none mb-2" style={{ color: '#0A64C3' }}>75%</div>
                <div className="font-outfit font-bold text-white text-[15px] mb-2">Goes to You</div>
                <p className="font-inter text-[13px] text-mut leading-relaxed">Direct bank transfer every month. No platform minimums. No waiting six months. Your share, paid to you.</p>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(196,18,48,0.08)', border: '1px solid rgba(196,18,48,0.2)' }}>
                <div className="font-outfit font-black text-[40px] leading-none mb-2" style={{ color: '#C41230' }}>25%</div>
                <div className="font-outfit font-bold text-white text-[15px] mb-2">Goes to WB Digital</div>
                <p className="font-inter text-[13px] text-mut leading-relaxed">This covers platform operations, distribution costs, WMI partnership maintenance, and 24/7 artist support. We only earn when you earn.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Payments Work */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} className="gsap-fade-up mb-12">
            <div className="platform-pill mb-5 inline-flex">Payment Process</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              <span className="text-white">How Payments Work.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {[
              { step: '01', title: 'Your Music Streams', desc: 'Every stream on every platform generates royalties. These get collected by the platform and passed to us as your distributor.', color: '#0A64C3' },
              { step: '02', title: 'We Calculate Your Share', desc: 'At the end of each month, we calculate your 75% share from all platforms combined. You get a transparent breakdown.', color: '#C41230' },
              { step: '03', title: 'Direct Bank Transfer', desc: 'We transfer your royalties directly to your registered Indian bank account. No third-party wallets, no complicated withdrawals.', color: '#5CB2DC' },
              { step: '04', title: 'Monthly Reporting', desc: 'You get a full royalty report showing streams by platform, territory, and time period. Real data, not estimates.', color: '#0A64C3' },
            ].map((s, i) => (
              <motion.div key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="flex gap-5 items-start p-5 rounded-2xl"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-outfit font-black text-[13px]"
                  style={{ background: `${s.color}22`, color: s.color }}>{s.step}</div>
                <div>
                  <div className="font-outfit font-extrabold text-white text-[15px] mb-1">{s.title}</div>
                  <p className="font-inter text-[13px] text-mut leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ISRC / UPC */}
      <section className="py-20 sm:py-28" style={{ background: '#060C18' }}>
        <div className="crm-stripe" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} className="gsap-fade-up mb-10">
            <div className="platform-pill mb-5 inline-flex">Codes and Rights</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              <span className="text-white">ISRC and UPC.</span>
              <span className="block" style={{ color: '#0A64C3' }}>Included Free.</span>
            </h2>
          </motion.div>

          <div className="gsap-card grid sm:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
              className="rounded-2xl p-6 relative overflow-hidden" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#0A64C3' }} />
              <div className="font-outfit font-black text-[28px] mb-2" style={{ color: '#0A64C3' }}>ISRC</div>
              <div className="font-outfit font-extrabold text-white text-[15px] mb-2">International Standard Recording Code</div>
              <p className="font-inter text-[13px] text-mut leading-relaxed">A unique identifier for each track you record. Required by every streaming platform. We generate it for every track automatically, at no extra cost.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="rounded-2xl p-6 relative overflow-hidden" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#C41230' }} />
              <div className="font-outfit font-black text-[28px] mb-2" style={{ color: '#C41230' }}>UPC</div>
              <div className="font-outfit font-extrabold text-white text-[15px] mb-2">Universal Product Code</div>
              <p className="font-inter text-[13px] text-mut leading-relaxed">Identifies your release as a product (your album or single). Platforms use this to catalogue and credit your work correctly. We assign one to every release for free.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} className="gsap-fade-up mb-10">
            <div className="platform-pill mb-5 inline-flex">FAQ</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              <span className="text-white">Common Questions.</span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28" style={{ background: '#060C18' }}>
        <div className="crm-stripe" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-5" style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}>
              <span className="text-white">Start Earning.</span>
              <span className="block" style={{ color: '#0A64C3' }}>75% Is Yours.</span>
            </h2>
            <p className="font-inter text-[15px] text-mut leading-relaxed mb-8">Upload your music today. Free distribution. Free ISRC and UPC. Monthly payments. No upfront cost.</p>
            <Link href="/submit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blu rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-[#0D77E0] transition-all duration-300"
              style={{ boxShadow: '0 8px 30px rgba(10,100,195,0.35)' }}>
              Submit Your Music Free
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
