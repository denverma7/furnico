import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react'


import Image from '../../assets/HomeImages/Inspiration/Image-1.png'
import Image2 from '../../assets/HomeImages/Inspiration/Image-2.png'

const NextArrow = (props) => {
  const { onClick } = props;
  return (
      <div className="absolute top-1/2 -translate-y-1/2 right-7 md:right-[220px] z-10 cursor-pointer" onClick={onClick}>
          <ChevronRight className="h-8 w-8 text-black" />
      </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
      <div className="absolute top-1/2 -translate-y-1/2  z-10 cursor-pointer" onClick={onClick}>
          <ChevronLeft className="h-8 w-8 text-black" />
      </div>
  );
};

const Inspirations = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          //top: "10px", 
          display: "flex",
          justifyContent: "left",
          width: "100%",
        }}
      >
        <ul style={{ margin: "2", padding: "0" }}> {dots} </ul>
      </div>
    ),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-11 w-screen gap-4 bg-[#fcf8f3] p-4'>
        {/* <div className='col-span-4 mt-56 ml-32'> */}
        {/* Left Section */}
        <div 
        className='lg:col-span-4 mt-10 lg:mt-56 lg:ml-32 text-center lg:text-left'>
          <h1 
          data-aos='fade-up' 
          data-aos-delay='700'  
          className='text-2xl lg:text-3xl font-sans font-bold tracking-wider'
          >
            50+ Beautiful rooms <br /> inspiration
          </h1>
          <p 
          data-aos='fade-up' 
          data-aos-delay='700' 
          className='text-xs mt:2 lg:mt-1'
          >
            Our designer already made a lot of beautiful <br /> prototype of rooms that inspire you
          </p>
          <button 
          data-aos='fade-up' 
          data-aos-delay='800' 
          className='bg-[#b88f2f] text-white px-4 py-2 text-xs mt-3'
          >
            Explore more
          </button>
        </div>

        {/* Center Image */}
        <div 
        className='lg:col-span-3 flex justify-center lg:justify-start'
        >
          <img 
          data-aos='fade-up' 
          data-aos-delay='500' 
          src={Image} 
          alt="Image-1" 
          // className='h-[582px] w-[404px] -ml-8 my-6'
          className="h-[400px] w-[300px] lg:h-[582px] lg:w-[404px] -ml-0 lg:-ml-8 my-6"
          />
        </div>

        {/* Right Section */}
        <div 
        data-aos='fade-up' 
        data-aos-delay='500' 
        className='lg:col-span-4'
        >
          <Slider  {...settings}  className='md:-ml-10' >
          <div className='relative flex justify-center md:justify-end items-center'>
            <img src={Image2} alt="" className=' top-14 left-0 h-[486px] w-[372px] object-cover  mt-6' />
          </div>
          <div className=' flex justify-end items-center'>
          <img src={Image2} alt="" className=' top-14 left-0 h-[486px] w-[372px] object-cover  mt-6' />
          </div>
          <div className=' flex justify-end items-center'>
          <img src={Image2} alt="" className=' top-14 left-0 h-[486px] w-[372px] object-cover  mt-6' />
          </div>
          </Slider>
        </div>
      </div>
      </>
  )
}

export default Inspirations