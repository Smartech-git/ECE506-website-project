"use client";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { Cart } from "../icons";
import { usePathname } from "next/navigation";
import { IoMenuSharp } from "react-icons/io5";
import SideNav from "./SideNav";
import { useGlobal } from "@/context/GLobalContext";
import { motion } from "framer-motion";
import { Logo } from "@/svgAssets";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useGlobal();
  const pathname = usePathname();

  return (
    <>
      <div className='w-full sticky z-30 top-0 h-[72px] lg:px-16 sm:px-8 px-4 bg-white flex justify-between items-center'>
        {/* <Link href='/'>
          <Logo />
        </Link> */}
        <Button onPress={() => setIsMenuOpen(true)} disableRipple className='h-fit md:hidden flex gap-x-1 !outline-none items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
          <IoMenuSharp className='text-white size-8' />
        </Button>
        <div className='w-fit md:flex hidden items-center gap-x-6'>
          <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
            <span className={` ${pathname === "/" && "!text-secondary"} text-white font-medium hover:opacity-70 transition-opacity text-base`}>Home</span>
          </Button>
          <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
            <span className={`${pathname === "/about-us" && "!text-secondary"}  text-white font-medium hover:opacity-70 transition-opacity text-base`}>About us</span>
          </Button>
          <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
            <span className={`${pathname === "/events" && "!text-secondary"}  text-white font-medium hover:opacity-70 transition-opacity text-base`}>Events</span>
          </Button>
          <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
            <span className={`${pathname.startsWith("/voting") && "!text-secondary"}  text-white font-medium hover:opacity-70 transition-opacity text-base`}>Voting</span>
          </Button>
        </div>
      </div>

      <SideNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}
