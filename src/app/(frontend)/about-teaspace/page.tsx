import React from 'react'
import AboutSection from '@/components/aboutPage/AboutSection'

export const metadata = {
  title: 'About TeaSpace | Entertainment News with Integrity',
  description:
    'Learn about TeaSpace — your trusted destination for real-time entertainment news, celebrity bios, and pop culture insights delivered with journalistic integrity.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),

  openGraph: {
    title: 'About TeaSpace | Entertainment, Celebrities & Pop Culture',
    description:
      'TeaSpace connects communities through compelling entertainment journalism. Get to know our mission, our values, and our vision for the future of digital media.',
    url: `${process.env.NEXT_PUBLIC_SITE_UR}/about-teaspace`,
    siteName: 'TeaSpace',
    images: [
      {
        url: '/light.png',
        width: 1200,
        height: 630,
        alt: 'About TeaSpace',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About TeaSpace',
    description:
      'Get to know TeaSpace — the entertainment news platform built on accuracy, storytelling, and integrity.',
    site: '@teaspace',
    images: ['/light.png'],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_UR}/about-teaspace`,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    'og:title': 'About TeaSpace | Entertainment, Celebrities & Pop Culture',
    'og:description':
      'Learn more about TeaSpace and our mission to deliver accurate, timely, and trustworthy entertainment news.',
    'og:image': '/light.png',
    'og:url': `${process.env.NEXT_PUBLIC_SITE_UR}/about-teaspace`,
    'twitter:image': '/light.png',
    'twitter:title': 'About TeaSpace',
    'twitter:description':
      'Your trusted entertainment news source — learn more about the TeaSpace story.',
  },
}

export default function page() {
  return (
    <>
      <AboutSection />
    </>
  )
}
