import Link from "next/link";
import Button from "./Button";
export default function Lastly() {
    return (
        <div className="w-full">
            <div className="px-4 md:px-8 lg:px-16">
                <h1 className="text-2xl font-bold pb-6 pt-4">Don&apos;t Miss</h1>
                <div className="flex flex-col items-center bg-light-gray py-6 px-4 md:py-8 md:px-10 lg:py-12 lg:px-16 rounded-lg">
                    <img 
                        src="/model.png" 
                        alt="Flight Essentials" 
                        className="w-full max-w-[1344px] h-auto md:h-[500px] lg:h-[700px] object-contain" 
                        loading="lazy"
                    />
                    <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase text-center font-bold mt-6 md:mt-10">
                        Flight Essentials
                    </h1>
                    <p className="py-4 md:py-6 text-center text-base md:text-lg max-w-2xl mx-auto">
                        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
                    </p>
                    <Button 
                        text="Shop" 
                        classNames="rounded-full py-2 px-6 bg-black text-white hover:bg-gray-800 transition-colors" 
                    />
                </div>
            </div>
            <div className="px-4 md:px-8 lg:px-16 mt-10">
                <h1 className="text-2xl font-bold pb-6">The Essentials</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 bg-light-gray py-6 px-4 md:py-8 md:px-10 lg:py-12 lg:px-16 rounded-lg">
                    <img 
                        src="/menL.png" 
                        alt="Men's Essentials" 
                        className="w-full h-auto object-contain" 
                        loading="lazy" 
                    />
                    <img 
                        src="/womanL.png" 
                        alt="Women's Essentials" 
                        className="w-full h-auto object-contain" 
                        loading="lazy" 
                    />
                    <img 
                        src="/KidsL.png" 
                        alt="Kids' Essentials" 
                        className="w-full h-auto object-contain" 
                        loading="lazy" 
                    />
                </div>
            </div>
            <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link 
                                                href={link.href} 
                                                className="text-text-primary-gray hover:underline hover:text-black transition-colors"
                                            >
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
const footerLinks = [
    {
        title: "Icons",
        links: [
            { text: "Air Force 1", href: "#" },
            { text: "Huarache", href: "#" },
            { text: "Air Max 90", href: "#" },
            { text: "Air Max 95", href: "#" },
        ],
    },
    {
        title: "Shoes",
        links: [
            { text: "All Shoes", href: "#" },
            { text: "Custom Shoes", href: "#" },
            { text: "Jordan Shoes", href: "#" },
            { text: "Running Shoes", href: "#" },
        ],
    },
    {
        title: "Clothing",
        links: [
            { text: "All Clothing", href: "#" },
            { text: "Modest Wear", href: "#" },
            { text: "Hoodies & Pullovers", href: "#" },
            { text: "Shirts & Tops", href: "#" },
        ],
    },
    {
        title: "Kids",
        links: [
            { text: "Infant & Toddler Shoes", href: "#" },
            { text: "Kids' Shoes", href: "#" },
            { text: "Kids' Jordan Shoes", href: "#" },
            { text: "Kids' Basketball Shoes", href: "#" },
        ],
    },
];