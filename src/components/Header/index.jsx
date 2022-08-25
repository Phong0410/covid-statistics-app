import React from "react";
import { AppBar, Container } from "@mui/material";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import Navigation from "./components/Navigation";

const Header = () => {
  return (
    <Container disableGutters={true}>
      <AppBar
        color="primary"
        position="static"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#fcfcfc",
          boxShadow: "unset",
          borderBottomStyle: "solid",
          borderBottomWidth: "3px",
          borderBottomColor: "primary.dark",
          padding: "4px 20px",
        }}
      >
        <Title />
        <SearchBar />
        <Navigation />
      </AppBar>
    </Container>
  );
};

export default Header;
