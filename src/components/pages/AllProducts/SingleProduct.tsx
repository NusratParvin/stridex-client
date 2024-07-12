// import { Link } from "react-router-dom";

// import Rating from "react-rating";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { TProduct } from "@/types";

// const SingleProduct = ({ product }: { product: TProduct }) => {
//   const {
//     _id,
//     name,
//     category,
//     stockQuantity,
//     brand,
//     rating,
//     description,
//     price,
//     image,
//   } = product;

//   return (
//     <div className="flex flex-col h-84 bg-white ">
//       <img src={image} alt={name} className="w-full h-32 object-cover mb-4" />
//       <div className="flex-1 m-4 pb-2">
//         <div className="flex justify-between items-center">
//           <h3 className="text-lg font-semibold">{name}</h3>
//           <Rating
//             className="text-xs"
//             emptySymbol={<FontAwesomeIcon icon={faStar} color="#ddd" />}
//             fullSymbol={<FontAwesomeIcon icon={faStar} color="#ffb400" />}
//             initialRating={rating}
//             readonly
//           />
//         </div>
//         <div className="flex justify-between items-center">
//           <p className="text-md font-semibold text-red-700">{brand}</p>
//           <p className="text-sm">Only {stockQuantity} left</p>
//         </div>
//         <p className="text-sm text-gray-500  pb-2">{category}</p>
//         <p className="text-xl tracking-wider font-semibold mt-1">${price}</p>
//       </div>
//       <div className="mt-auto">
//         <Link to={`/products/${_id}`}>
//           <div className="absolute"></div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;

import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye } from "@fortawesome/free-solid-svg-icons";
import { TProduct } from "@/types";

const SingleProduct = ({ product }: { product: TProduct }) => {
  const { _id, name, category, stockQuantity, brand, rating, price, image } =
    product;

  return (
    <div className="flex flex-col h-84 bg-white group">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-32 object-cover mb-4" />
        <Link to={`/products/${_id}`}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <FontAwesomeIcon icon={faEye} className="text-white text-3xl" />
          </div>
        </Link>
      </div>
      <div className="flex-1 m-4 pb-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <Rating
            className="text-xs"
            emptySymbol={<FontAwesomeIcon icon={faStar} color="#ddd" />}
            fullSymbol={<FontAwesomeIcon icon={faStar} color="#ffb400" />}
            initialRating={rating}
            readonly
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold text-red-700">{brand}</p>
          <p className="text-sm">Only {stockQuantity} left</p>
        </div>
        <p className="text-sm text-gray-500  pb-2">{category}</p>
        <p className="text-xl tracking-wider font-semibold mt-1">${price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
