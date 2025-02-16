"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../component/Button";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart} from "../action/action";
import { urlFor } from "@/sanity/lib/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import client from "@/sanity/lib/client";
export default  function Checkout() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    postalcode: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address1: false,
    city: false,
    postalcode: false,
    phone: false,
    email: false,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };
  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address1: !formValues.address1,
      
      city: !formValues.city,
      postalcode: !formValues.postalcode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };
  const [isConfirmed, setIsConfirmed] = useState(false);
  useEffect(() => {
    setCartItems(getCartItems());
  }, []);
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  const subtotal = calculateTotal();
  const handleConfirmCheckout = async () => {
    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address1: formValues.address1,
      city: formValues.city,
      postalcode: formValues.postalcode,
      phone: formValues.phone,
      email: formValues.email,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,  
      })),
      total: subtotal,
      orderDate: new Date().toISOString(),
    };
      if (validateForm()) {
        try {
          await client.create(orderData);
          console.log("Order placed successfully!");
        } catch (error) {
          console.error("Error placing order:", error);
        }
       setIsConfirmed(true);
       cartItems.forEach((item) => removeFromCart(item.productName));
       setCartItems([]);
      }
  };
  if (isConfirmed) {
    return (
      <div >
        <Header />
        <div className="flex items-center justify-center min-h-[50vh] mt-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your order is confirmed!</h1>
            <p className="text-gray-600">Thank you for shopping with us.</p>
            <Link href="/">
              <Button text="Continue Shopping" classNames="mt-4 px-6 py-2" />
            </Link>
          </div>
        </div>
        <Footer />
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
              <Image src="/message-icon.png" alt="Message Icon" width={24} height={24}  className="rounded-md p-1 hover:scale-110 transition-transform"/>
              <Image src="/bag-icon.png" alt="Shopping Cart Icon" width={24} height={24}  className="rounded-md p-1 hover:scale-110 transition-transform"/>
            </div>
          </div>
        </div>
      </header>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleConfirmCheckout();
      }}
        className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8 px-24 py-6">
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
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                value={formValues.firstName}
                onChange={handleInputChange}
                className={`mt-1 p-2 border rounded-md w-full ${formErrors.firstName ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.firstName && <p className="text-sm text-red-500 mt-1">First name is required.</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                value={formValues.lastName}
                onChange={handleInputChange}
                className={`mt-1 p-2 border rounded-md w-full ${formErrors.lastName ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.lastName && <p className="text-sm text-red-500 mt-1">Last name is required.</p>}
            </div>

            <div>
              <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
                Address Line 1
              </label>
              <input
                id="address1"
                type="text"
                placeholder="Enter your address"
                value={formValues.address1}
                onChange={handleInputChange}
                className={`mt-1 p-2 border rounded-md w-full ${formErrors.address1 ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.address1 && <p className="text-sm text-red-500 mt-1">Address is required.</p>}
            </div>

            {/* Address Line 2 (Optional) */}
            <div>
              <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
                Address Line 2 (Optional)
              </label>
              <input
                id="address2"
                type="text"
                placeholder="Apartment, suite, etc."
                value={formValues.address2}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
                className={`mt-1 p-2 border rounded-md w-full ${formErrors.city ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.city && <p className="text-sm text-red-500 mt-1">City is required.</p>}
            </div>

            {/* Postal Code */}
            <div>
              <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700">
                Postal Code
              </label>
              <input
                id="postalcode"
                type="text"
                placeholder="Enter your postal code"
                value={formValues.postalcode}
                onChange={handleInputChange}
                className={`mt-1 p-2 border rounded-md w-full ${formErrors.postalcode ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.postalcode && <p className="text-sm text-red-500 mt-1">Postal code is required.</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
                className={`mt-1 p-2 border rounded-md w-full ${formErrors.phone ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.phone && <p className="text-sm text-red-500 mt-1">Phone number is required.</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleInputChange}
                className={`mt-1 p-2 border rounded-md w-full ${formErrors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              />
              {formErrors.email && <p className="text-sm text-red-500 mt-1">Email is required.</p>}
            </div>

          </div>
        </div>
        <div className="w-[320px] lg:w-1/3 flex flex-col p-8 rounded-md shadow-sm bg-gray-100">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <Image src={urlFor(item.image).url()}
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
