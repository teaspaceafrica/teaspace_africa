import React from 'react'
import CelebBio from '../homepage/CelebBio'
import { fetchAllBios } from '@/lib/bioutil'

export default async function BioWrapper() {
  const results = await fetchAllBios()

  return <CelebBio bios={results.bios} />
}
