import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick'
import Banner1 from '../../assets/banner/grocery-banner.png'
import Banner2 from '../../assets/banner/banner-4.jpg'
import Banner4 from '../../assets/banner/ad-banner-3.jpg'
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

const featuredCategories = [
   {
      image: Product1,
      name: 'Snacks'
   },
   {
      image: Product2,
      name: 'Snacks'
   },
   {
      image: Product3,
      name: 'Snacks'
   }
]

const popularProducts = [
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

var settings = {
       
   dots: false,
   infinite: true,
   speed: 1000,
   autoplay: true,
   autoplaySpeed: 4000,
   slidesToShow:3,
   slidesToScroll: 1,
   pauseOnHover: true,
   responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           initialSlide: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       }
   ]
 };

const Home = () => {

    return (
      <div className="px-[8%]">
         <div className="home_banner py-4 w-full">
             <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={2000}
             >
                <div className="w-full bg-cover bg-center rounded-xl bg-no-repeat"
                   style={{ backgroundImage: `url(${Banner1})`, height: '50vh' }}
                >
                   {/* <p>Fahyvor</p> */}
               </div>
               <div className="w-full bg-cover bg-center rounded-xl bg-no-repeat"
                  style={{ backgroundImage: `url(${Banner2})`, height: '50vh' }}
               >
               </div>  
            </Carousel>
          </div>
          
          <div className="featured-categories py-4">
             <p className="text-xl font-bold">Featured Categories</p>
            
             <div className="featured_categories_container w-full">
                <Slider {...settings}  >
                   {featuredCategories.map((featuredCategory, index) => (
                     <div className=" p-2" key={index}>
                        <div className="featured_one flex flex-col gap-3">
                           <img src={featuredCategory.image} alt="" className="rounded-xl object-cover " />
                           <p className="text-center font-semibold text-sm">{featuredCategory.name}</p>
                        </div>
                     </div>
                  ))}
                </Slider>
             </div>
          </div>

          <div className="fruits_and_vegetables flex gap-3 w-full py-4">
             <div className="fruits w-1/2 p-4 bg-cover bg-center rounded-xl bg-no-repeat"
                  style={{ backgroundImage: `url(${Banner1})` }}
            >
                <p>Kaay</p>
             </div>

             <div className="freshy_baked_buns w-1/2 p-4 bg-cover bg-center rounded-xl bg-no-repeat"
                  style={{ backgroundImage: `url(${Banner4})` }}
             >
                <p>gegegee</p>
             </div>
          </div>

          <div className="popular_products py-6">
             <p className="text-xl font-bold">Popular Products</p>

             <div className="popular_products_container  grid lg:grid-cols-5 gap-6">
                {popularProducts.map((product, index) => (
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
      </div>
    )
  }
  
  export default Home