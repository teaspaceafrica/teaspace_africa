import React from 'react'
import TermsConditionsPage from '@/components/legalPages/Terms'

export const metadata = {
  title: 'Terms & Conditions | TeaSpace',
  description:
    'Review the Terms & Conditions for using TeaSpace. Understand your rights, responsibilities, and the rules that guide our entertainment platform.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),

  openGraph: {
    title: 'Terms of Use | TeaSpace',
    description:
      'Read TeaSpace’s Terms of Use outlining the rules, responsibilities, and conditions for accessing and using our content and services.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/terms`,
    siteName: 'TeaSpace',
    images: [
      {
        url: '/light.png',
        width: 1200,
        height: 630,
        alt: 'TeaSpace Terms & Conditions',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | TeaSpace',
    description:
      'By using TeaSpace, you agree to our Terms & Conditions. Learn about content usage, disclaimers, and your rights on our platform.',
    site: '@teaspace',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/light.png`],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/terms`,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    'og:title': 'Terms & Conditions | TeaSpace',
    'og:description':
      'Understand the terms and policies that govern your access to TeaSpace content and services.',
    'og:image': '/light.png',
    'og:url': `${process.env.NEXT_PUBLIC_SITE_URL}/terms`,
    'twitter:image': '/light.png',
    'twitter:title': 'Terms & Conditions | TeaSpace',
    'twitter:description':
      'Read the full Terms of Service for TeaSpace to stay informed about your rights and our responsibilities.',
  },
}

export default function page() {
  return (
    <>
      <TermsConditionsPage />
    </>
  )
}
