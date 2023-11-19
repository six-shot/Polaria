import React from "react";

import Navbar from "./Navbar";

function Hero() {
  return (
    <div className=" sm:h-[90vh] h-[100vh] w-full bg-black text-white ">
      <div className="  flex w-full h-full justify-center flex-col items-center">
        <Navbar />
        <h1 className="silka font-bold xl:text-[56px] text-[40px] text-center leading-[46px]">Unlock Endless Energy</h1>
        <p className="text-white silka xl:w-[700px]  font-bold text-center mt-10">
          Energy storage is the missing link in the sustainable energy system.
          Our mission is to unlock endless energy.
        </p>
      </div>
    </div>
  );
}

export default Hero;
