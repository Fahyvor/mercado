import { useState } from 'react';
import axios from 'axios';
import ForgotImage from '../../assets/forgot-password.svg';
import { API_URL } from '../axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [redirectDelay, setRedirectDelay] = useState(2000);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post(`${API_URL}user/forgot_password`, { email });
            
            if (response.status === 200) {
                toast.success(response.data.message);
                setTimeout(() => {
                    window.location.href="/login"
                })
            } else {
                toast.error(response.data.message || 'Failed to send reset email.');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Reset Password failed.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="px-[8%] flex lg:flex-row md:flex-row flex-col gap-4 items-center w-full p-6">
            <div className="login_image lg:w-1/2 md:w-1/2 w-full p-[7%]">
                <img src={ForgotImage} alt="" />
            </div>
        
            <div className="login_form lg:w-1/2 md:w-1/2 w-full px-[8%] flex flex-col gap-4">
                <p className="text-3xl font-semibold">Forgot your Password?</p>
                <p>Welcome back to Merado! Enter your email to reset your password.</p>
            
                <form className="login_form flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="toastify-message">
                        <ToastContainer />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        className="outline-none border-2 rounded-lg p-2" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className='bg-green-500 rounded-lg py-2 text-white font-semibold hover:bg-gray-800'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
