import type { Metadata } from 'next'
import TermsPage from './TermsPage'

export const metadata: Metadata = {
  title: 'Terms of Service | WB Digital: Western Beats Private Limited',
  description: 'Terms of Service for WB Digital by Western Beats Private Limited. Read about distribution rights, royalty payments, content standards, and platform policies.',
}

export default function Terms() {
  return <TermsPage />
}
