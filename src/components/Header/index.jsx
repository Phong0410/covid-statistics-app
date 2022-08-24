import React from "react"
import { AppBar, Box } from "@mui/material"
import Title from "./components/Title"
import SearchBar from "./components/SearchBar"
import Navigation from "./components/Navigation"

const Header = () => {
	return (
		<Box>
			<AppBar
				color="primary"
				position="static"
				sx={{
					display: "flex",
					alignItems: "center",
					flexDirection: "row",
					backgroundColor: "white",
					boxShadow: "unset",
					borderBottomStyle: "solid",
					borderBottomWidth: "2px",
					borderBottomColor: "primary.dark",
					padding: "4px 20px"
				}}
			>
				<Title />
				<SearchBar />
				<Navigation />
			</AppBar>
		</Box>
	)
}

export default Header
