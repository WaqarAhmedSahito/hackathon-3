"use client";
import { useRef } from "react";
import Card from "./card";
export default function Shoe() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const scrollAmount = window.innerWidth <= 768 ? 280 : 320; 
        scrollRef.current.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
    };
    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        scrollRef.current?.setAttribute('data-touch-start', touch.clientX.toString());
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const startX = parseFloat(scrollRef.current?.getAttribute('data-touch-start') || "0");
        const endX = e.changedTouches[0].clientX;
        const difference = startX - endX;
        if (Math.abs(difference) > 50) { // Minimum swipe distance
            scroll(difference > 0 ? 'right' : 'left');
        }
    };

    return (
        <div className="relative w-full px-4 md:px-8 lg:px-16">
            {/* Header and Controls */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">Best of Shoes</h2>
                <div className="flex space-x-2">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 md:p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition-colors"
                    >
                        <img 
                            src="/left.png" 
                            alt="Scroll Left" 
                            className="w-4 h-4 md:w-6 md:h-6 rotate-180" 
                        />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 md:p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition-colors"
                    >
                        <img 
                            src="/left.png" 
                            alt="Scroll Right" 
                            className="w-4 h-4 md:w-6 md:h-6" 
                        />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {[1].map((item) => (
                    <div key={item} className="snap-start flex-shrink-0">
                        <Card 
                            category="" 
                            layout="horizontal" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}