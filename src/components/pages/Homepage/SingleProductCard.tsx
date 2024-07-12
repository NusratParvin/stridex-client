/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SingleProductCard = ({ product }) => {
  const {
    id,
    name,
    category,
    stockQuantity,
    brand,
    rating,
    description,
    price,
    image,
  } = product;

  return (
    <div className="  overflow-hidden shadow-lg ">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <div className="mx-4">
        <div className="flex justify-between items-center ">
          <h3 className="text-xl font-semibold">{name}</h3>
          <Rating
            className="text-sm"
            emptySymbol={<FontAwesomeIcon icon={faStar} color="#ddd" />}
            fullSymbol={<FontAwesomeIcon icon={faStar} color="#ffb400" />}
            initialRating={rating}
            readonly
          />
        </div>
        <div className="flex justify-between items-center mb-2 ">
          <p className="text-lg font-semibold text-red-700"> {brand}</p>
          <p className="text-sm">Only {stockQuantity} left</p>
        </div>

        <p className="text-md"> - {description}</p>
        <p className="text-sm text-gray-500">Category - {category} </p>

        <p className="text-lg font-semibold mt-1 mb-4">${price}</p>
      </div>
      <Link to={`/products/${id}`} className="mt-4 w-full">
        <button className="w-full bg-red-600 text-white py-2 hover:bg-red-700 transition duration-300">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleProductCard;
