import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useAddProductMutation } from "@/redux/features/products/productsApi";
import { toast } from "sonner";

interface FormData {
  name: string;
  category: string;
  stockQuantity: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
}

const AddProduct = ({ onClose }: any) => {
  const [addProduct] = useAddProductMutation();
  const methods = useForm<FormData>({
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const validateURL = (value: string) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i" // fragment locator
    );
    return pattern.test(value) || "Invalid URL format";
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log(data);
      await addProduct(data).unwrap();
      toast.success("Product added successfully");
      onClose();
    } catch (error: any) {
      if (error.status === 400) {
        toast.error("Failed to add product: Invalid input data");
      } else {
        toast.error("Failed to add product");
      }
    }
  };

  return (
    // <FormProvider {...methods}>
    //   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    //     <div className="bg-white p-8 rounded-lg w-1/2 max-h-[90vh] overflow-y-auto">
    //       <h2 className="text-lg font-semibold text-gray-700">
    //         Add New Product
    //       </h2>
    //       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Name
    //           </label>
    //           <input
    //             type="text"
    //             {...register("name", { required: "Name is required" })}
    //             className="block w-full border border-gray-300 p-2 rounded-md"
    //           />
    //           {errors.name && (
    //             <p className="text-red-500 text-sm">{errors.name.message}</p>
    //           )}
    //         </div>
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Category
    //           </label>
    //           <input
    //             type="text"
    //             {...register("category", { required: "Category is required" })}
    //             className="block w-full border border-gray-300 p-2 rounded-md"
    //           />
    //           {errors.category && (
    //             <p className="text-red-500 text-sm">
    //               {errors.category.message}
    //             </p>
    //           )}
    //         </div>
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Stock Quantity
    //           </label>
    //           <input
    //             type="number"
    //             {...register("stockQuantity", {
    //               required: "Stock Quantity is required",
    //               valueAsNumber: true,
    //               min: {
    //                 value: 0,
    //                 message: "Stock Quantity cannot be negative",
    //               },
    //             })}
    //             className="block w-full border border-gray-300 p-2 rounded-md"
    //           />
    //           {errors.stockQuantity && (
    //             <p className="text-red-500 text-sm">
    //               {errors.stockQuantity.message}
    //             </p>
    //           )}
    //         </div>
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Brand
    //           </label>
    //           <input
    //             type="text"
    //             {...register("brand", { required: "Brand is required" })}
    //             className="block w-full border border-gray-300 p-2 rounded-md"
    //           />
    //           {errors.brand && (
    //             <p className="text-red-500 text-sm">{errors.brand.message}</p>
    //           )}
    //         </div>
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Rating
    //           </label>
    //           <input
    //             type="number"
    //             step="0.1"
    //             {...register("rating", {
    //               required: "Rating is required",
    //               valueAsNumber: true,
    //               min: { value: 0, message: "Rating cannot be negative" },
    //               max: { value: 5, message: "Rating cannot exceed 5" },
    //             })}
    //             className="block w-full border border-gray-300 p-2 rounded-md"
    //           />
    //           {errors.rating && (
    //             <p className="text-red-500 text-sm">{errors.rating.message}</p>
    //           )}
    //         </div>
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Description
    //           </label>
    //           <textarea
    //             {...register("description", {
    //               required: "Description is required",
    //             })}
    //             className="block w-full border border-gray-300 p-2 rounded-md"
    //           />
    //           {errors.description && (
    //             <p className="text-red-500 text-sm">
    //               {errors.description.message}
    //             </p>
    //           )}
    //         </div>
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Price
    //           </label>
    //           <input
    //             type="number"
    //             {...register("price", {
    //               required: "Price is required",
    //               valueAsNumber: true,
    //               min: { value: 0, message: "Price cannot be negative" },
    //             })}
    //             className="block w-full border border-gray-300 p-2 rounded-md"
    //           />
    //           {errors.price && (
    //             <p className="text-red-500 text-sm">{errors.price.message}</p>
    //           )}
    //         </div>
    //         <div>
    //           <label className="block text-sm font-medium text-gray-700">
    //             Image URL
    //           </label>
    //           <input
    //             type="text"
    //             {...register("image", {
    //               required: "Image URL is required",
    //               validate: validateURL,
    //             })}
    //             className="block w-full border border-gray-300 p-2 rounded-md"
    //           />
    //           {errors.image && (
    //             <p className="text-red-500 text-sm">{errors.image.message}</p>
    //           )}
    //         </div>
    //         <div className="flex justify-end">
    //           <button
    //             type="button"
    //             onClick={onClose}
    //             className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             type="submit"
    //             className="bg-[#3EC2C5] text-white px-4 py-2 rounded-md"
    //           >
    //             Add Product
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </FormProvider>

    <FormProvider {...methods}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg w-11/12 md:w-1/2 max-h-[90vh] overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-700">
            Add New Product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="block w-full border border-gray-300 p-2 rounded-md"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Brand
                </label>
                <input
                  type="text"
                  {...register("brand", { required: "Brand is required" })}
                  className="block w-full border border-gray-300 p-2 rounded-md"
                />
                {errors.brand && (
                  <p className="text-red-500 text-sm">{errors.brand.message}</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="block w-full border border-gray-300 p-2 rounded-md"
                >
                  <option value="">Select a category</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Equipment">Equipment</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  {...register("price", {
                    required: "Price is required",
                    valueAsNumber: true,
                    min: { value: 0, message: "Price cannot be negative" },
                  })}
                  className="block w-full border border-gray-300 p-2 rounded-md"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  {...register("stockQuantity", {
                    required: "Stock Quantity is required",
                    valueAsNumber: true,
                    min: {
                      value: 0,
                      message: "Stock Quantity cannot be negative",
                    },
                  })}
                  className="block w-full border border-gray-300 p-2 rounded-md"
                />
                {errors.stockQuantity && (
                  <p className="text-red-500 text-sm">
                    {errors.stockQuantity.message}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <input
                  type="number"
                  step="0.1"
                  {...register("rating", {
                    required: "Rating is required",
                    valueAsNumber: true,
                    min: { value: 0, message: "Rating cannot be negative" },
                    max: { value: 5, message: "Rating cannot exceed 5" },
                  })}
                  className="block w-full border border-gray-300 p-2 rounded-md"
                />
                {errors.rating && (
                  <p className="text-red-500 text-sm">
                    {errors.rating.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                {...register("image", {
                  required: "Image URL is required",
                  validate: validateURL,
                })}
                className="block w-full border border-gray-300 p-2 rounded-md"
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className="block w-full border border-gray-300 p-2 rounded-md"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#3EC2C5] text-white px-4 py-2 rounded-md"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default AddProduct;
