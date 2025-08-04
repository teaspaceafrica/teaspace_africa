'use client'
import React, { useState, useEffect } from 'react'
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaStar,
  FaMusic,
  FaFilm,
  FaTshirt,
  FaComments,
} from 'react-icons/fa'
import { MdLiveTv } from 'react-icons/md'
import { IoTrendingUp } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import Search from '../searchComponent/Search'
import { FaXTwitter } from 'react-icons/fa6'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

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
      name: 'TV Shows',
      icon: MdLiveTv,
      href: '/tvshows',
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
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/tea_space_/',
      gradient: 'from-purple-500 to-pink-500',
    },
    { icon: FaXTwitter, href: 'https://x.com/_teaspace', gradient: 'from-blue-400 to-blue-600' },
    {
      icon: FaFacebookF,
      href: 'https://www.facebook.com/teaspacedigital/',
      gradient: 'from-blue-600 to-blue-800',
    },
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
                <Search />

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
