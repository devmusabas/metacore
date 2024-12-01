'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const carouselItems = [
  {
    src: '/img/macbeth-flyer.jpg',
    alt: 'Macbeth Flyer',
    width: 240,
    height: 339.46,
    className: '',
    fill: false,
  },
  {
    src: '/img/flyer.jpeg',
    alt: 'Flyer',
    width: 285,
    height: 368.83,
    className: 'max-md:pl-6',
    fill: true,
  },
];

const ImageCarousel: React.FC = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const handleExpand = (src: string): void => {
    setExpandedImage(src);
  };

  const handleMinimize = (): void => {
    setExpandedImage(null);
  };

  const handleKeyDown = useCallback((event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      handleMinimize();
    }
  }, []);

  useEffect(() => {
    if (expandedImage) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return (): void => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [expandedImage, handleKeyDown]);

  return (
    <div className="relative mx-auto flex min-h-[443px] max-w-[1663px] items-center justify-center border-b-4 border-b-metacore-secondary/80 px-16 py-24 md:px-24">
      <div className="absolute bottom-1 w-full bg-metacore-primary/80 py-1.5" />
      {/* <div className="absolute top-52 w-full bg-metacore-secondary py-0.5" /> */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-[51] flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleMinimize}
        >
          <button
            onClick={handleMinimize}
            className="absolute right-4 top-4 z-[60] rounded-full bg-white/80 p-1.5 text-black hover:bg-white/50"
          >
            <X className="h-4 w-4" />
          </button>
          <Image
            src={expandedImage}
            alt="Expanded Image"
            className="h-full w-full object-contain p-8"
            fill
          />
        </div>
      )}
      <Carousel className="mx-auto w-full max-w-[250px] md:hidden">
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <div>
                <Card className="border-none bg-transparent py-0 shadow-none">
                  <CardContent className="flex items-center justify-center py-0">
                    <button onClick={() => handleExpand(item.src)}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item?.fill ? undefined : item.width}
                        height={item?.fill ? undefined : item.height}
                        objectFit="contain"
                        objectPosition="center"
                        className={cn('relative', item.fill && 'max-md:pl-6')}
                        fill={item.fill}
                      />
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="hidden w-fit md:flex">
        {carouselItems.map((item, index) => (
          <div className="flex w-full gap-4 p-1" key={index}>
            <Card className="h-full border-none bg-transparent">
              <CardContent className="relative flex h-full items-center justify-center p-0 shadow-lg">
                <button onClick={() => handleExpand(item.src)}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    objectFit="contain"
                    objectPosition="center"
                  />
                </button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
