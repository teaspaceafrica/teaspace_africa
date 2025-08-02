'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'

function Search() {
  const [query, setQuery] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    // Redirect to search results page with query parameter
    router.push(`/search?q=${encodeURIComponent(query)}`)
    setIsExpanded(false) // Close search on mobile after search
  }

  return (
    <>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <button
            type="button"
            onClick={toggleSearch}
            className={`
                           p-3 rounded-full transition-all duration-300 group
                           ${
                             isSearchOpen
                               ? 'bg-gradient-to-r from-[#0066cc] to-[#d53020] text-white shadow-lg'
                               : 'bg-gray-100 hover:bg-gradient-to-r hover:from-[#0066cc] hover:to-[#d53020] text-gray-600 hover:text-white'
                           }
                         `}
          >
            <FaSearch className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          {isSearchOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200/50 p-4 backdrop-blur-lg">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="What's the tea today? ☕"
                  className="w-full px-4 py-3 pl-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent text-gray-700 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-8 top-2.5 bg-[#0066cc] rounded-full p-2 cursor-pointer"
                >
                  <FaSearch className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  )
}

export default Search
