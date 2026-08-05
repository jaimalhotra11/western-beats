import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.westernbeats.com'

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

    /* ── Global / International Landing Pages ────────── */
    {
      url: `${BASE_URL}/best-music-distribution-company`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.98,
    },
    {
      url: `${BASE_URL}/best-music-distributor-usa`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/best-music-distributor-canada`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/best-music-distributor-australia`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/best-music-distributor-uae`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/best-music-distributor-uk`,
      lastModified: new Date('2026-07-29'),
      changeFrequency: 'monthly',
      priority: 0.95,
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

    /* ── SEO Round 2 — Blog Posts ────────────────────── */
    {
      url: `${BASE_URL}/blog/distrokid-vs-tunecore-vs-western-beats`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/blog/free-music-distribution-no-fees-india`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/blog/how-to-get-isrc-code-free-india`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/youtube-music-royalties-india-2026`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/music-distribution-mistakes-to-avoid-india`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/blog/indian-music-distribution-uk-usa-canada-2026`,
      lastModified: new Date('2026-07-29'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },

    /* ── SEO Round 2 — Regional & Keyword Pages ─────── */
    {
      url: `${BASE_URL}/bengali-music-distribution`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kannada-music-distribution`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/marathi-music-distribution`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/malayalam-music-distribution`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/free-music-distribution-india`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/independent-artist-india`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/upload-music-online-free-india`,
      lastModified: new Date('2026-07-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    /* ── Resource Hub ───────────────────────────────── */
    {
      url: `${BASE_URL}/resources`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/resources/case-studies/independent-hindi-artist-1m-streams`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/resources/case-studies/british-indian-artist-dual-market`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/resources/case-studies/punjabi-artist-canada-diaspora`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/resources/research/state-of-indian-music-streaming-2026`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/resources/research/indian-diaspora-music-market-2026`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.93,
    },
    {
      url: `${BASE_URL}/resources/ebooks/complete-guide-music-distribution-india-2026`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/resources/ebooks/music-distribution-nri-artists-guide`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/resources/infographics/streaming-royalties-india-2026`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/resources/infographics/music-distribution-comparison-india`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.93,
    },

    /* ── Competitor Gap Blog Posts (August 2026) ────── */
    {
      url: `${BASE_URL}/blog/how-to-get-on-spotify-playlists-india`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/blog/how-to-get-on-jiosaavn-playlists`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/blog/cover-art-size-dimensions-music-distribution`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'monthly',
      priority: 0.93,
    },
    {
      url: `${BASE_URL}/blog/how-to-get-first-1000-streams-spotify-india`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'monthly',
      priority: 0.94,
    },
    {
      url: `${BASE_URL}/blog/wav-vs-mp3-audio-format-music-distribution`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/blog/tiktok-for-musicians-india-2026`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'monthly',
      priority: 0.94,
    },
    {
      url: `${BASE_URL}/blog/music-publishing-india-guide`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'monthly',
      priority: 0.93,
    },
    {
      url: `${BASE_URL}/blog/how-to-record-music-at-home-india`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'monthly',
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/blog/streaming-fraud-india-how-to-avoid`,
      lastModified: new Date('2026-08-05'),
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
