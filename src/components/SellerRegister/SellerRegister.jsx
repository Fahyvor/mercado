import UpdateImage from '../../assets/update-profile.svg'
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
    }
]
const SellerRegister = () => {


    return (
        <div className="px-[8%] flex lg:flex-row md:flex-row flex-col gap-4 items-center w-full p-6">
            <div className="login_image lg:w-1/2 md:w-1/2 w-full p-[7%]">
                <img src={UpdateImage} alt="" />
            </div>
        
            <div className="login_form lg:w-1/2 md:w-1/2 w-full px-[8%] flex flex-col gap-4">
                <p className="text-3xl font-semibold">Get Started with Mecardo</p>
                <p>Become a Seller on Merado!</p>
            
            <div className="login_form flex flex-col gap-5">
                <select className="outline-none border-2 rounded-lg p-2" required>
                    <option value="">Select Nearest Bus Stop</option>
                    <option value="bus-stop-1">Bus Stop 1</option>
                    <option value="bus-stop-2">Bus Stop 2</option>
                    <option value="bus-stop-3">Bus Stop 3</option>
                </select>
                    <select className="outline-none border-2 rounded-lg p-2" required>
                    <option value="">What are you offering?</option>
                    <option value="goods">Goods</option>
                    <option value="services">Services</option>
                </select>
                <select className="outline-none border-2 rounded-lg p-2" required>
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
                <button className='bg-green-500 rounded-lg py-2 text-white font-semibold hover:bg-gray-800'>Register as Seller</button>
            </div>
            </div>
        </div>
    )
  }
  
  export default SellerRegister