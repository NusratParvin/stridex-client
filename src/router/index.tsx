// import MovieDetails from "@/pages/Movies/MovieDetails";
// import Movies from "@/pages/Movies/Movies";
// import NotFound from "@/pages/shared/NotFound";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { Homepage } from "../components/pages/Homepage/Homepage";
import AboutUs from "../components/pages/AboutUs/AboutUs";
import { WhoAreWe } from "../components/pages/AboutUs/WhoAreWe";
import { OurTeam } from "../components/pages/AboutUs/OurTeam";
import { StoreInformation } from "../components/pages/AboutUs/StoreInformation";
import ContactUs from "../components/pages/Homepage/ContactUs";
import AllProducts from "@/components/pages/AllProducts/AllProducts";
import ProductDetails from "@/components/pages/AllProducts/ProductDetails";
import Cart from "@/components/pages/cart/Cart";
import CheckOut from "@/components/pages/cart/CheckOut";
import Success from "@/components/pages/cart/Success";
import ManageProducts from "@/components/pages/ManageProducts/ManageProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "about",
        element: <AboutUs />,
        children: [
          {
            path: "whoAreWe",
            element: <WhoAreWe />,
          },
          {
            path: "ourTeam",
            element: <OurTeam />,
          },
          {
            path: "storeInformation",
            element: <StoreInformation />,
          },
        ],
      },
      {
        path: "contactUS",
        element: <ContactUs />,
      },
      {
        path: "allProducts",
        element: <AllProducts />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "manageProducts",
        element: <ManageProducts />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "success",
        element: <Success />,
      },
    ],
  },
]);

export default router;
