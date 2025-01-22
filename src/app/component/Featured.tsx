import Button from "./Button"
export default function Featured(){
    return(
        <div className="relative w-full px-4 py-10">
            {/* Section Header */}
            <div className="">
             <h1 className=" text-2xl font-bold">Featured</h1>
            <div className="flex items-center justify-between flex-col bg-light-gray py-2 px-10 md:px-0">
                <img src="/run.png" alt="run" />
                <h1 className="text-4xl uppercase pt-2 text-center font-bold ">STEP INTO WHAT FEELS GOOD</h1>
                <p className="py-10"> Cause everyone should know the feeling of running in that perfact pair
                </p>
                <Button text="Find Your Shoe" classNames="rounded-full py-2"/>
               
            </div>
        </div>
        </div>
    )
}