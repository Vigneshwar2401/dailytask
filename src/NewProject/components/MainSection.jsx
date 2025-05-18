import React from 'react'
import Button from './Button'
import { BiAward } from 'react-icons/bi'
import { FaAngleDown } from 'react-icons/fa'

function MainSection() {
  return (
    <div className="relative h-5/6 w-full">
      <div className="flex gap-4 justify-center items-center h-1/6">
        <Button title="Find Your Tutor" />
        <Button title="Featured Tutor" icon={<BiAward />} />
      </div>
      <div className='absolute flex justify-center items-center'><FaAngleDown /></div>
      <div className="bottom_design absolute  bottom-0 left-0 h-10 bg-white w-full" />
    </div>
  )
}

export default MainSection