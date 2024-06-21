"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./components/Structure/DropdownLayout/DropdownLayout";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import NavbarRoutes from "./components/Structure/Routes";
import { Search } from "@mui/icons-material";

const Nav = () => {
  const pathname = usePathname();
  const homePage = pathname.startsWith("/");
  const background = " bg-white xl:bg-transparent";
  const whiteBackground = homePage ? " bg-white" : "bg-transparent";

  const PageRoutes = () => {
    return (
      <div>
        <div className="flex items-center h-full mt-auto montserrat">
          <NavbarRoutes
            className={"mx-3 font-semibold text-grey-5"}
            content={"Sign in"}
            href={"/auth/login"}
          />
        </div>
      </div>
    );
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="absolute xl:bg-transparent xl:relative z-50">
      <div className={` fixed ${background} w-full xl:relative  xl:py-0`}>
        <div className="flex items-center xl:mx-20 font-sm justify-between">
          <div
            className={`z-50 ${whiteBackground} py-2 xl:w-auto w-full flex justify-between items-center`}
          >
            <Link href={"/"}>
              <h2 className="w-48 ps-5 xl:ps-0">logo comes in here</h2>
            </Link>
            <ul className="xl:flex hidden items-center gap-8 montserrat">
              <NavbarRoutes
                className={"text-pri-1 text-sm"}
                content={"Home"}
                href={"/"}
              />
              <NavbarRoutes
                className={"text-pri-1 text-sm"}
                content={"Report a concern"}
                href={"/"}
              />
              <NavLinks />
            </ul>
            <div
              className="text-sm xl:hidden pe-5"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <CloseIcon className="text-pri-1" />
              ) : (
                <MenuIcon className="text-pri-1" />
              )}
            </div>
          </div>

          <div className="xl:block hidden">
            <PageRoutes />
          </div>

          {/* Mobile nav */}
          <ul
            className={`xl:hidden ${background} z-10 montserrat fixed w-full top-0 bottom-0 py-24 px-4 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            } cursor-pointer overflow-y-scroll sm:overflow-y-hidden`}
          >
            <li>
              <Link
                href="/"
                className="text-pri-1 py-3 px-3 inline-block border-t-0 border-b-2 border-gray-300  w-full"
              >
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
