import React, { useState} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";
import Banner from './Pages/Home/Banner';
import Range from './Pages/Home/Range';
import Products from './Pages/Home/Products';
import Hero from './Pages/Shop/Hero';
import RelatedProducts from './Pages/SingleProduct/RelatedProducts';
import ProductDetails from './Pages/SingleProduct/ProductDetails';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import ShoppingCartPopup from './Pages/Shop/ShoppingCart/ShoppingCartPopup';
import Cart from './Pages/Cart/cart';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';

const App = () => {
  React.useEffect(() =>{
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    })
  })

  

  return (
    <>
      
        {/* <Navbar toggleCart={toggleCart} /> */}
      <Routes>
        <Route path="/" exact element={<Banner />} />
        <Route path="/home" exact element={<Banner />} />
        {/* <Route path='/navbar' exact element={<Navbar />} /> */}
        <Route path="/shop" exact element={<Hero />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/blog" exact element={<Blog />} />

        
      </Routes>
      
      
      
      {/* <Navbar /> */}
      {/* <SingleProduct /> */}
      {/* <ProductDetails /> */}
      {/* <RelatedProducts />   */}
      {/* <Cart /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* <Blog /> */}
      
    </>
  )
}

export default App