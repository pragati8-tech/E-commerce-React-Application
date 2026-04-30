// App.jsx - Main component, wraps entire app with Router and Header

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import "./App.css";

function Layout() {
  const cartCount = 0;

  return (
    <>
      <Header cartCount={cartCount} />
      <main className="main-content">
        <Outlet />
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
        element: <ProductList />,
      },
      {
        path: "product/:id", // ← dynamic route
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
