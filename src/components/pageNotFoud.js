import React from 'react'
import { PiSmileySad } from "react-icons/pi";

const PageNotFoud = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] gap-4 text-[#757575] px-10 text-center'>
        <PiSmileySad className='text-[150px]'/>
        <p className='text-6xl'>404</p>
        <p className='text-2xl'>Page Not Found</p>
       <div>
       <p>The Page your are looking for dosen`t exist or other error Occurred</p>
       <p>Go back or ahead over to <span className='font-bold text-[#]'>Dharana.com</span> to choose a new direction</p>
       </div>
      
    </div>
  )
}

export default PageNotFoud
