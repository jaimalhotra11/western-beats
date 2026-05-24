import type { Metadata } from 'next'
import ArtistStoriesPage from './ArtistStoriesPage'

export const metadata: Metadata = {
  title: 'Artist Stories | WB Digital: Real Artists, Real Results',
  description: 'Read stories from independent Indian artists who have grown their careers using WB Digital. Real streams, real earnings, real results.',
}

export default function ArtistStories() {
  return <ArtistStoriesPage />
}
