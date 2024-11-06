import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const images = [
    {
      id:1,
      src: "/i1.png"
    },
    {
      id:2,
      src: "/i2.png"
    },
    {
      id:3,
      src: "/i3.png"
    },
    {
      id:4,
      src: "/i4.png"
    },
    {
      id:5,
      src: "/i5.png"
    }
  ];

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((img) => (
          <CarouselItem key={img.id}>
            <div className="p-1">
              
                  <img src={img.src} alt='img' className="w-full rounded-[20px] border-2 border-zinc-400" />
               
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
