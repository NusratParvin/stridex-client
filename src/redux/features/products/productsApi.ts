//  import baseApi from "@/redux/api/baseApi";
// import { TApiResponse } from "@/types";

// const productsApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllProducts: builder.query<TApiResponse, void>({
//       query: () => ({
//         url: "/products",
//         method: "GET",
//       }),
//       providesTags: ["Products"],
//     }),
//     getProductById: builder.query({
//       query: (id) => ({
//         url: `/products/${id}`,
//         method: "GET",
//       }),
//       providesTags: ["Products"],
//     }),

//   addProduct: builder.mutation<TProduct, Partial<TProduct>>({
//     query: (newProduct) => ({
//       url: 'products',
//       method: 'POST',
//       body: newProduct,
//     }),
//     invalidatesTags: ['Product'],
//   }),

//   deleteProduct: builder.mutation<{ success: boolean; id: string }, string>({
//     query: (id) => ({
//       url: `products/${id}`,
//       method: 'DELETE',
//     }),
//     invalidatesTags: ['Product'],
//   }),

//   updateProduct: builder.mutation<TProduct, Partial<TProduct>>({
//     query: ({ id, ...patch }) => ({
//       url: `products/${id}`,
//       method: 'PATCH',
//       body: patch,
//     }),
//     invalidatesTags: ['Product'],
//   }),

//  });

// export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
// export default productsApi;

import baseApi from "@/redux/api/baseApi";
import { TApiResponse } from "@/types";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<TApiResponse, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
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
      query: ({ id, ...patch }) => ({
        url: `products/${id}`,
        method: "PATCH",
        body: patch,
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
} = productsApi;

export default productsApi;
