import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Iproducts from "./Iproducts";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://b1999b74ae3b38bd.mokky.dev/" }),
  endpoints: (builer) => ({
    getProducts: builer.query<Iproducts[], void>({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
