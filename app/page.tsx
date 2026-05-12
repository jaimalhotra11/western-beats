import type { Metadata } from 'next'
import Loader       from './components/Loader'
import Nav          from './components/Nav'
import Hero         from './components/Hero'
import About        from './components/About'
import Distribution from './components/Distribution'
import Services     from './components/Services'
import Stats        from './components/Stats'
import Artists      from './components/Artists'
import Partners     from './components/Partners'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export const metadata: Metadata = {
  title: 'WB Digital — Where Independent Meets Major | Western Beats',
  description:
    "India's most credible music distribution platform. Officially backed by Warner Music India. " +
    'Distribute to 150+ platforms worldwide. Keep 100% of your royalties. Free.',
  keywords: ['music distribution India','WB Digital','Western Beats','Warner Music India','free music distribution'],
  openGraph: {
    title: 'WB Digital — Where Independent Meets Major',
    description: "India's most credible music distribution platform. Backed by Warner Music India.",
    url: 'https://westernbeats.com',
    siteName: 'WB Digital',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main>
      <Loader />
      <Nav />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Distribution />
      <Stats />
      <Artists />
      <Contact />
      <Footer />
    </main>
  )
}
