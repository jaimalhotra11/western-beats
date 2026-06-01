import type { Metadata } from 'next'
import RoyaltiesPage from './RoyaltiesPage'

export const metadata: Metadata = {
  title: 'Royalties & Payments | WB Digital: 70% to You, Every Month',
  description:
    'WB Digital pays 70% of all net streaming royalties directly to artists every month. 100% IP ownership always stays yours (T&C apply). Free ISRC and UPC codes. No upfront fees. We only earn when you earn.',
  keywords: [
    'music royalties India',
    '70% royalties music distribution',
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
    title: 'WB Digital Royalties: 70% to You, Every Month',
    description:
      'WB Digital pays 70% of net streaming royalties directly to artists monthly. 100% IP ownership. Free ISRC and UPC. Zero upfront fees. We only earn when you earn.',
    url: 'https://westernbeats.com/royalties',
    siteName: 'WB Digital: Western Beats',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WB Digital: 70% Royalties to Artists, Every Month',
    description:
      'Transparent 70/30 royalty split. Monthly payments directly to your bank. 100% IP ownership. Free ISRC and UPC. No upfront fees.',
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
            text: 'WB Digital pays 70% of all net streaming royalties to artists every month. WB retains 30% as a Distribution Fee. There are no upfront charges — WB only earns a share when you earn.',
          },
        },
        {
          '@type': 'Question',
          name: 'When does WB Digital pay royalties?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WB Digital pays within 30 days of receiving a valid invoice from you. YouTube reports are issued after 2 months; OTT and other platform reports are issued quarterly. After receiving your report, you raise an invoice and WB pays within 30 days.',
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
