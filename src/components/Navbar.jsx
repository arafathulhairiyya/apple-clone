import apple from "../assets/images/apple.png"
import search from "../assets/images/search.png"
import bag from "../assets/images/bag.png"
import menu from "../assets/images/menu.png"
function Navbar() {
  const navItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  return (
    <div className="flex items-center justify-between gap-5 bg-black px-6 py-5 text-white lg:justify-center lg:gap-8">
      <img src={apple} alt="Apple" className="h-5 w-5 cursor-pointer opacity-75 hover:opacity-100" />

      <ul className="hidden items-center gap-5 text-sm lg:flex">
        {navItems.map((item) => (
          <li key={item} className="cursor-pointer opacity-75 hover:opacity-100">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5 lg:gap-5">
        <img src={search} alt="Search" className="h-5 w-5 cursor-pointer opacity-75 hover:opacity-100" />
        <img src={bag} alt="Bag" className="h-5 w-5 cursor-pointer opacity-75 hover:opacity-100" />
        <img src={menu} alt="Menu" className="block h-5 w-5 cursor-pointer opacity-75 hover:opacity-100 lg:hidden" />
      </div>
    </div>
  );
}



export default Navbar