import type { Metadata } from 'next'
import PrivacyPage from './PrivacyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | Western Beats Private Limited',
  description: 'Privacy Policy for Western Beats Private Limited. How we collect, use, and protect your personal data.',
}

export default function Privacy() {
  return <PrivacyPage />
}
