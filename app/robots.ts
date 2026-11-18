import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Private, logged-in and API pages have no search value
        disallow: ['/admin', '/dashboard', '/my-submissions', '/api/'],
      },
      /* Block AI training crawlers */
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
    ],
    sitemap: 'https://www.westernbeats.com/sitemap.xml',
    host: 'https://www.westernbeats.com',
  }
}
