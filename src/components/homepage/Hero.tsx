'use client'
import Image from 'next/image'
import React from 'react'
import { FaPlay, FaClock, FaNewspaper } from 'react-icons/fa'
import { IoTrendingUp } from 'react-icons/io5'
import { Articles } from '@/types/types'
import Link from 'next/link'

export default function Hero({ posts = [] }: { posts?: Articles[] }) {
  console.log(posts.map((p) => p.subcategory))

  const featuredBanner = posts.filter((post) => post.subcategory === 'isFeatured')
  const latestArticles = posts.filter(
    (post) => post.subcategory !== 'isFeatured' && post.subcategory !== 'isTrending',
  )

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden min-h-screen py-4 sm:py-6 md:py-8">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 w-20 h-20 sm:w-32 sm:h-32 bg-[#0066cc]/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-16 right-4 w-24 h-24 sm:w-40 sm:h-40 bg-[#d53020]/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-[#0066cc]/3 to-[#d53020]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Mobile-First Layout */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Main Featured Article - Mobile Optimized */}
            <div className="relative group cursor-pointer mb-4 sm:mb-6">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl bg-white border border-[#d53020]">
                {/* Image */}
                <Image
                  width={800}
                  height={600}
                  src={
                    typeof featuredBanner[0]?.image === 'object' &&
                    featuredBanner[0]?.image !== null
                      ? featuredBanner[0]?.image.url
                      : '/placeholder.jpg'
                  }
                  alt={featuredBanner[0]?.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                  {/* Badges */}
                  <div className="flex items-center flex-wrap gap-2 mb-3">
                    <div className="flex items-center space-x-1 bg-[#0066cc]/90 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 border border-white/20">
                      <span className="text-white font-medium text-xs">
                        {typeof featuredBanner[0]?.category === 'object' &&
                        featuredBanner[0]?.category !== null &&
                        'slug' in featuredBanner[0]?.category
                          ? featuredBanner[0]?.category.slug
                          : typeof featuredBanner[0]?.category === 'string' ||
                              typeof featuredBanner[0]?.category === 'number'
                            ? featuredBanner[0]?.category
                            : 'music'}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link
                    href={`/${
                      typeof featuredBanner[0].category === 'object' &&
                      featuredBanner[0].category !== null &&
                      'slug' in featuredBanner[0].category
                        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          (featuredBanner[0].category as any).slug
                        : typeof featuredBanner[0].category === 'string' ||
                            typeof featuredBanner[0].category === 'number'
                          ? featuredBanner[0].category
                          : 'entertainment'
                    }/${featuredBanner[0].slug}`}
                  >
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight line-clamp-3 group-hover:text-orange-200 transition-colors">
                      {featuredBanner[0]?.title}
                    </h1>
                  </Link>

                  {/* Excerpt - Hidden on small mobile */}
                  <p className="hidden sm:block text-white/90 text-sm md:text-base mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                    {featuredBanner[0]?.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center space-x-2 sm:space-x-4 text-white/80 text-xs">
                      <span className="hidden sm:inline">
                        {typeof featuredBanner[0]?.author === 'string'
                          ? featuredBanner[0]?.author
                          : typeof featuredBanner[0]?.author === 'object' &&
                              featuredBanner[0]?.author !== null &&
                              'name' in featuredBanner[0]?.author
                            ? (featuredBanner[0]?.author as { name?: string }).name ||
                              'Unknown Author'
                            : 'Unknown Author'}
                      </span>
                      <div className="flex items-center space-x-1">
                        <FaClock className="w-3 h-3" />
                        <span>{featuredBanner[0]?.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3">
                      <FaPlay className="w-3 h-3 text-white" />
                      <span className="text-white text-xs font-medium">Read</span>
                    </div>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Featured Banner Grid - Responsive */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4">
              {featuredBanner.slice(1, 4).map((article) => (
                <div key={article.id} className="group cursor-pointer">
                  <Link
                    href={`/${
                      typeof article.category === 'object' &&
                      article.category !== null &&
                      'slug' in article.category
                        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          (article.category as any).slug
                        : typeof article.category === 'string' ||
                            typeof article.category === 'number'
                          ? article.category
                          : 'entertainment'
                    }/${article.slug}`}
                  >
                    <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg bg-white transition-all duration-300 h-full border border-[#d53020]">
                      {/* Image */}
                      <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                        <Image
                          width={400}
                          height={300}
                          src={
                            typeof article.image === 'object' && article.image !== null
                              ? article.image.url
                              : '/placeholder.jpg'
                          }
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2">
                          <div className="flex items-center flex-wrap gap-2 mb-3">
                            <div className="md:flex items-center space-x-1 bg-[#0066cc]/90 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 border border-white/20 hidden">
                              <span className="text-white font-medium text-xs">
                                {typeof article.category === 'object' &&
                                article.category !== null &&
                                'slug' in article.category
                                  ? article.category.slug
                                  : typeof article.category === 'string' ||
                                      typeof article.category === 'number'
                                    ? article.category
                                    : 'music'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-3 sm:p-4">
                        <div className="flex md:hidden items-center space-x-2 mb-2">
                          <span className="text-[#0066cc] text-xs font-medium">
                            {typeof article.category === 'object' &&
                            article.category !== null &&
                            'slug' in article.category
                              ? article.category.slug
                              : typeof article.category === 'string' ||
                                  typeof article.category === 'number'
                                ? article.category
                                : 'music'}
                          </span>
                        </div>
                        <h3 className="text-gray-800 text-sm sm:text-base leading-tight line-clamp-3 group-hover:text-[#0066cc] transition-colors">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Mobile Optimized */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-[#d53020] rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-2">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-lg">
                    <FaNewspaper className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-gray-800">More Stories</h2>
                </div>
                <IoTrendingUp className="w-5 h-5 text-[#0066cc]" />
              </div>

              {/* Articles List - Mobile Optimized */}
              <div className="space-y-3 sm:space-y-4">
                {latestArticles.slice(0, 5).map((article) => (
                  <div key={article.id} className="group cursor-pointer">
                    <Link
                      href={`/${
                        typeof article.category === 'object' &&
                        article.category !== null &&
                        'slug' in article.category
                          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            (article.category as any).slug
                          : typeof article.category === 'string' ||
                              typeof article.category === 'number'
                            ? article.category
                            : 'entertainment'
                      }/${article.slug}`}
                    >
                      <div className="flex space-x-3 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <Image
                            width={50}
                            height={50}
                            src={
                              typeof article.image === 'object' && article.image !== null
                                ? article.image.url
                                : '/placeholder.jpg'
                            }
                            alt={article.title}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-[#0066cc] text-xs font-medium">
                              {typeof article.category === 'object' &&
                              article.category !== null &&
                              'slug' in article.category
                                ? article.category.slug
                                : typeof article.category === 'string' ||
                                    typeof article.category === 'number'
                                  ? article.category
                                  : 'music'}
                            </span>
                          </div>
                          <h4 className="text-gray-800 font-semibold text-xs sm:text-sm leading-tight line-clamp-2 group-hover:text-[#0066cc] transition-colors mb-1 sm:mb-2">
                            {article.title}
                          </h4>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{article.publishedAt}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
