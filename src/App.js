import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

const theme = createTheme({
  palette: {
    common: {
      black: "#212121",
      white: "#fafafa",
    },
    primary: {
      light: "#64ffda",
      main: "#1de9b6",
      dark: "#00bfa5",
      contrastText: "#000",
    },
    secondary: {
      light: "#ffab40",
      main: "#ff9100",
      dark: "#ff6d00",
      contrastText: "#000",
    },
    disable: {
      light: "#eeeeee",
      main: "#bdbdbd",
      dark: "#616161",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container
          disableGutters={true}
          sx={{ backgroundColor: "#fcfcfc", minHeight: "100vh" }}
        >
          <Header />
          <Outlet />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
