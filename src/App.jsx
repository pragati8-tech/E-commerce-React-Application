// App.jsx - Main component, wraps entire app with Router and Header

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "./store/cartSlice";
import Header from "./components/Header";
// import ProductList from "./components/ProductList";
// import ProductDetail from "./components/ProductDetail";
// import Cart from "./components/Cart";
// import NotFound from "./components/NotFound";
// import Checkout from "./components/Checkout";
import { lazy, Suspense } from 'react'
import "./App.css";
// Lazy loading 
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const NotFound = lazy(() => import('./components/NotFound'));

// Loading fallback component
function PageLoader() {
  return (
    <div className="page-loader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}
function Layout() {
  const cartCount = useSelector(selectCartCount);

  return (
    <>
      <Header cartCount={cartCount} />
      <main className="main-content">
          <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

// Router setup using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductList />, // Home
      },
      {
        path: "product/:id",
        element: <ProductDetail />, // Product Detail
      },
      {
        path: "cart",
        element: <Cart />, // Cart
      },
      {
        path: "*",
        element: <NotFound />, // 404
      },
      {
        path: "checkout",
        element: <Checkout />, // Checkout
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
