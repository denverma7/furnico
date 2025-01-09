import React from 'react';
import { NavLinks } from './Navbar';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({showMenu, setShowMenu}) => {

    const handleLinkClick = () => {
        setShowMenu(false)
    }

  return (
    <div
      className={`${
        showMenu ? "block" : "hidden"
      } bg-white absolute top-full  w-[75%]  shadow-md sm:hidden`}
    >
      <ul className="flex flex-col items-start p-4 space-y-4">
        {NavLinks.map((link) => (
          <li key={link.id} onClick={handleLinkClick}>
            <Link to={link.link} className="text-black text-lg font-semibold">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    // <div
    // className={`${showMenu ? 'left-0' : '-left-full' } fixed top-0 z-50 bg-white h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}
    // >
    //     <div className='card'>
            // {/* Links */}
    //         <nav className='mt-12'>
    //             <ul
    //             className='space-y-8 text-xl font-semibold'
    //             >
    //             {
    //                 NavLinks.map((data) => {
    //                     return(
    //                         <li key={data.id}>
    //                             <a href={data.link}>{data.name}</a>
    //                         </li>
    //                     )})
    //             }
    //             </ul>
    //         </nav>
    //     </div>
    // </div>

    
  )
}

export default ResponsiveMenu