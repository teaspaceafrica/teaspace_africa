'use client'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { Articles } from '@/types/types'

export default function TrendingHero({ posts }: { posts: Articles[] }) {
  const trending = posts.filter((post) => post.subcategory === 'isTrending')
  return (
    <section className="bg-[#0066cc] w-full">
      <Carousel
        className="w-full md:max-w-7xl py-2 md:px-2"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {trending.slice(0, 9).map((news) => (
            <CarouselItem key={news.id} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/3">
              <div className="relative h-32 md:w-full md:h-36 rounded-2xl overflow-hidden border-2 border-white/20 backdrop-blur-sm">
                {/* Image */}
                <Image
                  width={400}
                  height={300}
                  src={
                    typeof news.image === 'object' && news.image !== null
                      ? news.image.url
                      : '/placeholder.jpg'
                  }
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066cc]/20 to-[#d53020]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-[#0066cc]/50 backdrop-blur-xs rounded-b-2xl transition-colors duration-300">
                  {/* Title */}
                  <Link
                    href={`/${
                      typeof news.category === 'object' &&
                      news.category !== null &&
                      'slug' in news.category
                        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          (news.category as any).slug
                        : typeof news.category === 'string' || typeof news.category === 'number'
                          ? news.category
                          : 'entertainment'
                    }/${news.slug}`}
                    className="group"
                  >
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight line-clamp-2 group-hover:text-orange-200 transition-colors duration-300">
                      {news.title}
                    </h3>
                  </Link>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
