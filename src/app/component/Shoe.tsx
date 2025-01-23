"use client";
import { useRef } from "react";
import Card from "./card";
export default function Shoe() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -320,
                behavior: "smooth",
            });
        }
    };
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 320,
                behavior: "smooth",
            });
        }
    };
    return (
        <div className="relative w-full px-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Best of Shoes</h2>
                <div  className="flex space-x-2">
                    <button
                        onClick={scrollLeft}
                        className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition">
                        <img src="right.png" alt="Scroll Left" className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition">
                        <img src="left.png" alt="Scroll Right" className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div ref={scrollRef}
                 className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar">
                <div className="flex">
                    <Card category="" layout="horizontal"/>     
            </div>
        </div>
    </div>
    );
}
