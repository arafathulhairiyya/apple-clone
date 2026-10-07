import { useState } from "react"

const footerSections = [
  {
    title: "Shop and Learn",
    links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
  },
  {
    title: "Apple Wallet",
    links: ["Wallet", "Apple Pay"],
  },
  {
    title: "Account",
    links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
  },
  {
    title: "Entertainment",
    links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"],
  },
  {
    title: "Apple Store",
    links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Summer Camp", "Apple Trade In", "Ways to Buy", "Recycling Programme", "Order Status", "Shopping Help"],
  },
  {
    title: "For Business",
    links: ["Apple and Business", "Shop for Business"],
  },
  {
    title: "For Education",
    links: ["Apple and Education", "Shop for Education", "Shop for University"],
  },
  {
    title: "For Healthcare",
    links: ["Apple in Healthcare", "Health on Apple Watch"],
  },
  {
    title: "For Government",
    links: ["Shop for Government", "Shop for Veterans and Military"],
  },
  {
    title: "Apple Values",
    links: ["Accessibility", "Education", "Environment", "Privacy", "Supply Chain Innovation"],
  },
  {
    title: "About Apple",
    links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
  },
]

const legalLinks = ["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"]

function Footer() {
  const [openSections, setOpenSections] = useState([])

  const toggleSection = (title) => {
    setOpenSections((current) =>
      current.includes(title) ? current.filter((item) => item !== title) : [...current, title],
    )
  }

  return (
    <footer className="bg-[#f5f5f7] px-4 pb-8 pt-7 text-[#6e6e73] sm:px-6">
      <div className="mx-auto max-w-[980px]">
        <p className="border-b border-[#d2d2d7] pb-4 text-xs leading-[1.5]">
          Apple TV+ requires a subscription. A subscription is available for new and qualifying returning
          subscribers. See <a href="https://www.apple.com/in/apple-tv-plus/" className="underline">apple.com/in/apple-tv-plus</a> for details.
        </p>

        <nav aria-label="Apple footer navigation" className="py-3">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
            {footerSections.map((section) => {
              const isOpen = openSections.includes(section.title)
              const panelId = `footer-${section.title.toLowerCase().replaceAll(" ", "-")}`

              return (
                <section key={section.title} className="border-b border-[#d2d2d7] lg:border-0">
                  <h2 className="m-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleSection(section.title)}
                      className="flex w-full items-center justify-between py-3 text-left text-xs font-semibold text-[#1d1d1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#06c]"
                    >
                      {section.title}
                      <span aria-hidden="true" className="text-base font-normal text-[#6e6e73]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h2>
                  <ul
                    id={panelId}
                    hidden={!isOpen}
                    className="space-y-2 pb-4 pl-0 text-xs"
                  >
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="transition hover:text-[#1d1d1f] hover:underline">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )
            })}
          </div>
        </nav>

        <div className="border-t border-[#d2d2d7] pt-4 text-xs">
          <p className="leading-5">
            More ways to shop:{" "}
            <a href="https://www.apple.com/in/retail/" className="text-[#06c] underline">
              Find an Apple Store
            </a>{" "}
            or{" "}
            <a href="https://locate.apple.com/in/en/" className="text-[#06c] underline">
              other retailer
            </a>{" "}
            near you.
          </p>

          <div className="mt-4 flex flex-col gap-3 border-t border-[#d2d2d7] pt-4 lg:flex-row lg:items-center lg:justify-between">
            <p>Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {legalLinks.map((link) => (
                <a key={link} href="#" className="border-r border-[#d2d2d7] pr-3 last:border-0 last:pr-0 hover:text-[#1d1d1f]">
                  {link}
                </a>
              ))}
            </div>
            <a href="https://www.apple.com/choose-your-country/" className="hover:text-[#1d1d1f]">
              India
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
