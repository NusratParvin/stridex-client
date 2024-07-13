import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { updateProductStock } from "@/redux/features/products/productSlice";
import { useForm } from "react-hook-form";
import { clearCart } from "@/redux/features/cart/cartSlice";
import { useUpdateProductStockMutation } from "@/redux/features/products/productsApi";

const CheckOut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const [updateProductStockApi] = useUpdateProductStockMutation();

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
      // reduction in db
      await cartItems.map((item) =>
        updateProductStockApi({
          id: item.productInfo._id,
          stockQuantity: item.productInfo.stockQuantity - item.quantity,
        }).unwrap()
      );

      // reduction in store
      cartItems.forEach((item) => {
        dispatch(
          updateProductStock({
            productId: item.productInfo._id,
            quantity: item.quantity,
          })
        );
      });

      dispatch(clearCart());
      navigate("/success");
    } catch (error) {
      console.error("Failed to place order", error);
    }
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.productInfo.price * item.quantity,
    0
  );
  const vat = subtotal * 0.15;
  const shipping = 4.99;
  const total = subtotal + vat + shipping;

  return (
    <div className="w-11/12 mx-auto py-24">
      <div className="grid sm:px-10 lg:grid-cols-2 pt-8 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <div className="mt-8 space-y-3 border bg-white px-2 py-4 sm:px-6">
            {cartItems.map((item) => (
              <div
                key={item.productInfo._id}
                className="flex flex-col rounded-lg bg-white sm:flex-row"
              >
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={item.productInfo.image}
                  alt={item.productInfo.name}
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.productInfo.name}</span>
                  <span className="float-right text-gray-400">
                    {item.productInfo.category}
                  </span>
                  <p className="text-lg font-bold">
                    ${item.productInfo.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-400">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <label className="bg-gray-100 flex p-4">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="w-14 object-contain"
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Cash On Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>

        <div className="mt-10 bg-gray-50 px-8 pt-8 lg:mt-0 ">
          <p className="text-xl font-medium">Customer Details</p>
          <p className="text-gray-400">
            Complete your order by providing your details.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <label
              htmlFor="name"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                className={`w-full border-gray-200 px-4 py-2 border pl-11 text-sm shadow-sm ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Your full name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {String(errors.name.message)}
                </p>
              )}
            </div>

            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className={`w-full border-gray-200 px-4 py-2 border pl-11 text-sm shadow-sm ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="your.email@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {String(errors.email.message)}
                </p>
              )}
            </div>

            <label
              htmlFor="phone"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Phone <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                className={`w-full border-gray-200 px-4 py-2 border pl-11 text-sm shadow-sm ${
                  errors.phone ? "border-red-500" : ""
                }`}
                placeholder="Your phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {String(errors.phone.message)}
                </p>
              )}
            </div>

            <label
              htmlFor="address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Address <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="address"
                className={`w-full border-gray-200 px-4 py-2 border pl-11 text-sm shadow-sm ${
                  errors.address ? "border-red-500" : ""
                }`}
                placeholder="Your delivery address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">
                  {String(errors.address.message)}
                </p>
              )}
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">VAT (15%)</p>
                <p className="font-semibold text-gray-900">${vat.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">
                  ${shipping.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                ${total.toFixed(2)}
              </p>
            </div>

            <button
              type="submit"
              className="mt-4 mb-8 w-full bg-red-700 px-6 py-3 font-medium text-white"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
