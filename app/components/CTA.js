import React from 'react'
import Image from 'next/image'
import envlope from "@/public/icons/envlope.png"
import phone from "@/public/icons/phone.png"
import chat from "@/public/icons/chat2.png"
import Link from 'next/link'
const CTA = () => {
  return (
    <section className='w-[100%]'>
        <div className='flex flex-col sm:flex-row w-full'>
            <div className='bg-red sm:w-1/3 flex justify-center items-center'>
                <div className='flex flex-row items-center gap-2 py-8'>
                    <div>
                        <Image src={envlope}/>
                    </div>
                    <div className='flex flex-col text-white '>
                        <h3 className='text-2xl font-bold'>Email</h3>
                        <p>support@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className='bg-grey sm:w-1/3 flex justify-center items-center'>
                <div className='flex flex-row items-center gap-2 py-8'>
                    <div>
                        <Image src={chat}/>
                    </div>
                    <div className='flex flex-col text-white '>
                        <h3 className='text-2xl font-bold'>Chat</h3>
                        <p>Chat With The Specialist Now.</p>
                    </div>
                </div>
            </div>

            <div className='bg-red sm:w-1/3 flex justify-center items-center'>
                <div className='flex flex-row items-center gap-2 py-8'>
                    <div>
                        <Image src={phone}/>
                    </div>
                    <div className='flex flex-col text-white '>
                        <h3 className='text-2xl font-bold'>Call</h3>
                        <Link href="tel:+123 456 789">+123 456 789</Link>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default CTA