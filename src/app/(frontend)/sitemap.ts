export const dynamic = 'force-dynamic'

import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postsRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
      next: { revalidate: 3600 },
    }),
  ])

  if (!postsRes.ok) {
    throw new Error(`Failed to fetch data`)
  }

  const postsData = await postsRes.json()

  const posts: { slug: string; category: { slug: string }; updatedAt?: string }[] = postsData.docs

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    type: 'posts',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${post.category.slug}/${post.slug}`,
    lastModified: post.updatedAt || new Date().toISOString(),
    changeFrequency: 'hourly',
    priority: 0.9,
  }))

  const uniqueCategories = Array.from(new Set(posts.map((post) => post.category.slug)))

  const categoryEntries: MetadataRoute.Sitemap = uniqueCategories.map((categorySlug) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${categorySlug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'hourly',
    priority: 0.9,
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-teaspace`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/advertise`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/latest-stories`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...postEntries,
    ...categoryEntries,
  ]
}
