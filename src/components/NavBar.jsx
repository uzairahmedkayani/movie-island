import React from 'react'
import logo from '../images/Logo.png'

export default function NavBar() {
  return (
    <>
    <nav className='h-[90px] flex flex-center justify-between px-[100px]'>
        <img className='w-3xs my-auto cursor-pointer' src={logo} alt="Movie Island Logo" />
    </nav>
    </>
  )
}
