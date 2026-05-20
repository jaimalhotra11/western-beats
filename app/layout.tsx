import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'WB Digital — Free Music Distribution India | Warner Music India Partner',
    template: '%s | WB Digital · Western Beats',
  },
  description:
    "WB Digital by Western Beats — India's #1 free music distribution platform, officially backed by Warner Music India. Distribute to JioSaavn, Gaana, Spotify, Apple Music & 150+ platforms. Keep 75% royalties. Zero upfront fee. Same label that powers Armaan Malik, Diljit Dosanjh, King & Darshan Raval.",
  keywords: [
    'free music distribution India',
    'WB Digital',
    'Western Beats digital',
    'music distribution JioSaavn',
    'music distribution Gaana',
    'Warner Music India distribution',
    'distribute music India free',
    'music royalties India',
    'independent artist distribution India',
    'DistroKid India alternative',
    'TuneCore India alternative',
    'upload music to Spotify India',
    'music distribution 150 platforms',
    'India music distributor',
    'best music distribution India 2025',
    'free ISRC code India',
  ],
  metadataBase: new URL('https://westernbeats.com'),
  alternates: { canonical: 'https://westernbeats.com' },
  openGraph: {
    siteName: 'WB Digital — Western Beats',
    locale: 'en_IN',
    type: 'website',
    title: 'WB Digital — Free Music Distribution | Warner Music India Partner',
    description:
      "India's #1 free music distribution. 150+ platforms, 75% royalties, 48-hour go-live. Official Warner Music India partner — same label as Armaan Malik, Diljit Dosanjh & King.",
    url: 'https://westernbeats.com',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wb_digital_',
    title: 'WB Digital — Free Music Distribution India',
    description: 'Distribute free to 150+ platforms. 75% royalties. Warner Music India backed. Live in 48 hours.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {},
  category: 'music',
}

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Western Beats / WB Digital',
  url: 'https://westernbeats.com',
  logo: 'https://westernbeats.com/wb-digital-logo.png',
  description:
    "India's #1 free music distribution platform, officially backed by Warner Music India. Distribute to 150+ platforms including JioSaavn, Gaana & Spotify. Keep 75% royalties with zero upfront cost.",
  foundingLocation: { '@type': 'Country', name: 'India' },
  knowsAbout: ['Music Distribution', 'Music Publishing', 'Artist Management', 'Event Management'],
  sameAs: ['https://instagram.com/wb_digital_'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@westernbeats.com',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'WB Digital — Western Beats',
  url: 'https://westernbeats.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://westernbeats.com/?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
