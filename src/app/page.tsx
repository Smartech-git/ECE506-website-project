"use client";
import { useEffect, useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";
import { Input } from "@/components/ui/input";
import { Button } from "@nextui-org/button";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Image from "next/image";
import { Checkbox } from "@nextui-org/checkbox";
import Link from "next/link";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import Spinner from "@/components/loadingScreens/Spinner";
import { createSession, getSession } from "@/cookies";
import { loginFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Logo } from "@/svgAssets";
import { useGlobal } from "@/context/GLobalContext";
const illustrationsSVGs = [<Image src='/img/yatch1.jpeg' className='absolute inset-0 h-full w-full object-cover' width={500} height={500} alt='img1' />, <Image src='/img/yatch2.jpeg' className='absolute inset-0 h-full w-full object-cover' width={500} height={500} alt='img1' />, <Image src='/img/yatch3.jpeg' className='absolute inset-0 h-full w-full object-cover' width={500} height={500} alt='img1' />];

export default function Page() {
  const [nextPageIdx, setNextPageIdx] = useState(1);
  const [splashScreen, setSplashScreen] = useState(true);
  const [loginType, setLoginType] = useState<"admin" | "manager">("admin");
  const { setToast } = useGlobal();
  const {
    control,
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  useEffect(() => {
    router.prefetch("/signup");
    router.prefetch("/home");
    let id = setTimeout(() => {
      setSplashScreen(false);
    }, 5000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    let id: any;
    if (!splashScreen) {
      id = setInterval(() => {
        setNextPageIdx((prevPageIdx) => (prevPageIdx === 3 ? 1 : ++prevPageIdx));
      }, 5000);
    }
    return () => {
      clearInterval(id);
    };
  }, [splashScreen]);

  const handleNext = () => {
    setNextPageIdx((prevPageIdx) => (prevPageIdx === 3 ? 3 : ++prevPageIdx));
  };
  const handlePrevious = () => {
    setNextPageIdx((prevPageIdx) => (prevPageIdx === 1 ? 1 : --prevPageIdx));
  };

  const onSubmit = async (data: z.infer<typeof loginFormSchema>, event: any) => {
    event.preventDefault();
    console.log(data);
    setIsSubmitting(true);
    const session = await getSession();
    console.log(session);
    setIsSubmitting(false);
    if (session) {
      if (session?.user?.email !== data?.email || session?.user?.password !== data?.password) {
        setToast({ open: true, state: "error", content: "Email or password not correct" });
      } else {
        router.push("/home");
      }
    } else {
      router.push("/signup");
    }
  };

  return (
    <>
      {!splashScreen ? (
        <div className='flex min-h-[100svh] w-full lg:flex-row flex-col items-center lg:justify-between justify-center px-4 py-4 sm:py-8 md:px-[8%]'>
          <div className='lg:block hidden'>
            <AnimatePresence mode='wait'>
              {illustrationsSVGs.map((svg: any, idx: number) => {
                return (
                  nextPageIdx === idx + 1 && (
                    <motion.div
                      key={idx + 1}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring" }}
                      drag='x'
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                          handleNext();
                        } else if (swipe > swipeConfidenceThreshold) {
                          handlePrevious();
                        }
                      }}
                      className='rounded-lg relative overflow-hidden size-[500px]'
                    >
                      {svg}
                    </motion.div>
                  )
                );
              })}
            </AnimatePresence>
          </div>
          <div className='flex flex-col gap-5 lg:w-[500px] sm:w-[80%] w-full'>
            <Logo className='w-fit h-[25px] mx-auto' />
            <div className='relative flex h-[38px] w-full items-center gap-2 rounded-full bg-gray-200 p-[2px]'>
              <motion.div layout transition={{ type: "spring", duration: 1 }} className={`absolute flex h-[36px] w-[48%] cursor-pointer ${loginType === "admin" ? "left-[2px]" : "right-[2px]"} rounded-full border border-accent bg-white shadow-main`} />
              <div onClick={() => setLoginType("admin")} className={`flex h-full w-[48%] cursor-pointer ${loginType === "admin" ? "text-accent" : "bg-transparent text-gray-700"} items-center justify-center rounded-full p-2 transition-colors`}>
                <span className='relative z-20 text-sm font-medium'>Admin Login</span>
              </div>
              <div className='h-[65%] w-[1px] flex-none' />
              <div onClick={() => setLoginType("manager")} className={`flex h-full w-[48%] cursor-pointer ${loginType === "manager" ? "text-accent" : "bg-transparent text-gray-700"} items-center justify-center rounded-full p-2 transition-colors`}>
                <span className='relative z-20 text-sm font-medium'>Manager Login</span>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='flex w-full flex-col gap-5'>
              <div className='flex min-h-[58px] w-full items-start gap-3 rounded-xl bg-accent/10 p-3'>
                <IoIosInformationCircleOutline className='mt-1 flex-none text-accent size-6' />
                <p className='text-sm text-black'>
                  {`You’re about to log in to your ${loginType === "admin" ? "admin account" : "manager account"}. If you couldn’t log in, try to log in as a`} <span className='font-bold'>{`${loginType === "admin" ? "Manager." : "Admin."}`}</span>
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='flex flex-col gap-y-4'>
                  <div>
                    <span className='text-[0.875rem] font-medium leading-[145%] text-gray-900'>Email</span>
                    <div className='relative mt-[4px] w-full'>
                      <Controller name='email' control={control} render={({ field }) => <Input {...field} type='email' id='email' placeholder='Enter email address' className={`${errors.email && "!border-red-500"} pr-[24px]`} />} />
                    </div>
                    {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
                  </div>
                  <div>
                    <span className='text-smfont-medium text-gray-900'>Password</span>
                    <div className='relative mt-[4px] w-full'>
                      <Input
                        type={showPassword ? "text" : "password"}
                        id='password'
                        placeholder='Enter password'
                        {...register("password", {
                          required: "Password is required",
                        })}
                        className={`${errors.password && "!border-red-500"} pr-[24px]`}
                      />
                      <button className='absolute right-3 top-1/2 -translate-y-1/2' type='button' onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <IoEyeOutline className='text-black size-5' /> : <IoEyeOffOutline className='text-black size-5' />}
                      </button>
                    </div>
                    {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>}
                  </div>
                </div>
                <div className='mt-3 flex w-full justify-end'>
                  <span className='text-sm font-medium text-accent'>Forgot Password?</span>
                </div>
                <div className='mt-3 flex flex-wrap items-center justify-between gap-2'>
                  <div className='flex items-center space-x-2'>
                    <Checkbox
                      defaultSelected
                      classNames={{
                        wrapper: "h-6 w-6 before:rounded-md rounded-md before:border-gray-300 after:bg-accent group-data-[selected=true]:after:bg-accent group-data-[hover=true]:before:bg-gray-50 after:rounded-md",
                        icon: "text-white stroke-[3px]",
                      }}
                    />
                    <span className='text-sm font-medium leading-none text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Remember me for 30 days</span>
                  </div>
                </div>
                <Button type='submit' disabled={isSubmitting} className='my-5 h-[55px] w-full overflow-hidden rounded-full bg-accent px-16 py-4 text-base font-bold text-white'>
                  {isSubmitting ? <Spinner className='size-5' pathClassName='fill-white' /> : "Log in"}
                </Button>

                <p className='flex items-center justify-center gap-2 font-medium'>
                  <span className='text-sm leading-[145%] tracking-[-0.00375rem] text-[#98a2b3]'>Are you new here?</span>{" "}
                  <Link href='/signup' className='text-sm text-accent'>
                    Create Account
                  </Link>
                </p>
              </form>
            </motion.div>
            <div className='mx-auto'>
              <h1 className='text-secondary font-medium sm:text-sm text-xs text-center uppercase'>{`ECE 506 PRACTICAL PROJECT (WATER TRANSPORTAION) - GROUP 2`}</h1>
            </div>
          </div>
        </div>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}
