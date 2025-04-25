"use client"

import React, { useState } from "react";
import Link from "next/link";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-2xl text-white flex items-center gap-3">
              <div className="bg-white h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-yellow-400">
                <img 
                  src="/logo.png" 
                  alt="Honey Convent School Logo" 
                  className="h-full w-full object-contain p-0.5"
                />
              </div>
              <span className="hidden sm:block">Honey Convent School</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link 
              href="/admissions" 
              className="px-4 py-2 rounded-full bg-yellow-500 text-blue-900 font-semibold hover:bg-yellow-400 shadow-md transition duration-150 ease-in-out transform hover:scale-105"
            >
              Admission Open
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <Link href="/" className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out">Home</Link>
            <Link href="/about" className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out">About Us</Link>
            <Link href="/academics" className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out">Academics</Link>
            <Link href="/admissions" className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out">Admissions</Link>
            <Link href="/fees-structure" className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out">Fees</Link>
            <Link href="/contact" className="text-white hover:text-yellow-300 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out">Contact</Link>
            <Link 
              href="/admissions" 
              className="ml-4 px-6 py-2 rounded-full bg-yellow-500 text-blue-900 font-semibold hover:bg-yellow-400 shadow-md transition duration-150 ease-in-out transform hover:scale-105"
            >
              Admission Open
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700 shadow-inner">
          <Link 
            href="/" 
            className="block px-3 py-2 rounded-md text-white hover:bg-blue-600 text-center font-medium"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block px-3 py-2 rounded-md text-white hover:bg-blue-600 text-center font-medium"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link 
            href="/academics" 
            className="block px-3 py-2 rounded-md text-white hover:bg-blue-600 text-center font-medium"
            onClick={toggleMenu}
          >
            Academics
          </Link>
          <Link 
            href="/admissions" 
            className="block px-3 py-2 rounded-md text-white hover:bg-blue-600 text-center font-medium"
            onClick={toggleMenu}
          >
            Admissions
          </Link>
          <Link 
            href="/fees-structure" 
            className="block px-3 py-2 rounded-md text-white hover:bg-blue-600 text-center font-medium"
            onClick={toggleMenu}
          >
            Fees
          </Link>
          <Link 
            href="/contact" 
            className="block px-3 py-2 rounded-md text-white hover:bg-blue-600 text-center font-medium"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}