'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { MapPin, Briefcase, Heart, Zap, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'

const EASE = [0.22, 1, 0.36, 1] as const

const JOBS = [
  {
    title: 'Music Distribution Manager',
    department: 'Operations',
    location: 'Delhi/NCR',
    type: 'Full-time',
    color: '#0A64C3',
    desc: 'Lead the end-to-end release process for artists on WB Digital. You will coordinate with DSPs, manage metadata quality, and ensure every release goes live within our 48-hour promise. Deep knowledge of Indian streaming platforms is a must.',
  },
  {
    title: 'Artist Relations Executive',
    department: 'Artist Success',
    location: 'Remote (India)',
    type: 'Full-time',
    color: '#C41230',
    desc: 'Be the primary point of contact for artists on our platform. You will onboard new artists, resolve issues fast, and make sure every artist feels supported. You love music and you love people.',
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Mumbai',
    type: 'Full-time',
    color: '#5CB2DC',
    desc: 'Own our social media presence, run performance campaigns, and build the WB Digital brand across Instagram, YouTube, and beyond. Strong understanding of the Indian music scene is key.',
  },
  {
    title: 'Full Stack Developer',
    department: 'Technology',
    location: 'Remote (India)',
    type: 'Full-time',
    color: '#0A64C3',
    desc: 'Build and maintain the WB Digital platform. You will work on artist dashboards, royalty reporting tools, and integrations with DSP APIs. We use Next.js, TypeScript, and Node.js. Passion for music is a bonus.',
  },
]

const VALUES = [
  {
    icon: Heart,
    title: 'Artist First',
    color: '#C41230',
    desc: 'Everything we do is for the artists. That mindset has to live in every person on the team.',
  },
  {
    icon: Zap,
    title: 'Move Fast',
    color: '#0A64C3',
    desc: '48 hours is not just our go-live promise. It is how we operate internally too.',
  },
  {
    icon: Users,
    title: 'Small Team, Big Impact',
    color: '#5CB2DC',
    desc: 'We are a lean team. Your work ships directly. No bureaucracy, no waiting for sign-offs.',
  },
]

export default function CareersPage() {
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
              <li className="text-sky">Careers</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="platform-pill page-badge mb-6 inline-flex">Careers at Western Beats</div>
            <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6" style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}>
              <span className="page-hero-line block text-white">Build the Future</span>
              <span className="page-hero-line block" style={{ color: '#0A64C3' }}>of Indian</span>
              <span className="page-hero-line block text-white">Music.</span>
            </h1>
            <p className="page-subtext font-inter text-[16px] sm:text-[18px] text-mut leading-relaxed mb-8 max-w-2xl">
              We are Western Beats, India&apos;s most credible music company. Backed by Warner Music India. Our platform WB Digital serves independent artists across the country. We are a small team that moves fast and ships work that matters.
            </p>
            <p className="font-inter text-[14px] text-mut">
              Interested? Send your CV to{' '}
              <a href="mailto:careers@westernbeats.com" className="text-sky hover:text-white transition-colors">careers@westernbeats.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 sm:py-28" style={{ background: '#060C18' }}>
        <div className="crm-stripe" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}>
            <div className="platform-pill mb-5 inline-flex">Open Roles</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-12" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              <span className="text-white">We Are Hiring.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {JOBS.map((job, i) => (
              <motion.div key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="rounded-2xl p-6 sm:p-7 relative overflow-hidden"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: job.color }} />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-outfit font-extrabold text-white text-[17px]">{job.title}</h3>
                      <span className="font-inter text-[11px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: `${job.color}22`, color: job.color }}>{job.type}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="flex items-center gap-1.5 font-inter text-[12px] text-mut">
                        <Briefcase size={12} /> {job.department}
                      </span>
                      <span className="flex items-center gap-1.5 font-inter text-[12px] text-mut">
                        <MapPin size={12} /> {job.location}
                      </span>
                    </div>
                    <p className="font-inter text-[14px] text-mut leading-relaxed">{job.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <a href="mailto:careers@westernbeats.com"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-outfit font-bold text-[13px] text-white transition-colors duration-200"
                      style={{ background: job.color }}>
                      Send CV
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            className="font-inter text-[14px] text-mut mt-8">
            Do not see a role that fits? Send a general application to{' '}
            <a href="mailto:careers@westernbeats.com" className="text-sky hover:text-white transition-colors">careers@westernbeats.com</a>
            {' '}and tell us what you bring to the table.
          </motion.p>
        </div>
      </section>

      {/* Life at Western Beats */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} className="gsap-fade-up mb-12">
            <div className="platform-pill mb-5 inline-flex">Why Work Here</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              <span className="text-white">Life at </span>
              <span style={{ color: '#0A64C3' }}>Western Beats.</span>
            </h2>
          </motion.div>

          <div className="gsap-card grid sm:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: v.color }} />
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${v.color}22` }}>
                  <v.icon size={20} style={{ color: v.color }} />
                </div>
                <div className="font-outfit font-extrabold text-white text-[15px] mb-2">{v.title}</div>
                <p className="font-inter text-[13px] text-mut leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
