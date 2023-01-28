import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialState = {
  beers: [],
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.sampleapis.com/beers/ale",
  }),
  tagTypes: ["Beers"],
  endpoints: (builder) => ({
    getBeers: builder.query({
      query: () => "beers",
    }),
  }),
});

export const beersSlice = createSlice({
  name: "beers",
  initialState: {
    beers: [],
    loading: "idle",
  },
  reducers: {
    beersLoading: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.beers = action.payload;
      }
    },
    beersSuccess: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.beers = action.payload;
      }
    },
  },
});

export const { beersLoading, beersSuccess } = beersSlice.actions;

export const fetchBeers = () => async (dispatch) => {
  try {
    dispatch(beersLoading());
    const response = await fetch("https://api.sampleapis.com/beers/ale");
    const data = await response.json();
    dispatch(beersSuccess(data));
  } catch (error) {
    console.log(error);
  }
};

export default beersSlice.reducer;
