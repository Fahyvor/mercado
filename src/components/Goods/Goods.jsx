import Product1 from '../../assets/products/product-1.jpg'
import Product2 from '../../assets/products/product-2.jpg'
import Product3 from '../../assets/products/product-3.jpg'
import Product4 from '../../assets/products/product-img-1.jpg'
import Product5 from '../../assets/products/product-img-2.jpg'
import Product6 from '../../assets/products/product-img-3.jpg'
import Product7 from '../../assets/products/product-img-4.jpg'
import Product8 from '../../assets/products/product-img-5.jpg'
import Product9 from '../../assets/products/product-img-6.jpg'
import Product10 from '../../assets/products/product-img-7.jpg'
import Product11 from '../../assets/products/product-img-8.jpg'
import { FiPlus } from "react-icons/fi";


const Products = [
    {
       image: Product1,
       category: 'Bakery and Biscuits',
       brand: 'Elrey Technologies',
       rating: '',
       quantity: '10',
       main_price: '4',
       old_price: '7'
    },
    {
       image: Product2,
       category: 'Bakery and Biscuits',
       brand: 'Elrey Technologies',
       rating: '',
       quantity: '23',
       main_price: '7',
       old_price: '10'
    },
    {
       image: Product3,
       category: 'Bakery and Biscuits',
       brand: 'Elrey Technologies',
       rating: '',
       quantity: '15',
       main_price: '9',
       old_price: '23'
    },
    {
       image: Product4,
       category: 'Bakery and Biscuits',
       brand: 'Elrey Technologies',
       rating: '',
       quantity: '23',
       main_price: '45',
       old_price: '9'
    },
    {
       image: Product5,
       category: 'Bakery and Biscuits',
       brand: 'Elrey Technologies',
       rating: '',
       quantity: '17',
       main_price: '24',
       old_price: '43'
    },
    {
       image: Product6,
       category: 'Bakery and Biscuits',
       brand: 'Elrey Technologies',
       rating: '',
       quantity: '34',
       main_price: '98',
       old_price: '23'
    },
    {
       image: Product7,
       category: 'Bakery and Biscuits',
       brand: 'Elrey Technologies',
       rating: '',
       quantity: '14',
       main_price: '35',
       old_price: '23'
    },
    {
       image: Product8,
       category: 'Bakery and Biscuits',
       brand: 'Elrey Technologies',
       rating: '',
       quantity: '34',
       main_price: '76',
       old_price: '23'
    },
    {
       image: Product9,
       category: 'Bakery and Biscuits',
       brand: 'Elrey Technologies',
       rating: '',
       quantity: '',
       main_price: '',
       old_price: ''
    },
    {
       image: Product10,
       category: 'Bakery and Biscuits',
       brand: 'Elrey Technologies',
       rating: '',
       quantity: '',
       main_price: '',
       old_price: ''
    },
    {
       image: Product11,
       category: 'Bakery and Biscuits',
       brand: 'Elrey Technologies',
       rating: '',
       quantity: '',
       main_price: '',
       old_price: ''
    }
 ]

const Goods = () => {

    return (
    <div className='w-full px-[4%] flex flex-col gap-5 py-6'>
        <p className='font-semibold text-2xl'>Goods</p>

        <div className="popular_products_container  grid lg:grid-cols-5 md:grid-cols-3 gap-6">
                {Products.map((product, index) => (
                   <div key={index} className="product_main flex flex-col border-2 rounded-lg p-3 hover:border-green-500 hover:border-1">
                      <img src={product.image} alt="" className="object-contain w-[70%] my-[4%] mx-auto rounded-xl" />
                      <p className="text-gray-400 font-semibold text-xs mt-[6%]">{product.category}</p>
                      <p className="text-gray-950 hover:text-green-500 font-semibold text-md">{product.brand}</p>
                      <div className="quantity my-[4%]">
                         <p className="text-xs font-semibold">Qty: {product.quantity}</p>
                      </div>
                      <div className="price_and_add flex justify-between items-center">
                         <p className="text-sm font-semibold"><del>N</del>{product.old_price} <del><span className="mx-2 text-gray-600 font-normal">N{product.main_price}</span></del></p>
                         <div className="add_button bg-green-500 text-white rounded-lg px-3 flex gap-2 items-center py-1 hover:bg-green-600
                         cursor-pointer">
                           <FiPlus className="w-4 h-5 text-white"/>
                            <p className="text-xs font-semibold">Add</p>
                         </div>
                      </div>
                   </div>
                ))}
        </div>    
    </div>
    )
  }
  
  export default Goods