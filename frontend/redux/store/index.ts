import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../services/api"; 

export const store = configureStore({
  reducer: {
    // Add the RTK Query API reducer
    [Api.reducerPath]: Api.reducer,
  },
  // Add the RTK Query middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

