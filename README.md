# ShoppyGlobe - E-commerce Application

A basic e-commerce application built with React and Vite.

## GitHub Repository

[ShoppyGlobe GitHub Repo](https://github.com/pragati8-tech/E-commerce-React-Application)

## Tech Stack

- React + Vite
- Redux Toolkit
- React Router DOM
- CSS

## Features

- Product listing with search
- Product detail page
- Add to cart / Remove from cart
- Quantity management
- Checkout with order placement
- 404 Not Found page
- Lazy loading for performance
- Responsive design

## Project Structure
shoppyglobe/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── Checkout.jsx
│   │   └── NotFound.jsx
│   ├── hooks/
│   │   └── useFetchProducts.js
│   ├── store/
│   │   ├── store.js
│   │   └── cartSlice.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json

## Installation

```bash
# Clone the repository
git clone https://github.com/pragati8-tech/E-commerce-React-Application.git

# Go to project folder
cd shoppyglobe

# Install dependencies
npm install

# Run the app
npm run dev
```

## API Used

- [DummyJSON](https://dummyjson.com/products)

## Pages

| Page | Route |
|------|-------|
| Home | / |
| Product Detail | /product/:id |
| Cart | /cart |
| Checkout | /checkout |
| Not Found | * |