import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Western Beats — India\'s #1 Music Company | WB Digital · Warner Music India Partner',
    template: '%s | Western Beats',
  },
  description:
    "Western Beats is India's #1 full-service music company — officially backed by Warner Music India. Distribute music free via WB Digital to 150+ platforms including JioSaavn & Gaana. Earn 70% royalties on every stream. Beat DistroKid, TuneCore & CD Baby.",
  metadataBase: new URL('https://westernbeats.com'),
  openGraph: {
    siteName: 'Western Beats — India\'s #1 Music Company',
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
