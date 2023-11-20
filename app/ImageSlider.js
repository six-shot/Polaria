"use client";
import React, { useEffect, useState } from "react";
import one from "@/public/one.webp";
import two from "@/public/two.webp";
import Image from "next/image";

function ImageSlider() {
  const imgs = [
    { id: 0, value: one },
    { id: 1, value: two },
    { id: 2, value: one },
    { id: 3, value: one },
  ];
  const [wordData, setWordData] = useState(imgs[0]);
  //   const [val, setVal] = useState(0);
  const handleHover = (index) => {
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  //   const handleNext = ()=>{
  //     let index = val < imgs.length -1 ? val +1 : val;
  //     setVal(index)
  //     const wordSlider=imgs[index];
  //     setWordData(wordSlider)
  //   }
  //   const handlePrevious = ()=>{
  //     let index = val <= imgs.length -1 && val > 0? val - 1 : val;
  //     setVal(index)
  //     const wordSlider=imgs[index];
  //     setWordData(wordSlider)
  //   }
  return (
    <div className="w-full ">
      {/* <button className='btns' onClick={handlePrevious}>P</button> */}
      <div className="w-full h-[418px] relative">
        <Image src={wordData.value} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-[35%]  transition-opacity duration-300 rounded-[8px]"></div>
      </div>

      {/* <button className='btns' onClick={handleNext}>N</button> */}
      <div className="flex justify-between xl:flex-row flex-col">
        {imgs.map((data, i) => (
          <div className="xl:w-[200px] w-full h-[100px] relative mt-5" key={i}>
            <div className="absolute h-full  inset-0 bg-black opacity-[35%]  transition-opacity duration-300 rounded-[8px]"></div>

            <Image
              className={
                wordData.id === i
                  ? "cursor-pointer w-[200px] h-[100px]"
                  : "opacity-75 hover:opacity-100  "
              }
              src={data.value}
              onMouseEnter={() => handleHover(i)}
              
             
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
