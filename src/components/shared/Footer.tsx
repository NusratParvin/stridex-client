import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 bg-black text-white/80">
      <div
        className="w-10/12 flex flex-col justify-between py-12 mx-auto space-y-8 lg:flex-row lg:space-y-0
      border-b border-red-700/30
      "
      >
        <div className="lg:w-1/3">
          <Link to="/" className="text-6xl font-bold italic">
            Stride
            <span className="text-red-700  font-extrabold text-7xl">X</span>
          </Link>
          {/* <Link
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-50" />
            </div>
            <span className="self-center text-2xl font-semibold">
              Brand name
            </span>
          </Link> */}
        </div>
        <div className="grid grid-cols-2 text-base gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3  ">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-red-700 text-xl font-semibold  ">
              Product
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-red-700 text-xl font-semibold ">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="uppercase text-red-700 text-xl font-semibold ">
              Social media
            </div>
            <div className="flex justify-start space-x-3">
              <Link to="#" title="Facebook" className="flex items-center p-1">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-5 h-5 fill-current"
                />
              </Link>
              <Link to="#" title="Twitter" className="flex items-center p-1">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-5 h-5 fill-current"
                />
              </Link>
              <Link to="#" title="Instagram" className="flex items-center p-1">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-5 h-5 fill-current"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-600">
        © 2024 Stride<span className="text-red-700">X</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
