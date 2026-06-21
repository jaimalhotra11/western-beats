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
    "Western Beats distributes your music to JioSaavn, Gaana, Spotify, Apple Music, Jio Caller Tune and 150+ platforms free in 72 hours. ₹0 upfront, 100% IP ownership, free ISRC codes. Official Warner Music partner. The best alternative to DistroKid and TuneCore for Indian artists.",
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
    description: "Distribute to JioSaavn, Gaana, Spotify, Apple Music + Jio Caller Tune free in 72 hours. ₹0, 100% ownership, free ISRC. Warner Music Partner.",
    url: 'https://westernbeats.com',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Western Beats | Free Music Distribution India — JioSaavn, Gaana, Caller Tune",
    description: "JioSaavn + Gaana + Spotify + Caller Tune + 147 more. Free, 72 hours, 100% ownership. Warner Music Partner.",
    site: '@wb_digital_',
    images: ['/og-image.jpg'],
  },
}

export default function Home() {
  return (
    <main>
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
