import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Spinner } from "@/components/ui/spinner";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetProductByIdQuery(id);
  const product = data?.data;

  const cart = useAppSelector((state) => state.cart.items);

  const isProductInCart = cart.find(
    (item) => item.productInfo._id === product?._id
  );

  const initialQuantity = 1;

  const [quantity, setQuantity] = useState(initialQuantity);
  const [remainingStock, setRemainingStock] = useState(product?.stockQuantity);

  useEffect(() => {
    if (product) {
      setRemainingStock(
        isProductInCart
          ? product.stockQuantity - isProductInCart.quantity
          : product.stockQuantity
      );
    }
  }, [product, isProductInCart]);

  const handleAddToCart = () => {
    if (isProductInCart && isProductInCart.quantity < product.stockQuantity) {
      dispatch(
        addToCart({
          productInfo: product,
          quantity: isProductInCart.quantity + quantity,
        })
      );
    } else if (!isProductInCart) {
      dispatch(addToCart({ productInfo: product, quantity }));
    }
    setRemainingStock(remainingStock - quantity);
    setQuantity(initialQuantity);
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
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">Error loading product details</span>
        </div>
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
            {product ? (
              <>
                <h2 className="text-xl text-red-600 font-semibold tracking-wide">
                  {product.brand}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <Rating
                      emptySymbol={
                        <FontAwesomeIcon icon={faStar} color="#ddd" />
                      }
                      fullSymbol={
                        <FontAwesomeIcon icon={faStar} color="#ffb400" />
                      }
                      initialRating={product.rating}
                      readonly
                    />
                    <span className="text-gray-600 ml-3">
                      {product.rating} Ratings
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <p className="uppercase font-semibold pt-4">
                  {product.category}
                </p>
                <div className="text-black mt-8 pb-5 border-b-2 border-gray-200 mb-5">
                  Current Stock # {product.stockQuantity}
                </div>
                <div className="flex items-center">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>
                  <div className="flex ml-4 items-center">
                    <button
                      className={`px-2 border border-gray-300 ${
                        remainingStock === 0
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : 1)
                      }
                      disabled={remainingStock === 0}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="w-12 text-center border-t border-b border-gray-300"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className={`px-2 border border-gray-300 ${
                        remainingStock === 0
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() =>
                        setQuantity(
                          quantity < remainingStock ? quantity + 1 : quantity
                        )
                      }
                      disabled={remainingStock === 0}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex mt-4">
                  <button
                    onClick={handleAddToCart}
                    className={`flex ml-auto text-white border-0 py-2 px-6 hover:bg-red-700 ${
                      remainingStock === 0
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-red-600"
                    }`}
                    disabled={remainingStock === 0}
                  >
                    {remainingStock === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <p>Loading product details...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
