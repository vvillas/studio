"use client";

import * as React from "react";
import * as CarouselPrimitive from "@radix-ui/react-carousel";

import { cn } from "@/lib/utils";

const Carousel = CarouselPrimitive.Root

const CarouselContent = React.forwardRef<
  React.ElementRef<typeof CarouselPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitive.Content>
>(({ className, ...props }, ref) => (
  <CarouselPrimitive.Content
    ref={ref}
    className={cn("flex overflow-hidden", className)}
    {...props}
  />
));
CarouselContent.displayName = CarouselPrimitive.Content.displayName

const CarouselItem = React.forwardRef<
  React.ElementRef<typeof CarouselPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CarouselPrimitive.Item
    ref={ref}
    className={cn("w-full flex-shrink-0", className)}
    {...props}
  />
));
CarouselItem.displayName = CarouselPrimitive.Item.displayName

const CarouselNext = React.forwardRef<
  React.ElementRef<typeof CarouselPrimitive.Next>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitive.Next>
>(({ className, children, ...props }, ref) => (
  <div className="hidden md:block">
    <CarouselPrimitive.Next
      ref={ref}
      className={cn(
        "absolute right-0 bottom-0 top-0 h-full w-10 bg-gradient-to-l from-background text-foreground opacity-50 group-hover:opacity-100 transition-opacity focus:shadow-none disabled:cursor-not-allowed disabled:opacity-20",
        className
      )}
      {...props}
    >
      {children || <span className="sr-only">Próximo</span>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M9 5l7 7-7 7" />
      </svg>
    </CarouselPrimitive.Next>
  </div>
));
CarouselNext.displayName = CarouselPrimitive.Next.displayName

const CarouselPrevious = React.forwardRef<
  React.ElementRef<typeof CarouselPrimitive.Prev>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitive.Prev>
>(({ className, children, ...props }, ref) => (
  <div className="hidden md:block">
    <CarouselPrimitive.Prev
      ref={ref}
      className={cn(
        "absolute left-0 bottom-0 top-0 h-full w-10 bg-gradient-to-r from-background text-foreground opacity-50 group-hover:opacity-100 transition-opacity focus:shadow-none disabled:cursor-not-allowed disabled:opacity-20",
        className
      )}
      {...props}
    >
      {children || <span className="sr-only">Anterior</span>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M15 18l-7-7 7-7" />
      </svg>
    </CarouselPrimitive.Prev>
  </div>
));
CarouselPrevious.displayName = CarouselPrimitive.Prev.displayName

const CarouselApiProvider = CarouselPrimitive.Root
const useCarouselContext = () => React.useContext(CarouselPrimitive.CarouselContext)

export { Carousel, CarouselContent, CarouselNext, CarouselPrevious, CarouselItem, CarouselApiProvider, useCarouselContext };
