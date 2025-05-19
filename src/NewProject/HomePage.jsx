import React from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import { BG_IMAGE } from '../assets'



function HomePage() {
  return (
    <div style={{ backgroundImage: `url(${BG_IMAGE})` }} className='bg-cover h-dvh w-full bg-center flex flex-col'>

      <div className='z-10 relative h-full w-full'>
        <Navbar />
       
        <MainSection />


      </div>
      <div className='absolute top-0 right-0 h-full w-full bg-linear-to-b from-blue-900 via-blue-400 to-blue-200 opacity-85  z-0'></div>
    </div>
  )
}

export default HomePage