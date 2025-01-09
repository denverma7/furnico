import React, { useState } from 'react';
import Navbar2 from '../../components/Navbar2';
import Logo from '../../assets/HomeImages/Logos.png';
import HeroImage from "../../assets/ShopImages/Hero.png";
import Feature from '../../assets/ShopImages/Feature.png';
import { FaTrash } from "react-icons/fa";
import Asgaard from '../../assets/Thumbnail/AsgaardSofa.png';

function Cart() {
    const [quantity, setQuantity] = useState(1);
    const price = 250000.0;
}  


const cart = () => {
  return (
    <>
        <Navbar2 />
        <div className='relative flex flex-col items-center justify-center'>
            <img data-aos='fade-up' src={HeroImage} alt="" className="w-full h-auto object-cover"/>
            <img src={Logo} alt="" className='absolute -mt-20 text-black font-medium text-4xl'/>
            <h1 className='absolute text-black font-semibold text-4xl'>Cart</h1>
            <p className='absolute mt-24 font-semibold'>Home <span className='font-normal'> {'>'} Cart</span> </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start bg-white">
            {/* Product table */}
            <div className="w-full lg:w-2/3  p-2 rounded shadow-md mt-12">
                <table className="ml-8 w-full text-left border-collapse table-auto">
                    <thead>
                    <tr className="text-gray-800 bg-[#fcf8f3] text-sm font-semibold border-b ">
                        <th className='p-4'></th>
                        <th className='p-4 text-left'>Product</th>
                        <th className='p-4 text-left'>Price</th>
                        <th className='p-4 text-left'>Quantity</th>
                        <th className='p-4 text-left'>Subtotal</th>
                        <th className='p-4'></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b">
                        {/*Image Column*/}
                        <td className="p-4 ">
                            <img
                            src={Asgaard}
                            alt="Asgaard Sofa"
                            className="w-16 h-16 rounded"
                            />
                        </td>
                        {/* Product Name Column */}
                        <td className='px-4 py-6' >Asgaard Sofa</td>
                        {/* Price Column */}
                        <td className='px-4 py-6'>Rs. {250000}.00</td>
                        {/* Quantity */}
                        <td className='px-4 py-6'>
                            <input
                                type="number"
                                min="1"
                                className="w-12 border rounded p-1"
                                defaultValue="1"
                            />
                        </td>
                        {/* Subtotal */}
                        <td className='px-4 py-6'>Rs. 250,000.00</td>
                        {/* Trash bin */}
                        <td className='px-4 py-6 text-[#b88f2f]'><FaTrash /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            {/* Cart Totals */}
            <div className="w-full lg:w-1/5  mr-24 lg:mt-0 bg-[#fcf8f3] p-6 rounded shadow-md">
                <h2 className="text-lg font-bold  mb-4 flex justify-center">Cart Totals</h2>
                <div className="flex justify-between text-sm mb-4 mt-12">
                <span>Subtotal</span>
                <span>Rs. </span>
                </div>
                <div className="flex justify-between text-lg font-bold text-[#b88f2f] mb-6">
                <span>Total</span>
                <span>Rs. </span>
                </div>
                <div className='flex justify-center'>
                    <button className=" border-2 text-black py-3 mb-12 px-4 rounded text-sm font-bold hover:bg-[#a07828]">
                    Check Out
                </button>
                </div>
            </div>
        </div>
        <div className='w-screen h-48  right-24 bg-[#F9F1E7] flex items-center justify-center'>
        <img data-aos='fade-up' data-aos-delay='300' src={Feature} alt="" className='flex items-center justify-center h-16 ' />
        </div>
    </>
  )
}

export default cart