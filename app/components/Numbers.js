import React from "react";
import Image from "next/image";
import pol1 from "@/public/pol1.webp"
function Numbers() {
  return (
    <div>
      <h3 className="sm:text-[40px] text-[30px] sm:leading-[45px] leading-[40px] text-center mb-20 font-bold silka mt-40">
        Polarium in Numbers
      </h3>
      <div className="flex xl:justify-between justify-center xl:flex-row flex-col xl:gap-0 gap-14 items-center xl:px-72">
        <div className="flex justify-center items-center flex-col">
          <h4 className="silka text-[50px]  font-bold text-center">2015</h4>
          <hr className="w-[70px]  h-[1px] bg-[#cccccc] my-3" />
          <h6 className="silka text-center">Founded</h6>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h4 className="silka text-[50px]  font-bold text-center">~550</h4>
          <hr className="w-[70px]  h-[1px] bg-[#cccccc] my-3" />
          <h6 className="silka text-center">People</h6>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h4 className="silka text-[50px]  font-bold text-center">440,000</h4>
          <hr className="w-[70px]  h-[1px] bg-[#cccccc] my-3" />
          <h6 className="silka text-center">Battery Installed</h6>
        </div>
      </div>
      <div className="my-20">
          <Image
            className=""
            src={pol1}
          />
        </div>
    </div>
  );
}

export default Numbers;
