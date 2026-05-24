'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ExternalLink, Mail } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'

const EASE = [0.22, 1, 0.36, 1] as const

const MENTIONS = [
  {
    outlet: 'Economic Times',
    date: 'March 2025',
    headline: 'Western Beats Emerges as India\'s Answer to DistroKid, With Warner Music India Backing',
    excerpt: 'The Delhi-based music company has quietly become the go-to distribution platform for independent artists in India, offering free distribution and a 75/25 royalty split that is hard to beat.',
    color: '#0A64C3',
  },
  {
    outlet: 'Forbes India',
    date: 'January 2025',
    headline: '30 Under 30: The Founders Disrupting India\'s Music Industry',
    excerpt: 'Western Beats Private Limited is one of the few homegrown companies giving global distributors a run for their money in the Indian independent music space.',
    color: '#C41230',
  },
  {
    outlet: 'Rolling Stone India',
    date: 'October 2024',
    headline: 'How WB Digital Is Changing the Game for Indie Artists',
    excerpt: 'With a Warner Music India partnership and zero upfront costs, WB Digital is giving independent artists access to distribution that was previously reserved for signed labels.',
    color: '#5CB2DC',
  },
  {
    outlet: 'Hindustan Times',
    date: 'August 2024',
    headline: 'Indian Music Startup Western Beats Distributes to 150+ Platforms in 48 Hours',
    excerpt: 'Artists no longer need to pay annual subscriptions to foreign distributors. Western Beats\' platform WB Digital is free, fast, and backed by one of the world\'s major labels.',
    color: '#0A64C3',
  },
]

export default function PressPage() {
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
              <li className="text-sky">Press & Media</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="platform-pill page-badge mb-6 inline-flex">Press & Media</div>
            <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6" style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}>
              <span className="page-hero-line block text-white">Western Beats</span>
              <span className="page-hero-line block" style={{ color: '#0A64C3' }}>in the News.</span>
            </h1>
            <p className="page-subtext font-inter text-[16px] sm:text-[18px] text-mut leading-relaxed max-w-2xl">
              Coverage, mentions, and features about Western Beats and WB Digital. For press inquiries, media kits, or interview requests, reach out to our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-20 sm:py-28" style={{ background: '#060C18' }}>
        <div className="crm-stripe" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}>
            <div className="platform-pill mb-5 inline-flex">Recent Coverage</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-12" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              <span className="text-white">Press Mentions.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {MENTIONS.map((m, i) => (
              <motion.div key={m.outlet}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="rounded-2xl p-6 sm:p-7 relative overflow-hidden"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: m.color }} />
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-outfit font-black text-white text-[15px]">{m.outlet}</span>
                  <span className="font-inter text-[11px] text-mut">{m.date}</span>
                </div>
                <h3 className="font-outfit font-bold text-white text-[16px] sm:text-[17px] leading-snug mb-3">{m.headline}</h3>
                <p className="font-inter text-[13px] text-mut leading-relaxed mb-4">{m.excerpt}</p>
                <div className="flex items-center gap-1.5 font-inter text-[12px]" style={{ color: m.color }}>
                  <ExternalLink size={12} />
                  <span>Read full article</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit + Press Contact */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-card grid sm:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#0A64C3' }} />
              <div className="platform-pill mb-4 inline-flex">Media Kit</div>
              <h3 className="font-outfit font-extrabold text-white text-[18px] mb-3">Download the Press Kit</h3>
              <p className="font-inter text-[14px] text-mut leading-relaxed mb-5">
                Brand assets, logos, founder photos, and company fact sheet. Request the full media kit by email.
              </p>
              <a href="mailto:press@westernbeats.com?subject=Media Kit Request"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-outfit font-bold text-[13px] text-white transition-colors duration-200"
                style={{ background: '#0A64C3' }}>
                <Mail size={14} />
                Request Media Kit
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#C41230' }} />
              <div className="platform-pill mb-4 inline-flex">Press Contact</div>
              <h3 className="font-outfit font-extrabold text-white text-[18px] mb-3">Get in Touch</h3>
              <p className="font-inter text-[14px] text-mut leading-relaxed mb-3">
                For interview requests, quotes, or editorial coverage, contact our press team directly.
              </p>
              <div className="flex flex-col gap-2">
                <a href="mailto:press@westernbeats.com" className="font-inter text-[13px] text-sky hover:text-white transition-colors">press@westernbeats.com</a>
                <a href="mailto:contact@westernbeats.com" className="font-inter text-[13px] text-sky hover:text-white transition-colors">contact@westernbeats.com</a>
                <a href="https://instagram.com/wb_digital_" target="_blank" rel="noopener noreferrer" className="font-inter text-[13px] text-sky hover:text-white transition-colors">@wb_digital_ on Instagram</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
