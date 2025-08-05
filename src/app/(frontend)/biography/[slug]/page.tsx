export const dynamic = 'force-dynamic'

import { Bios } from '@/types/types'
import { RichText } from '@/components/RichText'
import config from '@/payload.config'
import { getPayload } from 'payload'
import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { fetchAllBios } from '@/lib/bioutil'
import {
  FaCalendarAlt,
  FaBriefcase,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaGlobe,
  FaArrowLeft,
  FaStar,
  FaClock,
  FaSpotify,
} from 'react-icons/fa'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'bios',
    where: {
      slug: { equals: slug },
    },
    depth: 2,
  })

  const bio = docs[0]

  if (!bio) {
    return {
      title: 'Biography Not Found | TeaSpace',
      description:
        'The biography you’re looking for doesn’t exist. Explore celebrity stories and trending personalities on TeaSpace.',
    }
  }

  const name = bio.name || 'Entertainment Personality'
  const role = bio.category ? ` - ${bio.category}` : ''
  const pageTitle = `${name}${role} | TeaSpace`
  const pageDescription = `Discover the life, career, and updates on ${name} only on TeaSpace. Entertainment’s finest, all in one place.`

  const imageUrl =
    typeof bio?.profileImage === 'object' && bio.profileImage?.url
      ? bio.profileImage.url
      : '/og-teaspace.jpg'

  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/bios/${slug}`

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: 'TeaSpace',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
      type: 'profile',
      locale: 'en_US',
    },

    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
      site: '@teaspace', // Replace with your real Twitter/X handle
    },

    alternates: {
      canonical: pageUrl,
    },

    authors: [bio.name],
    publisher: 'TeaSpace',

    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },

    other: {
      'og:title': pageTitle,
      'og:description': pageDescription,
      'og:image': imageUrl,
      'og:url': pageUrl,
      'og:type': 'profile',
      'twitter:image': imageUrl,
      'twitter:title': pageTitle,
      'twitter:description': pageDescription,
      'twitter:card': 'summary_large_image',
    },
  }
}

export async function generateStaticParams() {
  try {
    const allposts = await fetchAllBios(1, 100)
    const bios: Bios[] = allposts.bios
    return bios.map((bio: Bios) => ({
      slug: bio.slug,
    }))
  } catch (error) {
    console.error('Error fetching bios for static params:', error)
    return []
  }
}

export default async function BioPage({ params }: { params: Promise<{ [key: string]: string }> }) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'bios',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 3,
  })

  const post = docs[0]
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="text-6xl text-gray-300 mb-4">404</div>
          <div className="text-xl text-gray-600 mb-4">Biography not found</div>
          <Link href="/biography" className="text-[#0066cc] hover:text-[#d53020] transition-colors">
            ← Back to Biographies
          </Link>
        </div>
      </div>
    )
  }

  // Format the published date
  const publishedDate = new Date(post.createdAt)
  const publishedDateFormatted = publishedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Get how long ago the post was published
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true })

  // Calculate age
  const getAge = (dateString: string) => {
    try {
      const birthDate = new Date(dateString)
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }

      return age
    } catch {
      return null
    }
  }

  // Format date of birth
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return dateString
    }
  }

  // Get social icon
  const getSocialIcon = (platform: string) => {
    const platformLower = platform.toLowerCase()
    switch (platformLower) {
      case 'instagram':
        return <FaInstagram />
      case 'twitter':
        return <FaTwitter />
      case 'facebook':
        return <FaFacebook />
      case 'youtube':
        return <FaYoutube />
      case 'tiktok':
        return <FaTiktok />
      case 'spotify':
        return <FaSpotify />
      default:
        return <FaGlobe />
    }
  }

  // Get social platform color
  const getSocialColor = (platform: string) => {
    const platformLower = platform.toLowerCase()
    switch (platformLower) {
      case 'instagram':
        return 'hover:text-pink-500'
      case 'twitter':
        return 'hover:text-blue-400'
      case 'facebook':
        return 'hover:text-blue-600'
      case 'youtube':
        return 'hover:text-red-500'
      case 'tiktok':
        return 'hover:text-black'
      default:
        return 'hover:text-[#0066cc]'
    }
  }

  // Fetch latest posts for sidebar
  const latestPostsData = await fetchAllBios(1, 5)
  const latestPosts = latestPostsData.bios.filter((p) => p.slug !== slug)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0066cc]/20 to-[#d53020]/20"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#0066cc]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#d53020]/10 rounded-full blur-3xl"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 p-6">
          <Link
            href="/biography"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0066cc] transition-colors duration-300 group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Biographies</span>
          </Link>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                {/* Main Image */}
                <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  <Image
                    width={600}
                    height={800}
                    src={
                      typeof post.profileImage === 'object' && post.profileImage?.url
                        ? post.profileImage.url
                        : '/placeholder.jpg'
                    }
                    alt={post.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-6 right-6">
                      <div className="bg-gradient-to-r from-[#d53020] to-[#ff6b5a] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1">
                        <FaStar className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-[#0066cc] to-[#0052a3] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {post.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-8">
              {/* Main Info */}
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.name}
                </h1>
                {post.orginalName && post.orginalName !== post.name && (
                  <p className="text-xl text-gray-600 mb-6">
                    Originally known as <span className="font-semibold">{post.orginalName}</span>
                  </p>
                )}

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#0066cc]/10 p-3 rounded-full">
                        <FaCalendarAlt className="w-5 h-5 text-[#0066cc]" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Born</div>
                        <div className="font-semibold text-gray-900">
                          {formatDate(post.dateOfBirth)}
                        </div>
                        {getAge(post.dateOfBirth) && (
                          <div className="text-sm text-gray-600">
                            Age {getAge(post.dateOfBirth)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {post.role && (
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="bg-[#d53020]/10 p-3 rounded-full">
                          <FaBriefcase className="w-5 h-5 text-[#d53020]" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Profession</div>
                          <div className="font-semibold text-gray-900">{post.role}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Social Media */}
                {post.socialLinks && post.socialLinks.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                      Connect
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {post.socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 transition-all duration-300 hover:shadow-md hover:scale-105 ${getSocialColor(social.platform)}`}
                        >
                          <div className="w-5 h-5">{getSocialIcon(social.platform)}</div>
                          <span className="text-sm font-medium capitalize">{social.platform}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Biography Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              {/* Meta Info */}
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center space-x-1">
                  <FaClock className="w-4 h-4" />
                  <span>Published {timeAgo}</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div>Updated {publishedDateFormatted}</div>
              </div>

              {/* Biography Header */}
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  About {post.name}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-full"></div>
              </div>

              {/* Biography Content */}
              <div className="prose prose-lg prose-gray max-w-none">
                <div className="text-gray-700 leading-relaxed text-lg">
                  <RichText data={post.bio} className="richtext" />
                </div>
              </div>

              {/* Tags/Categories */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-semibold text-gray-500">Categories:</span>
                  <span className="bg-gradient-to-r from-[#0066cc]/10 to-[#d53020]/10 text-[#0066cc] px-4 py-2 rounded-full text-sm font-medium border border-[#0066cc]/20">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="bg-gradient-to-r from-[#d53020]/10 to-[#ff6b5a]/10 text-[#d53020] px-4 py-2 rounded-full text-sm font-medium border border-[#d53020]/20">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-600">Full Name</span>
                  <span className="font-semibold text-gray-900 text-right">{post.name}</span>
                </div>
                {post.orginalName && post.orginalName !== post.name && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">Birth Name</span>
                    <span className="font-semibold text-gray-900 text-right">
                      {post.orginalName}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-600">Date of Birth</span>
                  <span className="font-semibold text-gray-900 text-right">
                    {formatDate(post.dateOfBirth)}
                  </span>
                </div>
                {getAge(post.dateOfBirth) && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">Age</span>
                    <span className="font-semibold text-gray-900">
                      {getAge(post.dateOfBirth)} years
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-600">Category</span>
                  <span className="font-semibold text-gray-900">{post.category}</span>
                </div>
                {post.role && (
                  <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">Profession</span>
                    <span className="font-semibold text-gray-900 text-right">{post.role}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Related Biographies */}
            {latestPosts.length > 0 && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">More Biographies</h3>
                <div className="space-y-6">
                  {latestPosts.slice(0, 3).map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/bios/${relatedPost.slug}`}
                      className="block group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex space-x-4">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            width={64}
                            height={64}
                            src={
                              typeof relatedPost.profileImage === 'object' &&
                              relatedPost.profileImage !== null
                                ? relatedPost.profileImage.url
                                : '/placeholder.jpg'
                            }
                            alt={relatedPost.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-[#0066cc] transition-colors line-clamp-1">
                            {relatedPost.name}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-1">
                            {relatedPost.category}
                          </p>
                          {relatedPost.role && (
                            <p className="text-xs text-gray-500 line-clamp-1">{relatedPost.role}</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="/bios"
                    className="flex items-center justify-center space-x-2 text-[#0066cc] hover:text-[#d53020] font-semibold transition-colors group"
                  >
                    <span>View All Biographies</span>
                    <FaArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
