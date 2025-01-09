import React, { useState } from 'react'
import axios from 'axios'
import HeroImage from "../../assets/ShopImages/Hero.png"
import Logo from '../../assets/HomeImages/Logos.png';
import Feature from '../../assets/ShopImages/Feature.png'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const Contact = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

   const [status, setStatus] = useState("");

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/messages", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("Error sending message.");
  //   const res = await axios.post("http://localhost:5000/api/messages", formData);
  //   console.log(res.data); // Log the response
  //   setStatus(res.data.message); // Use the backend's message
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // } catch (error) {
  //   console.error(error.response ? error.response.data : error.message);
  //   setStatus("Error sending message.");
    }
  };

  return (
    <>
      <Navbar />
       <div data-aos='fade-up' className='relative flex flex-col items-center justify-center'>
            <img  src={HeroImage} alt="" className="w-full h-auto object-cover mt-48 sm:mt-0"/>
            <img src={Logo} alt="" className='absolute -mt-20 text-black font-medium text-4xl'/>
            <h1 className='absolute text-black font-semibold text-4xl'>Contact</h1>
            <p className='absolute mt-24 font-semibold'>Home <span className='font-normal'> {'>'} Contact</span> </p>
        </div>
        <div className='flex flex-col items-center text-center mt-12' data-aos='zoom-in'>
          <h1 className=' font-semibold text-2xl'>Get In Touch With Us</h1> <br />
          <p className=' text-black/30 text-xs -mt-4'>For More Information About Our Products and Services, Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className=' grid grid-cols-2' data-aos='zoom-out'>
          <div className='relative col-span-1'>
            <ul className='mt-10 flex flex-col space-y-6 md:ml-[320px]'>
              <li>
                <h1 className='font-semibold text-xl flex'> <IoLocationSharp /><span className='ml-3'>Address</span> </h1>
                <p className='text-sm ml-8'>236 5th SE Avenue, New <br />York NY10000, United <br />States</p>
              </li>
              <li>
                <h1 className='font-semibold text-xl flex'><FaPhoneAlt className='text-sm' /><span className='ml-3'> Phone</span></h1>
                <p className='text-sm ml-8'>Mobile: +(84) 546-6789</p>
                <p className='text-sm ml-8'>Hotline: +(84) 546-6789</p>
              </li>
              <li>
                <h1 className='font-semibold text-xl flex'> <FaClock /> <span className='ml-3'>Working Time</span></h1> 
                <p className='text-sm ml-8'>Monday-Friday: 9:00 - <br />22.00</p>
                <p className='text-sm ml-8'>Saturday-Sunday: 9:00 - <br />21.00</p>
              </li>
            </ul>
          </div>
          <div className='relative col-span-1 mt-10'>
            <div className='col-span-1 mb-16'>
              <form onSubmit={handleSubmit}>
                <div>
                  <label className='text-sm'>Your Name</label> <br />
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='border-2 px-2 py-3 mt-2 text-xs rounded-md w-1/2' 
                    placeholder='Abc' 
                    required 
                  />
                </div>
                <div className='mt-6'>
                  <label className='text-sm'>Email Address</label> <br />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='border-2 px-2 py-3 mt-2 text-xs rounded-md w-1/2 ' 
                    placeholder='abc@def.com' 
                    required 
                  />
                </div>
                <div className='mt-6'>
                  <label className='text-sm mt-4'>Subject</label> <br />
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className='border-2 px-2 py-3 mt-2 text-xs rounded-md w-1/2' 
                    placeholder='This is an optional'
                  />
                </div>
                <div className='mt-6'>
                  <label className='text-sm'>Message</label> <br />
                  <textarea 
                  name="message"
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder='Hi! I would like to ask about' 
                  className='border-2 p-2 mt-2 text-xs rounded-md w-1/2 h-32' />
                </div>
                <div>
                  <button 
                  type='submit' 
                  className='flex border-2 px-7 py-1 mt-4 bg-[#b88e2f]'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='w-screen h-48  right-24 bg-[#F9F1E7] flex items-center justify-center'>
          <img data-aos='fade-up' data-aos-delay='300' src={Feature} alt="" className='flex items-center justify-center h-16 ' />
        </div>
        <Footer />
    </>
  )
}

export default Contact