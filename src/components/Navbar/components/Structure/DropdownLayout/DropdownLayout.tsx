"use client";

import React, { useState } from "react";
import {
  NavbarLinks,
} from "../../NavbarLinks";
import Link from "next/link";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { ListItem } from "../../ListItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavLinks = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const linkCheck = isHomePage;
  const linkCheck2 = linkCheck ? NavbarLinks : linkCheck;

  return (
    <>
      {linkCheck2.map((link) => (
        <div key={link.header}>
          <NavigationMenu className="hidden xl:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="py-7 xl:py-3 flex text-sm text-grey-5 justify-between h-[20px] items-center xl:pr-0 pr-5 group">
                  {link.header}
                </NavigationMenuTrigger>
                {link.links && (
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {link.links.map((mylinks) => (
                        <ListItem
                          key={mylinks.title}
                          title={mylinks.title}
                          href={mylinks.path}
                        >
                          {mylinks.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menus */}
          <div className="px-3 xl:px-0 text-left xl:cursor-pointer group xl:hidden">
            <h1
              className="py-7 xl:py-3 flex text-sm text-grey-5 justify-between h-[20px] items-center xl:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.header
                  ? setHeading(link.header)
                  : setHeading("");
              }}
            >
              {link.header}
              <span className="text-xl xl:hidden inline">
                {heading === link.header ? <ExpandLess /> : <ExpandMore />}
              </span>
              <span className="text-xl xl:mt-1  mb-2 xl:block hidden group-hover:translate-y-2 group-hover:duration-150 group-hover:py-2">
                <ExpandMore />
              </span>
            </h1>
          </div>
          <div
            className={`
            ${heading === link.header ? "xl:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.links.map((slinks) => (
              <div key={slinks.title}>
                <div className="bg-gray-400 me-5 rounded-lg">
                  <Link href={slinks.path}>
                    <h1
                      onClick={() =>
                        subHeading !== slinks.title
                          ? setSubHeading(slinks.title)
                          : setSubHeading("")
                      }
                      className="py-5 pl-7 my-2 text-xs font-normal text-white text-center xl:pr-0 pr-5 flex justify-between items-center"
                    >
                      {slinks.title}
                    </h1>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
