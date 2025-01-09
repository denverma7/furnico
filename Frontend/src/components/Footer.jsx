import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white mt-14 px-5 relative z-50'>
        <section className='max-w-[1200px] mx-auto text-black'>
            <div className='grid grid-cols-1 md:grid-cols-3 py-5'>
                {/* first col */}
                <div className='py-8 px-4 '>
                    <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Furniro.</h1>
                    <p className='text-gray-400'>400 University Drive Suite 200 Coral < br /> Gables, <br /> FL 33134 USA </p>
                
                </div>
                {/* Links col */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>   
                        <div className='py-8 px-4'>
                            <h1 className='text-md text-gray-400 font-semibold mb-9 '>Links</h1>
                            <ul className='flex flex-col gap-7 text-sm font-semibold'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    {/* Help Column */}
                    <div>
                        <div className='py-8'>
                            <h1 className='text-md text-gray-400 font-semibold mb-9 '>Help</h1>
                            <ul className='flex flex-col gap-7 text-sm font-semibold'>
                                <li>
                                    <a href="#">Payment Options</a>
                                </li>
                                <li>
                                    <a href="#">Returns</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policies</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                    {/* News Letter section */}
                    <div className=''>
                        <div className='py-8 '>
                                <h1 className='text-md text-gray-400 font-semibold  mb-3 '>News Letter</h1>
                        </div>
                            {/* <div className='space-y-3 flex flex-wrap gap-2 text-xs'>
                            <div className='flex align-items-center gap-2 text-xs'> 
                                <p className='text-gray-400 underline'>Enter your email address <span className='ml-6 underline text-black'><a href="#">SUBSCRIBE</a></span></p>
                            </div>                              
                        </div> */}
                        <div className="flex flex-wrap items-center text-xs gap-2">
  <p className="text-gray-400 underline">
    Enter your email address
  </p>
  <span className="underline text-black ml-2">
    <a href="#">SUBSCRIBE</a>
  </span>
</div>
                    </div>
                    
                </div>

            </div>

            {/* Bottom Section */}
            <div className=' sm:block'>
                <div className='flex justify-between items-center py-6 border-t-2 border-gray-300 '>
                    <span className='text-xs md:text-sm text-gray-950'>
                        2023 furnino. All rights reserved
                    </span>
                                        
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer