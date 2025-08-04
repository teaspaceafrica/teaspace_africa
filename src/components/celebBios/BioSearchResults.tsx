'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { FaSearch, FaNewspaper, FaCalendarAlt, FaBriefcase } from 'react-icons/fa'
import { Bios } from '@/types/types'
import PaginationComponent from '../navigation/PaginationComponent'
import Link from 'next/link'
import { FileText } from 'lucide-react'
import Image from 'next/image'
import BioSearch from './BioSearch'

export default function BioSearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const currentPage = Number(searchParams.get('page')) || 1

  const [prevQuery, setPrevQuery] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [mounted, setMounted] = useState<boolean>(false)
  const [posts, setPosts] = useState<Bios[]>([])
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
            `/api/biosearch?q=${encodeURIComponent(query)}&page=${currentPage}&limit=18`,
          )
          const { bios, pagination } = await res.json()
          setPosts(bios)
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
  console.log('SEARCH RESULTS', posts)

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return dateString
    }
  }

  const getAge = (dateString: string) => {
    try {
      const birthDate = new Date(dateString)
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }

      return age
    } catch {
      return null
    }
  }

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
      <div>
        <BioSearch />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl p-4 md:p-8 mb-8 shadow-lg border border-gray-100">
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
            <p className="text-gray-600 mt-6 text-lg font-medium">Searching for {query}...</p>
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

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">No Persons Found</h3>
            <p className="text-gray-600 text-center max-w-md leading-relaxed mb-6">
              We couldn&apos;t find any person matching &quot;{query}&quot;.
            </p>

            <Link
              href="/biography"
              className="px-8 py-4 bg-gradient-to-r from-[#0066cc] to-[#d53020] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Go Back
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: Bios) => (
                <div key={post.id} className="relative">
                  <div className="group cursor-pointer">
                    <div className="bg-white border border-[#d53020] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          width={400}
                          height={600}
                          src={
                            typeof post.profileImage === 'object' && post.profileImage !== null
                              ? post.profileImage.url
                              : '/placeholder.jpg'
                          }
                          alt={post.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center space-x-1 bg-[#0066cc]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                            <span className="text-white font-medium text-sm">{post.category}</span>
                          </div>
                        </div>

                        {/* Featured Badge */}
                        {post.featured && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-[#d53020]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                              <span className="text-white font-medium text-xs">Featured</span>
                            </div>
                          </div>
                        )}

                        {/* Name Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-white font-bold text-lg mb-1">{post.name}</h4>
                          <p className="text-white/80 text-sm">{post.orginalName}</p>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        {/* Basic Info */}
                        <div className="space-y-3 mb-4">
                          {/* Date of Birth & Age */}
                          <div className="flex items-center space-x-2 text-gray-600">
                            <FaCalendarAlt className="w-4 h-4 text-[#0066cc]" />
                            <span className="text-sm">
                              {formatDate(post.dateOfBirth)}
                              {getAge(post.dateOfBirth) && (
                                <span className="text-gray-500 ml-1">
                                  (Age {getAge(post.dateOfBirth)})
                                </span>
                              )}
                            </span>
                          </div>

                          {/* Role */}
                          {post.role && (
                            <div className="flex items-center space-x-2 text-gray-600">
                              <FaBriefcase className="w-4 h-4 text-[#0066cc]" />
                              <span className="text-sm">{post.role}</span>
                            </div>
                          )}
                        </div>

                        {/* Action Button */}
                        <div className="mt-4 pt-4 border-t">
                          <Link
                            href={`/biography/${post.slug}`}
                            className="w-full bg-gradient-to-r from-[#0066cc] to-[#0052a3] hover:from-[#d53020] hover:to-[#b8281a] text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                          >
                            View Full Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
