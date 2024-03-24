import React from 'react'
import Image from 'next/image'
import mobile from "@/public/images/mobile.png"
import rocket from "@/public/icons/rocket.png"
const Process = () => {
  return (
    <section className="W-[100%]   flex justify-center py-10 z-10 ">
    <div className="w-[70%] ">
      <div>
        <div className='text-center'>
        <h3 className='text-4xl font-bold text-red mt-4 '>Our <span className='text-grey'>Creative </span>Process</h3>
        <p className='mt-4 text-grey2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
           sed diam voluptua. At vero eos et accusam</p>
          </div>

        <div className='flex flex-col sm:flex-row mt-8'>
            <div className='w-[100%] sm:w-1/3'>

                <div className='mt-20'>
                    <div className='flex flex-row justify-between items-end'>
                        <Image src={rocket} className='h-10 w-10' />
                        <div className='flex flex-row items-center'>
                            <div className='bg-red h-20 w-16 flex justify-center items-center border-radius__image'><h3 className='text-white text-3xl font-bold'>01</h3></div>
                            <div className='w-20  h-[2px] bg-red max-sm:hidden'></div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-grey text-xl font-bold'>Work Brief</h3>
                        <p className='text-grey2 text-sm'>We iniatitate with your work requirement and a detailed description of wants and needs.</p>
                    </div>
                </div>

                <div className='mt-20'>
                    <div className='flex flex-row justify-between items-end'>
                        <Image src={rocket} className='h-10 w-10' />
                        <div className='flex flex-row items-center'>
                            <div className='bg-red h-20 w-16 flex justify-center items-center border-radius__image '><h3 className='text-white text-3xl font-bold'>03</h3></div>
                            <div className='w-20  h-[2px] bg-red max-sm:hidden'></div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-grey text-xl font-bold'>Revision</h3>
                        <p className='text-grey2 text-sm'>We iniatitate with your work requirement and a detailed description of wants and needs.</p>
                    </div>
                </div>

            </div>
            <div className='w-[100%] sm:w-1/3 max-sm:mt-4'>
                <Image src={mobile}/>
            </div>
            <div className='w-[100%] sm:w-1/3'>
            <div className='mt-20'>
                    <div className='flex flex-row justify-between items-end'>
                        
                        <div className='flex flex-row items-center'>
                            <div className='w-20  h-[2px] bg-red max-sm:hidden'></div>
                            <div className='bg-red h-20 w-16 flex justify-center items-center border-radius__left'><h3 className='text-white text-3xl font-bold'>02</h3></div>
                        </div>
                        <Image src={rocket} className='h-10 w-10 ' />
                    </div>
                    <div className='mt-4 text-right'>
                        <h3 className='text-grey text-xl font-bold'>Work Execution</h3>
                        <p className='text-grey2 text-sm'>We iniatitate with your work requirement and a detailed description of wants and needs.</p>
                    </div>
            </div>

            <div className='mt-20'>
                    <div className='flex flex-row justify-between items-end'>
                        
                        <div className='flex flex-row items-center'>
                            <div className='w-20  h-[2px] bg-red max-sm:hidden'></div>
                            <div className='bg-red h-20 w-16 flex justify-center items-center border-radius__left'><h3 className='text-white text-3xl font-bold'>04</h3></div>
                        </div>
                        <Image src={rocket} className='h-10 w-10' />
                    </div>
                    <div className='mt-4 text-right'>
                        <h3 className='text-grey text-xl font-bold'>Final Submission</h3>
                        <p className='text-grey2 text-sm'>We iniatitate with your work requirement and a detailed description of wants and needs.</p>
                    </div>
            </div>

            </div>

        </div>

      </div>
      </div>
      </section>
  )
}

export default Process