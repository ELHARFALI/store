import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../utils/data'

const Sidebar = ({handleNavbar}) => {
  return (
    <aside className='absolute z-[1] bg-[#393E46] text-white bottom-[-165%] left-[10px] p-4 py-6 rounded-xl lg:hidden'>
      <ul className='grid gap-y-6'>
      {navLinks.map((link) => {
            const { id, title, path } = link
            return (
              <li>
                <NavLink key={id} to={path} className='text-xl font-medium   px-4 py-2 rounded-lg' onClick={handleNavbar}>
                  {title}
                </NavLink>
              </li>
            )
          })}
      </ul>
    </aside>
  )
}

export default Sidebar