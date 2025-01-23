"use client";
import { useRef } from "react";
import Card from "./card";
export default function Cloth() {
    const scrollLeftRef = useRef<HTMLDivElement>(null);
    const scrollRightRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (scrollLeftRef.current) {
            scrollLeftRef.current.scrollBy({
                left: -320,
                behavior: "smooth",
            });
        }
    };
    const scrollRight = () => {
        if (scrollLeftRef.current) {
            scrollLeftRef.current.scrollBy({
                left: 320,
                behavior: "smooth",
            });
        }
    };
    const scrollLeft2 = () => {
        if (scrollRightRef.current) {
            scrollRightRef.current.scrollBy({
                left: -320,
                behavior: "smooth",
            });
        }
    };
    const scrollRight2 = () => {
        if (scrollRightRef.current) {
            scrollRightRef.current.scrollBy({
                left: 320,
                behavior: "smooth",
            });
        }
    };
    return (
        <div>
            <p className="text-3xl font-bold">Gear up</p>
            <div className="flex space-x-4">
                <div className="w-[49%] p-4">
                    <div className="flex items-center mb-4 justify-end">
                        <div className="flex space-x-2  items-center">
                            <p className="text-xl font-semibold">Shop Men</p>
                            <button onClick={scrollLeft} className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition">
                                <img src="right.png" alt="Scroll Left" className="w-6 h-6" />
                            </button>
                            <button onClick={scrollRight} className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition">
                                <img src="left.png" alt="Scroll Right" className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                    <div ref={scrollLeftRef} className="overflow-x-auto no-scrollbar flex scrollbar-hidden">
                        <div className="flex">
                        <Card category="Men's Shoes" price="" layout="horizontal" />
                        </div>
                    </div>
                </div>
                <div className="w-[49%] p-4">
                    <div className="flex items-center mb-4 justify-end">
                        <div className="flex space-x-2 items-center">
                            <p className="text-xl font-semibold">Shop Women</p>
                            <button onClick={scrollLeft2} className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition">
                                <img src="right.png" alt="Scroll Left" className="w-6 h-6" />
                            </button>
                            <button onClick={scrollRight2} className="p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition">
                                <img src="left.png" alt="Scroll Right" className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                    <div ref={scrollRightRef} className="overflow-x-auto no-scrollbar flex scrollbar-hidden">
                        <div className="flex">
                        <Card category="Women's Shoes" layout="horizontal" price="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}