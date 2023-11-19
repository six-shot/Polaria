import React from 'react'
import Image from 'next/image'
import save from "@/public/save.webp"
function Solutions() {
  return (
    <div>
       <h3 className="sm:text-[40px] text-[30px] sm:leading-[45px] leading-[40px] text-center mb-20 font-bold silka mt-40">
       Solutions for Today and Tomorrow
      </h3>
      <Image src={save}/>
    </div>
  )
}

export default Solutions
