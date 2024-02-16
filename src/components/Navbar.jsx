import React from 'react'
import { navLinks } from '../utils/data'
import { NavLink } from 'react-router-dom'
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSingleProductContext } from '../context/singleProduct_context';


const Navbar = ({ handleNavbar }) => {
  const {cartAmount} = useSingleProductContext()

  return (
    <nav className='h-[70px] bg-[#FFFBE9]'>
        <div className='main-width px-4 lg:px-2 2xl:px-0 flex justify-between items-center h-full'>
          <div className='hidden lg:flex justify-center items-center'>
            <h1 className='text-2xl font-semibold lg:text-3xl'>SHop</h1>
        </div>
        <div className='flex lg:hidden justify-center items-center'>
          <button type='button'onClick={handleNavbar} >
            <FaBarsStaggered size={28} />
          </button>
        </div>
        <ul className='hidden lg:flex gap-x-4 '>
          {navLinks.map((link) => {
            const { id, title, path } = link
            return (
              <li key={id}>
                <NavLink to={path} className='text-xl font-medium text-[#393E46]  px-4 py-2 rounded-lg'>
                  {title}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <div className='flex justify-center items-center relative'>
          <span className='w-5 h-5 bg-[#AD8B73] text-white absolute top-[-7px] right-[-7px] rounded-full flex justify-center items-center'>
            {cartAmount}
          </span>
          <button type='button'>
              <MdOutlineLocalGroceryStore size={28} />
            </button>
        </div>
        </div>
      </nav>
  )
}

export default Navbar