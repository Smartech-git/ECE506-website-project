import React from "react";

export default function ScoreSheet () {
  return (
    <div className='sm:w-[450px] gap-y-6 w-full flex flex-col'>
      <div className='flex gap-4 items-end'>
        <div className='flex-1 h-fit gap-y-2 flex flex-col items-center'>
          <div className='flex flex-col gap-y-1'>
            <div className='rounded-full bg-white size-[80px] overflow-hidden'></div>
            <span className='text-base text-white font-semibold text-center'>Team Name</span>
          </div>
          <div className='w-full flex justify-center items-center bg-2ndPosition-gradient h-[140px] rounded-t-2xl'>
            <div className='flex flex-col items-center justify-center gap-2'>
              <h1 className='text-base text-white font-bold'>2nd</h1>
              <div className='rounded-full bg-white/30 px-2 py-1'>
                <span className='text-sm text-black font-medium'>1200 Vts</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 h-fit gap-y-2 flex flex-col items-center'>
          <div className='flex flex-col gap-y-1'>
            <div className='rounded-full bg-white size-[80px] overflow-hidden'></div>
            <span className='text-base text-white font-semibold text-center'>Team Name</span>
          </div>
          <div className='w-full flex justify-center items-center bg-1stPosition-gradient h-[170px] rounded-t-2xl'>
            <div className='flex flex-col items-center justify-center gap-2'>
              <h1 className='text-base text-white font-bold'>1st</h1>
              <div className='rounded-full bg-white/30 px-2 py-1'>
                <span className='text-sm text-black font-medium'>1500 Vts</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 h-fit gap-y-2 flex flex-col items-center'>
          <div className='flex flex-col gap-y-1'>
            <div className='rounded-full bg-white size-[80px] overflow-hidden'></div>
            <span className='text-base text-white font-semibold text-center'>Team Name</span>
          </div>
          <div className='w-full flex justify-center items-center bg-3rdPosition-gradient h-[140px] rounded-t-2xl'>
            <div className='flex flex-col items-center justify-center gap-2'>
              <h1 className='text-base text-white font-bold'>3rd</h1>
              <div className='rounded-full bg-white/30 px-2 py-1'>
                <span className='text-sm text-black font-medium'>500 Vts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-y-1'>
        <h1 className='text-text-secondary text-center font-medium text-sm'>
          <span className='text-base font-bold text-white'>Team</span> Name is on top of the leader board
        </h1>
        <div className='relative w-full'>
          <div className='overflow-y-scroll w-full bg-background-surface/70 rounded-b-3xl overflow-hidden rounded-t-lg scrollbar-none'>
            <table className='w-full'>
              <thead className='w-full rounded-lg bg-gray-500/40 px-6 py-3 flex items-center'>
                <tr className='flex w-full'>
                  <th className='w-[50%] flex items-center'>
                    <span className='text-lg text-white font-medium'>Name</span>
                  </th>
                  <th className='w-[25%] flex items-center justify-center'>
                    <span className='text-lg text-white font-medium'>Place</span>
                  </th>
                  <th className='w-[25%] flex  items-center justify-center'>
                    <span className='text-lg text-white font-medium'>Votes</span>
                  </th>
                </tr>
              </thead>

              <tbody className='w-full'>
                <tr className='flex w-full px-6 py-4'>
                  <td className='w-[50%] flex'>
                    <div className='flex items-center gap-3'>
                      <div className='rounded-full bg-white sm:size-12 size-10 flex-none'></div>
                      <p className='text-white font-medium text-lg'>Team Name</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>1</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>1500</p>
                    </div>
                  </td>
                </tr>
                <tr className='flex w-full px-6 py-4'>
                  <td className='w-[50%] flex'>
                    <div className='flex items-center gap-3'>
                      <div className='rounded-full bg-white sm:size-12 size-10 flex-none'></div>
                      <p className='text-white font-medium text-lg'>Team Name</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>2</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>1200</p>
                    </div>
                  </td>
                </tr>
                <tr className='flex w-full px-6 py-4'>
                  <td className='w-[50%] flex'>
                    <div className='flex items-center gap-3'>
                      <div className='rounded-full bg-white sm:size-12 size-10 flex-none'></div>
                      <p className='text-white font-medium text-lg'>Team Name</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>2</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>1200</p>
                    </div>
                  </td>
                </tr>
                <tr className='flex w-full px-6 py-4'>
                  <td className='w-[50%] flex'>
                    <div className='flex items-center gap-3'>
                      <div className='rounded-full bg-white sm:size-12 size-10 flex-none'></div>
                      <p className='text-white font-medium text-lg'>Team Name</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>2</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>1200</p>
                    </div>
                  </td>
                </tr>
                <tr className='flex w-full px-6 py-4'>
                  <td className='w-[50%] flex'>
                    <div className='flex items-center gap-3'>
                      <div className='rounded-full bg-white sm:size-12 size-10 flex-none'></div>
                      <p className='text-white font-medium text-lg'>Team Name</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>2</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>1200</p>
                    </div>
                  </td>
                </tr>
                <tr className='flex w-full px-6 py-4'>
                  <td className='w-[50%] flex'>
                    <div className='flex items-center gap-3'>
                      <div className='rounded-full bg-white sm:size-12 size-10 flex-none'></div>
                      <p className='text-white font-medium text-lg'>Team Name</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>2</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>1200</p>
                    </div>
                  </td>
                </tr>
                <tr className='flex w-full px-6 py-4'>
                  <td className='w-[50%] flex'>
                    <div className='flex items-center gap-3'>
                      <div className='rounded-full bg-white sm:size-12 size-10 flex-none'></div>
                      <p className='text-white font-medium text-lg'>Team Name</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>2</p>
                    </div>
                  </td>
                  <td className='w-[25%] flex items-center justify-center'>
                    <div className='flex items-center gap-3'>
                      <p className='text-white font-normal text-lg'>1200</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
