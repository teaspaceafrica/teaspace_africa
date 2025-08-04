import React from 'react'
import { FaArrowRight, FaUserTimes } from 'react-icons/fa'

export default function EmptyState() {
  return (
    <div className="text-center py-16 md:py-24">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-[#0066cc]/10 to-[#d53020]/10 rounded-full flex items-center justify-center">
            <FaUserTimes className="w-12 h-12 text-gray-400" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#d53020] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">0</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-gray-800">No Celebrity Bios Found</h3>
          <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
            It looks like there are no celebrity biographies available at the moment. Check back
            later for exciting content!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-[#0066cc] hover:bg-[#0052a3] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center space-x-2">
            <span>Browse Categories</span>
            <FaArrowRight className="w-4 h-4" />
          </button>
          <button className="border border-[#d53020] text-[#d53020] hover:bg-[#d53020] hover:text-white px-6 py-3 rounded-full font-medium transition-colors duration-300">
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  )
}
