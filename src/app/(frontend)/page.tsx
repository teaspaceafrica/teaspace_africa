import React from 'react'
import TrendingHero from '@/components/homepage/TrendingHero'
import Hero from '@/components/homepage/Hero'
import GroupOne from '@/components/homepage/GroupOne'
import GroupTwo from '@/components/homepage/GroupTwo'
import CelebBio from '@/components/homepage/CelebBio'

export default function page() {
  return (
    <>
      <TrendingHero />
      <Hero />
      <GroupOne />
      <GroupTwo />
      <CelebBio />
    </>
  )
}
