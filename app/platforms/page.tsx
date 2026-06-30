import type { Metadata } from 'next'
import PlatformsPage from './PlatformsPage'

export const metadata: Metadata = {
  title: 'Platform Coverage | Western Beats: 150+ Streaming Platforms',
  description: 'Distribute your music to 150+ streaming platforms including JioSaavn, Gaana, Spotify, Apple Music and YouTube Music through Western Beats. Free distribution, India first, backed by Warner Music India Partner.',
  keywords: [
    'music distribution platforms India',
    'JioSaavn music distribution',
    'Gaana music distribution',
    'Spotify distribution India free',
    'Apple Music distribution India',
    'YouTube Music distribution India',
    'Western Beats platforms',
    '150+ streaming platforms India',
    'music distribution Hungama',
    'music distribution Wynk',
    'music distribution Resso India',
    'all streaming platforms India distribution',
    'global music distribution India',
  ],
  alternates: { canonical: 'https://westernbeats.com/platforms' },
  openGraph: {
    title: 'Western Beats: Distribute to 150+ Platforms, India First',
    description: 'Distribute your music to JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and 145+ more platforms. Free distribution with Warner Music India Partnership backing.',
    url: 'https://westernbeats.com/platforms',
    siteName: 'Western Beats',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Western Beats: 150+ Streaming Platforms, India First',
    description: 'JioSaavn, Gaana, Spotify, Apple Music, YouTube Music and 145+ more. Free distribution backed by Warner Music India Partner.',
    site: '@wb_digital_',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://westernbeats.com/platforms' },
  ],
}

export default function Platforms() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <PlatformsPage />
    </>
  )
}
