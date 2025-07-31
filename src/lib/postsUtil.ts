import config from '@/payload.config'
import { getPayload } from 'payload'

export async function fetchAllPosts(page = 1, limit = 18) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const res = await payload.find({
    collection: 'articles',
    depth: 3,
    limit,
    page,
  })

  return {
    posts: res.docs.map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt ?? '',
      image:
        typeof post.thumbnail === 'object' &&
        post.thumbnail !== null &&
        'url' in post.thumbnail &&
        typeof post.thumbnail.url === 'string'
          ? { url: post.thumbnail.url }
          : { url: '/placeholder.jpg' },
      video: post.video,
      category:
        typeof post.category === 'object' && post.category !== null && 'name' in post.category
          ? { name: post.category.name }
          : { name: String(post.category) },

      subcategory: post.subCategory,
      tags: post.tags,
      author:
        typeof post.author === 'object' && post.author !== null && 'name' in post.author
          ? { name: post.author.name }
          : { name: String(post.author) },
      breakingNews: post.breakingNews ?? false,
      featured: post.featured ?? false,
      readTime: post.readTime ?? '1 min',
      publishedAt: new Date(post.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),

      content: JSON.stringify(post.content ?? {}), // Normalize content to string or handle rich editors later
    })),
    pagination: {
      hasNextPage: res.hasNextPage,
      hasPrevPage: res.hasPrevPage,
      totalPages: res.totalPages,
      page: res.page,
    },
  }
}

export async function fetchRelatedPosts(currentCategory: { name: string }, currentSlug: string) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs: allBlogs } = await payload.find({
    collection: 'articles',
    depth: 3,
    limit: 4,
    where: {
      and: [
        {
          'category.name': {
            equals: currentCategory.name,
          },
        },
        {
          slug: {
            not_equals: currentSlug, // Exclude the current article
          },
        },
      ],
    },
  })

  return allBlogs
}

export async function fetchByCategory(slug: string, page = 1, limit = 18) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // First, resolve the category ID from the slug
  const catRes = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const category = catRes.docs?.[0]
  if (!category) {
    return { posts: [], pagination: { page: 1, totalPages: 1 } }
  }

  const res = await payload.find({
    collection: 'articles',
    depth: 3,
    limit,
    page,
    where: {
      category: {
        equals: category.id,
      },
    },
  })

  return {
    posts: res.docs.map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt ?? '',
      image:
        typeof post.thumbnail === 'object' &&
        post.thumbnail !== null &&
        'url' in post.thumbnail &&
        typeof post.thumbnail.url === 'string'
          ? { url: post.thumbnail.url }
          : { url: '/placeholder.jpg' },
      category:
        typeof post.category === 'object' && post.category !== null && 'name' in post.category
          ? { name: post.category.name }
          : { name: String(post.category) },
      subcategory: post.subCategory,
      tags: post.tags,
      author:
        typeof post.author === 'object' && post.author !== null && 'name' in post.author
          ? { name: post.author.name }
          : { name: String(post.author) },
      featured: post.featured ?? false,
      readTime: post.readTime ?? '1 min',
      publishedAt: new Date(post.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      content: JSON.stringify(post.content ?? {}),
    })),
    pagination: {
      hasNextPage: res.hasNextPage,
      hasPrevPage: res.hasPrevPage,
      totalPages: res.totalPages,
      page: res.page,
    },
  }
}

export async function searchPosts(query: string, page = 1, limit = 0) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const res = await payload.find({
    collection: 'articles',
    where: {
      or: [
        { title: { like: query } },
        { excerpt: { like: query } },
        { 'category.name': { like: query } },
      ],
    },
    depth: 2,
    limit,
    page,
  })

  return {
    posts: res.docs,
    pagination: {
      hasNextPage: res.hasNextPage,
      hasPrevPage: res.hasPrevPage,
      totalPages: res.totalPages,
      page: res.page,
    },
  }
}
