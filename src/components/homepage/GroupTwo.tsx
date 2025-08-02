import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CategoryHeader from './CategoryHeader'
import FeaturedArticle from './FeaturedArticle'
import ArticleCard from './ArticleCard'
import { Articles } from '@/types/types'

export default function GroupTwo({ posts }: { posts: Articles[] }) {
  const musicArticles = posts.filter((post) => {
    if (typeof post.category === 'object' && 'name' in post.category) {
      return post.category.name === 'Music'
    }
    return false
  })

  const celebrityArticles = posts.filter((post) => {
    if (typeof post.category === 'object' && 'name' in post.category) {
      return post.category.name === 'Celebrity'
    }
    return false
  })

  return (
    <section className="grouptwo relative overflow-hidden min-h-screen py-8 sm:py-12 border-t border-[#d53020]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Music */}
          <div className="leftsection space-y-6">
            <CategoryHeader title="Music" />

            <div className="banner">
              <FeaturedArticle article={musicArticles[0]} />
            </div>

            <div className="otherarticles">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {musicArticles.slice(1, 3).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {/* Additional smaller cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {musicArticles.slice(0, 2).map((article) => (
                  <div key={article.id} className="group cursor-pointer">
                    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl bg-white transition-all duration-300 border border-[#d53020]/20 hover:border-[#d53020] hover:-translate-y-0.5">
                      <div className="relative h-24 sm:h-32 overflow-hidden">
                        <Image
                          width={300}
                          height={200}
                          src={
                            typeof article.image === 'object' && article.image !== null
                              ? article.image.url
                              : '/placeholder.jpg'
                          }
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3">
                        <div className="flex items-center space-x-1 mb-2">
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
                        <h4 className="text-gray-800 text-sm font-semibold leading-tight line-clamp-2 group-hover:text-[#0066cc] transition-colors">
                          {article.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Celebrity */}
          <div className="rightsection space-y-6 text-white">
            <CategoryHeader title="Celebrity" />

            <div className="banner">
              <FeaturedArticle article={celebrityArticles[1]} />
            </div>

            <div className="otherarticles">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {celebrityArticles.slice(1, 3).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {/* Additional smaller cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {celebrityArticles.slice(0, 2).map((article) => (
                  <div key={article.id} className="group cursor-pointer">
                    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl bg-white transition-all duration-300 border border-[#d53020]/20 hover:border-[#d53020] hover:-translate-y-0.5">
                      <div className="relative h-24 sm:h-32 overflow-hidden">
                        <Image
                          width={300}
                          height={200}
                          src={
                            typeof article.image === 'object' && article.image !== null
                              ? article.image.url
                              : '/placeholder.jpg'
                          }
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3">
                        <div className="flex items-center space-x-1 mb-2">
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
                        .
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
                          <h4 className="text-gray-800 text-sm font-semibold leading-tight line-clamp-2 group-hover:text-[#0066cc] transition-colors">
                            {article.title}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-[#0066cc]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-[#d53020]/5 to-transparent rounded-full blur-3xl"></div>
    </section>
  )
}
