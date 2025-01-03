"use client";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { Cart, Facebook, Instagram } from "../icons";
import { usePathname } from "next/navigation";
import { IoMenuSharp } from "react-icons/io5";
import SideNav from "./SideNav";
import { useGlobal } from "@/context/GLobalContext";
import { motion } from "framer-motion";
import { Logo } from "@/svgAssets";
import { CiFacebook } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useGlobal();
  const pathname = usePathname();

  return (
    <>
      <div className='flex flex-col w-full sticky z-30 top-0'>
        <div className='w-full bg-secondary flex justify-between items-center py-2 lg:px-8 sm:px-8 px-4'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <Instagram className='size-5' />
              <span className='text-sm md:block hidden text-white'>official.yachtera</span>
            </div>
            <div className='flex items-center gap-2'>
              <CiFacebook className='size-5 text-white' />
              <span className='text-sm md:block hidden text-white'>yachtera</span>
            </div>
          </div>
          <div className='items-center flex gap-4'>
            <div className='md:flex hidden items-center gap-2'>
              <IoCallOutline className='size-4 text-white' />
              <span className='text-sm text-white'>{`+234-856-256-2896`}</span>
            </div>
            <div className='flex items-center gap-2'>
              <GoMail className='size-4 text-white' />
              <span className='text-sm text-white'>support@yachtera.com</span>
            </div>
          </div>
        </div>
        <div className='w-full bg-white flex justify-between items-center py-4 lg:px-8 sm:px-8 px-4'>
          <Link href='/'>
            <Logo className='w-fit h-[24px]' />
          </Link>

          <div className='w-fit md:flex absolute left-1/2 -translate-x-1/2 transform hidden items-center gap-x-6'>
            <Link href='/home'>
              <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={` ${pathname === "/home" && "!text-accent"} text-primary font-medium hover:opacity-70 transition-opacity text-sm`}>HOME</span>
              </Button>
            </Link>
            <Link href='/about-us'>
              <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={`${pathname === "/about-us" && "!text-accent"}  text-primary font-medium hover:opacity-70 transition-opacity text-sm`}>ABOUT US</span>
              </Button>
            </Link>
            <Link href='/services'>
              <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={`${pathname === "/services" && "!text-accent"}  text-primary font-medium hover:opacity-70 transition-opacity text-sm`}>SERVICES</span>
              </Button>
            </Link>
            <Link href='/rentals'>
              <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={`${pathname.startsWith("/rentals") && "!text-accent"}  text-primary font-medium hover:opacity-70 transition-opacity text-sm`}>RENTALS</span>
              </Button>
            </Link>
            <Link href='/pricing'>
              <Button disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={`${pathname.startsWith("/pricing") && "!text-accent"}  text-primary font-medium hover:opacity-70 transition-opacity text-sm`}>PRICING</span>
              </Button>
            </Link>
          </div>
          <Button onPress={() => setIsMenuOpen(true)} disableRipple className='h-fit md:hidden flex gap-x-1 !outline-none items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
            <IoMenuSharp className='text-accent size-8' />
          </Button>
          <Button className='h-[50px] md:flex hidden w-fit min-w-fit overflow-hidden rounded-full bg-accent px-8 items-center text-base font-bold text-white'>{"Book now"}</Button>
        </div>
      </div>

      <SideNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}
