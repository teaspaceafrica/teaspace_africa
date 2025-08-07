import React from 'react'
import PrivacyPolicyPage from '@/components/legalPages/PrivacyPolicy'

export const metadata = {
  title: 'Privacy Policy | TeaSpace',
  description:
    'Read TeaSpace’s Privacy Policy to understand how we collect, use, and protect your personal information across our entertainment news platform.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),

  openGraph: {
    title: 'Privacy Policy | TeaSpace',
    description:
      'Your privacy matters. Learn how TeaSpace handles your data responsibly and transparently across all our platforms.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`,
    siteName: 'TeaSpace',
    images: [
      {
        url: '/light.png',
        width: 1200,
        height: 630,
        alt: 'TeaSpace Privacy Policy',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | TeaSpace',
    description:
      'Learn how TeaSpace protects your data and respects your privacy while delivering trusted entertainment news.',
    site: '@_teaspace',
    images: ['/light.png'],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    'og:title': 'Privacy Policy | TeaSpace',
    'og:description':
      'Understand how TeaSpace uses cookies, stores data, and safeguards user information while delivering reliable entertainment journalism.',
    'og:image': '/light.png',
    'og:url': `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`,
    'twitter:image': '/light.png',
    'twitter:title': 'Privacy Policy | TeaSpace',
    'twitter:description':
      'Read TeaSpace’s commitment to privacy, data transparency, and responsible content delivery.',
  },
}

export default function page() {
  return (
    <>
      <PrivacyPolicyPage />
    </>
  )
}
