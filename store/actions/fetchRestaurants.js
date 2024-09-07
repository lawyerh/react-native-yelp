import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import yelp from "../../api/yelp";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async (query) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: query ? query : "",
          location: "seattle",
        },
      });
      return response.data.businesses;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);
