'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaGlobe,
  FaCalendarAlt,
  FaBriefcase,
} from 'react-icons/fa'
import { FaSpotify } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Bios } from '@/types/types'
import EmptyState from '../celebBios/EmptyState'
import Link from 'next/link'

export default function CelebBio({ bios = [] }: { bios: Bios[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || bios.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bios.length)
    }, 5000) // Increased to 5s to give more time to read extra info

    return () => clearInterval(interval)
  }, [isAutoPlaying, bios.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bios.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bios.length) % bios.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const getSocialIcon = (platform: string) => {
    const platformLower = platform.toLowerCase()
    switch (platformLower) {
      case 'instagram':
        return <FaInstagram />
      case 'twitter':
        return <FaXTwitter />
      case 'facebook':
        return <FaFacebook />
      case 'youtube':
        return <FaYoutube />
      case 'tiktok':
        return <FaTiktok />
      case 'spotify':
        return <FaSpotify />
      default:
        return <FaGlobe />
    }
  }

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
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden py-8 md:py-8 border-t border-[#0066cc]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 w-32 h-32 bg-[#0066cc]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-4 w-40 h-40 bg-[#d53020]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0066cc]/3 to-[#d53020]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-8">
          <div className="flex items-center justify-start space-x-2 mb-4">
            <div className="flex items-center flex-1">
              <div className="flex items-center space-x-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Celebrity Bios</h2>
                {bios.length > 0 && (
                  <span className="bg-[#0066cc] text-white text-sm font-medium px-3 py-1 rounded-full">
                    {bios.length}
                  </span>
                )}
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-[#0066cc] via-[#d53020]/50 to-transparent ml-4"></div>
            </div>
            {bios.length > 0 && (
              <Link
                href="/biography"
                className="flex items-center space-x-2 text-[#0066cc] hover:text-[#d53020] transition-colors duration-300 font-medium text-sm group"
              >
                <span>View All</span>
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            )}
          </div>
        </div>

        {/* Conditional Rendering: Empty State or Carousel */}
        {bios.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* Carousel Container */}
            <div className="relative">
              {/* Desktop View - 3 Cards */}
              <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
                {bios.slice(0, 9).map((celeb, index) => (
                  <div key={`${celeb.id}-${index}`} className="group cursor-pointer">
                    <div className="bg-white border border-[#d53020] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          width={400}
                          height={600}
                          src={
                            typeof celeb.profileImage === 'object' && celeb.profileImage !== null
                              ? celeb.profileImage.url
                              : '/placeholder.jpg'
                          }
                          alt={celeb.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center space-x-1 bg-[#0066cc]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                            <span className="text-white font-medium text-sm">{celeb.category}</span>
                          </div>
                        </div>

                        {/* Featured Badge */}
                        {celeb.featured && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-[#d53020]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                              <span className="text-white font-medium text-xs">Featured</span>
                            </div>
                          </div>
                        )}

                        {/* Name Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-white font-bold text-lg mb-1">{celeb.name}</h4>
                          <p className="text-white/80 text-sm">{celeb.orginalName}</p>
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
                              {formatDate(celeb.dateOfBirth)}
                              {getAge(celeb.dateOfBirth) && (
                                <span className="text-gray-500 ml-1">
                                  (Age {getAge(celeb.dateOfBirth)})
                                </span>
                              )}
                            </span>
                          </div>

                          {/* Role */}
                          {celeb.role && (
                            <div className="flex items-center space-x-2 text-gray-600">
                              <FaBriefcase className="w-4 h-4 text-[#0066cc]" />
                              <span className="text-sm">{celeb.role}</span>
                            </div>
                          )}
                        </div>

                        {/* Action Button */}
                        <div className="mt-4 pt-4 border-t">
                          <Link
                            href={`/biography/${celeb.slug}`}
                            className="w-full bg-gradient-to-r from-[#0066cc] to-[#0052a3] hover:from-[#d53020] hover:to-[#b8281a] text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                          >
                            View Full Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile View - Single Card with Enhanced Info */}
              <div className="md:hidden">
                <div className="bg-white border border-[#d53020] rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      width={400}
                      height={600}
                      src={
                        typeof bios[currentIndex].profileImage === 'object' &&
                        bios[currentIndex].profileImage !== null
                          ? bios[currentIndex].profileImage.url
                          : '/placeholder.jpg'
                      }
                      alt={bios[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-1 bg-[#0066cc]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                        <span className="text-white font-medium text-sm">
                          {bios[currentIndex].category}
                        </span>
                      </div>
                    </div>

                    {bios[currentIndex].featured && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-[#d53020]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                          <span className="text-white font-medium text-xs">Featured</span>
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-white font-bold text-xl mb-2">
                        {bios[currentIndex].name}
                      </h4>

                      <p className="text-white/80 text-sm mb-2">{bios[currentIndex].orginalName}</p>

                      <div className="flex items-center space-x-4 text-white/90 text-sm mb-3">
                        <div className="flex items-center space-x-1">
                          <FaCalendarAlt className="w-3 h-3" />
                          <span>Age {getAge(bios[currentIndex].dateOfBirth)}</span>
                        </div>
                        {bios[currentIndex].role && (
                          <div className="flex items-center space-x-1">
                            <FaBriefcase className="w-3 h-3" />
                            <span>{bios[currentIndex].role}</span>
                          </div>
                        )}
                      </div>

                      <Link
                        href={`/biography/${bios[currentIndex].slug}`}
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full px-4 py-2 text-white text-sm font-medium transition-colors border border-white/20"
                      >
                        View Full Bio
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Bio Section */}
                  <div className="p-6">
                    {/* Social Links Mobile */}
                    {bios[currentIndex].socialLinks &&
                      bios[currentIndex].socialLinks.length > 0 && (
                        <div className="flex space-x-4 justify-center">
                          {bios[currentIndex].socialLinks.slice(0, 5).map((social, socialIndex) => (
                            <a
                              key={socialIndex}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-[#0066cc] transition-colors duration-200"
                              title={social.platform}
                            >
                              <div className="w-6 h-6 flex items-center justify-center">
                                {getSocialIcon(social.platform)}
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 bottom-0 transform -translate-y-1/2 p-3 bg-white border border-[#d53020] rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200 z-10"
            >
              <FaChevronLeft className="w-5 h-5 text-[#0066cc]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 bottom-0 transform -translate-y-1/2 p-3 bg-white border border-[#d53020] rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200 z-10"
            >
              <FaChevronRight className="w-5 h-5 text-[#0066cc]" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {bios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#0066cc] scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isAutoPlaying
                    ? 'bg-[#0066cc] text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-white animate-pulse' : 'bg-gray-500'}`}
                ></div>
                <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
