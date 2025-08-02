import React from 'react'
import Footer from '../navigation/Footer'
import { fetchAllPosts } from '@/lib/postsUtil'

export default async function FooterWrapper() {
  const results = await fetchAllPosts()

  return <Footer posts={results.posts} />
}
