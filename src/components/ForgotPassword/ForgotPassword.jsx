import ForgotImage from '../../assets/forgot-password.svg'

const ForgotPassword = () => {

    return (
        <div className="px-[8%] flex lg:flex-row md:flex-row flex-col gap-4 items-center w-full p-6">
            <div className="login_image lg:w-1/2 md:w-1/2 w-full p-[7%]">
                <img src={ForgotImage} alt="" />
            </div>
        
            <div className="login_form lg:w-1/2 md:w-1/2 w-full px-[8%] flex flex-col gap-4">
                <p className="text-3xl font-semibold">Forgot your Password?</p>
                <p>Welcome back to Merado! Enter your email to reset your password.</p>
            
            <div className="login_form flex flex-col gap-5">
                <input type="text" placeholder="Email" className="outline-none border-2 rounded-lg p-2" required/>
                <button className='bg-green-500 rounded-lg py-2 text-white font-semibold hover:bg-gray-800'>Reset Password</button>
            </div>
            </div>
        </div>
    )
  }
  
  export default ForgotPassword