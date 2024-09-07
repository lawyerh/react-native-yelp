import { createSlice } from "@reduxjs/toolkit";
import { fetchRestaurants } from "../actions/fetchRestaurants";
// import {fetchRestaurants} from '../actions/fetchRestaurants'

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    stores: [],
    query: "",
    error: null,
  },
  reducers: {
    changeQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRestaurants.pending, (state, action) => {
      state.stores = [];
      console.log("YELP REQUEST PENDING");
    });
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      console.log("YELP REQUEST FULFILLED");
      state.stores = action.payload;
    });
    builder.addCase(fetchRestaurants.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { changeQuery } = restaurantSlice.actions;

export const restaurantReducer = restaurantSlice.reducer;
