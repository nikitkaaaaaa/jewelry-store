import { configureStore } from "@reduxjs/toolkit";

import { productsApi } from "./../productsApi/productsApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(productsApi.middleware),
});

export default store;
