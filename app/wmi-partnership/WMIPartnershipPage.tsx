'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Award, Zap, Globe2, Shield, ArrowRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

const BENEFITS = [
  {
    icon: Award,
    title: 'Major Label Infrastructure',
    color: '#0A64C3',
    desc: 'Your releases go through the same distribution infrastructure that Warner Music India uses for its signed artists. That means higher quality metadata checks, better audio compliance, and releases that meet major-label standards.',
  },
  {
    icon: Zap,
    title: 'Priority DSP Placement',
    color: '#C41230',
    desc: 'WMI\'s relationships with JioSaavn, Gaana, Spotify India, and other DSPs mean your music gets seen by the right people. Playlist editors and curators give WMI-associated releases priority. That is not something any other free distributor can offer you.',
  },
  {
    icon: Globe2,
    title: 'Global Network',
    color: '#5CB2DC',
    desc: 'Warner Music Group operates in over 70 countries. That global footprint means your music does not just reach India. It reaches the Indian diaspora in the US, UK, Australia, Canada, and the Middle East through platforms where WMG has direct relationships.',
  },
  {
    icon: Shield,
    title: 'Co-sign Credibility',
    color: '#0A64C3',
    desc: 'Having Warner Music India backing is the most powerful co-sign an independent artist in India can get. It signals quality. Labels, booking agents, and brands notice. It opens doors that no self-release or foreign distributor can open for you.',
  },
]

const WMI_ARTISTS = [
  'Armaan Malik', 'Diljit Dosanjh', 'King', 'Darshan Raval',
  'Badshah', 'Neha Kakkar', 'Jubin Nautiyal', 'Palak Muchhal',
]

export default function WMIPartnershipPage() {
  return (
    <div className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.5)' }} />
        <div className="absolute top-1/2 left-1/4 w-[700px] h-[500px] rounded-full -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.15) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">Warner Music India Partnership</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
              <div className="platform-pill mb-6 inline-flex">Exclusive Partnership</div>
              <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6" style={{ fontSize: 'clamp(38px, 6vw, 76px)' }}>
                <span className="block text-white">Backed by</span>
                <span className="block" style={{ color: '#0A64C3' }}>Warner Music</span>
                <span className="block text-white">India.</span>
              </h1>
              <p className="font-inter text-[16px] sm:text-[18px] text-mut leading-relaxed mb-8 max-w-xl">
                WB Digital is the only free distribution platform in India with an official Warner Music India backing. This is not a logo on a landing page. It is a real partnership that changes what is possible for independent artists.
              </p>
              <Link href="/submit"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-blu rounded-xl font-outfit font-bold text-[15px] text-white hover:bg-[#0D77E0] transition-all duration-300"
                style={{ boxShadow: '0 8px 30px rgba(10,100,195,0.35)' }}>
                Distribute with WMI Backing
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: EASE }}
              className="hidden lg:flex flex-col items-center gap-6">
              <div className="rounded-3xl p-10 flex flex-col items-center gap-4"
                style={{ background: 'rgba(10,100,195,0.1)', border: '1px solid rgba(10,100,195,0.25)' }}>
                <div className="relative w-20 h-16">
                  <Image src="/partners/warnermusicindia-3pJs86tg.png" alt="Warner Music India" fill className="object-contain" />
                </div>
                <div className="text-center">
                  <div className="font-outfit font-black text-white text-[22px]">Warner Music India</div>
                  <div className="font-inter text-[12px] text-mut mt-1">@warnermusicindia</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="font-inter text-[11px] text-sky tracking-[0.12em] uppercase mb-1">Official Partner</div>
                  <div className="font-outfit font-black text-white text-[18px]">WB Digital</div>
                  <div className="font-inter text-[11px] text-mut mt-1">by Western Beats Private Limited</div>
                </div>
              </div>
              <p className="font-inter text-[12px] text-mut text-center max-w-xs">
                No other free distributor in India has this. Not DistroKid. Not TuneCore. Not CD Baby.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28" style={{ background: '#060C18' }}>
        <div className="crm-stripe" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} className="mb-12">
            <div className="platform-pill mb-5 inline-flex">What It Means for You</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0]" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              <span className="text-white">Four Reasons the Partnership </span>
              <span style={{ color: '#0A64C3' }}>Matters.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {BENEFITS.map((b, i) => (
              <motion.div key={b.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="rounded-2xl p-6 sm:p-7 relative overflow-hidden"
                style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: b.color }} />
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${b.color}22` }}>
                  <b.icon size={20} style={{ color: b.color }} />
                </div>
                <h3 className="font-outfit font-extrabold text-white text-[16px] mb-3">{b.title}</h3>
                <p className="font-inter text-[13.5px] text-mut leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WMI Artists */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} className="mb-10">
            <div className="platform-pill mb-5 inline-flex">The Warner Music India Roster</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              <span className="text-white">Artists in the Same </span>
              <span style={{ color: '#0A64C3' }}>Network.</span>
            </h2>
            <p className="font-inter text-[14px] text-mut max-w-2xl">
              When you distribute through WB Digital, you are operating in the same ecosystem as these artists. The infrastructure they use is the infrastructure you get.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {WMI_ARTISTS.map((artist, i) => (
              <motion.div key={artist}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                className="px-4 py-2 rounded-full font-outfit font-bold text-white text-[13px]"
                style={{ background: 'rgba(10,100,195,0.15)', border: '1px solid rgba(10,100,195,0.3)' }}
              >
                {artist}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28" style={{ background: '#060C18' }}>
        <div className="crm-stripe" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}>
            <div className="platform-pill mb-5 inline-flex">Start Today</div>
            <h2 className="font-outfit font-black tracking-[-0.02em] leading-[1.0] mb-5" style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}>
              <span className="text-white">Distribute with WMI Backing.</span>
              <span className="block" style={{ color: '#0A64C3' }}>Free, Always.</span>
            </h2>
            <p className="font-inter text-[15px] text-mut leading-relaxed mb-8">
              It costs nothing to start. Upload your music, get it live on 150+ platforms in 48 hours, and carry the WMI name with you.
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
