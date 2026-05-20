'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const EASE = [0.22, 1, 0.36, 1] as const

const SECTIONS = [
  {
    title: '1. Agreement to Terms',
    content: `By accessing or using the WB Digital platform operated by Western Beats Private Limited, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.

These terms apply to all users of WB Digital, including artists, labels, and representatives uploading content to be distributed.`,
  },
  {
    title: '2. Distribution Services',
    content: `WB Digital distributes music to 150+ streaming platforms on behalf of artists. Distribution is free of charge. Western Beats Private Limited collects royalties on your behalf and remits 75% of net royalties to you on a monthly basis.

You retain full ownership of your master recordings and compositions. WB Digital does not acquire any ownership rights to your music.`,
  },
  {
    title: '3. Content Standards',
    content: `All content submitted for distribution must be original work owned or controlled by you. You represent and warrant that:

- You own or control all rights in the recordings submitted
- The content does not infringe on any third-party intellectual property
- The content does not contain defamatory, obscene, or illegal material
- You have obtained all necessary licenses for any samples or interpolations

WB Digital reserves the right to reject or remove content that violates these standards.`,
  },
  {
    title: '4. Royalties and Payments',
    content: `WB Digital pays 75% of net royalties received from streaming platforms to artists. Payments are made monthly via direct bank transfer to your registered Indian bank account.

"Net royalties" means the amounts received by WB Digital from streaming platforms after any platform-level deductions. WB Digital's 25% share covers platform operations, distribution costs, and support services.

Minimum payout thresholds and payment timelines are communicated in your artist dashboard.`,
  },
  {
    title: '5. ISRC and UPC Codes',
    content: `WB Digital generates ISRC (International Standard Recording Code) and UPC (Universal Product Code) identifiers for releases distributed through the platform at no additional charge. These codes remain associated with the applicable recordings and releases.

If you bring your own existing ISRC codes, you may provide them during the submission process.`,
  },
  {
    title: '6. Termination',
    content: `You may terminate your account and remove your music from distribution at any time by contacting us at contact@westernbeats.com. Takedowns may take up to 30 days to fully process across all platforms.

WB Digital may suspend or terminate your account if you materially breach these terms, upload infringing content, or engage in fraudulent streaming activity.

Upon termination, WB Digital will pay any outstanding royalties owed to you within 60 days.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `Western Beats Private Limited shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. Our total liability in connection with these terms shall not exceed the royalties paid to you in the three months preceding the claim.

We are not liable for delays or failures in distribution caused by third-party streaming platforms.`,
  },
  {
    title: '8. Governing Law',
    content: `These Terms of Service are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Delhi, India.

If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.

For any questions about these terms, contact us at contact@westernbeats.com.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#040A14', color: 'white' }}>
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
              <li className="text-sky">Terms of Service</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="platform-pill mb-6 inline-flex">Legal</div>
            <h1 className="font-outfit font-black leading-[0.93] tracking-[-0.03em] mb-4" style={{ fontSize: 'clamp(38px, 6vw, 68px)' }}>
              <span className="block text-white">Terms of</span>
              <span className="block" style={{ color: '#0A64C3' }}>Service.</span>
            </h1>
            <p className="font-inter text-[14px] text-mut">Last updated: January 2025 · Western Beats Private Limited</p>
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
              Questions about these terms? Contact us at{' '}
              <a href="mailto:contact@westernbeats.com" className="text-sky hover:text-white transition-colors">contact@westernbeats.com</a>
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
