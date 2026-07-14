import type { Metadata } from 'next'
import ComparisonPage from '../ComparisonPage'

export const metadata: Metadata = {
  title: 'CD Baby vs Western Beats 2026',
  description: "CD Baby charges $9.99/release + 9% royalties forever. Western Beats is free, 100% ownership, JioSaavn + Gaana, WMG backed.",
  keywords: [
    'CD Baby vs Western Beats',
    'CD Baby alternative India',
    'better than CD Baby India',
    'CD Baby India price',
    'CD Baby JioSaavn India',
    'free CD Baby alternative India',
    'switch from CD Baby India',
    'CD Baby 9% royalty alternative',
    'CD Baby competitor India 2026',
    'CD Baby vs Indian distributor',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/compare/cd-baby-vs-western-beats' },
  openGraph: {
    title: 'CD Baby vs Western Beats India 2026',
    description: 'CD Baby takes $9.99/release + 9% of your royalties forever. Western Beats: ₹0 forever, 150+ platforms, WMG backed.',
    url: 'https://www.westernbeats.com/compare/cd-baby-vs-western-beats',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'CD Baby vs Western Beats 2026 India', description: 'CD Baby: $9.99 + 9% royalties. Western Beats: ₹0 forever + WMG backed.', site: '@wb_digital_' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Western Beats better than CD Baby for Indian artists?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. CD Baby charges $9.99 per single release plus takes 9% of all royalties forever. Western Beats is ₹0 upfront, ₹0 per release, and you keep your IP 100%. Western Beats also has a Warner Music Group partnership and India-first distribution to JioSaavn, Gaana, and all caller tune networks that CD Baby does not prioritize.' } },
    { '@type': 'Question', name: 'Does CD Baby distribute to JioSaavn and Gaana?', acceptedAnswer: { '@type': 'Answer', text: "CD Baby has no India-first strategy and limited priority on Indian platforms like JioSaavn and Gaana. For Indian artists, CD Baby's value proposition is weak compared to Western Beats which prioritizes all Indian stores first." } },
  ],
}

const ROWS = [
  { feature: 'Cost Per Release', wb: '₹0 Per Release', competitor: '$9.99 per single (~₹830)', wbWins: true },
  { feature: 'Royalty Cut', wb: 'Transparent — T&C apply', competitor: '9% of all royalties, forever', wbWins: true },
  { feature: 'Annual Fee', wb: 'None', competitor: 'None (but per-release fee)', wbWins: false },
  { feature: 'JioSaavn Priority', wb: '✓ India-First', competitor: '⚠ No priority', wbWins: true },
  { feature: 'Caller Tune (CRBT)', wb: '✓ All networks', competitor: '✗ Not available', wbWins: true },
  { feature: 'Warner Music Group Backing', wb: '✓ Official Partner', competitor: '✗ None', wbWins: true },
  { feature: 'India Support', wb: '✓ Hindi + English', competitor: '✗ US-focused', wbWins: true },
  { feature: 'Go-Live Time', wb: '72 hours', competitor: '5–7 days', wbWins: true },
  { feature: 'Total Platforms', wb: '150+', competitor: '150+', wbWins: false },
  { feature: 'IP Ownership', wb: '100% Always', competitor: '100%', wbWins: false },
]

const FAQS = [
  { q: 'How much does CD Baby cost vs Western Beats?', a: 'CD Baby charges $9.99 for each single and $29 for each album, plus takes 9% of all streaming royalties forever. If your song earns ₹10,000 in streams, CD Baby keeps ₹900. Over a career, this adds up significantly. Western Beats is ₹0 to distribute — we only earn via our revenue share model, and you keep your IP 100%.' },
  { q: 'Does CD Baby work well for Indian artists?', a: "CD Baby is a veteran US distributor with no India-first strategy. It doesn't prioritize JioSaavn, Gaana, or caller tune distribution. For Indian independent artists, Western Beats is the clear choice — India-built, ₹0 cost, WMG backed." },
  { q: 'Can I switch from CD Baby to Western Beats?', a: 'Yes. We help you migrate your catalog for free. Contact contact@westernbeats.com. Your streaming history stays intact on platforms that preserve it.' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <ComparisonPage
        competitorName="CD Baby"
        competitorSlug="cd-baby"
        tagline="CD Baby takes $9.99 per release + 9% of your earnings forever"
        heroDesc="CD Baby is a US veteran distributor but it costs $9.99 per release plus takes 9% of all streaming royalties — forever. Western Beats is ₹0 forever, covers all Indian platforms with priority, and is the only free distributor in India backed by Warner Music Group."
        rows={ROWS}
        faqs={FAQS}
        verdict="CD Baby's model made sense in 2005 when the alternatives were scarce. In 2026, for Indian artists, it doesn't. Paying $9.99 per release and giving away 9% of all earnings forever — when Western Beats offers full Indian + global distribution for free with WMG backing — is simply not the best choice."
      />
    </>
  )
}
