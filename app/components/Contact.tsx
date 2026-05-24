'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, Globe, Send, CheckCircle } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const CONTACT_ITEMS = [
  { icon: Globe,         label: 'Website',   value: 'westernbeats.com',         href: 'https://westernbeats.com' },
  { icon: Mail,          label: 'Email',     value: 'contact@westernbeats.com',  href: 'mailto:contact@westernbeats.com' },
  { icon: Phone,         label: 'Phone',     value: '+91 93199 10662',           href: 'tel:+919319910662' },
  { icon: InstagramIcon, label: 'Instagram', value: '@wb_digital_',              href: 'https://instagram.com/wb_digital_' },
] as const

const SERVICES_LIST = [
  'Music Distribution','Event Management','Talent Management',
  'Audio Production','Video Direction','Artist Development',
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `WB Digital Enquiry: ${form.service || 'General'}: ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    window.location.href = `mailto:contact@westernbeats.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[#060C18]" />
      <div className="crm-stripe absolute top-0 left-0 right-0" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px]"
        style={{ background: 'radial-gradient(ellipse at 100% 50%, rgba(10,100,195,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <motion.div variants={fadeUp} className="platform-pill mb-5 inline-flex">Get In Touch</motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-outfit font-black tracking-[-0.02em] leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
          >
            <span className="text-white">Start Your </span>
            <span style={{ color: '#0A64C3' }}>Distribution </span>
            <span className="text-white">Today.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed">
            One upload. 150+ platforms. 100% royalties. Completely free. Reach out and we&apos;ll set you up within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="font-outfit font-extrabold text-white text-[22px] mb-8">Contact Details</div>
            <div className="flex flex-col gap-4 mb-12">
              {CONTACT_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.15 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl group hover:border-blu/40 transition-all duration-200"
                  style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-blu group-hover:bg-blu/30 transition-colors"
                    style={{ background: 'rgba(10,100,195,0.15)' }}>
                    <item.icon />
                  </div>
                  <div>
                    <div className="font-inter text-[10px] text-mut tracking-[0.1em] uppercase">{item.label}</div>
                    <div className="font-outfit font-semibold text-white text-[14px] group-hover:text-sky transition-colors">{item.value}</div>
                  </div>
                  <div className="ml-auto text-mut group-hover:text-blu transition-colors text-[18px]">→</div>
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
              className="rounded-2xl p-8 relative overflow-hidden" style={{ background: '#0A64C3' }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)' }} />
              <div className="relative z-10">
                <div className="font-outfit font-black text-white text-[26px] leading-tight mb-3">"Where Independent<br/>Meets Major."</div>
                <div className="font-inter text-ice text-[14px] mb-5 leading-relaxed">
                  WB Digital · Western Beats Private Limited<br/>Official Distribution Partner · @warnermusicindia
                </div>
                <div className="font-outfit font-bold text-white text-[13px]">Instagram @wb_digital_ · Verified ✓</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl p-8" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="font-outfit font-extrabold text-white text-[18px] mb-6">Send an Enquiry</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-inter text-[10px] text-sky tracking-[0.12em] uppercase mb-2">Your Name</label>
                  <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Artist / Label name"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 font-inter text-[14px] text-white placeholder:text-white/20 outline-none focus:border-blu/60 transition-all" />
                </div>
                <div>
                  <label className="block font-inter text-[10px] text-sky tracking-[0.12em] uppercase mb-2">Email</label>
                  <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 font-inter text-[14px] text-white placeholder:text-white/20 outline-none focus:border-blu/60 transition-all" />
                </div>
              </div>
              <div>
                <label className="block font-inter text-[10px] text-sky tracking-[0.12em] uppercase mb-2">Service Required</label>
                <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                  className="w-full border border-white/10 rounded-xl px-4 py-3 font-inter text-[14px] text-white outline-none focus:border-blu/60 transition-all"
                  style={{ background: 'rgba(10,21,53,0.9)' }}>
                  <option value="">Select a service...</option>
                  {SERVICES_LIST.map(s => <option key={s} value={s} style={{ background: '#0A1535' }}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-inter text-[10px] text-sky tracking-[0.12em] uppercase mb-2">Your Message</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell us about your music, your goals, and what you need..."
                  className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 font-inter text-[14px] text-white placeholder:text-white/20 outline-none focus:border-blu/60 transition-all resize-none" />
              </div>
              <button type="submit"
                className="flex items-center justify-center gap-2 py-4 rounded-xl font-outfit font-bold text-[15px] text-white transition-all duration-200 hover:-translate-y-1"
                style={{ background: sent ? '#1A7A3A' : '#0A64C3', boxShadow: '0 8px 30px rgba(10,100,195,0.3)' }}>
                {sent ? <><CheckCircle size={18} /> Opening email client...</> : <><Send size={16} /> Send Enquiry</>}
              </button>
              <div className="font-inter text-[11px] text-mut text-center">
                Or DM us on Instagram @wb_digital_ · We respond within 24 hours
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
