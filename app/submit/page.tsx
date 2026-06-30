import type { Metadata } from 'next'
import SubmitPage from './SubmitPage'

export const metadata: Metadata = {
  title: 'Submit Your Music Free — India Distribution to JioSaavn, Spotify & 150+ Platforms | Western Beats',
  description:
    'Submit your music to Western Beats for free distribution to 150+ streaming platforms: JioSaavn, Gaana, Spotify, Apple Music & more. Go live in 72 hours. Keep 100% ownership of your masters. Backed by Warner Music India Partner. Start today, ₹0 upfront.',
  keywords: [
    'submit music Western Beats',
    'submit music India free',
    'upload music for distribution India',
    'how to submit music JioSaavn',
    'music distribution submission India',
    'submit music Spotify India free',
    'Western Beats music submission',
    'Western Beats submit music',
    'distribute my music India',
    'music upload India free distribution',
    'indie artist music submission India',
    'Warner Music India Partner submit music',
    'submit song for streaming India',
  ],
  alternates: { canonical: 'https://westernbeats.com/submit' },
  openGraph: {
    title: 'Submit Your Music Free: Western Beats | Western Beats',
    description: 'Submit your music for free distribution to 150+ platforms in 72 hours. 100% ownership. Warner Music Partner backed. ₹0 upfront.',
    url: 'https://westernbeats.com/submit',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Submit Your Music to Western Beats | Western Beats',
    description: '150+ platforms in 72 hours. 100% ownership. Free forever. Backed by Warner Music India Partner.',
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
      name: 'Submit Your Music: Western Beats Free Distribution',
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
      name: 'Submit Your Music to Western Beats',
      description: 'Submit your music to Western Beats for free distribution to 150+ streaming platforms. Respond within 24 hours.',
      url: 'https://westernbeats.com/submit',
      mainEntity: {
        '@type': 'Organization',
        name: 'Western Beats',
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
