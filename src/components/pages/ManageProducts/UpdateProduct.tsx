import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { toast } from "sonner";
import { TProduct, TProductUpdated } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useUpdateProductMutation } from "@/redux/features/products/productsApi";

interface UpdateProductProps {
  onClose: () => void;
  productData: TProduct;
}

const UpdateProduct: React.FC<UpdateProductProps> = ({
  onClose,
  productData,
}) => {
  const [updateProduct] = useUpdateProductMutation();
  const methods = useForm<TProduct>({
    defaultValues: productData,
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

  const onSubmit: SubmitHandler<TProduct> = async (data) => {
    const {
      name,
      category,
      stockQuantity,
      brand,
      rating,
      description,
      price,
      image,
    } = data;
    const cleanedData: TProductUpdated = {
      name,
      category,
      stockQuantity,
      brand,
      rating,
      description,
      price,
      image,
    };

    try {
      console.log(cleanedData);
      await updateProduct({ id: productData._id, ...cleanedData }).unwrap();
      toast.success("Product updated successfully");
      onClose();
    } catch (error: any) {
      toast.error("Failed to update product");
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg w-11/12 md:w-1/2 max-h-[90vh] overflow-y-auto relative">
          <button
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="text-lg font-semibold text-gray-700">
            Update Product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="block text-gray-700 w-full border border-gray-300 p-1 text-base"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name?.message}</p>
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
                  className="block text-gray-700 w-full border border-gray-300 p-1 text-base"
                />
                {errors.brand && (
                  <p className="text-red-500 text-sm">
                    {errors.brand?.message}
                  </p>
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
                  className="block text-gray-700 w-full border border-gray-300 p-1 text-base"
                >
                  <option value="">Select a category</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Equipment">Equipment</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm">
                    {errors.category?.message}
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
                  className="block text-gray-700 w-full border border-gray-300 p-1 text-base"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">
                    {errors.price?.message}
                  </p>
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
                  className="block text-gray-700 w-full border border-gray-300 p-1 text-base"
                />
                {errors.stockQuantity && (
                  <p className="text-red-500 text-sm">
                    {errors.stockQuantity?.message}
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
                  className="block text-gray-700 w-full border border-gray-300 p-1 text-base"
                />
                {errors.rating && (
                  <p className="text-red-500 text-sm">
                    {errors.rating?.message}
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
                className="block text-gray-700 w-full border border-gray-300 p-1 text-base"
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image?.message}</p>
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
                className="block text-gray-700 w-full border border-gray-300 p-1 text-base"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description?.message}
                </p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 bg-gray-300 text-gray-700 px-4 py-2  "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-700 text-white px-4 py-2 hover:bg-red-800"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default UpdateProduct;
