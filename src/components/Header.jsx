import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const handleNavbar = () => {
    setNavIsOpen(prev => !prev)
  }

  return (
      <header className='w-full h-full relative'>
          <div className='bg-[#AD8B73]'>
              <div className='w-full py-1  main-width px-4 lg:px-2 2xl:px-0 flex justify-center lg:justify-end items-center gap-x-6'>
                  <button type='button' className='lg:text-lg transition ease-in-out duration-150 hover:text-gray-700 hover:underline'>Sign in / Guest</button>
                  <button type='button' className='lg:text-lg transition ease-in-out duration-150 hover:text-gray-700 hover:underline'>Create Account</button>
              </div>
      </div>
      <Navbar handleNavbar={handleNavbar} />
      {navIsOpen ? <Sidebar handleNavbar={handleNavbar} /> : null}
    </header>
  )
}

export default Header