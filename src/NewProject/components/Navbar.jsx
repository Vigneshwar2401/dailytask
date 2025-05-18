import React from 'react'
import { navLinks } from './Context'
import { Link } from 'react-router-dom'
import { AiOutlineBaidu } from 'react-icons/ai'

function Navbar() {
  return (
    <div className='h-2/12 w-full flex justify-between p-5 overflow-hidden'>
      <div>
        <AiOutlineBaidu className='h-10 w-10 ml-20' />
      </div>
      <ul className='flex gap-3 mr-20'>
        {navLinks.map((nav) => (
          <li>
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar