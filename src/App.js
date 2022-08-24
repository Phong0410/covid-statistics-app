import { createTheme, ThemeProvider } from "@mui/material/styles"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import { store } from "./app/store"
import { Provider } from "react-redux"
import "./App.css"

const theme = createTheme({
	palette: {
		common: {
			black: "#212121",
			white: "#fafafa"
		},
		primary: {
			light: "#64ffda",
			main: "#1de9b6",
			dark: "#00bfa5",
			contrastText: "#000"
		},
		secondary: {
			light: "#ffab40",
			main: "#ff9100",
			dark: "#ff6d00",
			contrastText: "#000"
		},
		disable: {
			light: "#eeeeee",
			main: "#bdbdbd",
			dark: "#616161",
			contrastText: "#000"
		}
	}
})

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Header />
					<Outlet />
				</div>
			</ThemeProvider>
		</Provider>
	)
}

export default App
