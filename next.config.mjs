import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'teaspace.digital',
      'teaspaceafrica-production.up.railway.app',
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
