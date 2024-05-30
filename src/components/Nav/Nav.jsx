import { IoSearch, IoLocationOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { GiHamburgerMenu } from 'react-icons/gi'; 
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navCategory = [
    {
        name: "Apparel & Fashion",
        link: "/"
    },
    {
        name: "Electronics",
        link: "/"
    },
    {
        name: "Home & Furniture",
        link: "/"
    },
    {
        name: "Beauty & Personal care",
        link: "/"
    },
    {
        name: "Health and Wellness",
        link: "/"
    },
    {
        name: "Books, Movies & Music",
        link: "/"
    },
    {
        name: "Toy & Games",
        link: "/"
    },
    {
        name: "Grocery & Gourmet",
        link: "/"
    },

    {
        name: "Automative & Industrial",
        link: "/"
    },
    {
        name: "Office & School Suplies",
        link: "/"
    },
    {
        name: "Travel & Luggage",
        link: "/"
    },
    {
        name: "Gift & Special Occassions",
        link: "/"   
    },
]


const Nav = () => {
    const [mobileNav, setShowMobileNav] = useState(false);
    
    useEffect(() => {
        if (mobileNav) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
    
        // Cleanup function to remove the class when the component unmounts or mobileNav changes
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, [mobileNav]);
    return (
      <div>
        <div className="nav_container flex flex-col gap-4 pb-3 border-b-2 border-gray-300">
            <div className="nav_top bg-gray-300 px-[12%]">
                <p className="font-semibold">Super Value Deals - Save with coupons</p>
            </div>
            
            <div className="nav_middle flex gap-3 items-center justify-between px-[12%] w-full">
                <div className="nav_middle_left ">
                    <a href="/"><p className="text-2xl font-bold text-green-500">Mecardo</p></a>
                </div>
                
                <div className="nav_middle_center flex-1 gap-4 items-center px-[5%] lg:flex md:flex hidden">
                    <div className=" flex gap-2 rounded-xl border-2 pr-4 overflow-hidden items-center relative w-full">
                        <input
                        placeholder="Search for products"
                        className="p-3  flex-1 border-none outline-none text-sm"
                        />
                        <IoSearch className="w-4 h-4 left-52"/>
                    </div>
                    <div className="location flex gap-2 border-2 p-3 rounded-xl items-center">
                        <IoLocationOutline className="w-4 h-4"/>
                        <p className="text-sm">Location</p>
                    </div>
                    </div>
                    
                    <div className="flex gap-3 items-center">
                        <CiHeart className="w-4 h-4 cursor-pointer"/>
                        <a href="/profile"><CgProfile className="w-4 h-4 cursor-pointer"/></a>
                        <a href="/cart"><HiOutlineShoppingBag className="w-4 h-4 cursor-pointer"/></a>
                        <GiHamburgerMenu className="lg:hidden md:hidden flex w-4 h-4 text-green-600 cursor-pointer" onClick={() => setShowMobileNav(!mobileNav)}/>
                    </div>
                </div>
                
            <div className="nav_middle_right lg:flex md:flex hidden gap-3 px-[12%]">
                <div className="flex gap-2 items-center hover:bg-green-700 bg-green-600 rounded-xl py-1 px-3 text-sm cursor-pointer duration-500">
                    <HiOutlineSquares2X2 className="h-8 w-8 text-white"/>
                    <p className="text-white font-bold text-am">All Departments</p>
                </div>
                
                <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                    <Menu as="div" className="relative inline-block text-left">
                                
                    <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 hover:shadow-md">
                        Goods
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </MenuButton>
                    </div>

                    <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="/goods"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Goods
                                </a>
                            )}
                            </MenuItem>
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="/services"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Services
                                </a>
                            )}
                            </MenuItem>
                            
                        </div>
                        </MenuItems>
                    </Transition>
                    </Menu>  
                    </div>
                    <div className="flex items-center gap-2">
                    <Menu as="div" className="relative inline-block text-left">
                                
                    <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:shadow-md hover:bg-gray-200">
                        Category
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </MenuButton>
                    </div>

                    <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {navCategory.map((navCategory, index) => (
                            <div key={index}>
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href={navCategory.link}
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                {navCategory.name}
                                </a>
                            )}
                            </MenuItem>
                            </div>
                            ))}

                        </div>
                        </MenuItems>
                    </Transition>
                    </Menu>    
                    </div>
                    
                    <div className="flex items-center gap-2">
                    <Menu as="div" className="relative inline-block text-left">
                                
                    <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:shadow-md hover:bg-gray-200">
                        Seller
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </MenuButton>
                    </div>

                    <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="/seller-registration"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Become A Seller
                                </a>
                            )}
                            </MenuItem>
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="/seller"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Dashboard
                                </a>
                            )}
                            </MenuItem>                           
                        </div>
                        </MenuItems>
                    </Transition>
                    </Menu>   
                    </div>
                    
                    <div className="flex items-center gap-2">
                    <Menu as="div" className="relative inline-block text-left">
                                
                    <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:shadow-md hover:bg-gray-200">
                        Account
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </MenuButton>
                    </div>

                    <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="/update-profile"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Update Profile
                                </a>
                            )}
                            </MenuItem>
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="/reset-password"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Reset Password
                                </a>
                            )}
                            </MenuItem>
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="/orders"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                My Orders
                                </a>
                            )}
                            </MenuItem>
                            <form method="POST" action="#">
                            <MenuItem>
                                {({ focus }) => (
                                <button
                                    type="submit"
                                    className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                    )}
                                >
                                    Sign out
                                </button>
                                )}
                            </MenuItem>
                            </form>
                        </div>
                        </MenuItems>
                    </Transition>
                    </Menu>    
                    </div>
                </div>
            </div>
        </div>
        <div className={mobileNav ? `mobile_nav absolute no-scroll bg-white p-4 gap-3 z-10 w-full h-screen flex flex-col ` : `hidden`}>
            <div className="w-full flex flex-col gap-3">
                <div className=" flex gap-2 rounded-xl border-2 pr-4 overflow-hidden items-center relative w-full">
                    <input
                    placeholder="Search for products"
                    className="p-3  flex-1 border-none outline-none text-sm"
                    />
                    <IoSearch className="w-4 h-4 left-52"/>
                    </div>
                    
                <div className="location flex gap-2 border-2 p-3 rounded-xl items-center">
                    <IoLocationOutline className="w-4 h-4"/>
                    <p className="text-sm">Location</p>
                </div>
            </div>
            <div className="flex-col flex gap-3">
                    <div className="flex gap-2 items-center hover:bg-green-700 bg-green-600 rounded-xl py-1 px-3 text-sm cursor-pointer duration-500">
                        <HiOutlineSquares2X2 className="h-8 w-8 text-white"/>
                        <p className="text-white font-bold text-am">All Departments</p>
                    </div>
                    
                    <div className="flex gap-2 flex-col w-full">
                        <div className="flex items-center gap-2 w-full">
                        <Menu as="div" className="relative inline-block text-left">
                                    
                        <div className="w-full">
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 hover:shadow-md">
                            Goods
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </MenuButton>
                        </div>

                        <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems className="left -0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <MenuItem>
                                {({ focus }) => (
                                    <a
                                    href="/goods"
                                    className={classNames(
                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Goods
                                    </a>
                                )}
                                </MenuItem>
                                <MenuItem>
                                {({ focus }) => (
                                    <a
                                    href="/services"
                                    className={classNames(
                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Services
                                    </a>
                                )}
                                </MenuItem>
                                
                            </div>
                            </MenuItems>
                        </Transition>
                        </Menu>  
                        </div>
                        <div className="flex items-center gap-2">
                        <Menu as="div" className="relative inline-block text-left">
                                    
                        <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:shadow-md hover:bg-gray-200">
                            Category
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </MenuButton>
                        </div>

                        <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems className="left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {navCategory.map((navCategory, index) => (
                                <div key={index}>
                                <MenuItem>
                                {({ focus }) => (
                                    <a
                                    href={navCategory.link}
                                    className={classNames(
                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    {navCategory.name}
                                    </a>
                                )}
                                </MenuItem>
                                </div>
                                ))}

                            </div>
                            </MenuItems>
                        </Transition>
                        </Menu>    
                        </div>
                        
                        <div className="flex items-center gap-2">
                        <Menu as="div" className="relative inline-block text-left">
                                    
                        <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:shadow-md hover:bg-gray-200">
                            Seller
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </MenuButton>
                        </div>

                        <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems className="left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <MenuItem>
                                {({ focus }) => (
                                    <a
                                    href="/seller-registration"
                                    className={classNames(
                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Become A Seller
                                    </a>
                                )}
                                </MenuItem>
                                <MenuItem>
                                {({ focus }) => (
                                    <a
                                    href="/seller"
                                    className={classNames(
                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Dashboard
                                    </a>
                                )}
                                </MenuItem>                           
                            </div>
                            </MenuItems>
                        </Transition>
                        </Menu>   
                        </div>
                        
                        <div className="flex items-center gap-2">
                        <Menu as="div" className="relative inline-block text-left">
                                    
                        <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:shadow-md hover:bg-gray-200">
                            Account
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </MenuButton>
                        </div>

                        <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems className="left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <MenuItem>
                                {({ focus }) => (
                                    <a
                                    href="/update-profile"
                                    className={classNames(
                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Update Profile
                                    </a>
                                )}
                                </MenuItem>
                                <MenuItem>
                                {({ focus }) => (
                                    <a
                                    href="/reset-password"
                                    className={classNames(
                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Reset Password
                                    </a>
                                )}
                                </MenuItem>
                                <MenuItem>
                                {({ focus }) => (
                                    <a
                                    href="/orders"
                                    className={classNames(
                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    My Orders
                                    </a>
                                )}
                                </MenuItem>
                                <form method="POST" action="#">
                                <MenuItem>
                                    {({ focus }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                    )}
                                </MenuItem>
                                </form>
                            </div>
                            </MenuItems>
                        </Transition>
                        </Menu>    
                        </div>
                    </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Nav