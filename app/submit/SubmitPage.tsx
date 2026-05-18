'use client'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, MessageCircle, CheckCircle, ArrowRight, Upload, Clock, Globe2, DollarSign } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const
const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.7, ease: EASE } },
}
const container: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const SUBMISSION_STEPS = [
  {
    icon: Mail,
    color: '#0A64C3',
    num: '01',
    title: 'Email or DM Us',
    desc: 'Send your music and details to contact@westernbeats.com or DM us on Instagram @wb_digital_. Include your track, artwork, artist name, genre, and release date.',
  },
  {
    icon: Clock,
    color: '#5CB2DC',
    num: '02',
    title: 'We Review in 24 Hours',
    desc: 'Our team reviews your submission within 24 hours. We check metadata, artwork compliance, and audio quality to ensure everything meets platform standards.',
  },
  {
    icon: Globe2,
    color: '#0A64C3',
    num: '03',
    title: 'Live on 150+ Platforms',
    desc: 'Once approved, your music goes live on JioSaavn, Gaana, Spotify, Apple Music, YouTube Music, and 145+ more platforms within 48 hours.',
  },
  {
    icon: DollarSign,
    color: '#C41230',
    num: '04',
    title: 'Earn 70% Royalties',
    desc: '70% of every stream goes directly to you, every month. Track it all in real-time on your analytics dashboard. We only take 30% when you earn.',
  },
]

const WHAT_TO_INCLUDE = [
  { item: 'Your music file', note: 'WAV (preferred) or high-quality MP3 (320kbps)' },
  { item: 'Album artwork', note: 'Square JPG/PNG, minimum 3000×3000px' },
  { item: 'Track & artist name', note: 'Exactly as you want it to appear on platforms' },
  { item: 'Release date', note: 'At least 7 days from now for smooth delivery' },
  { item: 'Genre & mood', note: 'Helps with playlist placement & discoverability' },
  { item: 'Language', note: 'Hindi, English, Punjabi, Tamil, etc.' },
]

const SERVICES_BRIEF = [
  { label: 'Music Distribution', note: 'Free. 150+ platforms. 48 hrs.' },
  { label: 'Event Management', note: 'Concerts & album launches' },
  { label: 'Talent Management', note: 'Career strategy & brand deals' },
  { label: 'Audio Production', note: 'Recording, mixing & mastering' },
  { label: 'Video Direction', note: 'Music videos & social content' },
  { label: 'Analytics & Strategy', note: 'Real-time streaming data' },
]

export default function SubmitPage() {
  return (
    <div className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>

      {/* ── NAV ──────────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060C18]/95 backdrop-blur-xl border-b border-white/[0.06] py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-9 rounded-lg overflow-hidden bg-white p-0.5 flex-shrink-0 group-hover:shadow-[0_0_12px_rgba(10,100,195,0.5)] transition-all duration-300">
              <Image src="/partners/westernbeats-BpLvGE3e.png" alt="Western Beats" fill sizes="40px" className="object-contain" />
            </div>
            <div>
              <div className="font-outfit font-black text-[15px] tracking-[0.04em] text-white leading-none">WESTERN BEATS</div>
              <div className="font-inter text-[9px] text-mut tracking-[0.12em] uppercase">Official Warner Music India Partner</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/submit', label: 'Submit Music', active: true },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 relative group ${l.active ? 'text-white' : 'text-mut hover:text-white'}`}
              >
                {l.label}
                {l.active
                  ? <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blu rounded-full" />
                  : <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blu scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                }
              </Link>
            ))}
          </div>
          <a
            href="mailto:contact@westernbeats.com?subject=Music Distribution Submission"
            className="hidden md:flex px-5 py-2.5 bg-blu rounded-lg font-outfit font-bold text-[13px] text-white hover:bg-[#0D77E0] transition-colors duration-200"
          >
            Email Us Now
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div className="absolute top-1/2 left-1/4 w-[700px] h-[500px] rounded-full -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.14) 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">Submit Your Music</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="platform-pill mb-6 inline-flex">
                ✦ Free. Fast. Warner Music India Backed.
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(38px, 6vw, 76px)' }}
              >
                <span className="block text-white">Submit Your</span>
                <span className="block" style={{ color: '#0A64C3' }}>Music Free.</span>
                <span className="block text-white">Go Live in</span>
                <span className="block text-white">48 Hours.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="font-inter text-[16px] sm:text-[17px] text-mut leading-relaxed mb-8 max-w-xl"
              >
                Submit your track to WB Digital and reach 150+ streaming platforms worldwide —
                JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and more.
                <strong className="text-white"> Always free. 70% royalties. You keep 100% ownership of your masters.</strong>
              </motion.p>

              {/* Quick stats */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
                {[
                  { val: 'FREE', lbl: 'To Submit' },
                  { val: '24hrs', lbl: 'Review Time' },
                  { val: '48hrs', lbl: 'Go-Live Time' },
                  { val: '70%', lbl: 'Royalties to You' },
                ].map(s => (
                  <div key={s.val} className="flex flex-col">
                    <span className="font-outfit font-black text-[26px] sm:text-[30px] leading-none" style={{ color: '#0A64C3' }}>{s.val}</span>
                    <span className="font-inter text-[11px] text-mut tracking-[0.08em] uppercase mt-1">{s.lbl}</span>
                  </div>
                ))}
              </motion.div>

              {/* What to include */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl p-6 sm:p-7"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <Upload size={18} style={{ color: '#0A64C3' }} />
                  <div className="font-outfit font-extrabold text-white text-[16px]">What to Include in Your Submission</div>
                </div>
                <div className="flex flex-col gap-3">
                  {WHAT_TO_INCLUDE.map((w, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#0A64C3' }} />
                      <div>
                        <div className="font-outfit font-bold text-white text-[13px]">{w.item}</div>
                        <div className="font-inter text-[12px] text-mut mt-0.5">{w.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="flex flex-col gap-5 lg:sticky lg:top-24"
            >
              {/* Primary: Email */}
              <motion.a
                href="mailto:contact@westernbeats.com?subject=Music Distribution Submission — WB Digital"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="block rounded-2xl p-7 sm:p-8 relative overflow-hidden group cursor-pointer"
                style={{ background: '#0A64C3', boxShadow: '0 20px 60px rgba(10,100,195,0.4)' }}
              >
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)' }} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(255,255,255,0.15)' }}>
                    <Mail size={22} className="text-white" />
                  </div>
                  <div className="font-outfit font-extrabold text-white text-[22px] mb-2">Email Us</div>
                  <div className="font-inter text-ice/80 text-[15px] mb-5 leading-relaxed">
                    Send your music, artwork, and release details to our team. We respond within 24 hours.
                  </div>
                  <div
                    className="inline-flex items-center gap-2 font-outfit font-bold text-[14px] text-white bg-[#080F1A]/60 px-5 py-3 rounded-xl group-hover:bg-[#080F1A] transition-colors duration-200"
                  >
                    contact@westernbeats.com
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  <div className="mt-4 font-inter text-[12px] text-white/50">✦ Recommended for full submissions with files</div>
                </div>
              </motion.a>

              {/* Secondary: Instagram */}
              <motion.a
                href="https://instagram.com/wb_digital_"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="block rounded-2xl p-7 sm:p-8 relative overflow-hidden group cursor-pointer"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#C41230' }} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(196,18,48,0.15)' }}>
                    <MessageCircle size={22} style={{ color: '#C41230' }} />
                  </div>
                  <div className="font-outfit font-extrabold text-white text-[22px] mb-2">DM on Instagram</div>
                  <div className="font-inter text-mut text-[14px] mb-5 leading-relaxed">
                    Quick questions or initial enquiries? DM us on Instagram. 27.8K+ artists already follow us.
                  </div>
                  <div className="inline-flex items-center gap-2 font-outfit font-bold text-[14px]" style={{ color: '#C41230' }}>
                    @wb_digital_
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.a>

              {/* What happens next */}
              <div className="rounded-2xl p-6 sm:p-7" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="font-outfit font-extrabold text-white text-[15px] mb-4">What Happens After You Submit?</div>
                <div className="flex flex-col gap-4">
                  {SUBMISSION_STEPS.map((s, i) => {
                    const Icon = s.icon
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${s.color}20` }}
                        >
                          <Icon size={14} style={{ color: s.color }} />
                        </div>
                        <div>
                          <div className="font-outfit font-bold text-white text-[13px]">{s.num} — {s.title}</div>
                          <div className="font-inter text-[12px] text-mut leading-relaxed mt-0.5">{s.desc}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* WMI badge */}
              <div
                className="flex items-center gap-4 rounded-xl p-4"
                style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}
              >
                <div className="relative w-10 h-9 rounded-lg overflow-hidden bg-white p-0.5 flex-shrink-0">
                  <Image src="/partners/warnermusicindia-3pJs86tg.png" alt="Warner Music India" fill sizes="40px" className="object-contain" />
                </div>
                <div>
                  <div className="font-outfit font-extrabold text-white text-[13px]">Warner Music India Partner</div>
                  <div className="font-inter text-[11px] text-mut">Major-label credibility. Priority DSP placement.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="platform-pill mb-4 inline-flex">More Than Distribution</div>
            <h2 className="font-outfit font-black text-white tracking-[-0.02em]" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
              All Six Services. <span style={{ color: '#0A64C3' }}>One Team.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_BRIEF.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="rounded-xl p-5 flex items-center gap-4"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <CheckCircle size={18} style={{ color: '#0A64C3' }} className="flex-shrink-0" />
                <div>
                  <div className="font-outfit font-bold text-white text-[14px]">{s.label}</div>
                  <div className="font-inter text-[12px] text-mut">{s.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl font-outfit font-bold text-[13px] text-white hover:bg-white/[0.05] transition-colors duration-200"
            >
              View All Services
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-inter text-[12px] text-mut">© 2025 Western Beats Private Limited · WB Digital</div>
          <div className="flex items-center gap-5">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/pricing', label: 'Pricing' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="font-inter text-[12px] text-mut hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}
