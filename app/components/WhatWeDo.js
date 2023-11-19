import React from "react";

function WhatWeDo() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center text-center pb-24 px-4 ">
        <h3 className="sm:text-[40px] text-[30px] sm:leading-[45px] leading-[40px] font-bold silka">
          Safe, Smart and Sustainable <br /> Energy Storage
        </h3>
        <p className="text-black silka xl:w-[700px]  font-bold text-center mt-10">
          Polarium is a leading energy storage developer. We make energy storage
          and optimization solutions built on lithium-ion battery technology for
          businesses within telecom, commercial, industrial and residential
          facilities across the world. Polarium was founded in 2015 on the
          conviction that safe, smart and sustainable energy storage solutions
          will be key to empower the transition to a truly sustainable energy
          future.
        </p>
        <button className=" mt-10 text-xs py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
          What We DO
        </button>
      </div>
    </div>
  );
}

export default WhatWeDo;
