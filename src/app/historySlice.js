import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import historyApi from "../api/historyApi";

export const getData = createAsyncThunk("history/getData", async (country) => {
  const data = await historyApi.getData({ country });
  // data process
  const uniqByDay = {};
  const currentUtcDay = moment.utc().format("YYYY-MM-DD");
  const furthestUtcDay = moment.utc().subtract(30, "days").format("YYYY-MM-DD");

  for (const item of data.response) {
    if (item.day === currentUtcDay) continue;
    if (!uniqByDay.hasOwnProperty(item.day)) uniqByDay[item.day] = item;
    if (item.day === furthestUtcDay) break;
  }

  return Object.values(uniqByDay)
    .map((item) => ({
      day: item.day,
      newCases: Number(item.cases.new),
      newDeaths: Number(item.deaths.new),
      totalCases: item.cases.total,
      totalDeaths: item.deaths.total,
    }))
    .reverse();
});

const initialState = {
  loading: false,
  data: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = historySlice.actions;

export default historySlice.reducer;
