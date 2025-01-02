import React from "react";
import { Skeleton } from "@nextui-org/skeleton";
import Spinner from "@/components/loadingScreens/Spinner";

export default function Loading() {
  return (
    <div className="bg flex h-[100svh] w-full items-center justify-center bg-white">
      <Spinner className='size-8' pathClassName='fill-accent' />
    </div>
  );
}
