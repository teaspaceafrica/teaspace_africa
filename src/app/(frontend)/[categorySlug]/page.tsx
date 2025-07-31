import Header from '@/components/categorySection/Header'
import { fetchByCategory } from '@/lib/postsUtil'
import Card from '@/components/categorySection/Card'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import NoArticlesFound from '@/components/categorySection/NoArticles'

export default async function page({
  params,
}: {
  params: Promise<{ [key: string]: string | undefined }>
}) {
  const { categorySlug } = await params
  const { posts, pagination } = await fetchByCategory(categorySlug || '', 1, 18)

  return (
    <>
      <section className="w-full">
        <Header title={categorySlug} />

        {posts.length === 0 ? (
          <NoArticlesFound categorySlug={categorySlug} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
              {posts.map((post) => (
                <Card key={post.id} article={post} />
              ))}
            </div>
            <PaginationComponent totalPages={pagination.totalPages} />
          </>
        )}
      </section>
    </>
  )
}
