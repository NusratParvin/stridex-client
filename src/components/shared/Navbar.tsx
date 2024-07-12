import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faSearch,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductsMenu = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleAboutUsMenu = () => {
    setIsAboutUsOpen(!isAboutUsOpen);
  };

  return (
    <nav className="navbar fixed w-full z-10 top-0 pt-4 pb-2 text-white transition-colors duration-300 tracking-wider">
      <div className="w-full lg:w-11/12 mx-auto px-4 flex justify-between items-center h-16">
        <div className="md:hidden flex items-center space-x-4">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div className="flex-1 flex justify-center md:justify-start">
          <Link to="/" className="text-4xl font-bold italic">
            Stride
            <span className="text-red-700 font-extrabold text-5xl">X</span>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center space-x-8 text-xl">
          <Link to="/" className="hover:text-red-700 transition duration-300">
            Home
          </Link>
          <div className="relative group">
            <div className="group-hover:text-red-700 transition duration-300 flex items-center cursor-pointer">
              About Us
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-1 text-red-700 transition-transform duration-300 group-hover:rotate-180 group-hover:text-red-800"
              />
            </div>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white text-black border rounded-lg shadow-lg opacity-0 text-sm group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out origin-top transform scale-y-0 group-hover:scale-y-100 ${
                isAboutUsOpen ? "opacity-100 block scale-y-100" : ""
              }`}
            >
              <Link
                to="/about/whoAreWe"
                className="block m-1 px-4 py-1 hover:bg-gray-100 hover:text-red-700 transition duration-300"
              >
                Who Are We
              </Link>
              <Link
                to="/about/ourTeam"
                className="block  m-1  px-4 py-2 hover:bg-gray-100 hover:text-red-700 transition duration-300"
              >
                Our Team
              </Link>
              <Link
                to="/about/storeInformation"
                className="block m-1  px-4 py-2 hover:bg-gray-100 hover:text-red-700 transition duration-300"
              >
                Store Information
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="group-hover:text-red-700 transition duration-300 flex items-center cursor-pointer">
              Collection
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-1 text-red-700 transition-transform duration-300 group-hover:rotate-180 group-hover:text-red-800"
              />
            </div>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white text-black border rounded-lg shadow-lg opacity-0 text-sm group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out origin-top transform scale-y-0 group-hover:scale-y-100 ${
                isProductsOpen ? "opacity-100 block scale-y-100" : ""
              }`}
            >
              <Link
                to="/products?category=all"
                className="block m-1 px-4 py-1 hover:bg-gray-100 hover:text-red-700 transition duration-300"
              >
                All Products
              </Link>
              <Link
                to="/products/category1"
                className="block  m-1  px-4 py-2 hover:bg-gray-100 hover:text-red-700 transition duration-300"
              >
                Category 1
              </Link>
              <Link
                to="/products/category2"
                className="block  m-1  px-4 py-2 hover:bg-gray-100 hover:text-red-700 transition duration-300"
              >
                Category 2
              </Link>
            </div>
          </div>
          <Link
            to="/contactUs"
            className="hover:text-red-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-white" />
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <FontAwesomeIcon icon={faUser} className="text-white" />
          <FontAwesomeIcon icon={faSearch} className="text-white" />
          <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-700 transition duration-300"
            >
              Home
            </Link>
            <div className="relative group">
              <div
                onClick={toggleAboutUsMenu}
                className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium hover:text-red-700 transition duration-300 cursor-pointer"
              >
                About Us
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                />
              </div>
              {isAboutUsOpen && (
                <div className="pl-6 mt-2">
                  <Link
                    to="/about/whoAreWe"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-red-700 transition duration-300"
                  >
                    Who Are We
                  </Link>
                  <Link
                    to="/about/ourTeam"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-red-700 transition duration-300"
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/about/storeInformation"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-red-700 transition duration-300"
                  >
                    Store Information
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group">
              <div
                onClick={toggleProductsMenu}
                className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium hover:text-red-700 transition duration-300 cursor-pointer"
              >
                Collection
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                />
              </div>
              {isProductsOpen && (
                <div className="pl-6 mt-2">
                  <Link
                    to="/products?category=all"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-red-700 transition duration-300"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/products/category1"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-red-700 transition duration-300"
                  >
                    Category 1
                  </Link>
                  <Link
                    to="/products/category2"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-red-700 transition duration-300"
                  >
                    Category 2
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contactUs"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-700 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>

    // <nav className="navbar fixed w-full z-10 top-0 pt-4 pb-2 text-white  transition-colors duration-300 tracking-wider">
    //   <div className="w-full lg:w-11/12 mx-auto px-4 flex justify-between items-center h-16">
    //     <div className="md:hidden flex items-center space-x-4">
    //       <FontAwesomeIcon icon={faUser} />
    //       <FontAwesomeIcon icon={faShoppingCart} />
    //     </div>
    //     <div className="flex-1 flex justify-center md:justify-start">
    //       <Link to="/" className="text-4xl font-bold italic">
    //         Stride
    //         <span className="text-red-700  font-extrabold text-5xl">X</span>
    //       </Link>
    //     </div>
    //     <div className="hidden md:flex flex-1 items-center justify-center space-x-8 text-xl ">
    //       <Link
    //         to="/"
    //         className="hover:text-red-700  transition duration-300  "
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         to="/about"
    //         className="hover:text-red-700  transition duration-300  "
    //       >
    //         About Us
    //       </Link>
    //       <div className="relative group">
    //         <div className="group-hover:text-red-700  transition duration-300 flex items-center cursor-pointer">
    //           Collection
    //           <FontAwesomeIcon
    //             icon={faChevronDown}
    //             className="ml-1 text-red-700 transition-transform duration-300 group-hover:rotate-180 group-hover:text-red-800 "
    //           />
    //         </div>
    //         <div className="absolute left-0 mt-2 w-48 bg-white text-black border rounded-lg shadow-lg opacity-0 text-sm group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out origin-top transform scale-y-0 group-hover:scale-y-100">
    //           <Link
    //             to="/products/all"
    //             className="block m-1 px-4 py-1 hover:bg-gray-100 hover:text-red-700  transition duration-300"
    //           >
    //             All Products
    //           </Link>
    //           <Link
    //             to="/products/category1"
    //             className="block px-4 py-2 hover:bg-gray-100 hover:text-red-700  transition duration-300"
    //           >
    //             Category 1
    //           </Link>
    //           <Link
    //             to="/products/category2"
    //             className="block px-4 py-2 hover:bg-gray-100 hover:text-red-700  transition duration-300"
    //           >
    //             Category 2
    //           </Link>
    //         </div>
    //       </div>

    //       <Link
    //         to="/cart"
    //         className="hover:text-red-700  transition duration-300"
    //       >
    //         Contact Us
    //       </Link>
    //     </div>
    //     <div className="md:hidden flex items-center">
    //       <button onClick={toggleMenu}>
    //         <FontAwesomeIcon icon={faBars} className="text-white" />
    //       </button>
    //     </div>
    //     <div className="hidden md:flex items-center space-x-4">
    //       <FontAwesomeIcon icon={faUser} className="text-white" />
    //       <FontAwesomeIcon icon={faSearch} className="text-white" />
    //       <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
    //     </div>
    //   </div>
    //   {isOpen && (
    //     <div className="md:hidden bg-black text-white">
    //       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    //         <Link
    //           to="/"
    //           className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-700  transition duration-300"
    //         >
    //           Home
    //         </Link>
    //         <Link
    //           to="/about"
    //           className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-700  transition duration-300"
    //         >
    //           About Us
    //         </Link>
    //         <div className="relative group">
    //           <div className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium   hover:text-red-700  transition duration-300 cursor-pointer">
    //             Collection
    //             <FontAwesomeIcon
    //               icon={faChevronDown}
    //               className="ml-1 transition-transform duration-300 group-hover:rotate-180"
    //             />
    //           </div>
    //           <div className="absolute left-0 mt-2 w-48 bg-white text-black border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out origin-top transform scale-y-0 group-hover:scale-y-100">
    //             <Link
    //               to="/products/all"
    //               className="block m-1 px-4 py-2 hover:bg-red-700 hover:text-white transition duration-300"
    //             >
    //               All Products
    //             </Link>
    //             <Link
    //               to="/products/category1"
    //               className="block px-4 py-2 hover:bg-gray-100 hover:text-red-700  transition duration-300"
    //             >
    //               Category 1
    //             </Link>
    //             <Link
    //               to="/products/category2"
    //               className="block px-4 py-2 hover:bg-gray-100 hover:text-red-700  transition duration-300"
    //             >
    //               Category 2
    //             </Link>
    //           </div>
    //         </div>
    //         <Link
    //           to="/cart"
    //           className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-700  transition duration-300"
    //         >
    //           Contact Us
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </nav>
  );
};

export default Navbar;
