import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
interface CardProps {
    category?: string; 
    price?: string;
    layout?: "horizontal" | "grid";
}
const Card: React.FC<CardProps> = ({ category, price ,layout = "grid" }) => {
    const [product, setProduct] = useState<Product[]>([]);
    useEffect(() => {
        async function fetchProduct() {
            let query = `*[_type == "product"]`;
            if (category && price) {
                query = `*[_type == "product" && category == "${category}" && ${price === "under-5000" ? "price < 5000" : "price >= 5000"}]`;
            } else if (category) {
                query = `*[_type == "product" && category == "${category}"]`;
            } else if (price) {
                query = `*[_type == "product" && ${price === "under-5000" ? "price < 5000" : "price >= 5000"}]`;
            }
            const fetchedProduct: Product[] = await client.fetch(query);
            setProduct(fetchedProduct);
        }
        fetchProduct();
        }, [category, price]);
    return (
        <div  className={`${
            layout === "horizontal"
                ? "flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
                : "grid lg:grid-cols-3 sm:grid-cols-1"
        }`}>
            {product.map((product) => (
                    <div key={product.slug.current} className="w-[280px] md:w-[320px] min-w-[300px] md:min-w-[350px]  bg-white border rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition m-2">
                        <Link href={`/productdetail/${product.slug.current}`}>
                        {product.image && (
                            <img
                                src={urlFor(product.image).url()}
                                alt={product.productName}
                                className="w-[90%] h-48 object-fill rounded-md mx-auto"/>
                        )}
                        <div className="flex justify-between items-center mt-2">
                            <h3 className="font-semibold">{product.productName}</h3>
                            <p className="text-gray-600">₹ {product.price}</p> 
                        </div>
                        </Link> 
                    </div>
            ))}
        </div>
    );
};
export default Card;