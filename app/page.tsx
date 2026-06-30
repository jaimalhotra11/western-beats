import type { Metadata } from 'next'
import ScrollProgress  from './components/ScrollProgress'
import ClientLoader    from './components/ClientLoader'
import Nav             from './components/Nav'
import Hero            from './components/Hero'
import About           from './components/About'
import Distribution    from './components/Distribution'
import Services        from './components/Services'
import Stats           from './components/Stats'
import Artists         from './components/Artists'
import Partners        from './components/Partners'
import WMGCredibility  from './components/WMGCredibility'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

export const metadata: Metadata = {
  title: "Western Beats — Free Music Distribution India | JioSaavn, Gaana, Spotify in 72 Hours",
  description:
    "India's free music distributor. Get on JioSaavn, Gaana, Spotify, Apple Music & Jio Caller Tune in 72 hours — ₹0 forever. 150+ platforms, 100% ownership, free ISRC codes. Warner Music India Partner. Switch from DistroKid and start reaching 350M+ Indian listeners today.",
  keywords: [
    // Low-competition, high-intent — easier to rank for a new site
    'free music distribution India no subscription',
    'music distribution JioSaavn Gaana free',
    'upload music JioSaavn free India 2026',
    'distribute music India without annual fee',
    'music distribution without DistroKid India',
    'caller tune distribution India free',
    'CRBT music distribution India',
    'Jio caller tune music distribution',
    'Airtel Hello Tune distribution India',
    'free ISRC code India music',
    'free UPC barcode music India',
    'music distribution for independent artists India',
    'music distribution for beginners India',
    'Punjabi music distribution free India',
    'Bhojpuri music distribution India',
    'Haryanvi music distribution India',
    'Hindi song distribution India free',
    'distribute regional music India',
    'music distribution 72 hours India',
    'music distribution no annual fee India',
    // Brand
    'Western Beats',
    'Western Beats music distribution',
    'Western Beats Private Limited',
    'westernbeats.com',
    // Competition alt-keywords
    'DistroKid alternative India free',
    'TuneCore alternative India',
    'Deliver My Tune alternative',
    'switch from DistroKid India',
    // Platform specific
    'music distribution JioSaavn',
    'music distribution Gaana India',
    'Spotify distribution India free',
    'Apple Music distribution India',
    // Feature
    '100% ownership music India',
    'music distribution 150 platforms free',
    'Warner Music partner India distribution',
    'independent artist distribution India',
    'music distribution Warner Music Group India',
  ],
  alternates: { canonical: 'https://westernbeats.com' },
  openGraph: {
    title: "Western Beats — Free Music Distribution India | JioSaavn, Gaana, Spotify, Caller Tune",
    description: "Distribute to JioSaavn, Gaana, Spotify, Apple Music + Jio Caller Tune free in 72 hours. ₹0, 100% ownership, free ISRC. Warner Music India Partner.",
    url: 'https://westernbeats.com',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Western Beats | Free Music Distribution India — JioSaavn, Gaana, Caller Tune",
    description: "JioSaavn + Gaana + Spotify + Caller Tune + 147 more. Free, 72 hours, 100% ownership. Warner Music India Partner.",
    site: '@wb_digital_',
    images: ['/og-image.jpg'],
  },
}

const AGGREGATE_RATING_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Western Beats — Free Music Distribution India',
  description: "India's best free music distribution platform. Distribute to 150+ platforms in 72 hours. 100% ownership. Official Warner Music India Partner.",
  url: 'https://westernbeats.com',
  brand: { '@type': 'Brand', name: 'Western Beats' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '312',
    bestRating: '5',
    worstRating: '1',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    description: 'Free music distribution to 150+ platforms',
  },
}

const HOME_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Western Beats really free?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats is completely free — ₹0 upfront, no annual subscription, no per-release fee. We distribute your music to 150+ platforms including JioSaavn, Gaana, Spotify, Apple Music, and Jio Caller Tune at no cost.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take for my music to go live on JioSaavn and Spotify?',
      acceptedAnswer: { '@type': 'Answer', text: 'Your music goes live on JioSaavn, Gaana, Spotify, Apple Music, and all 150+ platforms within 72 hours of submission approval.' },
    },
    {
      '@type': 'Question',
      name: 'Does Western Beats distribute to JioSaavn?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats distributes to JioSaavn, Gaana, Wynk, Hungama, and all major Indian platforms — including Jio Caller Tune and Airtel Hello Tune. DistroKid and TuneCore do not include these Indian platforms.' },
    },
    {
      '@type': 'Question',
      name: 'Do I keep 100% ownership of my music?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats never takes any share of your intellectual property. 100% ownership of your music remains with you at all times. This is guaranteed in our distribution agreement.' },
    },
    {
      '@type': 'Question',
      name: 'Is Western Beats better than DistroKid for Indian artists?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — significantly so. DistroKid charges $22.99/year and does not distribute to JioSaavn, Gaana, or any Indian caller tune platform. Western Beats is free and covers every Indian platform including Jio CRBT.' },
    },
    {
      '@type': 'Question',
      name: 'Does Western Beats have a Warner Music Group partnership?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats is an official Warner Music Group partner in India — the only free music distributor in India with this partnership. This gives independent artists access to WMG\'s global infrastructure and editorial network.' },
    },
    {
      '@type': 'Question',
      name: 'Can I distribute Punjabi, Haryanvi, Bhojpuri, or Tamil music?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Western Beats supports all Indian languages and regional music including Punjabi, Haryanvi, Bhojpuri, Tamil, Telugu, Malayalam, Kannada, Bengali, Marathi, Gujarati, and more.' },
    },
    {
      '@type': 'Question',
      name: 'How do I get a free ISRC code for my song?',
      acceptedAnswer: { '@type': 'Answer', text: 'Western Beats provides free ISRC codes with every release. When you submit your music at westernbeats.com/submit, ISRC codes are automatically assigned to your tracks at no extra charge.' },
    },
  ],
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(AGGREGATE_RATING_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_FAQ_SCHEMA) }} />
      <ScrollProgress />
      <ClientLoader />
      <Nav />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Distribution />
      <Stats />
      <Artists />
      <WMGCredibility />
      <Contact />
      <Footer />
    </main>
  )
}
