import React from "react"
import { Button } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"

const styles = (pathname, location) => ({
	width: 160,
	fontSize: 18,
	color: location.pathname === pathname ? "primary.dark" : "disable.light"
})

const Navigation = () => {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<div>
			<Button
				sx={styles("/statistics", location)}
				onClick={() => {
					navigate("statistics", { replace: true })
				}}
			>
				Statistics
			</Button>
			<Button
				sx={styles("/history", location)}
				onClick={() => {
					navigate("history", { replace: true })
				}}
			>
				History
			</Button>
		</div>
	)
}

export default Navigation
