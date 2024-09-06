import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    stores: [],
  },
  reducers: {},
});

export const {} = restaurantSlice.actions;

export const restaurantReducer = restaurantSlice.reducer;
