import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./countrySlice";
import statisticsReducer from "./statisticsSlice";
import historyReducer from "./historySlice";

export const store = configureStore({
  reducer: {
    country: countryReducer,
    statistics: statisticsReducer,
    history: historyReducer,
  },
});
