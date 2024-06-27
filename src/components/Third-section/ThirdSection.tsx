import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ThirdSection = () => {
  return (
    <div className=' pb-10 pt-10 bg-[#70A5D4] text-center lg:px-20 px-5'>
      <div>
        <h3 className='lg:text-xl text-white mb-5'>Welcome To</h3>
        <h1 className='font-bold lg:text-5xl text-xl  text-white mb-9'>
            <span className='text-[#08AA38]'>GEMMA&apos;S</span> FOUNDATION
        </h1>

        <h3 className='lg:text-xl text-white mb-5'>
        Welcome to GEMMA’S FOUNDATION website which has been developed to help you easily access information about  protecting children and adults across Nigeria. 
        </h3>
        <h3 className='lg:text-xl text-white mb-5'>
            Our website provides information and guidance for all residents who are battling with any form of abuse or neglect,  and making sure that nothing stops you from growing up free from fear to reach your full potential.
        </h3>
      </div>

     
      <div className='flex flex-col sm:flex-row justify-between w-full'>
        <Link href={"/about-us"}>
          <div className=' justify-center flex flex-col h-60'>
              <Image className="mx-auto rounded-3xl" src="/Ellipse-2.png" width={150} height={150} alt=" "/>
              <p className='text-white mt-2'>About Us</p>
          </div>
         </Link>

         <Link href={"/safeguarding-children"}> 
          <div className=' justify-center flex flex-col  h-60'>
              <Image className="mx-auto rounded-3xl" src="/Ellipse-3.png" width={150} height={150} alt=" "/>
              <p className='text-white mt-2'>Children/Young people</p>
          </div>
         </Link>

         <Link href={"/safeguarding-adults"}>
            <div className=' justify-center flex flex-col h-60'>
                <Image className="mx-auto rounded-3xl" src="/Ellipse-4.png" width={150} height={150} alt=" "/>
                <p className='text-white mt-2'> Safeguarding Adults</p>
            </div>
          </Link>

          <Link href={"/report-concern"}>
          <div className=' justify-center flex flex-col h-60'>
            <Image className="mx-auto rounded-3xl" src="/Ellipse-5.png" width={150} height={150} alt=" "/>
            <p className='text-white mt-2'>Report a concern</p>
          </div>  
          </Link>

       
      </div>
      
    </div>
  )
}

export default ThirdSection