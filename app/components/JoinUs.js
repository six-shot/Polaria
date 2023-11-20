import React from "react";
import Image from "next/image";
import join from "@/public/foot.webp";
function JoinUs() {
  return (
    <div className="max-w-[144opx] mx-auto my-28 ">
      <div className="flex xl:justify-center items-center 2xl:px-0 xl:px-10 px-6">
        <div className="h-[70vh] relative xl:w-[80vw]  p-2 rounded-3xl flex justify-center items-center   bg-black text-white  ">
          <div className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden bg-black">
            <Image
              src={join}
              className="min-h-full min-w-full absolute top-[50%] rounded-3xl left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>

          <div className="  flex w-full h-full justify-center flex-col items-center ">
            <h1 className="silka font-bold xl:text-[48px] text-[40px] text-center leading-[46px] z-50">
              Join Our Journey
            </h1>
            <p className="text-white silka xl:w-[500px] text-sm  font-medium text-center xl:mt-10 mt-5 z-50">
              We are on a rapid growth journey and are looking for great people
              to join our global and multi-cultural team. Do you want to empower
              a smart and sustainable world
            </p>
            <button className=" text-[13px] py-3.5 px-10 silka font-medium text-black bg-[#fff] rounded-[50px] z-50">
      Join Us &#8594;
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
