"use client";
import React from "react";
import { CldImage, CldVideoPlayer } from "next-cloudinary";
import Nav from "./Nav";

function Hero() {
  return (
    <div className="h-screen ">
      <div className="h-[90vh] relative w-full  bg-black text-white  ">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
          <video
            className="min-h-full min-w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover"
            autoPlay
            loop
            muted
          >
            <source src="bg.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="">
          <Nav />
        </div>
        <div className="  flex w-full h-full justify-center flex-col items-center ">
          <h1 className="silka font-bold xl:text-[56px] text-[40px] text-center leading-[46px] z-50">
            Unlock Endless Energy
          </h1>
          <p className="text-white silka xl:w-[700px]  font-bold text-center mt-10 z-50">
            Energy storage is the missing link in the sustainable energy system.
            Our mission is to unlock endless energy.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
