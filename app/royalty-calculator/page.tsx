import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RoyaltyCalculatorClient from './RoyaltyCalculatorClient'

export const metadata: Metadata = {
  title: 'Free Music Royalty Calculator India 2026 — Spotify, JioSaavn, YouTube | Western Beats',
  description: 'Calculate your estimated music royalties from Spotify, JioSaavn, Apple Music, YouTube Music, Gaana and more. Free streaming royalty calculator for Indian independent artists 2026.',
  keywords: [
    'music royalty calculator India',
    'streaming royalty calculator India 2026',
    'Spotify royalty calculator India',
    'JioSaavn royalty calculator',
    'how much does Spotify pay per stream India',
    'YouTube music royalty calculator India',
    'music streaming earnings calculator India',
    'how much do I earn from streams India',
    'music royalties India calculator free',
    'streaming income calculator India',
    'Apple Music royalty calculator India',
    'music distribution earnings India',
  ],
  alternates: { canonical: 'https://www.westernbeats.com/royalty-calculator' },
  openGraph: {
    title: 'Free Music Royalty Calculator India 2026 | Western Beats',
    description: 'Calculate streaming royalties from Spotify, JioSaavn, Apple Music, YouTube Music & more. Free tool for Indian independent artists.',
    url: 'https://www.westernbeats.com/royalty-calculator',
    siteName: 'Western Beats', type: 'website', locale: 'en_IN',
    images: [{ url: 'https://www.westernbeats.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_', title: 'Free Music Royalty Calculator India 2026 | Western Beats' },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://www.westernbeats.com/royalty-calculator',
      name: 'Free Music Royalty Calculator India 2026',
      description: 'Calculate streaming royalties from Spotify, JioSaavn, Apple Music, YouTube Music and more for Indian artists.',
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.westernbeats.com' },
        { '@type': 'ListItem', position: 2, name: 'Royalty Calculator', item: 'https://www.westernbeats.com/royalty-calculator' },
      ]},
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Western Beats Music Royalty Calculator',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      description: 'Free tool to calculate estimated music streaming royalties from Spotify, JioSaavn, Apple Music, YouTube Music, and other platforms for Indian independent artists.',
      url: 'https://www.westernbeats.com/royalty-calculator',
      provider: { '@type': 'Organization', name: 'Western Beats', url: 'https://www.westernbeats.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does Spotify pay per stream in India?', acceptedAnswer: { '@type': 'Answer', text: 'Spotify pays approximately $0.003–$0.005 per stream globally. For Indian streams specifically, the per-stream rate is typically $0.001–$0.003 due to lower subscription prices in India.' } },
        { '@type': 'Question', name: 'How much does JioSaavn pay per stream?', acceptedAnswer: { '@type': 'Answer', text: 'JioSaavn pays approximately ₹0.08–₹0.15 per stream (roughly $0.001–$0.002). Rates vary based on whether the stream is from a premium or free-tier user.' } },
        { '@type': 'Question', name: 'How much does YouTube Music pay per stream?', acceptedAnswer: { '@type': 'Answer', text: 'YouTube Music pays approximately $0.002–$0.004 per stream. YouTube Content ID (for all YouTube videos using your song) pays $0.001–$0.003 per view.' } },
        { '@type': 'Question', name: 'How many streams do I need to earn ₹1 lakh?', acceptedAnswer: { '@type': 'Answer', text: 'On Spotify, you need approximately 500,000–1,000,000 streams to earn ₹1 lakh (₹100,000). On JioSaavn, approximately 700,000–1,200,000 streams. The exact number depends on your listener geography and the mix of premium vs free-tier listeners.' } },
      ],
    },
  ],
}

export default function RoyaltyCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Nav />
      <RoyaltyCalculatorClient />
      <Footer />
    </>
  )
}
