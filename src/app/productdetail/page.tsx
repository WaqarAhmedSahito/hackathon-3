"use client";
import { useState } from "react";
import Card from "../component/card";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function Products() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    const isCategorySelected = (category: string) =>
        selectedCategories.includes(category);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    try {
        return (
            <div>
                <Header />
                <div className="flex">
                    {/* Sidebar */}
                    {isMenuOpen && (
                        <div className="w-1/7 p-4">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-xl">New (500)</h3>
                                <div className="border-b-2 border-black p-3 flex-nowrap">
                                    <p>Shoes</p>
                                    <p>Sports Bras</p>
                                    <p>Tops & T-Shirts</p>
                                    <p>Hoodies & Sweatshirt</p>
                                    <p>Jackets</p>
                                    <p>Trousers & Tights</p>
                                    <p>Shorts</p>
                                    <p>Tracksuits</p>
                                    <p>Jumpsuits & Rompers</p>
                                    <p>Skirts & Dresses</p>
                                    <p>Socks</p>
                                    <p>Accessories & Equipment</p>
                                </div>
                                <div className="border-b-2 border-black pb-4">
                                    <h4 className="font-medium text-lg">Gender</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="men"
                                                className="mr-2"
                                                checked={isCategorySelected("men")}
                                                onChange={() => handleCategoryChange("men")}
                                            />
                                            <label htmlFor="men">Men</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="women"
                                                className="mr-2"
                                                checked={isCategorySelected("women")}
                                                onChange={() => handleCategoryChange("women")}
                                            />
                                            <label htmlFor="women">Women</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="unisex"
                                                className="mr-2"
                                                checked={isCategorySelected("unisex")}
                                                onChange={() => handleCategoryChange("unisex")}
                                            />
                                            <label htmlFor="unisex">Unisex</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b-2 border-black pb-4">
                                    <h4 className="font-medium text-lg">Kids</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="boys"
                                                className="mr-2"
                                                checked={isCategorySelected("boys")}
                                                onChange={() => handleCategoryChange("boys")}
                                            />
                                            <label htmlFor="boys">Boys</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="girls"
                                                className="mr-2"
                                                checked={isCategorySelected("girls")}
                                                onChange={() => handleCategoryChange("girls")}
                                            />
                                            <label htmlFor="girls">Girls</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg">Shop By Price</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="under-5000"
                                                className="mr-2"
                                                checked={isCategorySelected("under-5000")}
                                                onChange={() => handleCategoryChange("under-5000")}
                                            />
                                            <label htmlFor="under-5000">Under ₹ 5,000</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="5000-20000"
                                                className="mr-2"
                                                checked={isCategorySelected("5000-20000")}
                                                onChange={() => handleCategoryChange("5000-20000")}
                                            />
                                            <label htmlFor="5000-20000">₹ 5,000-₹ 20,000</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={`p-4 ${isMenuOpen ? 'w-full md:w-3/4' : 'w-full'}`}>
                        <div className="grid-cols-3 gap-4">
                            <div onClick={toggleMenu} className="flex flex-nowrap space-x-4 items-end justify-end cursor-pointer">
                                <p >
                                    {isMenuOpen ? "Hide Filters" : "Show Filters"}
                                </p>
                                <img src="/filter-1.png" alt="filter" />
                            </div>
                            {selectedCategories.length === 0 && <Card category="" price="" layout="grid" />}
                            {selectedCategories.includes("men") && (
                                <>
                                    <Card category="Men's Shoes" price="" layout="grid" />
                                    <Card category="Men's Short-Sleeve Graphic Fitness Top" layout="grid" price="" />
                                    <Card category="Men's Running Shoes" layout="grid" price="" />
                                    <Card category="Men's Training Shoes" layout="grid" price="" />
                                </>
                            )}
                            {selectedCategories.includes("women") && (
                                <>
                                    <Card category="Women's Shoes" layout="grid" price="" />
                                    <Card category="Women's Basketball Jersey" layout="grid" price="" />
                                </>
                            )}
                            {selectedCategories.includes("unisex") && <Card category="unisex" layout="grid" price="" />}
                            {selectedCategories.includes("boys") && <Card category="boys" layout="grid" price="" />}
                            {selectedCategories.includes("girls") && <Card category="girls" layout="grid" price="" />}
                            {selectedCategories.includes("under-5000") && (
                                <>
                                    <Card category="" layout="grid" price="under-5000" />
                                </>
                            )}
                            {selectedCategories.includes("5000-20000") && (
                                <>
                                    <Card category="" layout="grid" price="5000-20000" />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    } catch {
        setError("An error occurred while loading the products. Please try again later.");
        return (
            <div>
                <Header />
                <div className="flex justify-center items-center h-screen">
                    <p className="text-red-500">{error}</p>
                </div>
                <Footer />
            </div>
        );
    }
}