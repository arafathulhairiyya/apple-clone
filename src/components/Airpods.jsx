import airpods from "../assets/images/airpods.png"


function Airpods() {
    return (
        <>
             <div
                 className="mt-3 flex min-h-[28rem] cursor-pointer flex-col items-center justify-end gap-2 bg-white bg-cover bg-center px-10 pb-10 pt-5 text-center text-white"
                 style={{ backgroundImage: `url(${airpods})` }}
             >
                                           
                                               
                                              
                                                <h1 className="text-3xl font-semibold lg:text-5xl">AirPods 5</h1>
                                               <p className="text-center text-lg lg:text-2xl">
                                                  Now with M6 and M5 Pro
                                                </p>
                                
                                                <div className="mt-2 flex gap-4">
                                                    <button className="rounded-full bg-blue-500 px-4 py-2 text-white lg:px-6 lg:py-3 lg:text-lg">
                                                        Learn more
                                                    </button>
                                                    <button className="ml-4 rounded-full border border-blue-500 bg-[#020101] px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white lg:px-6 lg:py-3 lg:text-lg">
                                                        Buy
                                                    </button>
                                                </div>
                                             
                                              
                                           
                                              
                                             
                                            </div> 
        </>
    )
}

export default Airpods