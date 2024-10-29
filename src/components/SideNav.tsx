"use client";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { Cart } from "../../icons";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

export default function SideNav({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1 }} exit={{ opacity: 0}} transition={{ type: "tween" }} className='w-full fixed top-0  z-40 h-[100svh] flex flex-col gap-6 p-4 bg-background-secondary'>
          <div className='w-full justify-end items-center flex'>
            <Button onPress={() => setIsMenuOpen(false)} disableRipple className='h-fit gap-x-1 !outline-none flex items-center justify-start p-2 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
              <AiOutlineClose className='size-5' />
            </Button>
          </div>
          <motion.div initial={{ y: 12 }} animate={{ y: 0 }} exit={{ y: 12 }} transition={{ type: "spring" }} className='w-fit flex flex-col items-start gap-6'>
            <Link href='/'>
              <Button onPress={() => setIsMenuOpen(false)} disableRipple className='h-fit gap-x-1 !outline-none flex items-center justify-start px-0 py-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={` ${pathname === "/" && "!text-secondary"} text-black font-medium hover:opacity-70 transition-opacity text-base`}>Home</span>
              </Button>
            </Link>
            <Link href='/about-us'>
              <Button onPress={() => setIsMenuOpen(false)} disableRipple className='h-fit gap-x-1 !outline-none flex items-center justify-start px-0 py-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={`${pathname === "/about-us" && "!text-secondary"}  text-black font-medium hover:opacity-70 transition-opacity text-base`}>About us</span>
              </Button>
            </Link>
            <Link href='/events'>
              <Button onPress={() => setIsMenuOpen(false)} disableRipple className='h-fit gap-x-1 !outline-none flex items-center justify-start px-0 py-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={`${pathname === "/events" && "!text-secondary"}  text-black font-medium hover:opacity-70 transition-opacity text-base`}>Events</span>
              </Button>
            </Link>
            <Link href='/voting'>
              <Button onPress={() => setIsMenuOpen(false)} disableRipple className='h-fit gap-x-1 !outline-none flex items-center justify-start px-0 py-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <span className={`${pathname === "/voting" && "!text-secondary"}  text-black font-medium hover:opacity-70 transition-opacity text-base`}>Voting</span>
              </Button>
            </Link>
            <Link href='/cart'>
              <Button onPress={() => setIsMenuOpen(false)} disableRipple className='h-fit gap-x-1 !outline-none flex items-center justify-start px-0 py-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors shadow-none'>
                <div className='flex items-center hover:opacity-70 transition-opacity gap-x-1'>
                  <Cart pathClassName={`${pathname === "/cart" && "!fill-secondary"} fill-black`} />
                  <span className={`${pathname === "/cart" && "!text-secondary"} text-black font-medium  text-base`}>Cart</span>
                </div>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
