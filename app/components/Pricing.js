import React from 'react'
import Image from 'next/image'
import phonering from "@/public/icons/ring.png"
import message from "@/public/icons/message.png"
import Testimonial from '@/components/ui/Testimonial'
const Pricing = () => {
  return (
    <section className="W-[100%]   flex justify-center py-10 z-10 mt-10 ">
    <div className="w-[70%] ">
        <div className='w-full flex flex-col'>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 max-sm:text-center'>
                <div className='w-[100%] sm:w-[50%]'>
                <h3 className='text-grey font-bold text-4xl'>Pricing Plans That Work <span className='text-red'>For You!</span></h3>

                </div>
                <div className='w-[100%] sm:w-[50%]'>
                <p className='text-grey2 text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                    , sed diam voluptua. At vero eos et accusam</p>
                </div>
             
            </div>

            <div className='w-full flex flex-col sm:flex-row mt-10 gap-4 '>
                <Testimonial color="grey" seccolor="red" headingcolor="white"/>
                <Testimonial color="red" seccolor="white" headingcolor="grey"/>
                <Testimonial color="grey" seccolor="red" headingcolor="white"/>

            </div>
        </div>
        </div>
        </section>
  )
}

export default Pricing