import type { MetadataRoute } from 'next'

const BASE_URL = 'https://westernbeats.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-21')

  return [
    /* ── Core pages ─────────────────────────────────── */
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/submit`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    /* ── Discovery pages ─────────────────────────────── */
    {
      url: `${BASE_URL}/platforms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/royalties`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/wmi-partnership`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/artist-stories`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/press`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    /* ── Competitor Comparison Pages — HIGH SEO VALUE ── */
    {
      url: `${BASE_URL}/compare`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/compare/distrokid-vs-western-beats`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/compare/tunecore-vs-western-beats`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/compare/cd-baby-vs-western-beats`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/compare/deliver-my-tune-vs-western-beats`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/compare/forevision-vs-western-beats`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/compare/routenote-vs-western-beats`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    /* ── SEO Landing Pages — Low Competition Keywords ── */
    {
      url: `${BASE_URL}/caller-tune-distribution`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/free-isrc-codes`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/jiosaavn-distribution`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/music-distribution-beginners`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    /* ── Blog / Content Hub ──────────────────────────── */
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/how-to-distribute-music-india-free`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/caller-tune-crbt-distribution-india`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/free-isrc-upc-code-india`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/distrokid-india-problems`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    /* ── Link-Worthy Asset Pages ─────────────────────── */
    {
      url: `${BASE_URL}/royalty-calculator`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/india-music-industry`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.88,
    },

    /* ── Regional & Platform Landing Pages ───────────── */
    {
      url: `${BASE_URL}/punjabi-music-distribution`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/regional-music-distribution`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/spotify-distribution`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    /* ── Legal ───────────────────────────────────────── */
    {
      url: `${BASE_URL}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
