/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { Articles } from '@/types/types'
import { useEffect, useState } from 'react'

export default function TrendingHero({ posts }: { posts: Articles[] }) {
  const trending = posts.filter((post) => post.subcategory === 'isTrending')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(trending.length, 9))
    }, 4000)
    return () => clearInterval(interval)
  }, [trending.length])

  const featuredPost = trending[currentIndex]
  const sidebarPosts = trending.slice(0, 8).filter((_, index) => index !== currentIndex)

  if (!featuredPost) return null

  return (
    <section className="bg-gradient-to-br from-[#0066cc] via-[#0052a3] to-[#003d7a] w-full relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Featured Article - Left Side */}
          <div className="lg:col-span-2">
            <div className="relative group">
              {/* Trending Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-gradient-to-r from-[#0066cc] to-[#d53020] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg">
                  <span className="animate-pulse mr-1">🔥</span>
                  TRENDING NOW
                </div>
              </div>

              {/* Main Featured Card */}
              <div className="relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl">
                <Image
                  width={800}
                  height={600}
                  src={
                    typeof featuredPost.image === 'object' && featuredPost.image !== null
                      ? featuredPost.image.url
                      : '/placeholder.jpg'
                  }
                  alt={featuredPost.title}
                  className="w-full h-full object-cover md:object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066cc]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <Link
                    href={`/${
                      typeof featuredPost.category === 'object' &&
                      featuredPost.category !== null &&
                      'slug' in featuredPost.category
                        ? (featuredPost.category as any).slug
                        : typeof featuredPost.category === 'string' ||
                            typeof featuredPost.category === 'number'
                          ? featuredPost.category
                          : 'entertainment'
                    }/${featuredPost.slug}`}
                    className="group/link"
                  >
                    <h1 className="text-white font-bold text-xl md:text-2xl lg:text-3xl leading-tight mb-3 group-hover/link:text-orange-200 transition-colors duration-300">
                      {featuredPost.title}
                    </h1>
                  </Link>

                  {/* Reading time and category */}
                  <div className="flex items-center space-x-4 text-white/80 text-sm">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {typeof featuredPost.category === 'object' &&
                      featuredPost.category !== null &&
                      'name' in featuredPost.category
                        ? (featuredPost.category as any).name
                        : 'News'}
                    </span>
                    <span>5 min read</span>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </div>
          </div>

          {/* Sidebar - Trending List */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-xl">
              <h2 className="text-white font-bold text-lg mb-6 flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-3"></span>
                More Trending
              </h2>

              <div className="space-y-4">
                {sidebarPosts.slice(0, 4).map((post, index) => (
                  <Link
                    key={post.id}
                    href={`/${
                      typeof post.category === 'object' &&
                      post.category !== null &&
                      'slug' in post.category
                        ? (post.category as any).slug
                        : typeof post.category === 'string' || typeof post.category === 'number'
                          ? post.category
                          : 'entertainment'
                    }/${post.slug}`}
                    className="group/sidebar flex items-start space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden">
                      <Image
                        width={80}
                        height={60}
                        src={
                          typeof post.image === 'object' && post.image !== null
                            ? post.image.url
                            : '/placeholder.jpg'
                        }
                        alt={post.title}
                        className="w-full h-full object-cover group-hover/sidebar:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-sm font-medium leading-tight line-clamp-2 group-hover/sidebar:text-orange-200 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <div className="flex items-center mt-1">
                        <span className="text-white/60 text-xs">#{index + 2}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Carousel for Mobile/Additional Content */}
        <div className="mt-8 lg:hidden">
          <Carousel
            className="w-full"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="-ml-2">
              {trending.slice(4, 9).map((news) => (
                <CarouselItem key={news.id} className="pl-2 basis-1/2 md:basis-1/3">
                  <Link
                    href={`/${
                      typeof news.category === 'object' &&
                      news.category !== null &&
                      'slug' in news.category
                        ? (news.category as any).slug
                        : typeof news.category === 'string' || typeof news.category === 'number'
                          ? news.category
                          : 'entertainment'
                    }/${news.slug}`}
                    className="group block"
                  >
                    <div className="relative h-32 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm bg-white/10">
                      <Image
                        width={200}
                        height={150}
                        src={
                          typeof news.image === 'object' && news.image !== null
                            ? news.image.url
                            : '/placeholder.jpg'
                        }
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-white font-medium text-sm leading-tight line-clamp-2 group-hover:text-orange-200 transition-colors duration-300">
                          {news.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
