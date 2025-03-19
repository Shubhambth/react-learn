import { Link , NavLink } from "react-router-dom";
import React from 'react'

const Header = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Corrected: Used `Link` instead of `link` */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-xl font-bold text-gray-800">MySite</Link>
                        </div>

                        <div className="hidden md:flex space-x-8 ml-10 items-center">
                            <NavLink to="/" className={({isActive})=>`${isActive ? "text-red-700" : "text-gray-700"} hover:text-blue-600`}>Home</NavLink>
                            <NavLink to="/about" className={({isActive})=>`${isActive ? "text-red-700" : "text-gray-700"} hover:text-blue-600`}>About</NavLink>
                            <NavLink to="" className="text-gray-700 hover:text-blue-600">Services</NavLink>
                            <NavLink to="" className="text-gray-700 hover:text-blue-600">Contact</NavLink>
                        </div>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button id="menu-btn" className="text-gray-700 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" className="md:hidden hidden bg-white px-4 pt-2 pb-3 space-y-2">
                <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
                <Link to="" className="block text-gray-700 hover:text-blue-600">About</Link>
                <Link to="" className="block text-gray-700 hover:text-blue-600">Services</Link>
                <Link to="/" className="block text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
        </nav>
    );
};

export default Header;
