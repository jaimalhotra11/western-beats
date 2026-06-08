import type { Metadata } from 'next'
import CareersPage from './CareersPage'

export const metadata: Metadata = {
  title: "Careers at Western Beats | Join India's Best Music Distribution Company",
  description:
    "Join Western Beats Private Limited — India's best free music distribution company, officially backed by Warner Music Group. Open roles in artist relations, marketing, operations, and technology. Build the future of independent music in India.",
  keywords: [
    'careers at Western Beats',
    'jobs music company India',
    'Western Beats hiring',
    'music industry jobs India',
    'music distribution company jobs India',
    'Warner Music Group jobs India',
    'artist relations job India',
    'music startup jobs India',
  ],
  alternates: { canonical: 'https://westernbeats.com/careers' },
  openGraph: {
    title: "Careers at Western Beats | India's Best Music Company",
    description: "Join Western Beats — India's WMG-backed music distribution company. Roles in artist relations, marketing, tech, and operations.",
    url: 'https://westernbeats.com/careers',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Western Beats',
    description: "Build the future of independent music in India. Join Western Beats Private Limited.",
    site: '@wb_digital_',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://westernbeats.com/careers#webpage',
  url: 'https://westernbeats.com/careers',
  name: 'Careers at Western Beats',
  description: "Join Western Beats — India's best free music distribution company backed by Warner Music Group.",
  isPartOf: { '@id': 'https://westernbeats.com/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
      { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://westernbeats.com/careers' },
    ],
  },
}

export default function Careers() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <CareersPage />
    </>
  )
}
