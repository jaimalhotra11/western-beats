import type { Metadata } from 'next'
import RoyaltiesPage from './RoyaltiesPage'

export const metadata: Metadata = {
  title: 'Royalties & Payments | WB Digital: 75% to You, Always',
  description: 'WB Digital pays 75% royalties directly to artists every month. No hidden fees, no delays. See how our transparent 75/25 split works, when you get paid, and how free ISRC and UPC codes are included.',
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
  ],
  alternates: { canonical: 'https://westernbeats.com/royalties' },
  openGraph: {
    title: 'WB Digital Royalties: 75% to You, Every Month',
    description: 'WB Digital pays 75% royalties directly to artists every month. Transparent 75/25 split. Free ISRC and UPC. No upfront fees. We only earn when you earn.',
    url: 'https://westernbeats.com/royalties',
    siteName: 'WB Digital: Western Beats',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WB Digital: 75% Royalties to Artists, Every Month',
    description: 'Transparent 75/25 royalty split. Monthly payments directly to your bank. Free ISRC and UPC. No upfront fees.',
    site: '@wb_digital_',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Royalties', item: 'https://westernbeats.com/royalties' },
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
