'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { Music2, Calendar, Users, Video, Mic2, BarChart3 } from 'lucide-react'
import { gsap, ScrollTrigger, registerGSAP } from '../lib/gsapUtils'

const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

const SERVICES = [
  {
    icon: Music2,
    title: 'Music Distribution',
    tag: 'Core Service',
    color: '#0A64C3',
    desc: 'Upload once. We deliver to 150+ streaming platforms simultaneously — JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and 145 more. Live in 48-72 hours. 75% royalties to you. Free.',
    points: ['150+ platforms worldwide', '48-72 hour delivery', '75% royalties, paid monthly', 'ISRC/UPC generation'],
  },
  {
    icon: Calendar,
    title: 'Event Management',
    tag: 'Full Service',
    color: '#C41230',
    desc: 'Full-service concert and event production from concept to curtain call. Artist concerts, album launches, listening parties, brand activations, and festival partnerships.',
    points: ['Venue booking & stage production', 'PR & media outreach', 'Artist rider management', 'Live streaming & recording'],
  },
  {
    icon: Users,
    title: 'Talent Management',
    tag: 'Artist Growth',
    color: '#5CB2DC',
    desc: 'End-to-end artist management: brand partnerships, career strategy, booking, and direct access to the Warner Music India ecosystem of curators, labels, and media.',
    points: ['Career strategy & planning', 'Brand partnership deals', 'Industry connections via WMI', 'Social media growth'],
  },
  {
    icon: Mic2,
    title: 'Audio Production',
    tag: 'Studio Quality',
    color: '#002A8D',
    desc: 'Studio recording, mixing, mastering, and sound design to international streaming standards. From demos and singles to full album productions backed by WMI quality benchmarks.',
    points: ['Professional recording sessions', 'Mixing & mastering', 'WMI quality standards', 'Demo to full album'],
  },
  {
    icon: Video,
    title: 'Video Direction',
    tag: 'Visual Identity',
    color: '#C41230',
    desc: 'Music video direction, Instagram Reels, YouTube Shorts, promo clips, and social media content designed to go viral and match the WB Digital visual identity.',
    points: ['Music video production', 'Instagram Reels & Shorts', 'Promo & campaign videos', 'BTS & EPK content'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Strategy',
    tag: 'Data Driven',
    color: '#0A64C3',
    desc: 'Real-time streaming analytics, audience demographics, playlist tracking, and revenue reporting across all 150+ platforms. Make data-driven decisions about your music career.',
    points: ['Real-time streaming data', 'Audience demographics', 'Revenue transparency', 'Monthly detailed reports'],
  },
]

export default function Services() {
  const ref      = useRef<HTMLElement>(null)
  const gridRef  = useRef<HTMLDivElement>(null)
  const imgsRef  = useRef<HTMLDivElement>(null)
  const headRef  = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    registerGSAP()
    if (!ref.current) return

    const ctx = gsap.context(() => {

      /* ── Header words reveal ───────────────────── */
      if (headRef.current) {
        gsap.fromTo(headRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: headRef.current, start: 'top 82%', toggleActions: 'play none none none' },
          }
        )
      }

      /* ── Image panels: slide in from sides ──────── */
      if (imgsRef.current) {
        const panels = imgsRef.current.children
        const panelArr = Array.from(panels)
        panelArr.forEach((panel, i) => {
          gsap.fromTo(panel,
            { x: i === 0 ? -60 : i === 2 ? 60 : 0, y: i === 1 ? 40 : 0, opacity: 0, scale: 0.94 },
            {
              x: 0, y: 0, opacity: 1, scale: 1,
              duration: 1.0, delay: i * 0.12, ease: 'power3.out',
              scrollTrigger: { trigger: imgsRef.current, start: 'top 80%', toggleActions: 'play none none none' },
            }
          )
        })
      }

      /* ── Service cards: wave stagger ────────────── */
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll<HTMLElement>('.service-card')
        gsap.fromTo(cards,
          { y: 70, opacity: 0, scale: 0.93 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 0.7, stagger: { amount: 0.6, from: 'start' },
            ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 78%', toggleActions: 'play none none none' },
          }
        )

        /* Magnetic hover on each card */
        cards.forEach(card => {
          card.addEventListener('mouseenter', () =>
            gsap.to(card, { y: -10, scale: 1.02, duration: 0.35, ease: 'power2.out' })
          )
          card.addEventListener('mouseleave', () =>
            gsap.to(card, { y: 0, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.7)' })
          )
        })
      }

    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,21,53,0.3) 0%, transparent 50%, rgba(10,21,53,0.3) 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="platform-pill mb-5 inline-flex">What We Do</div>
          <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}>
            <span className="text-white">Full-Service</span>{' '}
            <span style={{ color: '#0A64C3' }}>Music Company.</span>
          </h2>
          <p className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed">
            Distribution is just the beginning. WB Digital provides everything an independent artist
            needs to build a sustainable music career at major-label scale.
          </p>
        </div>

        {/* ── Visual image showcase ─────────────────────────────────────── */}
        <div ref={imgsRef} className="grid grid-cols-3 gap-3 sm:gap-4 mb-14 sm:mb-16">
          {[
            {
              url: 'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=600&q=80&auto=format&fit=crop',
              label: 'Live Events',
              sub: 'Concert & Event Management',
              color: '#C41230',
              badge: 'Events',
            },
            {
              url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80&auto=format&fit=crop',
              label: 'Artist Growth',
              sub: 'Talent Management',
              color: '#0A64C3',
              badge: 'Talent',
            },
            {
              url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80&auto=format&fit=crop',
              label: 'Studio Quality',
              sub: 'Audio Production',
              color: '#5CB2DC',
              badge: 'Studio',
            },
          ].map((img, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              <Image
                src={img.url}
                alt={img.label}
                fill
                sizes="(max-width: 768px) 33vw, 380px"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(4,10,20,0.15) 0%, rgba(4,10,20,0.85) 100%)' }}
              />
              <div className="absolute top-3 left-3">
                <span
                  className="px-2.5 py-1 rounded-full font-outfit font-bold text-[9px] text-white tracking-wide"
                  style={{ background: img.color }}
                >
                  {img.badge}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="w-5 h-[2px] rounded-full mb-2" style={{ background: img.color }} />
                <div className="font-outfit font-bold text-white text-[13px] sm:text-[15px] leading-tight">{img.label}</div>
                <div className="font-inter text-[10px] sm:text-[11px] text-mut mt-1">{img.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Services grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="service-card group rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col cursor-default"
              style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: s.color }}
              />
              {/* BG number */}
              <div
                className="absolute bottom-4 right-4 font-outfit font-black text-[64px] leading-none opacity-[0.04] select-none"
                style={{ color: s.color }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon + tag */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${s.color}20` }}
                >
                  <s.icon size={20} style={{ color: s.color }} />
                </div>
                <span
                  className="font-outfit font-semibold text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                  style={{ background: `${s.color}18`, color: s.color, border: `1px solid ${s.color}33` }}
                >
                  {s.tag}
                </span>
              </div>

              <div className="font-outfit font-extrabold text-white text-[18px] mb-3">{s.title}</div>
              <div className="font-inter text-[13.5px] text-mut leading-relaxed mb-5 flex-1">{s.desc}</div>

              {/* Points */}
              <div className="flex flex-col gap-2 pt-5 border-t border-white/[0.06]">
                {s.points.map(p => (
                  <div key={p} className="flex items-center gap-2.5 font-inter text-[12.5px] text-ice/70">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
