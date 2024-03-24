import React from 'react'
import brands from "@/public/icons/brands.png"
import Image from 'next/image'
const Clients = () => {
  return (
    <section className='W-[100%]  flex justify-center py-10 z-10'>
    <div className='w-[70%] '>
        <div className='flex flex-col sm:flex-row gap-10'>
            <div className='w-[100%] sm:w-[30%] border-r-2 pr-6'>
                <h3 className='text-red font-extrabold text-4xl'>Joined 100+</h3>
                <p className='font-bold text-2xl text-grey'>pleased clients</p>
            </div>
            <div className='w-[100%] sm:w-[70%]'>
                <Image src={brands}/>
            </div>
        </div>

    </div>
    </section>
  )
}

export default Clients