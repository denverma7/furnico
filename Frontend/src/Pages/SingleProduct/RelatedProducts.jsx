import React from 'react'
import Image_1 from '../../assets/SingleProdictImages/RelatedProducts/image_1.png'
import Image_2 from '../../assets/SingleProdictImages/RelatedProducts/image_2.png'
import Image_3 from '../../assets/SingleProdictImages/RelatedProducts/image_3.png'
import Image_4 from '../../assets/SingleProdictImages/RelatedProducts/image_4.png'
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";

const RelatedProducts = () => {
  return (
   <>
   <div className='flex items-center justify-center mt-14 tracking-wider'>
    <h1 data-aos='fade-up' className='font-semibold  text-3xl'>Related Products</h1>
   </div>
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
          <h3 className="text-xl font-bold mt-4 text-left ml-4 w-full">{item.title}</h3>
          <p className="text-gray-600 mt-2 text-left ml-4 w-full">{item.desc}</p>
          <p className="text-sm font-semibold mt-4 text-left ml-4 w-full">
            {item.price} {item.oldPrice && <span className="text-gray-400 line-through text-sm ml-10">{item.oldPrice}</span>}
          </p>
        </li>
      ))}
    </ul>
    <nav className='flex items-center justify-center mt-10 mb-10  '>
      <button data-aos='fade-up'  className=' border-2 border-[#b88f2f] text-[#b88f2f] px-8 py-1 text-xs font-semibold'>Show More</button>
    </nav>
   </>
  )
}

export default RelatedProducts