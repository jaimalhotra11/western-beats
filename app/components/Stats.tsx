'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger, registerGSAP } from '../lib/gsapUtils'

type Stat = { value: number; suffix: string; prefix?: string; label: string; sub: string; color: string }

const STATS: Stat[] = [
  { value: 150, suffix: '+',   label: 'Streaming Platforms',  sub: 'Worldwide distribution',        color: '#0A64C3' },
  { value: 48,  suffix: 'hrs', label: 'Go-Live Time',         sub: 'From upload to platform',       color: '#5CB2DC' },
  { value: 100, suffix: '%',   label: 'Ownership Yours',      sub: 'You keep all your masters',     color: '#C41230' },
  { value: 0,   suffix: '',    prefix: '₹', label: 'Cost to Distribute', sub: 'Completely free forever', color: '#0A64C3' },
  { value: 10,  suffix: '+',   label: 'WMI Artists Backed',   sub: 'Same label, same credibility',  color: '#5CB2DC' },
]

export default function Stats() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headRef     = useRef<HTMLDivElement>(null)
  const gridRef     = useRef<HTMLDivElement>(null)
  const barRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {

      /* ── Header slide-up ──────────────────────────── */
      gsap.from(headRef.current, {
        y: 50, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 85%', toggleActions: 'play none none none' },
      })

      /* ── Cards stagger pop-in ─────────────────────── */
      const cards = gridRef.current?.querySelectorAll<HTMLElement>('.stat-card')
      if (cards?.length) {
        gsap.fromTo(cards,
          { y: 80, opacity: 0, scale: 0.88, rotateX: 12 },
          {
            y: 0, opacity: 1, scale: 1, rotateX: 0,
            duration: 0.75, stagger: 0.1, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: gridRef.current, start: 'top 80%', toggleActions: 'play none none none' },
          }
        )
      }

      /* ── GSAP count-up for each number ───────────── */
      STATS.forEach((stat, i) => {
        const el = document.querySelector<HTMLElement>(`[data-stat="${i}"]`)
        if (!el) return
        const obj = { val: 0 }
        gsap.to(obj, {
          val: stat.value,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          onUpdate() {
            const v = stat.value % 1 === 0 ? Math.round(obj.val) : obj.val.toFixed(1)
            el.textContent = `${stat.prefix ?? ''}${v}${stat.suffix}`
          },
        })
      })

      /* ── Partnership bar slide-up ─────────────────── */
      if (barRef.current) {
        gsap.fromTo(barRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: barRef.current, start: 'top 90%', toggleActions: 'play none none none' },
          }
        )
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="stats" ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060C18]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600&q=60&auto=format&fit=crop"
          alt="" fill sizes="100vw"
          className="object-cover opacity-[0.055] mix-blend-luminosity"
        />
      </div>
      <div className="crm-stripe absolute top-0 left-0 right-0" />
      <div className="crm-stripe absolute bottom-0 left-0 right-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.12) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div ref={headRef} className="text-center mb-16 sm:mb-20">
          <div className="platform-pill mb-5 inline-flex">By the Numbers</div>
          <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0]"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}>
            <span className="text-white">The Numbers</span>{' '}
            <span style={{ color: '#0A64C3' }}>Don&apos;t Lie.</span>
          </h2>
          <p className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed mt-5 max-w-xl mx-auto">
            Real metrics from a real, growing music platform, built by independent artists, for independent artists.
          </p>
        </div>

        {/* Stats grid */}
        <div ref={gridRef} className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="stat-card w-full sm:w-[300px] rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center relative overflow-hidden group cursor-default"
              style={{
                background: 'linear-gradient(180deg, rgba(10,21,53,0.7) 0%, rgba(6,12,24,0.92) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={e => {
                gsap.to(e.currentTarget, { y: -10, scale: 1.04, duration: 0.35, ease: 'power2.out' })
                gsap.to(e.currentTarget.querySelector('.card-glow'), { opacity: 1, duration: 0.4 })
              }}
              onMouseLeave={e => {
                gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.6)' })
                gsap.to(e.currentTarget.querySelector('.card-glow'), { opacity: 0, duration: 0.4 })
              }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: s.color }} />
              {/* Glow */}
              <div className="card-glow absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 pointer-events-none blur-3xl"
                style={{ background: s.color }} />

              {/* Number */}
              <div className="text-[56px] sm:text-[64px] md:text-[72px] leading-none mb-4 relative z-10 font-outfit font-black"
                style={{ color: s.color }}>
                <span data-stat={i}>{s.prefix ?? ''}{s.value}{s.suffix}</span>
              </div>

              <div className="font-outfit font-bold text-white text-[15px] sm:text-[17px] mb-1.5 relative z-10">{s.label}</div>
              <div className="font-inter text-[12px] sm:text-[13px] text-mut relative z-10">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* WMI bar */}
        <div ref={barRef}
          className="mt-14 sm:mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 p-6 sm:p-8 rounded-2xl text-center md:text-left"
          style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}
        >
          <div className="font-inter text-[12px] sm:text-[13px] text-sky tracking-[0.1em] uppercase font-semibold">Official Distribution Partner</div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div className="font-outfit font-extrabold text-white text-[20px] sm:text-[22px]">Warner Music India</div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div className="font-inter text-[12px] sm:text-[13px] text-mut">@warnermusicindia · A Warner Music Group Company</div>
        </div>

      </div>
    </section>
  )
}
