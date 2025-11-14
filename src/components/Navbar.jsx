import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        };
    }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img className="w-34 sm:w-42 md:w-54 lg:w-38 h-auto rounded-full" src={assets.logo} alt='' />
        <ul className="hidden md:flex gap-6 text-[15px] font-medium">
            {[
                { name: "Home", href: "#Header" },
                { name: "About", href: "#About" },
                { name: "Recipes", href: "#Recipes" },
                { name: "Brewing Bar", href: "#Brewing Bar"},
                { name: "Recommendations", href: "#Recommendations" },
                { name: "Contact", href: "#Contact" },
            ].map((link, i) => (
            <a className="items-center px-3 py-1 rounded-full transition-all duration-200 text-gray-700 hover:bg-[#bd9183] hover:text-[#ffffff]" key={i} href={link.href}>{link.name}</a>
            ))}
        </ul>
        <img onClick={() => setShowMobileMenu(true)} className='md:hidden w-7 cursor-pointer' src={assets.menu_icon} alt='' />
        </div>
        <div className={`fixed inset-0 z-50 md:hidden transition-all ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileMenu(false)}/>
            <div className="absolute right-0 top-0 h-full w-3/4 max-w-[300px] bg-[#bd9183] p-6 shadow-xl flex flex-col">
                <div className="flex justify-end mb-6">
                <img onClick={() => setShowMobileMenu(false)} className="w-6 cursor-pointer" src={assets.cross_icon} alt="close"/>
                </div>
                <ul className="flex flex-col gap-4 text-lg font-medium">
                    {[
                        { name: "Home", href: "#Header" },
                        { name: "About", href: "#About" },
                        { name: "Recipes", href: "#Recipes" },
                        { name: "Brewing Bar", href: "#Brewing Bar" },
                        { name: "Recommendations", href: "#Recommendations" },
                        { name: "Contact", href: "#Contact" },
                    ].map((link, i) => (
                    <a onClick={() => setShowMobileMenu(false)} className="px-4 py-2 rounded-full hover:bg-[#8f5645]/20 hover:text-[#bd9183] transition" key={i} href={link.href}>
                    {link.name}</a>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
