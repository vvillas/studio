'use client';

import React, { useCallback } from 'react';
import {
  useEmblaCarousel,
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import { DotButton, PrevButton, NextButton } from './CarouselButtons';
import { cn } from '@/lib/utils';

interface Props {
  slides: string[]; // Assuming slides are image URLs
  options?: EmblaOptionsType;
  className?: string;
}

const Carousel = ({ slides, options, className }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const onButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className={cn('relative', className)}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((imageUrl, index) => (
            <div className="embla__slide w-full flex-[0_0_100%] relative" key={index}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} className="block w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="embla__buttons flex justify-center mt-4 space-x-2">
        <PrevButton emblaApi={emblaApi} />
        <NextButton emblaApi={emblaApi} />
      </div>

      {/* Dot Navigation */}
      <div className="embla__dots flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <DotButton
            key={index}
            selected={emblaApi?.selectedScrollSnap() === index}
            onClick={() => onButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
