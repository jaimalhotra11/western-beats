import type { Metadata } from 'next'
import HowItWorksPage from './HowItWorksPage'

export const metadata: Metadata = {
  title: 'How It Works: Free Music Distribution in 3 Steps | Western Beats',
  description:
    'See exactly how Western Beats works: Submit your music → We distribute to 150+ platforms in 72 hours → 100% IP ownership always yours, royalties paid directly to you. Free forever. Backed by Warner Music India. Faster than DistroKid, TuneCore & CD Baby.',
  keywords: [
    'how does Western Beats work',
    'how to distribute music India',
    'music distribution process India',
    'free music distribution steps',
    'how to upload music to JioSaavn',
    'how to get music on Spotify India free',
    'music distribution 48 hours India',
    'Warner Music India distribution process',
    'Western Beats how it works',
    'indie artist distribution guide India',
    'how to earn royalties India',
    '100 percent ownership music India',
    'how to distribute music free India',
    'Western Beats distribution process',
  ],
  alternates: { canonical: 'https://westernbeats.com/how-it-works' },
  openGraph: {
    title: 'How Western Beats Works: 3 Steps to Stream on 150+ Platforms | Western Beats',
    description: 'Submit → Distribute to 150+ platforms in 72 hrs → 100% ownership, royalties direct to you. Free forever. Backed by Warner Music India.',
    url: 'https://westernbeats.com/how-it-works',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Western Beats Works | Western Beats',
    description: '3 simple steps. 150+ platforms. 48 hours. 100% ownership. Free forever.',
    site: '@wb_digital_',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://westernbeats.com/how-it-works#webpage',
      url: 'https://westernbeats.com/how-it-works',
      name: 'How Western Beats Works: Free Music Distribution',
      isPartOf: { '@id': 'https://westernbeats.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://westernbeats.com/how-it-works' },
        ],
      },
    },
    {
      '@type': 'HowTo',
      name: 'How to Distribute Music Free with Western Beats',
      description: 'Distribute your music to 150+ streaming platforms for free in 3 easy steps with Western Beats.',
      totalTime: 'PT48H',
      supply: [{ '@type': 'HowToSupply', name: 'Your music track (WAV or MP3)' }, { '@type': 'HowToSupply', name: 'Album artwork (3000×3000px)' }],
      tool: [{ '@type': 'HowToTool', name: 'Western Beats Distribution Platform' }],
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Submit Your Music', text: 'Send your track, album artwork, ISRC code, and release details to Western Beats. Our team reviews everything within 24 hours.' },
        { '@type': 'HowToStep', position: 2, name: 'We Distribute', text: 'Western Beats delivers your music to all 150+ streaming platforms simultaneously, including JioSaavn, Gaana, Spotify, Apple Music, and YouTube Music. Live within 48 hours.' },
        { '@type': 'HowToStep', position: 3, name: 'Earn Your Royalties', text: 'Your royalties flow directly to your bank account. 100% IP ownership always yours. Western Beats only earns when you earn — zero upfront cost.' },
      ],
    },
  ],
}

export default function HowItWorks() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HowItWorksPage />
    </>
  )
}
