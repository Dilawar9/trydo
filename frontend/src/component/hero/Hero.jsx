import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect (()=>{  
    AOS.init();
  })

  return (
    <div className='text-center py-10 min-h-[500px]'>
      <h1 className='text-[80px] sm:text-[120px] font-bold bg-gradient bg-text-gradient' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">CREATIVE</h1>
      <p className='text-white text-3xl'>There are many variations of passages of Lorem Ipsum available but the <br />majority have suffered alteration.</p>
      <a className='text-white mt-[50px] py-5  px-9 inline-block rounded border hover:bg-red-100 boxHoverGradient hover:border-none '>CONSTACT US</a>
    </div>
  )
}

export default Hero;