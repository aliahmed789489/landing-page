import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import envlope from "@/public/icons/envlope.png"
import phone from "@/public/icons/phone.png"
import location from "@/public/icons/location.png"
const Footer = () => {
  return (
    <section className="W-[100%]   flex justify-center py-10 bg-footer relative z-20 bg-red">
        {/* <div className='bg-red w-[100%] h-[100%] z-30 opacity absolute'></div> */}
    <div className="w-[70%] ">
        <div className='text-white'>
            <div className='py-8'>
                <h3 className='font-bold text-4xl text-center'>Logo here</h3>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-4  gap-4 max-sm:text-center'>
                <div>
                    <h3 className='uppercase text-2xl font-bold '>About</h3>
                    <p className='mt-6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore 
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold uppercase'>Explore</h3>
                    <ul className='mt-4 flex flex-col gap-4'>
                        <li>Logo Design</li>
                        <li>Webiste Design</li>
                        <li>Social Media Marketing</li>
                        <li>Branding</li>
                        <li>SEO</li>

                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-bold uppercase'>company</h3>
                    <ul className='mt-4 flex flex-col gap-4 '>
                        <li><Link href="/">Contact Us</Link></li>
                        <li><Link href="/">Package</Link></li>
                        <li><Link href="/">Portfolio</Link></li>
                        <li><Link href="/">Testimonials</Link></li>
                        

                    </ul>
                </div>

                <div>
                    <h3 className='text-2xl font-bold uppercase'>Address</h3>
                    <ul className='mt-4 flex flex-col gap-4  max-sm:items-center'>
                        <li><Link href="mailto:support@gmail.com">
                            <div className='flex flex-row gap-2 items-center'> 
                                <Image src={envlope} height={15}/>
                                <p>support@gmail.com</p>
                            </div>
                            </Link></li>
                            <li><Link href="tel:+123 456 789">
                            <div className='flex flex-row gap-2 items-center'> 
                                <Image src={phone} height={15}/>
                                <p>+123 456 789</p>
                            </div>
                            </Link></li>
                            <li><Link href="/">
                            <div className='flex flex-row gap-2 items-center'> 
                                <Image src={location} height={15}/>
                                <p>Abc Street Lane 1</p>
                            </div>
                            </Link></li>
                       
                        

                    </ul>
                </div>
            
              

            </div>
            <div className='mt-8 text-center'>
                <p>Copy Right Reserve @companynamehere 2023</p>
            </div>
        </div>   
    </div>
    </section>
  )
}

export default Footer