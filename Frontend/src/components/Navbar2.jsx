import React from 'react'
import Logo from '../assets/HomeImages/Logos.png';
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
 

const Navbar2 = () => {
    return (
        <div data-aos='fade-down' className='fixed top-0 right-0 w-full z-[99] bg-white backdrop-blur-sm py-4 sm:py-4'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-black text-2xl font-bold">
                        <img src={Logo} alt="" className='w-10 ml-10'/>
                        <span>Furniro</span>
                    </div>
                    <div className='text-black hidden md:block'>
                        <ul className='flex items-center gap-20 font-semibold text-md py-4 sm:py-0 '>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/hero">Shop</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                    <ul className='flex items-center mr-24 gap-10 text-md py-4 sm:py-0 '>
                            <li>
                                <a href="#" className='flex items-center'><FaRegUser /> <span>!</span></a>
                            </li>
                            <li>
                                <a href="#"><IoSearch className='text-xl'/></a>
                            </li>
                            <li>
                                <a href="#"><FaRegHeart  className=' font-bold'/></a>
                            </li>
                            <li>
                                <a href="#"><AiOutlineShoppingCart className='text-xl' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Navbar2