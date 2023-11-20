"use client"
import React, { useEffect, useState } from 'react';
import one from "@/public/one.webp"
import two from "@/public/two.webp"
import Image from 'next/image';

function ImageSlider() {
  
  const imgs=[
    {id:0,value:one},
    {id:1,value:two},
    {id:2,value:one},
  ]
  const [wordData,setWordData]=useState(imgs[0])
  const [val,setVal] = useState(0)
  const handleClick=(index)=>{
    console.log(index)
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handleNext = ()=>{
    let index = val < imgs.length -1 ? val +1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  const handlePrevious = ()=>{
    let index = val <= imgs.length -1 && val > 0? val - 1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="mainn">
      <button className='btns' onClick={handlePrevious}>P</button>
      <Image src={wordData.value}  /> 
      <button className='btns' onClick={handleNext}>N</button>
      <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <Image className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} h />
        </div>
        )}
      </div>
    </div>
  );
}

export default ImageSlider;