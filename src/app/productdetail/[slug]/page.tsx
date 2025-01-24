"use client";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import Button from "@/app/component/Button";
import { addToCart } from "@/app/action/action";
interface ProductPageProps {
  params: { slug: string };
}
async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      productName,
      _type,
      image,
      price,
      description,
      inventory,
      colors,
      status,
    }`,
    { slug }
  );
}
export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct = await getProduct(slug);
      setProduct(fetchedProduct);
      setLoading(false);
    }
    fetchProduct();
  }, [slug]);
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-[40px] text-center font-extrabold">Loading...</p>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-[40px] text-center font-extrabold">Product not found!</p>
      </div>
    );
  }
  const handleAddToCart = (e: React.MouseEvent, product :Product) => {
    e.preventDefault();
  alert(`${product.productName} added to cart`)
 
    addToCart(product)
    router.push('/Bag');
   
  };


  return (
    <div className=" max-w-full mx-auto">
      <Header />
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto p-7 gap-8">
        <div className="flex-1">
          {/* Image Section */}
          <div className="border-none border-gray-200 rounded-md p-4">
            {product.image && (
              <img
                src={urlFor(product.image).url()}
                alt={product.productName}
                className="w-[653px] h-[453px] top-[110px] rounded-md"/>
            )}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-6xl font-semibold text-gray-800 mb-4">{product.productName}</h1>
          <p className="text-lg text-gray-600 mt-2">₹ {product.price}</p>
          <p className="mt-4 text-gray-700">Avaliable: {product.inventory}</p>
          <p className="mt-4 text-gray-700">{product.color}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <div onClick={(e) => handleAddToCart(e, product)}>
          <Button text={"Add to Cart"} classNames={"mt-6 px-6 py-2 rounded-md"}  />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
