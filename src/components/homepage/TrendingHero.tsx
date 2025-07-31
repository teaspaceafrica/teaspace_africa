'use client'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

// Mock trending news data
const trendingNews = [
  {
    id: 1,
    title: "Exclusive: Behind the Scenes of the Year's Biggest Blockbuster",
    image:
      'https://images.unsplash.com/photo-1489599663311-b2f8b0a8f85c?w=800&h=400&fit=crop&crop=faces',
  },
  {
    id: 2,
    title: 'Grammy Winner Announces Surprise Album Drop This Weekend',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop&crop=faces',
  },
  {
    id: 3,
    title: 'Celebrity Power Couple Spotted on Secret Romantic Getaway',
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop&crop=faces',
  },
  {
    id: 4,
    title: "Netflix's New Series Breaks Streaming Records in First Week",
    image:
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=400&fit=crop&crop=faces',
  },
  {
    id: 5,
    title: 'Fashion Week 2024: The Most Jaw-Dropping Looks That Stole the Show',
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop&crop=faces',
  },
]

export default function TrendingHero() {
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
          {trendingNews.map((news) => (
            <CarouselItem key={news.id} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/3">
              <div className="relative h-32 md:w-full md:h-36 rounded-2xl overflow-hidden border-2 border-white/20 backdrop-blur-sm">
                {/* Image */}
                <Image
                  width={400}
                  height={300}
                  src={news.image}
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
                  <Link href="#">
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
