import type { Metadata } from 'next'
import ComparisonPage from '../ComparisonPage'

export const metadata: Metadata = {
  title: 'RouteNote vs Western Beats 2026 | India — 15% Commission vs ₹0',
  description: "RouteNote vs Western Beats: RouteNote\'s free plan takes 15% of your streaming royalties forever. Western Beats is truly free — ₹0 upfront, 150+ platforms including JioSaavn and Gaana, caller tune support, and officially backed by Warner Music Group. Best RouteNote India alternative.",
  keywords: [
    'RouteNote vs Western Beats',
    'RouteNote alternative India',
    'RouteNote 15% commission alternative',
    'better than RouteNote India',
    'RouteNote free plan India review',
    'RouteNote India competitor',
    'free RouteNote alternative India',
    'switch from RouteNote India',
    'RouteNote JioSaavn India',
    'truly free music distribution India no commission',
    'RouteNote 15 percent alternative',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/compare/routenote-vs-western-beats' },
  openGraph: {
    title: 'RouteNote vs Western Beats India 2026 — Truly Free vs 15% Cut',
    description: "RouteNote takes 15% of your royalties forever. Western Beats is truly free — ₹0 and WMG backed.",
    url: 'https://www.westernbeats.com/compare/routenote-vs-western-beats',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'RouteNote vs Western Beats India 2026', description: "RouteNote takes 15% forever. Western Beats: ₹0 + WMG backed + 150 platforms.", site: '@wb_digital_' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is RouteNote really free for Indian artists?', acceptedAnswer: { '@type': 'Answer', text: "RouteNote\'s free plan charges no upfront fee but permanently takes 15% of all your streaming and download royalties. If your music earns ₹1,00,000, RouteNote keeps ₹15,000 — every year, forever. Western Beats is genuinely free: ₹0 upfront, with our revenue model detailed transparently in T&C. We only earn when you earn." } },
    { '@type': 'Question', name: 'Does RouteNote cover JioSaavn and Gaana?', acceptedAnswer: { '@type': 'Answer', text: 'RouteNote has limited Indian platform support. It does not prioritize JioSaavn, Gaana, or caller tune distribution the way Western Beats does. For Indian artists, Western Beats is the superior choice with India-first distribution backed by Warner Music Group.' } },
  ],
}

const ROWS = [
  { feature: 'Upfront Fee', wb: '₹0', competitor: '₹0 (but commissions apply)', wbWins: false },
  { feature: 'Commission on Royalties', wb: 'Transparent — T&C apply', competitor: '15% of ALL earnings, forever', wbWins: true },
  { feature: 'JioSaavn Priority', wb: '✓ India-First', competitor: '⚠ Limited', wbWins: true },
  { feature: 'Gaana Priority', wb: '✓ India-First', competitor: '⚠ Limited', wbWins: true },
  { feature: 'Caller Tune (CRBT)', wb: '✓ All networks', competitor: '✗ Not available', wbWins: true },
  { feature: 'Warner Music Group Backing', wb: '✓ Official Partner', competitor: '✗ None', wbWins: true },
  { feature: 'India Support', wb: '✓ Hindi + English, India team', competitor: '✗ UK-based, no India focus', wbWins: true },
  { feature: 'Go-Live Time', wb: '72 hours', competitor: '5–10 days', wbWins: true },
  { feature: 'Platforms', wb: '150+', competitor: '40+', wbWins: true },
  { feature: 'IP Ownership', wb: '100% Always', competitor: '100%', wbWins: false },
]

const FAQS = [
  { q: "Is RouteNote\'s free plan actually free?", a: "No — not in the way that matters. RouteNote charges no upfront fee but permanently takes 15% of all your streaming royalties, download income, and Content ID payments, forever. If your music earns ₹1 lakh in streams over your career, RouteNote keeps ₹15,000. Western Beats' revenue model is clearly stated in our T&C, and we only earn when you earn." },
  { q: 'How many platforms does RouteNote cover in India?', a: 'RouteNote covers approximately 40 platforms with limited Indian platform priority. Western Beats covers 150+ platforms with an India-first approach — JioSaavn, Gaana, Wynk, Hungama, and all caller tune networks as priorities.' },
  { q: 'Is there a better free alternative to RouteNote for Indian artists?', a: 'Yes — Western Beats. It covers 150+ platforms (vs RouteNote\'s 40), does not take a blanket 15% commission, prioritizes JioSaavn and Gaana, covers caller tunes, and is officially backed by Warner Music Group. It is unambiguously the best free option for Indian artists.' },
  { q: 'Can I switch from RouteNote to Western Beats?', a: 'Yes, for free. Contact contact@westernbeats.com. Your existing streams and charts are preserved and your catalog moves seamlessly.' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <ComparisonPage
        competitorName="RouteNote"
        competitorSlug="routenote"
        tagline="RouteNote takes 15% of your earnings forever — Western Beats doesn't"
        heroDesc="RouteNote markets itself as 'free' but permanently takes 15% of every rupee you earn from streaming. Western Beats is genuinely aligned with your success — ₹0 upfront, 150+ platforms including all Indian stores, and backed by Warner Music Group."
        rows={ROWS}
        faqs={FAQS}
        verdict="RouteNote is not truly free for Indian artists — their 15% permanent commission means they earn more from your music as it grows. Western Beats covers 3× more platforms, prioritizes JioSaavn and Gaana, supports caller tunes, and is backed by Warner Music Group. For serious Indian artists, the choice is clear."
      />
    </>
  )
}
