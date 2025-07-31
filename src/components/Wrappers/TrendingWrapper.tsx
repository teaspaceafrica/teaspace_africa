import React from 'react'
import { fetchAllPosts } from '@/lib/postsUtil'
import TrendingHero from '../homepage/TrendingHero'

export default async function TrendingWrapper() {
  const results = await fetchAllPosts()

  return <TrendingHero posts={results.posts} />
}
