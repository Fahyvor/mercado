import UpdateImage from '../../assets/update-profile.svg'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
const UpdateProfile = () => {

    const [password, setPassword] = useState(true)

    return (
        <div className="px-[8%] flex lg:flex-row md:flex-row flex-col gap-4 items-center w-full p-6">
            <div className="login_image lg:w-1/2 md:w-1/2 w-full p-[7%]">
                <img src={UpdateImage} alt="" />
            </div>
        
            <div className="login_form lg:w-1/2 md:w-1/2 w-full px-[8%] flex flex-col gap-4">
                <p className="text-3xl font-semibold">Get Started with Mecardo</p>
                <p>Welcome to Merado! Update your details</p>
            
            <div className="login_form flex flex-col gap-5">
                <input type="text" placeholder="First Name" className="outline-none border-2 rounded-lg p-2" required/>
                <input type="text" placeholder="Last Name" className="outline-none border-2 rounded-lg p-2" required/>
                <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    className="outline-none border-2 rounded-lg p-2 w-full mt-1"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                />
                <input type="text" placeholder="Address" className="outline-none border-2 rounded-lg p-2" required/>
                <input type="text" placeholder="User Type" className="outline-none border-2 rounded-lg p-2 hidden" required/>
                <input type="text" placeholder="Email" className="outline-none border-2 rounded-lg p-2" required/>
                <div className='flex w-full items-center relative'>
                    <input type={password === true ? "password" : "text"} placeholder="Password" className="outline-none border-2 rounded-lg p-2 w-full" required />
                    {password === true ? 
                    <FaRegEye onClick={() => setPassword(!password)} className='h-4 w-4 absolute right-5'/> :
                    <FaRegEyeSlash onClick={() => setPassword(!password)}  className='h-4 w-4 absolute right-5'/>
                    }
                </div>

                <div className='flex w-full items-center relative'>
                    <input type={password === true ? "password" : "text"} placeholder="Confirm Password" className="outline-none border-2 rounded-lg p-2 w-full" required />
                    {password === true ? 
                    <FaRegEye onClick={() => setPassword(!password)} className='h-4 w-4 absolute right-5'/> :
                    <FaRegEyeSlash onClick={() => setPassword(!password)}  className='h-4 w-4 absolute right-5'/>
                    }
                </div>
                <button className='bg-green-500 rounded-lg py-2 text-white font-semibold hover:bg-gray-800'>Update Profile</button>
            </div>
            </div>
        </div>
    )
  }
  
  export default UpdateProfile