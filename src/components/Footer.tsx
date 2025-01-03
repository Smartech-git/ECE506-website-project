import React from "react";
import { Facebook, Instagram, LinkedIn, Youtube } from "../icons";
import Link from "next/link";
import { LogoWhite } from "@/svgAssets";
import { Button, ButtonGroup } from "@nextui-org/button";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className='w-full h-fit relative overflow-x-hidden gap-x-4 gap-y-16 bg-black flex flex-col items-center justify-center py-24 lg:px-16 sm:px-8 px-4'>
      <div className='w-full flex md:flex-row flex-col gap-12 relative items-start justify-between'>
        <div className='flex md:w-[400px] w-full gap-4 md:items-start items-center flex-col'>
          <LogoWhite className='w-fit h-[24px]' />
          <p className='text-white/70 md:text-left text-center text-base'>Yachtera is a premier yacht rental company offering a wide range of luxurious vessels for charter. Our mission is to provide an unparalleled sailing experience, combining comfort, adventure, and exceptional service. Whether you're looking for a romantic getaway or a corporate event, we have the perfect yacht to make your dreams a reality.</p>
          <Button disableRipple className='h-12 w-fit gap-x-2 !outline-none flex items-center px-8 py-0 !min-w-fit rounded-full bg-accent border-none  !opacity-100 transition-colors shadow-none'>
            <HiOutlineChatBubbleOvalLeftEllipsis className='text-white size-5' />
            <span className='text-white transition-colors leading-none text-lg text-nowrap font-medium'>{`Start Live Chat`}</span>
          </Button>
        </div>
        <div className='flex md:w-fit w-full items-start md:justify-start justify-between sm:gap-20 gap-14'>
          <div className='flex w-fit flex-col gap-3'>
            <h1 className='text-white text-lg mb-2 font-medium'>Company</h1>
            <h2 className='text-white/70'>Home</h2>
            <h2 className='text-white/70'>About Us</h2>
            <h2 className='text-white/70'>Services</h2>
            <h2 className='text-white/70'>Contact Us</h2>
          </div>
          <div className='flex w-fit flex-col gap-3'>
            <h1 className='text-white text-lg mb-2 font-medium'>Resources</h1>
            <h2 className='text-white/70'>Destination</h2>
            <h2 className='text-white/70'>Yacht Rental</h2>
            <h2 className='text-white/70'>Documentation</h2>
            <h2 className='text-white/70'>Blog and News</h2>
          </div>
          <div className='flex w-fit flex-col gap-3'>
            <h1 className='text-white text-lg mb-2 font-medium'>Help</h1>
            <h2 className='text-white/70'>Customer Support</h2>
            <h2 className='text-white/70'>Terms and Conditions</h2>
            <h2 className='text-white/70'>Privacy Policy</h2>
          </div>
        </div>
      </div>
      <div className='border-t flex justify-center w-full pt-8 border-white/70'>
        <div className='flex sm:flex-row flex-col items-center gap-8'>
          <p className='text-sm font-normal text-center text-white'>{`ECE 506 PRACTICAL PROJECT (WATER TRANSPORTAION) - GROUP 2.`}</p>
        </div>
      </div>
    </footer>
  );
}
