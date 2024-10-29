"use client";

import React, { useCallback, useMemo, useEffect, useState, useRef } from "react";
import { Cube, Herobg, Logo, TextOverlay } from "../../../svgAssets";
import { motion, useInView } from "framer-motion";
import { Button } from "@nextui-org/button";
import Countdown from "react-countdown";
import Image from "next/image";
import TeamCards from "@/components/TeamCards";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { ArrowLeft, ArrowRigt } from "../../../icons";
import ScoreSheet from "@/components/voting/ScoreSheet";

export default function OnlineVoting() {
  const [showCountdown, setShowCountdown] = useState(false);
  const avatarGroupRef = useRef(null);
  const isAvatarGroupInView = useInView(avatarGroupRef, { amount: 0.4 });
  const [scrollDivButtons, setScrollDivButtons] = useState({ leftActive: false, rightActive: true });
  const [scrollPosition, setScrollPosition] = useState<any>(0);
  const divTarget = useRef<HTMLDivElement>(null);
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

  const section3ScrollNavHandler = (event: any, distance: number) => {
    const scroll = () => {
      divTarget.current?.scrollTo({
        left: scrollPosition + distance,
        behavior: "smooth",
      });
    };

    scroll();
  };

  const handleOnScroll = (e: any) => {
    if (divTarget.current) {
      const { scrollLeft } = divTarget.current;
      const end = e.target.scrollWidth - Math.round(e.target.scrollLeft) === e.target.clientWidth;
      setScrollPosition(Math.round(scrollLeft));
      if (end) {
        setScrollDivButtons((prev) => ({
          leftActive: prev.leftActive,
          rightActive: false,
        }));
      } else {
        setScrollDivButtons((prev) => ({
          leftActive: prev.leftActive,
          rightActive: true,
        }));
      }

      if (Math.round(scrollLeft) > 0) {
        setScrollDivButtons((prev) => ({
          leftActive: true,
          rightActive: prev.rightActive,
        }));
      } else {
        setScrollDivButtons((prev) => ({
          leftActive: false,
          rightActive: prev.rightActive,
        }));
      }
    }
  };

  return (
    <div className='w-full min-h-full flex flex-col'>
      <section className='w-full h-[500px] overflow-hidden relative bg-black flex items-center justify-center'>
        <Image src='/img/herobg.svg' className='absolute inset-0 w-full h-full object-cover' width={500} height={500} alt='bg' />
        <div className='absolute z-10 w-full h-full flex flex-col sm:px-8 px-8 items-center justify-center gap-6'>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='flex flex-col items-center gap-y-6'>
            <h1 className='text-white sm:text-5xl text-4xl font-bold text-center'>Vote for Your Favorite Team</h1>
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
          <h1 className='sm:sm:text-5xl text-4xl font-bold lg:text-left text-center text-black'>Time Until Deadline</h1>
          <p className='text-lg font-medium lg:text-left text-center max-w-[80%] text-black'>Show your support and vote for your favorite crew before their time runs out</p>
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
      <section className='w-full gap-x-4 gap-y-16 bg-white flex flex-col items-center py-24 lg:px-16 sm:px-8 px-4'>
        <div className='w-full flex flex-col items-center gap-6'>
          <h1 className='sm:text-5xl text-4xl font-bold items-center text-black'>How to Vote</h1>
          <p className='text-lg font-medium  lg:text-left text-center max-w-[80%] text-black'>Show your support and vote for your favorite crew before their time runs out</p>
        </div>
        <div ref={avatarGroupRef} className='w-full h-fit'>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={isAvatarGroupInView && { opacity: 1, y: 0 }} transition={{ type: "spring", duration: 1 }} className='w-full flex justify-center flex-wrap gap-9'>
            <div className='w-full gap-6 items-center flex flex-col flex-1 min-w-[300px] max-w-[450px]'>
              <Cube />
              <h1 className='text-3xl font-bold text-center text-black'>Step 1: Select Your Favorite Team</h1>
              <p className='text-base font-medium  text-center w-full text-black'>Scroll through the list of participating dance crews. Click on the profile of the team you want to vote for to view their details and performance videos.</p>{" "}
            </div>
            <div className='w-full gap-6 items-center flex flex-col flex-1 min-w-[300px] max-w-[450px]'>
              <Cube />
              <h1 className='text-3xl font-bold text-center text-black'>Step 1: Select Your Favorite Team</h1>
              <p className='text-base font-medium  text-center w-full text-black'>Scroll through the list of participating dance crews. Click on the profile of the team you want to vote for to view their details and performance videos.</p>{" "}
            </div>
            <div className='w-full gap-6 items-center flex flex-col flex-1 min-w-[300px] max-w-[450px]'>
              <Cube />
              <h1 className='text-3xl font-bold text-center text-black'>Step 1: Select Your Favorite Team</h1>
              <p className='text-base font-medium  text-center w-full text-black'>Scroll through the list of participating dance crews. Click on the profile of the team you want to vote for to view their details and performance videos.</p>{" "}
            </div>
          </motion.div>
        </div>
      </section>
      <section className='w-full gap-x-4 gap-y-9 bg-background-secondary flex  flex-col items-center lg:justify-between justify-center py-24 lg:px-16 sm:px-8 px-4'>
        <div className='w-full flex flex-col gap-4'>
          <h1 className='text-base font-semibold text-black w-full'>Vote</h1>
          <div className='w-full flex items-end justify-between'>
            <div className='flex flex-col gap-4'>
              <h1 className='sm:text-5xl text-4xl font-bold text-black'>Choose Your Favorite Teams</h1>
              <p className='text-base font-medium  w-full text-black'>Cast your votes and help your favorite crews reach the finals!</p>
            </div>
            <Button disableRipple className='h-[56px] md:flex hidden group gap-x-1 !outline-none items-center px-4 py-0 !min-w-fit rounded-none border border-black bg-background-secondary data-[hover=true]:!bg-secondary data-[hover=true]:!border-secondary !opacity-100 transition-colors shadow-none'>
              <span className='text-black group-hover:text-white transition-colors text-lg text-nowrap font-medium'>See Full Lineup</span>
            </Button>
          </div>
        </div>
        <ScrollShadow ref={divTarget} onScroll={(e) => handleOnScroll(e)} orientation='horizontal' className='w-full overflow-x-scroll h-fit rounded-[20px] scrollbar-none'>
          <div className='w-fit flex gap-5'>
            {new Array(7).fill("").map((item, idx) => {
              return <TeamCards key={idx} />;
            })}
          </div>
        </ScrollShadow>
        <div className='w-full flex items-center justify-end'>
          <div className='flex gap-2'>
            <button onClick={(e) => section3ScrollNavHandler(e, -2.3 * document.getElementsByClassName("scrollElement")[0].clientWidth)} className={`flex ${scrollDivButtons.leftActive ? "opacity-100" : "opacity-50"} hover:bg-black group transition-colors items-center justify-center rounded-full size-12 border border-black`}>
              <ArrowLeft className='group-hover:fill-white transition-colors' />
            </button>
            <button onClick={(e) => section3ScrollNavHandler(e, 2.3 * document.getElementsByClassName("scrollElement")[0].clientWidth)} className={`flex ${scrollDivButtons.rightActive ? "opacity-100" : "opacity-50"} hover:bg-black group transition-colors items-center justify-center rounded-full size-12 border border-black`}>
              <ArrowRigt className='group-hover:fill-white transition-colors' />
            </button>
          </div>
        </div>
        <Button disableRipple className='h-[56px] mr-auto md:hidden group gap-x-1 !outline-none flex items-center px-4 py-0 !min-w-fit rounded-none border border-black bg-background-secondary data-[hover=true]:!bg-secondary data-[hover=true]:!border-secondary !opacity-100 transition-colors shadow-none'>
          <span className='text-black group-hover:text-white transition-colors text-lg text-nowrap font-medium'>See Full Lineup</span>
        </Button>
      </section>
      <section className='w-full h-fit relative overflow-x-hidden gap-x-4 gap-y-8 bg-background-tertiary flex flex-col items-center justify-center py-24 lg:px-16 sm:px-8 px-4'>
        <div className='w-fit absolute my-auto flex-none'>
          <TextOverlay />
        </div>
        <div className='h-fit w-full flex justify-center relative z-20'>
          <ScoreSheet />
        </div>
      </section>
      <section className='w-full gap-x-4 gap-y-8 bg-white flex flex-col items-center py-24 lg:px-16 sm:px-8 px-4'>
        <h1 className='text-lg font-bold text-black'>Proudly Sponsored By</h1>
        <div className='w-full gap-8 flex justify-center flex-wrap'>
          {new Array(12).fill("").map((item, idx: number) => {
            return <Logo key={idx} className='fill-black' />;
          })}
        </div>
      </section>
    </div>
  );
}
