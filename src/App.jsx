// App.jsx - Main component, wraps entire app with Router and Header

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
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
        element: <ProductList />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
