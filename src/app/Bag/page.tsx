'use client';
import Image from "next/image";
import { useCart } from "../Context/CartContex";
import Link from "next/link";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { urlFor } from "@/sanity/lib/image";
export default function Bag() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const calculateTotal = () =>
    cart.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
  const subtotal = calculateTotal();
  return (
    <div className="min-h-full">
         <Header/>
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 bg-white p-4 lg:w-2/3">
        <div className="bg-[#f0f0f0] w-auto mx-2 p-3">
          <p className="text-[13px] font-medium">Free Delivery</p>
          <div className="flex gap-2">
            <p className="text-[10px] xl:text-[12px] lg:text-[12px]">
              Applies to orders of ₹ 14 000.00 or more.
            </p>
            <p className="text-[10px] font-medium underline xl:text-[12px] lg:text-[12px]">
              View details
            </p>
          </div>
        </div>
        <h1 className="text-[18px] font-medium ml-2 mt-2">Bag</h1>
        <div>
            {cart.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center p-2 border-b border-gray-100">
              <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={70}
              height={70}
              className="w-16 h-16"/>
              <div className="flex-1 ml-4">
              <h3 className="text-sm font-semibold">{product.productName}</h3>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                <button 
                  onClick={() => updateQuantity(product.id, product.quantity - 1)}
                  className="hover:opacity-80">
                  -
                </button>
                <span className="text-sm font-medium w-6 text-center">
                  {product.quantity}
                </span>
                <button 
                  onClick={() => updateQuantity(product.id, product.quantity + 1)}
                  className="hover:opacity-80">
                  +
                </button>
                </div>
                <div className="flex items-center gap-2">
                <img
                  src="/heart-1.png"
                  alt="like"
                  className="w-6 h-6 cursor-pointer hover:opacity-80"/>
                <img
                  src="/delete.png"
                  alt="delete"
                  className="w-4 h-4 cursor-pointer hover:opacity-80"
                  onClick={() => removeFromCart(product.id)}/>
                </div>
              </div>
              </div>
              <p className="text-xs mb-6 sm:mb-4">{product.price}</p>
            </div>
            ))}
        </div>
      </div>
      <div className="bg-white p-4 lg:w-1/3">
        <h1 className="text-[18px] font-medium mt-4 mb-4 text-center lg:text-start lg:ml-10 xl:ml-[20%]">
          Summary
        </h1>
        <div className="flex justify-evenly gap-10 mt-2">
          <p className="text-[14px]">Subtotal</p>
          <p className="text-[14px]">₹ {subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-evenly mr-6 mt-2">
          <p className="text-[14px]">
            Estimated Delivery <br /> & Handling
          </p>
          <p className="text-[14px]">Free</p>
        </div>
        <div className="p-2 border-b border-gray-200 w-auto "></div>
        <div className="flex justify-evenly gap-5 mt-2">
          <p className="text-[14px]">Total</p>
          <p className="text-[14px] font-medium">₹ {subtotal.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center gap-4 mt-6">
          <Link href={`/productdetail`}>
            <button className="bg-black w-[160px] h-[40px] rounded-full text-white text-[14px] font-medium">
              Continue Shopping
            </button>
          </Link>
          <Link href={`/Checkout`}>
            <button className="bg-black w-[160px] h-[40px] rounded-full text-white text-[14px] font-medium">
              Member Checkout
            </button>
          </Link>
        </div></div>
    </div>
    <Footer/>
    </div>
  );
}