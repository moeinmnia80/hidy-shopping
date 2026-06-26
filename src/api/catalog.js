import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  // each way is correct this is explicit return and implicit return use arrow func rule
  // endpoints: (builder) => ({...})
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: ({ limit, offset }) =>
          `products/?limit=${limit}&offset=${offset}`,
      }),
      getProductsById: builder.query({
        query: ({ id }) => `products/${id}`,
      }),
      getCategories: builder.query({
        query: () => "categories/",
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useGetCategoriesQuery,
} = catalogApi;
