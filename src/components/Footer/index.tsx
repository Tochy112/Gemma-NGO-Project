"use client";

import React from "react";
import FooterSocialLinks from "@/constants/FooterLinks/Social";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const Login = pathname.startsWith("/auth");

  return (
    <div
      className={` ${
        Login ? "hidden" : "relative isolate overflow-hidden bg-white text"
      }`}
    >
      <div className="grid grid-rows-1 lg:grid-rows-0 lg:grid-cols-2 lg:mx-20 font-semibold text-xs lg:text-base my-8">
        <div className="text-[#5D7D97]">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-40 h-14 relative flex my-3">
              <Image src={"/Gemma-logo.svg"} alt="" fill />
            </div>
            <div className="text-center lg:text-start lg:w-[50%] w-[80%]">
              Corporate Headqaurters Plot 1551, Apo Resettlement Zone E, FCT
              Abuja
            </div>
            <FooterSocialLinks classname={"lg:flex lg:my-3 text-center"} />
          </div>
        </div>
        <div className="text-[#5D7D97] lg:ms-auto mt-5 h-full">
          <div className="flex flex-col my-3 items-center lg:items-start">
            Call us to report a problem
            <span className="text-[#37C190]">0816216912</span>
          </div>
          <div className="flex flex-col my-3 items-center lg:items-start">
            Emergency <span className="text-[#37C190]">911</span>
          </div>
          <div className="flex flex-col my-3 items-center lg:items-start">
            Speak to us
            <span className="text-[#37C190]">nancygemma3@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
