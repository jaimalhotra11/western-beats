import type { Metadata } from 'next'
import DashboardPage from './DashboardPage'

export const metadata: Metadata = {
  title: 'Dashboard | Western Beats',
  description: 'Your Western Beats artist dashboard.',
  robots: { index: false, follow: false },
}

export default function Page() {
  return <DashboardPage />
}
