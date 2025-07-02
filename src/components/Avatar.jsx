import React from 'react'
import avatar from '..//images/avatar.png'

export default function Avatar() {
  return (
    <>
      <div className='rounded-full w-10 h-10 cursor-pointer'>
        <img src={avatar} alt="Avatar" className='rounded-full' />
      </div>
    </>
  )
}
