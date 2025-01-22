import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 lg:px-10 bg-black text-white">
      <div className="grid grid-cols-12 py-14 gap-8">
        <div className="col-span-12 lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ul className="space-y-4">
            <li className="whitespace-nowrap"><Link className="text-white uppercase hover:text-gray-400 transition" href="#">Become a Member</Link></li>
            <li className="whitespace-nowrap "><Link className="text-white uppercase hover:text-gray-400 transition" href="#">Find a Store</Link></li>
            <li className="whitespace-nowrap "><Link className="text-white uppercase hover:text-gray-400 transition" href="#">Sign Up for Email</Link></li>
            <li className="whitespace-nowrap "><Link className="text-white uppercase hover:text-gray-400 transition" href="#">Send Us Feedback</Link></li>
            <li className="whitespace-nowrap "><Link className="text-white uppercase hover:text-gray-400 transition" href="#">Student Discounts</Link></li>
          </ul>
          <ul className="space-y-4">
            <li className="whitespace-nowrap"><Link className="text-white uppercase hover:text-gray-400 transition" href="#">Get Help</Link></li>
            <li className="whitespace-nowrap"><Link className="text-gray-400 uppercase hover:text-gray-200 transition" href="#">Order Status</Link></li>
            <li className="whitespace-nowrap"><Link className="text-gray-400 uppercase hover:text-gray-200 transition" href="#">Delivery</Link></li>
            <li className="whitespace-nowrap"><Link className="text-gray-400 uppercase hover:text-gray-200 transition" href="#">Returns</Link></li>
            <li className="whitespace-nowrap"><Link className="text-gray-400 uppercase hover:text-gray-200 transition" href="#">Payment Options</Link></li>
            <li className="whitespace-nowrap"><Link className="text-gray-400 uppercase hover:text-gray-200 transition" href="#">Contact Us</Link></li>
            <li className="whitespace-nowrap"><Link className="text-gray-400 uppercase hover:text-gray-200 transition" href="#">Contact Us On Nike.com Inquiries</Link></li>
            <li className="whitespace-nowrap"><Link className="text-gray-400 uppercase hover:text-gray-200 transition" href="#">Contact Us On All Other Inquiries</Link></li>
          </ul>
          <ul className="space-y-4">
            <li className="whitespace-nowrap"><Link className="text-white uppercase hover:text-gray-400 transition" href="#">About Nike</Link></li>
            <li className="whitespace-nowrap"><Link className="text-gray-400 uppercase hover:text-gray-200 transition" href="#">News</Link></li>
            <li className="whitespace-nowrap"><Link className="text-gray-400 uppercase hover:text-gray-200 transition" href="#">Careers</Link></li>
            <li className="whitespace-nowrap"><Link className="text-gray-400 uppercase hover:text-gray-200 transition" href="#">Investors</Link></li>
            <li className="whitespace-nowrap"><Link className="text-gray-400 uppercase hover:text-gray-200 transition" href="#">Sustainability</Link></li>
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end">
          <ul className="flex space-x-6">
            <li>
              <Link href="#">
                <Image
                  src="/Twitter.png"
                  alt="Twitter icon"
                  width={24}
                  height={24}
                  className="hover:opacity-75 transition"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/Facebook.png"
                  alt="Facebook icon"
                  width={24}
                  height={24}
                  className="hover:opacity-75 transition"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/Youtube.png"
                  alt="Youtube icon"
                  width={24}
                  height={24}
                  className="hover:opacity-75 transition"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/Instagram.png"
                  alt="Instagram icon"
                  width={24}
                  height={24}
                  className="hover:opacity-75 transition"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-12 py-6 gap-4 border-t border-gray-700">
        <div className="col-span-12 lg:col-span-6 flex items-center space-x-4">
          <Image src="/Loc.png" alt="Location icon" width={20} height={20} />
          <p className="text-white">India</p>
          <p className="text-gray-400">© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-end space-x-6 flex-wrap">
          <Link className="text-gray-400 hover:text-gray-200 transition" href="#">Guides</Link>
          <Link className="text-gray-400 hover:text-gray-200 transition" href="#">Terms of Sale</Link>
          <Link className="text-gray-400 hover:text-gray-200 transition" href="#">Terms of Use</Link>
          <Link className="text-gray-400 hover:text-gray-200 transition" href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;