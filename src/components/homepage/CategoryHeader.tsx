import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface CategoryHeaderProps {
  title: string
}

export default function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center flex-1">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[#d53020] via-[#d53020]/50 to-transparent ml-4"></div>
      </div>
      <button className="flex items-center space-x-2 text-[#0066cc] hover:text-[#d53020] transition-colors duration-300 font-medium text-sm group">
        <span>View All</span>
        <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  )
}
