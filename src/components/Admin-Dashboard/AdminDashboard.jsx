    import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'; 

const AdminDashboard = () => {
    const handlePriceChange = (e) => {
        const inputPrice = e.target.value.replace(/\D/g, ''); 
        const formattedPrice = inputPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        setPrice(formattedPrice);
    };
      
    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        if (selectedImages.length + images.length > 4) {
          setError('You can only upload up to 4 images.');
        } else {
          setError('');
          setImages(prevImages => [...prevImages, ...selectedImages]);
        }
      };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
          productName,
          description,
          price,
          images,
        });
      };
    
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [images, setImages] = useState([]);

    const [activeNav, setShowActiveNav] = useState('product')
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='w-full flex gap-3'>
            <div className="w-[5%] md:w-[20%] lg:w-[20%] ">
                <button className="lg:hidden p-4 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <GiHamburgerMenu className="w-6 h-6" />
                </button>   
                <div className={`dashboard_nav bg-gray-200 flex flex-col gap-4 w-full h-full min-h-screen py-3
                ${isMenuOpen ? 'absolute top-40' : 'hidden'}
                lg:block md:block`}>
                    <p className="bg-green-500 p-2 text-white cursor-pointer shadow-md" onClick={() => {
                        setShowActiveNav('product');
                        setIsMenuOpen(false);
                    }}>Products</p>
                    <p className="bg-green-500 p-2 text-white cursor-pointer shadow-md" onClick={() => {
                        setShowActiveNav('sellers');
                        setIsMenuOpen(false);
                    }}>Sellers/Vendors</p>
                    {/* <div className="add_products flex gap-3 items-center shadow-md my-[10%] p-3 bg-gray-100 cursor-pointer" onClick={() => {
                        setShowActiveNav('create');
                        setIsMenuOpen(false)
                    }}>
                        <IoAddCircleOutline className="w-4 h-4"/>
                        <p>Add Product</p>
                    </div> */}
                </div>
            </div>

            <div className="dashboard_main w-full ">
                <div className={activeNav === 'product' ? `w-full p-5` : `hidden`}>

                </div>

                <div className={activeNav === 'create' ? `w-full p-5` : `hidden`}>
                    <p className="text-2xl font-semibold">Create Product</p>

                    <form onSubmit={handleSubmit} className="py-[5%] flex flex-col gap-5">
                    {/* Product Name */}
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="outline-none border-2 rounded-lg p-2 w-full"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                    </div>

                    {/* Description */}
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        placeholder="Description"
                        className="outline-none border-2 rounded-lg p-2 w-full h-[40vh] resize-none"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    </div>

                    {/* Price */}
                    <div>
                    <label className="block text-sm font-medium text-gray-700">Price (N)</label>
                    <input
                        type="text"
                        placeholder="Price (N)"
                        className="outline-none border-2 rounded-lg p-2 w-full"
                        value={price}
                        onChange={handlePriceChange}
                        required
                    />
                    </div>

                    {/* Images */}
                    <div>
                    <div className="image-1">
                        <label className="block text-sm font-medium text-gray-700" >Images</label>
                        <label htmlFor="file" className="cursor-pointer text-green-500">Upload Images</label>
                        <input
                            type="file"
                            id="file"
                            multiple
                            accept="image/*"
                            className="outline-none border-2 rounded-lg p-2 w-full hidden"
                            onChange={handleImageChange}
                        />
                    </div>
                    {/* Display error message if more than 4 images are selected */}
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    {/* Image Previews */}
                    <div className="mt-2 flex flex-wrap gap-2">
                        {images.map((image, index) => (
                        <div key={index} className="w-24 h-24 border rounded-lg overflow-hidden">
                            <img
                            src={URL.createObjectURL(image)}
                            alt={`Preview ${index}`}
                            className="object-cover w-full h-full"
                            />
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 lg:w-[25%] md:w-[50%] w-full"
                    >
                        Create Product
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
  }
  
  export default AdminDashboard