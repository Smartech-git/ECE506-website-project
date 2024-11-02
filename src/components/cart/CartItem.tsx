"use client";
import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { useGlobal } from "@/context/GLobalContext";
import { SelectorIcon } from "@/icons";
import { Button } from "@nextui-org/button";
const numeral = require("numeral");

export default function CartItem() {
  const { cart, setCart } = useGlobal();

  const handleSelect = (e: any) => {
    setCart((prev: any) => [
      {
        ...prev,
        qty: Number(e.target.value),
      },
    ]);
  };

  return (
    <>
      {cart.map((cart: any, idx: number) => {
        return (
          <div key={idx} className='w-full md:flex-row flex-col flex gap-4'>
            <div className='w-full h-fit bg-white flex flex-col'>
              <div className='w-full p-4 border-b border-gray-300'>
                <h1 className='font-bold sm:text-2xl text-lg text-link-secondary'>{`Cart (1)`}</h1>
              </div>
              <div className='w-full p-4 flex justify-between'>
                <div className='flex h-fit gap-3'>
                  <div className='sm:w-[130px] w-[100px] sm:h-[140px] h-[120px] bg-gray-100 flex-none relative overflow-hidden'></div>
                  <p className='font-bold sm:text-2xl text-lg text-link-secondary'>Team Name</p>
                </div>
                <div className='w-fit flex flex-col gap-5 items-start'>
                  <p className='font-bold sm:text-2xl text-lg text-link-secondary'>{`${getSymbolFromCurrency("NGN")}${cart?.qty * 200}`}</p>
                  <div className='w-full flex flex-col gap-2'>
                    <h1 className='text-base text-black font-medium'>Qty</h1>
                    <Select
                      selectedKeys={[cart?.qty?.toString()]}
                      placeholder=''
                      onChange={(e) => handleSelect(e)}
                      name='qty'
                      classNames={{
                        trigger: "!h-12 !px-4 sm:w-[100px] w-[80px] !rounded-none border border-black data-[focus=true]:border-black data-[hover=true]:border-black data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
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
                </div>
              </div>
            </div>
            <div className='md:max-w-[360px] bg-white w-full'>
              <div className='w-full p-4 border-b border-gray-300'>
                <h1 className='font-bold sm:text-xl text-base text-link-secondary'>{`CART SUMMARY`}</h1>
              </div>
              <div className='w-full items-end flex p-4 flex-col gap-3'>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='sm:text-xl text-lg font-bold text-black'>Subtotal</h1>
                  <span className='sm:text-xl text-lg font-bold text-black'>{`${getSymbolFromCurrency("NGN")}${numeral((cart.qty * 200).toString()).format("0,0")}`}</span>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='sm:text-xl text-lg font-bold text-black'>{`Discount(25%)`}</h1>
                  <span className='sm:text-xl text-lg font-bold text-black'>{`-${getSymbolFromCurrency("NGN")}${numeral((cart.qty * 200 * 0.25).toString()).format("0,0")}`}</span>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='sm:text-2xl text-lg font-bold text-black'>{`Total`}</h1>
                  <span className='sm:text-2xl text-lg font-bold text-black'>{`${getSymbolFromCurrency("NGN")}${numeral((cart.qty * 200 - cart.qty * 200 * 0.25).toString()).format("0,0")}`}</span>
                </div>
                <Button disableRipple className='h-[56px] mt-2 flex gap-x-3  max-w-full w-full group !outline-none items-center px-4 py-0 !min-w-fit rounded-lg border border-black bg-black data-[hover=true]:!bg-black !opacity-100 transition-colors shadow-none'>
                  <span className='text-white transition-colors text-lg text-nowrap font-medium'>Cast Your Vote</span>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
