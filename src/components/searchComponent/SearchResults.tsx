'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { FaSearch, FaNewspaper, FaStar } from 'react-icons/fa'
import { Articles } from '@/types/types'
import PaginationComponent from '../navigation/PaginationComponent'
import Link from 'next/link'
import { Clock, ArrowRight, FileText, User } from 'lucide-react'

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const currentPage = Number(searchParams.get('page')) || 1

  const [prevQuery, setPrevQuery] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [mounted, setMounted] = useState<boolean>(false)
  const [posts, setPosts] = useState<Articles[]>([])
  const [pagination, setPagination] = useState({
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
    page: currentPage,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      if (query && (query !== prevQuery || pagination.page !== currentPage)) {
        setLoading(true)
        try {
          const res = await fetch(
            `/api/search?q=${encodeURIComponent(query)}&page=${currentPage}&limit=18`,
          )
          const { posts, pagination } = await res.json()
          setPosts(posts)
          setPagination(pagination)
        } catch (_) {
          setPosts([])
        } finally {
          setLoading(false)
          setPrevQuery(query)
        }
      } else if (mounted) {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [query, currentPage, prevQuery, mounted, pagination.page])

  if (!mounted) {
    return (
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 w-full min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-lg flex items-center justify-center">
                <FaSearch className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Search Results</h1>
                <p className="text-gray-600 mt-1">Searching for &quot;{query}&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-lg flex items-center justify-center">
                <FaSearch className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Search Results</h1>
                <p className="text-gray-600 mt-1">
                  {loading
                    ? `Searching for "${query}"`
                    : `${posts.length} results found for "${query}"`}
                </p>
              </div>
            </div>

            {/* Search stats */}
            {!loading && posts.length > 0 && (
              <div className="hidden md:flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <FaNewspaper className="text-[#0066cc]" />
                  <span>{posts.length} articles</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>
                    Page {currentPage} of {pagination.totalPages}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            {/* Enhanced Loading Spinner */}
            <div className="relative">
              <div className="w-20 h-20 border-4 border-gray-200 rounded-full"></div>
              <div className="absolute inset-0 w-20 h-20 border-4 border-t-[#0066cc] border-r-[#d53020] rounded-full animate-spin"></div>
              <div
                className="absolute inset-2 w-16 h-16 border-2 border-dashed border-[#d53020] rounded-full animate-spin"
                style={{ animationDirection: 'reverse', animationDuration: '3s' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaSearch className="text-[#0066cc] text-lg animate-pulse" />
              </div>
            </div>
            <p className="text-gray-600 mt-6 text-lg font-medium">
              Searching entertainment news...
            </p>
            <div className="flex space-x-1 mt-2">
              <div
                className="w-2 h-2 bg-[#0066cc] rounded-full animate-bounce"
                style={{ animationDelay: '0s' }}
              ></div>
              <div
                className="w-2 h-2 bg-[#d53020] rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className="w-2 h-2 bg-[#0066cc] rounded-full animate-bounce"
                style={{ animationDelay: '0.4s' }}
              ></div>
            </div>
          </div>
        ) : !posts || posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[#0066cc]/10 to-[#d53020]/10 rounded-2xl flex items-center justify-center border border-gray-200">
                <FaNewspaper className="text-4xl text-gray-400" />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#d53020]/20 rounded-full animate-pulse"></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#0066cc]/20 rounded-full animate-pulse"
                style={{ animationDelay: '0.5s' }}
              ></div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">No Stories Found</h3>
            <p className="text-gray-600 text-center max-w-md leading-relaxed mb-6">
              We couldn&apos;t find any entertainment news matching &quot;{query}&quot;. Try
              searching for:
            </p>

            {/* Search suggestions */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {[
                'celebrity news',
                'movie reviews',
                'music updates',
                'TV shows',
                'entertainment',
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() =>
                    (window.location.href = `/search?q=${encodeURIComponent(suggestion)}`)
                  }
                  className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-[#0066cc] hover:text-white hover:border-[#0066cc] transition-all duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <button
              onClick={() => (window.location.href = '/')}
              className="px-8 py-4 bg-gradient-to-r from-[#0066cc] to-[#d53020] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: Articles) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-md flex items-center justify-center">
                          <FaStar className="text-white text-xs" />
                        </div>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {typeof post.category === 'object' &&
                          post.category !== null &&
                          'name' in post.category
                            ? post.category.name
                            : typeof post.category === 'string'
                              ? post.category
                              : 'Entertainment'}
                        </span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-5 h-5 text-[#0066cc]" />
                      </div>
                    </div>

                    {/* Title */}
                    <Link
                      href={`/${
                        typeof post.category === 'object' &&
                        post.category !== null &&
                        'slug' in post.category
                          ? post.category.slug
                          : typeof post.category === 'string' || typeof post.category === 'number'
                            ? post.category
                            : 'news'
                      }/${post.slug}`}
                    >
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0066cc] group-hover:to-[#d53020] transition-all duration-300 leading-tight mb-3">
                        {post.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>
                              {typeof post.author === 'number'
                                ? post.author
                                : post.author &&
                                    typeof post.author === 'object' &&
                                    'name' in post.author
                                  ? post.author.name
                                  : 'TeaSpace'}
                            </span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime} min</span>
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>{post.publishedAt}</span>
                        </div>
                      </div>

                      {/* Bottom border accent */}
                      <div className="h-1 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Results Summary */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0066cc]/20 to-[#d53020]/20 rounded-lg flex items-center justify-center">
                    <FileText className="text-[#0066cc] text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">
                      Showing {posts.length} results for &quot;{query}&quot;
                    </p>
                    <p className="text-gray-500 text-sm">
                      Page {currentPage} of {pagination.totalPages}
                    </p>
                  </div>
                </div>

                {/* Pagination quick info */}
                <div className="hidden md:block">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    {pagination.hasPrevPage && <span className="text-[#0066cc]">← Previous</span>}
                    <span className="px-2 py-1 bg-gradient-to-r from-[#0066cc] to-[#d53020] text-white rounded text-xs">
                      {currentPage}
                    </span>
                    {pagination.hasNextPage && <span className="text-[#0066cc]">Next →</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="pt-4">
              <PaginationComponent totalPages={pagination.totalPages} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
