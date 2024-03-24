import React from 'react'
import Image from "next/image";
import ServiceImg from "@/public/images/service.png"
const ServiceDes = () => {
  return (
    <div className="flex flex-col ">
                  <div className="mt-10">
                    <h3 className="text-2xl text-white font-bold">Website Development</h3>
                    <p className="text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                       invidunt ut labore et dolore magna aliquyam erat,
                       sed diam voluptua. At vero eos et accusam</p>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <Image src={ServiceImg} />
                    <Image src={ServiceImg}/>
                    <Image src={ServiceImg}/>

                  </div>
                  <div className=' flex flex-row gap-2 mt-4'>
                        <button className='w-full h-12 border-radius bg-white text-red text-sm'>Live Chat</button>
                        <button className='w-full h-12 border-radius border-2 text-white text-sm'>Get Quote</button>
                    </div>
                </div>
  )
}

export default ServiceDes