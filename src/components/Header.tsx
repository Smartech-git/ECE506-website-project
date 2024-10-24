"use client";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { Logo } from "../../svgAssets";
import Link from "next/link";
import { Cart } from "../../icons";
import { usePathname } from "next/navigation";
import { IoMenuSharp } from "react-icons/io5";
import SideNav from "./SideNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className='w-full sticky z-30 top-0 h-[72px] lg:px-16 sm:px-8 px-4 bg-black flex justify-between items-center'>
        <Link href='/'>
          <Logo />
        </Link>
        <Button onPress={() => setIsMenuOpen(true)} disableRipple className='h-fit md:hidden flex gap-x-1 !outline-none items-center px-0 py-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
          <IoMenuSharp className='text-white size-8' />
        </Button>
        <div className='w-fit md:flex hidden items-center gap-x-6'>
          <Link href='/'>
            <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
              <span className={` ${pathname === "/" && "!text-secondary"} text-white font-medium hover:opacity-70 transition-opacity text-base`}>Home</span>
            </Button>
          </Link>
          <Link href='/about-us'>
            <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
              <span className={`${pathname === "/about-us" && "!text-secondary"}  text-white font-medium hover:opacity-70 transition-opacity text-base`}>About us</span>
            </Button>
          </Link>
          <Link href='/events'>
            <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
              <span className={`${pathname === "/events" && "!text-secondary"}  text-white font-medium hover:opacity-70 transition-opacity text-base`}>Events</span>
            </Button>
          </Link>
          <Link href='/cart'>
            <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
              <div className='flex items-center hover:opacity-70 transition-opacity gap-x-1'>
                <Cart pathClassName={`${pathname === "/cart" && "!fill-secondary"}`} />
                <span className={`${pathname === "/cart" && "!text-secondary"} text-white font-medium  text-base`}>Cart</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <SideNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}
