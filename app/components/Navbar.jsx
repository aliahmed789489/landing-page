import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="W-[100%]   flex justify-center py-4  ">
      <div className="w-[70%] ">
        <div className='flex flex-row justify-between'>
            <div>
                <h3 className='text-red font-bold text-lg sm:text-2xl'>Logo here</h3>
            </div>
            <div className='max-sm:hidden'>
                <ul className='flex flex-row gap-8 '>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Service</Link></li>
                    <li><Link href="/">Portfolio</Link></li>
                    <li><Link href="/">package</Link></li>
                    <li><Link href="/">Contact</Link></li>

                    
                </ul>
            </div>
            <div>
            <button className='border-radius text-white bg-red max-sm:text-sm'>Get Started</button>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar