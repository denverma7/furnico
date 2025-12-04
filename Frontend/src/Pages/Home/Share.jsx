import React from 'react'
import Image_1 from '../../assets/HomeImages/Share/Image1.png'
import Image_2 from '../../assets/HomeImages/Share/Image2.png'
import Image_3 from '../../assets/HomeImages/Share/Image3.png'
import Image_4 from '../../assets/HomeImages/Share/Image4.png'
import Image_5 from '../../assets/HomeImages/Share/Image5.png'
import Image_6 from '../../assets/HomeImages/Share/Image6.png'
import Image_7 from '../../assets/HomeImages/Share/Image7.png'
import Image_8 from '../../assets/HomeImages/Share/Image8.png'
import Image_9 from '../../assets/HomeImages/Share/Image9.png'

const Share = () => {
  return (
    <>
      <div>
        <p data-aos='fade-up' data-aos-delay='300' className='text-center text-lg py-6 text-gray-500 mt-10'>Share your setup with</p>
        <p data-aos='fade-up' data-aos-delay='300'className='font-sans text-black text-center -mt-4 text-3xl font-bold'>#FurniroFurniture</p>
      </div>
      <div  className="grid grid-cols-1 md:grid-cols-12 w-[100%] gap-4 sm-ml-10 px-8">
        
        <img
        src={Image_1}
        alt="Item 1"
        data-aos='slide-up' data-aos-delay='300'
        className="hidden md:flex md:h-[382px] md:w-[78px] object-cover mt-2 ml-[80px] lg:-ml-[5px] md:-mt-4"
        />
        <img
          src={Image_2}
          alt="Item 2"
          data-aos='slide-up' data-aos-delay='300'
          className="col-span-4 w-[451px] h-[312px] mx-auto mt-[55px] -ml-2 md:-ml-9 object-cover"
        />
        <img
          src={Image_3}
          alt="Item 3"
          data-aos='slide-up' data-aos-delay='300'
          className="hidden md:block md:w-[295px] col-span-2 h-[392px] mt-[140px] md:-ml-16 object-cover"
        />
        <img
          src={Image_4}
          alt="Item 4"
          data-aos='slide-up' data-aos-delay='300'
          className="h-[348px] w-[290] col-span-2 md:-ml-16 mt-[84px] object-cover"
        />
        <img
          src={Image_5}
          alt="Item 5"
          data-aos='slide-up' data-aos-delay='300'
          className="col-span-3 h-[433px] left-[1178px] -ml-16 object-cover"
        />
        <img
          src={Image_6}
          alt="Item 6"
          data-aos='slide-up' data-aos-delay='200'
          className=" h-[323px] w-[185px] md:-mt-[170px] col-span-2 object-cover"
        />
        <img
          src={Image_7}
          alt="Item 7"
          data-aos='slide-up' data-aos-delay='200'
          className=" h-[242px] w-[344px] col-span-3 -ml-[52px] md:-mt-[170px] object-cover"
        />
        <img
          src={Image_8}
          alt="Item 8"
          data-aos='slide-up' data-aos-delay='200'
          className="col-span-4 h-[242px] w-[178px] md:-mt-[101px] ml-[100px] md:ml-[180px]  object-cover"
        />
        <img
          src={Image_9}
          alt="Item 8"
          data-aos='slide-up' data-aos-delay='200'
          className=" h-[196px] w-[258px] md:-mt-[100px] col-span-2 md:-ml-[120px] object-cover"
        />
      </div>
    
    </>
  )
}

export default Share