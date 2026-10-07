import iphoneduo from "../assets/images/iphoneduo.png"
import iphoneduolong from "../assets/images/iphoneduolong.png"

function Iphoneduo() {
    return (
        <>
            <div className="flex flex-col items-center justify-center  bg-white px-10 py-5 text-center text-black cursor-pointer ">
                <h1 className="text-3xl font-semibold lg:text-5xl">iPhone Duo</h1>
                <p className="text-lg lg:text-2xl">Hello, hello.</p>
                <p className="text-sm text-[#8B8B8B] lg:text-xl lg:text-[#6e6e73]">
                    Pre-order starting at 5:30 PM IST on 16 October <br />
                    <span>Available from 23 October.</span>
                </p>

                <div className="mt-2 flex gap-4">
                    <button className="rounded-full bg-blue-500 px-4 py-2 text-white lg:px-6 lg:py-3 lg:text-lg">
                        Learn more
                    </button>
                    <button className="rounded-full border border-blue-500 bg-white px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white lg:px-6 lg:py-3 lg:text-lg">
                        View pricing
                    </button>
                </div>

                <div className="mt-2 w-full">
                    <img
                        src={iphoneduo}
                        alt="iPhone Duo"
                        className="block h-96 w-full object-contain lg:hidden"
                    />
                    <img
                        src={iphoneduolong}
                        alt="iPhone Duo wide"
                        className="hidden h-96 w-full object-contain lg:block"
                    />
                </div>
            </div>
        </>
    )
}

export default Iphoneduo