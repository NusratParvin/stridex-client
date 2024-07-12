// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import {
//   removeFromCart,
//   updateQuantity,
// } from "@/redux/features/cart/cartSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// const Cart = () => {
//   const dispatch = useAppDispatch();
//   const cartItems = useAppSelector((state) => state.cart.items);

//   const handleIncrement = (productId: string) => {
//     dispatch(updateQuantity({ productId, quantity: 1 }));
//   };

//   const handleDecrement = (productId: string) => {
//     dispatch(updateQuantity({ productId, quantity: -1 }));
//   };

//   const handleRemove = (productId: string) => {
//     dispatch(removeFromCart(productId));
//   };

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.productInfo.price * item.quantity,
//     0
//   );
//   const shipping = 4.99;
//   const total = subtotal + shipping;

//   return (
//     <div className=" bg-gray-100  py-28">
//       <h2 className="text-4xl text-center pb-8 uppercase">Cart Items</h2>

//       <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//         <div className="  md:w-2/3">
//           {cartItems.map((item) => (
//             <div
//               key={item.productInfo._id}
//               className="justify-between mb-6   h-36 bg-white p-6 shadow-md sm:flex sm:justify-start"
//             >
//               <img
//                 src={item.productInfo.image}
//                 alt={item.productInfo.name}
//                 className="w-full rounded-lg sm:w-40"
//               />
//               <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                 <div className="mt-5 sm:mt-0">
//                   <h2 className="text-lg font-bold text-gray-900">
//                     {item.productInfo.name}
//                   </h2>
//                   <p className="mt-1 text-xs text-gray-700">
//                     {item.productInfo.category}
//                   </p>
//                 </div>
//                 <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                   <div className="flex items-center border-gray-100">
//                     <button
//                       className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
//                       onClick={() => handleDecrement(item.productInfo._id)}
//                     >
//                       -
//                     </button>
//                     <input
//                       className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                       type="number"
//                       value={item.quantity}
//                       readOnly
//                     />
//                     <button
//                       className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
//                       onClick={() => handleIncrement(item.productInfo._id)}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm">${item.productInfo.price}</p>
//                     <FontAwesomeIcon
//                       icon={faTrash}
//                       className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
//                       onClick={() => handleRemove(item.productInfo._id)}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Sub total */}
//         <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//           <div className="mb-2 flex justify-between">
//             <p className="text-gray-700">Subtotal</p>
//             <p className="text-gray-700">${subtotal.toFixed(2)}</p>
//           </div>
//           <div className="flex justify-between">
//             <p className="text-gray-700">Shipping</p>
//             <p className="text-gray-700">${shipping.toFixed(2)}</p>
//           </div>
//           <hr className="my-4" />
//           <div className="flex justify-between">
//             <p className="text-xl font-bold">Total :</p>
//             <div className=" text-left  ">
//               <p className="mb-1 text-xl font-bold">${total.toFixed(2)} </p>
//               <p className="text-sm text-center text-red-700">
//                 {" "}
//                 (VAT Inclusive)
//               </p>
//             </div>
//           </div>
//           <button className="mt-6 w-full bg-red-600 py-1.5 font-medium text-blue-50 hover:bg-red-800">
//             Check Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "@/redux/store";
import {
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const handleIncrement = (productId: string) => {
    dispatch(updateQuantity({ productId, quantity: 1 }));
  };

  const handleDecrement = (productId: string) => {
    dispatch(updateQuantity({ productId, quantity: -1 }));
  };

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.productInfo.price * item.quantity,
    0
  );
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="bg-gray-100 py-28">
      <h2 className="text-4xl text-center pb-8 uppercase">Cart Items</h2>

      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="md:w-2/3">
          {cartItems.map((item) => (
            <div
              key={item.productInfo._id}
              className="justify-between mb-6 h-36 bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={item.productInfo.image}
                alt={item.productInfo.name}
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {item.productInfo.name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">
                    {item.productInfo.category}
                  </p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <button
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      onClick={() => handleDecrement(item.productInfo._id)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      onClick={() => handleIncrement(item.productInfo._id)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">
                      ${item.productInfo.price.toFixed(2)}
                    </p>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      onClick={() => handleRemove(item.productInfo._id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Sub total */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">VAT (15%)</p>
            <p className="text-gray-700">${vat.toFixed(2)}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-xl font-bold">Total :</p>
            <div className="text-left">
              <p className="mb-1 text-xl font-bold">${total.toFixed(2)}</p>
              <p className="text-sm text-red-700">(VAT Inclusive)</p>
            </div>
          </div>
          <button
            className={`mt-6 w-full py-1.5 font-medium text-white rounded-md ${
              cartItems.length > 0
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
