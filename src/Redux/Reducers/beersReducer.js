import { createSlice } from "@reduxjs/toolkit";

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
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    dispatch(beersSuccess(data));
  } catch (error) {
    console.log(error);
  }
};

export default beersSlice.reducer;
