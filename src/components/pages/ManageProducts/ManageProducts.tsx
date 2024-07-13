import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "sonner";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/products/productsApi";
import { Spinner } from "@/components/ui/spinner";
import AddProduct from "./AddProduct";
import { TProduct } from "@/types";
import UpdateProduct from "./UpdateProduct";

const ManageProducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); //
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);

  const products: TProduct[] = Array.isArray(data?.data) ? data.data : [];

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    toast.success("Product deleted successfully");
  };
  const handleEditClick = (product: TProduct) => {
    console.log(product);
    setSelectedProduct(product);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedProduct(null);
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
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3  relative"
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
    // <div className="mx-auto max-w-screen-lg px-4 py-32 sm:px-8">
    //   <Toaster position="top-right" />
    //   <div className="flex items-center justify-between pb-6">
    //     <div>
    //       <h2 className="text-4xl text-center pb-2 uppercase">
    //         Manage Products
    //       </h2>
    //       <span className="text-sm text-gray-500">
    //         View and manage products
    //       </span>
    //     </div>
    //     <div>
    //       <button
    //         className="flex items-center gap-2  bg-red-700 px-4 py-2 text-md text-white  "
    //         onClick={() => setIsAddModalOpen(true)}
    //       >
    //         <FontAwesomeIcon icon={faPlus} />
    //         Add New Product
    //       </button>
    //     </div>
    //   </div>
    //   <div className="overflow-y-hidden  border">
    //     <div className="overflow-x-auto">
    //       <table className="w-full">
    //         <thead>
    //           <tr className="bg-red-700 text-left text-sm uppercase tracking-wide text-white">
    //             <th className="px-5 py-3">Name</th>
    //             <th className="px-5 py-3">Brand</th>
    //             <th className="px-5 py-3">Category</th>
    //             <th className="px-5 py-3">Price</th>
    //             <th className="px-5 py-3">Stock</th>
    //             <th className="px-5 py-3">Actions</th>
    //           </tr>
    //         </thead>
    //         <tbody className="text-gray-500">
    //           {products.map((product: TProduct) => (
    //             <tr key={product._id}>
    //               <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
    //                 {product.name}
    //               </td>
    //               <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
    //                 {product.brand}
    //               </td>
    //               <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
    //                 {product.category}
    //               </td>
    //               <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
    //                 ${product.price.toFixed(2)}
    //               </td>
    //               <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
    //                 {product.stockQuantity}
    //               </td>
    //               <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm flex gap-4">
    //                 <button
    //                   className="text-blue-600 hover:text-blue-900"
    //                   onClick={() => navigate(`/updateProduct/${product._id}`)}
    //                 >
    //                   <FontAwesomeIcon icon={faEdit} />
    //                 </button>
    //                 <button
    //                   className="text-red-600 hover:text-red-900"
    //                   onClick={() => handleDelete(product._id)}
    //                 >
    //                   <FontAwesomeIcon icon={faTrash} />
    //                 </button>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    //   {isAddModalOpen && (
    //     <AddProduct onClose={() => setIsAddModalOpen(false)} />
    //   )}
    // </div>

    <div className="mx-auto max-w-screen-lg px-4 py-32 sm:px-8">
      <Toaster position="top-right" />
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-4xl text-center pb-2 uppercase">
            Manage Products
          </h2>
          <span className="text-sm text-gray-500">
            View and manage products
          </span>
        </div>
        <div>
          <button
            className="flex items-center gap-2 bg-red-700 px-4 py-2 text-md text-white"
            onClick={() => setIsAddModalOpen(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add New Product
          </button>
        </div>
      </div>
      <div className="overflow-y-hidden border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-red-700 text-left text-sm uppercase tracking-wide text-white">
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
                      onClick={() => handleEditClick(product)}
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
      {isUpdateModalOpen && selectedProduct && (
        <UpdateProduct
          onClose={closeUpdateModal}
          productData={selectedProduct}
        />
      )}
    </div>
  );
};
export default ManageProducts;
