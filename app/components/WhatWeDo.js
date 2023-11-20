import React from "react";
import pol from "@/public/pol.webp";
import Image from "next/image";

function WhatWeDo() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center text-center  px-6 ">
        <h3 className="sm:text-[40px] text-[30px] sm:leading-[45px] leading-[40px] font-bold silka">
          Safe, Smart and Sustainable <br /> Energy Storage
        </h3>
        <p className="text-black silka xl:w-[700px]  font-medium text-center mt-10">
          Polarium is a leading energy storage developer. We make energy storage
          and optimization solutions built on lithium-ion battery technology for
          businesses within telecom, commercial, industrial and residential
          facilities across the world. Polarium was founded in 2015 on the
          conviction that safe, smart and sustainable energy storage solutions
          will be key to empower the transition to a truly sustainable energy
          future.
        </p>
        <button className=" mt-10 text-[13px] py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
          What We Do
        </button>
        <div className="w-[100%] sm:h-full h-[40vh] rounded-3xl pt-24">
          <Image
            className="rounded-3xl w-full h-full sm:object-none object-cover"
            src={pol}
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
