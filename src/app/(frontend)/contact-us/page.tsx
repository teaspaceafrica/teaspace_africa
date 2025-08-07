import React from 'react'
import ContactSection from '@/components/contactPage/ContactSection'

export const metadata = {
  title: 'Contact TeaSpace | Get in Touch with Our Editorial Team',
  description:
    'Have a tip, question, or feedback? Reach out to the TeaSpace editorial team — we’d love to hear from you.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),

  openGraph: {
    title: 'Contact TeaSpace | Reach Out to Our Team',
    description:
      'Connect with TeaSpace for news tips, media inquiries, or general questions. We value your voice and feedback.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact-us`,
    siteName: 'TeaSpace',
    images: [
      {
        url: '/light.png',
        width: 1200,
        height: 630,
        alt: 'Contact TeaSpace',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contact TeaSpace',
    description: 'Questions? Tips? Feedback? Get in touch with the TeaSpace editorial team.',
    site: '@_teaspace',
    images: ['/light.png'],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact-us`,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    'og:title': 'Contact TeaSpace | Entertainment News Team',
    'og:description':
      'Reach out to TeaSpace for inquiries, feedback, or to share your story ideas. We’re always listening.',
    'og:image': '/light.png',
    'og:url': `${process.env.NEXT_PUBLIC_SITE_URL}/contact-us`,
    'twitter:image': '/light.png',
    'twitter:title': 'Contact TeaSpace',
    'twitter:description': 'Need to get in touch? Contact the TeaSpace team — we’re here to help.',
  },
}

export default function page() {
  return (
    <>
      <ContactSection />
    </>
  )
}
