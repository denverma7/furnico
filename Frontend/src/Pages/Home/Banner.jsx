import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../../assets/HomeImages/home-banner-background 1.png'
import Range from './Range'
import Products from './Products'
import Inspirations from './Inspirations'
import Share from './Share'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


const Banner = () => {
  return (
    <>
      <Navbar />
      <div className='relative flex flex-col justify-center '>
          <img 
          data-aos='fade-up' 
          data-aos-delay='200' 
          src={Background} 
          alt="Background Image" 
          // className='h-[400px]  md:w-full md:h-full object-cover' 
          className="w-[100%] h-[500px] sm:h-[300px] md:h-[400px] lg:h-full object-cover"
          />
          <form 
          data-aos='fade-up' 
          data-aos-delay='300' 
          // className='absolute top-[200px] left-[800px]  bg-[#fff3e3] w-[643px] h-[443px] border-2'
          className='absolute top-[15%] left-[5%] bg-[#fff3e3]/60 sm:bg-[#fff3e3]  w-[70%] h-[80%] sm:w-[643px] md:h-[443px] md:top-[200px] lg:left-[800px] border-2 p-4'
          >
              <p 
              data-aos='fade-up' 
              className='mt-10 ml-8 font-semibold tracking-wider'
              >
                New Arrival
              </p>
              <h1 
              data-aos='fade-up' 
              data-aos-delay='300' 
              // className='ml-8 mt-2 text-[#b88e2f] font-bold text-5xl tracking-wider'
              className='mt-2 text-[#b88e2f] font-bold text-3xl sm:text-5xl tracking-wider'
              >
                Discover Our <br />New Collection
              </h1>
              <p 
              data-aos='fade-up' 
              data-aos-delay='300' 
              // className='ml-8 mt-6'
              className='mt-4 sm:mt-6 text-sm sm:text-base'
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga esse consectetur repudiandae earum libero maxime molestias error veritatis ipsam similique!
              </p>
              <button 
              data-aos='fade-up' 
              data-aos-delay='500' 
              // className='ml-8 mt-16 bg-[#b88e2f] border-0 text-white px-12 py-5 text-xs font-bold' 
              className='mt-5 sm:mt-16 bg-[#b88e2f] border-0 text-white px-6 sm:px-12 py-3 sm:py-5 text-xs sm:text-sm font-bold'
              >
                BUY NOW
              </button>
          </form>
      </div>
      <Range />
      <Products />
      <Inspirations />
      <Share />
      <Footer />
    </>
  )
}

export default Banner