import React from 'react';
import './Login.css';
import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
import {Routes, Route} from 'react-router-dom'
import SignupForm from './SignupForm'

function Login() {
  return (
    <div className=''>
        <div className='grid grid-cols-12 w-full h-screen'>
            {/* ---Left pane---- */}
            <div className="col-span-12 md:col-span-5 w-full h-screen">
                <div className='bg-gray-100  md:border-r-2 md:border-gray-700 h-screen px-6 py-4 left-pane' >
                    <div className="flex flex-col">
                        <div className='flex justify-start items-start absolute bottom-0'>
                            <p className='tracking-tighter'>copyright kooltech concept </p>
                        </div>
                        <div className='flex'>
                            <h1 className='font-bold text-[22px]'>Health<span className='text-red-600'>e</span></h1>
                        </div>
                        <div className="flex flex-col mt-36 justify-center items-center">
                        <Routes>
                            <Route element={<LoginForm/>} path="/" />  
                            <Route element={<SignupForm/>} path="/signupForm" />  
                        </Routes>
                        </div>
                           
                    </div>
                </div>
            </div>
            {/* ---Right pane--- */}
            <div className="col-span-0 md:col-span-7 bg-white h-screen right-pane">

            </div>
        </div>
    </div>
  )
}

export default Login