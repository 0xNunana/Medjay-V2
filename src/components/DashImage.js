import React from 'react'
import { MdAccountBalanceWallet } from "react-icons/md"
import {VscSettingsGear} from "react-icons/vsc"
import {TfiPulse} from "react-icons/tfi"
const DashImage = () => {
  return (
    <div className='relative'>

   



        <div className=' max-w-screen-2xl  flex '>
        <img src="https://cdn.pixabay.com/photo/2018/03/10/09/49/city-3213676_960_720.jpg" className='w-full'/>
        </div>
        <div className='flex absolute space-x-10 top-20 left-10 '>
        <div className='bg-rose-100 p-2 rounded-md shadow-lg hover:bg-green-200 hover:scale-110 '>
            <div >
                <MdAccountBalanceWallet size={100}/>
                <p className='text-center font-semibold md:bg-slate-200 rounded-lg bg-blue-300  '>Buy</p>
            </div>
        </div>
        <div className='bg-rose-100 p-2 rounded-md shadow-lg hover:bg-green-200 hover:scale-110'>
            
            <div>
                <TfiPulse size={100} className="pb-2"/>
                <p className='text-center font-semibold md:bg-slate-200 rounded-lg  bg-blue-300  '>Usage</p>
            </div>
        </div>
        <div className='bg-rose-100 p-2 rounded-md shadow-lg hover:bg-green-200 hover:scale-110'>
            
            <div>
                <VscSettingsGear size={100} className="pb-2"/>
                <p className='text-center font-semibold md:bg-slate-200 rounded-lg bg-blue-300  '>Settings</p>
            </div>
        </div>
        
    </div>
    </div>
    
  )
}

export default DashImage