// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import Rating from "react-rating";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";
// import { PhotoProvider, PhotoView } from "react-photo-view";
// import "react-photo-view/dist/react-photo-view.css";
// import { addToCart } from "@/redux/features/cart/cartSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import AlertDestructive from "@/components/ui/alert";
// import { Spinner } from "@/components/ui/spinner";

// const ProductDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const dispatch = useAppDispatch();

//   const { data, error, isLoading } = useGetProductByIdQuery(id);
//   const product = data?.data;

//   const cart = useAppSelector((state) => state.cart.items);

//   const [quantity, setQuantity] = useState(1);

//   const isProductInCart = cart.find(
//     (item) => item.productInfo._id === product?._id
//   );

//   const handleAddToCart = () => {
//     if (isProductInCart && isProductInCart.quantity < product.stockQuantity) {
//       console.log("clicked");

//       dispatch(addToCart({ product, quantity: isProductInCart.quantity + 1 }));
//     } else if (!isProductInCart) {
//       dispatch(addToCart({ product, quantity }));
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Spinner />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <AlertDestructive message="Error loading product details" />
//       </div>
//     );
//   }

//   return (
//     <section className="text-gray-700 overflow-hidden bg-white">
//       <div className="w-10/12 mt-10 py-24 mx-auto bg-gray-50 px-12">
//         <div className="flex flex-wrap h-full">
//           <div className="lg:w-1/2 w-full object-cover max-h-[calc(100vh-8rem)] overflow-hidden">
//             <PhotoProvider>
//               <PhotoView src={product?.image}>
//                 <img
//                   src={product?.image}
//                   alt={product?.name}
//                   className="w-full h-full object-contain"
//                 />
//               </PhotoView>
//             </PhotoProvider>
//           </div>
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h2 className="text-xl text-red-600 font-semibold tracking-wide">
//               {product?.brand}
//             </h2>
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {product?.name}
//             </h1>
//             <div className="flex mb-4">
//               <span className="flex items-center">
//                 <Rating
//                   className="text-xs"
//                   emptySymbol={<FontAwesomeIcon icon={faStar} color="#ddd" />}
//                   fullSymbol={<FontAwesomeIcon icon={faStar} color="#ffb400" />}
//                   initialRating={product?.rating}
//                   readonly
//                 />
//                 <span className="text-gray-600 ml-3">
//                   {product?.rating} Ratings
//                 </span>
//               </span>
//             </div>
//             <p className="leading-relaxed">{product?.description}</p>
//             <p className="uppercase font-semibold pt-4">{product?.category}</p>
//             <div className="text-black mt-8 pb-5 border-b-2 border-gray-200 mb-5">
//               Current Stock # {product?.stockQuantity}
//             </div>
//             <div className="flex">
//               <span className="title-font font-medium text-2xl text-gray-900">
//                 ${product?.price}
//               </span>
//               <button
//                 onClick={handleAddToCart}
//                 className="flex ml-auto text-white bg-red-600 border-0 py-2 px-6 hover:bg-red-700  "
//                 disabled={
//                   isProductInCart &&
//                   isProductInCart.quantity >= product?.stockQuantity
//                 }
//               >
//                 {isProductInCart &&
//                 isProductInCart.quantity >= product?.stockQuantity
//                   ? "Out of Stock"
//                   : "Add to Cart"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetails;

import { useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import AlertDestructive from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetProductByIdQuery(id);
  const product = data?.data;

  const cart = useAppSelector((state) => state.cart.items);

  const [quantity, setQuantity] = useState(1);

  const isProductInCart = cart.find(
    (item) => item.productInfo._id === product?._id
  );

  const handleAddToCart = () => {
    if (isProductInCart && isProductInCart.quantity < product.stockQuantity) {
      dispatch(
        addToCart({
          productInfo: product,
          quantity: isProductInCart.quantity + 1,
        })
      );
    } else if (!isProductInCart) {
      dispatch(addToCart({ productInfo: product, quantity }));
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AlertDestructive message="Error loading product details" />
      </div>
    );
  }

  return (
    <section className="text-gray-700 overflow-hidden bg-white">
      <div className="w-10/12 mt-10 py-24 mx-auto bg-gray-50 px-12">
        <div className="flex flex-wrap h-full">
          <div className="lg:w-1/2 w-full object-cover max-h-[calc(100vh-8rem)] overflow-hidden">
            <PhotoProvider>
              <PhotoView src={product?.image}>
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-contain"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-xl text-red-600 font-semibold tracking-wide">
              {product?.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <Rating
                  className="text-xs"
                  emptySymbol={<FontAwesomeIcon icon={faStar} color="#ddd" />}
                  fullSymbol={<FontAwesomeIcon icon={faStar} color="#ffb400" />}
                  initialRating={product?.rating}
                  readonly
                />
                <span className="text-gray-600 ml-3">
                  {product?.rating} Ratings
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{product?.description}</p>
            <p className="uppercase font-semibold pt-4">{product?.category}</p>
            <div className="text-black mt-8 pb-5 border-b-2 border-gray-200 mb-5">
              Current Stock # {product?.stockQuantity}
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
              <button
                onClick={handleAddToCart}
                className={`flex ml-auto text-white border-0 py-2 px-6 ${
                  isProductInCart &&
                  isProductInCart.quantity >= product?.stockQuantity
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                }`}
                disabled={
                  isProductInCart &&
                  isProductInCart.quantity >= product?.stockQuantity
                }
              >
                {isProductInCart &&
                isProductInCart.quantity >= product?.stockQuantity
                  ? "Out of Stock"
                  : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
