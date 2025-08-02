import React from 'react'
import TrendingWrapper from '@/components/Wrappers/TrendingWrapper'
import HeroWrapper from '@/components/Wrappers/HeroWrapper'
import GroupOneWrapper from '@/components/Wrappers/GroupOneWrapper'
import GroupTwoWrapper from '@/components/Wrappers/GroupTwoWrapper'
import CelebBio from '@/components/homepage/CelebBio'

export default function page() {
  return (
    <>
      <TrendingWrapper />
      <HeroWrapper />
      <GroupOneWrapper />
      <GroupTwoWrapper />
      <CelebBio />
    </>
  )
}
