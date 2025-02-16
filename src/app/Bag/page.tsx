'use client';
import Image from "next/image";
import Link from "next/link";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems, updateCartQuantity, removeFromCart } from "../action/action";
import { useRouter } from "next/navigation";
const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();
  useEffect(() => {
    setCartItems(getCartItems());
  }, []);
  const handleRemove = (productname: string) => {
    const confirmRemoval = window.confirm("Are you sure you want to remove this item?");
    if (confirmRemoval) {
      removeFromCart( productname );
      setCartItems(getCartItems());
      alert("Item removed successfully.");
    }
  };
  const handleQuantityChange = (id: string,productName:string, quantity: number) => {
    updateCartQuantity(id, productName, quantity);
    setCartItems(getCartItems());
  };
  const handleIncrement = (id: string ,productname:string) => {
    const product = cartItems.find((item) => item.id === id && item.productName === productname);
    if (product) {
      handleQuantityChange(id, product.productName, product.inventory + 1);
    }
  };
  const handleDecrement = (id: string ,productname:string) => {
    const product = cartItems.find((item) => item.id === id && item.productName === productname);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.productName , product.inventory - 1);
    }
  };
  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
    const handleProceed = () => {
    alert("Proceeding to checkout");
    router.push("/Checkout");
  };
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
                Applies to orders of ₹ 14,000.00 or more.
              </p>
              <p className="text-[10px] font-medium underline xl:text-[12px] lg:text-[12px]">
                View details
              </p>
            </div>
          </div>
          <h1 className="text-[18px] font-medium ml-2 mt-2">Bag</h1>
          <div>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.productName}`}
                  className="flex justify-between items-center p-2 border-b border-gray-100"
                >
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.productName}
                    width={70}
                    height={70}
                    className="w-16 h-16"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-sm font-semibold">{item.productName}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <button
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                        onClick={() => handleDecrement(item.id,item.productName)}
                      >
                        -
                      </button>
                      <span>{item.inventory}</span>
                      <button
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                        onClick={() => handleIncrement(item.id,item.productName)}
                      >
                        +
                      </button>
                      <img
                        src="/delete.png"
                        alt="delete"
                        className="w-4 h-4 cursor-pointer hover:opacity-80"
                        onClick={() => handleRemove( item.productName)}
                      />
                    </div>
                  </div>
                  <p className="text-xs mb-6 sm:mb-4">₹ {item.price}</p>
                </div>
              ))
            ) : (
              <p className="text-center mt-4">Your cart is empty.</p>
            )}
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
          <div className="p-2 border-b border-gray-200 w-auto"></div>
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
            <button
              className="bg-black w-[160px] h-[40px] rounded-full text-white text-[14px] font-medium"
              onClick={handleProceed}
            >
              Member Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CartPage;
