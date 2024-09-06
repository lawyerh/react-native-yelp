import { createSlice } from "@reduxjs/toolkit";
// import {fetchRestaurants} from '../actions/fetchRestaurants'

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    stores: [],
    query: "",
  },
  reducers: {
    changeQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  //   extraReducers(builder) {
  //     builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
  //     })
  //   }
});

export const {changeQuery} = restaurantSlice.actions;

export const restaurantReducer = restaurantSlice.reducer;
