import type { Metadata } from 'next'
import AboutPage from './AboutPage'

/* ─── Rich SEO Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "About WB Digital | India's #1 Free Music Distribution Platform — Better Than DistroKid, TuneCore & CD Baby",
  description:
    "WB Digital by Western Beats is India's most trusted FREE music distribution platform, officially backed by Warner Music India. Distribute to 150+ platforms including JioSaavn, Gaana, Spotify & Apple Music. Keep 100% of your royalties. The best alternative to DistroKid, TuneCore, CD Baby, Ditto Music, Believe, Orchard & Mad Verse for Indian artists.",
  keywords: [
    'about WB Digital',
    'Western Beats music distribution',
    'music distribution India',
    'free music distribution India',
    'best music distribution platform India',
    'music distributor India 2025',
    'independent music distribution India',
    '100% royalties music distribution India',
    'distribute music to JioSaavn',
    'distribute music to Gaana',
    'distribute music to Spotify India',
    'Warner Music India distribution partner',
    'free music distribution 150 platforms',
    'DistroKid alternative India',
    'TuneCore alternative India',
    'CD Baby alternative India',
    'Ditto Music alternative India',
    'Believe alternative India',
    'Orchard alternative India',
    'Mad Verse alternative India',
    'Fore Vision Digital alternative',
    'best music distribution platform for Indian artists',
    'music distribution without fees India',
    'upload music to JioSaavn Gaana Spotify free',
    'Warner Music India backed distribution',
    'Western Beats Private Limited',
    'WB Digital about',
    'Indian music distribution company',
    'free music distributor 2025',
    'music distribution 48 hours India',
  ],
  authors: [{ name: 'WB Digital', url: 'https://westernbeats.com' }],
  creator: 'WB Digital — Western Beats Private Limited',
  publisher: 'Western Beats Private Limited',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://westernbeats.com/about',
  },
  openGraph: {
    title:
      "About WB Digital — India's #1 Free Music Distribution | Backed by Warner Music India",
    description:
      "Discover why independent artists choose WB Digital. 100% FREE distribution to 150+ platforms. 100% royalties. Officially backed by Warner Music India. The best alternative to DistroKid, TuneCore & CD Baby for Indian artists.",
    url: 'https://westernbeats.com/about',
    siteName: 'WB Digital — Western Beats',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://westernbeats.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: "WB Digital — India's #1 Free Music Distribution Platform Backed by Warner Music India",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About WB Digital — India's #1 Free Music Distribution Platform",
    description:
      'Free distribution to 150+ platforms. 100% royalties. Officially backed by Warner Music India. Better than DistroKid & TuneCore for Indian artists.',
    images: ['https://westernbeats.com/og-about.jpg'],
    site: '@wb_digital_',
    creator: '@wb_digital_',
  },
}

/* ─── JSON-LD Structured Data ────────────────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* Organization */
    {
      '@type': 'Organization',
      '@id': 'https://westernbeats.com/#organization',
      name: 'WB Digital',
      legalName: 'Western Beats Private Limited',
      alternateName: ['Western Beats', 'WB Digital India'],
      url: 'https://westernbeats.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://westernbeats.com/logo.jpg',
        width: 400,
        height: 400,
      },
      description:
        "India's most credible free music distribution platform, officially backed by Warner Music India. Distribute to 150+ global streaming platforms. Keep 100% of your royalties.",
      foundingDate: '2020',
      foundingLocation: {
        '@type': 'Place',
        addressCountry: 'IN',
        name: 'India',
      },
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'GeoShape', name: 'Worldwide' },
      ],
      sameAs: [
        'https://instagram.com/wb_digital_',
        'https://westernbeats.com',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-9319910662',
          email: 'contact@westernbeats.com',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      ],
      knowsAbout: [
        'Music Distribution',
        'Music Production',
        'Artist Management',
        'Event Management',
        'Audio Production',
        'Video Production',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'WB Digital Music Distribution Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Free Music Distribution',
              description:
                'Distribute your music to 150+ streaming platforms worldwide for free. Keep 100% of your royalties.',
            },
            price: '0',
            priceCurrency: 'INR',
          },
        ],
      },
    },

    /* WebSite */
    {
      '@type': 'WebSite',
      '@id': 'https://westernbeats.com/#website',
      url: 'https://westernbeats.com',
      name: 'WB Digital — Western Beats',
      publisher: { '@id': 'https://westernbeats.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://westernbeats.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },

    /* WebPage */
    {
      '@type': 'AboutPage',
      '@id': 'https://westernbeats.com/about#webpage',
      url: 'https://westernbeats.com/about',
      name: "About WB Digital — India's #1 Free Music Distribution Platform",
      description:
        "Learn about WB Digital by Western Beats Private Limited — India's most trusted free music distribution platform, officially backed by Warner Music India.",
      isPartOf: { '@id': 'https://westernbeats.com/#website' },
      about: { '@id': 'https://westernbeats.com/#organization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://westernbeats.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About WB Digital',
            item: 'https://westernbeats.com/about',
          },
        ],
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.speakable'],
      },
    },

    /* FAQPage — targets featured snippets & competitor comparison searches */
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is WB Digital and how is it different from DistroKid?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "WB Digital (by Western Beats Private Limited) is India's #1 free music distribution platform, officially backed by Warner Music India. Unlike DistroKid, which charges $22.99/year, WB Digital is completely free. WB Digital also prioritizes Indian platforms like JioSaavn and Gaana, delivers your music in 48 hours, and lets you keep 100% of your royalties — all backed by Warner Music India's credibility.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is WB Digital really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, WB Digital is 100% free. There are no annual subscription fees, no per-release charges, and no hidden costs. Unlike DistroKid ($22.99/yr), TuneCore ($14.99/release), Ditto Music (£19/yr), or CD Baby ($9.99/release), WB Digital costs ₹0. You also keep 100% of your streaming royalties — we never take a cut.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is WB Digital better than TuneCore for Indian artists?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WB Digital is built specifically for India while TuneCore is a US-focused platform. WB Digital distributes to JioSaavn, Gaana, Hungama, Resso, and all major Indian platforms first, costs zero rupees (TuneCore charges per release), is backed by Warner Music India giving you major-label credibility, and delivers your music in 48 hours. For Indian artists, WB Digital is the clear winner.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does WB Digital compare to CD Baby?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WB Digital beats CD Baby on price (₹0 vs $9.99 per release), royalties (100% vs 91% — CD Baby takes 9%), India-first distribution (WB Digital prioritizes JioSaavn and Gaana), and credibility (WB Digital is backed by Warner Music India). CD Baby has no presence or priority in the Indian market.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does WB Digital distribute music to JioSaavn and Gaana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! WB Digital distributes to JioSaavn, Gaana, Hungama, Resso, and all major Indian platforms, along with Spotify, Apple Music, YouTube Music, Amazon Music, and 140+ more global platforms. Being backed by Warner Music India gives WB Digital priority placement on Indian platforms — something no other distributor like DistroKid or TuneCore can offer.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does the Warner Music India partnership mean for my music?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "WB Digital is officially backed by Warner Music India (@warnermusicindia), one of the world's three major record labels. This partnership gives your music major-label credibility, priority placement on Indian streaming platforms, access to WMI's network of curators and playlist editors, and faster processing times. No other independent distributor in India — not DistroKid, TuneCore, Ditto Music, Believe, or CD Baby — has this partnership.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for music to go live on streaming platforms with WB Digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'WB Digital delivers your music to streaming platforms within 48 hours. Most competitors take much longer: DistroKid takes 7-10 days, TuneCore takes 7-10 days, CD Baby takes 5-7 days. Our 48-hour delivery is backed by our Warner Music India partnership and direct relationships with all major platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I keep 100% of my royalties with WB Digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. WB Digital never takes a percentage of your royalties. You keep 100% of all streaming revenue from all 150+ platforms. CD Baby takes 9%, Believe takes 15-30%, and The Orchard works on revenue share. With WB Digital, every rupee earned from your music is yours.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I switch from DistroKid or TuneCore to WB Digital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Absolutely. You can switch from DistroKid, TuneCore, Ditto Music, CD Baby, or any other distributor to WB Digital. Contact us at contact@westernbeats.com or DM @wb_digital_ on Instagram and our team will guide you through the migration process — for free.",
          },
        },
        {
          '@type': 'Question',
          name: 'What services does WB Digital offer besides music distribution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Beyond free music distribution, WB Digital offers Event Management, Talent Management, Audio Production, Video Direction, and Analytics & Strategy services. We are a full-service music company backed by Warner Music India, giving independent artists access to major-label resources without major-label restrictions.',
          },
        },
      ],
    },
  ],
}

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default function About() {
  return (
    <>
      {/* JSON-LD injected into <head> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPage />
    </>
  )
}
