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
  title: "Western Beats | Best Free Music Distribution Company — 150+ Platforms, 100% Ownership",
  description:
    "Western Beats — India's best free music distribution company. Distribute to 150+ platforms including JioSaavn, Gaana, Spotify & Apple Music in 72 hours. 100% IP ownership always yours. ₹0 upfront forever. Official Warner Music partner. The best alternative to DistroKid, TuneCore, CD Baby & Ditto Music.",
  keywords: [
    // Primary ranking targets
    'best music distribution company',
    'best music distribution company India',
    'best free music distribution',
    'top music distribution company',
    'best music distributor India',
    'Western Beats',
    'Western Beats music distribution',
    'Western Beats Private Limited',
    // Feature keywords
    'free music distribution India',
    'music distribution JioSaavn',
    'music distribution Gaana',
    'Spotify distribution India free',
    'Apple Music distribution India',
    '100% ownership music India',
    'music distribution 150 platforms',
    'free ISRC UPC India',
    // Competitor comparisons
    'DistroKid alternative India',
    'TuneCore alternative India',
    'CD Baby alternative India',
    'better than DistroKid',
    'DistroKid vs Western Beats',
    // Niche
    'Haryanvi music distribution',
    'Punjabi music distribution',
    'Bollywood music distribution',
    'independent artist India',
    'music distribution 72 hours India',
    'Warner Music partner India',
  ],
  alternates: { canonical: 'https://westernbeats.com' },
  openGraph: {
    title: "Western Beats | Best Free Music Distribution — 150+ Platforms, 100% Ownership",
    description: "India's best free music distribution. 150+ platforms in 72 hours. 100% IP ownership always yours. ₹0 upfront. Official Warner Music partner.",
    url: 'https://westernbeats.com',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Western Beats | Best Free Music Distribution Company",
    description: "Best free music distribution — 150+ platforms, 72 hrs, 100% ownership. Official Warner Music partner. ₹0 forever.",
    site: '@wb_digital_',
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
