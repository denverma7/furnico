import React from 'react';
import Image_1 from '../../assets/ShopImages/Products/image_1.png'
import Image_2 from '../../assets/ShopImages/Products/image_2.png'
import Image_3 from '../../assets/ShopImages/Products/image_3.png'
import Image_4 from '../../assets/ShopImages/Products/image_4.png'
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import Frame from '../../assets/ShopImages/Frame 161.png'
import Feature from '../../assets/ShopImages/Feature.png'

const ItemList = () => {
  return (
    <>
      <ul data-aos='fade-up' data-aos-delay='300' className="flex flex-row items-center justify-center gap-6 mt-8">
      {[
        { title: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", image: Image_1 },
        { title: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000", image: Image_2 },
        { title: "Lolito", desc: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", image: Image_3 },
        { title: "Respira", desc: "Outdoor bar table and stool", price: "Rp 500.00", image: Image_4 },
      ].map((item, index) => (
        <li key={index} className="relative group flex flex-col items-center bg-[#f4f5f7] pb-8 w-64 overflow-hidden">
          {/* Conditional Badge */}
          {item.title === "Syltherine" && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              -30%
            </div>
          )}
          {item.title === "Lolito"  && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              -50%
            </div>
          )}
          {item.title === "Respira" && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              New
            </div>
          )}
          <img src={item.image} alt="" className="h-[301px] w-[285px] object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <button className="absolute bottom-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#b88e2f] font-semibold text-sm px-4 py-2 ">
            Add to Cart
          </button>
          <div className="absolute bottom-52 flex justify-between w-full px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            <span className='flex items-center text-sm gap-2'><IoShareSocial /> Share</span>
            <span className='flex items-center text-sm gap-2'><MdCompareArrows /> Compare</span>
            <span className='flex items-center text-sm gap-2'><FaRegHeart />Like</span>
          </div>
          <h3 className="text-lg font-bold mt-4 text-left ml-4 w-full">{item.title}</h3>
          <p className="text-gray-600 mt-2 text-left ml-4 w-full">{item.desc}</p>
          <p className="text-md font-semibold mt-4 text-left ml-4 w-full">
            {item.price} {item.oldPrice && <span className="text-gray-400 text-sm line-through ml-10">{item.oldPrice}</span>}
          </p>
        </li>
      ))}
    </ul>
    <ul data-aos='fade-up' data-aos-delay='300' className="flex flex-row items-center justify-center gap-6 mt-8">
      {[
        { title: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", image: Image_1 },
        { title: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000", image: Image_2 },
        { title: "Lolito", desc: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", image: Image_3 },
        { title: "Respira", desc: "Outdoor bar table and stool", price: "Rp 500.00", image: Image_4 },
      ].map((item, index) => (
        <li key={index} className="relative group flex flex-col items-center bg-[#f4f5f7] pb-8 w-64 overflow-hidden">
          {/* Conditional Badge */}
          {item.title === "Syltherine" && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              -30%
            </div>
          )}
          {item.title === "Lolito"  && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              -50%
            </div>
          )}
          {item.title === "Respira" && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              New
            </div>
          )}
          <img src={item.image} alt="" className="h-[301px] w-[285px] object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <button className="absolute bottom-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#b88e2f] font-semibold text-sm px-4 py-2 ">
            Add to Cart
          </button>
          <div className="absolute bottom-52 flex justify-between w-full px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            <span className='flex items-center text-sm gap-2'><IoShareSocial /> Share</span>
            <span className='flex items-center text-sm gap-2'><MdCompareArrows /> Compare</span>
            <span className='flex items-center text-sm gap-2'><FaRegHeart />Like</span>
          </div>
          <h3 className="text-lg font-bold mt-4 text-left ml-4 w-full">{item.title}</h3>
          <p className="text-gray-600 mt-2 text-left ml-4 w-full">{item.desc}</p>
          <p className="text-md font-semibold mt-4 text-left ml-4 w-full">
            {item.price} {item.oldPrice && <span className="text-gray-400 text-sm line-through ml-10">{item.oldPrice}</span>}
          </p>
        </li>
      ))}
    </ul>
    <ul data-aos='fade-up' data-aos-delay='300' className="flex flex-row items-center justify-center gap-6 mt-8">
      {[
        { title: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", image: Image_1 },
        { title: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000", image: Image_2 },
        { title: "Lolito", desc: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", image: Image_3 },
        { title: "Respira", desc: "Outdoor bar table and stool", price: "Rp 500.00", image: Image_4 },
      ].map((item, index) => (
        <li key={index} className="relative group flex flex-col items-center bg-[#f4f5f7] pb-8 w-64 overflow-hidden">
          {/* Conditional Badge */}
          {item.title === "Syltherine" && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              -30%
            </div>
          )}
          {item.title === "Lolito"  && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              -50%
            </div>
          )}
          {item.title === "Respira" && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              New
            </div>
          )}
          <img src={item.image} alt="" className="h-[301px] w-[285px] object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <button className="absolute bottom-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#b88e2f] font-semibold text-sm px-4 py-2 ">
            Add to Cart
          </button>
          <div className="absolute bottom-52 flex justify-between w-full px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            <span className='flex items-center text-sm gap-2'><IoShareSocial /> Share</span>
            <span className='flex items-center text-sm gap-2'><MdCompareArrows /> Compare</span>
            <span className='flex items-center text-sm gap-2'><FaRegHeart />Like</span>
          </div>
          <h3 className="text-lg font-bold mt-4 text-left ml-4 w-full">{item.title}</h3>
          <p className="text-gray-600 mt-2 text-left ml-4 w-full">{item.desc}</p>
          <p className="text-md font-semibold mt-4 text-left ml-4 w-full">
            {item.price} {item.oldPrice && <span className="text-gray-400 text-sm line-through ml-10">{item.oldPrice}</span>}
          </p>
        </li>
      ))}
    </ul>
    <ul data-aos='fade-up' data-aos-delay='300' className="flex flex-row items-center justify-center gap-6 mt-8">
      {[
        { title: "Syltherine", desc: "Stylish cafe chair", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", image: Image_1 },
        { title: "Leviosa", desc: "Stylish cafe chair", price: "Rp 2.500.000", image: Image_2 },
        { title: "Lolito", desc: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", image: Image_3 },
        { title: "Respira", desc: "Outdoor bar table and stool", price: "Rp 500.00", image: Image_4 },
      ].map((item, index) => (
        <li key={index} className="relative group flex flex-col items-center bg-[#f4f5f7] pb-8 w-64 overflow-hidden">
          {/* Conditional Badge */}
          {item.title === "Syltherine" && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              -30%
            </div>
          )}
          {item.title === "Lolito"  && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              -50%
            </div>
          )}
          {item.title === "Respira" && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
              New
            </div>
          )}
          <img src={item.image} alt="" className="h-[301px] w-[285px] object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <button className="absolute bottom-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#b88e2f] font-semibold text-sm px-4 py-2 ">
            Add to Cart
          </button>
          <div className="absolute bottom-52 flex justify-between w-full px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            <span className='flex items-center text-sm gap-2'><IoShareSocial /> Share</span>
            <span className='flex items-center text-sm gap-2'><MdCompareArrows /> Compare</span>
            <span className='flex items-center text-sm gap-2'><FaRegHeart />Like</span>
          </div>
          <h3 className="text-lg font-bold mt-4 text-left ml-4 w-full">{item.title}</h3>
          <p className="text-gray-600 mt-2 text-left ml-4 w-full">{item.desc}</p>
          <p className="text-md font-semibold mt-4 text-left ml-4 w-full">
            {item.price} {item.oldPrice && <span className="text-gray-400 text-sm line-through ml-10">{item.oldPrice}</span>}
          </p>
        </li>
      ))}
    </ul>
    <div data-aos='fade-up' data-aos-delay='300' className='flex items-center justify-center gap-4 mt-10 mb-10'>
      <button className='bg-[#F9F1E7] text-xs font-semibold px-4 py-2 hover:bg-[#b88e2f] rounded-lg'>1</button>
      <button className='bg-[#F9F1E7] text-xs font-semibold px-4 py-2 hover:bg-[#b88e2f] rounded-lg'>2</button>
      <button className='bg-[#F9F1E7] text-xs font-semibold px-4 py-2 hover:bg-[#b88e2f] rounded-lg'>3</button>
      <button className='bg-[#F9F1E7] text-xs font-semibold px-4 py-2 hover:bg-[#b88e2f] rounded-lg'>Next</button>
    </div>
    <div className='w-screen h-48  right-24 bg-[#F9F1E7] flex items-center justify-center'>
      <img data-aos='fade-up' data-aos-delay='300' src={Feature} alt="" className='flex items-center justify-center h-16 ' />
    </div>
  </>
  )
}

export default ItemList