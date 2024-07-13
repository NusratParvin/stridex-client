import { Link } from "react-router-dom";

import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { TProduct } from "@/types";

const SingleProductCard = ({ product }: { product: TProduct }) => {
  const {
    _id,
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
    // <div className="  overflow-hidden shadow-lg ">
    //   <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
    //   <div className="mx-4">
    //     <div className="flex justify-between items-center ">
    //       <h3 className="text-xl font-semibold">{name}</h3>
    //       <Rating
    //         className="text-sm"
    //         emptySymbol={<FontAwesomeIcon icon={faStar} color="#ddd" />}
    //         fullSymbol={<FontAwesomeIcon icon={faStar} color="#ffb400" />}
    //         initialRating={rating}
    //         readonly
    //       />
    //     </div>
    //     <div className="flex justify-between items-center mb-2 ">
    //       <p className="text-lg font-semibold text-red-700"> {brand}</p>
    //       <p className="text-sm">Only {stockQuantity} left</p>
    //     </div>

    //     <p className="text-md">{description}</p>
    //     <p className="text-sm text-gray-500">{category} </p>

    //     <p className="text-lg font-semibold mt-1 mb-4">${price}</p>
    //   </div>
    //   <Link to={`/products/${id}`} className="mt-4 w-full">
    //     <button className="w-full bg-red-600 text-white py-2 hover:bg-red-700 transition duration-300">
    //       View Details
    //     </button>
    //   </Link>
    // </div>

    <div className="flex flex-col h-full shadow-xl ">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <div className="flex-1 mx-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <Rating
            emptySymbol={<FontAwesomeIcon icon={faStar} color="#ddd" />}
            fullSymbol={<FontAwesomeIcon icon={faStar} color="#ffb400" />}
            initialRating={rating}
            readonly
          />
        </div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold text-red-700">{brand}</p>
          <p className="text-sm">Only {stockQuantity} left</p>
        </div>
        <p className="text-md">{description}</p>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-lg font-semibold mt-1">${price}</p>
      </div>
      <div className="mt-auto">
        <Link to={`/product/${_id}`}>
          <button className="mt-4 w-full bg-red-600 text-white py-2 hover:bg-red-700 transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProductCard;
