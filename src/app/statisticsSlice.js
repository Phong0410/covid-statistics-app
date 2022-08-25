import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import statisticsApi from "../api/statisticsApi";

export const getData = createAsyncThunk(
  "statistics/getData",
  async (country) => {
    const data = await statisticsApi.getData({ country });
    return data;
  }
);

const initialState = {
  loading: false,
  cases: {
    new: null,
    active: null,
    critical: null,
    recovered: null,
    total: null,
  },
  deaths: {
    new: null,
    total: null,
  },
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.cases = {
        ...state.cases,
        new: action.payload.response[0].cases.new,
        active: action.payload.response[0].cases.active,
        critical: action.payload.response[0].cases.critical,
        recovered: action.payload.response[0].cases.recovered,
        total: action.payload.response[0].cases.total,
      };
      state.deaths = {
        ...state.deaths,
        new: action.payload.response[0].deaths.new,
        total: action.payload.response[0].deaths.total,
      };
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = statisticsSlice.actions;

export default statisticsSlice.reducer;
