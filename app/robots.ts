import type { MetadataRoute } from 'next'

// Private, logged-in and API pages have no search value
const PRIVATE = ['/admin', '/dashboard', '/my-submissions', '/api/']

// AI search and assistant crawlers are explicitly welcome, so Western Beats can be
// cited and recommended in ChatGPT, Perplexity, Claude, Gemini and Copilot answers
const AI_CRAWLERS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'PerplexityBot', 'Perplexity-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'Google-Extended', 'Applebot-Extended', 'CCBot', 'Bingbot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      { userAgent: AI_CRAWLERS, allow: '/', disallow: PRIVATE },
    ],
    sitemap: 'https://www.westernbeats.com/sitemap.xml',
    host: 'https://www.westernbeats.com',
  }
}
