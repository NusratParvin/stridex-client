import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "sonner";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/products/productsApi";
import { Spinner } from "@/components/ui/spinner";
import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
import { TProduct } from "@/types";

const ManageProducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate();

  const products: TProduct[] = Array.isArray(data?.data) ? data.data : [];

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    toast.success("Product deleted successfully");
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
          <span className="block sm:inline">
            There was an error loading the products. Please try again later.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-32 sm:px-8">
      <Toaster position="top-right" />
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700">Manage Products</h2>
          <span className="text-xs text-gray-500">
            View and manage products
          </span>
        </div>
        <div>
          <button
            className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700"
            onClick={() => setIsAddModalOpen(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add New Product
          </button>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Brand</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Price</th>
                <th className="px-5 py-3">Stock</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {products.map((product: TProduct) => (
                <tr key={product._id}>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    {product.name}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    {product.brand}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    {product.category}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    {product.stockQuantity}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm flex gap-4">
                    <button
                      className="text-blue-600 hover:text-blue-900"
                      onClick={() => navigate(`/edit-product/${product._id}`)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(product._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isAddModalOpen && (
        <AddProduct onClose={() => setIsAddModalOpen(false)} />
      )}
    </div>
  );
};
export default ManageProducts;
