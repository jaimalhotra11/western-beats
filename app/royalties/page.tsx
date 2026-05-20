import type { Metadata } from 'next'
import RoyaltiesPage from './RoyaltiesPage'

export const metadata: Metadata = {
  title: 'Royalties & Payments | WB Digital — 75% to You, Always',
  description: 'WB Digital pays you 75% of all streaming royalties every month, directly to your bank account. Free ISRC and UPC generation included. No upfront fees.',
}

export default function Royalties() {
  return <RoyaltiesPage />
}
