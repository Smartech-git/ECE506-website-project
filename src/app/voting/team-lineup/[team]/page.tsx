"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "../../../../../svgAssets";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { CheveronRight, ChveronLeft, SelectorIcon } from "../../../../icons";
import getSymbolFromCurrency from "currency-symbol-map";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { useGlobal } from "@/context/GLobalContext";
import { getCart_data, setCart_data } from "@/util/localStorage";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { v4 as uuidv4 } from "uuid";

export default function Team() {
  const router = useRouter();
  const { cart, setCart } = useGlobal();
  const [cartItem, setCartItem] = useState<any>({ qty: 1, data: "" });
  const [key, setkey] = useState(0);

  const handleSelect = (e: any) => {
    setCartItem((prev: any) => ({
      qty: Number(e.target.value),
      data: "",
    }));
  };

  const handleAddToCart = () => {
    setCart((prev: any) => [cartItem]);
    setCart_data([cartItem]);
  };

  return (
    <div className='w-full flex flex-col min-h-full'>
      <section className='w-full gap-x-4 gap-y-20 bg-background-secondary flex  flex-col py-24 lg:px-16 sm:px-8 px-4'>
        <Button onClick={() => router.back()} disableRipple className='h-[56px] flex gap-x-3  w-fit group !outline-none items-center px-4 py-0 !min-w-fit rounded-none border border-black bg-background-secondary data-[hover=true]:!bg-secondary data-[hover=true]:!border-secondary !opacity-100 transition-colors shadow-none'>
          <ChveronLeft className='group-hover:fill-white' /> <span className='text-black group-hover:text-white transition-colors text-lg text-nowrap font-medium'>Back</span>
        </Button>
        <div className='w-full flex lg:flex-row flex-col items-center gap-8'>
          <div className='w-full flex-1 lg:flex-row flex-col flex items-center gap-5 h-fit'>
            <div className='lg:max-w-[350px] max-w-full flex gap-6 flex-1 flex-col'>
              <div className='w-full flex gap-3 items-center'>
                <span className='text-sm cursor-pointer hover:text-secondary transition-colors font-normal text-black'>See Full Lineup</span>
                <CheveronRight />
                <span className='text-sm cursor-pointer font-semibold text-black'>Team Name</span>
              </div>
              <h1 className='sm:text-5xl text-4xl font-bold text-black'>Team Name</h1>
              <div className='flex items-center gap-2'>
                <span className='text-xl font-bold text-black'>{`${getSymbolFromCurrency("NGN")}${`200`}`}</span>
                <div className='h-full border-r border-black' />
                <div className='flex gap-3 items-center'>
                  <span className='text-black font-medium text-lg'>{`Vote Count • ${`100`} votes`}</span>
                </div>
              </div>
              <div className='w-fit py-4 border-b border-black'>
                <span className='text-base font-normal text-black'>Details</span>
              </div>
              <p className='text-base font-normal text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            <div className='w-full max-w-[700px] flex-1 flex-col flex gap-3'>
              <div className='flex w-full h-[400px] relative'>
                <AnimatePresence>
                  <motion.div key={key} initial={{ opacity: 0, x: 12 }} exit={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring" }} className='w-full absolute top-0 bg-white h-full'></motion.div>
                </AnimatePresence>
              </div>
              <ScrollShadow orientation='horizontal' className='w-full overflow-x-scroll h-fit scrollbar-none'>
                <div className='w-fit flex gap-3'>
                  {new Array(4).fill("").map((item: any, idx: number) => {
                    return <div onClick={() => setkey(idx)} key={idx} className={`size-[80px] ${key === idx && "border border-secondary"} bg-gray-300 cursor-pointer hover:shadow-lg transition-shadow`}></div>;
                  })}
                </div>
              </ScrollShadow>
            </div>
          </div>
          <div className='flex-1 flex gap-4 flex-col lg:max-w-[350px]  w-full max-w-[500px]'>
            <div className='w-full flex flex-col gap-2'>
              <h1 className='text-base text-black font-medium'>Qty</h1>
              <Select
                selectedKeys={[cartItem.qty.toString()]}
                placeholder=''
                onChange={(e) => handleSelect(e)}
                name='qty'
                classNames={{
                  trigger: "!h-12 !px-4 !rounded-none border border-black data-[focus=true]:border-black data-[hover=true]:border-black data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
                  value: "!text-base !text-black group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                  selectorIcon: "stroke-gray-500 size-5",
                }}
                disableSelectorIconRotation
                selectorIcon={<SelectorIcon />}
              >
                {Array.from({ length: 100 }, (_, index) => index + 1).map((qty: any, idx: number) => {
                  return (
                    <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-secondary data-[selected=true]:!font-semibold", title: "text-base" }} key={qty.toString()}>
                      {qty.toString()}
                    </SelectItem>
                  );
                })}
              </Select>
            </div>
            <Button onPress={handleAddToCart} disableRipple className='h-[56px] flex gap-x-3  max-w-full w-full group !outline-none items-center px-4 py-0 !min-w-fit rounded-none border border-black bg-black data-[hover=true]:!bg-black !opacity-100 transition-colors shadow-none'>
              <span className='text-white transition-colors text-lg text-nowrap font-medium'>Add To Carts</span>
            </Button>
            <Button onPress={() => router.push('/cart')} disableRipple className='h-[56px] flex gap-x-3 max-w-ful  w-full group !outline-none items-center px-4 py-0 !min-w-fit rounded-none border border-black bg-background-secondary data-[hover=true]:!bg-background-secondary !opacity-100 transition-colors shadow-none'>
              <span className='text-black transition-colors text-lg text-nowrap font-medium'>Procced to Checkout</span>
            </Button>
          </div>
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
