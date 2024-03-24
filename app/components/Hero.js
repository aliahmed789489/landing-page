import Image from 'next/image'
import React from 'react'
import discount from "@/public/icons/discount.png"
import figma from "@/public/icons/figma.png"
import xd from "@/public/icons/xd.png"
import photoshop from "@/public/icons/photoshop.png"
import illustrator from "@/public/icons/illustrator.png"
import code from "@/public/icons/code.png"
import para from "@/public/icons/para.png"
import idea from "@/public/icons/idea.png"
import price from "@/public/icons/price.png"
import man from "@/public/images/man.png"
const Hero = () => {
  return (
    <section className='W-[100%] flex justify-center pattern z-10 h-full'>
        <div className='w-[70%]'>
            <div className='w-full flex flex-col sm:flex-row text-white py-12'>
                <div className='w-[100%] sm:w-[50%] max-sm:text-center'>
                    <div >
                    <Image src={discount} height={100}/>
                    <h1 className='text-2xl sm:text-5xl font-medium mt-4'>
                        Get Your Professional<br></br>
                        <span className='font-bold'>Logo & Website</span>
                    </h1>
                    <p className='pt-4'>Set up your brand for success with our battle-tested logo creation process.
                         Our designers leverage their extensive experience to craft durable brand identities.</p>
                         </div>
                    <div className='flex flex-row gap-4 mt-4'>
                        <button className='border-radius bg-white text-red'>Live Chat</button>
                        <button className='border-radius border-2 text-white'>Get a Quote</button>
                    </div>
                    <div className='border-2 border-red rounded-full flex justify-center items-center w-[100%] sm:w-[60%] mt-4'>
                        <h3 className='text-3xl font-bold px-6 py-2'>One time fees</h3>
                    </div>
                    <div className='flex justify-center items-center w-[100%] sm:w-[50%] mt-4'>
                        <h3 className='text-3xl font-medium'>Limited Edition</h3>
                    </div>
                    <div className='flex flex-row gap-2 mt-4 justify-center w-[100%] sm:w-[50%] '>
                        <Image src={figma} className='h-12 w-12 ' />
                        <Image src={xd} className='h-12 w-12'/>
                        <Image src={photoshop} className='h-12 w-12'/>
                        <Image src={illustrator} className='h-12 w-12'/>
                    </div>
                </div>

                <div className='w-[50%] h-[100%] max-sm:hidden'>
                    <div className='relative'>
                        <Image src={man}  className='h-[100%] z-30 relative'/>
                        <Image src={code} className='absolute top-56 left-20 h-12 w-12 z-40'/>
                        <Image src={para} className='absolute right-16 top-36 h-24 w-24'/>
                        <Image src={price} className='absolute top-2 left-10 w-40 z-20'/>
                        <Image src={idea} className='absolute right-28 top-16 h-16 w-12'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero