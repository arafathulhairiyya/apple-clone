import iphone from "../assets/images/iphone.png"
import iphonelong from "../assets/images/iphonelong.png"

function Iphone() {
    return (
        <>
            <div className="flex flex-col items-center justify-center  bg-black px-10 py-5 text-center text-white ">
                <h1 className="text-3xl font-semibold lg:text-5xl">iPhone 18 Pro</h1>
                <p className="text-lg lg:text-2xl">Pro further.</p>

                <div className="mt-2 flex gap-4">
                    <button className="rounded-full bg-blue-500 px-4 py-2 text-white lg:px-6 lg:py-3 lg:text-lg">
                        Learn more
                    </button>
                    <button className="ml-4 rounded-full border border-blue-500 bg-black px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white lg:px-6 lg:py-3 lg:text-lg">
                        Buy
                    </button>
                </div>
            </div>

            <div className="bg-black">
                <img
                    src={iphone}
                    alt="iPhone 15 Pro"
                    className="block h-96 w-full object-contain bg-black lg:hidden"
                />
                <img
                    src={iphonelong}
                    alt="iPhone 15 Pro wide"
                    className="hidden h-96 w-full object-contain bg-black lg:block"
                />
            </div>
        </>
    )
}

export default Iphone