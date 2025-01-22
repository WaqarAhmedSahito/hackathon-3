import Link from "next/link";

export default function Hello(){
    return(
        <div className=" justify-between items-center">
            <div className="flex items-center flex-col bg-light-gray py-2 px-10 md:px-0 bg-[#F5F5F5]">
            <h1 className=" font-bold">Hello Nike App</h1>
                <p>Download the app to access everything Nike. <Link className="underline font-bold" href="#">Get Your Great</Link>
                </p>
            </div>
            <div className="flex items-center flex-col bg-light-gray  px-10 md:px-0">
            <img src="/big shoe.png" alt="big shoe"  />
            </div>
        </div>
    )
}