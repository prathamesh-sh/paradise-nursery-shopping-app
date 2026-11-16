# 🌿 Paradise Nursery – Online Plant Shopping Application

A modern, fully responsive plant shopping application built with **React.js** and **Redux Toolkit**. Browse curated collections of indoor, aromatic, and outdoor plants, manage your cart, and enjoy a nature-inspired shopping experience.

---

## 📋 Project Description

Paradise Nursery is an e-commerce web application that lets users explore and purchase a wide variety of houseplants. The application features a beautiful landing page, organized plant categories, a fully functional shopping cart, and smooth state management powered by Redux Toolkit.

---

## 🎯 Project Objectives

- Provide an intuitive and attractive platform for plant enthusiasts.
- Allow users to browse plants by curated category.
- Enable adding, removing, and updating cart items in real time.
- Demonstrate practical use of React component architecture and Redux state management.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React 18** | UI component library |
| **Redux Toolkit** | Global cart state management |
| **React-Redux** | Connecting Redux store to React components |
| **Vite 5** | Fast development build tool |
| **CSS3** | Custom responsive styling |
| **JavaScript (ES6+)** | Application logic |

---

## ✨ Main Features

- 🏡 **Landing Page** – Eye-catching hero section with a "Get Started" call-to-action button.
- 🌱 **About Us Page** – Company introduction, mission, and vision embedded on the landing page.
- 🛍️ **Product Catalog** – 18 unique plants across 3 curated categories (6 per category).
- 🛒 **Shopping Cart** – Add, increment, decrement, and remove items with live totals.
- 🔢 **Cart Badge** – Real-time cart item count displayed in the navigation bar.
- 💰 **Total Price** – Live running total calculated in the cart view.
- 🧾 **Checkout** – "Coming Soon" placeholder for future checkout integration.
- 📱 **Responsive Design** – Optimized for desktop, tablet, and mobile screens.

---

## 🗂️ Project Folder Structure

```
paradise-nursery-shopping-app/
├── public/
│   └── images/
│       └── landing-bg.jpg       # Background image for landing page
├── src/
│   ├── AboutUs.jsx              # About Us section component
│   ├── AboutUs.css              # Styles for About Us
│   ├── App.jsx                  # Root component with Redux Provider and routing logic
│   ├── App.css                  # Landing page styles and background image
│   ├── CartItem.jsx             # Shopping cart component (view, modify, checkout)
│   ├── CartItem.css             # Styles for the cart
│   ├── CartSlice.jsx            # Redux slice: addItem, removeItem, updateQuantity
│   ├── Navbar.jsx               # Navigation bar with cart badge
│   ├── Navbar.css               # Styles for Navbar
│   ├── ProductList.jsx          # Plant catalog with 3 categories × 6 plants
│   ├── ProductList.css          # Styles for the product catalog
│   ├── store.js                 # Redux store configuration
│   ├── main.jsx                 # React app entry point
│   └── index.css                # Global CSS reset and base styles
├── index.html                   # Vite HTML entry point
├── package.json                 # Project dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

---

## ⚙️ Installation Instructions

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prathamesh-sh/paradise-nursery-shopping-app.git
   cd paradise-nursery-shopping-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## 🚀 Commands to Run the Application

| Command | Description |
|---|---|
| `npm run dev` | Start development server at `http://localhost:5173` |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |

---

## 🛒 Redux Cart State Management

The cart is managed by `CartSlice.jsx` which implements three reducers:

- **`addItem(plant)`** – Adds a plant to the cart; increments quantity if already present.
- **`removeItem({ name })`** – Removes a plant entirely from the cart.
- **`updateQuantity({ name, quantity })`** – Updates a plant's quantity; removes it if quantity reaches zero.

---

## 🌿 Plant Categories

| Category | No. of Plants |
|---|---|
| Air Purifying Plants | 6 |
| Aromatic Fragrant Plants | 6 |
| Low Maintenance & Outdoor Plants | 6 |
| **Total** | **18** |

---

## 📸 Screenshots / Preview

| Screen | Description |
|---|---|
| **Landing Page** | Full-screen nature background with company name, tagline, intro text, About Us section, and Get Started button |
| **Product Catalog** | Grid of plant cards with image, name, description, price badge, and Add to Cart button |
| **Shopping Cart** | List of cart items with quantity controls, item subtotals, grand total, Continue Shopping, and Checkout |

---

## 👨‍💻 Author

**Prathamesh-sh**  
GitHub: [@Prathamesh-sh](https://github.com/Prathamesh-sh)

---

## 📄 License

This project was created as part of a Coursera IBM Full Stack Developer course final project.
