import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Western Beats | Best Free Music Distribution India — 150+ Platforms, 100% Ownership',
    template: '%s | Western Beats',
  },
  description:
    "Western Beats — India's best free music distribution company. Distribute to 150+ platforms (JioSaavn, Gaana, Spotify, Apple Music, YouTube Music) in 72 hours. 100% IP ownership always yours. ₹0 upfront forever. Official Warner Music India Partner. Better than DistroKid, TuneCore & CD Baby.",
  keywords: [
    // ── Primary money keywords ─────────────────────────────────────────────
    'best music distribution company',
    'best music distribution India',
    'best free music distribution India',
    'top music distribution company India',
    'music distribution company India',
    'free music distribution India',
    'best music distribution company globally',
    'best music distributor for independent artists',
    'best music distribution platform 2026',
    'top music distribution platforms world',
    // ── Brand ─────────────────────────────────────────────────────────────
    'Western Beats',
    'Western Beats distribution',
    'Western Beats music',
    'Western Beats Private Limited',
    'westernbeats.com',
    // ── vs Competitors — HIGH INTENT (these alone drive traffic) ──────────
    'DistroKid alternative India',
    'DistroKid vs Western Beats',
    'better than DistroKid India',
    'TuneCore alternative India free',
    'TuneCore vs Western Beats',
    'CD Baby alternative free India',
    'CD Baby vs Western Beats',
    'Deliver My Tune alternative',
    'Deliver My Tune vs Western Beats',
    'ForeVision Digital alternative',
    'ForeVision vs Western Beats',
    'RouteNote alternative India',
    'RouteNote no commission alternative',
    'Ditto Music alternative India',
    'Believe distribution alternative India',
    'switch from DistroKid India',
    'switch from TuneCore India',
    'DistroKid no JioSaavn alternative',
    'TuneCore free plan no JioSaavn alternative',
    // ── Indian Platform Keywords ───────────────────────────────────────────
    'music distribution JioSaavn free',
    'music distribution Gaana free',
    'upload music JioSaavn free India',
    'upload song Gaana free India',
    'music distribution Apple Music India free',
    'Spotify distribution India free',
    'distribute music Wynk India',
    'distribute music Hungama India',
    // ── Caller Tune / CRBT — Unique Indian keyword ────────────────────────
    'caller tune distribution India',
    'CRBT distribution India free',
    'Jio caller tune music distribution',
    'Airtel Hello Tune distribution',
    'music distribution caller tune India free',
    // ── Feature keywords ───────────────────────────────────────────────────
    '100 percent ownership music India',
    'free ISRC code India',
    'free UPC barcode music India',
    'music distribution without upfront fees India',
    'music distribution 150 platforms free',
    'no commission music distribution India',
    'truly free music distribution India',
    'indie music distribution India',
    'independent artist distribution India',
    'music royalties India direct payment',
    'Warner Music Group partner India',
    // ── Niche India ────────────────────────────────────────────────────────
    'music distribution Punjabi Bollywood',
    'Haryanvi music distribution India',
    'Hindi music distribution India',
    'regional music distribution India',
    'Indian independent artist distribution',
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
      "India's best free music distribution company. 150+ platforms in 72 hours. 100% IP ownership always yours. ₹0 upfront. Official Warner Music India Partner. Better than DistroKid & TuneCore.",
    url: 'https://westernbeats.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Western Beats — Best Free Music Distribution India' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wb_digital_',
    title: 'Western Beats | Best Free Music Distribution India',
    description: 'Best free music distribution — 150+ platforms, 72 hrs, 100% ownership. Official Warner Music India Partner. ₹0 forever.',
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
  alternateName: ['Western Beats', 'WB'],
  url: 'https://westernbeats.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://westernbeats.com/partners/westernbeats-BpLvGE3e.png',
    width: 512,
    height: 512,
  },
  image: 'https://westernbeats.com/og-image.jpg',
  description:
    "India's best free music distribution company — Western Beats distributes to 150+ platforms (JioSaavn, Gaana, Spotify, Apple Music) in 72 hours. 100% IP ownership always yours, zero upfront cost. Official Warner Music India Partner. The same Warner Music Group infrastructure that powers Bruno Mars, Coldplay & Ed Sheeran now powers every independent artist in India.",
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
    name: 'Warner Music India Partner',
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
    { '@type': 'ListItem', position: 5, name: 'Compare Distributors', item: 'https://westernbeats.com/compare' },
  ],
}

/* ── SiteLinks Searchbox (helps Google show search in SERP) ──────────────── */
const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Western Beats',
  image: 'https://westernbeats.com/og-image.jpg',
  url: 'https://westernbeats.com',
  telephone: '+91-7087677767',
  email: 'contact@westernbeats.com',
  priceRange: '₹0',
  description: "India's best free music distribution company. Distribute to 150+ platforms free in 72 hours. 100% ownership.",
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 20.5937,
    longitude: 78.9629,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: ['https://instagram.com/wb_digital_', 'https://westernbeats.com'],
  hasMap: 'https://westernbeats.com/contact',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Free',
  areaServed: { '@type': 'Country', name: 'India' },
  serviceArea: { '@type': 'Country', name: 'India' },
}

const SITELINKS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://westernbeats.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://westernbeats.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Favicon / App Icons ─────────────────────────────── */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* ── Preconnects ─────────────────────────────────────── */}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITELINKS_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        {/* ── Google Analytics 4 ─────────────────────────── */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DHW25Y3R86" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DHW25Y3R86');
            `,
          }}
        />
        {/* ── Meta Pixel ──────────────────────────────────── */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '517991158551582');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=517991158551582&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
