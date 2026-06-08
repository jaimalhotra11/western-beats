'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'

const EASE = [0.22, 1, 0.36, 1] as const

const STORIES = [
  {
    name: 'Arjun Mehta',
    genre: 'Indie Pop / Hindi',
    location: 'Mumbai',
    photo: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80&auto=format&fit=crop',
    quote: 'I was paying DistroKid $22 every year and getting maybe 500 streams on JioSaavn. Switched to Western Beats and within three months I was charting on JioSaavn\'s New Arrivals. The WMI backing is real.',
    stats: [
      { label: 'Monthly Streams', value: '2.1M' },
      { label: 'Platforms', value: '150+' },
      { label: 'Revenue Increase', value: '+340%' },
    ],
    color: '#0A64C3',
  },
  {
    name: 'Priya Nair',
    genre: 'Carnatic Fusion',
    location: 'Chennai',
    photo: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&q=80&auto=format&fit=crop',
    quote: 'My music is niche. I thought I needed a label to get taken seriously on Gaana and . Western Beats proved me wrong. My last single got featured on a Gaana editorial playlist within a week of going live.',
    stats: [
      { label: 'Monthly Streams', value: '890K' },
      { label: 'New Followers', value: '+12K' },
      { label: 'Platforms Active', value: '47' },
    ],
    color: '#C41230',
  },
  {
    name: 'Kabir Singh',
    genre: 'Punjabi Hip-Hop',
    location: 'Chandigarh',
    photo: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80&auto=format&fit=crop',
    quote: 'I release one track a month. Western Beats makes that possible without any cost. The 72 hour go-live is legit. I dropped a track on a Thursday and it was live on JioSaavn by Saturday morning.',
    stats: [
      { label: 'Releases This Year', value: '11' },
      { label: 'Total Streams', value: '5.4M' },
      { label: 'Monthly Earnings', value: '4x more' },
    ],
    color: '#5CB2DC',
  },
]

export default function ArtistStoriesPage() {
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
              <li className="text-sky">Artist Stories</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="platform-pill page-badge mb-6 inline-flex">Artist Stories</div>
            <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6" style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}>
              <span className="page-hero-line block text-white">Real Artists.</span>
              <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Real Results.</span>
            </h1>
            <p className="page-subtext font-inter text-[16px] sm:text-[18px] text-mut leading-relaxed max-w-2xl">
              Independent artists across India are using Western Beats to build real careers. Here are three of their stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 sm:py-28" style={{ background: '#060C18' }}>
        <div className="crm-stripe" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-12">
            {STORIES.map((story, i) => (
              <motion.div key={story.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="grid lg:grid-cols-2 gap-8 items-center rounded-3xl p-6 sm:p-8 relative overflow-hidden"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: story.color }} />

                <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <Image src={story.photo} alt={story.name} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-center" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(4,10,20,0.1) 0%, rgba(4,10,20,0.7) 100%)' }} />
                  <div className="absolute bottom-4 left-4">
                    <div className="font-outfit font-black text-white text-[20px]">{story.name}</div>
                    <div className="font-inter text-[12px] text-mut">{story.genre} · {story.location}</div>
                  </div>
                </div>

                <div>
                  <blockquote className="relative mb-8">
                    <div className="absolute -top-2 -left-1 font-outfit font-black text-[60px] leading-none opacity-20" style={{ color: story.color }}>&ldquo;</div>
                    <p className="font-outfit font-bold text-white text-[16px] sm:text-[18px] leading-snug pt-6 italic">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </blockquote>

                  <div className="gsap-card grid grid-cols-3 gap-3">
                    {story.stats.map(s => (
                      <div key={s.label} className="rounded-xl p-3 text-center"
                        style={{ background: `${story.color}15`, border: `1px solid ${story.color}25` }}>
                        <div className="font-outfit font-black text-[18px] sm:text-[20px] leading-none mb-1" style={{ color: story.color }}>{s.value}</div>
                        <div className="font-inter text-[10px] text-mut leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}>
            <div className="platform-pill mb-5 inline-flex">Your Story Starts Here</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-5" style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}>
              <span className="text-white">Write Your Own </span>
              <span style={{ color: '#0A64C3' }}>Story.</span>
            </h2>
            <p className="font-inter text-[15px] text-mut leading-relaxed mb-8">
              Free distribution. 150+ platforms. 100% ownership. WMI backing. The same platform these artists used.
            </p>
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
