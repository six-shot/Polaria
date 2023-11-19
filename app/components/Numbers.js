import React from 'react'
import pol from "@/public/pol.webp"
import Image from 'next/image'

function Numbers() {
  return (
    <div>
      <div className='flex justify-center items-center px-6 '>
        <Image className='rounded-3xl' src={pol}/>
      </div>
    </div>
  )
}

export default Numbers
