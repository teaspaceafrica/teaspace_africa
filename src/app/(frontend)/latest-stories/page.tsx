import Header from '@/components/categorySection/Header'
import { fetchAllPosts } from '@/lib/postsUtil'
import Card from '@/components/categorySection/Card'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import NoArticlesFound from '@/components/categorySection/NoArticles'

export const metadata = {
  title: 'Latest Stories | TeaSpace Entertainment News',
  description:
    'Catch up on the latest entertainment stories, celebrity news, and pop culture highlights — updated in real-time on TeaSpace.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),

  openGraph: {
    title: 'Latest Entertainment Stories | TeaSpace',
    description:
      'Stay informed with trending celebrity news, breaking entertainment updates, and pop culture insights — only on TeaSpace.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/latest-stories`,
    siteName: 'TeaSpace',
    images: [
      {
        url: '/light.png',
        width: 1200,
        height: 630,
        alt: 'Latest Stories on TeaSpace',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Latest Stories | TeaSpace',
    description:
      'Read the freshest entertainment stories and celebrity updates. TeaSpace brings you news that matters — fast and factual.',
    site: '@teaspace',
    images: ['/light.png'],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/latest-stories`,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    'og:title': 'Latest Entertainment News | TeaSpace',
    'og:description':
      'Explore real-time celebrity updates and trending stories on TeaSpace — your go-to source for entertainment and pop culture.',
    'og:image': '/light.png',
    'og:url': `${process.env.NEXT_PUBLIC_SITE_URL}/latest-stories`,
    'twitter:image': '/light.png',
    'twitter:title': 'Latest Stories | TeaSpace',
    'twitter:description':
      'Stay up to date with the hottest stories in entertainment, music, film, and celebrity culture.',
  },
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const currentPage = searchParams.page ? parseInt(searchParams.page as string, 10) : 1
  const limit = 18
  const { posts, pagination } = await fetchAllPosts(currentPage, limit)

  return (
    <>
      <section className="w-full">
        <Header title="Latest Stories" />
        {posts.length === 0 ? (
          <NoArticlesFound />
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
              {posts.map((post) => (
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
