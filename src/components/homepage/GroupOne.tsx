import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaStar, FaMusic, FaTv, FaTshirt } from 'react-icons/fa'
import { IoTrendingUp } from 'react-icons/io5'
import CategoryHeader from './CategoryHeader'
import FeaturedArticle from './FeaturedArticle'
import ArticleCard from './ArticleCard'

const news = [
  {
    id: 1,
    title: "Taylor Swift's Secret Studio Sessions: The Making of Her Most Personal Album Yet",
    excerpt:
      "Exclusive behind-the-scenes access to the pop icon's latest creative process reveals unexpected collaborations and emotional depth.",
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=faces',
    category: 'Music',
    categoryIcon: FaMusic,
    author: 'Sarah Johnson',
    readTime: '8 min read',
    views: '12.3K',
    publishedAt: '2 hours ago',
    isExclusive: true,
    tags: ['Exclusive', 'Music', 'Celebrity'],
  },
  {
    id: 2,
    title: "Hollywood's Power Couple Announces Surprise Engagement",
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop&crop=faces',
    category: 'Music',
    categoryIcon: FaStar,
    readTime: '5 min',
    isHot: true,
    author: 'Mike Davis',
    views: '8.7K',
    publishedAt: '4 hours ago',
  },
  {
    id: 3,
    title: 'Netflix Drops First Trailer for Most Anticipated Series',
    image:
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop&crop=faces',
    category: 'Music',
    categoryIcon: FaTv,
    readTime: '3 min',
    isHot: false,
    author: 'Lisa Chen',
    views: '5.2K',
    publishedAt: '6 hours ago',
  },
  {
    id: 4,
    title: "Fashion Week 2024: The Revolutionary Looks Everyone's Talking About",
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=250&fit=crop&crop=faces',
    category: 'Fashion',
    categoryIcon: FaTshirt,
    readTime: '6 min',
    isHot: true,
    author: 'Emma Wilson',
    views: '9.1K',
    publishedAt: '3 hours ago',
  },
]

export default function GroupOne() {
  const musicArticles = news.filter((article) => article.category === 'Music')
  const celebrityArticles = news.filter((article) => article.category === 'Celebrity')

  return (
    <section className="groupone relative overflow-hidden min-h-screen py-8 sm:py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Music */}
          <div className="leftsection space-y-6">
            <CategoryHeader title="Music" />

            <div className="banner">
              <FeaturedArticle article={musicArticles[0]} />
            </div>

            <div className="otherarticles">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {musicArticles.slice(1, 3).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {/* Additional smaller cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {musicArticles.slice(0, 2).map((article) => (
                  <div key={article.id} className="group cursor-pointer">
                    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl bg-white transition-all duration-300 border border-[#d53020]/20 hover:border-[#d53020] hover:-translate-y-0.5">
                      <div className="relative h-24 sm:h-32 overflow-hidden">
                        <Image
                          width={300}
                          height={200}
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3">
                        <div className="flex items-center space-x-1 mb-2">
                          <article.categoryIcon className="w-3 h-3 text-[#0066cc]" />
                          <span className="text-[#0066cc] text-xs font-medium">
                            {article.category}
                          </span>
                        </div>
                        <h4 className="text-gray-800 text-sm font-semibold leading-tight line-clamp-2 group-hover:text-[#0066cc] transition-colors">
                          {article.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Celebrity */}
          <div className="rightsection space-y-6">
            <CategoryHeader title="Celebrity" />

            <div className="banner">
              <FeaturedArticle article={news[1]} />
            </div>

            <div className="otherarticles">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[news[2], news[3]].map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {/* Trending section */}
              <div className="mt-6 bg-gradient-to-r from-[#0066cc]/5 to-[#d53020]/5 rounded-xl p-4 border border-[#0066cc]/20">
                <div className="flex items-center space-x-2 mb-3">
                  <IoTrendingUp className="w-5 h-5 text-[#d53020]" />
                  <h4 className="text-lg font-bold text-gray-800">Trending Now</h4>
                </div>
                <div className="space-y-3">
                  {news.slice(0, 3).map((article, index) => (
                    <div
                      key={article.id}
                      className="flex items-center space-x-3 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <h5 className="text-gray-700 text-sm font-medium line-clamp-2 group-hover:text-[#0066cc] transition-colors">
                        {article.title}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-[#0066cc]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-[#d53020]/5 to-transparent rounded-full blur-3xl"></div>
    </section>
  )
}
