import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Western Beats | Best Free Music Distribution India — 150+ Platforms, 100% Ownership',
    template: '%s | Western Beats',
  },
  description:
    "Western Beats — India's best free music distribution company. Distribute to 150+ platforms (JioSaavn, Gaana, Spotify, Apple Music, YouTube Music) in 72 hours. 100% IP ownership always yours. ₹0 upfront forever. Official Warner Music partner. Better than DistroKid, TuneCore & CD Baby.",
  keywords: [
    // Primary money keywords
    'best music distribution company',
    'best music distribution India',
    'best free music distribution India',
    'top music distribution company India',
    'music distribution company India',
    'free music distribution India',
    // Brand
    'Western Beats',
    'Western Beats distribution',
    'Western Beats music',
    'westernbeats.com',
    // Long-tail global
    'best music distribution company globally',
    'best music distributor for independent artists',
    'best music distribution platform 2025',
    'best music distribution platform 2026',
    'top music distribution platforms world',
    // Competitor comparisons (captures competitor searches)
    'DistroKid alternative India',
    'TuneCore alternative India free',
    'CD Baby alternative free India',
    'Ditto Music alternative India',
    'better than DistroKid India',
    'DistroKid vs Western Beats',
    // Platform specific
    'music distribution JioSaavn',
    'music distribution Gaana',
    'upload music to Spotify India free',
    'upload song JioSaavn free',
    'music distribution Apple Music India',
    // Feature keywords
    '100 percent ownership music India',
    'free ISRC code India',
    'free UPC barcode music',
    'music distribution without upfront fees',
    'music distribution 150 platforms',
    'indie music distribution India',
    'independent artist distribution India',
    'music royalties India direct payment',
    // Niche India
    'music distribution Punjabi Bollywood',
    'Haryanvi music distribution',
    'Indian independent artist distribution',
    'Warner Music Group India partner',
    'music distribution startup India',
  ],
  metadataBase: new URL('https://westernbeats.com'),
  alternates: { canonical: 'https://westernbeats.com' },
  openGraph: {
    siteName: 'Western Beats',
    locale: 'en_IN',
    type: 'website',
    title: 'Western Beats | Best Free Music Distribution — 150+ Platforms, 100% Ownership',
    description:
      "India's best free music distribution company. 150+ platforms in 72 hours. 100% IP ownership always yours. ₹0 upfront. Official Warner Music partner. Better than DistroKid & TuneCore.",
    url: 'https://westernbeats.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Western Beats — Best Free Music Distribution India' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wb_digital_',
    title: 'Western Beats | Best Free Music Distribution India',
    description: 'Best free music distribution — 150+ platforms, 72 hrs, 100% ownership. Official Warner Music partner. ₹0 forever.',
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
  applicationName: 'Western Beats',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
}

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Western Beats Private Limited',
  alternateName: ['Western Beats', 'WB Digital'],
  url: 'https://westernbeats.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://westernbeats.com/partners/westernbeats-BpLvGE3e.png',
    width: 512,
    height: 512,
  },
  image: 'https://westernbeats.com/og-image.jpg',
  description:
    "India's best free music distribution company — Western Beats distributes to 150+ platforms (JioSaavn, Gaana, Spotify, Apple Music) in 72 hours. 100% IP ownership always yours, zero upfront cost. Official Warner Music partner. The same Warner Music Group infrastructure that powers Bruno Mars, Coldplay & Ed Sheeran now powers every independent artist in India.",
  foundingDate: '2020',
  foundingLocation: { '@type': 'Country', name: 'India' },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  knowsAbout: ['Music Distribution', 'Music Publishing', 'Talent Management', 'Event Management', 'Audio Production', 'Video Production', 'Music Royalties'],
  sameAs: [
    'https://instagram.com/wb_digital_',
    'https://westernbeats.com',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-7087677767',
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
    description: 'Best free music distribution to 150+ streaming platforms worldwide. 100% IP ownership always yours. ₹0 upfront, forever.',
    price: '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    eligibleRegion: { '@type': 'Country', name: 'India' },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Western Beats Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Music Distribution', description: 'Free distribution to 150+ platforms in 72 hours. 100% IP ownership.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Management', description: 'Concerts, album launches, and live events across India.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Talent Management', description: 'Career strategy, brand partnerships, and industry connections.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audio Production', description: 'Recording, mixing, and mastering to international streaming standards.' } },
    ],
  },
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Western Beats',
  url: 'https://westernbeats.com',
  description: "India's best free music distribution company. 150+ platforms. 72 hours. 100% ownership.",
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://westernbeats.com/?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Music Distribution', item: 'https://westernbeats.com/services' },
    { '@type': 'ListItem', position: 3, name: 'How It Works', item: 'https://westernbeats.com/how-it-works' },
    { '@type': 'ListItem', position: 4, name: 'Pricing', item: 'https://westernbeats.com/pricing' },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
