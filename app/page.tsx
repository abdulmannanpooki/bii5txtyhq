'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DriftCar, SteeringWheel, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const driftingImages = [
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1470&q=80',
    alt: 'Audi drifting sideways on a track',
  },
  {
    src: 'https://images.unsplash.com/photo-1519648023493-d82b5f8d7b9a?auto=format&fit=crop&w=1470&q=80',
    alt: 'Close up of Audi wheels drifting',
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80',
    alt: 'Audi drifting with smoke',
  },
  {
    src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1470&q=80',
    alt: 'Audi drifting on mountain road',
  },
];

export default function Home() {
  const [carouselApi, setCarouselApi] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-6 py-20 gap-12">
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Master the Art of <span className="text-red-500">Drifting</span> with My New Audi
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Experience the thrill and precision of drifting like never before. Join me on this adrenaline-fueled journey with my Audi.
          </p>
          <Button
            size="lg"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700"
            onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
          >
            See the Gallery <ChevronRight size={20} />
          </Button>
        </div>
        <div className="flex-1 relative w-full max-w-lg aspect-[16/9] rounded-xl overflow-hidden shadow-2xl ring-4 ring-red-600 ring-opacity-60">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1470&q=80"
            alt="Audi drifting sideways on a track"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Drifting Style Section */}
      <section className="bg-gray-800 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3 text-red-500">
            <SteeringWheel size={36} /> My Drifting Style
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Precision, control, and passion define my drifting style. Every slide is a dance between power and finesse, pushing the limits of my Audi to deliver breathtaking performances on every track.
          </p>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-12 text-red-500">Gallery</h3>
        <div className="relative">
          <Carousel setApi={setCarouselApi} className="overflow-visible">
            <CarouselContent className="gap-6">
              {driftingImages.map(({ src, alt }, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative w-[320px] h-[180px] rounded-lg overflow-hidden shadow-lg ring-2 ring-red-600 ring-opacity-70">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <CarouselPrevious className="absolute top-1/2 left-0 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute top-1/2 right-0 -translate-y-1/2 z-10" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Audi Drifting Showcase. All rights reserved.
      </footer>
    </main>
  );
}
