"use client";

import * as React from "react";
import {
  Carousel as CarouselPrimitive,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
  CarouselApiProvider,
  useCarouselContext,
} from "@/components/ui/carousel-core";

import { cn } from "@/lib/utils";

const Carousel = React.forwardRef<
  React.ElementRef<typeof CarouselPrimitive>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitive>
>(({ className, ...props }, ref) => (
  <div className="relative">
    <CarouselPrimitive
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    />
  </div>
));
Carousel.displayName = CarouselPrimitive.displayName;

export { Carousel, CarouselContent, CarouselPrevious, CarouselNext, CarouselItem, CarouselApiProvider, useCarouselContext };
