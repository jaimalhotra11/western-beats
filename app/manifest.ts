import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Western Beats — Free Music Distribution India',
    short_name: 'Western Beats',
    description:
      "India's best free music distribution company. Distribute to 150+ platforms in 72 hours. 100% IP ownership always yours.",
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#C41230',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    categories: ['music', 'entertainment', 'business'],
    lang: 'en-IN',
    dir: 'ltr',
  }
}
