import type { Metadata } from 'next'
import CareersPage from './CareersPage'

export const metadata: Metadata = {
  title: 'Careers at Western Beats | Join India\'s Leading Music Company',
  description: 'Join Western Beats and help build the future of independent music in India. Open roles in operations, artist relations, marketing, and technology.',
}

export default function Careers() {
  return <CareersPage />
}
