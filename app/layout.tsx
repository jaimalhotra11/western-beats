import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'WB Digital: Free Music Distribution India | Warner Music India Partner',
    template: '%s | WB Digital · Western Beats',
  },
  description:
    "WB Digital by Western Beats, India's #1 free music distribution platform, officially backed by Warner Music India. Distribute to JioSaavn, Gaana, Spotify, Apple Music & 150+ platforms. Keep 100% royalties. Zero upfront fee. Same label that powers Diljit Dosanjh, King, Karan Aujla, Guru Randhawa & Darshan Raval.",
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
    'Ditto Music India alternative',
    'CD Baby India alternative',
    'upload music to Spotify India',
    'music distribution 150 platforms',
    'India music distributor',
    'best music distribution India 2025',
    'free ISRC code India',
    'free UPC barcode music India',
    'music distribution without upfront fees India',
    'upload song JioSaavn free',
    'music distribution Punjabi Bollywood',
    'Indian independent artist distribution',
    'Warner Music Group India partner',
  ],
  metadataBase: new URL('https://westernbeats.com'),
  alternates: { canonical: 'https://westernbeats.com' },
  openGraph: {
    siteName: 'WB Digital: Western Beats',
    locale: 'en_IN',
    type: 'website',
    title: 'WB Digital: Free Music Distribution India | Warner Music India Partner',
    description:
      "India's #1 free music distribution. 150+ platforms, 100% royalties, 48-hr go-live. Official Warner Music India partner, same label as Diljit Dosanjh, King, Karan Aujla, Bruno Mars & Coldplay.",
    url: 'https://westernbeats.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'WB Digital: Western Beats Music Distribution' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wb_digital_',
    title: 'WB Digital: Free Music Distribution India | Warner Music India Partner',
    description: 'Distribute free to 150+ platforms. 100% royalties. Warner Music India backed. Live in 48-72 hours. Same label as Diljit Dosanjh & King.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {},
  category: 'music',
  authors: [{ name: 'Western Beats Private Limited', url: 'https://westernbeats.com' }],
  creator: 'Western Beats Private Limited',
  publisher: 'Western Beats Private Limited',
  applicationName: 'WB Digital',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
}

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Western Beats Private Limited',
  alternateName: 'WB Digital',
  url: 'https://westernbeats.com',
  logo: 'https://westernbeats.com/wb-digital-logo.png',
  image: 'https://westernbeats.com/og-image.jpg',
  description:
    "India's #1 free music distribution platform, officially backed by Warner Music India, home to Diljit Dosanjh, King, Karan Aujla, Guru Randhawa & Darshan Raval. Distribute to 150+ platforms including JioSaavn, Gaana & Spotify. Keep 100% royalties with zero upfront cost. The same Warner Music Group infrastructure that powers Bruno Mars, Coldplay & Ed Sheeran now powers your independent music career.",
  foundingDate: '2020',
  foundingLocation: { '@type': 'Country', name: 'India' },
  areaServed: { '@type': 'Country', name: 'India' },
  knowsAbout: ['Music Distribution', 'Music Publishing', 'Talent Management', 'Event Management', 'Audio Production', 'Video Production'],
  sameAs: [
    'https://instagram.com/wb_digital_',
    'https://westernbeats.com',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9319910662',
    email: 'contact@westernbeats.com',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  memberOf: {
    '@type': 'Organization',
    name: 'Warner Music India',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Warner Music Group',
      url: 'https://www.wmg.com',
    },
  },
  offers: {
    '@type': 'Offer',
    name: 'Free Music Distribution',
    description: 'Distribute your music to 150+ streaming platforms worldwide for free. Keep 100% of all royalties.',
    price: '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
  },
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'WB Digital: Western Beats',
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
        <link rel="preconnect" href="https://www.wmg.com" />
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
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
