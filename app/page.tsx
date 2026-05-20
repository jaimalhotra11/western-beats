import type { Metadata } from 'next'
import ScrollProgress  from './components/ScrollProgress'
import Loader          from './components/Loader'
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
  title: "Western Beats — India's #1 Music Company | Free Distribution via WB Digital · Warner Music India",
  description:
    "Western Beats is India's #1 full-service music company, officially backed by Warner Music India. " +
    "Distribute music FREE via WB Digital to 150+ platforms — JioSaavn, Gaana, Spotify, Apple Music. " +
    "Keep 75% royalties on every stream — we only take 25% when you earn. Better than DistroKid, TuneCore, CD Baby, Ditto Music & Believe.",
  keywords: [
    'Western Beats', 'Western Beats music', 'Western Beats India',
    'WB Digital', 'WB Digital distribution', 'Western Beats Private Limited',
    'music distribution India', 'free music distribution India',
    'Warner Music India', 'Warner Music India distribution partner',
    'best music company India', 'India music distribution',
    'JioSaavn distribution', 'Gaana music distribution',
    'Spotify distribution India', 'Apple Music distribution India',
    '75% royalties music distribution India', 'free music distribution 150 platforms',
    'DistroKid alternative India', 'TuneCore alternative India',
    'CD Baby alternative India', 'music distribution 48 hours',
    'independent music India', 'indie artist India',
    'music label India', 'music production India',
    'talent management India', 'event management music India',
    'Haryanvi music distribution', 'Punjabi music distribution',
  ],
  alternates: { canonical: 'https://westernbeats.com' },
  openGraph: {
    title: "Western Beats — India's #1 Music Company | WB Digital · Warner Music India",
    description: "India's most credible full-service music company. Free distribution via WB Digital to 150+ platforms. Warner Music India backed. Keep 75% royalties on every stream.",
    url: 'https://westernbeats.com',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Western Beats — India's #1 Music Company | WB Digital",
    description: "Free music distribution to 150+ platforms. Warner Music India backed. 75% royalties to you. India's best.",
    site: '@wb_digital_',
  },
}

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Loader />
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
