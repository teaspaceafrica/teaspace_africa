import React from 'react'
import TrendingWrapper from '@/components/Wrappers/TrendingWrapper'
import Hero from '@/components/homepage/Hero'
import GroupOneWrapper from '@/components/Wrappers/GroupOneWrapper'
import GroupTwo from '@/components/homepage/GroupTwo'
import CelebBio from '@/components/homepage/CelebBio'

export default function page() {
  return (
    <>
      <TrendingWrapper />
      <Hero />
      <GroupOneWrapper />
      <GroupTwo />
      <CelebBio />
    </>
  )
}
