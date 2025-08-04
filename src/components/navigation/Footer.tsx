'use client'
import React, { useState } from 'react'
import {
  FaStar,
  FaMusic,
  FaFilm,
  FaTshirt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaClock,
  FaFire,
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { IoTrendingUp } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import { AlertCircle } from 'lucide-react'
import { Articles } from '@/types/types'

export default function Footer({ posts }: { posts: Articles[] }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [alreadySubscribed, setAlreadySubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Celebrity News', href: '/celebrity', icon: FaStar },
    { name: 'Movies', href: '/movies', icon: FaFilm },
    { name: 'Fashion Trends', href: '/fashion', icon: FaTshirt },
    { name: 'Music Updates', href: '/music', icon: FaMusic },
    { name: 'Trending Now', href: '/trending', icon: IoTrendingUp },
  ]

  const latestArticles = posts.slice(0, 2).filter((post) => post.subcategory !== 'isTrending')
  const trendingArticles = posts.filter((post) => post.subcategory === 'isTrending').slice(0, 2)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return

    // Reset notification states
    setSubscribed(false)
    setAlreadySubscribed(false)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.status === 409) {
        // Show already subscribed notification instead of alert
        setAlreadySubscribed(true)
        setTimeout(() => setAlreadySubscribed(false), 5000)
      } else if (res.ok) {
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 5000)
      } else {
        alert(data.error || 'Something went wrong. Please try again later.')
      }
    } catch (error) {
      alert('Failed to subscribe. Please try again later.')
      console.error(error)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const truncateTitle = (title: string, maxLength: number = 60) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title
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
              <form onSubmit={handleSubscribe}>
                <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
                  <div className="relative flex-1 w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email..."
                      className="w-full px-4 py-3 pl-12 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/70"
                    />
                    <FaEnvelope className="absolute left-4 top-3.5 w-4 h-4 text-white/70" />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-white text-[#0066cc] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </div>
                <div className="max-w-md mx-auto">
                  {/* Success notification */}
                  {subscribed && (
                    <div className="mt-4 px-4 py-3 bg-[#0066cc] bg-opacity-20 rounded-md border-l-4 border-[#0066cc]/50 animate-fade-in">
                      <p className="text-white text-sm">
                        Thank you for subscribing! We{"'"}ll be in touch soon.
                      </p>
                    </div>
                  )}
                  {/* Already subscribed notification */}
                  {alreadySubscribed && (
                    <div className="mt-4 px-4 py-3 bg-[#0066cc] bg-opacity-20 rounded-md border-l-4 border-[#d53020] animate-fade-in flex items-center">
                      <AlertCircle className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-medium">Already Subscribed</p>
                        <p className="text-white/80 text-sm">
                          This email is already in our subscriber list. Thank you for your continued
                          interest!
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="py-8 bg-black/50 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h4 className="text-lg font-semibold mb-4 text-center">🔥 Hot Topics</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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

        {/* Articles Section */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-1">
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
                      </Link>
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
                    <span>teaspaceafrica@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <FaPhone className="w-4 h-4 text-[#0066cc]" />
                    <span>+254 757 000000</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#0066cc]" />
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </div>

              {/* Latest Articles */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                  <FaClock className="w-5 h-5 text-[#0066cc]" />
                  <h4 className="text-xl font-bold text-white">Latest Articles</h4>
                </div>
                <div className="space-y-4">
                  {latestArticles.length > 0 ? (
                    latestArticles.map((article, index) => (
                      <Link
                        key={index}
                        href={`/${
                          typeof article.category === 'object' &&
                          article.category !== null &&
                          'slug' in article.category
                            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              (article.category as any).slug
                            : typeof article.category === 'string' ||
                                typeof article.category === 'number'
                              ? article.category
                              : 'entertainment'
                        }/${article.slug}`}
                        className="block group"
                      >
                        <div className="p-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#0066cc]/20 hover:to-[#d53020]/20 transition-all duration-300 border border-white/10 hover:border-white/20">
                          <h5 className="font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300 mb-2 leading-tight">
                            {truncateTitle(article.title)}
                          </h5>
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <span className="px-2 py-1 bg-[#0066cc]/20 rounded-full text-xs">
                              {typeof article.category === 'object' &&
                              article.category !== null &&
                              'slug' in article.category
                                ? article.category.slug
                                : typeof article.category === 'string' ||
                                    typeof article.category === 'number'
                                  ? article.category
                                  : 'music'}
                            </span>
                            <span>•</span>
                            <span>
                              {article.publishedAt ? formatDate(article.publishedAt) : 'Recent'}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="text-gray-400 text-center py-8">
                      <p>No latest articles available</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Trending Articles */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                  <FaFire className="w-5 h-5 text-[#d53020] animate-pulse" />
                  <h4 className="text-xl font-bold text-white">Trending Now</h4>
                </div>
                <div className="space-y-4">
                  {trendingArticles.length > 0 ? (
                    trendingArticles.map((article, index) => (
                      <Link
                        key={index}
                        href={`/${
                          typeof article.category === 'object' &&
                          article.category !== null &&
                          'slug' in article.category
                            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              (article.category as any).slug
                            : typeof article.category === 'string' ||
                                typeof article.category === 'number'
                              ? article.category
                              : 'entertainment'
                        }/${article.slug}`}
                        className="block group"
                      >
                        <div className="p-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#d53020]/20 hover:to-[#0066cc]/20 transition-all duration-300 border border-white/10 hover:border-white/20 relative overflow-hidden">
                          <div className="absolute top-2 right-2">
                            <IoTrendingUp className="w-4 h-4 text-[#d53020] group-hover:animate-bounce" />
                          </div>
                          <h5 className="font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300 mb-2 leading-tight pr-6">
                            {truncateTitle(article.title)}
                          </h5>
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <span className="px-2 py-1 bg-[#d53020]/20 rounded-full text-xs">
                              {typeof article.category === 'object' &&
                              article.category !== null &&
                              'slug' in article.category
                                ? article.category.slug
                                : typeof article.category === 'string' ||
                                    typeof article.category === 'number'
                                  ? article.category
                                  : 'music'}
                            </span>
                            <span>•</span>
                            <span>
                              {article.publishedAt ? formatDate(article.publishedAt) : 'Recent'}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="text-gray-400 text-center py-8">
                      <p>No trending articles available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                Advertise
              </Link>
            </div>

            {/* Copyright & Scroll to Top */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                © {currentYear} TeaSpace Africa. All rights reserved.
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
