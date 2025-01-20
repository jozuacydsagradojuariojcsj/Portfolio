import React from "react";
import "../styles.css";
import { AppBar } from "@mui/material";
import { styled } from "@mui/system";

const MyAppBar = styled(AppBar)({
  backgroundColor: "#ff5733 ",
  position: "sticky",
  height: "5rem",
  boxShadow: "none",
  alignItems: "center",
});

const HomePage = () => {
  return (
    <div>
      <MyAppBar>Hello World</MyAppBar>
    </div>
  );
};

export default HomePage;
