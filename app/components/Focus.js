import React from 'react'
import focus1 from "@/public/focus1.webp"
import focus2 from "@/public/focus2.webp"
import focus3 from "@/public/focus3.webp"
import Image from 'next/image'
function Focus() {
  return (
    <div className='max-w-[1440px] mx-auto px-6 xl:px-10 2xl:px-0'>
        <h2 className='silka font-bold text-[38px] px-8 py-7'>In Focus</h2>
      <div className='flex xl:flex-row flex-col gap-7'>
        <div className='flex flex-col items-center'>
            <Image src={focus1} className='rounded-[8px]'/>
            <h4 className='silka font-bold text-[22px] text-center my-7'>Pola commits to set science-based emission reduction target</h4>
            <p className='silka text-[18px] text-center'>Polarium commits to set near- and long-term company-wide emission reductions in line with science-based net-zero with the SBTi.</p>
            <button className=" mt-10 text-[13px] py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
          Read more
        </button>
        </div>
        <div className='flex flex-col items-center '>
            <Image src={focus2} className='rounded-[8px] '/>
            <h4 className='silka font-bold text-[22px] text-center my-7'>Pola commits to set science-based emission reduction target</h4>
            <p className='silka text-[18px] text-center'>Polarium commits to set near- and long-term company-wide emission reductions in line with science-based net-zero with the SBTi.</p>
            <button className=" mt-10 text-[13px] py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
          Read more
        </button>
        </div>
        <div className='flex flex-col items-center'>
            <Image src={focus3} className='rounded-[8px]'/>
            <h4 className='silka font-bold text-[22px] text-center my-7'>Pola commits to set science-based emission reduction target</h4>
            <p className='silka text-[18px] text-center'>Polarium commits to set near- and long-term company-wide emission reductions in line with science-based net-zero with the SBTi.</p>
            <button className=" mt-10 text-[13px] py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
          Read more
        </button>
        </div>

      </div>
    </div>
  )
}

export default Focus
