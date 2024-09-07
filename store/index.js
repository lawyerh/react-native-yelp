import { configureStore } from "@reduxjs/toolkit";
import { restaurantReducer, changeQuery } from "./slices/restaurantSlice";
import { fetchRestaurants } from "./actions/fetchRestaurants";
const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
  },
});

export { store, changeQuery, fetchRestaurants };
