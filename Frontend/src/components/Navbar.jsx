import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/HomeImages/Logos.png';
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import ResponsiveMenu from './ResponsiveMenu.jsx';
import {HiMenuAlt1, HiMenuAlt3} from "react-icons/hi";
import { BiSolidSun,  BiSolidMoon } from "react-icons/bi";


// Array for page links in hamburger effect
export const NavLinks = [
  {id:1, name:'Home', link: '/home'},
  {id:2, name: 'Shop',link: '/shop'},
  {id:3, name: 'About', link: '/about'},
  {id:4, name: 'Contact', link: '/contact'},  
]


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu)
    }

  return (
    <div data-aos='fade-down' className='fixed top-0 right-0 w-full z-[99] bg-white backdrop-blur-sm py-4 sm:py-4'>
        <div className="container">
            <div className="flex justify-between items-center">

                {/* logo */}
                <div className="flex items-center gap-4 text-black text-2xl font-bold">
                    <img src={Logo} alt="" className='w-10 ml-3 md:ml-10'/>
                    <span>Furniro</span>
                </div>

                {/* center navbar */}
                <div className='hidden text-black  md:block'>
                    <ul className='hidden sm:flex items-center gap-2 ml-16 md:gap-20 font-semibold text-md py-4 sm:py-0 '>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                        <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* right navbar */}
                <div>
                  <ul className='hidden sm:flex items-center mr-9 md:mr-24 gap-10 text-md py-4 sm:py-0 '>
                      <li>
                          <a href="#" className='flex items-center '><FaRegUser /> <span>!</span></a>
                      </li>
                      <li>
                          <a href="#"><IoSearch className='text-xl'/></a>
                      </li>
                      <li>
                          <a href="#"><FaRegHeart  className='font-bold'/></a>
                      </li>
                      <li>
                          <a href=""><AiOutlineShoppingCart className='text-xl' /></a>                            
                      </li>
                  </ul>

                 
                </div>
                  {/* Mobile view  */}
                <div className="flex items-center gap-4 sm:hidden ">
                    <div className='flex items-center'>
                    <a href="#"><FaRegHeart  className='font-bold'/></a>
                    <a href=""><AiOutlineShoppingCart className='text-xl' /></a> 
                    </div>

                 {/* Mobile Hamburger Menu */}
                 {
                        showMenu?(
                        <HiMenuAlt1 
                        onClick={toggleMenu} 
                        size={30}
                        className='cursor-pointer transition-all'
                        />
                    ):(
                        <HiMenuAlt3 
                        onClick={toggleMenu} 
                        size={30}
                        className='cursor-pointer transition-all'
                        />
                    )}
                </div>
            </div>
            
           

      </div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
    </div>
  )
}

export default Navbar