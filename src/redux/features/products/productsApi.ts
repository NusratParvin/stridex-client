import baseApi from "@/redux/api/baseApi";
import { TApiResponse } from "@/types";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFeaturedProducts: builder.query<TApiResponse, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getAllProductsQuery: builder.query<TApiResponse, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFeaturedProductsQuery, useGetAllProductsQuery } =
  productsApi;
export default productsApi;
