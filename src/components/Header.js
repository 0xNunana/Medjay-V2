
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between bg-gradient-to-l from-slate-200 via-rose-100 to-rose-50  '>
      <div className='w-20 m-4'>
        <a href="/Dashboard"><img src="/Meddesign.png" className='rounded-xl'/></a>
      </div>
      <div className='flex space-x-3 m-5'>
        <div><a href="/Profile">Profile</a></div>
        <div className='hidden lg:inline'><a href="/About">About Us</a></div>
        <div>Sign out</div>
      </div>
    </div>
  )
}

export default Header