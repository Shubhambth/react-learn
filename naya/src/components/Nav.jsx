import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">MyWebsite</a>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-200">About</Link></li>
          <li><Link to="/services" className="text-white hover:text-gray-200">Services</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-200">Home</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col bg-blue-700 p-4 space-y-2">
            <li><a href="#" className="text-white block">Home</a></li>
            <li><a href="#" className="text-white block">About</a></li>
            <li><a href="#" className="text-white block">Services</a></li>
            <li><a href="#" className="text-white block">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
    <Outlet/>
      
    </>
  );
};

export default Nav
