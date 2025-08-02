import Header from '@/components/categorySection/Header'
import { fetchByCategory } from '@/lib/postsUtil'
import Card from '@/components/categorySection/Card'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import NoArticlesFound from '@/components/categorySection/NoArticles'

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
