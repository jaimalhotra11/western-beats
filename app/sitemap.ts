import type { MetadataRoute } from 'next'

const BASE_URL = 'https://westernbeats.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-25')

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
    {
      url: `${BASE_URL}/blog/how-much-jiosaavn-pays-per-stream`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/blog/how-to-submit-song-jio-caller-tune`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/blog/haryanvi-music-distribution-india`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/how-to-earn-money-from-music-india`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/blog/bhojpuri-music-distribution-india`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    /* ── New Platform Pages ───────────────────────────── */
    {
      url: `${BASE_URL}/gaana-distribution`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/apple-music-distribution`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/best-music-distributor-india`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.98,
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

    /* ── New Platform Pages ─────────────────────────── */
    {
      url: `${BASE_URL}/youtube-music-distribution`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wynk-music-distribution`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/hungama-music-distribution`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    /* ── New Blog Posts ──────────────────────────────── */
    {
      url: `${BASE_URL}/blog/youtube-content-id-india`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/blog/music-copyright-india`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/how-to-get-verified-spotify-india`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    /* ── New Landing Pages (July 2026) ──────────────── */
    {
      url: `${BASE_URL}/hindi-music-distribution`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tamil-music-distribution`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/telugu-music-distribution`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/bollywood-music-distribution`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/how-to-upload-song-spotify-india`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/music-promotion-india`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    /* ── New Blog Posts (July 2026) ──────────────────── */
    {
      url: `${BASE_URL}/blog/how-to-get-song-on-jiosaavn`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/blog/best-music-distributors-india-2026`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/blog/spotify-royalties-india-2026`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/blog/music-distribution-guide-hindi`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/blog/how-to-make-money-from-music-india`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.88,
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
