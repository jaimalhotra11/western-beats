import type { Metadata } from 'next'
import ArtistStoriesPage from './ArtistStoriesPage'

export const metadata: Metadata = {
  title: 'Artist Stories | Western Beats — Real Indian Artists, Real Results',
  description:
    "Read success stories from independent Indian artists who distributed their music through Western Beats. Real streams, real earnings, 100% IP ownership, 72-hour go-live. See why India's top indie artists choose Western Beats over DistroKid and TuneCore.",
  keywords: [
    'Western Beats artist stories',
    'Indian artist music distribution success',
    'independent artist success India',
    'music distribution results India',
    'Indian indie artist streaming success',
    'Western Beats testimonials',
    'real artist music distribution India',
    'JioSaavn streams independent artist',
    'free music distribution success India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/artist-stories' },
  openGraph: {
    title: 'Artist Stories | Western Beats — Real Streams, Real Earnings',
    description: 'Independent Indian artists distributing through Western Beats. Real results on JioSaavn, Gaana, Spotify in 72 hours. 100% IP ownership.',
    url: 'https://www.westernbeats.com/artist-stories',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Artist Stories | Western Beats',
    description: 'Indie Indian artists sharing their music distribution journey. Real streams, real results.',
    site: '@wb_digital_',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.westernbeats.com/artist-stories#webpage',
  url: 'https://www.westernbeats.com/artist-stories',
  name: 'Artist Stories — Western Beats',
  description: 'Success stories from independent Indian artists who distributed through Western Beats.',
  isPartOf: { '@id': 'https://www.westernbeats.com/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
      { '@type': 'ListItem', position: 2, name: 'Artist Stories', item: 'https://www.westernbeats.com/artist-stories' },
    ],
  },
}

export default function ArtistStories() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <ArtistStoriesPage />
    </>
  )
}
