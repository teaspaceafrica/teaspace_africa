import { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Bios: CollectionConfig = {
  slug: 'bios',
  labels: {
    singular: 'Bio',
    plural: 'Bios',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'category', 'updatedAt'],
    group: 'Content Area',
  },
  access: {
    read: () => true, // Make bios publicly readable
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    { name: 'orginalName', type: 'text' },
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
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: false,
      admin: {
        description:
          'Optional — can be used to specify subroles like “Hip Hop Artist” or “Film Director”.',
      },
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    { name: 'dateOfBirth', type: 'date', required: true },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
