import React from 'react';
import Dining from '../../assets/HomeImages/Dining.png';
import Living from '../../assets/HomeImages/Livingroom.png';
import Bedroom from '../../assets/HomeImages/Bedroom.png'


const Range = () => {
  return (
    <>
        <div>
                <p 
                data-aos='fade-up' 
                data-aos-delay='300' 
                className='font-sans text-black text-center mt-10 text-3xl font-bold'
                >
                    Browse The Range
                </p>
                <p 
                data-aos='fade-up' 
                data-aos-delay='300' 
                className='text-center text-lg py-6 px-4 text-gray-500 mt-0'
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum.
                </p>
        </div>
        <div>
            <ul className='flex flex-col md:flex-row lg:flex-row gap-4 items-center justify-center '>
                <li data-aos='zoom-in' data-aos-delay='500'>
                    <img src={Dining} alt="Dining room image" className='rounded-xl h-[480px] w-[381px]' />
                    <p className=' inset-0 flex items-center justify-center text-lg font-semibold mt-4'>Dining</p>
                </li>
                <li data-aos='zoom-in' data-aos-delay='500'>
                    <img src={Living} alt="Living room image" className='rounded-xl h-[480px] w-[381px]' />
                    <p className=' inset-0 flex items-center justify-center text-lg font-semibold mt-4'>Living</p>
                </li>
                <li data-aos='zoom-in' data-aos-delay='500'>
                    <img src={Bedroom} alt="Bedroom Image" className='rounded-xl h-[480px] w-[381px]' />
                    <p className=' inset-0 flex items-center justify-center text-lg font-semibold mt-4'>Bedroom</p>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Range