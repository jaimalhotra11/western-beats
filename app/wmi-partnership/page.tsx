import type { Metadata } from 'next'
import WMIPartnershipPage from './WMIPartnershipPage'

export const metadata: Metadata = {
  title: 'Warner Music India Partnership | Western Beats — Official Warner Music Partner India',
  description:
    "Western Beats is India's only free music distributor officially backed by Warner Music Group. Discover what this exclusive partnership means: major-label infrastructure, priority placement on Indian platforms, and global reach — all free for independent artists.",
  keywords: [
    'Warner Music Partner India',
    'Warner Music Group India distribution',
    'Western Beats Warner Music India Partnership',
    'official Warner Music Partner India',
    'major label distribution India free',
    'Warner Music Group independent artists India',
    'WMG backed music distributor India',
    'Warner Music Group music company India',
    'best Warner Music affiliated distributor India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/wmi-partnership' },
  openGraph: {
    title: "Western Beats × Warner Music: India's Only Free WMG-Backed Distributor",
    description:
      'Western Beats is officially backed by Warner Music Group — the same infrastructure behind Bruno Mars, Coldplay & Ed Sheeran, now available to every independent artist in India. Free.',
    url: 'https://www.westernbeats.com/wmi-partnership',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Western Beats × Warner Music Group Partnership',
    description:
      "India's only free music distributor backed by Warner Music Group. Major-label reach, zero upfront cost.",
    site: '@wb_digital_',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.westernbeats.com/wmi-partnership#webpage',
      url: 'https://www.westernbeats.com/wmi-partnership',
      name: 'Western Beats × Warner Music India Partnership',
      description:
        "Western Beats is India's only free music distributor officially backed by Warner Music Group.",
      isPartOf: { '@id': 'https://www.westernbeats.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Warner Music India Partnership', item: 'https://www.westernbeats.com/wmi-partnership' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Western Beats officially backed by Warner Music Group?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Western Beats Private Limited is an official Warner Music Group partner in India. This gives every Western Beats artist access to WMG's global distribution infrastructure, playlist editorial network, and major-label credibility — completely free of upfront charges.",
          },
        },
        {
          '@type': 'Question',
          name: 'What does the Warner Music India Partnership mean for my music?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The Warner Music India Partnership gives Western Beats priority placement on Indian streaming platforms like JioSaavn and Gaana, access to WMG's curator and editorial network, faster content processing (72 hours), and the credibility of being associated with the label behind Bruno Mars, Coldplay, and Ed Sheeran — all passed to independent artists at zero cost.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does any other free distributor in India have a Warner Music Group partnership?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Western Beats is currently the only free music distributor in India with an official Warner Music Group partnership. DistroKid, TuneCore, CD Baby, Ditto Music, and Believe do not have this partnership.',
          },
        },
      ],
    },
  ],
}

export default function WMIPartnership() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <WMIPartnershipPage />
    </>
  )
}
