import React from 'react'
import Hero from '../homepage/Hero'
import { fetchAllPosts } from '@/lib/postsUtil'

export default async function HeroWrapper() {
  const results = await fetchAllPosts()

  return <Hero posts={results.posts} />
}
