export const dynamic = 'force-dynamic'

import React from 'react'
import { fetchAllBios } from '@/lib/bioutil'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import EmptyState from '@/components/celebBios/EmptyState'
import Biographies from '@/components/celebBios/Biographies'
import BioSearch from '@/components/celebBios/BioSearch'
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.teaspace.digital'

export const metadata = {
  title: 'Celebrity Biographies | Entertainers, Artists & Stars | TeaSpace',
  description:
    'Explore TeaSpace’s complete library of celebrity biographies. Discover the lives, careers, and stories behind your favorite entertainers, musicians, actors, and influencers.',
  metadataBase: new URL(baseUrl),

  openGraph: {
    title: 'Browse Celebrity Bios | TeaSpace',
    description:
      'Get the latest on actors, musicians, influencers, and entertainers. Dive into our curated collection of celebrity biographies on TeaSpace.',
    url: `${baseUrl}/biography`,
    siteName: 'TeaSpace',
    images: [
      {
        url: '/light.png',
        width: 1200,
        height: 630,
        alt: 'Celebrity Biographies on TeaSpace',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Explore Celebrity Biographies | TeaSpace',
    description:
      'Browse the latest celebrity bios on TeaSpace. Learn about the personal lives, careers, and achievements of your favorite stars.',
    site: '@_teaspace',
    images: ['/light.png'],
  },

  alternates: {
    canonical: `${baseUrl}/biography`,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    'og:title': 'Celebrity Biographies Directory | TeaSpace',
    'og:description':
      'Discover trending celebrity profiles, entertainment icons, and the people shaping pop culture. Only on TeaSpace.',
    'og:image': '/light.png',
    'og:url': `${baseUrl}/biography`,
    'twitter:image': '/light.png',
    'twitter:title': 'Browse Celebrity Bios on TeaSpace',
    'twitter:description':
      'Explore a full library of entertainers, influencers, and public figures through detailed biographies on TeaSpace.',
  },
}

export default async function page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const currentPage = searchParams.page ? parseInt(searchParams.page as string, 10) : 1
  const limit = 18

  const { bios, pagination } = await fetchAllBios(currentPage, limit)

  return (
    <>
      <div>
        <BioSearch />
      </div>
      <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden py-8 md:py-8 border-t border-[#0066cc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {bios.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {bios.map((post) => (
                  <Biographies key={post.id} bios={post} />
                ))}
              </div>
              <div className="mb-4">
                <PaginationComponent totalPages={pagination.totalPages} />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
