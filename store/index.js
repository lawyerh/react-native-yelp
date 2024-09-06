import { configureStore } from "@reduxjs/toolkit";
import { restaurantReducer, changeQuery } from "./slices/restaurantSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
  },
});

export { store, changeQuery };
