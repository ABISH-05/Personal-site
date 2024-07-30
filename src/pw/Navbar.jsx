import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     
      <div className="flex justify-between items-center fixed left-0 right-0 top-0 bg-white shadow-lg p-4 z-50">
      
        <div>
          <h2>ABISH</h2>
        </div>
        
        <div className="hidden md:flex space-x-4">
          <Link className="p-2" to="/home">
            Home
          </Link>
          <Link className="p-2" to="/about">
            About
          </Link>
          <Link className="p-2" to="/service">
            Service
          </Link>
          <Link className="p-2" to="/contact">
            Contact
          </Link>
        </div>
    
        <div className="md:hidden">
          <button
            className="outline-none focus:outline-none"
            onClick={toggleNavbar}
          >

            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        
        <div className={`md:hidden fixed top-16 left-0 right-0   ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-start">
            <Link className="p-4 border-b-2 w-full bg-white/95" to="/home" onClick={toggleNavbar}>
              Home
            </Link>
            <Link className="p-4 border-b-2 w-full bg-white/95" to="/about" onClick={toggleNavbar}>
              About
            </Link>
            <Link className="p-4 border-b-2 w-full bg-white/95" to="/service" onClick={toggleNavbar}>
              Service
            </Link>
            <Link className="p-4 border-b-2 w-full bg-white/95" to="/contact" onClick={toggleNavbar}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
