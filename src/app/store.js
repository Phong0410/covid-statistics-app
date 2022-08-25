import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./countrySlice";
import statisticsReducer from "./statisticsSlice";

export const store = configureStore({
  reducer: {
    country: countryReducer,
    statistics: statisticsReducer,
  },
});
