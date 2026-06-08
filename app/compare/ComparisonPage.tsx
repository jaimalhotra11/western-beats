'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

interface CompetitorRow {
  feature: string
  wb: string
  competitor: string
  wbWins: boolean
}

interface ComparisonPageProps {
  competitorName: string
  competitorSlug: string
  tagline: string
  heroDesc: string
  rows: CompetitorRow[]
  faqs: { q: string; a: string }[]
  verdict: string
}

export default function ComparisonPage({
  competitorName, tagline, heroDesc, rows, faqs, verdict,
}: ComparisonPageProps) {
  return (
    <>
      <Nav />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Outfit, sans-serif' }}>

        {/* Hero */}
        <section style={{ padding: '120px 24px 80px', textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ background: '#C41230', color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: 2, padding: '6px 16px', borderRadius: 20, textTransform: 'uppercase' }}>
              Comparison
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 900, margin: '24px 0 16px', lineHeight: 1.1 }}>
              Western Beats <span style={{ color: '#C41230' }}>vs</span> {competitorName}
            </h1>
            <p style={{ fontSize: 20, color: '#aaa', maxWidth: 680, margin: '0 auto 40px' }}>{tagline}</p>
            <p style={{ fontSize: 16, color: '#888', maxWidth: 720, margin: '0 auto' }}>{heroDesc}</p>
          </motion.div>
        </section>

        {/* Comparison Table */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 80px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                <thead>
                  <tr>
                    <th style={{ padding: '16px 20px', background: '#111', textAlign: 'left', color: '#888', fontWeight: 600, borderRadius: '12px 0 0 0' }}>Feature</th>
                    <th style={{ padding: '16px 20px', background: '#C41230', textAlign: 'center', color: '#fff', fontWeight: 800 }}>Western Beats ✓</th>
                    <th style={{ padding: '16px 20px', background: '#1a1a1a', textAlign: 'center', color: '#888', fontWeight: 600, borderRadius: '0 12px 0 0' }}>{competitorName}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#0a0a0a' : '#050505' }}>
                      <td style={{ padding: '14px 20px', color: '#ccc', fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: '14px 20px', textAlign: 'center', color: row.wbWins ? '#4ade80' : '#fff', fontWeight: row.wbWins ? 700 : 400 }}>{row.wb}</td>
                      <td style={{ padding: '14px 20px', textAlign: 'center', color: row.wbWins ? '#f87171' : '#888' }}>{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* Verdict */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ background: 'linear-gradient(135deg, #0A64C315, #C4123010)', border: '1px solid #C41230', borderRadius: 16, padding: '40px 48px' }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>The Verdict</h2>
            <p style={{ color: '#ccc', lineHeight: 1.8, fontSize: 16 }}>{verdict}</p>
          </motion.div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 40, textAlign: 'center' }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ borderBottom: '1px solid #222', paddingBottom: 24, marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: '#fff' }}>{faq.q}</h3>
              <p style={{ color: '#999', lineHeight: 1.7 }}>{faq.a}</p>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ textAlign: 'center', padding: '40px 24px 120px' }}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Ready to Switch?</h2>
            <p style={{ color: '#888', marginBottom: 32 }}>Join thousands of Indian artists already on Western Beats. 100% free, always.</p>
            <Link href="/submit"
              style={{ display: 'inline-block', background: '#C41230', color: '#fff', padding: '16px 48px', borderRadius: 8, fontWeight: 700, fontSize: 18, textDecoration: 'none', letterSpacing: 0.5 }}>
              Distribute Free with Western Beats →
            </Link>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  )
}
