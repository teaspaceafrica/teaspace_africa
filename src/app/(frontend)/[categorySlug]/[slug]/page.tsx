import React from 'react'
import { Articles } from '@/types/types'
import { fetchAllPosts } from '@/lib/postsUtil'

export async function generateStaticParams() {
  try {
    const allposts = await fetchAllPosts()
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
  params: Promise<{ [key: string]: string | undefined }>
}) {
  const { slug } = await params

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Post Page</h1>
      <p>Slug: {slug}</p>
    </div>
  )
}
