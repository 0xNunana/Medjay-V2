import React from 'react';
import Footer from '../components/Footer';

const SignIn = () => {
return (
    <div>
        <div className='flex justify-center max-w-screen-xl'>
<div className='flex-col-8 justify-center'>
    <img src='/Meddesign.png' width={800}/>
     </div>
<div className="relative  flex-col-4  mt-5 overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center bg-gradient text-blue-400 uppercase">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-blue-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-400 rounded-md focus:outline-none focus:bg-green-600">
                            Login
                        </button>
                    </div>
                </form>
                
                
                            

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                
                    Don't have an account?
                    <a
                        href="/SignUp"
                        className="font-medium text-blue-400 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
       
    </div>
    <Footer/>
    </div>
    
     
  )
}

	


export default SignIn;
