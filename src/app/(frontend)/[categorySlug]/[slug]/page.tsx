export const dynamic = 'force-dynamic'

import { Articles } from '@/types/types'
import { RichText } from '@/components/RichText'
import { fetchAllPosts, fetchRelatedPosts } from '@/lib/postsUtil'
import config from '@/payload.config'
import { getPayload } from 'payload'
import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaClock,
  FaNewspaper,
  FaCalendarAlt,
  FaUser,
  FaArrowLeft,
  FaFilm,
  FaMusic,
} from 'react-icons/fa'
import { IoTrendingUp } from 'react-icons/io5'
import NewsLetter from '@/components/categorySection/NewsLetter'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; categorySlug: string }>
}) {
  const { slug, categorySlug } = await params

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'articles',
    where: {
      slug: { equals: slug },
    },
    depth: 2,
  })

  const post = docs[0]

  if (!post) {
    return {
      title: 'Article Not Found | TeaSpace',
      description:
        'The article you’re looking for doesn’t exist. Discover trending entertainment stories and celebrity features on TeaSpace.',
    }
  }

  const postTitle = post.title || 'Entertainment News Article – TeaSpace'
  const postExcerpt =
    post.excerpt ||
    'Stay in the know with real-time entertainment news, celebrity updates, and pop culture highlights on TeaSpace.'
  const imageUrl =
    typeof post?.thumbnail === 'object' && post.thumbnail?.url ? post.thumbnail.url : '/light.png'

  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${categorySlug}/${slug}`
  const authorName = post.author || 'TeaSpace Editors'

  return {
    title: postTitle,
    description: postExcerpt,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),

    openGraph: {
      title: `${postTitle} | TeaSpace`,
      description: postExcerpt,
      url: pageUrl,
      siteName: 'TeaSpace',
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1200,
          height: 630,
          alt: postTitle,
        },
      ],
      type: 'article',
      locale: 'en_US',
    },

    twitter: {
      card: 'summary_large_image',
      title: `${postTitle} | TeaSpace`,
      description: postExcerpt,
      images: [imageUrl],
      'og:image': imageUrl,
      site: '@_teaspace',
    },

    other: {
      'og:title': `${postTitle} | TeaSpace`,
      'og:description': postExcerpt,
      'og:image': imageUrl,
      'og:url': pageUrl,
      'og:type': 'article',
      'twitter:image': imageUrl,
      'twitter:title': `${postTitle} | TeaSpace`,
      'twitter:description': postExcerpt,
      'twitter:card': 'summary_large_image',
    },

    alternates: {
      canonical: pageUrl,
    },

    authors: [authorName],
    publisher: 'TeaSpace',

    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  }
}

export async function generateStaticParams() {
  try {
    const allposts = await fetchAllPosts(1, 100)
    const posts: Articles[] = allposts.posts
    return posts.map((post: Articles) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error fetching posts for static params:', error)
    return []
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ [key: string]: string }>
}) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'articles',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 3,
  })

  const post = docs[0]
  if (!post) {
    return <div className="text-red-500">Post not found</div>
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

  // Fetch related posts
  const data = await fetchRelatedPosts(
    {
      name:
        typeof post.category === 'object' && post.category !== null && 'name' in post.category
          ? post.category.name
          : String(post.category),
    },
    slug,
  )

  const relatedPosts = data.slice(0, 3)

  // Fetch latest posts for sidebar
  const latestPostsData = await fetchAllPosts(1, 5)
  const latestPosts = latestPostsData.posts.filter((p) => p.slug !== slug)

  // Get author info
  const authorName =
    typeof post.author === 'string'
      ? post.author
      : typeof post.author === 'object' && post.author !== null && 'name' in post.author
        ? (post.author as { name?: string }).name || 'Unknown Author'
        : 'Unknown Author'
  const authorRole =
    typeof post.author === 'object' && post.author !== null && 'role' in post.author
      ? (post.author as { role?: string }).role || 'Contributor'
      : 'Contributor'

  const authorInitial = authorName.charAt(0)

  function getEmbeddedVideoUrl(url: string): string {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be')
        ? url.split('/').pop()
        : new URLSearchParams(new URL(url).search).get('v')
      return `https://www.youtube.com/embed/${videoId}`
    }

    if (url.includes('facebook.com')) {
      // Convert Facebook share URL to embeddable video URL
      const encodedUrl = encodeURIComponent(url)
      return `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=auto`
    }

    return url
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden min-h-screen">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 w-20 h-20 sm:w-32 sm:h-32 bg-[#0066cc]/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-16 right-4 w-24 h-24 sm:w-40 sm:h-40 bg-[#d53020]/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-[#0066cc]/3 to-[#d53020]/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto md:px-6 py-4 max-w-7xl relative z-10">
        {/* Back Navigation */}
        <div className="mb-6 px-3 sm:px-0">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0066cc] transition-colors duration-200 group"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-2 order-2 lg:order-3 px-6 md:px-0">
            <div className="sticky top-8 space-y-6">
              {/* Author Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#d53020]/10">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-r from-[#0066cc] to-[#d53020] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 relative">
                    {authorInitial}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{authorName}</h3>
                  <p className="text-sm text-[#0066cc] mb-4 font-medium">{authorRole}</p>
                </div>
              </div>
              {/* More from Category */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#d53020]/10">
                <h3 className="font-bold text-gray-900 mb-4">More Tea ?</h3>
                <div className="space-y-3">
                  <Link
                    href="/latest-stories"
                    className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#0066cc] transition-colors p-2 rounded-lg hover:bg-gray-50"
                  >
                    <FaNewspaper className="w-4 h-4" />
                    <span>All Stories</span>
                  </Link>
                  <Link
                    href="/music"
                    className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#0066cc] transition-colors p-2 rounded-lg hover:bg-gray-50"
                  >
                    <FaMusic className="w-4 h-4" />
                    <span>Music</span>
                  </Link>
                  <Link
                    href="/movies"
                    className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#0066cc] transition-colors p-2 rounded-lg hover:bg-gray-50"
                  >
                    <FaFilm className="w-4 h-4" />
                    <span>Movies</span>
                  </Link>
                  <Link
                    href="/gossip"
                    className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[#0066cc] transition-colors p-2 rounded-lg hover:bg-gray-50"
                  >
                    <FaNewspaper className="w-4 h-4" />
                    <span>Gossip</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column (Main Content) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Article Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#d53020]/10">
              {/* Article Header with Title and Excerpt */}
              <div className="px-6 py-6 md:px-10 md:py-8 lg:px-12">
                {/* Category Badge */}
                {typeof post.category === 'object' &&
                  post.category !== null &&
                  'name' in post.category && (
                    <div className="mb-4">
                      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0066cc] to-[#0066cc]/80 rounded-full px-4 py-2">
                        <FaNewspaper className="w-4 h-4 text-white" />
                        <span className="text-white font-medium text-sm">{post.category.name}</span>
                      </div>
                    </div>
                  )}

                {/* Article Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  {post.title}
                </h1>

                {/* Article Excerpt */}
                {post.excerpt && (
                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-lg p-4 border-l-4 border-[#0066cc]">
                      <p className="text-lg text-gray-700 font-light italic leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                )}

                {/* Meta Info Bar */}
                <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <FaUser className="w-4 h-4 text-[#0066cc]" />
                      <span>{authorName}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="w-4 h-4 text-[#0066cc]" />
                      <span>{publishedDateFormatted}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <FaClock className="w-4 h-4 text-[#0066cc]" />
                      <span className="n capitalize">{timeAgo}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image/Video */}
              <div className="relative h-64 md:h-80 lg:h-96 mx-6 md:mx-10 lg:mx-12 mb-8 overflow-hidden rounded-xl">
                {post.video ? (
                  <div className="relative w-full h-full">
                    <iframe
                      className="w-full h-full rounded-xl border-2 border-[#0066cc]"
                      src={getEmbeddedVideoUrl(post.video)}
                      title={post.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
                  </div>
                ) : post.thumbnail ? (
                  <div className="relative w-full h-full group">
                    <Image
                      src={
                        typeof post.thumbnail === 'object' && post.thumbnail.url
                          ? post.thumbnail.url
                          : '/bg.jpg'
                      }
                      alt={post.title}
                      fill
                      className="object-cover rounded-xl"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-xl"></div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-xl flex items-center justify-center">
                    <FaNewspaper className="w-16 h-16 text-white/50" />
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="px-6 md:px-10 lg:px-12 pb-8">
                <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#0066cc] prose-strong:text-gray-900">
                  <RichText data={post.content} className="richtext" />
                </article>
              </div>

              {/* Author Footer */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 p-6 md:p-10 border-t border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#0066cc] to-[#d53020] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {authorInitial}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-lg">{authorName}</div>
                    <div className="text-[#0066cc] font-medium mb-3 capitalize">{authorRole}</div>
                    <p className="text-gray-600 leading-relaxed">
                      Contributing author with expertise in the field. Published{' '}
                      {publishedDateFormatted}. Bringing you the latest insights and updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 order-1 px-6 md:px-0">
            <div className="sticky top-8 space-y-6">
              {/* Latest Articles */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#d53020]/10">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="p-2 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-lg">
                    <IoTrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">Latest Articles</h3>
                </div>
                <div className="space-y-4">
                  {latestPosts.slice(0, 5).map((latestPost, index) => (
                    <Link
                      href={`/${
                        typeof latestPost.category === 'object' &&
                        latestPost.category !== null &&
                        'slug' in latestPost.category
                          ? latestPost.category.slug
                          : typeof latestPost.category === 'string' ||
                              typeof latestPost.category === 'number'
                            ? latestPost.category
                            : 'news'
                      }/${latestPost.slug}`}
                      key={latestPost.id}
                      className="group"
                    >
                      <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-gray-900 group-hover:text-[#0066cc] transition-colors line-clamp-3 mb-2">
                            {latestPost.title}
                          </h4>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>
                              {new Date(latestPost.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                            <div className="flex items-center space-x-1 bg-[#d53020]/10 rounded-full px-2 py-1">
                              <span>{latestPost.category.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <NewsLetter />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Related Posts Section */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="container mx-auto px-6 pb-8 max-w-7xl relative z-10">
          <div className="mt-12">
            <div className="flex items-center space-x-2 mb-8">
              <div className="p-2 bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-lg">
                <FaNewspaper className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">More Related Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  href={`/${
                    typeof relatedPost.category === 'object' &&
                    relatedPost.category !== null &&
                    'slug' in relatedPost.category
                      ? relatedPost.category.slug
                      : typeof relatedPost.category === 'string' ||
                          typeof relatedPost.category === 'number'
                        ? relatedPost.category
                        : 'news'
                  }/${relatedPost.slug}`}
                  key={relatedPost.id}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#d53020]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="relative h-48 overflow-hidden">
                      {relatedPost.thumbnail ? (
                        <Image
                          src={
                            typeof relatedPost.thumbnail === 'object' && relatedPost.thumbnail.url
                              ? relatedPost.thumbnail.url
                              : '/bg.jpg'
                          }
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-r from-[#0066cc] to-[#d53020] flex items-center justify-center">
                          <FaNewspaper className="w-12 h-12 text-white/50" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      {/* Category Badge */}
                      {typeof relatedPost.category === 'object' &&
                        relatedPost.category !== null &&
                        'name' in relatedPost.category && (
                          <div className="absolute top-3 left-3">
                            <div className="bg-[#0066cc]/90 backdrop-blur-sm rounded-full px-3 py-1">
                              <span className="text-white text-xs font-medium">
                                {relatedPost.category.name}
                              </span>
                            </div>
                          </div>
                        )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>
                          {new Date(relatedPost.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0066cc] transition-colors line-clamp-2 leading-tight">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
