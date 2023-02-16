import React from 'react'
import Header from '../components/Header'

const Profile = () => {
  return (
    <div >
        <Header/>
        <div className=' border shadow-xl max-w-screen-md mx-auto '>
            <div className='flex justify-center border'>
                <img/> 
                <p>Info</p>
               
                </div>
            <div className='flex justify-center space-x-8'><div>
                <button className='bg-green-300 rounded-md'>Update</button>
            </div>
            <div>
                <button className='bg-red-400 rounded-md'>Delete</button>
            </div></div>
            
        </div>
    </div>
  )
}

export default Profile