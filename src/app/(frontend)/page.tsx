import React from 'react'
import TrendingWrapper from '@/components/Wrappers/TrendingWrapper'
import HeroWrapper from '@/components/Wrappers/HeroWrapper'
import GroupOneWrapper from '@/components/Wrappers/GroupOneWrapper'
import GroupTwoWrapper from '@/components/Wrappers/GroupTwoWrapper'
import BioWrapper from '@/components/Wrappers/BioWrapper'

export default function page() {
  return (
    <>
      <TrendingWrapper />
      <HeroWrapper />
      <GroupOneWrapper />
      <GroupTwoWrapper />
      <BioWrapper />
    </>
  )
}
