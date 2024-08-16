// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import RouterLayout from "./non-reusable-ui/RouterLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product.tsx";
import Profile from "./pages/Profile.tsx";
import Cart from "./pages/Cart.tsx";
import Favourite from "./pages/Favourite.tsx";
import Success from "./pages/Success.tsx";
import Cancel from "./pages/Cancel.tsx";
import NotFound from "./pages/NotFound.tsx";

//creating nested routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
