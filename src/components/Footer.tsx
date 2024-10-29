import React from "react";
import { Facebook, Instagram, LinkedIn, Youtube } from "../../icons";

export default function Footer() {
  return (
    <footer className='w-full h-fit relative overflow-x-hidden gap-x-4 gap-y-16 bg-black flex flex-col items-center justify-center py-24 lg:px-16 sm:px-8 px-4'>
      <div className='w-full flex lg:flex-row flex-col gap-4 relative items-center justify-center'>
        <div className='flex gap-3 lg:flex-row flex-col lg:absolute items-center'>
          <span className='text-white text-lg font-semibold hover:text-secondary transition-colors cursor-pointer'>Contact Us</span>
          <span className='text-white text-lg font-semibold hover:text-secondary transition-colors cursor-pointer'>Events</span>
          <span className='text-white text-lg font-semibold hover:text-secondary transition-colors cursor-pointer'>About Us</span>
        </div>
        <div className='flex gap-2 lg:ml-auto items-center'>
          <div className='cursor-pointer'>
            <Facebook />
          </div>
          <div className='cursor-pointer'>
            <Instagram />
          </div>
          <div className='cursor-pointer'>
            <LinkedIn />
          </div>
          <div className='cursor-pointer'>
            <Youtube />
          </div>
        </div>
      </div>
      <div className='border-t flex justify-center w-full pt-8 border-white'>
        <div className='flex sm:flex-row flex-col items-center gap-8'>
          <p className='text-sm font-normal text-center text-white'>© 2024 Bluske Entertainment. All rights reserved.</p>
          <span className='text-sm font-normal cursor-pointer text-center text-white hover:underline underline-offset-2'>Cookies Settings</span>
        </div>
      </div>
    </footer>
  );
}
