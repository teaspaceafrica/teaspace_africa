import React from 'react'
import GroupTwo from '../homepage/GroupTwo'
import { fetchAllPosts } from '@/lib/postsUtil'

export default async function GroupTwoWrapper() {
  const results = await fetchAllPosts()

  return <GroupTwo posts={results.posts} />
}
