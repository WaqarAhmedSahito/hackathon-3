"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../component/Button";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart } from "../action/action";
import { urlFor } from "@/sanity/lib/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
function InputField({ id = "text", label = "text", type = "text", required = false }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        required={required}/>
    </div>
  );
}
export default function Checkout() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  

  const [isConfirmed, setIsConfirmed] = useState(false);
  useEffect(()=> {
    setCartItems(getCartItems());
  }, []);
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  const subtotal = calculateTotal();

  const handleConfirmCheckout = () => {
    setIsConfirmed(true);
    cartItems.forEach((item) => removeFromCart(item.id));
    setCartItems([]); 
  };
  if (isConfirmed) {
    return (
      <div >
        <Header/>
      <div className="flex items-center justify-center min-h-[50vh] mt-6">
        <div className="text-center"> 
          <h1 className="text-2xl font-bold mb-4">Your order is confirmed!</h1>
          <p className="text-gray-600">Thank you for shopping with us.</p>
          <Link href="/">
            <Button  text="Continue Shopping" classNames="mt-4 px-6 py-2" />
          </Link>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
  return (
    <div>
      <header className="bg-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/nikelogo.png" alt="Nike Logo" width={100} height={30} />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-700">000 800 100 9538</span>
            <div className="flex space-x-4">
              <Image src="/message-icon.png" alt="Message Icon" width={24} height={24} />
              <Image src="/bag-icon.png" alt="Shopping Cart Icon" width={24} height={24} />
            </div>
          </div>
        </div>
      </header>
      <form  onSubmit={(e) => {
          e.preventDefault();
          handleConfirmCheckout();
        }}
         className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8 px-24 py-6">
        {/* Left Section: Delivery and Address Form */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-2">How would you like to get your order?</h2>
          <p className="text-sm text-gray-600 mb-4">
            Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address.
            <a href="#" className="underline">Learn More</a>
          </p>
          <button className="flex items-center justify-start border border-black rounded-md p-6 w-full hover:bg-gray-100 transition">
            <Image src="/deliver.png" alt="Delivery Icon" width={24} height={24} className="w-6 h-6 mr-4" />
            <span className="font-medium text-gray-700">Deliver It</span>
          </button>
          <div className="space-y-4 mt-12">
            <h2 className="font-bold">Enter Your Name And Address:</h2>
            <InputField id="first_name" label="First Name" required />
            <InputField id="last_name" label="Last Name" required />
            <InputField id="address_1" label="Address Line 1" required />
            <p className="ml-4 text-xs">We do not ship to P.O. boxes</p>
            <InputField id="address_2" label="Address Line 2" />
            <InputField id="address_3" label="Address Line 3" />
            <div className="grid grid-cols-2 gap-4">
              <InputField id="postal_code" label="Postal Code" required />
              <InputField id="locality" label="Locality" required />
            </div>
            <InputField id="state" label="State/Territory" />
            <InputField id="country" label="India" />
          </div>
        </div>
        <div className="w-[320px] lg:w-1/3 flex flex-col p-8 rounded-md shadow-sm bg-gray-100">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <Image  src={urlFor(item.image).url()}
              alt={item.productName} width={50} height={50} />
              <div className="ml-4">
                <p className="font-medium text-sm">{item.productName}</p>
                <p className="text-sm text-gray-600">Qty: {item.inventory}</p>
                <p className="text-sm font-bold">{item.price}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-300 mt-4 pt-4">
            <p className="text-sm text-gray-600">Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p className="text-sm text-gray-600">Shipping: Free</p>
            <p className="font-bold text-sm mt-2">Total: ₹{subtotal.toFixed(2)}</p>
            <button
          onClick={handleConfirmCheckout}
          className="mt-6 rounded-md p-6 flex justify-center items-center text-center bg-black text-white">
          Confirm Checkout
        </button>
        {isConfirmed && <p>Checkout confirmed!</p>}
          </div>
        </div>
      </form>
      <footer className="bg-black text-white py-4 mt-8">
        <div className="container mx-auto px-2 text-xs text-center">
          © 2023 Nike, Inc. All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
