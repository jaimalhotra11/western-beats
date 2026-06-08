'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'

const EASE = [0.22, 1, 0.36, 1] as const

const PLATFORM_GROUPS = [
  {
    category: 'India First',
    color: '#C41230',
    platforms: ['JioSaavn', 'Gaana', 'Wynk Music', 'Hungama', 'Resso', 'Amazon Music India'],
  },
  {
    category: 'Global Streaming',
    color: '#0A64C3',
    platforms: ['Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music', 'Tidal', 'Deezer', 'Qobuz', 'Napster', 'iHeartRadio', 'Pandora'],
  },
  {
    category: 'Social Platforms',
    color: '#5CB2DC',
    platforms: ['TikTok', 'Instagram / Meta', 'Snapchat', 'YouTube Content ID', 'Facebook'],
  },
  {
    category: 'Specialist & Others',
    color: '#0A64C3',
    platforms: ['Beatport', 'SoundCloud', 'Boomplay', 'Audiomack', 'Anghami', 'Fizy', 'KKBOX', 'Yandex Music', 'NetEase', 'QQ Music', 'Melon', 'Bugs', 'Flo', 'Joox', 'Claro Musica', 'Tencent', 'Gracenote', 'MediaNet', 'Shazam', '7digital'],
  },
]

export default function PlatformsPage() {
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
              <li className="text-sky">Platform Coverage</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="platform-pill page-badge mb-6 inline-flex">Platform Coverage</div>
            <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6" style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}>
              <span className="page-hero-line block text-white">One Upload.</span>
              <span className="page-hero-line block" style={{ color: '#0A64C3' }}>150+ Platforms.</span>
              <span className="page-hero-line block text-white">Worldwide.</span>
            </h1>
            <p className="page-subtext font-inter text-[16px] sm:text-[18px] text-mut leading-relaxed max-w-2xl mb-8">
              Your music reaches every major streaming platform in the world. We prioritize Indian platforms first, then cover the globe. One submission is all it takes.
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{ background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)' }}>
              <span className="font-outfit font-black text-[28px]" style={{ color: '#0A64C3' }}>150+</span>
              <span className="font-inter text-[14px] text-mut">Streaming Platforms Covered</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Groups */}
      <section className="py-20 sm:py-28" style={{ background: '#060C18' }}>
        <div className="crm-stripe" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-10">
            {PLATFORM_GROUPS.map((group, gi) => (
              <motion.div key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: gi * 0.08, ease: EASE }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1.5 h-6 rounded-full" style={{ background: group.color }} />
                  <h2 className="font-outfit font-extrabold text-white text-[16px] tracking-[0.04em] uppercase">{group.category}</h2>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.platforms.map((p) => (
                    <span key={p}
                      className="px-3.5 py-2 rounded-full font-inter text-[13px] font-medium"
                      style={{
                        background: `${group.color}15`,
                        border: `1px solid ${group.color}30`,
                        color: 'rgba(255,255,255,0.75)',
                      }}>
                      {p}
                    </span>
                  ))}
                  {gi === 3 && (
                    <span className="px-3.5 py-2 rounded-full font-inter text-[13px] font-medium"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
                      + 100 more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* India First note */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl p-8 sm:p-10 relative overflow-hidden"
            style={{ background: '#0A1535', border: '1px solid rgba(196,18,48,0.25)' }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#C41230' }} />
            <div className="platform-pill mb-4 inline-flex">India First</div>
            <h2 className="font-outfit font-extrabold text-white text-[20px] sm:text-[24px] mb-4">
              Why India First Matters
            </h2>
            <p className="font-inter text-[14px] sm:text-[15px] text-mut leading-relaxed mb-4">
              Most foreign distributors treat Indian platforms as an afterthought. We treat JioSaavn, Gaana, Wynk, and Hungama as the priority. For Indian artists, these platforms drive the majority of your streams and your income.
            </p>
            <p className="font-inter text-[14px] sm:text-[15px] text-mut leading-relaxed">
              Our Warner Music partnership also means we have direct relationships with Indian DSPs. That translates to faster uploads, better metadata processing, and access to editorial playlists that foreign distributors simply cannot offer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28" style={{ background: '#060C18' }}>
        <div className="crm-stripe" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-5" style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}>
              <span className="text-white">Ready to Reach</span>
              <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Every Platform?</span>
            </h2>
            <p className="font-inter text-[15px] text-mut leading-relaxed mb-8">Free distribution. 72-hour go-live. One upload to 150+ platforms. No fees ever.</p>
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
