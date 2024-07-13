import baseApi from "@/redux/api/baseApi";
import { TApiResponse } from "@/types";
import { setProducts } from "./productSlice";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<TApiResponse, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProducts(data.data));
        } catch (error) {
          console.error("Failed to fetch products", error);
        }
      },
      providesTags: ["Products"],
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),

    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Products"],
    }),

    // updateProductStock: builder.mutation({
    //   query: ({ id, stockQuantity }) => ({
    //     url: `products/${id}`,
    //     method: "PUT",
    //     body: { stockQuantity },
    //   }),
    //   invalidatesTags: ["Products"],
    // }),

    updateProductStock: builder.mutation<
      void,
      { id: string; stockQuantity: number }
    >({
      query: ({ id, stockQuantity }) => ({
        url: `products/${id}/stock`,
        method: "PUT",
        body: { stockQuantity },
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useUpdateProductStockMutation,
} = productsApi;

export default productsApi;
