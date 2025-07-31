import Image from 'next/image'
import { FaClock } from 'react-icons/fa'
import { IoTrendingUp } from 'react-icons/io5'
import { Articles } from '@/types/types'

interface ArticleCardProps {
  article: Articles
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="group cursor-pointer h-full">
      <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-white transition-all duration-500 h-full border border-[#d53020]/20 hover:border-[#d53020] hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
          <Image
            width={400}
            height={300}
            src={
              typeof article.image === 'object' && article.image !== null
                ? article.image.url
                : '/placeholder.jpg'
            }
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Hot Badge */}
          {article.subcategory && (
            <div className="absolute top-3 right-3">
              <div className="bg-gradient-to-r from-[#d53020] to-red-600 rounded-full p-2 shadow-lg animate-pulse">
                <IoTrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-1">
          {/* Category */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-[#0066cc] text-sm font-semibold">
              {typeof article.category === 'object' &&
              article.category !== null &&
              'slug' in article.category
                ? article.category.slug
                : typeof article.category === 'string' || typeof article.category === 'number'
                  ? article.category
                  : 'music'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-gray-800 text-sm md:text-base font-bold leading-tight group-hover:text-[#0066cc] transition-colors duration-300 mb-3 flex-1 line-clamp-2">
            {article.title}
          </h3>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-gray-500 text-xs mt-auto pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <FaClock className="w-3 h-3" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <span className="text-gray-400">{article.publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
