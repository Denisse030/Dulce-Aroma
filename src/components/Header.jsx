import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex item-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
      <Navbar />
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-brown flex flex-col justify-center items-center min-h-screen'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 
             opacity-0 translate-y-6 animate-fadeInUp'>Welcome to Café Dulce Aroma!</h2>
        <div className='space-x-6 mt-16 opacity-0 translate-y-6 animate-fadeInUp animation-delay-300'>
            <a className='border border-[#3d2e29] bg-[#bd9183] px-8 py-3 rounded-full' href='#Recipes'>Cafe's Recipes</a>
            <a className=' border border-[#bd9183] bg-[#3d2e29] px-8 py-3 rounded-full text-white' href='#Contact'>Contact Us</a>
        </div>
      </div>
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a href="#Header" className="bg-[#c29b86] text-white p-3 rounded-full text-center shadow-md hover:bg-[#b87a65]">↑</a>
        <a href="#About" className="bg-[#c29b86] text-white p-3 rounded-full text-center shadow-md hover:bg-[#b87a65]">About</a>
        <a href="#Recipes" className="bg-[#c29b86] text-white p-3 rounded-full text-center shadow-md hover:bg-[#b87a65]">Recipes</a>
        <a href="#Brewing Bar" className="bg-[#c29b86] text-white p-3 rounded-full text-center shadow-md hover:bg-[#b87a65]">BrewBar</a>
        <a href="#Recommendations" className="bg-[#c29b86] text-white p-3 rounded-full text-center shadow-md hover:bg-[#b87a65]">Recs</a>
        <a href="#Contact" className="bg-[#c29b86] text-white p-3 rounded-full text-center shadow-md hover:bg-[#b87a65]">Contact</a>
      </div>
    </div>
  )
}

export default Header
