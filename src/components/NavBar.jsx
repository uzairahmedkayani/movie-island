import React from 'react'
import logo from '../images/Logo.png'
import Avatar from './Avatar'

export default function NavBar() {
  return (
    <>
    <nav className='h-[90px] flex flex-center justify-between px-[100px]'>
        <img className='w-3xs my-auto cursor-pointer' src={logo} alt="Movie Island Logo" />
        <div className='flex items-center gap-2'>
          <div className='inputBox w-[22vw] !rounded-[30px] p-1'>
            <input type="text" className='!rounded-[30px] pl-[20px]' placeholder='Search here...'/>
          </div>
          <Avatar />
        </div>
    </nav>
    </>
  )
}
