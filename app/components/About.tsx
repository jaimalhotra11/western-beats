'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap, registerGSAP } from '../lib/gsapUtils'

const PILLARS = [
  { title: 'Artist First',   color: '#C41230', desc: 'You keep 75% of every rupee earned. We only make money when you make money, so we\'re always on your side.' },
  { title: 'India First',    color: '#0A64C3', desc: 'JioSaavn and Gaana before Spotify. Built for India, reaching the world.' },
  { title: 'Honest',         color: '#5CB2DC', desc: '48 hours means 48 hours. No ambiguity, no fine print, no surprises.' },
  { title: 'Major Quality',  color: '#002A8D', desc: 'Warner Music India partnership means major-label standards on every release.' },
]

const EASE = [0.22, 1, 0.36, 1] as const

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item: Variants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
}
const cardItem: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.96 },
  show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
}

export default function About() {
  const ref      = useRef<HTMLDivElement>(null)
  const headRef  = useRef<HTMLHeadingElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    registerGSAP()
    if (!ref.current) return

    const ctx = gsap.context(() => {
      /* ── Headline lines slide up ──────────────────── */
      if (headRef.current) {
        const lines = headRef.current.querySelectorAll<HTMLElement>('span')
        gsap.fromTo(lines,
          { y: 60, opacity: 0, skewY: 3 },
          {
            y: 0, opacity: 1, skewY: 0,
            duration: 1.0, stagger: 0.12, ease: 'power4.out',
            scrollTrigger: { trigger: headRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        )
      }

      /* ── Pillar cards diagonal stagger ──────────── */
      if (pillarsRef.current) {
        const cards = pillarsRef.current.querySelectorAll<HTMLElement>('.pillar-card')
        gsap.fromTo(cards,
          { x: -40, opacity: 0 },
          {
            x: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: pillarsRef.current, start: 'top 82%', toggleActions: 'play none none none' },
          }
        )
        cards.forEach(card => {
          card.addEventListener('mouseenter', () => gsap.to(card, { x: 6, duration: 0.3, ease: 'power2.out' }))
          card.addEventListener('mouseleave', () => gsap.to(card, { x: 0, duration: 0.4, ease: 'elastic.out(1,0.7)' }))
        })
      }
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(10,100,195,0.08) 0%, transparent 70%)' }} />

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div variants={item} className="platform-pill mb-6">About Western Beats</motion.div>
            <h2
              ref={headRef}
              className="font-outfit font-black leading-[1.0] tracking-[-0.02em] mb-6 overflow-hidden"
              style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
            >
              <span className="block text-white">Globally #1</span>
              <span className="block text-white">Full-Service</span>
              <span className="block" style={{ color: '#0A64C3' }}>Music Company.</span>
            </h2>
            <motion.p
              variants={item}
              className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed mb-6"
            >
              <strong className="text-white">Western Beats Private Limited</strong> is India&apos;s most credible
              independent music company, officially backed by Warner Music India. Our distribution
              platform, <strong className="text-white">WB Digital</strong>, gives every independent artist
              access to major-label reach without major-label restrictions.
            </motion.p>
            <motion.p
              variants={item}
              className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed mb-10"
            >
              From JioSaavn and Gaana to Spotify, Apple Music, YouTube Music, and 145+ more
              platforms worldwide; your music goes everywhere your fans are. One upload,
              150+ destinations, 75% of your royalties paid straight to you. Always free to distribute. 100% ownership, always yours.
            </motion.p>

            {/* WMI badge */}
            <motion.div
              variants={item}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-blu/30 mb-4"
              style={{ background: 'rgba(10,100,195,0.1)' }}
            >
              <div className="w-9 h-9 flex-shrink-0">
                <Image src="/partners/westernbeats-BpLvGE3e.png" alt="Western Beats" width={36} height={36} className="object-contain w-full h-full" />
              </div>
              <div>
                <div className="font-inter text-[10px] text-sky tracking-[0.1em] uppercase font-semibold">Western Beats · Official Warner Music India Partner</div>
                <div className="font-outfit font-bold text-white text-[13px] sm:text-[14px]">Home of Armaan Malik, Diljit Dosanjh, King &amp; Darshan Raval</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Image collage + brand pillars */}
          <motion.div variants={container} className="flex flex-col gap-3 sm:gap-4">
            {/* Top: 2-column image strip */}
            <motion.div variants={cardItem} className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=480&q=80&auto=format&fit=crop"
                  alt="Western Beats Live Events"
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(4,10,20,0.9) 100%)' }} />
                <div className="absolute bottom-3 left-3">
                  <div className="font-outfit font-bold text-white text-[12px]">Live Events</div>
                  <div className="font-inter text-[9px] text-crm mt-0.5 uppercase tracking-wide">Artist First</div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=480&q=80&auto=format&fit=crop"
                  alt="Western Beats Audio Production Studio"
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(4,10,20,0.9) 100%)' }} />
                <div className="absolute bottom-3 left-3">
                  <div className="font-outfit font-bold text-white text-[12px]">Studio Quality</div>
                  <div className="font-inter text-[9px] text-sky mt-0.5 uppercase tracking-wide">Warner Standard</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom: brand pillars 2x2 */}
            <div ref={pillarsRef} className="grid grid-cols-2 gap-3 sm:gap-4">
              {PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  className="pillar-card rounded-2xl p-5 sm:p-6 relative overflow-hidden cursor-default"
                  style={{ background: 'rgba(10,21,53,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: p.color }} />
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-outfit font-black text-[18px] text-white"
                    style={{ background: `${p.color}33`, border: `1px solid ${p.color}66` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="font-outfit font-extrabold text-white text-[15px] sm:text-[16px] mb-2">{p.title}</div>
                  <div className="font-inter text-[12px] sm:text-[13px] text-mut leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
