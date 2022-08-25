import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import countryApi from "../api/countryApi";

export const getAll = createAsyncThunk("country/getAll", async () => {
  const countries = await countryApi.getAll();
  return countries;
});

const initialState = {
  countries: [],
  current: null,
  loading: false,
};

export const countrySLice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCurrentCountry: (state, action) => {
      state.current = action.payload;
    },
  },
  extraReducers: {
    [getAll.pending]: (state) => {
      state.loading = true;
    },
    [getAll.fulfilled]: (state, action) => {
      state.loading = false;
      state.countries = action.payload.response;
    },
    [getAll.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { setCurrentCountry } = countrySLice.actions;

export default countrySLice.reducer;
