"use client";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { Cart } from "../icons";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobal } from "@/context/GLobalContext";
import { Logo } from "@/svgAssets";

export default function SideNav({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const pathname = usePathname();
  const { cart } = useGlobal();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "tween" }} className='w-full fixed top-0  z-40 h-[100svh] flex flex-col gap-6 p-4 bg-white'>
          <div className='w-full justify-between items-center flex'>
            <Link href='/home'>
              <div onClick={() => setIsMenuOpen(false)}>
                <Logo className='w-fit h-[24px]' />
              </div>
            </Link>
            <Button onPress={() => setIsMenuOpen(false)} disableRipple className='h-fit gap-x-1 !outline-none flex items-center justify-start p-2 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
              <AiOutlineClose className='size-5' />
            </Button>
          </div>
          <motion.div initial={{ y: 12 }} animate={{ y: 0 }} exit={{ y: 12 }} transition={{ type: "spring" }} className='w-full flex flex-col items-start gap-6'>
            <Link href='/home'>
              <Button onPress={() => setIsMenuOpen(false)} disableRipple className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={` ${pathname === "/home" && "!text-accent"} text-primary font-medium hover:opacity-70 transition-opacity text-sm`}>HOME</span>
              </Button>
            </Link>
            <Link href='/about-us'>
              <Button disableRipple onPress={() => setIsMenuOpen(false)} className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={`${pathname === "/about-us" && "!text-accent"}  text-primary font-medium hover:opacity-70 transition-opacity text-sm`}>ABOUT US</span>
              </Button>
            </Link>
            <Link href='/services'>
              <Button disableRipple onPress={() => setIsMenuOpen(false)} className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={`${pathname === "/services" && "!text-accent"}  text-primary font-medium hover:opacity-70 transition-opacity text-sm`}>SERVICES</span>
              </Button>
            </Link>
            <Link href='/rentals'>
              <Button disableRipple onPress={() => setIsMenuOpen(false)} className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={`${pathname.startsWith("/rentals") && "!text-accent"}  text-primary font-medium hover:opacity-70 transition-opacity text-sm`}>RENTALS</span>
              </Button>
            </Link>
            <Link href='/pricing'>
              <Button disableRipple onPress={() => setIsMenuOpen(false)} className='h-fit gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit border-none rounded-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={`${pathname.startsWith("/pricing") && "!text-accent"}  text-primary font-medium hover:opacity-70 transition-opacity text-sm`}>PRICING</span>
              </Button>
            </Link>
            <Button className='h-[50px] w-full overflow-hidden rounded-full bg-accent px-8 flex items-center text-base font-bold text-white'>{"Book now"}</Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
