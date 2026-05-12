import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'WB Digital — Where Independent Meets Major | Western Beats',
    template: '%s | WB Digital',
  },
  description:
    "India's most credible free music distribution platform. Officially backed by Warner Music India. Distribute to 150+ platforms. Keep 100% royalties. Better than DistroKid & TuneCore.",
  metadataBase: new URL('https://westernbeats.com'),
  openGraph: {
    siteName: 'WB Digital — Western Beats',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', site: '@wb_digital_' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
