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
import AllProducts from "../components/pages/AllProducts";

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
        path: "products",
        element: <AllProducts />,
      },
      // {
      //   path: "product/:id",
      //   element: <SingleProduct />,
      // },
      // {
      //   path: "manage",
      //   element: <ManageProducts />,
      // },
      // {
      //   path: "cart",
      //   element: <Cart />,
      // },
      // {
      //   path: "checkout",
      //   element: <Checkout />,
      // },
    ],
  },
]);

export default router;
