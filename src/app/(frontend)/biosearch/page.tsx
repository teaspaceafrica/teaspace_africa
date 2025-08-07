export const dynamic = 'force-dynamic'

import React from 'react'
import BioSearchResults from '@/components/celebBios/BioSearchResults'

export const metadata = {
  title: 'Search Celebrity Biographies | TeaSpace',
  description:
    'Explore the lives of your favorite entertainers and celebrities. Use TeaSpace search to find exclusive bios, career highlights, and pop culture profiles.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),

  openGraph: {
    title: 'Find Celebrity Biographies & Profiles | TeaSpace',
    description:
      'Search TeaSpace’s collection of celebrity biographies to learn about your favorite entertainers, trending personalities, and rising stars.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/biosearch`,
    siteName: 'TeaSpace',
    images: [
      {
        url: '/light.png',
        width: 1200,
        height: 630,
        alt: 'Search TeaSpace',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Search Celebrity Bios on TeaSpace',
    description:
      'Use TeaSpace to search detailed biographies, career journeys, and pop culture updates about celebrities and entertainers.',
    site: '@_teaspace',
    images: ['/light.png'],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/biosearch`,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    'og:title': 'Celebrity Bio Search | TeaSpace',
    'og:description':
      'Find in-depth celebrity bios and entertainment insights. TeaSpace is your destination for all things pop culture.',
    'og:image': '/light.png',
    'og:url': `${process.env.NEXT_PUBLIC_SITE_URL}/search`,
    'twitter:image': '/light.png',
    'twitter:title': 'Celebrity Bio Search on TeaSpace',
    'twitter:description':
      'Discover your favorite celebrities and entertainers. Use TeaSpace search to find exclusive bios and trending stories.',
  },
}

function page() {
  return <BioSearchResults />
}

export default page
