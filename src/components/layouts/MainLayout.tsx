import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useEffect } from "react";
import Footer from "../shared/Footer";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("bg-black");
        } else {
          navbar.classList.remove("bg-black");
        }
      }
    };

    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (location.pathname !== "/") {
        navbar.classList.add("bg-black");
      } else {
        navbar.classList.remove("bg-black");
        window.addEventListener("scroll", handleScroll);
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};
export default MainLayout;
