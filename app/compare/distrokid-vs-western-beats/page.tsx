import type { Metadata } from 'next'
import ComparisonPage from '../ComparisonPage'

export const metadata: Metadata = {
  title: 'DistroKid vs Western Beats 2026 | Western Beats',
  description: "DistroKid charges $22.99/yr and misses JioSaavn/Gaana. Western Beats is ₹0 forever, WMG backed, 100% ownership.",
  keywords: [
    'DistroKid vs Western Beats',
    'DistroKid alternative India',
    'better than DistroKid India',
    'DistroKid India alternative free',
    'DistroKid vs Western Beats India 2026',
    'DistroKid JioSaavn India',
    'free DistroKid alternative India',
    'DistroKid no JioSaavn',
    'DistroKid vs Indian distributor',
    'DistroKid $22.99 alternative free India',
    'switch from DistroKid India',
    'DistroKid competitor India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/compare/distrokid-vs-western-beats' },
  openGraph: {
    title: 'DistroKid vs Western Beats 2026 — India Winner: Western Beats',
    description: 'Western Beats beats DistroKid for Indian artists: ₹0 forever vs $22.99/yr, JioSaavn + Gaana + caller tunes, Warner Music Group backing. No contest.',
    url: 'https://www.westernbeats.com/compare/distrokid-vs-western-beats',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630, alt: 'DistroKid vs Western Beats India' }],
  },
  twitter: { card: 'summary_large_image', title: 'DistroKid vs Western Beats 2026 | India', description: 'Western Beats wins: ₹0 forever, JioSaavn + Gaana, WMG backed. DistroKid charges $22.99/yr.', site: '@wb_digital_' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.westernbeats.com/compare/distrokid-vs-western-beats#webpage',
      url: 'https://www.westernbeats.com/compare/distrokid-vs-western-beats',
      name: 'DistroKid vs Western Beats 2026 India Comparison',
      isPartOf: { '@id': 'https://www.westernbeats.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.westernbeats.com/compare' },
          { '@type': 'ListItem', position: 3, name: 'DistroKid vs Western Beats', item: 'https://www.westernbeats.com/compare/distrokid-vs-western-beats' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is Western Beats better than DistroKid for Indian artists?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats is purpose-built for India while DistroKid is US-focused. Western Beats distributes to JioSaavn, Gaana, and all Indian platforms with caller tune (CRBT) support. It costs ₹0 forever vs DistroKid\'s $22.99/year. Western Beats is also officially backed by Warner Music Group — no independent distributor in India has this credibility.' } },
        { '@type': 'Question', name: 'Does DistroKid distribute to JioSaavn and Gaana?', acceptedAnswer: { '@type': 'Answer', text: 'DistroKid has limited Indian platform coverage and does not prioritize JioSaavn, Gaana, or caller tune distribution — the top priority stores for Indian artists. Western Beats distributes to all Indian platforms first, plus 150+ global platforms, all free.' } },
        { '@type': 'Question', name: 'How much does DistroKid cost vs Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'DistroKid costs $22.99/year (Musician plan) with no end date — you pay every year or your music gets removed. Western Beats is ₹0 upfront, ₹0 per release, ₹0 annual fee, forever. We only earn when you earn.' } },
        { '@type': 'Question', name: 'Can I switch from DistroKid to Western Beats?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Contact us at contact@westernbeats.com or DM @wb_digital_ on Instagram. Our team will guide you through the migration process completely free. Your UPC/ISRC codes transfer seamlessly.' } },
      ],
    },
  ],
}

const ROWS = [
  { feature: 'Upfront Cost', wb: '₹0 Forever', competitor: '$22.99/year (~₹1,900/yr)', wbWins: true },
  { feature: 'Annual Renewal Fee', wb: 'None — Ever', competitor: 'Yes — Music removed if unpaid', wbWins: true },
  { feature: 'JioSaavn Distribution', wb: '✓ Priority', competitor: '⚠ Limited', wbWins: true },
  { feature: 'Gaana Distribution', wb: '✓ Priority', competitor: '⚠ Limited', wbWins: true },
  { feature: 'Caller Tune (CRBT)', wb: '✓ Jio, Airtel, Vi, BSNL', competitor: '✗ Not available', wbWins: true },
  { feature: 'Total Platforms', wb: '150+', competitor: '150+', wbWins: false },
  { feature: 'IP Ownership', wb: '100% Always Yours', competitor: '100%', wbWins: false },
  { feature: 'Warner Music Group Backing', wb: '✓ Official Partner', competitor: '✗ None', wbWins: true },
  { feature: 'India-First Support', wb: '✓ Hindi + English', competitor: '✗ US-focused', wbWins: true },
  { feature: 'Go-Live Time', wb: '72 hours', competitor: '3–7 days avg', wbWins: true },
  { feature: 'Free ISRC / UPC', wb: '✓ Free', competitor: '✓ Free', wbWins: false },
  { feature: 'Music Removal Risk', wb: 'None — Your music stays forever', competitor: 'Yes — If annual fee lapses', wbWins: true },
]

const FAQS = [
  { q: 'Is Western Beats better than DistroKid for Indian artists?', a: 'Yes. Western Beats is purpose-built for India — JioSaavn, Gaana, caller tunes, India-first support in Hindi and English. DistroKid is a US-first product that added Indian platforms later. Western Beats is also Warner Music Group backed and completely free, while DistroKid charges $22.99/year and removes your music if you stop paying.' },
  { q: 'Does DistroKid distribute to JioSaavn and Gaana?', a: 'DistroKid has limited, non-priority coverage of Indian platforms. It does not support caller tune (CRBT) distribution to Jio, Airtel, Vi, or BSNL. For Indian artists, this is a major gap — caller tunes are a significant revenue stream in India.' },
  { q: 'What happens to my DistroKid music if I switch to Western Beats?', a: 'Your music continues to stream uninterrupted. We help you move your catalog over, keep the same ISRCs where possible, and distribute to all Indian platforms and 150+ global stores through Western Beats — all free.' },
  { q: "Why is Western Beats free while DistroKid charges $22.99/year?", a: "Western Beats earns when you earn — we take a small revenue share after streaming income is generated. This aligns our incentives completely with yours. DistroKid charges upfront regardless of whether your music earns anything. For 90%+ of independent artists, Western Beats' model means zero lifetime cost." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <ComparisonPage
        competitorName="DistroKid"
        competitorSlug="distrokid"
        tagline="The clear winner for Indian artists in 2026"
        heroDesc="DistroKid charges $22.99/year and removes your music if you stop paying. Western Beats is ₹0 forever — backed by Warner Music Group, covers all Indian platforms including JioSaavn, Gaana, and caller tunes."
        rows={ROWS}
        faqs={FAQS}
        verdict="For Indian independent artists, the choice is straightforward. DistroKid is a US-built product that charges $22.99/year (₹1,900+) and doesn't prioritize Indian platforms. Western Beats is built for India, costs ₹0 forever, distributes to JioSaavn, Gaana, and all caller tune networks, and is the only free distributor in India backed by Warner Music Group. Switch to Western Beats today."
      />
    </>
  )
}
