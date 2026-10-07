import tradein from "../assets/images/tradein.png"


function Tradein() {
    return (
        <>
              <div className="mt-3 flex min-h-[28rem] cursor-pointer flex-col items-center justify-center gap-2 bg-[#F4F5F6] px-10 py-5 text-center text-black">
                                     
                                         
                                        
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
                                       
                                        
                                      <div className="-mx-10 mt-2 w-[calc(100%+5rem)] overflow-hidden">
                                          <img
                                              src={tradein}
                                              alt="iPhone 15 Pro"
                                              className="block h-56 w-full max-w-none object-cover"
                                          />
                                      </div>
                                        
                                       
                                      </div> 
        </>
    )
}

export default Tradein