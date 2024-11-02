"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "../../../svgAssets";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { CheveronRight, ChveronLeft, SelectorIcon } from "@/icons";
import { useGlobal } from "@/context/GLobalContext";
import { getCart_data, setCart_data } from "@/util/localStorage";
import { AnimatePresence, motion } from "framer-motion";
import CartItem from "@/components/cart/CartItem";
export default function Team() {
  const router = useRouter();
  const { cart, setCart } = useGlobal();

  useEffect(() => {
    const x = getCart_data();
    if (x.length > 0) {
      setCart(x);
    }
  }, []);

  return (
    <div className='w-full flex flex-col min-h-full'>
      <section className='w-full gap-x-4 gap-y-20 bg-background-secondary flex  flex-col py-24 lg:px-16 sm:px-8 px-4'>
        <Button onClick={() => router.push("/voting/team-lineup")} disableRipple className='h-[56px] flex gap-x-3  w-fit group !outline-none items-center px-4 py-0 !min-w-fit rounded-none border border-black bg-background-secondary data-[hover=true]:!bg-secondary data-[hover=true]:!border-secondary !opacity-100 transition-colors shadow-none'>
          <ChveronLeft className='group-hover:fill-white' /> <span className='text-black group-hover:text-white transition-colors text-lg text-nowrap font-medium'>Back</span>
        </Button>
        <div className='w-full flex lg:flex-row flex-col items-center gap-8'>
          {cart.length > 0 ? (
            <CartItem />
          ) : (
            <div className='w-full h-[200px] bg-white flex items-center justify-center'>
              <h1 className='text-black text-2xl font-medium'>Cart is empty</h1>
            </div>
          )}
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
