import type { Metadata } from 'next'
import PressPage from './PressPage'

export const metadata: Metadata = {
  title: 'Press & Media | Western Beats',
  description: 'Press coverage, media mentions, and press kit downloads for Western Beats and Western Beats. India\'s most credible music distribution company, backed by Warner Music India.',
}

export default function Press() {
  return <PressPage />
}
