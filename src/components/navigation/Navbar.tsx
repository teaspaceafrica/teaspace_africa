'use client'
import React, { useState, useEffect } from 'react'
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaStar,
  FaMusic,
  FaFilm,
  FaTshirt,
  FaComments,
} from 'react-icons/fa'
import { IoTrendingUp } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mainNavItems = [
    {
      name: 'Music',
      icon: FaMusic,
      href: '/music',
    },
    {
      name: 'Celebrity',
      icon: FaStar,
      href: '/celebrity',
    },
    {
      name: 'Movies',
      icon: FaFilm,
      href: '/movies',
    },
    {
      name: 'Fashion',
      icon: FaTshirt,
      href: '/fashion',
    },
    {
      name: 'Gossip',
      icon: FaComments,
      href: '/gossip',
    },
    {
      name: 'Trending',
      icon: IoTrendingUp,
      href: '/trending',
    },
  ]

  const socialLinks = [
    { icon: FaInstagram, href: '#', gradient: 'from-purple-500 to-pink-500' },
    { icon: FaTwitter, href: '#', gradient: 'from-blue-400 to-blue-600' },
    { icon: FaFacebookF, href: '#', gradient: 'from-blue-600 to-blue-800' },
    { icon: FaYoutube, href: '#', gradient: 'from-red-500 to-red-700' },
  ]

  return (
    <>
      <nav
        className={`w-full relative z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/95 shadow-2xl' : ''}`}
      >
        {/* Trendy Top Bar */}
        <div className="bg-[#0066cc] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex justify-between items-center h-10">
              {/* Animated Social Links */}
              <div className="hidden md:flex items-center space-x-6">
                <span className="text-xs text-white/90 font-bold tracking-wider">
                  CONNECT WITH US
                </span>
                <div className="flex space-x-3">
                  {socialLinks.map(({ icon: Icon, href, gradient }, index) => (
                    <div
                      key={index}
                      className={`p-1.5 rounded-full bg-gradient-to-r ${gradient} hover:scale-110 transform transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                    >
                      <Link href={href}>
                        <Icon className="w-3 h-3 text-white" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Time with Pulse Effect */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-white/90 font-medium">
                  LIVE •{' '}
                  {new Date().toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation with Glassmorphism */}
        <div className="bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Enhanced Logo Area */}
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-xl opacity-20 group-hover:opacity-30 transition-opacity blur-lg"></div>
                  <Link href="/" className="relative block p-2">
                    <Image
                      src="/light.png"
                      alt="TeaSpace Africa Logo"
                      width={120}
                      height={120}
                      className="group-hover:scale-105"
                    />
                  </Link>
                </div>
              </div>

              {/* Enhanced Desktop Navigation with Shadcn Dropdowns */}
              <div className="hidden lg:flex items-center space-x-1">
                {mainNavItems.map(({ name, icon: Icon, href }, index) => (
                  <Link href={href} key={index} className="relative group">
                    <div
                      className={`
                          flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group
                          ${
                            activeItem === index
                              ? 'bg-[#0066cc] text-white shadow-lg transform scale-105'
                              : 'text-gray-700 hover:text-white hover:bg-[#0066cc]'
                          }
                        `}
                      onMouseEnter={() => setActiveItem(index)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{name}</span>
                    </div>
                    {name === 'Trending' && (
                      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full animate-pulse">
                        Hot
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </Link>
                ))}
              </div>

              {/* Enhanced Search and Menu */}
              <div className="flex items-center space-x-4">
                {/* Animated Search */}
                <div className="relative">
                  <button
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
                          type="text"
                          placeholder="What's the tea today? ☕"
                          className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent text-gray-700 placeholder-gray-500"
                        />
                        <FaSearch className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Futuristic Mobile Menu */}
                <div className="lg:hidden">
                  <button
                    onClick={toggleMenu}
                    className="p-3 rounded-full bg-gradient-to-r from-[#0066cc] to-[#d53020] text-white shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    {isMenuOpen ? (
                      <FaTimes className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    ) : (
                      <FaBars className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute w-full bg-white/95 backdrop-blur-lg border-b-4 border-[#0066cc] shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2 max-h-full overflow-y-auto">
              {mainNavItems.map(({ name, icon: Icon }, index) => (
                <div key={index} className="group">
                  <Link
                    href={`/${name.toLowerCase()}`}
                    key={index}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-[#0066cc] hover:to-[#d53020] text-gray-700 hover:text-white transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{name}</span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </Link>
                </div>
              ))}

              {/* Mobile Social with Gradients */}
              <div className="pt-6 border-t border-gray-200/50">
                <div className="flex justify-center space-x-4">
                  {socialLinks.map(({ icon: Icon, href, gradient }, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-full bg-gradient-to-r ${gradient} hover:scale-110 transform transition-all duration-300 cursor-pointer shadow-lg`}
                    >
                      <Link href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="w-5 h-5 text-white" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
