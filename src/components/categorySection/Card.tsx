import Image from 'next/image'
import { FaClock } from 'react-icons/fa'
import { Articles } from '@/types/types'
import Link from 'next/link'

interface ArticleCardProps {
  article: Articles
}

export default function Card({ article }: ArticleCardProps) {
  return (
    <div className="group cursor-pointer h-full w-full">
      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white transition-all duration-500 h-full border border-[#d53020]/20 hover:border-[#d53020] hover:-translate-y-2 hover:scale-[1.02]">
        {/* Image Section */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            width={400}
            height={224}
            src={
              typeof article.image === 'object' && article.image !== null
                ? article.image.url
                : '/placeholder.jpg'
            }
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

          {/* Reading Time Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
              <div className="flex items-center text-xs space-x-1 text-white">
                <FaClock className="w-3 h-3" />
                <span>{article.readTime} min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 md:p-6 bg-white flex flex-col justify-between flex-grow">
          {/* Title */}
          <div className="mb-4">
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
              <h3 className="text-gray-900 text-lg md:text-xl font-bold leading-tight mb-3 line-clamp-2 group-hover:text-[#0066cc] transition-colors duration-300">
                {article.title}
              </h3>
            </Link>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {article.excerpt || 'No description available.'}
            </p>
          </div>

          {/* Bottom Meta Info */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm font-medium">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>

              {/* Read More Indicator */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-px bg-gradient-to-r from-[#0066cc] to-[#d53020] group-hover:w-12 transition-all duration-300"></div>
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
                  <span className="text-[#d53020] text-sm font-semibold uppercase tracking-wide group-hover:text-[#0066cc] transition-colors duration-300">
                    Read
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Accent Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066cc] via-purple-500 to-[#d53020] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  )
}
