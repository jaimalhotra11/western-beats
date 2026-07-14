import type { Metadata } from 'next'
import AboutPage from './AboutPage'

/* ─── Rich SEO Metadata ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "About Western Beats | Free Music Distribution India",
  description:
    "Western Beats Private Limited — India's best free music distributor. 150+ platforms, 100% ownership, WMI Partner backed.",
  keywords: [
    'about Western Beats',
    'Western Beats Private Limited',
    'Western Beats music company India',
    'Western Beats',
    'Western Beats Warner Music India Partner',
    'music distribution India',
    'free music distribution India',
    'best music company India',
    'music distributor India',
    'independent music distribution India',
    '100% ownership music distribution India',
    'distribute music to JioSaavn',
    'distribute music to Gaana',
    'distribute music to Spotify India',
    'Warner Music India Partner distribution partner',
    'free music distribution 150 platforms',
    'DistroKid alternative India',
    'TuneCore alternative India',
    'CD Baby alternative India',
    'Ditto Music alternative India',
    'Believe alternative India',
    'Orchard alternative India',
    'Mad Verse alternative India',
    'Fore Vision Digital alternative',
    'best music distribution platform Indian artists',
    'music distribution without fees India',
    'upload music JioSaavn Gaana Spotify free',
    'Warner Music Partner backed music company',
    'Indian music company',
    'full service music company India',
  ],
  authors: [{ name: 'Western Beats', url: 'https://www.westernbeats.com' }],
  creator: 'Western Beats Private Limited',
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
    canonical: 'https://www.westernbeats.com/about',
  },
  openGraph: {
    title:
      "About Western Beats: India's #1 Free Music Distribution | Backed by Warner Music India Partner",
    description:
      "Discover why independent artists choose Western Beats. 100% FREE distribution to 150+ platforms. 100% ownership, royalties paid directly to you. Officially backed by Warner Music India Partner. The best alternative to DistroKid, TuneCore & CD Baby for Indian artists.",
    url: 'https://www.westernbeats.com/about',
    siteName: 'Western Beats',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.westernbeats.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: "Western Beats: India's #1 Free Music Distribution Platform Backed by Warner Music India Partner",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Western Beats: India's #1 Free Music Distribution Platform",
    description:
      'Free distribution to 150+ platforms. 100% ownership, royalties paid directly to you. Officially backed by Warner Music India Partner. Better than DistroKid & TuneCore for Indian artists.',
    images: ['https://www.westernbeats.com/og-about.jpg'],
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
      '@id': 'https://www.westernbeats.com/#organization',
      name: 'Western Beats',
      legalName: 'Western Beats Private Limited',
      alternateName: ['Western Beats', 'Western Beats India'],
      url: 'https://www.westernbeats.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.westernbeats.com/logo.jpg',
        width: 400,
        height: 400,
      },
      description:
        "India's most credible free music distribution platform, officially backed by Warner Music India Partner. Distribute to 150+ global streaming platforms. You keep 100% of your IP — royalties flow directly to you, we only earn when you earn.",
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
        'https://www.westernbeats.com',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-7087677767',
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
        name: 'Western Beats Music Distribution Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Free Music Distribution',
              description:
                'Distribute your music to 150+ streaming platforms worldwide for free. You keep 100% of your IP — royalties flow directly to you, we only earn when you earn.',
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
      '@id': 'https://www.westernbeats.com/#website',
      url: 'https://www.westernbeats.com',
      name: 'Western Beats',
      publisher: { '@id': 'https://www.westernbeats.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.westernbeats.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },

    /* WebPage */
    {
      '@type': 'AboutPage',
      '@id': 'https://www.westernbeats.com/about#webpage',
      url: 'https://www.westernbeats.com/about',
      name: "About Western Beats: India's #1 Free Music Distribution Platform",
      description:
        "Learn about Western Beats Private Limited, India's most trusted free music distribution platform, officially backed by Warner Music India Partner.",
      isPartOf: { '@id': 'https://www.westernbeats.com/#website' },
      about: { '@id': 'https://www.westernbeats.com/#organization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.westernbeats.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About Western Beats',
            item: 'https://www.westernbeats.com/about',
          },
        ],
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.speakable'],
      },
    },

    /* FAQPage: targets featured snippets & competitor comparison searches */
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Western Beats and how is it different from DistroKid?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Western Beats (by Western Beats Private Limited) is India's #1 free music distribution platform, officially backed by Warner Music India Partner. Unlike DistroKid, which charges $22.99/year, Western Beats is completely free to distribute upfront. Western Beats prioritizes Indian platforms like JioSaavn and Gaana, delivers your music in 72 hours, and pays your royalties directly to your bank — backed by Warner Music India Partner's credibility.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is Western Beats really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, distribution on Western Beats is 100% free: ₹0 upfront, no annual subscription, no per-release charges. Unlike DistroKid ($22.99/yr), TuneCore ($14.99/release), Ditto Music (£19/yr), or CD Baby ($9.99/release + 9% royalties), Western Beats costs ₹0 to distribute. We only earn when you earn — there are no upfront costs and no annual fees.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is Western Beats better than TuneCore for Indian artists?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Western Beats is built specifically for India while TuneCore is a US-focused platform. Western Beats distributes to JioSaavn, Gaana, and all major Indian platforms first, costs zero rupees (TuneCore charges per release), is backed by Warner Music India Partner giving you major-label credibility, and delivers your music in 72 hours. For Indian artists, Western Beats is the clear winner.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Western Beats compare to CD Baby?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Western Beats beats CD Baby on price (₹0 upfront vs $9.99 per release), price advantage (Western Beats ₹0 upfront vs CD Baby $9.99/release + 9% royalties), India-first distribution (Western Beats prioritizes JioSaavn and Gaana), and credibility (Western Beats is backed by Warner Music India Partner). CD Baby has no presence or priority in the Indian market.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Western Beats distribute music to JioSaavn and Gaana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Western Beats distributes to JioSaavn, Gaana, and all major Indian platforms, along with Spotify, Apple Music, YouTube Music, Amazon Music, and 140+ more global platforms. Being backed by Warner Music India Partner gives Western Beats priority placement on Indian platforms, something no other distributor like DistroKid or TuneCore can offer.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does the Warner Music India Partnership mean for my music?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Western Beats is officially backed by Warner Music India Partner (@warnermusicindia), one of the world's three major record labels. This partnership gives your music major-label credibility, priority placement on Indian streaming platforms, access to WMI's network of curators and playlist editors, and faster processing times. No other independent distributor in India, not DistroKid, TuneCore, Ditto Music, Believe, or CD Baby, has this partnership.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take for music to go live on streaming platforms with Western Beats?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Western Beats delivers your music to streaming platforms within 72 hours. Most competitors take much longer: DistroKid takes 7-10 days, TuneCore takes 7-10 days, CD Baby takes 5-7 days. Our 72 hour delivery is backed by our Warner Music India Partnership and direct relationships with all major platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Western Beats\'s royalty model work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Western Beats pays your royalties directly to your bank account with no upfront costs — we only earn when you earn. Compare: CD Baby takes 9% AND charges $9.99/release; Believe takes 15–30%; The Orchard operates on revenue share. With Western Beats, distribution costs ₹0 upfront and your royalties flow directly to you. We only earn when you earn, fully aligned with your success.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I switch from DistroKid or TuneCore to Western Beats?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Absolutely. You can switch from DistroKid, TuneCore, Ditto Music, CD Baby, or any other distributor to Western Beats. Contact us at contact@westernbeats.com or DM @wb_digital_ on Instagram and our team will guide you through the migration process, for free.",
          },
        },
        {
          '@type': 'Question',
          name: 'What services does Western Beats offer besides music distribution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Beyond free music distribution, Western Beats offers Event Management, Talent Management, Audio Production, Video Direction, and Analytics & Strategy services. We are a full-service music company backed by Warner Music India Partner, giving independent artists access to major-label resources without major-label restrictions.',
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
