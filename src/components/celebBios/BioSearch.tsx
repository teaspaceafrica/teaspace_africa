'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'

function BioSearch() {
  const [query, setQuery] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    // Redirect to search results page with query parameter
    router.push(`/biosearch?q=${encodeURIComponent(query)}`)
    setIsExpanded(false) // Close search on mobile after search
  }

  return (
    <>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <div className="w-full bg-white  border border-gray-200/50 p-4 backdrop-blur-lg">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Know More About Your Celebrity"
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
        </div>
      </form>
    </>
  )
}

export default BioSearch
