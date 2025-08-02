import Header from '@/components/categorySection/Header'
import { fetchByCategory } from '@/lib/postsUtil'
import Card from '@/components/categorySection/Card'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import NoArticlesFound from '@/components/categorySection/NoArticles'

import config from '@/payload.config'
import { getPayload } from 'payload'

export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string }> }) {
  const { categorySlug } = await params

  const payload = await getPayload({ config })

  const { docs: categories } = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: categorySlug,
      },
    },
    limit: 1,
  })

  const category = categories[0]

  if (!category) {
    return {
      title: 'Category Not Found | teaspace.africa',
      description:
        'The category you are looking for does not exist. Discover trending entertainment stories and celebrity coverage on TeaSpace.',
    }
  }

  const categoryName = category.name

  return {
    title: `${categoryName} News & Stories | TeaSpace`,
    description: `Explore the latest stories, updates, and features in ${categoryName} on TeaSpace — your go-to source for entertainment and pop culture.`,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
    openGraph: {
      title: `${categoryName} | Entertainment News & Insights | TeaSpace`,
      description: `Get up-to-date news, analysis, and pop culture highlights in ${categoryName}. Fresh stories posted daily on TeaSpace.`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${categorySlug}`,
      siteName: 'TeaSpace',
      images: [
        {
          url: '/light.png', // Replace with your actual OG image
          width: 1200,
          height: 630,
          alt: `${categoryName} - TeaSpace`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryName} | TeaSpace Entertainment`,
      description: `Latest entertainment and celebrity stories in ${categoryName}, curated by TeaSpace.`,
      images: ['/light.png'],
      site: '@teaspace',
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${categorySlug}`,
    },
  }
}

type Params = Promise<{ [key: string]: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function page(props: { params: Params; searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const currentPage = searchParams.page ? parseInt(searchParams.page as string, 10) : 1
  const limit = 18
  const { categorySlug } = await props.params
  const { posts, pagination } = await fetchByCategory(categorySlug, currentPage, limit)

  return (
    <>
      <section className="w-full">
        <Header title={categorySlug} />

        {posts.length === 0 ? (
          <NoArticlesFound categorySlug={categorySlug} />
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
