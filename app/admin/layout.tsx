import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Admin | Western Beats',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
