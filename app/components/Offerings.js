import React from "react";

function Offerings() {
  return (
    <div>
      <div className="flex xl:flex-row flex-col justify-between gap-20 xl:items-center xl:px-10 px-6">
        <div className="flex flex-1 flex-col items-start">
          <h4 className="silka sm:text-[32px] text-[20px] font-bold xl:leading-[36px] leading-[28px]">
            We Maximize Value Creation for our
            <br className="sm:flex hidden" /> Customers
          </h4>
          <p className="text-black  silka my-6 xl:my-10">
            Our modular battery technology is easily adaptable for further
            growth regardless whether within larger utility scale, mid-size
            Commercial and Industrial or Residential applications. We maximize
            value creation for our customers through our cutting-edge
            technology. Our energy storage solutions enable customers to:
          </p>
          <button className=" text-[13px] py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
            Our Offering
          </button>
        </div>
        <div className="flex flex-1 flex-col gap-2 xl:px-20 ">
          <div className="border-[1px] border-[#cccccc] w-full h-[80px] flex items-center rounded-[16px] px-14">
            <h5 className="silka font-semibold">Secure reserve power</h5>
          </div>
          <div className="border-[1px] border-[#cccccc] w-full h-[80px] flex items-center rounded-[16px] px-14">
            <h5 className="silka font-semibold">Secure reserve power</h5>
          </div>
          <div className="border-[1px] border-[#cccccc] w-full h-[80px] flex items-center rounded-[16px] px-14">
            <h5 className="silka font-semibold">Secure reserve power</h5>
          </div>
          <div className="border-[1px] border-[#cccccc] w-full h-[80px] flex items-center rounded-[16px] px-14">
            <h5 className="silka font-semibold">Secure reserve power</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offerings;
