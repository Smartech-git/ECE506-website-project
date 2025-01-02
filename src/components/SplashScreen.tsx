"use client";
import React from "react";
import { motion } from "framer-motion";
import { Logo } from "@/svgAssets";
import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className='relative flex h-[100svh] w-full flex-col items-center justify-center bg-white p-6'>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }}>
        <Logo className='w-fit h-[50px]' />
      </motion.div>
      <div className='absolute bottom-6 mx-auto'>
        <h1 className='text-secondary font-medium sm:text-sm text-xs text-center uppercase'>{`ECE 506 PRACTICAL PROJECT (WATER TRANSPORTAION) - GROUP 2`}</h1>
      </div>
    </div>
  );
}
