import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const categories = [
    {
        name: "Vegetables & Fruits",
        link: ""
    },
    {
        name: "Breakfast & instant food",
        link: ""
    },
    {
        name: "Bakery & Biscuits",
        link: ""
    },
    {
        name: "Atta, rice & dal",
        link: ""
    },
    {
        name: "Sauces & spreads",
        link: ""
    },
    {
        name: "Organic & gourmet",
        link: ""
    },
    {
        name: "Baby care",
        link: ""
    },
    {
        name: "Cleaning essentials",
        link: ""
    },
    {
        name: "Personal care",
        link: ""
    },
    {
        name: "Dairy, bread & eggs",
        link: ""
    },
    {
        name: "Cold drinks & juices",
        link: ""
    },
    {
        name: "Tea, coffee & drinks",
        link: ""
    },
    {
        name: "Masala, oil & more",
        link: ""
    },
    {
        name: "Chicken, meat & fish",
        link: ""
    },
    {
        name: "Paan corner",
        link: ""
    },
    {
        name: "Pharma & wellness",
        link: ""
    },
    {
        name: "Home & office",
        link: ""
    },
    {
        name: "Pet care",
        link: ""
    },
]

const getToKnow = [
    {
        name: "Company",
        link: ""
    },
    {
        name: "About",
        link: ""
    },
    {
        name: "Blog",
        link: ""
    },
    {
        name: "Help center",
        link: ""
    },
    {
        name: "Our value",
        link: ""
    },
]

const forCustomers = [
    {
        name: "Payments",
        link: ""
    },
    {
        name: "Shipping",
        link: ""
    },
    {
        name: "Product Returns",
        link: ""
    },
    {
        name: "FAQ",
        link: ""
    },
    {
        name: "Shop Checkout",
        link: ""
    },
]
const Footer = () => {

    return (
    <div className="px-[8%] bg-gray-100 min-h-[50vh]">
      <div className="flex gap-10 p-3">
            <div className="categories">
                <p className="text-sm font-semibold">Categories</p>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 pt-3">
                {categories.map((footerCategory, index) => (
                    <div key={index}>
                        <p className="text-sm font-semibold text-gray-600 hover:text-green-500 cursor-pointer">{footerCategory.name}</p>
                    </div>
                ))}
                </div>
            </div>
            
            <div className="get_to_know">
                <p className="text-sm font-semibold">Get to know us</p>
                <div className="grid grid-cols-1 gap-5 pt-3">
                    {getToKnow.map((know, index) => (
                        <div key={index}>
                            <p className="text-sm font-semibold text-gray-600 hover:text-green-500 cursor-pointer">{know.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="for_customers">
                <p className="text-sm font-semibold">For customers</p>
                <div className="grid grid-cols-1 gap-5 pt-3">
                    {forCustomers.map((customers, index) => (
                        <div key={index}>
                            <p className="text-sm font-semibold text-gray-600 hover:text-green-500 cursor-pointer">{customers.name}</p>
                        </div>
                    ))}
                </div>
            </div>
      </div>
      
        <div className="copyright_container flex lg:flex-row md:flex-row flex-col justify-between items-center text-sm py-4 border-t-2">
            <p>&copy; 2024 Mercado. All rights reserved. Developed by
                <a href="https:favour-portfolio.vercel.app" className="cursor-pointer hover:text-green-400 font-medium mx-2 text-gray-500">Elrey</a>
            </p>
            
            <div className="footer_socials flex items-center gap-4">
                <p>Follow us on </p>
                <FaFacebook className="h-4 w-4 cursor-pointer"/>
                <AiFillTwitterCircle className="h-4 w-4 cursor-pointer"/>
                <AiFillInstagram className="h-4 2-4 cursor-pointer" />
            </div>
        </div>
    </div>
    )
  }
  
  export default Footer