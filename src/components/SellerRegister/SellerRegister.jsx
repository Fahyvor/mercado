import UpdateImage from '../../assets/update-profile.svg'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { API_URL } from '../axios'

const busStops = [
    {
        name: "Area 10"
    },
    {
        name: "Barracks"
    },
    {
        name: "Bridge After Zone 3"
    },
    {
        name: "Zone"
    },
    {
        name: "NNPC"
    },
    {
        name: "Jabi Central Bus Station"
    },
    {
        name: "Central Mosque-Masalachi"
    },
    {
        name: "Sky Memorial"
    },
    {
        name: "Eagle Square"
    },
    {
        name: "Wuse Market"
    }, 
    {
        name: "Area 8"
    },
    {
        name: "Arab Junction"
    },
    {
        name: "Under Bridge"
    },
    {
        name: "Last Keke Napep"
    },
    {
        name: "Power House Junction"
    },
    {
        name: "Public Transport Hub"
    },
    {
        name: "Area One"
    },
    {
        name: "War College"
    },
    {
        name: "Zone 6"
    },{
        name: "Zone 4"
    },
    {
        name: "Rocha's Plaza"
    },
    {
        name: "Deeper Life"
    },
    {
        name: "CBN"
    },
    {
        name: "Life Camp"
    },
    {
        name: "Kabusa"
    },
    {
        name: "Wuse"
    },
    {
        name: "Gilmore"
    },
    {
        name: "Villa Bridge"
    },
    {
        name: "Zone 4"
    },
    {
        name: "Gaduwa Estate"
    },
    {
        name: "Aya"
    },
    {
        name: "Finance Bridge"
    },
    {
        name: "Dape"
    },
    {
        name: "Park & Ride"
    },  
    {
        name: "Zone 7"
    },
    {
        name: "Area 3 Junction"
    },
    {
        name: "Tafawa Belewa"
    },
    {
        name: "waterboard Junction"
    },
    {
        name: "Utaka Motors and Bus Terminal"
    },
    {
        name: "30 Signboard"
    },
    {
        name: "Peace Park"
    },
    {
        name: "Utaka (NANLIN) Station"
    },
    {
        name: "Berger"
    },
    {
        name: "Wuse General Hospital First Gate"
    },
    {
        name: "Sheraton"
    },
    {
        name: "Customs Bus Stop"
    },
    {
        name: "Wuse District Hospital"
    },
    {
        name: "Ministerial/Customs"
    },
    {
        name: "Head of Service"
    },
    {
        name: "2nd Gate"
    },
    {
        name: "Ekitikete Mass Transit"
    },
    {
        name: "Kugbo"
    },
    {
        name: "C.N Okoli"
    },
    {
        name: "Car-Wash"
    },
    {
        name: "Lugbe"
    },
    {
        name: "Mopol"
    },
    {
        name: "Barracks"
    },
    {
        name: "Amature Auto"
    },
    {
        name: "El-rufai"
    },
    {
        name: "Greener Line Transport Limited"
    },
    {
        name: "GSM Village"
    },
    {
        name: "AUMTCO"
    },
    {
        name: "GUO Transport - Utako Terminal"
    },
    {
        name: "Central Road"
    },
]
const SellerRegister = () => {

    const [formData, setFormData] = useState({
        busStop: '',
        renderingType: '',
        category: ''
      });
      const [error, setError] = useState('');
      const [successMessage, setSuccessMessage] = useState('');
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('No token found');
          }
    
          const config = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          };
    
          const response = await axios.post(`${API_URL}register_seller`, formData, config);
          if (response.data.status === 'success') {
            setSuccessMessage(response.data.message);
          } else {
            setError(response.data.message);
          }
        } catch (error) {
          console.error('Error registering as seller:', error.message);
          setError('Registration failed. Please try again.');
        }
      };

    return (
        <div className="px-[8%] flex lg:flex-row md:flex-row flex-col gap-4 items-center w-full p-6">
            <div className="login_image lg:w-1/2 md:w-1/2 w-full p-[7%]">
                <img src={UpdateImage} alt="" />
            </div>
        
            <div className="login_form lg:w-1/2 md:w-1/2 w-full px-[8%] flex flex-col gap-4">
                <p className="text-3xl font-semibold">Get Started with Mecardo</p>
                <p>Become a Seller on Merado!</p>
            
            <form className="login_form flex flex-col gap-5" onSubmit={handleSubmit}>
                <select name="busStop" value={formData.busStop} onChange={handleChange} className="outline-none border-2 rounded-lg p-2" required>
                    <option value="">Select Nearest Bus Stop</option>
                    {busStops.map((bus, index) => (
                        <option key={index} value={bus.name}>{bus.name} Bus Stop</option>
                    ))}
                </select>
                <select name="renderingType" value={formData.renderingType} onChange={handleChange} className="outline-none border-2 rounded-lg p-2" required>
                    <option value="">What are you offering?</option>
                    <option value="goods">Goods</option>
                    <option value="services">Services</option>
                </select>
                <select  name="category" value={formData.category} onChange={handleChange}  className="outline-none border-2 rounded-lg p-2" required>
                    <option value="">Category</option>
                    <option value="apparel">Apparel & Fashion</option>
                    <option value="electronics">Electronics</option>
                    <option value="home-and-furniture">Home and Furniture</option>
                    <option value="beauty">Beauty & Personal care</option>
                    <option value="health">Health & Wellness</option>
                    <option value="books-movies-music">Books, Movies & Music</option>
                    <option value="toy">Toy & Games</option>
                    <option value="grocery">Grocery & Gourmet</option>
                    <option value="automative">Automative & Industrial</option>
                    <option value="office">Office & School Supplies</option>
                    <option value="travel">Travel & Luggage</option>
                    <option value="gifts">Gift & Special Occassions</option>
                    </select>
                <button type='submit' className='bg-green-500 rounded-lg py-2 text-white font-semibold hover:bg-gray-800'>Register as Seller</button>
            </form>
            </div>
        </div>
    )
  }
  
  export default SellerRegister