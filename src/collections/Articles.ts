import { CollectionConfig } from 'payload'
import slugify from 'slugify'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    group: 'Content Area',
  },
  versions: {
    drafts: true,
  },
  access: {
    create: ({ req }) => !!req.user,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    read: ({ req }) => {
      return {
        _status: { equals: 'published' },
        publishedAt: { less_than_equal: new Date() },
      }
    },
    update: (args) => {
      const { req } = args
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const doc = (args as any).doc

      return (
        req.user?.role === 'admin' || req.user?.id === doc?.author || req.user?.role === 'editor'
      )
    },

    delete: (args) => {
      const { req } = args
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const doc = (args as any).doc

      return req.user?.role === 'admin' || req.user?.id === doc?.author
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'The slug is automatically generated from the title if left empty.',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return slugify(value, { lower: true, strict: true })
            if (data?.title) return slugify(data.title, { lower: true, strict: true })
            return value
          },
        ],
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor(),
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'video',
      label: 'Video URL',
      type: 'text',
      admin: {
        description: 'Add a youtube video url if you have one but you can leave it empty.',
      },
      defaultValue: '',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'subCategory',
      type: 'select',
      options: [
        { label: 'Trending', value: 'isTrending' },
        { label: 'Featured', value: 'isFeatured' },
        { label: 'Breaking News', value: 'isBreakingNews' },
        { label: 'Sponsored', value: 'isSponsored' },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        hidden: true,
      },
    },
    {
      name: 'readTime',
      type: 'text',
      required: true,
      admin: {
        description: 'Estimated read time in minutes.',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, data, operation }) => {
        if (operation === 'create' && req.user) {
          return {
            ...data,
            author: req.user.id,
          }
        }
        return data
      },
    ],
  },
}
