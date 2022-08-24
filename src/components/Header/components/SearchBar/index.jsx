import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { Autocomplete, TextField, CircularProgress } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { getAll, saveCurrent } from "./countrySlice"

const SearchBar = () => {
	const countries = useSelector((state) => state.country.countries)
	const loading = useSelector((state) => state.country.loading)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAll())
	}, [])

	return (
		<Box sx={{ display: "flex", alignItems: "center", margin: "auto" }}>
			<Autocomplete
				sx={{
					width: 400,
					height: 40
				}}
				options={countries}
				autoHighlight
				getOptionLabel={(option) => option}
				renderOption={(props, option) => (
					<Box component="li" {...props}>
						{option}
					</Box>
				)}
				renderInput={(params) => (
					<TextField {...params} label="Search for country" size="small" />
				)}
				onChange={(_, value) => {}}
			/>
			<CircularProgress
				size={20}
				sx={{ marginLeft: "8px", color: `${loading ? "gray" : "transparent"}` }}
			/>
		</Box>
	)
}

export default SearchBar
