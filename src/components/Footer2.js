import React from 'react'
import{FaTwitter, FaFacebook,FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className=' bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100'>
        <div className='flex justify-evenly'>
            <a href="/About">About Us</a>
            <a href="#Price">Pricing</a>
            <a href="#">Features</a>
        </div>
        <div className='flex pt-5 justify-center space-x-10'>
            <p >
                <FaTwitter/>
                </p>
                <p><FaFacebook/></p>
                <p><FaLinkedin/></p>
                </div>
             <div className='flex pb-5 justify-center '>
            Medjay ISP © </div>
       
    </div>
  )
}

export default Footer