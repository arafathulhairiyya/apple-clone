# Apple Website Clone

A responsive, Apple-inspired storefront homepage built with React and Tailwind CSS. The project recreates selected sections of the Apple India website, including product promotions, an Apple TV show carousel, and a collapsible footer directory.

> This project was created with the help of GitHub Copilot (Copilot SDK in VS Code), including assistance with implementation and project documentation. It is an independent learning project and is not affiliated with Apple.

## Features

- Responsive homepage layout for desktop and mobile screens.
- Product and promotional sections for iPhone, Apple Watch, Mac, iPad, iCloud, AirPods, and Trade In.
- Horizontal Apple TV show carousel with five featured cards, touch/trackpad scrolling, previous/next controls, and selectable position indicators.
- Expandable footer navigation sections for Apple product, account, entertainment, store, and company links.
- Tailwind CSS utility styling.

## Tech stack

- React
- Vite
- Tailwind CSS

## Project structure

```text
.
├── public/                 # Static public assets
├── src/
│   ├── assets/images/      # Product and interface images
│   ├── components/         # Homepage sections and reusable UI
│   │   ├── Airpods.jsx
│   │   ├── Footer.jsx      # Expandable footer navigation
│   │   ├── Icloud.jsx
│   │   ├── Ipadair.jsx
│   │   ├── Iphone.jsx
│   │   ├── Iphoneduo.jsx
│   │   ├── Mac.jsx
│   │   ├── Movie.jsx       # Scrollable Apple TV show carousel
│   │   ├── Navbar.jsx
│   │   ├── Offer.jsx
│   │   ├── Tradein.jsx
│   │   ├── Watch.jsx
│   │   └── Watchultra.jsx
│   ├── App.jsx             # Homepage composition
│   ├── index.css           # Tailwind CSS entry point
│   └── main.jsx            # React application entry point
├── index.html
├── package.json
└── vite.config.js
```

## Notes

- Product names, offers, and promotional content are used for demonstration and may not represent current Apple products or offers.
- The carousel artwork uses CSS-generated visuals; it does not use official Apple TV show artwork.
- This clone is for learning and demonstration purposes. Apple and Apple product names are trademarks of Apple Inc.