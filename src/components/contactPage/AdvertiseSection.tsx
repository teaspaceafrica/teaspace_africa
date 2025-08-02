import React from 'react'
import {
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaEye,
  FaCrown,
  FaStar,
  FaDollarSign,
  FaArrowRight,
  FaCheck,
  FaPlay,
  FaNewspaper,
} from 'react-icons/fa'

export default function AdvertiseWithUs() {
  const stats = [
    {
      icon: FaUsers,
      value: '500K+',
      label: 'Monthly Readers',
      description: 'Engaged entertainment enthusiasts',
    },
    {
      icon: FaEye,
      value: '2M+',
      label: 'Page Views',
      description: 'Monthly organic traffic',
    },
    {
      icon: FaGlobe,
      value: '85%',
      label: 'Kenya Audience',
      description: 'Local market penetration',
    },
    {
      icon: FaChartLine,
      value: '45%',
      label: 'Growth Rate',
      description: 'Year-over-year expansion',
    },
  ]

  const packages = [
    {
      name: 'Starter',
      price: 'KSh 25,000',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Banner ads on homepage',
        'Social media mentions (2x/week)',
        'Basic analytics reporting',
        'Email newsletter inclusion',
        '30-day campaign duration',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      price: 'KSh 75,000',
      period: '/month',
      description: 'Ideal for growing brands and agencies',
      features: [
        'Premium ad placements',
        'Sponsored content (2 articles)',
        'Social media campaigns',
        'Advanced analytics dashboard',
        'Dedicated account manager',
        'Video ad integration',
      ],
      popular: true,
      cta: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: 'KSh 150,000',
      period: '/month',
      description: 'Complete solution for large corporations',
      features: [
        'Full homepage takeover options',
        'Unlimited sponsored content',
        'Custom campaign strategies',
        'Real-time performance tracking',
        'Priority customer support',
        'Cross-platform integration',
        'Exclusive event partnerships',
      ],
      popular: false,
      cta: 'Contact Sales',
    },
  ]

  const adFormats = [
    {
      icon: FaNewspaper,
      title: 'Display Ads',
      description: 'Eye-catching banner and sidebar advertisements',
      specs: '728x90, 300x250, 320x50',
    },
    {
      icon: FaPlay,
      title: 'Video Ads',
      description: 'Engaging video content and pre-roll advertisements',
      specs: 'MP4, 15-30 seconds',
    },
    {
      icon: FaStar,
      title: 'Sponsored Content',
      description: 'Native articles that blend with our editorial content',
      specs: '800-1200 words',
    },
    {
      icon: FaCrown,
      title: 'Premium Placements',
      description: 'Above-the-fold positioning for maximum visibility',
      specs: 'Homepage, category pages',
    },
  ]

  const benefits = [
    "Reach Kenya's most engaged entertainment audience",
    'Boost brand awareness with premium placements',
    'Drive traffic and conversions with targeted campaigns',
    'Access detailed analytics and performance metrics',
    'Partner with trusted, credible journalism',
    'Flexible campaign options to fit any budget',
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#0066cc] text-sm font-medium mb-6">
            <FaDollarSign className="mr-2 text-xs" />
            Advertise With Us
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Reach Kenya{"'"}s Most
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] to-[#d53020]">
              {' '}
              Engaged Audience
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Partner with TeaSpace to connect with hundreds of thousands of entertainment enthusiasts
            across Kenya and East Africa. Our premium advertising solutions deliver results that
            matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-[#0066cc] text-white font-medium rounded-lg hover:shadow-xl transition-all duration-200 shadow-lg">
              View Media Kit
              <FaArrowRight className="ml-2 text-sm" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white text-lg" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Advertise Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose TeaSpace for Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] to-[#d53020]">
                  {' '}
                  Advertising Needs?
                </span>
              </h2>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-[#d53020]/30 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <FaCheck className="text-[#d53020] text-xs" />
                    </div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0066cc] to-[#d53020] aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <FaChartLine className="text-6xl mb-4 mx-auto opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Growing Reach</h3>
                    <p className="text-blue-100">500K+ readers and counting</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 right-6 w-6 h-6 bg-white/15 rounded-full"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0066cc]/30 to-[#0066cc]/70 rounded-lg flex items-center justify-center">
                    <FaUsers className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Trusted Brand</div>
                    <div className="text-xs text-gray-500">Premium audience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advertising Formats</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of advertising formats designed to maximize engagement and
              deliver results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {adFormats.map((format, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#d53020]/30 to-[#d53020]/70 rounded-lg flex items-center justify-center mb-4">
                  <format.icon className="text-white text-lg" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{format.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{format.description}</p>
                <div className="text-xs text-gray-500 bg-gray-50 rounded px-2 py-1 inline-block">
                  {format.specs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advertising Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to suit businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-xl p-8 ${pkg.popular ? 'ring-2 ring-[#0066cc] scale-105' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#0066cc] to-[#d53020] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-4 h-4 rounded-full bg-[#d53020]/30 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <FaCheck className="text-[#d53020] text-xs" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-[#0066cc] text-white hover:shadow-lg'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#0066cc] to-[#d53020] rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Campaign?</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join leading brands who trust TeaSpace to deliver their message to Kenya{"'"}s most
                engaged entertainment audience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-[#0066cc] font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  Download Media Kit
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200">
                  Contact Our Team
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/15 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
