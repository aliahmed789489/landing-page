import React from 'react'
import Hero from './components/Hero'
import Clients from './components/Clients'
import About from './components/About'
import Experience from './components/Experience'
import Service from './components/Service'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <Clients/>
      <About/>
      <Experience/>
      <Service/>
      <Process/>
      <Testimonials/>
      <Pricing/>
      <CTA/>
      <Contact/>
      <Footer/>
    </section>
  )
}

export default page