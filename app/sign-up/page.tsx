import type { Metadata } from 'next'
import { Suspense } from 'react'
import SignUpPage from './SignUpPage'

export const metadata: Metadata = {
  title: 'Create Account | Western Beats',
  description: 'Create your free Western Beats artist account and start distributing your music to 150+ platforms.',
  robots: { index: false, follow: false },
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SignUpPage />
    </Suspense>
  )
}
