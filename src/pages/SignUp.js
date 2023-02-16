import React from 'react'
import Footer from '../components/Footer'

const SignUp = () => {
  return (
    <div className=' bg-[url("https://cdn.pixabay.com/photo/2023/02/08/08/50/frequency-wave-7776034_960_720.jpg")]'>
        <div className='flex justify-center pt-5 ' >
            <img className="rounded-full "src="/Meddesign.png"/>
        </div>
        <div className='flex justify-center '> 
        
        <form className='my-5 border rounded-lg shadow-md relative bg-slate-50'>
            <div className='flex mr-4 '>
                <div className=' mx-5'>
                <label for="First Name" className="block text-md pt-5 font-semibold text-gray-800">First Name</label>
            <input type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring-opacity-40" />
            </div>
            <div >
                <label for="Surname" className="block text-md pt-5 font-semibold text-gray-800">Surname</label>
            <input type="text" className="block w-full px-4 py-2 mt-2  text-black bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring-opacity-40"/>
            </div>
            </div>
            <div className='flex'>
                <div className='mx-5'>
                <label for="Username" className="block text-md pt-5 font-semibold text-gray-800">Username</label>
            <input type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring-opacity-40" />
            </div>
            <div >
                <label for="Password" className="block text-md pt-5 font-semibold text-gray-800">Password</label>
            <input type="password" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring-opacity-40"/>
            </div>
            </div>
             <div className='flex'>
                <div className='mx-5'>
                <label for="Email" className="block text-md pt-5 font-semibold text-gray-800">Email</label>
            <input type="email" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring-opacity-40" />
            </div>
            <div >
                <label for="Phone Number" className="block text-md pt-5 font-semibold text-gray-800">Phone Number</label>
            <input type="tel" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring-opacity-40"/>
            </div>
            </div>
            <div>
            <label for="Address" className="block text-md ml-5 pt-5 font-semibold text-gray-800">Address</label>
            <textarea className="  mb-5  ml-5  mr-4 text-black bg-white border w-4/5 rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring-opacity-40" />
            </div>
            <button className='w-full rounded-lg shadow-lg py-2 mr-3 mb-4 bg-blue-200 hover:bg-blue-400'>Sign Up</button>
            
        </form>

        </div>
        <Footer/>
    </div>
  )
}

export default SignUp