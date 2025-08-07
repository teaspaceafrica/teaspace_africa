import React from 'react'
import './styles.css'
import Navbar from '@/components/navigation/Navbar'
import FooterWrapper from '@/components/Wrappers/FooterWrapper'
import Script from 'next/script'

export const metadata = {
  title: 'TeaSpace | Entertainment News, Celebrity Stories & Pop Culture',
  description:
    'TeaSpace delivers real-time entertainment news, celebrity bios, and pop culture stories with journalistic integrity. Stay informed with trustworthy, timely updates from around the world.',
  keywords: [
    'entertainment news',
    'celebrity bios',
    'pop culture',
    'celebrity gossip',
    'trending stories',
    'real-time news',
    'TeaSpace',
    'kenyan entertainment news',
  ],
  openGraph: {
    title: 'TeaSpace | Your Source for Entertainment News & Celebrity Stories',
    description:
      'Trusted entertainment coverage, celebrity bios, and global pop culture — delivered with integrity and accuracy.',
    url: 'https://www.teaspace.digital',
    siteName: 'TeaSpace',
    images: [
      {
        url: '/light.png',
        width: 1200,
        height: 630,
        alt: 'TeaSpace Entertainment News',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeaSpace | Entertainment News & Pop Culture',
    description:
      'Follow TeaSpace for accurate, engaging entertainment news and celebrity stories from around the globe.',
    site: '@_teaspace',
    creator: '@teaspace',
    images: ['/light.png'],
  },
  metadataBase: new URL('https://www.teaspace.digital'),
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/web-app-manifest-192x192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#0066cc" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TeaSpace" />
      </head>
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5455747285571046"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <main>
          <Navbar />
          {children}
          <FooterWrapper />
        </main>
      </body>
    </html>
  )
}
