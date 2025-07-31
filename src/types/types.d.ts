export interface Media {
  id: number
  url: string
  alt?: string | null
}

export interface Category {
  id: number
  name: string
  slug: string
}

export interface User {
  id: number
  name: string
  role: string
  avatar: number | Media | null
  bio?: string | null
  role: string
  socialLinks?: { platform: string; url: string }[]
}

export interface Articles {
  id: number
  slug: string
  title: string
  content: string
  publishedAt: string
  excerpt?: string | null
  image?: string | { url: string } | null
  category: number | { name: string } | { slug: string }
  subcategory?: string | null
  tags?: { tag: string; id?: string | null | undefined }[] | null | undefined
  author: number | { name: string }
  breakingNews?: boolean
  featured?: boolean
  trending?: boolean
  readTime: string
}
