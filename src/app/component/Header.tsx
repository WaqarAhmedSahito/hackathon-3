"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="block">
        <div className="flex justify-between items-center bg-[#F5F5F5] px-4 lg:px-10">
          <img src="/jordanlogo.png" alt="Jordan Logo" className="h-8" />
          <ul className="flex space-x-6 py-3 text-sm">
            <li className="flex items-center border-r border-black pr-6">
              <Link href="#" className="leading-[14px]">Find a store</Link>
            </li>
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/Contact" className="leading-[14px]">Help</Link>
            </li>
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/Join" className="leading-[14px]">Join Us</Link>
            </li>
            <li className="flex items-center pr-6">
              <Link href="/Login" className="leading-[14px]">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[#ffffff] px-4 lg:px-10 py-4">
        {/* Logo */}
        <div className="flex justify-between w-full lg:w-auto">
          <Link href="/">
            <img src="/nikelogo.png" alt="Nike Logo" className="h-8" />
          </Link>
          <button
            className="lg:hidden px-2 focus:outline-none"
            onClick={toggleMenu}
          >
            <img src="/menu-icon.png" alt="Menu Icon" className="h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-6 text-sm mt-4 lg:mt-0">
          <li><Link href="#">New & Featured</Link></li>
          <li><Link href="/all-products">Men</Link></li>
          <li><Link href="#">Women</Link></li>
          <li><Link href="#">Kids</Link></li>
          <li><Link href="#">Sale</Link></li>
          <li><Link href="#">SNKRS</Link></li>
        </ul>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0 w-full lg:w-auto">
          <div className="flex items-center bg-light-gray rounded-full px-4 py-2 flex-1 lg:flex-none lg:w-[300px]">
            <img src="/searchicon.png" alt="Search Icon" className="h-5" />
            <input
              className="pl-4 focus:outline-none bg-light-gray w-full"
              type="text"
              placeholder="Search"
            />
          </div>
         
            <img src="/heart.png" alt="Heart Icon" className="h-6" />
         
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4 bg-[#ffffff] py-4 px-4 border-t">
            <li><Link href="#">New & Featured</Link></li>
            <li><Link href="/all-products">Men</Link></li>
            <li><Link href="#">Women</Link></li>
            <li><Link href="#">Kids</Link></li>
            <li><Link href="#">Sale</Link></li>
            <li><Link href="#">SNKRS</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}
