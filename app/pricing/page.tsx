import type { Metadata } from 'next'
import PricingPage from './PricingPage'

export const metadata: Metadata = {
  title: 'Pricing: Free Music Distribution, 75% Royalties | WB Digital · Western Beats',
  description:
    'WB Digital music distribution is 100% free: ₹0 upfront forever. You earn 75% of all net royalties, WB takes 25% only when you earn. Compare vs DistroKid ($22.99/yr), TuneCore ($14.99/release), CD Baby ($9.99 + 9%), Ditto Music, and Believe. Best value for Indian artists.',
  keywords: [
    'WB Digital pricing',
    'free music distribution India',
    'music distribution cost India',
    'DistroKid vs WB Digital',
    'TuneCore alternative India free',
    'CD Baby alternative free India',
    'music distribution free 75 percent royalties',
    'best free music distributor India',
    'music distribution comparison India',
    'WB Digital free forever',
    'Western Beats pricing',
    'indie artist distribution cost India',
    'music royalties 75 percent India',
    'no fee music distribution India',
    'Warner Music India distribution pricing',
  ],
  alternates: { canonical: 'https://westernbeats.com/pricing' },
  openGraph: {
    title: 'WB Digital Pricing: Free Music Distribution | Western Beats',
    description: '₹0 forever. 75% royalties to you. No annual fee, no per-release charge. We only earn when you earn. Compare vs DistroKid, TuneCore & CD Baby.',
    url: 'https://westernbeats.com/pricing',
    siteName: 'Western Beats: WB Digital',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WB Digital Pricing: ₹0 Forever | Western Beats',
    description: 'Free music distribution. 75% royalties. No hidden fees. Better than DistroKid, TuneCore & CD Baby for Indian artists.',
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
      name: 'WB Digital Pricing: Free Music Distribution',
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
      name: 'WB Digital Music Distribution',
      description: 'Free music distribution to 150+ streaming platforms. 75% royalties to artist, 25% to WB Digital, only when you earn. Zero upfront cost. Warner Music India backed.',
      brand: { '@type': 'Brand', name: 'WB Digital by Western Beats' },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        description: 'Free forever, no annual fee, no per-release charge. 70/30 revenue share only when you earn.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is WB Digital music distribution really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WB Digital music distribution is ₹0 upfront, forever. No annual fee, no per-release charge. WB Digital earns a 25% revenue share only when you earn, you keep 75% of every stream. We only make money when you make money.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does WB Digital compare to DistroKid on price?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'DistroKid costs $22.99/year (₹1,900+) for unlimited releases. WB Digital costs ₹0 upfront. WB Digital takes 25% of royalties only when you earn; DistroKid keeps 0% but charges the annual fee. For artists earning under ~₹6,333/month from streaming, WB Digital is more cost-effective.',
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
