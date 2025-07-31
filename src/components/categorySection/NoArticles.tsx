import { FaNewspaper, FaSearch, FaArrowLeft } from 'react-icons/fa'
import { IoTrendingUp } from 'react-icons/io5'
import Link from 'next/link'

interface NoArticlesFoundProps {
  categorySlug?: string
}

const NoArticlesFound = ({ categorySlug }: NoArticlesFoundProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-[#0066cc]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-[#d53020]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Icon Container */}
        <div className="mb-8">
          <div className="relative inline-flex items-center justify-center">
            {/* Outer ring */}
            <div className="w-32 h-32 bg-gradient-to-r from-[#0066cc]/10 to-[#d53020]/10 rounded-full flex items-center justify-center">
              {/* Inner ring */}
              <div className="w-20 h-20 bg-white border-2 border-[#0066cc]/20 rounded-full flex items-center justify-center shadow-lg">
                <FaNewspaper className="w-8 h-8 text-[#0066cc]" />
              </div>
            </div>
            {/* Floating elements */}
            <FaSearch className="absolute -top-2 -right-2 w-6 h-6 text-[#d53020] opacity-60" />
            <IoTrendingUp className="absolute -bottom-2 -left-2 w-6 h-6 text-[#0066cc] opacity-60" />
          </div>
        </div>

        {/* Text Content */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">No Articles Found</h2>
          <p className="text-gray-600 text-lg mb-2">
            We couldn{"'"}t find any articles in the{' '}
            <span className="font-semibold text-[#0066cc] capitalize">
              {categorySlug?.replace('-', ' ')}
            </span>{' '}
            category.
          </p>
          <p className="text-gray-500 text-base">
            Don{"'"}t worry, our team is constantly adding fresh content. Check back soon!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <button className="group flex items-center space-x-2 bg-gradient-to-r from-[#0066cc] to-[#0066cc]/90 hover:from-[#0066cc]/90 hover:to-[#0066cc] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-[#0066cc] rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-[#d53020] rounded-full animate-pulse"
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div
            className="w-2 h-2 bg-[#0066cc] rounded-full animate-pulse"
            style={{ animationDelay: '0.4s' }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default NoArticlesFound
