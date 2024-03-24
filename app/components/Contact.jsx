import React from 'react'

const Contact = () => {
  return (
    <section className="W-[100%]   flex justify-center py-10 ">
    <div className="w-[70%] ">

      <div className='flex flex-col sm:flex-row gap-8'>

      <div className='w-[100%] sm:w-[50%] text-center sm:text-left'>
        <h6 className='uppercase font-bold text-grey text-2xl '>contact</h6>
        <h3 className='text-4xl font-bold text-red mt-4 '>Stay In Touch<span className='text-grey'> With Us</span></h3>
        <p className='mt-4 text-grey2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
           sed diam voluptua. At vero eos et accusam</p>
          </div>
      <div className='w-[100%] sm:w-[50%] grid grid-cols-2 gap-4'>
            <input placeholder='Name' className='bg-[#E7E5E5] h-12 sm:h-16 rounded-lg pl-4 placeholder:text-grey '/>
            <input placeholder='Email' className='bg-[#E7E5E5] h-12 sm:h-16 rounded-lg pl-4 placeholder:text-grey '/>
            <input placeholder='Phone' className='bg-[#E7E5E5] h-12 sm:h-16 rounded-lg pl-4 placeholder:text-grey '/>
            <textarea placeholder='Message' className='bg-[#E7E5E5] h-12 sm:h-16 rounded-lg pl-4 pt-4 placeholder:text-grey '></textarea>
            <button className='col-span-2 bg-red h-12 sm:h-16 rounded-lg text-white btn-red__hover'>Submit</button>
          </div>
      </div>
    </div>
    </section>
  )
}

export default Contact