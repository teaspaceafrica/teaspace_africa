import React from 'react'

export default function Header({ title }: { title?: string }) {
  return (
    <section className="relative bg-gradient-to-r from-[#0066cc] to-[#0052a3] text-white overflow-hidden py-8">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 right-8 w-16 h-16 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-2 left-8 w-12 h-12 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="hidden sm:block w-12 h-px bg-white/30 mr-4"></div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white capitalize tracking-wide">
            {title || 'Trending'}
          </h1>

          {/* Simple accent line */}
          <div className="hidden sm:block w-12 h-px bg-white/30 ml-4"></div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  )
}
