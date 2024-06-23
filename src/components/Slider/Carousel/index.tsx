"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import "./index.css";

const SlideCarousel = () => {
  const plugin = React.useRef(Autoplay({ stopOnInteraction: false }));

  const images = [
    {
      index: 1,
      src: "/image1.png",
    },
    {
      index: 2,
      src: "/image2.png",
    },
    {
      index: 3,
      src: "/image3.jpg",
    },
    {
      index: 4,
      src: "/image4.png",
    },
  ]
  return (
    <Carousel className="w-[80%] mx-auto " plugins={[plugin.current]}>
      <CarouselPrevious />
      <CarouselContent className="-ml-1 w-full">
        {
          images.map((image) => (
        <CarouselItem className=" h-auto pl-1 md:basis-1/2 lg:basis-1/3" key={image.index}>
          <div className="w-full h-full bg-transparent">
            <div className="my-5">
              <div className="flex mb-4 items-center picture-picker-container">
                <Image
                  src={image.src}
                  width={256}
                  height={260}
                  alt={""}
                  className="object-cover mx-auto rounded-xl profile-picture"
                />
              </div>
            </div>
          </div>
        </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

export default SlideCarousel;
