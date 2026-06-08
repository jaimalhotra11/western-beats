import type { Metadata } from 'next'
import ContactPage from './ContactPage'

export const metadata: Metadata = {
  title: 'Contact Western Beats | Free Music Distribution Support India',
  description:
    'Contact Western Beats — India\'s best free music distribution company. Questions about distribution, royalties, events, or partnerships? We reply within 24 hours. Call +91-7087677767 or email contact@westernbeats.com.',
  keywords: [
    'contact Western Beats',
    'Western Beats support',
    'Western Beats phone number',
    'Western Beats email',
    'music distribution support India',
    'Western Beats customer service',
    'contact music distributor India',
    'Western Beats help',
  ],
  alternates: { canonical: 'https://westernbeats.com/contact' },
  openGraph: {
    title: 'Contact Western Beats | Free Music Distribution India',
    description: 'Get in touch — we reply within 24 hours. +91-7087677767 · contact@westernbeats.com',
    url: 'https://westernbeats.com/contact',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Western Beats | Music Distribution Support',
    description: 'Questions about distribution, royalties, or events? We reply within 24 hours.',
    site: '@wb_digital_',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://westernbeats.com/contact#webpage',
      url: 'https://westernbeats.com/contact',
      name: 'Contact Western Beats',
      isPartOf: { '@id': 'https://westernbeats.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://westernbeats.com/contact' },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://westernbeats.com/#organization',
      name: 'Western Beats Private Limited',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-7087677767',
          email: 'contact@westernbeats.com',
          contactType: 'customer support',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '10:00',
            closes: '20:00',
          },
        },
      ],
    },
  ],
}

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <ContactPage />
    </>
  )
}
