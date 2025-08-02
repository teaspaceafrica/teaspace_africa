import React from 'react'
import SearchResults from '@/components/searchComponent/SearchResults'
import { Suspense } from 'react'
import Loading from '../loading'

export const metadata = {
  title: 'Search TeaSpace | Find Entertainment Stories & Celebrity News',
  description:
    'Looking for something specific? Use TeaSpace’s search to explore breaking entertainment news, celebrity bios, trending stories, and pop culture coverage.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),

  openGraph: {
    title: 'Search Entertainment Stories | TeaSpace',
    description:
      'Find the latest celebrity news, entertainment updates, and exclusive features by searching TeaSpace’s complete content library.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/search`,
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
    title: 'Search TeaSpace | Entertainment, Celebs & Pop Culture',
    description:
      'Use TeaSpace search to explore articles, celebrity bios, and trending stories. Find what matters to you.',
    site: '@teaspace',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/light.png`],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/search`,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    'og:title': 'Search TeaSpace | Explore Entertainment News',
    'og:description':
      'Use our search tool to quickly find entertainment articles, trending topics, and celebrity profiles.',
    'og:image': '/light.png',
    'og:url': `${process.env.NEXT_PUBLIC_SITE_URL}/search`,
    'twitter:image': '/light.png',
    'twitter:title': 'Search TeaSpace',
    'twitter:description':
      'Search through TeaSpace’s entertainment news archive and find the content you care about.',
  },
}

function page() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchResults />
    </Suspense>
  )
}

export default page
