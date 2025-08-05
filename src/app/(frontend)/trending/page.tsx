export const dynamic = 'force-dynamic'

import Header from '@/components/categorySection/Header'
import { fetchAllPosts } from '@/lib/postsUtil'
import Card from '@/components/categorySection/Card'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import NoArticlesFound from '@/components/categorySection/NoArticles'

export const metadata = {
  title: 'Trending Now | TeaSpace Entertainment & Celebrity Buzz',
  description:
    'See what’s trending now in entertainment, celebrity culture, and pop media. Stay on top of the buzz with TeaSpace’s most-read stories.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),

  openGraph: {
    title: 'Trending Now | TeaSpace',
    description:
      'Discover what’s hot in entertainment right now — viral celebrity moments, trending headlines, and fan-favorite stories, all on TeaSpace.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/trending`,
    siteName: 'TeaSpace',
    images: [
      {
        url: '/light.png',
        width: 1200,
        height: 630,
        alt: 'Trending Entertainment Stories - TeaSpace',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Trending Now | TeaSpace',
    description:
      'Stay in the loop with the latest celebrity trends, viral stories, and entertainment buzz on TeaSpace.',
    site: '@teaspace',
    images: ['/light.png'],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/trending`,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    'og:title': 'Trending Entertainment News | TeaSpace',
    'og:description':
      'Catch up on trending celebrity stories, pop culture news, and viral entertainment coverage — updated daily on TeaSpace.',
    'og:image': '/light.png',
    'og:url': `${process.env.NEXT_PUBLIC_SITE_URL}/trending`,
    'twitter:image': '/light.png',
    'twitter:title': 'Trending Now | TeaSpace',
    'twitter:description':
      'Explore the biggest entertainment headlines and viral celebrity moments on TeaSpace.',
  },
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const currentPage = searchParams.page ? parseInt(searchParams.page as string, 10) : 1
  const limit = 18
  const { posts, pagination } = await fetchAllPosts(currentPage, limit)
  const trending = posts.filter((post) => post.subcategory === 'isTrending')

  return (
    <>
      <section className="w-full">
        <Header title="Trending Stories" />
        {trending.length === 0 ? (
          <NoArticlesFound />
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
              {trending.map((post) => (
                <Card key={post.id} article={post} />
              ))}
            </div>
            <div className="mb-4">
              <PaginationComponent totalPages={pagination.totalPages} />
            </div>
          </>
        )}
      </section>
    </>
  )
}
