"use client";
import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);};
  return (
    <div>
      <div className="block">
        <div className="flex justify-between items-center bg-[#F5F5F5] px-4 lg:px-10">
          <img src="/jordanlogo.png" alt="Jordan Logo" className="h-8" />
          <ul className="flex space-x-6 py-3 text-sm">
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/Store" className="leading-[14px]">Find a store</Link>
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
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#ffffff] px-4 md:px-6 lg:px-10 py-4">
        <div className="flex justify-between w-full lg:w-auto">
          <Link href="/">
            <img src="/nikelogo.png" alt="Nike Logo" className="h-8" />
          </Link>
          <button
            className="md:hidden px-2 focus:outline-none"
            onClick={toggleMenu}>
            <img src="/menu-icon.png" alt="Menu Icon" className="h-6" />
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 lg:space-x-6 text-sm mt-4 md:mt-0">
          <li><Link href="/productdetail">New & Featured</Link></li>
          <li><Link href="/productdetail">Men</Link></li>
          <li><Link href="/productdetail">Women</Link></li>
          <li><Link href="/productdetail">Kids</Link></li>
          <li><Link href="/productdetail">Sale</Link></li>
          <li><Link href="/productdetail">SNKRS</Link></li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-4 mt-4 md:mt-0 w-full lg:w-auto">
          <div className="flex items-center bg-light-gray rounded-full px-4 py-2 flex-1 lg:flex-none lg:w-[300px]">
            <img src="/searchicon.png" alt="Search Icon" className="h-5" />
            <input
              className="pl-4 focus:outline-none bg-light-gray w-full"
              type="text"
              placeholder="Search"/>
          </div>
            <img src="/heart.png" alt="Heart Icon" className="h-6" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 bg-[#ffffff] py-4 px-4 border-t">
            <li><Link href="/productdetail">New & Featured</Link></li>
            <li><Link href="/productdetail">Men</Link></li>
            <li><Link href="/productdetail">Women</Link></li>
            <li><Link href="/productdetail">Kids</Link></li>
            <li><Link href="/productdetail">Sale</Link></li>
            <li><Link href="/productdetail">SNKRS</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}
