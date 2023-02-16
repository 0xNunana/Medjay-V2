import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer2'
import {  FaSearch } from 'react-icons/fa'
import DashImage from '../components/DashImage'

const Dashboard = () => {
  return (
    <div>
        <div className="sticky top-0 z-40">
             <Header />
        </div>
       
        <DashImage/>
        <div className='flex'>
            <div  className='border bg-black flex-shrink-0 pb-3'>
                <form className='hidden lg:inline p'>
                   
                   <div className='flex py-3 px-2  bg-slate-300' >
                    <div><input type="text" className='block rounded-lg' placeholder='search'/></div>
                    <div className='pr-2 text-center rounded-full bg-green-200'>
                        <button type='submit' className='hover:text-lg  pl-2'><FaSearch /></button>
                    </div>
                    
                    </div> 
                   
                </form>
                <div className='hidden lg:inline'>
                    <div className='bg-white mx-2 my-2 '>
                <p className='text-red-500 text-center'>CAUTION ⚠ </p>
                <p>Estimated Renewal date:</p>
                </div>
                </div>
               
                
            
            </div>
            <div className='border bg-gradient-to-b from-slate-100 via-slate-100 to-yellow-50  flex-grow '>
                <div class=" hidden lg:flex justify-evenly">
              <div><button className='bg-white w-full px-5 rounded-b-lg'>Admin</button></div>
                    
              <div><button className='bg-white w-full px-5 rounded-b-lg'>QA</button></div>
              <div><button className='bg-white w-full px-5 rounded-b-lg'>Usage</button></div>
              <div><button className='bg-white w-full px-5 rounded-b-lg'>Compliance</button></div>
              <div><button className='bg-white w-full px-5 rounded-b-lg'>Expiry</button></div>
              
              
                </div>
              <div className='grid sm:grid-cols-1 sm:pt-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 shadow-lg pl-5 pt-5 pb-5'>
                <div className='text-center pt-5 pr-4 font-serif ' id="Price">Pricing
                <p className='bg-white rounded-md '>Our pricing is based on speed instead of size. Hence it has no cap as long as you are within the time frame for which you purchased</p>
                </div>
                <div className='text-center pt-5'>Features</div>
                <div className='text-center pt-5'>use</div>
                <div className='text-center pt-5'>stats</div>

              </div>
                </div>
        </div>
        <div className='sticky bottom-0'><Footer/></div>
        
    </div>
  )
}

export default Dashboard