'use client'
import React from 'react'
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaSnapchatGhost,
  FaStar,
  FaMusic,
  FaFilm,
  FaTrophy,
  FaTshirt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { IoTrendingUp } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Celebrity News', href: '/celebrity/news', icon: FaStar },
    { name: 'Movies', href: '/entertainment/movies', icon: FaFilm },
    { name: 'Fashion Trends', href: '/fashion/trends', icon: FaTshirt },
    { name: 'Music Updates', href: '/entertainment/music', icon: FaMusic },
    { name: 'Awards Coverage', href: '/awards', icon: FaTrophy },
    { name: 'Trending Now', href: '/trending', icon: IoTrendingUp },
  ]

  const categories = [
    {
      title: 'Entertainment',
      links: [
        { name: 'Movies & Reviews', href: '/entertainment/movies' },
        { name: 'TV Shows', href: '/entertainment/tv' },
        { name: 'Music Industry', href: '/entertainment/music' },
        { name: 'Gaming News', href: '/entertainment/gaming' },
        { name: 'Streaming Updates', href: '/entertainment/streaming' },
      ],
    },
    {
      title: 'Celebrity',
      links: [
        { name: 'Latest News', href: '/celebrity/news' },
        { name: 'Exclusive Interviews', href: '/celebrity/interviews' },
        { name: 'Red Carpet', href: '/celebrity/red-carpet' },
        { name: 'Celebrity Style', href: '/celebrity/style' },
        { name: 'Relationships', href: '/celebrity/relationships' },
      ],
    },
    {
      title: 'Lifestyle',
      links: [
        { name: 'Fashion Week', href: '/fashion/fashion-week' },
        { name: 'Beauty Trends', href: '/fashion/beauty' },
        { name: 'Street Style', href: '/fashion/street-style' },
        { name: 'Designer Spotlight', href: '/fashion/designers' },
        { name: 'Style Guide', href: '/fashion/guide' },
      ],
    },
  ]

  const socialLinks = [
    { icon: FaInstagram, href: '#', gradient: 'from-purple-500 to-pink-500', name: 'Instagram' },
    { icon: FaTwitter, href: '#', gradient: 'from-blue-400 to-blue-600', name: 'Twitter' },
    { icon: FaFacebookF, href: '#', gradient: 'from-blue-600 to-blue-800', name: 'Facebook' },
    { icon: FaYoutube, href: '#', gradient: 'from-red-500 to-red-700', name: 'YouTube' },
    { icon: FaTiktok, href: '#', gradient: 'from-black to-gray-800', name: 'TikTok' },
    {
      icon: FaSnapchatGhost,
      href: '#',
      gradient: 'from-yellow-400 to-yellow-600',
      name: 'Snapchat',
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0066cc]/10 via-purple-600/10 to-[#d53020]/10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section with Newsletter */}
        <div className="bg-gradient-to-r from-[#0066cc] to-[#d53020] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <HiSparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                <h3 className="text-2xl font-bold">Stay Updated with the Latest Tea!</h3>
                <HiSparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
              </div>
              <p className="text-white/90 mb-6">
                Get exclusive celebrity news, trending stories, and breaking entertainment updates
                delivered straight to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
                <div className="relative flex-1 w-full">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="w-full px-4 py-3 pl-12 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
                  />
                  <FaEnvelope className="absolute left-4 top-3.5 w-4 h-4 text-white/70" />
                </div>
                <button className="w-full sm:w-auto px-6 py-3 bg-white text-[#0066cc] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="py-8 bg-black/50 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h4 className="text-lg font-semibold mb-4 text-center">🔥 Hot Topics</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map(({ name, href, icon: Icon }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="flex items-center space-x-2 p-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#0066cc]/80 hover:to-[#d53020]/80 transition-all duration-300 hover:scale-105 group"
                >
                  <Icon className="w-4 h-4 group-hover:text-yellow-300" />
                  <span className="text-sm font-medium">{name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Brand Section */}
              <div className="col-span-3 lg:col-span-2">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div>
                      <Link href="/" className="relative block p-2">
                        <Image
                          src="/dark.png"
                          alt="TeaSpace Africa Logo"
                          width={120}
                          height={120}
                          className="rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>{' '}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Bringing you the freshest celebrity news, entertainment updates, and trending
                    stories from across Africa and beyond. Stay connected with the pulse of pop
                    culture.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <FaEnvelope className="w-4 h-4 text-[#0066cc]" />
                    <span>hello@teaspaceafrica.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <FaPhone className="w-4 h-4 text-[#0066cc]" />
                    <span>+254 700 123 456</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#0066cc]" />
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </div>

              {/* Category Links */}
              {categories.map(({ title, links }, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-4 text-white">{title}</h4>
                  <ul className="space-y-2">
                    {links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#0066cc] hover:to-[#d53020] hover:bg-clip-text transition-all duration-300 block py-1"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Social Media */}
            <div className="text-center mb-8">
              <h4 className="text-lg font-semibold mb-4">Follow the Conversation</h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map(({ icon: Icon, href, gradient, name }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full bg-gradient-to-r ${gradient} hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl group`}
                    title={name}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:animate-pulse" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center items-center space-x-6 mb-6 text-sm">
              <Link
                href="/about-teaspace"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/advertise" className="text-gray-300 hover:text-white transition-colors">
                Advertise
              </Link>
              <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
            </div>

            {/* Copyright & Scroll to Top */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                © {currentYear} TeaSpace Africa. All rights reserved. | Made with ❤️ in Kenya
              </p>

              <button
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-full hover:scale-110 transform transition-all duration-300 shadow-lg group"
                title="Back to Top"
              >
                <FaArrowUp className="w-4 h-4 text-white group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
