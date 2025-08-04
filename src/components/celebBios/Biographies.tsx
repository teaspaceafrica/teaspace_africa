'use client'
import React from 'react'
import Image from 'next/image'
import { FaCalendarAlt, FaBriefcase } from 'react-icons/fa'
import { Bios } from '@/types/types'
import Link from 'next/link'

export default function Biographies({ bios }: { bios: Bios }) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return dateString
    }
  }

  const getAge = (dateString: string) => {
    try {
      const birthDate = new Date(dateString)
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }

      return age
    } catch {
      return null
    }
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
          <div className="group cursor-pointer">
            <div className="bg-white border border-[#d53020] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  width={400}
                  height={600}
                  src={
                    typeof bios.profileImage === 'object' && bios.profileImage !== null
                      ? bios.profileImage.url
                      : '/placeholder.jpg'
                  }
                  alt={bios.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-[#0066cc]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                    <span className="text-white font-medium text-sm">{bios.category}</span>
                  </div>
                </div>

                {/* Featured Badge */}
                {bios.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-[#d53020]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                      <span className="text-white font-medium text-xs">Featured</span>
                    </div>
                  </div>
                )}

                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-bold text-lg mb-1">{bios.name}</h4>
                  {bios.orginalName && bios.orginalName !== bios.name && (
                    <p className="text-white/80 text-sm">({bios.orginalName})</p>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Basic Info */}
                <div className="space-y-3 mb-4">
                  {/* Date of Birth & Age */}
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FaCalendarAlt className="w-4 h-4 text-[#0066cc]" />
                    <span className="text-sm">
                      {formatDate(bios.dateOfBirth)}
                      {getAge(bios.dateOfBirth) && (
                        <span className="text-gray-500 ml-1">(Age {getAge(bios.dateOfBirth)})</span>
                      )}
                    </span>
                  </div>

                  {/* Role */}
                  {bios.role && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FaBriefcase className="w-4 h-4 text-[#0066cc]" />
                      <span className="text-sm">{bios.role}</span>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="mt-4 pt-4 border-t">
                  <Link
                    href={`/biography/${bios.slug}`}
                    className="w-full bg-gradient-to-r from-[#0066cc] to-[#0052a3] hover:from-[#d53020] hover:to-[#b8281a] text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    View Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
