import React from "react";
import Link from "next/link";
import Button from "../component/Button";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Image from "next/image";
export default function page() {
  return (
    <div><Header/>
    <div className="flex flex-col items-center px-10 md:px-0">
        <h2 className="uppercase text-xl font-bold mt-8">Get Help</h2>
        <div className="flex px-4 py-3 rounded-md w-72 lg:w-[30%] border-2 border-text-secondary-gray mt-4 justify-between">
            <input className="focus-visible:outline-none w-full lg:w-[64%]" type="text" placeholder="What can we help you with?" name="" id="" />
            <Image src="/searchicon.png" alt="wishlist" width={24} height={24}/>
        </div>
        <div className="grid grid-cols-12 md:px-16 pt-14 pb-10 bg-white text-gray-800">
            <div className="col-span-12 lg:col-span-9 border-none lg:border-r-[1.3px] pr-0 md:pr-4 border-text-secondary-gray">
                <h2 className="text-2xl font-bold mb-4">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
                </h2>
                <p className="mb-4 text-sm">
                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
                </p>
                <ul className="pl-5 mb-6 space-y-2 list-none">
                <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                <li>
                    If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
                </li>
                <li>Apple Pay</li>
                </ul>
                <p className="mb-6">
                <Link href="#" className="underline font-semibold">
                    Nike Members
                </Link>{" "}
                can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member,{" "}
                <Link href="#" className="underline font-semibold">
                    join us
                </Link>{" "}
                today.
                </p>
                <div className="flex mt-4 gap-4">
                    <Button text="Join Us" classNames="rounded-full py-2"/>
                    <Button text="Shop Nike" classNames="rounded-full py-2"/>
                </div>
                <div className="text-sm">
                <h3 className="text-xl font-semibold mb-4">FAQs</h3>
                <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2">Does my card need international purchases enabled?</h4>
                    <p>
                    Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if
                    international purchases need to be enabled.
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                    Please note, some banks may charge a small transaction fee for international orders.
                    </p>
                </div>
                <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2">Can I pay for my order with multiple methods?</h4>
                    <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
                </div>
                <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2">What payment method is accepted for SNKRS orders?</h4>
                    <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                </div>
                <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2">Why don&apos;t I see Apple Pay as an option?</h4>
                    <p>
                    To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the
                    latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use
                    Safari to use Apple Pay on Nike.com.
                    </p>
                </div>
                <div className="mb-6">
                    <p className="mb-2">Was this answer helpful?</p>
                    <div className="flex space-x-2">
                        <img src="/thumbsup.png" alt="Thumbs Up" className="w-6 h-6 cursor-pointer"/>
                        <img src="/thumbsdown.png" alt="Thumbs Down" className="w-6 h-6 cursor-pointer"/>
                    </div>
                </div>
                <h4 className="text-lg font-bold mt-8 mb-4 text-text-secondary-gray">RELATED</h4>
                <ul className="space-y-2 ml-6">
                    <li>
                    <Link href="#" className="underline font-bold">
                        WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="underline font-bold">
                        HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-3 pt-10 lg:pt-0 space-y-14 px-10 border-l-2">
                <h2 className="uppercase font-bold text-2xl text-center">Contact Us</h2>
                <div className="flex flex-col items-center space-y-2 text-center">
                   <img src="/phoneicon.png" alt="Phone" width={60}/>
                    <p className="font-semibold">000 800 919 0566</p>
                    <p>Products & Orders: 24 hours a day, 7 days a week</p>
                    <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                </div>
                <div className="flex flex-col items-center space-y-2 text-center">
                    <img src="/messageicon.png" alt="Phone" width={60}/>
                    <p>24 hours a day</p>
                    <p>7 days a week</p>
                </div>
                <div className="flex flex-col items-center space-y-2 text-center">
                    <img src="/emailicon.png" alt="Phone" width={60}/>
                    <p>We&apos;ll reply within</p>
                    <p>five business days</p>
                </div> 
                <div className="flex flex-col items-center space-y-2 text-center">
                    <img src="/locicon.png" alt="Phone" width={60}/>
                    <p className="font-semibold">STORE LOCATOR</p>
                    <p>Find Nike retail stores near you</p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}