import LoginImage from '../../assets/login.svg'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
const Login = () => {

    const [password, setPassword] = useState(true)

    return (
        <div className="px-[8%] flex lg:flex-row md:flex-row flex-col gap-4 items-center w-full p-6">
            <div className="login_image lg:w-1/2 md:w-1/2 w-full p-[7%]">
                <img src={LoginImage} alt="" />
            </div>
        
            <div className="login_form lg:w-1/2 md:w-1/2 w-full px-[8%] flex flex-col gap-4">
                <p className="text-3xl font-semibold">Sign in to Mecardo</p>
                <p>Welcome back to Merado! Enter your email to get started.</p>
            
            <div className="login_form flex flex-col gap-5">
                <input type="text" placeholder="Email" className="outline-none border-2 rounded-lg p-2" required/>
                <div className='flex w-full items-center relative'>
                    <input type={password === true ? "password" : "text"} placeholder="Password" className="outline-none border-2 rounded-lg p-2 w-full" required />
                    {password === true ? 
                    <FaRegEye onClick={() => setPassword(!password)} className='h-4 w-4 absolute right-5'/> :
                    <FaRegEyeSlash onClick={() => setPassword(!password)}  className='h-4 w-4 absolute right-5'/>
                    }
                </div>
                <a href="/forgot-password" className='font-semibold text-right text-green-500'>Forgot Password</a>
                <button className='bg-green-500 rounded-lg py-2 text-white font-semibold hover:bg-gray-800'>Login</button>
                <p>Don&apos;t have an account? <a href="/register" className='font-semibold text-green-500'>Sign Up</a></p>
            </div>
            </div>
        </div>
    )
  }
  
  export default Login