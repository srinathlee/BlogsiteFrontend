
import React from 'react'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className='bg-gray-white py-2 text-white px-2 md:px-4 lg:px-8 flex justify-between items-center border border-b-[#f0f0f0]'>
      <div><img className='w-24' src={logo}/></div>

      <div className='flex gap-4'>
       <div> <button className='text-black rounded-md px-4 py-2 bg-gray-100'>Login</button></div>
        <div><button className='text-white rounded-md px-4 py-2 bg-black'>GetStarted</button></div>
      </div>
    </div>
  )
}

export default Navbar
