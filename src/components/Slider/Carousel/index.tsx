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
  return (
    <Carousel className="w-[80%] mx-auto " plugins={[plugin.current]}>
      <CarouselPrevious />
      <CarouselContent className="-ml-1 w-full">
        <CarouselItem className=" h-auto pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="w-full h-full bg-transparent">
            <div className="my-5">
              <div className="flex mb-4 items-center picture-picker-container">
                <Image
                  src={""}
                  width={256}
                  height={260}
                  alt={""}
                  className="object-cover rounded-[50%] mx-auto border-2 border-black profile-picture"
                />
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="w-12 h-auto pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="w-full h-full bg-transparent">
            <div className="my-5">
              <div className="flex mb-4 items-center picture-picker-container">
                <Image
                  src={""}
                  width={256}
                  height={260}
                  alt={""}
                  className="object-cover rounded-[50%] mx-auto border-2 border-black profile-picture"
                />
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="w-12 h-auto pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="w-full h-full bg-transparent">
            <div className="my-5">
              <div className="flex mb-4 items-center picture-picker-container">
                <Image
                  src={""}
                  width={256}
                  height={260}
                  alt={""}
                  className="object-cover rounded-[50%] mx-auto border-2 border-black profile-picture"
                />
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="w-12 h-auto pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="w-full h-full bg-transparent">
            <div className="my-5">
              <div className="flex mb-4 items-center picture-picker-container">
                <Image
                  src={""}
                  width={256}
                  height={260}
                  alt={""}
                  className="object-cover rounded-[50%] mx-auto border-2 border-black profile-picture"
                />
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="w-12 h-auto pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="w-full h-full bg-transparent">
            <div className="mt-5">
              <div className="flex mb-4 items-center picture-picker-container">
                <Image
                  src={""}
                  width={256}
                  height={260}
                  alt={""}
                  className="object-cover rounded-[50%] mx-auto border-2 border-black profile-picture"
                />
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

export default SlideCarousel;
