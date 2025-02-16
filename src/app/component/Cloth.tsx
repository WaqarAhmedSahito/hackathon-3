"use client";
import { useRef} from "react";
import Card from "./card";
export default function Cloth() {
    const scrollLeftRef = useRef<HTMLDivElement>(null);
    const scrollRightRef = useRef<HTMLDivElement>(null);
    const handleScroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
        if (!ref.current) return;
        const container = ref.current;
        const card = container.querySelector('.card');
        if (card) {
            const cardWidth = card.getBoundingClientRect().width;
            const scrollAmount = cardWidth + 32;
            container.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };
    const handleTouchStart = (e: React.TouchEvent, ref: React.RefObject<HTMLDivElement>) => {
        const touch = e.touches[0];
        ref.current?.setAttribute('data-touch-start', touch.clientX.toString());
    };
    const handleTouchEnd = (e: React.TouchEvent, ref: React.RefObject<HTMLDivElement>) => {
        const startX = parseFloat(ref.current?.getAttribute('data-touch-start') || "0");
        const endX = e.changedTouches[0].clientX;
        const difference = startX - endX;
        if (Math.abs(difference) > 50) {
            handleScroll(ref, difference > 0 ? 'right' : 'left');
        }
    };
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Gear up</h2>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg md:text-xl font-semibold">Shop Men</h3>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleScroll(scrollLeftRef, 'left')}
                                className="p-2 md:p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition-colors"
                            >
                                <img
                                    src="/left.png"
                                    alt="Scroll left"
                                    className="w-4 h-4 md:w-6 md:h-6 rotate-180"
                                />
                            </button>
                            <button
                                onClick={() => handleScroll(scrollLeftRef, 'right')}
                                className="p-2 md:p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition-colors"
                            >
                                <img
                                    src="/left.png"
                                    alt="Scroll right"
                                    className="w-4 h-4 md:w-6 md:h-6"
                                />
                            </button>
                        </div>
                    </div>
                    <div
                        ref={scrollLeftRef}
                        className="overflow-x-auto scrollbar-hidden snap-x snap-mandatory"
                        onTouchStart={(e) => handleTouchStart(e, scrollLeftRef)}
                        onTouchEnd={(e) => handleTouchEnd(e, scrollLeftRef)}
                    >
                        <div className="flex gap-8 min-w-max">
                            {[1].map((item) => (
                                <div key={item} className="snap-start">
                                    <Card
                                        category="Men's Shoes"
                                        price=""
                                        layout="horizontal"
                                        
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg md:text-xl font-semibold">Shop Women</h3>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleScroll(scrollRightRef, 'left')}
                                className="p-2 md:p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition-colors"
                            >
                                <img
                                    src="/left.png"
                                    alt="Scroll left"
                                    className="w-4 h-4 md:w-6 md:h-6 rotate-180"
                                />
                            </button>
                            <button
                                onClick={() => handleScroll(scrollRightRef, 'right')}
                                className="p-2 md:p-3 bg-[#E5E5E5] rounded-full hover:bg-gray-300 transition-colors"
                            >
                                <img
                                    src="/left.png"
                                    alt="Scroll right"
                                    className="w-4 h-4 md:w-6 md:h-6"
                                />
                            </button>
                        </div>
                    </div>
                    <div
                        ref={scrollRightRef}
                        className="overflow-x-auto scrollbar-hidden snap-x snap-mandatory"
                        onTouchStart={(e) => handleTouchStart(e, scrollRightRef)}
                        onTouchEnd={(e) => handleTouchEnd(e, scrollRightRef)}
                    >
                        <div className="flex gap-8 min-w-max">
                            {[1].map((item) => (
                                <div key={item} className="snap-start">
                                    <Card
                                        category="Women's Shoes"
                                        price=""
                                        layout="horizontal"
                                        
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}