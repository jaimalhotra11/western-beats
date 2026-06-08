import type { Metadata } from 'next'
import ComparisonPage from '../ComparisonPage'

export const metadata: Metadata = {
  title: 'Deliver My Tune vs Western Beats 2026 | Free vs ₹1,999+',
  description: "Deliver My Tune vs Western Beats: Deliver My Tune charges ₹1,999+ with 85% royalties. Western Beats is completely free, 100% IP ownership, 150+ platforms, and officially backed by Warner Music Group. Best Deliver My Tune alternative India 2026.",
  keywords: [
    'Deliver My Tune vs Western Beats',
    'Deliver My Tune alternative India',
    'better than Deliver My Tune',
    'Deliver My Tune price India',
    'Deliver My Tune competitor',
    'free Deliver My Tune alternative',
    'Deliver My Tune 85% royalty alternative',
    'switch from Deliver My Tune',
    'Deliver My Tune vs free distributor India',
    'DMT alternative India 2026',
  ],
  alternates: { canonical: 'https://westernbeats.com/compare/deliver-my-tune-vs-western-beats' },
  openGraph: {
    title: 'Deliver My Tune vs Western Beats 2026 — Save ₹1,999+',
    description: 'Deliver My Tune charges ₹1,999+ with 85% royalties. Western Beats: ₹0 forever, 150+ platforms, WMG backed.',
    url: 'https://westernbeats.com/compare/deliver-my-tune-vs-western-beats',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Deliver My Tune vs Western Beats India 2026', description: 'Deliver My Tune: ₹1,999+ with 85% royalties. Western Beats: ₹0 + WMG backed.', site: '@wb_digital_' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Western Beats better than Deliver My Tune?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Deliver My Tune charges ₹1,999-5,999 per plan and keeps 15% of royalties (85% to artist). Western Beats is ₹0 forever and is backed by Warner Music Group — no Indian distributor at any price point has this credibility.' } },
    { '@type': 'Question', name: 'What is a free alternative to Deliver My Tune in India?', acceptedAnswer: { '@type': 'Answer', text: 'Western Beats is the best free alternative to Deliver My Tune in India. It distributes to 150+ platforms including all Indian stores, is backed by Warner Music Group, covers caller tunes on Jio/Airtel/Vi/BSNL, and costs ₹0 upfront forever.' } },
  ],
}

const ROWS = [
  { feature: 'Price', wb: '₹0 Forever', competitor: '₹1,999 – ₹5,999 per plan', wbWins: true },
  { feature: 'Royalties to Artist', wb: 'Transparent — T&C apply', competitor: '85% (they keep 15%)', wbWins: true },
  { feature: 'Warner Music Group Backing', wb: '✓ Official Partner', competitor: '✗ None', wbWins: true },
  { feature: 'Platforms Covered', wb: '150+', competitor: '100+', wbWins: true },
  { feature: 'JioSaavn + Gaana', wb: '✓ Priority', competitor: '✓ Covered', wbWins: false },
  { feature: 'Caller Tune (CRBT)', wb: '✓ All networks', competitor: '✓ Available', wbWins: false },
  { feature: 'Go-Live Time', wb: '72 hours', competitor: '2–5 days', wbWins: true },
  { feature: 'IP Ownership', wb: '100% Always', competitor: '100%', wbWins: false },
  { feature: 'India Support', wb: '✓ Hindi + English', competitor: '✓ India-based', wbWins: false },
  { feature: 'WMG Credibility', wb: '✓ Major-label backed', competitor: '✗ Independent only', wbWins: true },
]

const FAQS = [
  { q: 'How much does Deliver My Tune cost vs Western Beats?', a: 'Deliver My Tune charges ₹1,999 for their basic plan up to ₹5,999 for premium plans, plus keeps 15% of your royalties (you get 85%). Western Beats is ₹0 upfront, ₹0 per release, and costs you nothing to start — we only earn when you earn.' },
  { q: 'What is the best free alternative to Deliver My Tune in India?', a: "Western Beats is the best free alternative to Deliver My Tune in India. It offers distribution to 150+ platforms (more than Deliver My Tune's 100+), is backed by Warner Music Group, covers all Indian platforms and caller tunes, and costs ₹0 — saving you ₹1,999 to ₹5,999 per year." },
  { q: 'Does Deliver My Tune have Warner Music Group backing?', a: 'No. Deliver My Tune is an independent Indian distributor without any major label partnership. Western Beats is the only free Indian music distributor officially backed by Warner Music Group.' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <ComparisonPage
        competitorName="Deliver My Tune"
        competitorSlug="deliver-my-tune"
        tagline="Save ₹1,999+ per year — Western Beats is free"
        heroDesc="Deliver My Tune charges ₹1,999–5,999 per plan and keeps 15% of your royalties. Western Beats distributes to 150+ platforms for ₹0 forever, backed by Warner Music Group — the only free Indian distributor with major-label credibility."
        rows={ROWS}
        faqs={FAQS}
        verdict="Deliver My Tune is a solid Indian distributor but it charges ₹1,999+ per plan and takes 15% of your earnings. Western Beats matches or exceeds its platform coverage, goes live in 72 hours, costs ₹0 forever, and is backed by Warner Music Group. For independent Indian artists, Western Beats is the obvious choice."
      />
    </>
  )
}
