import React from 'react'
import pol from "@/public/pol.webp"
import Image from 'next/image'

function Numbers() {
  return (
    <div>
      <div className='flex justify-center items-center px-6 '>
       <div className='w-[100%] sm:h-full h-[40vh] rounded-3xl'>
       <Image className='rounded-3xl w-full h-full sm:object-none object-cover' src={pol}/>
       </div>
      </div>
    </div>
  )
}

export default Numbers
