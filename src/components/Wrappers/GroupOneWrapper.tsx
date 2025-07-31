import React from 'react'
import GroupOne from '../homepage/GroupOne'
import { fetchAllPosts } from '@/lib/postsUtil'

export default async function GroupOneWrapper() {
  const results = await fetchAllPosts()

  return <GroupOne posts={results.posts} />
}
