'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  FaStar,
  FaMusic,
  FaFilm,
  FaChevronLeft,
  FaChevronRight,
  FaCamera,
  FaHeart,
  FaInstagram,
  FaArrowRight,
} from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'

const celebrities = [
  {
    id: 1,
    name: 'Emma Stone',
    category: 'Actress',
    categoryIcon: FaFilm,
    image:
      'https://images.unsplash.com/photo-1494790108755-2616c88d40b2?w=400&h=600&fit=crop&crop=faces',
    followers: '12.3M',
    isVerified: true,
    isHot: true,
  },
  {
    id: 2,
    name: 'Ryan Gosling',
    category: 'Actor',
    categoryIcon: FaFilm,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=faces',
    followers: '8.7M',
    isVerified: true,
    isHot: false,
  },
  {
    id: 3,
    name: 'Zendaya',
    category: 'Influencer',
    categoryIcon: FaInstagram,
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop&crop=faces',
    followers: '184.7M',
    isVerified: true,
    isHot: true,
  },
  {
    id: 4,
    name: 'Michael B. Jordan',
    category: 'Actor',
    categoryIcon: FaFilm,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=faces',
    followers: '22.1M',
    isVerified: true,
    isHot: false,
  },
  {
    id: 5,
    name: 'Ariana Grande',
    category: 'Music',
    categoryIcon: FaMusic,
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=faces',
    followers: '376.2M',
    isVerified: true,
    isHot: true,
  },
  {
    id: 6,
    name: 'Bella Hadid',
    category: 'Model',
    categoryIcon: FaCamera,
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=faces',
    followers: '59.7M',
    isVerified: true,
    isHot: false,
  },
]

export default function CelebBio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % celebrities.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % celebrities.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + celebrities.length) % celebrities.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Calculate visible celebrities (show 3 on desktop, 1 on mobile)
  const getVisibleCelebrities = () => {
    const visibleCount = 3
    const celebrities_extended = [...celebrities, ...celebrities] // Duplicate for seamless loop
    return Array.from(
      { length: visibleCount },
      (_, i) => celebrities_extended[(currentIndex + i) % celebrities.length],
    )
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
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-[#0066cc] via-[#d53020]/50 to-transparent ml-4"></div>
            </div>
            <button className="flex items-center space-x-2 text-[#0066cc] hover:text-[#d53020] transition-colors duration-300 font-medium text-sm group">
              <span>View All</span>
              <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop View - 3 Cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {getVisibleCelebrities().map((celeb, index) => (
              <div key={`${celeb.id}-${index}`} className="group cursor-pointer">
                <div className="bg-white border border-[#d53020] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      width={400}
                      height={600}
                      src={celeb.image}
                      alt={celeb.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-1 bg-[#0066cc]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                        <celeb.categoryIcon className="w-4 h-4 text-white" />
                        <span className="text-white font-medium text-sm">{celeb.category}</span>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-white font-bold text-xl">{celeb.name}</h3>
                          {celeb.isVerified && <MdVerified className="w-4 h-4 text-[#d53020]" />}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-white/80">
                          <FaHeart className="w-4 h-4" />
                          <span className="text-sm font-medium">{celeb.followers}</span>
                        </div>

                        <button
                          onClick={() => goToSlide(index)}
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full px-4 py-2 text-white text-sm font-medium transition-colors border border-white/20"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Single Card */}
          <div className="md:hidden">
            <div className="bg-white border border-[#d53020] rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96 overflow-hidden">
                <Image
                  width={400}
                  height={600}
                  src={celebrities[currentIndex].image}
                  alt={celebrities[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-[#0066cc]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                    <span className="text-white font-medium text-sm">
                      {celebrities[currentIndex].category}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-white font-bold text-xl">
                        {celebrities[currentIndex].name}
                      </h3>
                      {celebrities[currentIndex].isVerified && (
                        <MdVerified className="w-4 h-4 text-[#d53020]" />
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-white/80">
                      <FaHeart className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {celebrities[currentIndex].followers}
                      </span>
                    </div>

                    <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full px-4 py-2 text-white text-sm font-medium transition-colors border border-white/20">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white border border-[#d53020] rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200 z-10"
          >
            <FaChevronLeft className="w-5 h-5 text-[#0066cc]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white border border-[#d53020] rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200 z-10"
          >
            <FaChevronRight className="w-5 h-5 text-[#0066cc]" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {celebrities.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#0066cc] scale-125' : 'bg-gray-300 hover:bg-gray-400'
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
      </div>
    </section>
  )
}
