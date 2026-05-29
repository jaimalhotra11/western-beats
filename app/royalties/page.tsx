import type { Metadata } from 'next'
import RoyaltiesPage from './RoyaltiesPage'

export const metadata: Metadata = {
  title: 'Royalties & Payments | WB Digital: 75% to You, Every Month',
  description:
    'WB Digital pays 75% of all net streaming royalties directly to artists every month. 100% IP ownership always stays yours (T&C apply). Free ISRC and UPC codes. No upfront fees. We only earn when you earn.',
  keywords: [
    'music royalties India',
    '75% royalties music distribution',
    'how music royalties work India',
    'streaming royalties India',
    'music royalty payment India',
    'ISRC code free India',
    'UPC barcode free India',
    'WB Digital royalties',
    'Western Beats royalty split',
    'music earnings India streaming',
    'artist revenue share India',
    'monthly royalty payment India',
    'music distribution royalty India',
  ],
  alternates: { canonical: 'https://westernbeats.com/royalties' },
  openGraph: {
    title: 'WB Digital Royalties: 75% to You, Every Month',
    description:
      'WB Digital pays 75% of net streaming royalties directly to artists monthly. 100% IP ownership. Free ISRC and UPC. Zero upfront fees. We only earn when you earn.',
    url: 'https://westernbeats.com/royalties',
    siteName: 'WB Digital: Western Beats',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WB Digital: 75% Royalties to Artists, Every Month',
    description:
      'Transparent 75/25 royalty split. Monthly payments directly to your bank. 100% IP ownership. Free ISRC and UPC. No upfront fees.',
    site: '@wb_digital_',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
        { '@type': 'ListItem', position: 2, name: 'Royalties & Payments', item: 'https://westernbeats.com/royalties' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What percentage of royalties does WB Digital pay artists?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WB Digital pays 75% of all net streaming royalties to artists every month. WB retains 25% as a service fee. There are no upfront charges — WB only earns a share when you earn.',
          },
        },
        {
          '@type': 'Question',
          name: 'When does WB Digital pay royalties?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WB Digital processes royalty payments monthly, directly to your registered bank account. A minimum payout threshold of ₹500 applies. Balances below ₹500 roll over to the next cycle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WB Digital provide free ISRC and UPC codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WB Digital provides ISRC codes for every track and UPC barcodes for every release at no charge. These are industry-standard identifiers required for streaming platform distribution.',
          },
        },
      ],
    },
  ],
}

export default function Royalties() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <RoyaltiesPage />
    </>
  )
}
