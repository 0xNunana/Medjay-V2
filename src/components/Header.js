
import React from 'react'
import {TiThMenuOutline} from "react-icons/ti"
import { useState } from 'react'


const Header = () => {

  const [nav,setNav]=useState(false)
const menuClick=()=>{
  setNav(!nav)
}

  return (
    <div className='flex justify-between bg-gradient-to-l from-slate-200 via-rose-100 to-rose-50  '>
      <div className='w-20 m-4'>
        <a href="/Dashboard"><img src="/Meddesign.png" className='rounded-xl'/></a>
      </div>
      <div className='hidden md:inline '>
        <div className='flex space-x-3 m-5'>
          <div><a href="/Profile">Profile</a></div>
        <div ><a href="/About">About Us</a></div>
        <div>
            
          </div></div>
         
      </div>
      <div className='md:hidden z-10'>
          <button onClick={menuClick} className='pt-5 pr-5'> 
          <TiThMenuOutline size={30}/>
          </button></div>

          {/* mobile menu */}
          <div  onClick={menuClick} className={nav ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col w-full":
          "absolute top-0 h-screen left-[-100%] ease-in duration-500" }>
            <ul className=' text-center py-3 space-y-4'>
              <li className='text-2xl'><a href="/Profile">Profile</a></li>
              <li className='text-2xl'><a href="/About">About Us</a></li>
            </ul>
          </div>
    </div>
  )
}

export default Header