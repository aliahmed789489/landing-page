import Image from 'next/image'
import phonering from "@/public/icons/ring.png"
import message from "@/public/icons/message.png"

const Testimonial = (props) => {
  return (
    <div className={`bg-${props.color} w-[100%]  rounded-lg pb-10`}>
                    <div className={`bg-${props.seccolor} rounded-l-full mt-4 `} ><h3 className={`text-${props.headingcolor} font-bold text-xl py-4 px-10 text-center `}>STANDARD ABSTRACT LOGO</h3></div>
                    
                    <div className='px-6 mt-8'>
                    <h3 className='text-5xl text-red font-medium pl-4'>$30</h3>
                    <p className='text-white'>Per Month</p>
                    <ul className='text-white mt-10 flex flex-col gap-4'>
                        <li>5 Custom Logo Design Concepts</li>
                        <li>By 2 Designers</li>
                        <li>UNLIMITED Revisions</li>
                        <li>48 to 72 hours TAT</li>
                        <li>All Final Files Format</li>
                        <li>Satisfaction Guarantee</li>
                        <li>Unique Design Guarantee</li>
                        <li>Money Back Guarantee *</li>


                    </ul>
                    </div>

                    <div className='mt-12 flex flex-row p-4 gap-2'>
                        <div className='flex flex-row items-center gap-2'>
                            <div>
                                <Image src={phonering} />
                            </div>
                            <div className='flex flex-col text-white'>
                                <p className='text-[8px]'>EMAIL US AT</p>
                                <h6 className='text-[12px]'>ABC@ABC.COM</h6>
                            </div>
                        </div>

                        <div className='flex flex-row items-center gap-2'>
                            <div>
                                <Image src={message} />
                            </div>
                            <div className='flex flex-col text-white'>
                                <p className='text-[8px]'>EMAIL US AT</p>
                                <h6 className='text-[12px]'>ABC@ABC.COM</h6>
                            </div>
                        </div>

                    </div>
                    <button className='bg-white border-radius ml-4'>
                        Start project
                    </button>
                </div>
  )
}

export default Testimonial