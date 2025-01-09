import React, { useState } from 'react'
import Image_1 from '../../assets/SingleProdictImages/DescImages/Group_1.png';
import Image_2 from '../../assets/SingleProdictImages/DescImages/Group_2.png';

const ProductDetails = () => {

    const [activeTab, setActiveTab] = useState("description");

  return (
    <>
        <div className="w-full px-4">
      {/* Tabs */}
      <div data-aos='fade-up' className="flex items-center justify-center font-semibold text-2xl mt-10 gap-8 ">
        <button
          className={`pb-2 ${
            activeTab === "description" ? "text-black font-semibold text-2xl  border-black" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`pb-2 ${
            activeTab === "additional" ? "text-black font-semibold text-2xl  border-black" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("additional")}
        >
          Additional Information
        </button>
        <button
          className={`pb-2 ${
            activeTab === "reviews" ? "text-black font-semibold text-2xl  border-black" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews [5]
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "description" && (
          <div>
            <p data-aos='fade-up' className='flex items-center justify-center text-justify text-black/50 ml-52 mr-52'>
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the
              unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p data-aos='fade-up' className="flex items-center justify-center text-justify text-black/50 ml-52 mr-52 font-sans mt-4">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the
              bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
              well-balanced audio that boasts a clear midrange and extended highs for a sound that is both articulate
              and pronounced. The analogue knobs allow you to fine tune the controls to your personal performances while the guitar-influenced leather strap enables easy and stylish travel. 
            </p>
          </div>
        )}
        {activeTab === "additional" && (
          <div className='flex flex-col items-center justify-center'>
            <p data-aos='fade-up' className='text-black/50'>Weight: 7 pounds</p>
            <p data-aos='fade-up' className='text-black/50'>Dimensions: 9.5 x 5.5 x 5.5 inches</p>
            <p data-aos='fade-up' className='text-black/50'>Power Supply: Built-in rechargeable battery</p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className='flex flex-col items-center justify-left'>
            <p data-aos='fade-up' className='text-black/50'>John Doe: "Amazing sound quality!"</p>
            <p data-aos='fade-up' className='text-black/50'>Jane Smith: "Very portable and stylish."</p>
            <p data-aos='fade-up' className='text-black/50'>Michael Lee: "Worth every penny!"</p>
          </div>
        )}
      </div>
    </div>
    <div className='flex items-center justify-center gap-6 mt-10 mb-12'>
        <img src={Image_1} alt="" data-aos='zoom-in' />
        <img src={Image_2} alt="" data-aos='zoom-in' />
    </div>

    </>
  )
}

export default ProductDetails