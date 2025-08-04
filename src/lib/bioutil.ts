import config from '@/payload.config'
import { getPayload } from 'payload'

export async function fetchAllBios(page = 1, limit = 18) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const res = await payload.find({
    collection: 'bios',
    depth: 3,
    limit,
    page,
  })

  return {
    bios: res.docs.map((bio) => ({
      id: bio.id,
      slug: bio.slug,
      name: bio.name,
      originalName: bio.orginalName,
      dateOfBirth: bio.dateOfBirth,
      category: bio.category,
      role: bio.role,
      socialLinks: bio.socialLinks,
      profileImage:
        typeof bio.profileImage === 'object' &&
        bio.profileImage !== null &&
        'url' in bio.profileImage &&
        typeof bio.profileImage.url === 'string'
          ? { url: bio.profileImage.url }
          : { url: '/placeholder.jpg' },
      bio: JSON.stringify(bio.bio ?? {}),
      featured: bio.featured ?? false,
    })),
    pagination: {
      hasNextPage: res.hasNextPage,
      hasPrevPage: res.hasPrevPage,
      totalPages: res.totalPages,
      page: res.page,
    },
  }
}

export async function searchBios(query: string, page = 1, limit = 0) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const res = await payload.find({
    collection: 'bios',
    where: {
      or: [{ name: { like: query } }, { orginalName: { like: query } }],
    },
    depth: 2,
    limit,
    page,
  })

  return {
    bios: res.docs,
    pagination: {
      hasNextPage: res.hasNextPage,
      hasPrevPage: res.hasPrevPage,
      totalPages: res.totalPages,
      page: res.page,
    },
  }
}
