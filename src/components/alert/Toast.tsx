"use client";
import React, { useEffect } from "react";
import { useGlobal } from "@/context/GLobalContext";
import { motion, AnimatePresence } from "framer-motion";
import { Close, MiscIcon_error, MiscIcon_success } from "@/appIcons";

export default function Toast() {
  const { toast, setToast } = useGlobal();

  useEffect(() => {
    let id: any;

    if (toast.open) {
      if (toast.state === "success" || toast.state === "error") {
        id = setTimeout(() => {
          setToast({ open: false, state: undefined, content: undefined });
        }, 3000);
      }
    }
    return () => {
      clearTimeout(id);
    };
  }, [toast?.open, toast?.state]);

  return (
    <AnimatePresence>
      {toast.state === "success" && toast.open && (
        <motion.div key={"success"} initial={{ opacity: 0, y: -12 }} exit={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='fixed top-8 z-[99999]  mx-auto left-0 right-0 flex min-h-[66px] w-[90%] items-start justify-center gap-x-3 overflow-hidden rounded-[4px] bg-white px-4 py-3 shadow-main-lg sm:w-[370px]'>
          <div className='flex w-full items-start gap-x-3'>
            <MiscIcon_success className='flex-none size-8' />
            <div className='flex w-full mt-1 flex-col'>
              <h1 className='text-sm font-bold text-gray-900'>{toast.content}</h1>
            </div>
          </div>
          <div className='h-full w-[1px] bg-gray-100' />
          <div
            onClick={() =>
              setToast({
                open: false,
                state: undefined,
                content: undefined,
              })
            }
            className='cursor-pointer rounded p-1 transition-colors hover:bg-gray-50'
          >
            <Close />
          </div>
        </motion.div>
      )}

      {toast.state === "error" && toast.open && (
        <motion.div key={"error"} initial={{ opacity: 0, y: -12 }} exit={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='fixed top-8 z-[99999]  mx-auto left-0 right-0 flex min-h-[66px] w-[90%] items-start justify-center gap-x-3 overflow-hidden rounded-[4px] bg-white px-4 py-3 shadow-main-lg sm:w-[370px]'>
          <div className='flex w-full items-start gap-x-3'>
            <MiscIcon_error className='flex-none size-8' />
            <div className='flex w-full mt-1 flex-col'>
              <h1 className='text-sm font-bold text-gray-900'>{toast.content}</h1>
            </div>
          </div>
          <div className='h-full w-[1px] bg-gray-100' />
          <div
            onClick={() =>
              setToast({
                open: false,
                state: undefined,
                content: undefined,
              })
            }
            className='cursor-pointer rounded p-1 transition-colors hover:bg-gray-50'
          >
            <Close />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
