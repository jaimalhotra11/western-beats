import type { Metadata } from 'next'
import SignInPage from './SignInPage'

export const metadata: Metadata = {
  title: 'Sign In | Western Beats',
  description: 'Sign in to your Western Beats artist account.',
  robots: { index: false, follow: false },
}

export default function Page() {
  return <SignInPage />
}
