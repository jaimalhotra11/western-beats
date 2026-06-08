import type { Metadata } from 'next'
import ComparisonPage from '../ComparisonPage'

export const metadata: Metadata = {
  title: 'TuneCore vs Western Beats 2026 | India — Free vs ₹1,599/year',
  description: "TuneCore vs Western Beats India: TuneCore charges ₹1,599/year and its free plan doesn't cover JioSaavn or Gaana. Western Beats is completely free, covers all Indian platforms, has caller tune support, and is backed by Warner Music Group. Best TuneCore alternative in India 2026.",
  keywords: [
    'TuneCore vs Western Beats',
    'TuneCore alternative India',
    'TuneCore India alternative free',
    'better than TuneCore India',
    'TuneCore India price',
    'TuneCore JioSaavn India',
    'TuneCore free plan India',
    'switch from TuneCore India',
    'TuneCore vs Indian distributor',
    'TuneCore ₹1599 alternative',
    'TuneCore competitor India 2026',
  ],
  alternates: { canonical: 'https://westernbeats.com/compare/tunecore-vs-western-beats' },
  openGraph: {
    title: 'TuneCore vs Western Beats India 2026 — Western Beats Wins',
    description: "TuneCore's free plan excludes JioSaavn and Gaana. Western Beats is 100% free with full Indian platform coverage + WMG backing.",
    url: 'https://westernbeats.com/compare/tunecore-vs-western-beats',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630, alt: 'TuneCore vs Western Beats India' }],
  },
  twitter: { card: 'summary_large_image', title: 'TuneCore vs Western Beats 2026 India', description: "TuneCore free plan doesn't include JioSaavn. Western Beats: 100% free + all Indian platforms.", site: '@wb_digital_' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://westernbeats.com/compare/tunecore-vs-western-beats',
      name: 'TuneCore vs Western Beats 2026 India',
      isPartOf: { '@id': 'https://westernbeats.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://westernbeats.com/compare' },
          { '@type': 'ListItem', position: 3, name: 'TuneCore vs Western Beats', item: 'https://westernbeats.com/compare/tunecore-vs-western-beats' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does TuneCore free plan include JioSaavn and Gaana?', acceptedAnswer: { '@type': 'Answer', text: "No. TuneCore's free 'New Artist' plan only distributes to social media platforms (Facebook, Instagram, TikTok, YouTube) and keeps 20% of revenue. To distribute to Spotify, Apple Music, JioSaavn, or Gaana you need a paid plan starting at ₹1,599/year. Western Beats distributes to all 150+ platforms including all Indian stores for ₹0 — completely free." } },
        { '@type': 'Question', name: 'Is Western Beats better than TuneCore for Indian artists?', acceptedAnswer: { '@type': 'Answer', text: "Yes. Western Beats distributes to JioSaavn, Gaana, Wynk, Hungama, and all caller tune networks for ₹0 forever. TuneCore charges ₹1,599/year minimum for real distribution. Western Beats is also officially backed by Warner Music Group, giving Indian artists unmatched credibility." } },
      ],
    },
  ],
}

const ROWS = [
  { feature: 'Price', wb: '₹0 Forever', competitor: '₹1,599/year (paid plan)', wbWins: true },
  { feature: 'Free Plan JioSaavn?', wb: '✓ Yes — Always', competitor: '✗ No (social only)', wbWins: true },
  { feature: 'Free Plan Gaana?', wb: '✓ Yes — Always', competitor: '✗ No', wbWins: true },
  { feature: 'Free Plan Spotify?', wb: '✓ Yes', competitor: '✗ No (paid required)', wbWins: true },
  { feature: 'Revenue Share (free tier)', wb: 'Transparent — T&C apply', competitor: 'Takes 20%', wbWins: true },
  { feature: 'Caller Tune (CRBT)', wb: '✓ All networks', competitor: '⚠ Limited', wbWins: true },
  { feature: 'Warner Music Group Backing', wb: '✓ Official Partner', competitor: '✗ None', wbWins: true },
  { feature: 'Go-Live Time', wb: '72 hours', competitor: '5–7 days', wbWins: true },
  { feature: 'India-First Support', wb: '✓ Hindi + English', competitor: '⚠ US-focused', wbWins: true },
  { feature: 'Total Platforms', wb: '150+', competitor: '150+', wbWins: false },
  { feature: 'IP Ownership', wb: '100% Always', competitor: '100%', wbWins: false },
]

const FAQS = [
  { q: "Does TuneCore's free plan distribute to JioSaavn and Gaana?", a: "No — this is TuneCore's biggest weakness for Indian artists. The free 'New Artist' plan only covers social platforms (Facebook/Instagram/TikTok/YouTube) and TuneCore keeps 20% of revenue. Real streaming distribution to JioSaavn, Gaana, Spotify, Apple Music requires a ₹1,599+/year paid plan. Western Beats gives you full distribution to all 150+ platforms including every Indian store for ₹0." },
  { q: 'How much does TuneCore India cost?', a: 'TuneCore India starts at ₹1,599/year for unlimited releases (paid plan). Their free tier excludes all major streaming platforms. Western Beats is ₹0 forever with no plan tiers — one plan, everything included.' },
  { q: 'Can I migrate my TuneCore catalog to Western Beats?', a: 'Yes, completely free. Contact contact@westernbeats.com and our team handles the migration, preserving your stream counts and ISRCs where possible.' },
  { q: 'Why is Western Beats free when TuneCore is paid?', a: "Western Beats earns only when you earn — we're aligned with your success. TuneCore charges upfront regardless. For most independent Indian artists who are growing their fanbase, Western Beats means zero cost to distribute to JioSaavn, Gaana, Spotify, and 150+ platforms." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <ComparisonPage
        competitorName="TuneCore"
        competitorSlug="tunecore"
        tagline="TuneCore's free plan doesn't even include JioSaavn or Gaana"
        heroDesc="TuneCore India starts at ₹1,599/year for real streaming distribution. Their free tier excludes Spotify, JioSaavn, and Gaana. Western Beats gives you all 150+ platforms — including every Indian store — for ₹0 forever, backed by Warner Music Group."
        rows={ROWS}
        faqs={FAQS}
        verdict="TuneCore is a reputable global distributor but it's not built for India. The free plan is practically useless for Indian artists (no JioSaavn, no Gaana, 20% cut). The paid plan at ₹1,599/year is unnecessary when Western Beats gives you everything — 150+ platforms, all Indian stores, caller tune support, and WMG backing — for ₹0 forever."
      />
    </>
  )
}
