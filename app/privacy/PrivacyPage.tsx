'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useEffect, useRef } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'

const EASE = [0.22, 1, 0.36, 1] as const

const SECTIONS = [
  {
    title: '1. What We Collect',
    content: `When you create an account and use Western Beats, we collect:

- Account information: name, email address, phone number, and bank details for royalty payments
- Music content: audio files, cover art, and metadata submitted for distribution
- Usage data: how you interact with the platform, pages visited, actions taken
- Device and technical information: browser type, IP address, and operating system

We do not collect more data than we need to provide our services.`,
  },
  {
    title: '2. How We Use Your Data',
    content: `We use the information we collect to:

- Distribute your music to streaming platforms
- Process royalty payments to your bank account
- Send you release confirmations, payment reports, and platform updates
- Provide customer support
- Improve the Western Beats platform

We do not sell your personal data to third parties. Ever.`,
  },
  {
    title: '3. Sharing Your Information',
    content: `We share your information only when necessary to provide services:

- Streaming platforms receive metadata (artist name, track title, ISRC) required to list your music
- Payment processors receive your bank details to send royalty payments
- Warner Music receives release data relevant to our distribution partnership

All third parties are contractually required to protect your data.`,
  },
  {
    title: '4. Data Retention',
    content: `We retain your account data for as long as your account is active. If you delete your account, we retain payment records for seven years as required by Indian tax law.

Metadata submitted to streaming platforms may remain on those platforms even after account deletion, as per those platforms' own data policies.`,
  },
  {
    title: '5. Your Rights',
    content: `You have the right to:

- Access the personal data we hold about you
- Correct inaccurate data
- Request deletion of your data (subject to legal retention requirements)
- Withdraw consent for marketing communications at any time

To exercise any of these rights, email us at privacy@westernbeats.com.`,
  },
  {
    title: '6. Cookies',
    content: `Our website uses essential cookies to keep you logged in and remember your preferences. We also use analytics cookies to understand how people use the platform.

You can disable non-essential cookies in your browser settings at any time. Disabling cookies may affect some platform functionality.`,
  },
  {
    title: '7. Security',
    content: `We use industry-standard encryption and security practices to protect your data. Your bank details are encrypted at rest and in transit. We never store full bank account numbers in plain text.

Despite our best efforts, no data transmission over the internet is completely secure. If you believe your account has been compromised, contact us immediately at contact@westernbeats.com.`,
  },
  {
    title: '8. Contact Us',
    content: `For any privacy-related questions, requests, or concerns, contact us at:

Email: privacy@westernbeats.com
General: contact@westernbeats.com

Western Beats Private Limited
Delhi/NCR, India

This Privacy Policy was last updated in January 2025. We will notify you by email of any material changes.`,
  },
]

export default function PrivacyPage() {
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
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">Privacy Policy</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="platform-pill page-badge mb-6 inline-flex">Legal</div>
            <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-4" style={{ fontSize: 'clamp(38px, 6vw, 68px)' }}>
              <span className="page-hero-line block text-white">Privacy</span>
              <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Policy.</span>
            </h1>
            <p className="page-subtext font-inter text-[14px] text-mut">Last updated: January 2025 · Western Beats Private Limited</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-10">
            {SECTIONS.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: EASE }}>
                <h2 className="font-outfit font-extrabold text-white text-[17px] sm:text-[18px] mb-4">{s.title}</h2>
                <div className="font-inter text-[14px] sm:text-[15px] text-mut leading-relaxed whitespace-pre-line">{s.content}</div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
            className="mt-12 p-5 rounded-xl" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="font-inter text-[13px] text-mut">
              Privacy questions? Email{' '}
              <a href="mailto:privacy@westernbeats.com" className="text-sky hover:text-white transition-colors">privacy@westernbeats.com</a>
              {' '}or visit our{' '}
              <Link href="/contact" className="text-sky hover:text-white transition-colors">Contact page</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
