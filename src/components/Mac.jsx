import mac from "../assets/images/mac.png"


function Mac() {
    return (
        <>
           <div className="flex flex-col items-center justify-center gap-2 bg-[#f2f3f7] px-10 py-5 text-center text-black mt-3 cursor-pointer">
                           
                               
                              
                                <h1 className="text-3xl font-semibold lg:text-5xl">Mac mini</h1>
                               <p className="text-center text-lg lg:text-2xl">
                                  Now with M6 and M5 Pro
                                </p>
                
                                <div className="mt-2 flex gap-4">
                                    <button className="rounded-full bg-blue-500 px-4 py-2 text-white lg:px-6 lg:py-3 lg:text-lg">
                                        Learn more
                                    </button>
                                    <button className="ml-4 rounded-full border border-blue-500 bg-[#f2f3f7] px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white lg:px-6 lg:py-3 lg:text-lg">
                                        Buy
                                    </button>
                                </div>
                             
                              
                            <div className="flex justify-center bg-black">
                                <img
                                    src={mac}
                                    alt="iPhone 15 Pro"
                                    className="block  w-full max-w-[500px] h-56 object-contain bg-black mx-auto"
                                />
                            </div>
                              
                             
                            </div>   
        </>
    )
}

export default Mac