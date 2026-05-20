import type { Metadata } from 'next'
import WMIPartnershipPage from './WMIPartnershipPage'

export const metadata: Metadata = {
  title: 'Warner Music India Partnership | WB Digital by Western Beats',
  description: 'WB Digital is India\'s only free music distributor backed by Warner Music India. Understand what this exclusive partnership means for your music career.',
}

export default function WMIPartnership() {
  return <WMIPartnershipPage />
}
