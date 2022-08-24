import { configureStore } from "@reduxjs/toolkit"
import countryReducer from "../components/Header/components/SearchBar/countrySlice"

export const store = configureStore({
	reducer: {
		country: countryReducer
	}
})
