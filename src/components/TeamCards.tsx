"use client";

import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";

export default function TeamCards() {
  return (
    <div className='w-[300px] flex flex-col cursor-pointer overflow-hidden rounded-[20px] shadow-main-lg hover:shadow-main-xl transition-shadow scrollElement'>
      <div className='w-full h-[350px] bg-gray-50'></div>
      <div className='flex w-full flex-col bg-white px-[20px] py-4'>
        <div className='w-full flex items-center justify-between'>
          <h1 className='font-semibold text-lg text-black'>Team Name</h1>
          <span className='text-black text-[20px] font-semibold'>{`${getSymbolFromCurrency("NGN")}300`}</span>
        </div>
        <div className='w-full'>
          <span className='text-sm font-normal text-black'>Support Us</span>
        </div>
      </div>
      <div className='w-full h-[40px] items-center justify-center bg-link-secondary flex'>
        <span className='text-white font-medium text-lg'>Add to Cart</span>
      </div>
    </div>
  );
}
