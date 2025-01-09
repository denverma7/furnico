import React from 'react';
import Navbar from '../../components/Navbar';
import HeroImage from "../../assets/ShopImages/Hero.png";
import Logo from '../../assets/HomeImages/Logos.png';
import Feature from '../../assets/ShopImages/Feature.png';
import BlogImage1 from '../../assets/BlogImages/BlogImage1.png';
import BlogImage2 from '../../assets/BlogImages/BlogImage2.png';
import BlogImage3 from '../../assets/BlogImages/BlogImage3.png';
import Thumb1 from '../../assets/BlogImages/Thumb1.png';
import Thumb2 from '../../assets/BlogImages/Thumb2.png';
import Thumb3 from '../../assets/BlogImages/Thumb3.png';
import Thumb4 from '../../assets/BlogImages/Thumb4.png';
import Thumb5 from '../../assets/BlogImages/Thumb5.png';
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";

import Footer from '../../components/Footer';

const Blog = () => {
  return (
    <>
        <Navbar />
        <div data-aos='fade-up' className='relative flex flex-col items-center justify-center'>
            <img  src={HeroImage} alt="" className="w-full h-auto object-cover mt-48 sm:mt-0"/>
            <img src={Logo} alt="" className='absolute -mt-20 text-black font-medium text-4xl'/>
            <h1 className='absolute text-black font-semibold text-4xl'>Blog</h1>
            <p className='absolute mt-24 font-semibold'>Home <span className='font-normal'> {'>'} Blog</span> </p>
        </div>
        <div className='grid grid-cols-5'>
            <div className='col-span-3 ml-24 mt-12 w-[820px] h-[2490px] '>
                <div className='flex'>
                    <div data-aos='fade-up' data-aos-delay='300'>
                        <img src={BlogImage1} alt="" className='items-start justify-center' />
                        <div className='flex items-center space-x-4 mt-4'>
                            <p className="flex items-center space-x-2 text-gray-500"><FaUser className="text-gray-400" /> <span>admin</span></p>
                            <p className="flex items-center space-x-2 text-gray-500"><FaCalendar className="text-gray-400" /> <span>14 Oct 2022</span></p>
                            <p className="flex items-center space-x-2 text-gray-500"><FaTag className="text-gray-400" /> <span>Wood</span></p>
                        </div>
                        <p className='text-2xl font-medium mt-4'>Going all-in with millennial design</p>
                        <div>
                            <p className='text-gray-400 mt-4 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, fuga cumque eum possimus illum ex odio totam sint exercitationem corrupti quisquam tempora et excepturi sit eligendi consectetur cum ratione, modi eaque odit, natus aperiam laudantium. Quam dignissimos illum amet perferendis fuga nostrum ipsam nihil, impedit laudantium nulla! Temporibus, asperiores omnis?</p>
                        </div>
                        <button className='mt-6 text-sm underline underline-offset-[12px] mb-12 '>Read more</button>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='300'>
                    <img src={BlogImage2} alt="" className='items-start justify-center' /> 
                    <div className='flex items-center space-x-4 mt-4'>
                        <p className="flex items-center space-x-2 text-gray-500"><FaUser className="text-gray-400" /> <span>admin</span></p>
                        <p className="flex items-center space-x-2 text-gray-500"><FaCalendar className="text-gray-400" /> <span>14 Oct 2022</span></p>
                        <p className="flex items-center space-x-2 text-gray-500"><FaTag className="text-gray-400" /> <span>Handmade</span></p>
                    </div>
                        <p className='text-2xl font-medium mt-4'>Exploring new ways of decorating</p>
                        <div>
                            <p className='text-gray-400 mt-4 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, fuga cumque eum possimus illum ex odio totam sint exercitationem corrupti quisquam tempora et excepturi sit eligendi consectetur cum ratione, modi eaque odit, natus aperiam laudantium. Quam dignissimos illum amet perferendis fuga nostrum ipsam nihil, impedit laudantium nulla! Temporibus, asperiores omnis?</p>
                        </div>
                        <button className='mt-6 text-sm underline underline-offset-[12px] mb-12 '>Read more</button>
                </div>
                <div data-aos='fade-up' data-aos-delay='300'>
                    <img src={BlogImage3} alt="" className='items-start justify-center' /> 
                    <div className='flex items-center space-x-4 mt-4'>
                        <p className="flex items-center space-x-2 text-gray-500"><FaUser className="text-gray-400" /> <span>admin</span></p>
                        <p className="flex items-center space-x-2 text-gray-500"><FaCalendar className="text-gray-400" /> <span>14 Oct 2022</span></p>
                        <p className="flex items-center space-x-2 text-gray-500"><FaTag className="text-gray-400" /> <span>Wood</span></p>
                    </div>
                        <p className='text-2xl font-medium mt-4'>Handmade pieces that took time to make</p>
                        <div>
                            <p className='text-gray-400 mt-4 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, fuga cumque eum possimus illum ex odio totam sint exercitationem corrupti quisquam tempora et excepturi sit eligendi consectetur cum ratione, modi eaque odit, natus aperiam laudantium. Quam dignissimos illum amet perferendis fuga nostrum ipsam nihil, impedit laudantium nulla! Temporibus, asperiores omnis?</p>
                        </div>
                        <button className='mt-6 text-sm underline underline-offset-[12px] mb-12 '>Read more</button>
                </div>
                <div data-aos='fade-up' data-aos-delay='300' className='flex items-center justify-end gap-4 mt-10 mb-10'>
      <button className='bg-[#b88e2f] text-xs font-semibold px-4 py-4 hover:bg-[#b88e2f] rounded-lg'>1</button>
      <button className='bg-[#F9F1E7] text-xs font-semibold px-4 py-4 hover:bg-[#b88e2f] rounded-lg'>2</button>
      <button className='bg-[#F9F1E7] text-xs font-semibold px-4 py-4 hover:bg-[#b88e2f] rounded-lg'>3</button>
      <button className='bg-[#F9F1E7] text-xs font-semibold px-4 py-4 hover:bg-[#b88e2f] rounded-lg'>Next</button>
    </div>
            </div>
            <div className='flex flex-col space-y-6'>
                <div className='mt-12 ml-12 w-[393px] h-[537px]   '>
                    <div className='relative' data-aos='fade-up'>
                        <input
                        type="text"
                        placeholder="Search"
                        className=" w-[300px] mt-6 ml-12 mr-12 h-[50px] border border-gray-300 rounded-md pl-4 pr-12 text-sm "
                        />
                        <span className="absolute top-1/2 right-14  mt-2 transform -translate-y-1/2">
                        <IoSearch />
                        </span>
                    </div>
                    <p className='mt-12 flex justify-start ml-20 text-xl' data-aos='fade-up'>Categories</p>
                    <div className='flex justify-between mt-10 w-full text-gray-400' data-aos='fade-up'>
                        <p className='ml-20'>Crafts</p> <span className='mr-16'>2</span>
                    </div>
                    <div className='flex justify-between mt-8 w-full text-gray-400' data-aos='fade-up'>
                        <p className='ml-20'>Design</p> <span className='mr-16'>8</span>
                    </div>
                    <div className='flex justify-between mt-8 w-full text-gray-400' data-aos='fade-up'>
                        <p className='ml-20'>Handmade</p> <span className='mr-16'>7</span>
                    </div>
                    <div className='flex justify-between mt-8 w-full text-gray-400' data-aos='fade-up'>
                        <p className='ml-20'>Interior</p> <span className='mr-16'>1</span>
                    </div>
                    <div className='flex justify-between mt-8 w-full text-gray-400' data-aos='fade-up'>
                        <p className='ml-20'>Wood</p> <span className='mr-16'>6</span>
                    </div>
                </div>
                <div className='mt-12 ml-12 w-[393px] h-[650px] ' >
                    <p className='flex justify-start ml-20 mt-6' data-aos='fade-up'>Recent Posts</p>
                    <div className='flex' data-aos='fade-up'>
                        <img src={Thumb1} alt="" className='mt-6 ml-20'/>
                        <div>
                            <p className='flex items-center mt-10 ml-2 text-xs'>Going all in with <br />millennial design </p>
                            <p className='ml-2 text-xs mt-2 text-gray-400'>03 Aug 2022</p>
                        </div>
                        
                    </div>
                    <div className='flex' data-aos='fade-up'>
                        <img src={Thumb2} alt="" className='mt-6 ml-20' />
                        <div>
                            <p className='flex items-center mt-10 ml-2 text-xs'>Exploring new ways  <br />of decorating </p>
                            <p className='ml-2 text-xs mt-2 text-gray-400'>03 Aug 2022</p>
                        </div>
                    </div>
                    <div className='flex' data-aos='fade-up'>
                        <img src={Thumb3} alt="" className='mt-6 ml-20' />
                        <div>
                            <p className='flex items-center mt-10 ml-2 text-xs'>Handmade pieces <br />that took time to make </p>
                            <p className='ml-2 text-xs mt-2 text-gray-400'>03 Aug 2022</p>
                        </div>
                    </div>
                    <div className='flex' data-aos='fade-up'>
                        <img src={Thumb4} alt="" className='mt-6 ml-20' />
                        <div>
                            <p className='flex items-center mt-10 ml-2 text-xs'>Modern home in  <br />Milan </p>
                            <p className='ml-2 text-xs mt-2 text-gray-400'>03 Aug 2022</p>
                        </div>
                    </div>
                    <div className='flex' data-aos='fade-up'>
                        <img src={Thumb5} alt="" className='mt-6 ml-20' />
                        <div>
                            <p className='flex items-center mt-10 ml-2 text-xs'>Colorful office  <br />redesign </p>
                            <p className='ml-2 text-xs mt-2 text-gray-400'>03 Aug 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='w-screen h-48  right-24 bg-[#F9F1E7] flex items-center justify-center' data-aos='fade-up' data-aos-delay='300'>
            <img  src={Feature} alt="" className='flex items-center justify-center h-16 ' />
        </div>

        <Footer />
    </>
  )
}

export default Blog
