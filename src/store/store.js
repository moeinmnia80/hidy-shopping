import { catalogApi } from "../api/catalog";
import { configureStore } from "@reduxjs/toolkit";
import productFiltersReducer from "../feature/productsSlice";

export const store = configureStore({
  reducer: {
    productFilters: productFiltersReducer,

    [catalogApi.reducerPath]: catalogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogApi.middleware),
});
