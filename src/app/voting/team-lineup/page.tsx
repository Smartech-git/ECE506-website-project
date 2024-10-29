import TeamCards from "@/components/TeamCards";
import React from "react";
import { Logo } from "../../../../svgAssets";

export default function TeamLineUp() {
  return (
    <div className='w-full flex flex-col min-h-full'>
      <section className='w-full gap-x-4 gap-y-9 bg-background-secondary flex  flex-col items-center lg:justify-between justify-center py-24 lg:px-16 sm:px-8 px-4'>
        <div className='w-full flex flex-col gap-4'>
          <h1 className='text-base font-semibold text-black w-full'>Vote</h1>
          <div className='w-full flex items-end justify-between'>
            <div className='flex flex-col gap-4'>
              <h1 className='sm:text-5xl text-4xl font-bold text-black'>Team Lineup</h1>
              <p className='text-base font-medium  w-full text-black'>Cast your votes and help your favorite crews reach the finals!</p>
            </div>
          </div>
        </div>
        <div className='w-full grid justify-center 4kScreen:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4'>
          {new Array(7).fill("").map((item, idx) => {
            return <TeamCards key={idx} />;
          })}
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
