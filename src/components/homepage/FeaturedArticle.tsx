import React from 'react'
import Image from 'next/image'
import { FaClock, FaPlay } from 'react-icons/fa'
import { Articles } from '@/types/types'
import Link from 'next/link'

interface FeaturedArticleProps {
  article: Articles
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  if (!article) {
    return null
  }
  return (
    <div className="relative group cursor-pointer mb-6">
      <div className="relative h-72 sm:h-80 md:h-[300px] rounded-2xl overflow-hidden shadow-xl bg-white border-2 border-[#d53020]/20 hover:border-[#d53020] transition-all duration-500">
        {/* Image */}
        <Image
          width={800}
          height={600}
          src={
            typeof article.image === 'object' && article.image !== null
              ? article.image.url
              : '/placeholder.jpg'
          }
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {/* Category Badge */}
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <div className="flex items-center space-x-2 bg-[#0066cc]/90 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 shadow-lg">
              <span className="text-white font-semibold text-sm">
                {' '}
                {typeof article.category === 'object' &&
                article.category !== null &&
                'slug' in article.category
                  ? article.category.slug
                  : typeof article.category === 'string' || typeof article.category === 'number'
                    ? article.category
                    : 'music'}
              </span>
            </div>
          </div>

          {/* Title */}
          <Link
            href={`/${
              typeof article.category === 'object' &&
              article.category !== null &&
              'slug' in article.category
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (article.category as any).slug
                : typeof article.category === 'string' || typeof article.category === 'number'
                  ? article.category
                  : 'entertainment'
            }/${article.slug}`}
          >
            <h1 className="text-base md:text-xl font-bold text-white mb-3 leading-tight line-clamp-3 group-hover:text-orange-200 transition-colors duration-300">
              {article.title}
            </h1>
          </Link>

          {/* Meta Info */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-4 text-white/80 text-sm">
              <span className="hidden sm:inline font-medium">
                {' '}
                {typeof article.author === 'number'
                  ? article.author
                  : article.author && typeof article.author === 'object' && 'name' in article.author
                    ? article.author.name
                    : ''}
              </span>
              <div className="flex items-center space-x-1">
                <FaClock className="w-4 h-4" />
                <span>{article.readTime} read</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-colors duration-300">
              <FaPlay className="w-4 h-4 text-white" />
              <Link
                href={`/${
                  typeof article.category === 'object' &&
                  article.category !== null &&
                  'slug' in article.category
                    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (article.category as any).slug
                    : typeof article.category === 'string' || typeof article.category === 'number'
                      ? article.category
                      : 'entertainment'
                }/${article.slug}`}
              >
                <span className="text-white text-sm font-semibold">Read More</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </div>
  )
}
