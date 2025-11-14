import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10'>
        <div className='text-center font-Outfit text-4xl font-bold-itali text-black '>
            <h1>Dulce Aroma</h1>
        </div>
        <div className='w-max flex items-center gap-2 mx-auto text-black '>
                <p>denissebg03@gmail.com</p>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-black '>
            <p>@ 2025 Denisse Benito. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/Denisse030/Dulce-Aroma" className='hover:underline text-[#501249]'>GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/denissebenito/" className='hover:underline text-[#501249]'>LinkedIn</a></li>
                <li><a target='_blank' href="https://denissebenito.com/" className='hover:underline text-[#501249]'>Portfolio</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
