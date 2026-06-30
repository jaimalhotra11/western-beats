import type { Metadata } from 'next'
import PrivacyPage from './PrivacyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | Western Beats',
  description: 'Western Beats Privacy Policy — how we collect, use, and protect your personal data. Free music distribution service. India\'s official Warner Music India Partner.',
  alternates: { canonical: 'https://westernbeats.com/privacy' },
  openGraph: {
    title: 'Privacy Policy | Western Beats',
    description: 'How Western Beats collects, uses, and protects your personal data.',
    url: 'https://westernbeats.com/privacy',
    siteName: 'Western Beats',
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function Privacy() {
  return <PrivacyPage />
}
