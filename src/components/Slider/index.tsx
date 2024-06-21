import React from "react";
import Image from "next/image";
import SlideCarousel from "./Carousel";

const Slider = () => {
  return (
    <div className="p-10 ">
      <div className="flex text-center flex-col justify-center my-auto h-auto w-full">
        <header className="font-bold text-2xl lg:text-4xl my-5 text-[#70A5D4]">
          SLIDING IMAGES OF BLACK PEOPLE PASSING THROUGH ANY FORM OF ABUSE
        </header>
        <div className=" mx-auto w-full">
          <SlideCarousel />
        </div>
      </div>
    </div>
  );
};

export default Slider;
