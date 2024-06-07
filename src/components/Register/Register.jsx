import RegisterImage from '../../assets/register.svg'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios'
import { API_URL } from '../axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const [password, setPassword] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false);
    

    const formatphone = (value) => {
        // Remove all non-digit characters from the input
        const numbers = value.replace(/[^\d]/g, '');
    
        // Break the string into parts for easier formatting
        const chars = numbers.split('');
        let formattedNumber = '';
    
        // Loop through each character and add dashes as needed
        for (let i = 0; i < chars.length; i++) {
          if (i === 4 || i === 7) {
            formattedNumber += '-'; 
          }
          formattedNumber += chars[i];
        }
    
        // Limit the length to match the pattern (12 characters including dashes)
        return formattedNumber.slice(0, 13);
      };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        userType: 'user',
        email: '',
        password: '',
        // confirmPassword: '',
    });

    const handleChange = (e) => {
        if (e.target.name === 'phone') {
            // Format the phone number on input
            const formattedphone = formatphone(e.target.value);
            setFormData({ ...formData, phone: formattedphone });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
            const response = await axios.post(`${API_URL}user/register`, formData);
    
            if (response && response.data) {
                console.log('Response Data:', response.data);
                console.log('Message:', response.data.message); 
                toast(response.data.message);
                setFormData({ firstName: '', lastName: '', email: '', password: '', address: '', phone: '', confirmPassword: ''  }); 
                window.location.href="/login"
            } else {
                console.error('Unexpected response structure:', response);
                toast('Registration successful, but no message returned.');
            }
        } catch (error) {
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
                toast.error(error.response.data.message || 'Registration failed.');
            } else if (error.request) {
                console.error('No response received:', error.request);
                toast.error('No response from server. Please check your network connection or try again later.');
            } else {
                console.error('Error message:', error.message);
                toast.error('An error occurred. Please try again.');
            }
            console.error('Error config:', error.config);
        }
        finally {
            setIsSubmitting(false); // Enable the button again
        }
    };
    
    
    return (
        <div className="px-[8%] flex lg:flex-row md:flex-row flex-col gap-4 items-center w-full p-6">
            <div className="login_image lg:w-1/2 md:w-1/2 w-full p-[7%]">
                <img src={RegisterImage} alt="" />
            </div>
        
            <div className="register_form lg:w-1/2 md:w-1/2 w-full px-[8%] flex flex-col gap-4">
                <div className='toastify-message'>
                    <ToastContainer />
                </div>
                <p className="text-3xl font-semibold">Get Started with Mecardo</p>
                <p>Welcome to Merado! Enter your details to get started.</p>
            
            <form className="register_form flex flex-col gap-5" onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" className="outline-none border-2 rounded-lg p-2" required
                onChange={handleChange}
                name='firstName'
                value={formData.firstName}
                />
                <input type="text" placeholder="Last Name" className="outline-none border-2 rounded-lg p-2" required
                onChange={handleChange}
                name='lastName'
                value={formData.lastName}
                />
                <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    className="outline-none border-2 rounded-lg p-2 w-full mt-1"
                    pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                    required
                    onChange={handleChange}
                    name='phone'
                    value={formData.phone}
                />
                <input type="text" placeholder="Address" className="outline-none border-2 rounded-lg p-2" required
                onChange={handleChange}
                name='address'
                value={formData.address}
                />
                <input type="text" placeholder="User Type" className="outline-none border-2 rounded-lg p-2 hidden" required
                onChange={handleChange}
                name='userType'
                value='user'
                />
                <input type="text" placeholder="Email" className="outline-none border-2 rounded-lg p-2" required 
                onChange={handleChange}
                name='email'
                value={formData.email}
                />
                <div className='flex w-full items-center relative'>
                    <input type={password === true ? "password" : "text"} placeholder="Password" className="outline-none border-2 rounded-lg p-2 w-full" required 
                    onChange={handleChange}
                    name='password'
                    value={formData.password}
                    />
                    {password === true ? 
                    <FaRegEye onClick={() => setPassword(!password)} className='h-4 w-4 absolute right-5'/> :
                    <FaRegEyeSlash onClick={() => setPassword(!password)}  className='h-4 w-4 absolute right-5'/>
                    }
                </div>

                <div className='flex w-full items-center relative'>
                    <input type={password === true ? "password" : "text"} placeholder="Confirm Password" className="outline-none border-2 rounded-lg p-2 w-full" required 
                    onChange={handleChange}
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    />
                    {password === true ? 
                    <FaRegEye onClick={() => setPassword(!password)} className='h-4 w-4 absolute right-5'/> :
                    <FaRegEyeSlash onClick={() => setPassword(!password)}  className='h-4 w-4 absolute right-5'/>
                    }
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`rounded-lg py-2 text-white font-semibold ${
                        isSubmitting ? 'bg-gray-800' : 'bg-green-500 hover:bg-gray-800'
                    }`}
                >
                    {isSubmitting ? 'Registering...' : 'Register'}
                </button>
                <p>Already  have an account? <a href="/login" className='font-semibold text-green-500'>Sign In</a></p>
            </form>
            </div>
        </div>
    )
  }
  
  export default Register