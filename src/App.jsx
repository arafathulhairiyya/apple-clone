import Icloud from "./components/Icloud"
import Ipadair from "./components/Ipadair"
import Airpods from "./components/Airpods"
import Iphone from "./components/Iphone"
import Iphoneduo from "./components/Iphoneduo"
import Mac from "./components/Mac"
import Navbar from "./components/Navbar"
import Offer from "./components/Offer"
import Tradein from "./components/Tradein"
import Watch from "./components/Watch"
import Watchultra from "./components/Watchultra"
import Movie from "./components/Movie"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Navbar/>
    <Offer/>
    <Iphone/>
    <Iphoneduo/>
    <Watch/>
    <div className="flex flex-col lg:flex-row gap-2">
      <div className="lg:w-1/2">
        <Watchultra/>
      </div>
      <div className="lg:w-1/2">
        <Mac/>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row gap-2">
      <div className="lg:w-1/2">
        <Icloud/>
      </div>
      <div className="lg:w-1/2">
        <Ipadair/>
      </div>
    </div>
     <div className="flex flex-col lg:flex-row gap-2">
      <div className="lg:w-1/2">
        <Airpods/>
      </div>
      <div className="lg:w-1/2">
        <Tradein/>
      </div>
    </div>
    <Movie/>
    <Footer/>
    </>
  )
}

export default App