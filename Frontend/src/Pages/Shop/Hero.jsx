import React from 'react'
import HeroImage from "../../assets/ShopImages/Hero.png"
import ItemList from './ItemList'
import Group63 from '../../assets/ShopImages/Group 63.png'
import Group62 from '../../assets/ShopImages/Group 62.png'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Hero = () => {
  return (
    <>
      <Navbar />
        <div data-aos='fade-up' className='relative flex flex-col items-center justify-center'>
            <img  src={HeroImage} alt="" className="w-full h-auto object-cover"/>
            <h1 className='absolute text-black font-semibold text-4xl'>Shop</h1>
            <p className='absolute mt-24 font-bold'>Home <span className='font-normal'> {'>'} Shop</span> </p>
        </div>
        <div className='-mt-2'>
            <img src={Group63} alt="" className='w-full h-24'/>
        </div>
        <ItemList />
        <Footer />
    </>
  )
} 

export default Hero