// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Articles } from './collections/Articles'
import Newsletter from './collections/Newsletter'
import { Bios } from './collections/Bios'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: './components/admin/Logo',
        Icon: './components/admin/Icon',
      },
    },
    meta: {
      title: 'Admin Panel | TeaSpace',
      description:
        'Secure admin dashboard for managing content on TeaSpace - TeaSpace Official Website.',
      icons: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          sizes: '96x96',
          url: '/favicon-96x96.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          url: '/apple-touch-icon.png',
        },
      ],
      robots: 'noindex, nofollow',
    },
  },
  collections: [Users, Media, Categories, Articles, Newsletter, Bios],
  editor: lexicalEditor(),
  cors: [
    'https://teaspace.digital',
    'https://teaspaceafrica-production.up.railway.app',
    'https://www.teaspace.digital',
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  // serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL,
  serverURL: 'http://localhost:3000',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
})
