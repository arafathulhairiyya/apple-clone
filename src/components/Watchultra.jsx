
import watchultra from "../assets/images/watchultra.png"
import apple from "../assets/images/apple.png"

function Watchultra() {
    return (
        <>
         <div className="flex flex-col items-center justify-center gap-2 bg-black px-10 py-5 text-center text-white mt-3 cursor-pointer">
                     <div className="flex items-center gap-2">
                         <img src={apple} alt="apple" className="w-8 h-8"/>
                      
                        <h1 className="text-3xl font-semibold lg:text-5xl">WATCH <span className="font-light">ULTRA 4</span></h1>
                     </div>
                     
                      <div>
                         <img
                            src={watchultra}
                            alt="iPhone 15 Pro"
                            className="  w-full max-w-[500px] h-56 object-contain  mx-auto flex justify-center bg-black"
                        />
                        <p className="text-center text-lg lg:text-2xl">
                           A battery you can't outrun.
                        </p>
                      </div>
                    
                       
        
                        <div className="mt-2 flex gap-4">
                            <button className="rounded-full bg-blue-500 px-4 py-2 text-white lg:px-6 lg:py-3 lg:text-lg">
                                Learn more
                            </button>
                            <button className="ml-4 rounded-full border border-blue-500 bg-black px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white lg:px-6 lg:py-3 lg:text-lg">
                                Buy
                            </button>
                        </div>
                    </div>
        </>
    )
}

export default Watchultra