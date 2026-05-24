import type { Metadata } from 'next'
import ContactPage from './ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us | WB Digital: Western Beats',
  description: 'Get in touch with the WB Digital team. Questions about music distribution, royalties, events, or partnerships. We reply within 24 hours.',
}

export default function Contact() {
  return <ContactPage />
}
