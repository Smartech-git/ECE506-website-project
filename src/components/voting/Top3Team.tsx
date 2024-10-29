import React from "react";

export default function Top3Team({ position }: { position?: "first" | "second" | "third" }) {
  return (
    <div className='flex-1 h-fit gap-y-2 flex flex-col items-center'>
      <div className="flex flex-col gap-y-1">
              <div className='rounded-full size-[80px] overflow-hidden'></div>
              <span className="text-sm">Team Name</span>
      </div>
    </div>
  );
}
