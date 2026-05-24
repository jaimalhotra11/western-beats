import type { Metadata } from 'next'
import PrivacyPage from './PrivacyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | WB Digital: Western Beats Private Limited',
  description: 'Privacy Policy for WB Digital by Western Beats Private Limited. How we collect, use, and protect your personal data.',
}

export default function Privacy() {
  return <PrivacyPage />
}
