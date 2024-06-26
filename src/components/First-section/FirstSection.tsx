import React from 'react'
import Image from 'next/image'

const FirstSection = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-y-5 pb-12 pt-20 bg-[#70A5D4] lg:text-start text-center lg:px-20 px-5'>
      <div>
        <h1 className='font-bold lg:text-5xl text-xl text-white mb-9'>
        Safeguarding Vunerable Adults is our number 1 priority
        </h1>
      <h2 className='font-bold lg:text-2xl text-lg mb-9'>
        Working in partnership to enable adults in Nigeria to live a life free from fear, harm and abuse.
      </h2>

      <button className='lg:p-5 p-3 bg-[#08AA38] text-white rounded-lg '>About us</button>
      </div>

      <div className='lg:ms-auto w-full lg:p-9'>
        <div className='relative w-[100%] h-60'>
            <Image src="/text-image.jpg" alt="" fill objectFit='cover'/>
            <p>image goes in here</p>
        </div>
      </div>
    </div>
  )
}

export default FirstSection