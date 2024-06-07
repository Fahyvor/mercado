import './index.css'
import Nav from "./components/Nav/Nav"
import Home from './components/Home/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Error from './components/ErrorPage/Error';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import SellerRegister from './components/SellerRegister/SellerRegister';
import Seller from './components/Seller/Seller';
import Goods from './components/Goods/Goods';
import Services from './components/Services/Services';
import AdminDashboard from './components/Admin-Dashboard/AdminDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='font-nunito'>
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/update-profile' element={<UpdateProfile />} />
          <Route path='/seller-registration' element={<SellerRegister />} />
          <Route path='/seller' element={<Seller />} />
          <Route path='/goods' element={<Goods />} />
          <Route path='/services' element={<Services />} />
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
