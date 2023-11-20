import React from 'react'
import Image from "next/image";
import reserve from "@/public/reserve.webp"
import cost from "@/public/cost.webp"
import revenue from "@/public/revenue.webp"
import energy from "@/public/energy.webp"
import ImageSlider from '../ImageSlider';
function Range() {
  return (
    <div>
        <div className="max-w-[1440px] mx-auto py-28 ">
      <div className="grid xl:grid-cols-6 grid-cols-1 xl:gap-20  xl:items-center xl:px-10 2xl:px-0 px-6">
        <div className="col-span-2  ">
          <h4 className="silka sm:text-[32px] text-[20px] font-bold xl:leading-[36px] leading-[28px]">
          Our Product Range
            
          </h4>
          <p className="text-black  silka my-6 xl:my-10">
          We continuously develop and perfect our fully integrated hardware, software and services including end-of-life services.
          </p>
          <button className=" text-[13px] py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
            Explore
          </button>
        </div>
        <div className="col-span-4 s sm:mt-0 mt-4 bg-red-white w-full ">
         <ImageSlider/> 
      
        </div>
      </div>
    </div>  
      
    </div>
  )
}

export default Range
