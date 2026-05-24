'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'

const EASE = [0.22, 1, 0.36, 1] as const

const SUBJECTS = [
  'Music Distribution',
  'Royalties & Payments',
  'Artist Support',
  'Event Management',
  'Talent Management',
  'Press & Media',
  'Partnership Inquiry',
  'Other',
]

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: 'Email Us',
    color: '#0A64C3',
    primary: 'contact@westernbeats.com',
    href: 'mailto:contact@westernbeats.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    color: '#C41230',
    primary: '+91 93199 10662',
    href: 'https://wa.me/919319910662',
    sub: 'DM us on WhatsApp',
  },
  {
    icon: Phone,
    title: 'Call Us',
    color: '#5CB2DC',
    primary: '+91 93199 10662',
    href: 'tel:+919319910662',
    sub: 'Mon to Sat, 10am to 7pm IST',
  },
]

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/xwkgnezb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
              <li className="text-sky">Contact</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="platform-pill page-badge mb-6 inline-flex">Get in Touch</div>
            <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6" style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}>
              <span className="page-hero-line block text-white">Talk to</span>
              <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Our Team.</span>
            </h1>
            <p className="page-subtext font-inter text-[16px] sm:text-[18px] text-mut leading-relaxed max-w-xl">
              Questions about distribution, royalties, or our services. We are a real team based in Delhi and we reply fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16" style={{ background: '#060C18' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-card grid sm:grid-cols-3 gap-4">
            {CONTACT_CARDS.map((c, i) => (
              <motion.a key={c.title} href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="rounded-2xl p-6 flex flex-col gap-3 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: c.color }} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${c.color}22` }}>
                  <c.icon size={18} style={{ color: c.color }} />
                </div>
                <div>
                  <div className="font-outfit font-extrabold text-white text-[14px] mb-1">{c.title}</div>
                  <div className="font-inter font-semibold text-white text-[14px]">{c.primary}</div>
                  <div className="font-inter text-[12px] text-mut mt-0.5">{c.sub}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Location */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}>
              <div className="platform-pill mb-5 inline-flex">Send a Message</div>
              <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-8" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
                <span className="text-white">Drop Us a Line.</span>
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="gsap-card grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-[12px] text-mut mb-1.5 block">Name</label>
                    <input name="name" required placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl font-inter text-[14px] text-white placeholder:text-mut/50 outline-none focus:ring-1 transition-all duration-200"
                      style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)' }}
                      onFocus={e => (e.target.style.borderColor = '#0A64C3')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                  <div>
                    <label className="font-inter text-[12px] text-mut mb-1.5 block">Email</label>
                    <input name="email" type="email" required placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl font-inter text-[14px] text-white placeholder:text-mut/50 outline-none transition-all duration-200"
                      style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)' }}
                      onFocus={e => (e.target.style.borderColor = '#0A64C3')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-inter text-[12px] text-mut mb-1.5 block">Subject</label>
                  <select name="subject"
                    className="w-full px-4 py-3 rounded-xl font-inter text-[14px] text-white outline-none transition-all duration-200 appearance-none"
                    style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => (e.target.style.borderColor = '#0A64C3')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}>
                    {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="font-inter text-[12px] text-mut mb-1.5 block">Message</label>
                  <textarea name="message" required rows={5} placeholder="Tell us what you need..."
                    className="w-full px-4 py-3 rounded-xl font-inter text-[14px] text-white placeholder:text-mut/50 outline-none transition-all duration-200 resize-none"
                    style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => (e.target.style.borderColor = '#0A64C3')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <button type="submit" disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-xl font-outfit font-bold text-[14px] text-white transition-colors duration-200 disabled:opacity-60"
                  style={{ background: '#0A64C3' }}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="font-inter text-[13px] text-green-400 text-center">Message sent. We will reply within 24 hours.</p>
                )}
                {status === 'error' && (
                  <p className="font-inter text-[13px] text-red-400 text-center">Something went wrong. Email us directly at contact@westernbeats.com.</p>
                )}
              </form>
            </motion.div>

            {/* Location + Info */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="flex flex-col gap-6">
              <div>
                <div className="platform-pill mb-5 inline-flex">Our Office</div>
                <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
                  <span className="text-white">Find Us.</span>
                </h2>
              </div>

              <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#0A64C3' }} />
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(10,100,195,0.2)' }}>
                    <MapPin size={16} style={{ color: '#0A64C3' }} />
                  </div>
                  <div>
                    <div className="font-outfit font-extrabold text-white text-[15px] mb-1">Western Beats Private Limited</div>
                    <div className="font-inter text-[13px] text-mut leading-relaxed">Delhi/NCR, India</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06]">
                  <a href="mailto:contact@westernbeats.com" className="font-inter text-[13px] text-sky hover:text-white transition-colors">contact@westernbeats.com</a>
                  <a href="tel:+919319910662" className="font-inter text-[13px] text-sky hover:text-white transition-colors">+91 93199 10662</a>
                  <a href="https://instagram.com/wb_digital_" target="_blank" rel="noopener noreferrer" className="font-inter text-[13px] text-sky hover:text-white transition-colors">@wb_digital_ on Instagram</a>
                </div>
              </div>

              <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#C41230' }} />
                <h3 className="font-outfit font-extrabold text-white text-[15px] mb-3">Response Times</h3>
                <div className="flex flex-col gap-2.5">
                  {[
                    { type: 'Email', time: 'Within 24 hours' },
                    { type: 'WhatsApp', time: 'Within a few hours' },
                    { type: 'Distribution queries', time: 'Within 48 hours' },
                    { type: 'Partnership inquiries', time: '3 to 5 working days' },
                  ].map(r => (
                    <div key={r.type} className="flex justify-between items-center">
                      <span className="font-inter text-[13px] text-mut">{r.type}</span>
                      <span className="font-inter text-[12px] text-white">{r.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
