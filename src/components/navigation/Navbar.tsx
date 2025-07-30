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
  FaFire,
  FaMusic,
  FaFilm,
  FaTrophy,
  FaTshirt,
  FaComments,
  FaNewspaper,
  FaHeart,
  FaGamepad,
  FaTv,
  FaCalendarAlt,
  FaGlobe,
  FaChevronDown,
  FaCrown,
  FaCamera,
  FaMicrophone,
  FaTheaterMasks,
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { IoTrendingUp } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<number, boolean>>({})

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

  const toggleMobileDropdown = (index: number) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const mainNavItems = [
    {
      name: 'Celebrity',
      icon: FaStar,
      hot: true,
      dropdown: [
        { name: 'Celebrity News', icon: FaNewspaper, href: '/celebrity/news' },
        { name: 'Interviews', icon: FaMicrophone, href: '/celebrity/interviews', hot: true },
        { name: 'Red Carpet', icon: FaCamera, href: '/celebrity/red-carpet' },
        { name: 'Celebrity Style', icon: FaTshirt, href: '/celebrity/style' },
        { name: 'Relationships', icon: FaHeart, href: '/celebrity/relationships', hot: true },
      ],
    },
    {
      name: 'Entertainment',
      icon: FaTheaterMasks,
      hot: false,
      dropdown: [
        { name: 'Movies', icon: FaFilm, href: '/entertainment/movies', hot: true },
        { name: 'TV Shows', icon: FaTv, href: '/entertainment/tv' },
        { name: 'Music', icon: FaMusic, href: '/entertainment/music' },
        { name: 'Gaming', icon: FaGamepad, href: '/entertainment/gaming' },
        { name: 'Streaming', icon: FaYoutube, href: '/entertainment/streaming', hot: true },
      ],
    },
    {
      name: 'Fashion',
      icon: FaTshirt,
      hot: true,
      dropdown: [
        { name: 'Latest Trends', icon: IoTrendingUp, href: '/fashion/trends', hot: true },
        { name: 'Designer Spotlight', icon: FaCrown, href: '/fashion/designers' },
        { name: 'Street Style', icon: FaCamera, href: '/fashion/street-style' },
        { name: 'Beauty', icon: HiSparkles, href: '/fashion/beauty' },
        { name: 'Fashion Week', icon: FaCalendarAlt, href: '/fashion/fashion-week', hot: true },
      ],
    },
    {
      name: 'Awards',
      icon: FaTrophy,
      hot: false,
      dropdown: [
        { name: 'Oscars', icon: FaTrophy, href: '/awards/oscars' },
        { name: 'Golden Globes', icon: FaStar, href: '/awards/golden-globes' },
        { name: 'Grammys', icon: FaMusic, href: '/awards/grammys' },
        { name: 'Emmys', icon: FaTv, href: '/awards/emmys' },
        { name: 'Award Season', icon: FaCalendarAlt, href: '/awards/season', hot: true },
      ],
    },
    {
      name: 'Gossip',
      icon: FaComments,
      hot: true,
      dropdown: [
        { name: 'Hot Takes', icon: FaFire, href: '/gossip/hot-takes', hot: true },
        { name: 'Drama Alert', icon: FaComments, href: '/gossip/drama', hot: true },
        { name: 'Breakups & Makeups', icon: FaHeart, href: '/gossip/relationships' },
        { name: 'Social Media Tea', icon: FaInstagram, href: '/gossip/social-media' },
        { name: 'Exclusive Scoops', icon: FaCrown, href: '/gossip/exclusive', hot: true },
      ],
    },
    {
      name: 'Trending',
      icon: IoTrendingUp,
      hot: true,
      dropdown: [
        { name: 'Viral Content', icon: FaFire, href: '/trending/viral', hot: true },
        { name: 'Social Buzz', icon: FaTwitter, href: '/trending/social' },
        { name: 'Memes & Fun', icon: HiSparkles, href: '/trending/memes' },
        { name: 'Global Trends', icon: FaGlobe, href: '/trending/global' },
        { name: "What's Hot", icon: IoTrendingUp, href: '/trending/hot', hot: true },
      ],
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
      {/* Animated Background */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-r from-[#0066cc] via-purple-600 to-[#d53020] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>

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
                      <Icon className="w-3 h-3 text-white" />
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
                {mainNavItems.map(({ name, icon: Icon, hot, dropdown }, index) => (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <button
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
                        <Icon className="w-4 h-4" />
                        <span>{name}</span>
                        {hot && <FaFire className="w-3 h-3 text-orange-400 animate-pulse" />}
                        <FaChevronDown className="w-3 h-3" />

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-64 bg-white/95 backdrop-blur-lg border border-gray-200/50 shadow-2xl rounded-2xl p-2"
                      align="start"
                    >
                      <DropdownMenuLabel className="text-gray-600 font-semibold px-3 py-2">
                        {name}
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-gray-200/50" />
                      {dropdown?.map((item, itemIndex) => (
                        <DropdownMenuItem key={itemIndex} asChild>
                          <Link
                            href={item.href}
                            className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#0066cc] hover:to-[#d53020] text-gray-700 hover:text-white transition-all duration-300 cursor-pointer group"
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className="w-4 h-4" />
                              <span className="font-medium">{item.name}</span>
                            </div>
                            {item.hot && (
                              <FaFire className="w-3 h-3 text-orange-400 group-hover:text-orange-300" />
                            )}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
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
                    className="p-3 rounded-full bg-gradient-to-r from-[#0066cc] to-[#d53020] text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
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
          <div className="lg:hidden absolute w-full bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2 max-h-96 overflow-y-auto">
              {mainNavItems.map(({ name, icon: Icon, hot, dropdown }, index) => (
                <div key={index} className="group">
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-[#0066cc] hover:to-[#d53020] text-gray-700 hover:text-white transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{name}</span>
                      {hot && <FaFire className="w-4 h-4 text-orange-400" />}
                    </div>
                    <FaChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileDropdowns[index] ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Mobile Dropdown */}
                  {mobileDropdowns[index] && (
                    <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top duration-200">
                      {dropdown?.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="flex items-center justify-between p-3 rounded-lg bg-white/50 hover:bg-gradient-to-r hover:from-[#0066cc]/80 hover:to-[#d53020]/80 text-gray-600 hover:text-white transition-all duration-300"
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-4 h-4" />
                            <span className="text-sm">{item.name}</span>
                          </div>
                          {item.hot && <FaFire className="w-3 h-3 text-orange-400" />}
                        </Link>
                      ))}
                    </div>
                  )}
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
