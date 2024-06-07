import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginImage from '../../assets/login.svg';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { API_URL } from '../axios';

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [redirectDelay, setRedirectDelay] = useState(2000);

    useEffect(() => {
        if (!isSubmitting) return;

        const login = async () => {
            try {
                const response = await axios.post(`${API_URL}user/login`, { email, password });
                const { token, user } = response.data;

                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                toast.success(response.data.message);

                // Reset form fields and redirect
                setEmail('');
                setPassword('');
                setTimeout(() => {
                    window.location.href="/"
                }, redirectDelay)
            } catch (error) {
                console.error('There was a problem with your axios operation:', error);
                toast.error(error.response?.data?.message || 'Login failed.');
            } finally {
                setIsSubmitting(false);
            }
        };

        login();
    }, [isSubmitting, email, password]);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    };

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className="px-[8%] flex lg:flex-row md:flex-row flex-col gap-4 items-center w-full p-6">
            <div className="login_image lg:w-1/2 md:w-1/2 w-full p-[7%]">
                <img src={LoginImage} alt="Login" />
            </div>
            <div className="login_form lg:w-1/2 md:w-1/2 w-full px-[8%] flex flex-col gap-4">
                <p className="text-3xl font-semibold">Sign in to Mecardo</p>
                <p>Welcome back to Merado! Enter your email to get started.</p>
                <form className="login_form flex flex-col gap-5" onSubmit={handleLogin}>
                    <div className="toastify-message">
                        <ToastContainer />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="outline-none border-2 rounded-lg p-2"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="flex w-full items-center relative">
                        <input
                            type={passwordShown ? 'text' : 'password'}
                            placeholder="Password"
                            className="outline-none border-2 rounded-lg p-2 w-full"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div onClick={togglePasswordVisibility} className="h-4 w-4 absolute right-5 cursor-pointer">
                            {passwordShown ? <FaRegEyeSlash /> : <FaRegEye />}
                        </div>
                    </div>
                    <a href="/forgot-password" className="font-semibold text-right text-green-500">
                        Forgot Password
                    </a>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`rounded-lg py-2 text-white font-semibold ${
                            isSubmitting ? 'bg-gray-800' : 'bg-green-500 hover:bg-gray-800'
                        }`}
                    >
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </button>
                    <p>
                        Don&apos;t have an account?{' '}
                        <a href="/register" className="font-semibold text-green-500">
                            Sign Up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
