import { useState } from 'react'
import './App.css'
import Navebar from './component/navebar/Navebar'
import Hero from './component/hero/Hero'
import FeatureCard from './component/featurecard/FeatureCard'
import Footer from './component/footer/Footer'
import Portfolio from './component/portfolio/Portfolio'
import Facts from './component/facts/Facts'
import Clients from './component/clients/Clients'
import News from './component/news/News'
import OurTeam from './component/ourteam/OurTeam'
import Testimonials from './component/testimonials/Testimonials'
import ScrollToTop from "react-scroll-to-top";

function App() {


  return (
    <>
      <section id='home' className='bg-black'>
        <div className='container mx-auto max-w-[1340px]'>
          <Navebar />
          <Hero/>
        </div>
      </section>

      <section id='features' className='py-10 dark:bg-gray-800 dark:text-white'>
        <div className='container mx-auto max-w-[1340px]'>
          <FeatureCard />
        </div>
      </section>
      <section id='portfolio' className='py-10 dark:bg-gray-800 dark:text-white bg-gray-100'>
        <div className='container mx-auto max-w-[1340px]'>
          {/* <Portfolio /> */}
        </div>
      </section>

      <section id='facts' className='py-10 dark:bg-gray-600 dark:text-white'>
        <div className='container mx-auto max-w-[1340px]'>
          <Facts />
        </div>
      </section>

      <section id='team' className='py-10 bg-gray-100 dark:bg-gray-800 dark:text-white'>
        <div className='container mx-auto max-w-[1340px]'>
          <OurTeam />
        </div>
      </section>

      <section id='testimonials' className='py-10 dark:bg-gray-800 dark:text-white'>
        <div className='container max-w-[1340px]  '>
          <Testimonials/>
        </div>
      </section>

      <section id='news' className='py-10  bg-gray-100 dark:bg-gray-800 dark:text-white'>
        <div className='container mx-auto max-w-[1340px]'>
          {/* <News /> */}
        </div>
      </section>

      <section id='clients' className='py-10 dark:bg-[#191919]'>
        <div className='container mx-auto client'>
          <Clients />
        </div>
      </section>

      <section id='footer' className='bg-black'>
        <div className='container mx-auto max-w-[1340px]'>
       <Footer/>
         <ScrollToTop smooth />
        </div>
      </section>
    </>
  )
}

export default App
