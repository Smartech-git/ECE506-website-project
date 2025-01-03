"use client";
import { useEffect, useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";
import { Input } from "@/components/ui/input";
import { Button } from "@nextui-org/button";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Image from "next/image";
import { Checkbox } from "@nextui-org/checkbox";
import Link from "next/link";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import Spinner from "@/components/loadingScreens/Spinner";
import { createSession } from "@/cookies";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationFormSchema } from "@/schemas";
import { Logo } from "@/svgAssets";
const illustrationsSVGs = [<Image src='/img/yatch1.jpeg' className='absolute inset-0 h-full w-full object-cover' width={500} height={500} alt='img1' />, <Image src='/img/yatch2.jpeg' className='absolute inset-0 h-full w-full object-cover' width={500} height={500} alt='img1' />, <Image src='/img/yatch3.jpeg' className='absolute inset-0 h-full w-full object-cover' width={500} height={500} alt='img1' />];

export default function Page() {
  const [nextPageIdx, setNextPageIdx] = useState(1);
  const [splashScreen, setSplashScreen] = useState(true);
  const [loginType, setLoginType] = useState<"admin" | "manager">("admin");
  const {
    control,
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<z.infer<typeof registrationFormSchema>>({
    resolver: zodResolver(registrationFormSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  useEffect(() => {
    router.prefetch("/home");
  }, []);


  const onSubmit = async (data: z.infer<typeof registrationFormSchema>, event: any) => {
    event.preventDefault();
    console.log(data);
    setIsSubmitting(true);
    await createSession(data);
    setIsSubmitting(false);
    router.push("/home");
    // setIsSubmitting(true);
  };
  return (
    <div className='flex min-h-[100svh] w-full lg:flex-row flex-col items-center lg:justify-center justify-center px-4 py-4 sm:py-8 md:px-[8%]'>
      <div className='flex flex-col gap-5 lg:w-[500px] sm:w-[80%] w-full'>
        <Logo className='w-fit h-[25px] mx-auto' />

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='flex w-full flex-col gap-5'>
          <h1 className="text-secondary text-3xl font-bold text-center">Sign up to join to sail</h1>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='flex flex-col gap-y-4'>
              <div>
                <span className='text-smfont-medium text-gray-900'>Firstname</span>
                <div className='relative mt-[4px] w-full'>
                  <Input
                    type={"text"}
                    id='firstname'
                    placeholder='Enter firstname'
                    {...register("firstname", {
                      required: "Firstname is required",
                    })}
                    className={`${errors.firstname && "!border-red-500"} pr-[24px]`}
                  />
                </div>
                {errors.firstname && <span className='text-sm text-red-500'>{errors.firstname.message}</span>}
              </div>
              <div>
                <span className='text-smfont-medium text-gray-900'>Lastname</span>
                <div className='relative mt-[4px] w-full'>
                  <Input
                    type={"text"}
                    id='lastname'
                    placeholder='Enter lastname'
                    {...register("lastname", {
                      required: "Lastname is required",
                    })}
                    className={`${errors.lastname && "!border-red-500"} pr-[24px]`}
                  />
                </div>
                {errors.lastname && <span className='text-sm text-red-500'>{errors.lastname.message}</span>}
              </div>
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
              {isSubmitting ? <Spinner className='size-5' pathClassName='fill-white' /> : "Sign up"}
            </Button>
            <p className='flex items-center justify-center gap-2 font-medium'>
              <span className='text-sm leading-[145%] tracking-[-0.00375rem] text-[#98a2b3]'>Already have and account?</span>{" "}
              <Link href='/' className='text-sm text-accent'>
                Login
              </Link>
            </p>
          </form>
        </motion.div>
        <div className='mx-auto'>
          <h1 className='text-secondary font-medium sm:text-sm text-xs text-center uppercase'>{`ECE 506 PRACTICAL PROJECT (WATER TRANSPORTAION) - GROUP 2`}</h1>
        </div>
      </div>
    </div>
  );
}
