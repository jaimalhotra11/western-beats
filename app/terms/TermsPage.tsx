'use client'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useEffect, useRef, useState } from 'react'
import { gsap, registerGSAP } from '../lib/gsapUtils'
import {
  FileText, Music2, DollarSign, Shield, Clock, AlertTriangle,
  Scale, Globe, Mail, ChevronDown, CheckCircle, XCircle, Info
} from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

const QUICK_FACTS = [
  { icon: DollarSign, color: '#0A64C3', title: 'Royalty Split', value: '75% to You', sub: 'WB retains 25% of net royalties' },
  { icon: Shield,     color: '#C41230', title: 'Ownership',     value: '100% Yours', sub: 'You keep all masters & copyright' },
  { icon: Globe,      color: '#5CB2DC', title: 'Platforms',     value: '150+',       sub: 'Worldwide distribution included' },
  { icon: Clock,      color: '#0A64C3', title: 'Go-Live Time',  value: '48-72 hrs',  sub: 'Friday uploads go live Monday' },
  { icon: DollarSign, color: '#C41230', title: 'Upfront Cost',  value: '₹0',         sub: 'Free forever, no hidden fees' },
  { icon: Clock,      color: '#5CB2DC', title: 'Payout Cycle',  value: 'Monthly',    sub: 'Direct to your bank account' },
]

type Section = {
  id: string
  icon: typeof FileText
  color: string
  title: string
  items: { heading?: string; body: string; type?: 'note' | 'warn' | 'check' }[]
}

const SECTIONS: Section[] = [
  {
    id: 'agreement',
    icon: FileText,
    color: '#0A64C3',
    title: '1. Agreement to Terms',
    items: [
      {
        body: 'By accessing or using the WB Digital platform operated by Western Beats Private Limited ("WB", "we", "us"), you ("Artist", "User") agree to be bound by these Terms & Conditions. If you do not agree to any part of these terms, do not use the platform.',
      },
      {
        body: 'These terms apply to all users including independent artists, bands, labels, and their authorised representatives who upload, distribute, or manage music content through WB Digital.',
      },
      {
        type: 'note',
        body: 'These terms constitute a legally binding agreement under the laws of India. We recommend you read them fully before submitting any content.',
      },
    ],
  },
  {
    id: 'distribution',
    icon: Music2,
    color: '#5CB2DC',
    title: '2. Distribution Services',
    items: [
      {
        heading: 'What We Do',
        body: 'WB Digital distributes your music to 150+ streaming and download platforms worldwide, including JioSaavn, Gaana, Spotify, Apple Music, YouTube Music, Amazon Music, Tidal, Deezer, SoundCloud, and many more. Distribution is provided free of charge with no upfront payment required.',
      },
      {
        heading: 'Go-Live Timeline',
        body: 'Once your release is reviewed and approved, it will go live on all platforms within 48–72 hours. Please note: music uploaded on a Friday will go live on Monday. Weekends and Indian public holidays may cause minor delays beyond the standard window.',
      },
      {
        heading: 'ISRC & UPC Codes',
        body: 'WB Digital generates ISRC (International Standard Recording Code) and UPC (Universal Product Code) identifiers for all releases at no cost. If you have existing ISRC codes, you may provide them at submission. All codes remain permanently associated with your recordings.',
      },
      {
        type: 'note',
        body: 'WB Digital does not guarantee playlist placement, editorial features, or specific algorithmic performance on any streaming platform.',
      },
    ],
  },
  {
    id: 'royalties',
    icon: DollarSign,
    color: '#C41230',
    title: '3. Royalties & Revenue Split',
    items: [
      {
        heading: 'The Revenue Split',
        body: 'WB Digital operates on a 75/25 revenue sharing model. You (the Artist) receive 75% of all net royalties collected from streaming platforms. Western Beats Private Limited retains 25% of net royalties as a platform and service fee. This fee covers distribution infrastructure, platform relationships, support, ISRC/UPC generation, and ongoing operations.',
      },
      {
        type: 'warn',
        body: 'IMPORTANT: When we refer to "100% Ownership" in our marketing, this refers exclusively to your intellectual property rights — you retain 100% copyright ownership of your masters and compositions. The revenue split remains 75% to you / 25% to WB. These are two distinct concepts.',
      },
      {
        heading: 'Definition of Net Royalties',
        body: '"Net royalties" means the total amounts received by WB Digital from streaming platforms after any deductions made at the platform level (e.g., platform taxes, currency conversion fees, or withholding taxes imposed by the DSP). WB Digital does not add any additional deductions beyond our 25% share.',
      },
      {
        heading: 'Payment Schedule',
        body: 'Royalties are paid monthly. Once streaming data and payments are received from all platforms (typically 45–90 days after the streaming month), we calculate your 75% share and transfer it directly to your registered Indian bank account within the first two weeks of the following month.',
      },
      {
        heading: 'Minimum Payout Threshold',
        body: 'Payments are processed when your balance reaches ₹500 or above. Balances below this threshold are carried forward to the next month. You can view your real-time earnings in your artist dashboard.',
      },
      {
        type: 'check',
        body: 'There are no processing fees, no administrative charges, and no annual subscription fees deducted from your royalties beyond the standard 25% platform share.',
      },
    ],
  },
  {
    id: 'ownership',
    icon: Shield,
    color: '#0A64C3',
    title: '4. Intellectual Property & Ownership',
    items: [
      {
        heading: 'You Own Everything',
        body: 'You retain 100% ownership of all intellectual property rights in your music, including master recordings, compositions, lyrics, and artwork. WB Digital does not acquire any ownership interest in your content at any time.',
      },
      {
        heading: 'Licence to Distribute',
        body: 'By submitting content to WB Digital, you grant Western Beats Private Limited a non-exclusive, worldwide, royalty-free licence to reproduce, distribute, transmit, and publicly perform your music solely for the purpose of providing the distribution services described in these terms. This licence terminates automatically when your music is removed from the platform.',
      },
      {
        heading: 'Your Warranties',
        body: 'You represent and warrant that:\n• You own or fully control all rights in the submitted recordings\n• The content does not infringe any third-party intellectual property, trademark, or moral rights\n• You have obtained all necessary licences for any samples, interpolations, or third-party elements\n• The content does not violate any applicable laws or contain defamatory, obscene, or illegal material\n• You are at least 18 years of age, or have obtained parental/guardian consent',
      },
      {
        type: 'warn',
        body: 'Submitting content you do not own rights to is a serious breach of these terms and may result in immediate account suspension, content removal, and potential legal action by the rights holder.',
      },
    ],
  },
  {
    id: 'content',
    icon: AlertTriangle,
    color: '#5CB2DC',
    title: '5. Content Standards & Review',
    items: [
      {
        heading: 'Review Process',
        body: 'All submissions are reviewed by the WB Digital team within 24 hours of upload. Content that meets our standards proceeds to distribution. Content that does not meet standards will be rejected with a reason communicated to the artist.',
      },
      {
        heading: 'Prohibited Content',
        body: 'WB Digital will not distribute content that:\n• Infringes third-party copyrights, trademarks, or rights of publicity\n• Contains fraudulently generated streams or engagement manipulation\n• Is spam, re-uploaded from public domain without transformation, or "white noise" content\n• Promotes violence, terrorism, hate speech, or illegal activity\n• Contains explicit material not properly flagged during submission',
      },
      {
        heading: 'Takedowns & Content Removal',
        body: 'WB Digital reserves the right to remove content from distribution at any time if it violates these terms, receives valid DMCA/copyright claims, or is flagged by streaming platforms. We will notify you before removal where practicable.',
      },
    ],
  },
  {
    id: 'platform',
    icon: Globe,
    color: '#C41230',
    title: '6. Platform Conduct & Fair Use',
    items: [
      {
        heading: 'Prohibited Activities',
        body: 'You must not:\n• Use bots, click farms, or any artificial means to inflate stream counts\n• Create multiple accounts to circumvent platform restrictions\n• Misrepresent track metadata (e.g., fake artist names, misleading titles)\n• Attempt to reverse-engineer or exploit the WB Digital platform\n• Use the platform to distribute content on behalf of third parties without authorisation',
      },
      {
        heading: 'Fraudulent Streaming',
        body: 'Artificially inflating streams is strictly prohibited and violates streaming platform policies. WB Digital actively monitors for such activity. Detection will result in immediate account termination, forfeiture of affected royalties, and notification to the relevant streaming platforms.',
      },
      {
        type: 'warn',
        body: 'Streaming platforms including Spotify, Apple Music, and JioSaavn independently audit for fraudulent activity. Platform-level penalties are beyond WB Digital\'s control and may include permanent bans.',
      },
    ],
  },
  {
    id: 'termination',
    icon: XCircle,
    color: '#0A64C3',
    title: '7. Termination & Account Closure',
    items: [
      {
        heading: 'Artist-Initiated Termination',
        body: 'You may terminate your account and request removal of all your music from distribution at any time by emailing contact@westernbeats.com with the subject "Account Termination Request". Takedowns will be processed within 7 business days and will fully propagate across all platforms within 30 days.',
      },
      {
        heading: 'WB-Initiated Termination',
        body: 'WB Digital may suspend or permanently terminate your account if you:\n• Materially breach any provision of these terms\n• Upload content that infringes third-party rights\n• Engage in fraudulent streaming activity\n• Harass or threaten WB Digital staff or other platform users\n• Provide false information during account registration',
      },
      {
        heading: 'Outstanding Royalties on Termination',
        body: 'Upon termination (whether artist-initiated or WB-initiated for reasons other than fraud), WB Digital will pay all outstanding royalties owed to you within 60 days, subject to final platform reporting being received. In cases of termination due to fraud or material breach, outstanding royalties may be forfeited.',
      },
    ],
  },
  {
    id: 'liability',
    icon: Scale,
    color: '#5CB2DC',
    title: '8. Limitation of Liability',
    items: [
      {
        body: 'Western Beats Private Limited provides the WB Digital platform on an "as is" and "as available" basis. To the maximum extent permitted by applicable law, we disclaim all warranties, express or implied, regarding the platform.',
      },
      {
        body: 'WB Digital shall not be liable for:\n• Indirect, incidental, special, punitive, or consequential damages\n• Loss of revenue, profits, or anticipated earnings\n• Delays caused by third-party streaming platforms\n• Playlist or algorithmic decisions made by streaming platforms\n• Temporary unavailability of the platform due to maintenance or technical issues',
      },
      {
        body: 'Our total aggregate liability to you under these terms shall not exceed the total royalties paid to you in the six (6) months immediately preceding the event giving rise to the claim.',
      },
    ],
  },
  {
    id: 'law',
    icon: Scale,
    color: '#C41230',
    title: '9. Governing Law & Disputes',
    items: [
      {
        body: 'These Terms & Conditions are governed by and construed in accordance with the laws of India, without regard to conflict of law principles.',
      },
      {
        body: 'Any dispute, controversy, or claim arising out of or relating to these terms, or the breach thereof, shall first be attempted to be resolved through good-faith negotiation. If negotiation fails within 30 days, disputes shall be subject to the exclusive jurisdiction of the courts of Delhi, India.',
      },
      {
        body: 'If any provision of these terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.',
      },
    ],
  },
  {
    id: 'changes',
    icon: Info,
    color: '#0A64C3',
    title: '10. Changes to These Terms',
    items: [
      {
        body: 'Western Beats Private Limited reserves the right to modify these Terms & Conditions at any time. When we make material changes, we will notify registered artists via the email address on file at least 14 days before the changes take effect.',
      },
      {
        body: 'Continued use of the WB Digital platform after any change to these terms constitutes your acceptance of the new terms. If you do not agree to the revised terms, you must stop using the platform and request account termination.',
      },
      {
        type: 'note',
        body: 'The most current version of these terms is always available at westernbeats.com/terms. Last reviewed and updated: May 2025.',
      },
    ],
  },
]

function Callout({ type, body }: { type?: 'note' | 'warn' | 'check'; body: string }) {
  if (!type) return (
    <p className="font-inter text-[14px] sm:text-[15px] leading-relaxed text-[#8fa3be] whitespace-pre-line">{body}</p>
  )
  const cfg = {
    note:  { bg: 'rgba(10,100,195,0.08)',  border: 'rgba(10,100,195,0.25)',  icon: Info,         color: '#5CB2DC', label: 'Note' },
    warn:  { bg: 'rgba(196,18,48,0.08)',   border: 'rgba(196,18,48,0.3)',    icon: AlertTriangle, color: '#f87171', label: 'Important' },
    check: { bg: 'rgba(34,197,94,0.07)',   border: 'rgba(34,197,94,0.25)',   icon: CheckCircle,  color: '#4ade80', label: 'Good to Know' },
  }[type]
  const Icon = cfg.icon
  return (
    <div className="rounded-xl p-4 sm:p-5 flex gap-3" style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}>
      <Icon size={18} style={{ color: cfg.color, flexShrink: 0, marginTop: 2 }} />
      <div>
        <div className="font-outfit font-bold text-[11px] tracking-[0.12em] uppercase mb-1.5" style={{ color: cfg.color }}>{cfg.label}</div>
        <p className="font-inter text-[13.5px] leading-relaxed whitespace-pre-line" style={{ color: '#b0c4d8' }}>{body}</p>
      </div>
    </div>
  )
}

function AccordionSection({ s, index }: { s: Section; index: number }) {
  const [open, setOpen] = useState(index < 3)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = s.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.04, ease: EASE }}
      id={s.id}
      className="rounded-2xl overflow-hidden"
      style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
            <Icon size={18} style={{ color: s.color }} />
          </div>
          <h2 className="font-outfit font-extrabold text-white text-[15px] sm:text-[17px] group-hover:text-[#5CB2DC] transition-colors duration-200">
            {s.title}
          </h2>
        </div>
        <ChevronDown
          size={18}
          className="text-mut transition-transform duration-300 flex-shrink-0 ml-4"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {/* Body */}
      {open && (
        <div className="px-5 sm:px-6 pb-6 flex flex-col gap-5 border-t border-white/[0.06] pt-5">
          {s.items.map((item, j) => (
            <div key={j}>
              {item.heading && (
                <div className="font-outfit font-bold text-white text-[13px] tracking-[0.06em] uppercase mb-2"
                  style={{ color: s.color }}>
                  {item.heading}
                </div>
              )}
              <Callout type={item.type} body={item.body} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function TermsPage() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    registerGSAP()
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.page-hero-line', {
        y: 80, opacity: 0, skewY: 3, stagger: 0.12,
        duration: 1.0, ease: 'power4.out', delay: 0.1,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#040A14]" />
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #0A64C3, #C41230, #0A64C3, transparent)' }} />
        {/* Ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(10,100,195,0.1) 0%, transparent 70%)' }} />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-inter text-[12px] text-mut">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/20">›</li>
              <li className="text-sky">Terms & Conditions</li>
            </ol>
          </nav>

          <div className="platform-pill mb-6 inline-flex">Legal · Western Beats Private Limited</div>

          <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-6" style={{ fontSize: 'clamp(42px, 7vw, 78px)' }}>
            <span className="page-hero-line block text-white">Terms &amp;</span>
            <span className="page-hero-line block" style={{ color: '#0A64C3' }}>Conditions.</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="font-inter text-[13px] text-mut">Last updated: May 2025</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="font-inter text-[13px] text-mut">Western Beats Private Limited</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="font-inter text-[13px]" style={{ color: '#4ade80' }}>● Effective Immediately</span>
          </div>

          <p className="font-inter text-[15px] sm:text-[16px] text-mut leading-relaxed max-w-2xl">
            These terms govern your use of WB Digital, the music distribution platform by{' '}
            <strong className="text-white">Western Beats Private Limited</strong>. Please read carefully
            before submitting any content. Key terms are highlighted in the Quick Reference below.
          </p>
        </div>
      </section>

      {/* ── Quick Reference Cards ─────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 relative">
        <div className="absolute inset-0" style={{ background: 'rgba(10,21,53,0.4)' }} />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-8">
            <div className="font-outfit font-extrabold text-white text-[18px] sm:text-[20px] mb-1">Quick Reference</div>
            <div className="font-inter text-[13px] text-mut">The most important numbers at a glance. Full detail in the sections below.</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {QUICK_FACTS.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: EASE }}
                  className="rounded-xl p-4 flex flex-col"
                  style={{ background: '#0A1535', border: `1px solid ${f.color}25` }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: `${f.color}18` }}>
                    <Icon size={15} style={{ color: f.color }} />
                  </div>
                  <div className="font-inter text-[10px] text-mut tracking-[0.08em] uppercase mb-1">{f.title}</div>
                  <div className="font-outfit font-black text-[18px] sm:text-[20px] leading-none mb-1" style={{ color: f.color }}>{f.value}</div>
                  <div className="font-inter text-[10px] text-mut leading-snug">{f.sub}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Royalty callout banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mt-5 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ background: 'rgba(196,18,48,0.07)', border: '1px solid rgba(196,18,48,0.25)' }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(196,18,48,0.15)' }}>
              <DollarSign size={20} style={{ color: '#f87171' }} />
            </div>
            <div>
              <div className="font-outfit font-extrabold text-white text-[14px] sm:text-[15px] mb-1">
                The Real Revenue Split: <span style={{ color: '#f87171' }}>75% Artist · 25% WB Digital</span>
              </div>
              <div className="font-inter text-[12.5px] text-mut leading-relaxed">
                When we say &ldquo;100% ownership&rdquo; in our marketing, we mean 100% of your <strong className="text-white">intellectual property rights</strong> (masters, copyright).
                The streaming <strong className="text-white">revenue split is 75% to you, 25% to WB</strong>. These are two different things — you own the music, we share the income. Full details in Section 3.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Table of Contents ─────────────────────────────────────────────── */}
      <section className="pb-6 sm:pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl p-5 sm:p-6" style={{ background: '#0A1535', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="font-outfit font-extrabold text-white text-[14px] mb-4 flex items-center gap-2">
              <FileText size={16} style={{ color: '#5CB2DC' }} /> Table of Contents
            </div>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {SECTIONS.map(s => (
                <a key={s.id} href={`#${s.id}`}
                  className="font-inter text-[13px] text-mut hover:text-white transition-colors duration-200 flex items-center gap-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Accordion Sections ────────────────────────────────────────────── */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-4">
          {SECTIONS.map((s, i) => (
            <AccordionSection key={s.id} s={s} index={i} />
          ))}
        </div>
      </section>

      {/* ── Contact Bar ───────────────────────────────────────────────────── */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ background: 'rgba(10,100,195,0.08)', border: '1px solid rgba(10,100,195,0.2)' }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(10,100,195,0.15)' }}>
                <Mail size={22} style={{ color: '#5CB2DC' }} />
              </div>
              <div>
                <div className="font-outfit font-extrabold text-white text-[16px] sm:text-[18px] mb-1">Questions About These Terms?</div>
                <div className="font-inter text-[13px] text-mut">Our legal team is here to help. We reply within 24 hours on business days.</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="mailto:contact@westernbeats.com"
                className="px-5 py-2.5 rounded-xl font-outfit font-bold text-[13px] text-white text-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#0A64C3' }}>
                Email Us
              </a>
              <Link href="/contact"
                className="px-5 py-2.5 rounded-xl font-outfit font-bold text-[13px] text-white text-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                Contact Page
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
