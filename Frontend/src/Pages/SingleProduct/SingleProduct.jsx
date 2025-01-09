import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiStarHalfOutline } from "react-icons/ti";
import SmallImage1 from '../../assets/SingleProdictImages/SmallImage1.png'
import SmallImage2 from '../../assets/SingleProdictImages/SmallImage2.png'
import SmallImage3 from '../../assets/SingleProdictImages/SmallImage3.png'
import SmallImage4 from '../../assets/SingleProdictImages/SmallImage4.png'
import BigImage from '../../assets/SingleProdictImages/BigImage.png'
import Navbar2 from '../../components/Navbar2';

const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (type) => {
        if (type === "decrement" && quantity > 1) setQuantity(quantity - 1);
        if (type === "increment") setQuantity(quantity + 1);
      };
      
  return (
    <>
        <Navbar2 />
        <div data-aos='fade-down' className='flex items-center justify-start bg-[#f9f1e7] h-16 mt-16 '>
            <p className='text-black/30 ml-24 text-sm mr-2'>Home <span className='text-black mr-2 ml-2'> {'>'}</span>  Shop <span className='text-black ml-2 mr-2'>{'>'}</span> | <span className='text-black ml-2'>Asgaard Sofa</span> </p>
        </div>
        <div data-aos='fade-up' className='grid grid-cols-11 w-full mt-2 gap-4'>
            <div className='col-span-2 ml-24 mt-6 '>
                <img src={SmallImage1} alt="" className='mb-6'/>
                <img src={SmallImage2} alt="" className='mb-6'/>
                <img src={SmallImage3} alt="" className='mb-6'/>
                <img src={SmallImage4} alt="" />
            </div>
            <div className='col-span-4 mt-6 -ml-24'>
                <img src={BigImage} alt="" className='w-[481px] h-[500px]' />
            </div>
            <div className='col-span-5  -ml-16'>
                <h1 className='mt-6 text-4xl font-medium '>Asgaard sofa</h1>
                <p className='text-gray-500 mt-1 text-lg'>Rs. 250,000.00</p>

                {/* Rating */}
                <div className="flex items-center mt-3 mb-3">
                    <div className="flex text-yellow-500">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <TiStarHalfOutline />
                    </div>
                    <p className="ml-2 text-sm text-gray-500">5 Customer Review</p>
                </div>

                <p className='text-black/80 text-xs'>Setting the bar as one of the loudest speakers in it's class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced <br /> audio which boats a clear midrange and extended highs for a <br />sound. </p>

                {/* Size Options */}
                <div className="mt-6">
                    <h4 className="text-sm mb-2 text-black/30 font-semibold">Size</h4>
                    <div className="flex gap-3 mt-2">
                    {["L", "XL", "XS"].map((size, index) => (
                        <button
                        key={index}
                        className="px-3 py-1 text-sm border bg-[#f9f1e7] border-gray-300 rounded-md hover:bg-[#b88e2f]"
                        >
                        {size}
                        </button>
                    ))}
                    </div>
                </div>
                {/* Color Options */}
                <div className="mt-6">
                    <h4 className="text-sm text-black/30 font-semibold">Color</h4>
                    <div className="flex gap-3 mt-2">
                    {["#A585F2", "#000000", "#b88e2f"].map((color, index) => (
                        <span
                        key={index}
                        className="h-6 w-6 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                        ></span>
                    ))}
                    </div>
                </div>

                 {/* Quantity and Actions */}
                <div className="flex items-center justify-left gap-4 mt-8 mb-12">
                    <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                        className="px-3 py-1 border-r border-gray-300"
                        onClick={() => handleQuantityChange("decrement")}
                    >
                        -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                        className="px-3 py-1 border-l border-gray-300"
                        onClick={() => handleQuantityChange("increment")}
                    >
                        +
                    </button>
                    </div>

                    <button className="border border-black text-black px-8 py-2 text-sm rounded-md ">
                    Add To Cart
                    </button>
                    <button className="border border-black px-8 py-2 text-sm rounded-md">
                    + Compare
                    </button>
                </div>
                <hr className="border-t border-gray-300"/>
                <div className="mt-8 ">
                    
                    <div className="flex text-black/20">
                        <span className="w-24 font-medium">SKU</span>
                        <span>: SS001</span>
                    </div>
                    <div className="flex text-black/20">
                        <span className="w-24 font-medium">Category</span>
                        <span>: Sofas</span>
                    </div> 
                    <div className="flex text-black/20">
                        <span className="w-24 font-medium">Tags</span>
                        <span>: sofa, chair, home, shop</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-24 font-medium text-black/20">Share</span>
                        <span className="flex flex-row gap-4 items-center text-black/20"> 
                            : <FaFacebook className="relative top-[2px] text-black" /> 
                            <FaLinkedin className="relative top-[2px] text-black" /> 
                            <AiFillTwitterCircle className="relative top-[2px] text-black" /> 
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default SingleProduct