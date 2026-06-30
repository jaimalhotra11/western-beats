import type { Metadata } from 'next'
import PressPage from './PressPage'

export const metadata: Metadata = {
  title: 'Press & Media Kit | Western Beats — India Best Music Distribution Company',
  description:
    "Western Beats press room: media coverage, company facts, logo downloads, and press kit for India's best free music distribution company. Officially backed by Warner Music Group. Download high-res logos, brand assets, and company overview.",
  keywords: [
    'Western Beats press',
    'Western Beats media kit',
    'Western Beats news',
    'music distribution company press India',
    'Western Beats brand assets',
    'Western Beats logo download',
    'Indian music company media',
    'Warner Music India Partner press India',
    'Western Beats press release',
  ],
  alternates: { canonical: 'https://westernbeats.com/press' },
  openGraph: {
    title: 'Press & Media Kit | Western Beats',
    description: "Western Beats press room: media coverage, press kit, logos, and company facts. India's best free music distribution company, backed by Warner Music Group.",
    url: 'https://westernbeats.com/press',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Western Beats Press & Media Kit',
    description: "Media coverage, press kit, and brand assets for Western Beats — India's best free music distribution company.",
    site: '@wb_digital_',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://westernbeats.com/press#webpage',
  url: 'https://westernbeats.com/press',
  name: 'Press & Media Kit — Western Beats',
  description: "Western Beats press room. Media coverage and press kit for India's best free music distribution company.",
  isPartOf: { '@id': 'https://westernbeats.com/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
      { '@type': 'ListItem', position: 2, name: 'Press', item: 'https://westernbeats.com/press' },
    ],
  },
}

export default function Press() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <PressPage />
    </>
  )
}
