import React from 'react'
import Image from 'next/image'

const ThirdSection = () => {
  return (
    <div className=' pb-10 pt-10 bg-[#70A5D4] text-center lg:px-20 px-5'>
      <div>
        <h3 className='lg:text-xl text-white mb-5'>Welcome To</h3>
        <h1 className='font-bold lg:text-5xl text-xl  text-white mb-9'>
            <span className='text-[#08AA38]'>GEMMA'S</span> FOUNDATION
        </h1>

        <h3 className='lg:text-xl text-white mb-5'>
        Welcome to GEMMA’S FOUNDATION website which has been developed to help you easily access information about  protecting children and adults across Nigeria. 
        </h3>
        <h3 className='lg:text-xl text-white mb-5'>
            Our website provides information and guidance for all residents who are battling with any form of abuse or neglect,  and making sure that nothing stops you from growing up free from fear to reach your full potential.
        </h3>
      </div>

     
      <div className='lg:flex  gap-8'>
        <div className='relative w-[100%] h-60'>
            <Image src="/text-image.jpg" width={400} height={300} alt=" "/>
            <p className='text-white'>About Us</p>
        </div>
        <div className='relative w-[100%] h-60'>
            <Image src="/text-image.jpg" width={400} height={300} alt=" "/>
            <p className='text-white'>Children/Young people</p>
        </div>
        <div className='relative w-[100%] h-60'>
            <Image src="/text-image.jpg" width={400} height={300} alt=" "/>
            <p className='text-white'> Safeguarding Adults</p>
        </div>
        <div className='relative w-[100%] h-60'>
            <Image src="/text-image.jpg" width={400} height={300} alt=" "/>
            <p className='text-white'>Report a concern</p>
        </div>
      </div>
      
    </div>
  )
}

export default ThirdSection