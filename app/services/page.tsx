import type { Metadata } from 'next'
import ServicesPage from './ServicesPage'

/* ─── SEO Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "Services: Music Distribution, Events, Talent & Production | Western Beats India",
  description:
    "Western Beats offers India's best full-service music company experience: Free music distribution via WB Digital to 150+ platforms, professional event management, talent management, audio production, video direction & analytics. Officially backed by Warner Music India. Better than DistroKid, TuneCore & CD Baby.",
  keywords: [
    'music distribution services India',
    'free music distribution India',
    'music event management India',
    'talent management India music',
    'audio production India',
    'music video production India',
    'full service music company India',
    'Warner Music India distribution',
    'WB Digital services',
    'indie music distribution India',
    'music analytics India',
    'JioSaavn distribution India',
    'Gaana music distribution',
    'Spotify distribution India free',
    'music promotion India',
    'artist management India',
    'recording studio India',
    'music mixing mastering India',
    'concert management India',
    'music royalties India 70 percent artist',
    'Western Beats services',
    'DistroKid alternative India',
    'TuneCore alternative India',
    'CD Baby alternative India',
    'music distribution 48-72 hours India',
    'independent artist services India',
    'music marketing India',
    'ISRC UPC music India',
    'music streaming analytics India',
    'music label services India',
  ],
  authors: [{ name: 'Western Beats', url: 'https://westernbeats.com' }],
  creator: 'Western Beats Private Limited: WB Digital',
  publisher: 'Western Beats Private Limited',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://westernbeats.com/services',
  },
  openGraph: {
    title: "Western Beats Services: India's #1 Full-Service Music Company | Free Distribution + Events + Production",
    description:
      'Free music distribution to 150+ platforms in 48-72 hours, event management, talent management, audio & video production, and real-time analytics. All backed by Warner Music India.',
    url: 'https://westernbeats.com/services',
    siteName: 'Western Beats: WB Digital',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://westernbeats.com/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'WB Digital Services: Free Music Distribution, Events & Production in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Western Beats Services: India's Best Full-Service Music Company",
    description:
      'Free distribution to 150+ platforms. Event management. Talent management. Audio & Video production. Backed by Warner Music India.',
    images: ['https://westernbeats.com/og-services.jpg'],
    site: '@wb_digital_',
    creator: '@wb_digital_',
  },
}

/* ─── JSON-LD Structured Data ────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://westernbeats.com/services#webpage',
      url: 'https://westernbeats.com/services',
      name: "WB Digital Services: India's #1 Full-Service Music Company",
      description:
        "WB Digital's complete suite of music services: free distribution, event management, talent management, audio production, video direction, and analytics, all backed by Warner Music India.",
      isPartOf: { '@id': 'https://westernbeats.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://westernbeats.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://westernbeats.com/services' },
        ],
      },
    },
    {
      '@type': 'ItemList',
      name: 'WB Digital Music Services',
      description: "India's most complete music services platform backed by Warner Music India",
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Service',
            name: 'Free Music Distribution',
            description:
              'Distribute your music to 150+ streaming platforms worldwide for free. You keep 100% of royalties, we only earn when you earn. Live in 48-72 hours. Backed by Warner Music India.',
            provider: { '@id': 'https://westernbeats.com/#organization' },
            areaServed: 'Worldwide',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: 'Event Management',
            description:
              'Full-service concert and event production: artist concerts, album launches, listening parties, brand activations.',
            provider: { '@id': 'https://westernbeats.com/#organization' },
            areaServed: 'India',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: 'Talent Management',
            description:
              'End-to-end artist management: career strategy, brand partnerships, booking, and Warner Music India network access.',
            provider: { '@id': 'https://westernbeats.com/#organization' },
            areaServed: 'India',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: 'Audio Production',
            description:
              'Professional recording, mixing, mastering and sound design to Warner Music India quality standards.',
            provider: { '@id': 'https://westernbeats.com/#organization' },
            areaServed: 'India',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Service',
            name: 'Video Direction',
            description:
              'Music video production, Instagram Reels, YouTube Shorts, promotional content, and social media campaigns.',
            provider: { '@id': 'https://westernbeats.com/#organization' },
            areaServed: 'India',
          },
        },
        {
          '@type': 'ListItem',
          position: 6,
          item: {
            '@type': 'Service',
            name: 'Analytics & Strategy',
            description:
              'Real-time streaming analytics, audience insights, revenue reporting, and data-driven career strategy.',
            provider: { '@id': 'https://westernbeats.com/#organization' },
            areaServed: 'Worldwide',
          },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does WB Digital offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WB Digital offers six core services: (1) Free Music Distribution to 150+ platforms worldwide, (2) Event Management for concerts and album launches, (3) Talent Management including career strategy and brand deals, (4) Audio Production with professional recording and mastering, (5) Video Direction for music videos and social media content, and (6) Analytics & Strategy with real-time streaming data. All services are backed by Warner Music India.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is WB Digital music distribution really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, WB Digital music distribution is 100% free to start. No annual fees, no per-release charges. You keep 100% of all streaming royalties, we take a 25% share only when you earn. Unlike DistroKid ($22.99/year), TuneCore ($14.99/release), or CD Baby ($9.99/release + 9% royalties), WB Digital costs ₹0 upfront.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does music distribution take with WB Digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WB Digital delivers your music to all 150+ streaming platforms within 48-72 hours of submission and approval. This is faster than DistroKid (7–10 days), TuneCore (7–10 days), CD Baby (5–7 days), and Ditto Music (3–5 days). Our Warner Music India partnership enables priority processing on all major platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WB Digital distribute to JioSaavn and Gaana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. WB Digital distributes to JioSaavn, Gaana, and all major Indian platforms as a priority, in addition to Spotify, Apple Music, YouTube Music, Amazon Music, Tidal, Deezer, and 140+ more global platforms. Our Warner Music India backing gives us priority placement that no foreign distributor can match.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get started with WB Digital services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Getting started is simple. Email us at contact@westernbeats.com or DM us on Instagram @wb_digital_ with your music, your goals, and the service you need. Our team responds within 24 hours. For music distribution, you can also submit your release details directly and we handle everything from there.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes WB Digital different from other music companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "WB Digital is India's only free full-service music company officially backed by Warner Music India. While competitors like DistroKid, TuneCore, and CD Baby only offer distribution (and charge for it), WB Digital provides distribution, event management, talent management, audio production, video direction, and analytics, all in one place, all with major-label quality standards.",
          },
        },
      ],
    },
  ],
}

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesPage />
    </>
  )
}
