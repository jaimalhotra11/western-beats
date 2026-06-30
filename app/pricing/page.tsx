import type { Metadata } from 'next'
import PricingPage from './PricingPage'

export const metadata: Metadata = {
  title: 'Pricing: Free Music Distribution, 100% Ownership | Western Beats',
  description:
    'Western Beats music distribution is 100% free: ₹0 upfront forever. 100% IP ownership always yours, WB only earns when you earn. Compare vs DistroKid ($22.99/yr), TuneCore ($14.99/release), CD Baby ($9.99 + 9%), Ditto Music, and Believe. Best value for Indian artists.',
  keywords: [
    'Western Beats pricing',
    'free music distribution India',
    'music distribution cost India',
    'DistroKid vs Western Beats',
    'TuneCore alternative India free',
    'CD Baby alternative free India',
    'music distribution free 100 percent ownership',
    'best free music distributor India',
    'music distribution comparison India',
    'Western Beats free forever',
    'Western Beats pricing',
    'indie artist distribution cost India',
    'music royalties 100 percent ownership India',
    'no fee music distribution India',
    'Warner Music India Partner distribution pricing',
  ],
  alternates: { canonical: 'https://westernbeats.com/pricing' },
  openGraph: {
    title: 'Western Beats Pricing: Free Music Distribution | Western Beats',
    description: '₹0 forever. 100% ownership to you. No annual fee, no per-release charge. We only earn when you earn. Compare vs DistroKid, TuneCore & CD Baby.',
    url: 'https://westernbeats.com/pricing',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Western Beats Pricing: ₹0 Forever | Western Beats',
    description: 'Free music distribution. 100% ownership. No hidden fees. Better than DistroKid, TuneCore & CD Baby for Indian artists.',
    site: '@wb_digital_',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://westernbeats.com/pricing#webpage',
      url: 'https://westernbeats.com/pricing',
      name: 'Western Beats Pricing: Free Music Distribution',
      isPartOf: { '@id': 'https://westernbeats.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://westernbeats.com/pricing' },
        ],
      },
    },
    {
      '@type': 'Product',
      name: 'Western Beats Music Distribution',
      description: 'Free music distribution to 150+ streaming platforms. 100% IP ownership always yours, no upfront costs ever. Zero upfront cost. Warner Music Partner backed.',
      brand: { '@type': 'Brand', name: 'Western Beats' },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        description: 'Free forever, no annual fee, no per-release charge. We only earn when you earn.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Western Beats music distribution really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Western Beats music distribution is ₹0 upfront, forever. No annual fee, no per-release charge. Western Beats only earns when you earn — there are no upfront fees. Full details in our Terms & Conditions. We only make money when you make money.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Western Beats compare to DistroKid on price?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DistroKid costs $22.99/year (₹1,900+) for unlimited releases regardless of whether you earn. Western Beats costs ₹0 upfront — no annual fee ever. We only earn when you earn, so for artists starting out, Western Beats is completely risk-free.',
          },
        },
      ],
    },
  ],
}

export default function Pricing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingPage />
    </>
  )
}
