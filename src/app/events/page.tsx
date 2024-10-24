"use client";

import React, { useCallback, useMemo, useEffect, useState } from "react";
import { Herobg } from "../../../svgAssets";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import Countdown from "react-countdown";
import Image from "next/image";

export default function OnlineVoting() {
  const [showCountdown, setShowCountdown] = useState(false);
  useEffect(() => {
    setShowCountdown(true);
  }, []);

  const renderer = useCallback(({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <div className='p-4 px-5 border border-black flex gap-2'>
          <p className='text-black text-3xl font-bold'>Voting has ended!</p>
        </div>
      );
    } else {
      return (
        <div className='p-4 sm:px-5 px-4 border items-center border-black flex sm:gap-5 gap-2'>
          <div className='flex flex-col gap-1 sm:px-3 px-2 items-center'>
            <p className='text-black sm:text-[40px] text-2xl font-bold'>{days}</p>
            <span className='font-normal text-base text-black'>Days</span>
          </div>
          <div className='h-[80px] border-r border-black flex-none' />
          <div className='flex flex-col gap-1 sm:px-3 px-2 items-center'>
            <p className='text-black sm:text-[40px] text-2xl font-bold'>{hours}</p>
            <span className='font-normal text-base text-black'>Hours</span>
          </div>
          <div className='h-[80px] bg-black border-r border-black flex-none' />
          <div className='flex flex-col gap-1 sm:px-3 px-2 items-center'>
            <p className='text-black sm:text-[40px] text-2xl font-bold'>{minutes}</p>
            <span className='font-normal text-base text-black'>Mins</span>
          </div>
          <div className='h-[80px] bg-black border-r border-black flex-none' />
          <div className='flex flex-col gap-1 sm:px-3 px-2 items-center'>
            <p className='text-black sm:text-[40px] text-2xl font-bold'>{seconds}</p>
            <span className='font-normal text-base text-black'>Secs</span>
          </div>
        </div>
      );
    }
  }, []);

  return (
    <div className='w-full min-h-full flex flex-col'>
      <section className='w-full h-[500px] overflow-hidden relative bg-black flex items-center justify-center'>
        <Image src='/img/herobg.svg' className='absolute inset-0 w-full h-full object-cover' width={500} height={500} alt='bg' />
        <div className='absolute z-10 w-full h-full flex flex-col sm:px-8 px-8 items-center justify-center gap-6'>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='flex flex-col items-center gap-y-6'>
            <h1 className='text-white text-5xl font-bold text-center'>Vote for Your Favorite Team</h1>
            <p className='text-white font-medium max-w-[80%] text-center text-lg'>Support your favorite team by casting your votes. Every vote counts!</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", delay: 0.2 }}>
            <Button disableRipple className='h-[56px] w-[126px] group gap-x-1 !outline-none flex items-center px-0 py-0 !min-w-fit rounded-none border-none bg-white data-[hover=true]:!bg-tertiary !opacity-100 transition-colors shadow-none'>
              <span className='text-black group-hover:text-white transition-colors text-lg text-nowrap font-medium'>Vote Now</span>
            </Button>
          </motion.div>
        </div>
      </section>
      <section className='w-full gap-x-4 gap-y-8 bg-background-secondary flex lg:flex-row flex-col items-center lg:justify-between justify-center py-24 lg:px-16 sm:px-8 px-4'>
        <div className='w-fit flex flex-col lg:items-start items-center gap-6'>
          <h1 className='text-5xl font-bold text-center text-black'>Time Until Deadline</h1>
          <p className='text-lg  font-medium text-center max-w-[80%] text-black'>Show your support and vote for your favorite crew before their time runs out</p>
        </div>
        <div className='flex flex-col items-center lg:min-w-[400px] min-h-[100px] h-fit gap-4 px-8'>
          <h1 className='text-center font-bold text-3xl text-black'>Sat 12 Nov</h1>
          {showCountdown && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }}>
              <Countdown date={new Date("2024-11-12")} renderer={renderer} />
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
