"use client";

import React, { useCallback, useMemo, useEffect, useState, useRef } from "react";
import { Cube, Herobg, Logo, TextOverlay } from "../../../../svgAssets";
import { motion, useInView } from "framer-motion";
import { Button } from "@nextui-org/button";
import Countdown from "react-countdown";
import getSymbolFromCurrency from "currency-symbol-map";
import Image from "next/image";
import TeamCards from "@/components/TeamCards";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { ArrowLeft, ArrowRigt } from "../../../icons";
import ScoreSheet from "@/components/voting/ScoreSheet";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { Input } from "@nextui-org/react";
import { LogoClient1, LogoClient2, LogoClient3, LogoClient4, LogoClient5, Pricing2, Pricing3, Pricing1 } from "@/svgAssets";
import { FaPlay, FaRegFaceSmile } from "react-icons/fa6";
import { IoCrop } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";

export default function Home() {
  const [showCountdown, setShowCountdown] = useState(false);
  const avatarGroupRef = useRef(null);
  const isAvatarGroupInView = useInView(avatarGroupRef, { amount: 0.4 });
  const section2Ref = useRef(null);
  const section2RefInView = useInView(section2Ref, { amount: 0.4 });
  const section4Ref = useRef(null);
  const section4RefInView = useInView(section4Ref, { amount: 0.6 });
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
      <section className='w-full bg-secondary md:h-[700px] h-[1100px] py-[80px] relative flex items-center justify-center'>
        <Image src='/img/herobg.png' className='absolute inset-0 w-full h-full object-cover' width={1200} height={675} alt='bg' />
        <div className='w-full h-full md:flex-row flex-col px-[6%] bg-black/60 absolute z-10 flex items-center md:justify-between justify-center gap-16'>
          <div className=' sm:w-[600px] w-full flex flex-col  md:items-start items-center justify-center gap-6'>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='flex md:items-start items-center flex-col gap-y-3'>
              <h1 className='text-white md:text-left text-center uppercase text-base'>Yacht Club & Boat Rental</h1>
              <h1 className='text-white  md:text-left text-center sm:text-7xl text-5xl font-bold'>Discover the Freedom of the Open Sea</h1>
              <p className='text-white  md:text-left text-center mt-3 max-w-[80%] sm:text-base text-sm'>Imagine a world where the horizon is your limit and the sea is your highway. With our water transport services, you can experience the thrill of the open sea and discover a new world of freedom and adventure.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className='w-fit' transition={{ type: "spring", delay: 0.3 }}>
              <Button disableRipple className='h-[56px] group gap-x-1 !outline-none flex items-center px-8 py-0 !min-w-fit rounded-full bg-accent border-none  !opacity-100 transition-colors shadow-none'>
                <span className='text-white transition-colors text-lg text-nowrap font-medium'>Discover More</span>
              </Button>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", delay: 0.3 }} className='flex flex-col gap-6 sm:w-[400px] w-full'>
            <div className='w-full md:h-[200px] h-[250px] overflow-hidden relative rounded-xl bg-white'>
              <Image src='/img/yacht4.jpg' className='absolute inset-0 w-full h-full object-cover' width={500} height={500} alt='bg' />
              <div className='absolute inset-0 w-full h-full bg-black/[0.3] flex flex-col justify-between p-8'>
                <Button disableRipple className='h-[48px] w-fit gap-x-1 !outline-none flex items-center px-8 py-0 !min-w-fit rounded-full bg-orange border-none  !opacity-100 transition-colors shadow-none'>
                  <span className='text-white transition-colors leading-none text-lg text-nowrap font-medium'>{`30% off`}</span>
                </Button>
                <div className='w-full flex items-center justify-between gap-4'>
                  <div className='flex gap-1 items-center'>
                    <HiOutlineLocationMarker className='text-white size-5' />
                    <span className='text-white font-medium text-lg'>Lagos, Nigeria</span>
                  </div>
                  <div className='size-10 cursor-pointer hover:opacity-70 transition-opacity flex items-center justify-center rounded-full bg-white'>
                    <FiArrowUpRight className='size-5 text-accent' />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col gap-4 rounded-xl p-8 bg-white'>
              <div className='w-full flex flex-col gap-1'>
                <span className='text-gray-700 font-medium'>Location</span>
                <Input
                  autoComplete='off'
                  placeholder={`city, country etc`}
                  variant='bordered'
                  classNames={{
                    inputWrapper: "!h-14 !px-4 !rounded-lg bg-gray-100 border border-gray-100 !transition-all data-[hover=true]:border-gray-100 group-data-[focus=true]:border-accent group-data-[invalid=true]:!border-error-200 !shadow-none",
                    input: "sm:text-base text-sm overflow-hidden !font-normal placeholder:!font-normal placeholder:!text-gray-400  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                    errorMessage: "text-error-200 text-base",
                  }}
                />
              </div>
              <div className='w-full flex items-center gap-4'>
                <div className='w-full flex flex-col gap-1'>
                  <span className='text-gray-700 font-medium'>From</span>
                  <Input
                    autoComplete='off'
                    placeholder={`Departure Date`}
                    variant='bordered'
                    classNames={{
                      inputWrapper: "!h-14 !px-4 !rounded-lg bg-gray-100 border border-gray-100 !transition-all data-[hover=true]:border-gray-100 group-data-[focus=true]:border-accent group-data-[invalid=true]:!border-error-200 !shadow-none",
                      input: "sm:text-base text-sm overflow-hidden !font-normal placeholder:!font-normal placeholder:!text-gray-400  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                      errorMessage: "text-error-200 text-base",
                    }}
                  />
                </div>
                <div className='w-full flex flex-col gap-1'>
                  <span className='text-gray-700 font-medium'>To</span>
                  <Input
                    autoComplete='off'
                    placeholder={`Return Date`}
                    variant='bordered'
                    classNames={{
                      inputWrapper: "!h-14 !px-4 !rounded-lg bg-gray-100 border border-gray-100 !transition-all data-[hover=true]:border-gray-100 group-data-[focus=true]:border-accent group-data-[invalid=true]:!border-error-200 !shadow-none",
                      input: "sm:text-base text-sm overflow-hidden !font-normal placeholder:!font-normal placeholder:!text-gray-400  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                      errorMessage: "text-error-200 text-base",
                    }}
                  />
                </div>
              </div>
              <Button disableRipple className='h-14 w-full gap-x-1 !outline-none flex items-center px-8 py-0 !min-w-fit rounded-lg bg-secondary border-none  !opacity-100 transition-colors shadow-none'>
                <span className='text-white transition-colors leading-none text-lg text-nowrap font-medium'>{`Book Now`}</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section ref={section2Ref} className='w-full gap-x-4 gap-y-8 bg-white flex lg:flex-row flex-col items-center lg:justify-between justify-center py-24 lg:px-16 sm:px-8 px-4'>
        <motion.div className=' sm:w-[700px] flex-none w-full flex flex-col lg:items-start items-center gap-3'>
          <h1 className='text-secondary lg:text-left text-center uppercase text-base'>About Us</h1>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={section2RefInView && { opacity: 1, y: 0 }} transition={{ type: "spring" }} className='sm:sm:text-7xl text-5xl font-bold lg:text-left text-center text-primary'>
            Yachtera: Your Trusted Sailing Partner
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={section2RefInView && { opacity: 1, y: 0 }} transition={{ type: "spring", delay: 0.3 }} className='text-lg font-medium lg:text-left text-center max-w-[80%] text-gray-700'>
            At Yachtera, we're dedicated to providing you with a unique sailing experience. Our mission is to empower your journey, whether it's for leisure or business, by offering reliable and efficient water transport services.
          </motion.p>
        </motion.div>
        <div className='flex flex-wrap justify-center items-center w-full min-h-[100px] h-fit gap-6'>
          <LogoClient1 />
          <LogoClient2 />
          <LogoClient3 />
          <LogoClient4 />
          <LogoClient5 />
        </div>
      </section>
      <section className='w-full h-[600px] relative bg-secondary overflow-hidden flex items-center justify-center'>
        <Button disableRipple className='w-20 h-20 z-10 max-h-20 min-h-20 group absolute !outline-none flex items-center justify-center px-0 py-0 !min-w-fit rounded-full bg-accent border-none  !opacity-100 transition-colors shadow-none'>
          <FaPlay className='size-8 ml-1 text-white' />
        </Button>
        <video preload='auto' autoPlay loop muted playsInline controlsList='nodownload' onContextMenu={(e) => e.preventDefault()} disablePictureInPicture controls={false} className='absolute top-0 left-0 w-full h-full object-cover'>
          <source src='/videos/section3Vid.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </section>
      <section ref={section4Ref} className='w-full gap-x-4 gap-y-12 bg-background-secondary flex  flex-col items-center lg:justify-between justify-center py-24 lg:px-16 sm:px-8 px-4'>
        <div className='w-full flex justify-between items-center gap-4'>
          <h1 className='md:text-5xl text-2xl text-nowrap font-semibold text-primary'>Featured Yachts</h1>
          <Button disableRipple className='h-[50px] group gap-x-1 !outline-none flex items-center px-8 py-0 !min-w-fit rounded-full bg-accent border-none  !opacity-100 transition-colors shadow-none'>
            <span className='text-white transition-colors text-lg text-nowrap font-medium'>See all</span>
          </Button>
        </div>
        <ScrollShadow ref={divTarget} onScroll={(e) => handleOnScroll(e)} orientation='horizontal' className='w-full overflow-x-scroll h-fit scrollbar-none'>
          <motion.div initial={{ opacity: 0, x: 12 }} animate={section4RefInView && { opacity: 1, x: 0 }} transition={{ type: "spring" }} className='w-fit flex gap-10 justify-between'>
            <div className='flex flex-col w-[350px] relative rounded-xl border border-border1 bg-background-main overflow-visible'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-xl bg-secondary'>
                <Image src='/img/yacht4.jpg' className='absolute inset-0 w-full h-full object-cover' width={500} height={500} alt='bg' />
              </div>
              <div className='w-full p-4 flex flex-col gap-4'>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='sm:text-xl text-base text-primary font-medium'>Aqua Horizon</h1>
                  <span className='sm:text-lg text-base text-orange'>{`4.6/5`}</span>
                </div>
                <div className='w-full flex items-center justify-between py-1 border-y border-border1'>
                  <div className='flex gap-1 items-center'>
                    <IoCrop className='text-secondary size-5' />
                    <span className='text-gray-600 text-base'>85"ft</span>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <RiGroupLine className='text-secondary size-4' />
                    <span className='text-gray-600 text-base'>6 Guest</span>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <FaRegFaceSmile className='text-secondary size-4' />
                    <span className='text-gray-600 text-base'>5 Crew</span>
                  </div>
                </div>
                <p className='text-base text-gray-600'>Aqua Horizon is a luxurious yacht designed for the ultimate sailing experience.it's the perfect vessel for your next adventure.</p>
                <div className='flex justify-between items-center gap-4'>
                  <p className='text-2xl text-primary'>{`${getSymbolFromCurrency("NGN")}12,000/day`}</p>
                  <Button disableRipple className='h-[50px] group gap-x-1 !outline-none flex items-center px-8 py-0 !min-w-fit rounded-lg bg-secondary border-none  !opacity-100 transition-colors shadow-none'>
                    <span className='text-white transition-colors text-lg text-nowrap font-medium'>Book Now</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-[350px] relative rounded-xl border border-border1 bg-background-main overflow-visible'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-xl bg-secondary'>
                <Image src='/img/yatch2.jpeg' className='absolute inset-0 w-full h-full object-cover' width={500} height={500} alt='bg' />
              </div>
              <div className='w-full p-4 flex flex-col gap-4'>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='sm:text-xl text-base text-primary font-medium'>Ocean Dream</h1>
                  <span className='sm:text-lg text-base text-orange'>{`4.8/5`}</span>
                </div>
                <div className='w-full flex items-center justify-between py-1 border-y border-border1'>
                  <div className='flex gap-1 items-center'>
                    <IoCrop className='text-secondary size-5' />
                    <span className='text-gray-600 text-base'>90"ft</span>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <RiGroupLine className='text-secondary size-4' />
                    <span className='text-gray-600 text-base'>10 Guest</span>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <FaRegFaceSmile className='text-secondary size-4' />
                    <span className='text-gray-600 text-base'>6 Crew</span>
                  </div>
                </div>
                <p className='text-base text-gray-600'>Experience the epitome of sailing with Ocean Dream, a luxurious yacht boasting ample space and refined aesthetics.</p>
                <div className='flex justify-between items-center gap-4'>
                  <p className='text-2xl text-primary'>{`${getSymbolFromCurrency("NGN")}15,500/day`}</p>
                  <Button disableRipple className='h-[50px] group gap-x-1 !outline-none flex items-center px-8 py-0 !min-w-fit rounded-lg bg-secondary border-none  !opacity-100 transition-colors shadow-none'>
                    <span className='text-white transition-colors text-lg text-nowrap font-medium'>Book Now</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-[350px] relative rounded-xl border border-border1 bg-background-main overflow-visible'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-xl bg-secondary'>
                <Image src='/img/yacht5.jpg' className='absolute inset-0 w-full h-full object-cover' width={500} height={500} alt='bg' />
              </div>
              <div className='w-full p-4 flex flex-col gap-4'>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='sm:text-xl text-base text-primary font-medium'>Sea Breeze</h1>
                  <span className='sm:text-lg text-base text-orange'>{`4.5/5`}</span>
                </div>
                <div className='w-full flex items-center justify-between py-1 border-y border-border1'>
                  <div className='flex gap-1 items-center'>
                    <IoCrop className='text-secondary size-5' />
                    <span className='text-gray-600 text-base'>80"ft</span>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <RiGroupLine className='text-secondary size-4' />
                    <span className='text-gray-600 text-base'>5 Guest</span>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <FaRegFaceSmile className='text-secondary size-4' />
                    <span className='text-gray-600 text-base'>4 Crew</span>
                  </div>
                </div>
                <p className='text-base text-gray-600'>Experience the thrill of sailing with Sea Breeze, a luxurious yacht that offers the perfect blend of comfort and adventure for your next getaway.</p>
                <div className='flex justify-between items-center gap-4'>
                  <p className='text-2xl text-primary'>{`${getSymbolFromCurrency("NGN")}11,500/day`}</p>
                  <Button disableRipple className='h-[50px] group gap-x-1 !outline-none flex items-center px-8 py-0 !min-w-fit rounded-lg bg-secondary border-none  !opacity-100 transition-colors shadow-none'>
                    <span className='text-white transition-colors text-lg text-nowrap font-medium'>Book Now</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-[350px] relative rounded-xl border border-border1 bg-background-main overflow-visible'>
              <div className='w-full h-[250px] relative overflow-hidden rounded-xl bg-secondary'>
                <Image src='/img/yatch3.jpeg' className='absolute inset-0 w-full h-full object-cover' width={500} height={500} alt='bg' />
              </div>
              <div className='w-full p-4 flex flex-col gap-4'>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='sm:text-xl text-base text-primary font-medium'>Sea Liner</h1>
                  <span className='sm:text-lg text-base text-orange'>{`4.5/5`}</span>
                </div>
                <div className='w-full flex items-center justify-between py-1 border-y border-border1'>
                  <div className='flex gap-1 items-center'>
                    <IoCrop className='text-secondary size-5' />
                    <span className='text-gray-600 text-base'>60"ft</span>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <RiGroupLine className='text-secondary size-4' />
                    <span className='text-gray-600 text-base'>12 Guest</span>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <FaRegFaceSmile className='text-secondary size-4' />
                    <span className='text-gray-600 text-base'>6 Crew</span>
                  </div>
                </div>
                <p className='text-base text-gray-600'>Experience the thrill of sailing with Sea Breeze, a luxurious yacht that offers the perfect blend of comfort and adventure for your next getaway.</p>
                <div className='flex justify-between items-center gap-4'>
                  <p className='text-2xl text-primary'>{`${getSymbolFromCurrency("NGN")}13,500/day`}</p>
                  <Button disableRipple className='h-[50px] group gap-x-1 !outline-none flex items-center px-8 py-0 !min-w-fit rounded-lg bg-secondary border-none  !opacity-100 transition-colors shadow-none'>
                    <span className='text-white transition-colors text-lg text-nowrap font-medium'>Book Now</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollShadow>
      </section>
      <section className='w-full gap-x-4 gap-y-16 bg-white flex flex-col items-center py-24 lg:px-16 sm:px-8 px-4'>
        <div className='w-full flex flex-col items-center gap-6'>
          <p className='text-lg font-medium uppercase text-center text-secondary'>Pricing Plans</p>
          <h1 className='sm:text-5xl text-4xl max-w-[700px] font-bold text-center text-primary'>Choose the Perfect Plan for Your Yacht Adventures</h1>
        </div>
        <div ref={avatarGroupRef} className='w-full h-fit'>
          <div className='w-full flex justify-center flex-wrap gap-9'>
            <Pricing1 />
            <Pricing2 />
            <Pricing3 />
          </div>
        </div>
      </section>
      <div className='h-[500px] bg-secondary py-24 lg:px-16 sm:px-8 px-4 flex flex-col gap-4 items-center justify-center'>
        <div className='w-full flex flex-col items-center gap-6'>
          <h1 className='sm:text-5xl text-4xl max-w-[600px] font-bold text-center text-white'>Ready to Set Sail?</h1>
          <p className='text-lg font-medium max-w-[600px] text-center text-white'>Explore the world in style with Yachtera. Choose your dream yacht, select your destination, and embark on an unforgettable journey today!</p>
        </div>
        <div className='w-fit flex mt-4 gap-4'>
          <Button disableRipple className='h-14 w-full gap-x-1 !outline-none flex items-center px-8 py-0 !min-w-fit rounded-full bg-accent border-none  !opacity-100 transition-colors shadow-none'>
            <span className='text-white transition-colors leading-none text-lg text-nowrap font-medium'>{`Book Now`}</span>
          </Button>
          <Button disableRipple className='h-14 w-full gap-x-1 !outline-none flex items-center px-8 py-0 !min-w-fit rounded-full bg-white border-none  !opacity-100 transition-colors shadow-none'>
            <span className='text-accent transition-colors leading-none text-lg text-nowrap font-medium'>{`Contact us`}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
