import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div id="About" className="container mx-auto p-14 md:p-20 w-full bg-[#f7efe9] rounded-2xl shadow-md shadow-[#8f564530] flex flex-col items-center mt-10">
        <h1 className="text-2xl sm:text-4xl font-serif text-[#8f5645] font-bold tracking-wide">About Café Dulce Aroma</h1>
        <div className="h-1 w-16 bg-[#c29b86] rounded-full mt-2 mb-6"></div>
        <p className="text-[rgb(143,86,69)] max-w-88 text-center leading-relaxed mb-10">
            A cozy corner crafted for coffee lovers, pastry enthusiasts, and anyone seeking warmth.
        </p>
        <div className="flex flex-col md:flex-row items-center md:gap-20 gap-12">
            <img className="w-full sm:w-1/2 max-w-lg rounded-xl shadow-lg shadow-[#8f564540] transition-transform hover:scale-105" src={assets.brand_img} alt=''/>
            <div className="text-[#8f5645] flex flex-col items-center md:items-start">
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className='bg-[#f3e0d8] rounded-xl px-6 py-4 flex flex-col items-center shadow-md shadow-[#8f564540] transition-transform hover:scale-105'>
                        <p className="text-4xl font-bold">15+</p>
                        <p className='text-center mt-2'>Menu Items</p>
                    </div>
                    <div className='bg-[#f3e0d8] rounded-xl px-6 py-4 flex flex-col items-center shadow-md shadow-[#8f564540] transition-transform hover:scale-105'>
                        <p className="text-4xl font-bold">5+</p>
                        <p className='text-center mt-2'>Coffee Recipes</p>
                    </div>
                    <div className='bg-[#f3e0d8] rounded-xl px-6 py-4 flex flex-col items-center shadow-md shadow-[#8f564540] transition-transform hover:scale-105'>
                        <p className="text-4xl font-bold">10+</p>
                        <p className='text-center mt-2'>Step-by-Step Tutorials</p>
                    </div>
                    <div className='bg-[#f3e0d8] rounded-xl px-6 py-4 flex flex-col items-center shadow-md shadow-[#8f564540] transition-transform hover:scale-105'>
                        <p className="text-4xl font-bold">5+</p>
                        <p className='text-center mt-2'>Cafe Recommendations</p>
                    </div>
                </div>
                <p className="max-w-lg leading-relaxed">
                    Dulce Aroma is a cozy café project inspired by the warmth of fresh pastries and rich, comforting coffee. Created as a space to share my love for baking and brewing, it brings together homemade recipes, a curated menu, and personal recommendations that celebrate the simple joys of café culture. Every detail—from the soft illustrations to the sweet treats—is designed to evoke comfort, creativity, and the feeling of stepping into a familiar, inviting café.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
