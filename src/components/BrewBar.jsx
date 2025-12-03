import React from 'react'
import { assets } from '../assets/assets'

const BrewBar = () => {
  return (
    <div id="Brewing Bar" className="container mx-auto p-14 md:p-20 w-full bg-[#f7efe9] rounded-2xl shadow-md shadow-[#8f564530] flex flex-col items-center mt-10">
        <h1 className="text-2xl sm:text-4xl font-serif text-[#8f5645] font-bold tracking-wide">Brew Bar!</h1>
        <div className="h-1 w-16 bg-[#c29b86] rounded-full mt-2 mb-6"></div>
        <p className="text-[rgb(143,86,69)] max-w-88 text-center leading-relaxed mb-10">
            Check out what goes on behind the bar and the steps to make your favorite coffee drink!
        </p>
        <div className="flex flex-col md:flex-row items-center md:gap-20 gap-12">
            <img className="w-full sm:w-1/2 max-w-lg rounded-xl shadow-lg shadow-[#8f564540] transition-transform hover:scale-105" src={assets.brewing_bar} alt=''/>
            <img className="w-full sm:w-1/2 max-w-lg rounded-xl shadow-lg shadow-[#8f564540] transition-transform hover:scale-105" src={assets.drinks} alt=''/>
        </div>
    </div>
  )
}

export default BrewBar
