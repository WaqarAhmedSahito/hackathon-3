"use client";
import { useRef } from "react";
import Card from "./card";

export default function Shoe() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full px-4">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Best of Shoes</h2>
                <div className="flex space-x-2">
                    {/* Left Arrow Button */}
                    <button
                        onClick={() => scroll("left")}
                        className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition"
                    >
                        <img src="right.png" alt="Scroll Left" className="w-6 h-6" />
                    </button>
                    {/* Right Arrow Button */}
                    <button
                        onClick={() => scroll("right")}
                        className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition"
                    >
                        <img src="left.png" alt="Scroll Right" className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Scrollable Content */}
            <div
                ref={scrollContainerRef}
                className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
            >
              
                    <Card category=""
                    layout="horizontal"/>
            
            </div>
            </div>
    );
}
