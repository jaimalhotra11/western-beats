import type { Metadata } from 'next'
import SubmitPage from './SubmitPage'

export const metadata: Metadata = {
  title: 'Submit Your Music — Free Distribution to 150+ Platforms | WB Digital · Western Beats',
  description:
    'Submit your music to WB Digital for free distribution to 150+ streaming platforms — JioSaavn, Gaana, Spotify, Apple Music & more. Go live in 48 hours. Keep 75% royalties. Backed by Warner Music India. Start today — ₹0 upfront.',
  keywords: [
    'submit music WB Digital',
    'submit music India free',
    'upload music for distribution India',
    'how to submit music JioSaavn',
    'music distribution submission India',
    'submit music Spotify India free',
    'WB Digital music submission',
    'Western Beats submit music',
    'distribute my music India',
    'music upload India free distribution',
    'indie artist music submission India',
    'Warner Music India submit music',
    'submit song for streaming India',
  ],
  alternates: { canonical: 'https://westernbeats.com/submit' },
  openGraph: {
    title: 'Submit Your Music Free — WB Digital | Western Beats',
    description: 'Submit your music for free distribution to 150+ platforms in 48 hours. 75% royalties. Warner Music India backed. ₹0 upfront.',
    url: 'https://westernbeats.com/submit',
    siteName: 'Western Beats — WB Digital',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Submit Your Music to WB Digital | Western Beats',
    description: '150+ platforms in 48 hours. 75% royalties. Free forever. Backed by Warner Music India.',
    site: '@wb_digital_',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://westernbeats.com/submit#webpage',
      url: 'https://westernbeats.com/submit',
      name: 'Submit Your Music — WB Digital Free Distribution',
      isPartOf: { '@id': 'https://westernbeats.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Submit Music', item: 'https://westernbeats.com/submit' },
        ],
      },
    },
    {
      '@type': 'ContactPage',
      name: 'Submit Your Music to WB Digital',
      description: 'Submit your music to WB Digital for free distribution to 150+ streaming platforms. Respond within 24 hours.',
      url: 'https://westernbeats.com/submit',
      mainEntity: {
        '@type': 'Organization',
        name: 'WB Digital by Western Beats',
        email: 'contact@westernbeats.com',
        sameAs: ['https://instagram.com/wb_digital_'],
      },
    },
  ],
}

export default function Submit() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SubmitPage />
    </>
  )
}
