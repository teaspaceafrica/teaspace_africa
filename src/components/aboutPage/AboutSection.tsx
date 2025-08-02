import React from 'react'
import { FaNewspaper, FaArrowRight, FaCheck } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  const features = [
    'Real-time breaking news and updates',
    'Thoughtful, investigative entertainment reporting',
    'Global coverage with local relevance',
    'Fact-checked, trustworthy journalism',
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#0066cc] text-sm font-medium">
              <FaNewspaper className="mr-2 text-xs" />
              About TeaSpace
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Delivering Truth,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] to-[#d53020]">
                One Story at a Time
              </span>
            </h1>

            <p className="text-gray-600 text-base leading-relaxed">
              At TeaSpace, we deliver accurate, timely, and in-depth entertainment news that keeps
              you informed and inspired. From breaking celebrity headlines to behind-the-scenes
              exclusives, our mission is to connect communities through compelling storytelling and
              a steadfast commitment to journalistic integrity. We don{"'"}t just report the tea -
              we serve it with purpose, passion, and credibility.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-[#d53020]/30 flex items-center justify-center mr-3 flex-shrink-0">
                    <FaCheck className="text-[#d53020] text-xs" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href="/latest-stories"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0066cc] text-white font-medium rounded-lg  transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Read Our Latest Stories
                <FaArrowRight className="ml-2 text-sm" />
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Subscribe to Newsletter
              </button>
            </div>
          </div>

          {/* Right Side - Video/Image Placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0066cc] to-[#d53020] aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/dark.png"
                  alt="TeaSpace Africa Logo"
                  width={500}
                  height={500}
                  className="group-hover:scale-105 w-52 animate-pulse"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 right-6 w-6 h-6 bg-white/15 rounded-full"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#d53020]/30 to-[#d53020]/70 rounded-lg flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Verified News</div>
                  <div className="text-xs text-gray-500">Fact-checked content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
