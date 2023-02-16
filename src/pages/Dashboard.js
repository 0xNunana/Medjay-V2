import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer2'
import { FaBiohazard, FaSearch } from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div>
        <Header/>
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
            <div className='border bg-slate-400 flex-grow '>
                <div class=" hidden lg:flex justify-evenly">
              <div><button className='bg-white w-full px-5 rounded-b-lg'>Admin</button></div>
                    
              <div><button className='bg-white w-full px-5 rounded-b-lg'>QA</button></div>
              <div><button className='bg-white w-full px-5 rounded-b-lg'>Usage</button></div>
              <div><button className='bg-white w-full px-5 rounded-b-lg'>Compliance</button></div>
              <div><button className='bg-white w-full px-5 rounded-b-lg'>Expiry</button></div>
              
              
                </div>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 shadow-lg pl-5 pt-5'>
                <div className='text-center'>buy</div>
                <div className='text-center'>sell</div>
                <div className='text-center'>use</div>
                <div className='text-center'>stats</div>

              </div>
                </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Dashboard