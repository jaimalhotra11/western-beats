import type { Metadata } from 'next'
import PlatformsPage from './PlatformsPage'

export const metadata: Metadata = {
  title: 'Platform Coverage | WB Digital — 150+ Streaming Platforms',
  description: 'WB Digital distributes your music to 150+ platforms worldwide including JioSaavn, Gaana, Spotify, Apple Music, YouTube Music, Amazon Music, TikTok and more. India-first distribution.',
}

export default function Platforms() {
  return <PlatformsPage />
}
