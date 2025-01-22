import Button from "./Button";
import Link from "next/link";
export default function Flook() {
    return (
        <div>
            <div className="flex flex-col items-center py-10">
                <h3>First Look</h3>
                <h2 className="text-5xl uppercase pt-2 text-center">Nike Air Max Pulse</h2>
                <p className="w-full md:w-1/2 text-center py-6">
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
                    Pulse —designed to push you past your limits and help you go to the
                    max.</p>
                <div className="flex space-x-2">
               <Button text="Notify Me" classNames="rounded-full py-2"/>
               <Link href="/productdetail">
               <Button text="Shop Air Max" classNames="rounded-full py-2"/></Link>
               </div>
            </div>
        </div>
    )
}