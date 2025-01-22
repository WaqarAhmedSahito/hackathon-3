import Link from "next/link";
import Button from "./Button";

export default function Lastly() {
    return (
        <div>
            {/* Section Header */}
            <h1 className="text-2xl font-bold pb-6">Don&apos;t Miss</h1>

            {/* Flight Essentials Section */}
            <div className="flex flex-col items-center bg-light-gray py-8 px-6 md:px-10 lg:px-16">
                <img src="/model.png" alt="run" className="w-[1344px] h-[700px] object-contain" />
                <h1 className="text-4xl md:text-6xl uppercase text-center font-bold pt-8 md:pt-12">Flight Essentials</h1>
                <p className="py-6 md:py-10 text-center text-base md:text-lg">
                    Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
                </p>
                <Button text="Shop" classNames="rounded-full py-2 px-6 bg-black text-white" />
            </div>

            {/* Essentials Section */}
            <h1 className="text-2xl font-bold pt-10 pb-6">The Essentials</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-light-gray py-6 px-6 md:px-10 lg:px-16">
                <img src="/menL.png" alt="Men's Essentials" className="w-full object-contain" />
                <img src="/womanL.png" alt="Women's Essentials" className="w-full object-contain" />
                <img src="/KidsL.png" alt="Kids' Essentials" className="w-full object-contain" />
            </div>

            {/* Footer Links Section */}
            <section className="py-16 px-6 md:px-10 lg:px-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Icons */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Icons</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Air Force 1</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Huarache</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Air Max 90</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Air Max 95</Link></li>
                            </ul>
                        </div>
                        
                        {/* Shoes */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Shoes</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-text-primary-gray hover:underline">All Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Custom Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Jordan Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Running Shoes</Link></li>
                            </ul>
                        </div>

                        {/* Clothing */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Clothing</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-text-primary-gray hover:underline">All Clothing</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Modest Wear</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Hoodies & Pullovers</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Shirts & Tops</Link></li>
                            </ul>
                        </div>

                        {/* Kids' Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Kids&apos;</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Infant & Toddler Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Kids&apos; Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Kids&apos; Jordan Shoes</Link></li>
                                <li><Link href="#" className="text-text-primary-gray hover:underline">Kids&apos; Basketball Shoes</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}