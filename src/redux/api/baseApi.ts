// src/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stridex-server.vercel.app/api",
  }),
  tagTypes: ["Products"],

  endpoints: () => ({}),
});

export default baseApi;
