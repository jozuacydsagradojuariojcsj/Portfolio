import React from "react";
import { styled } from "@mui/system";

const Container = styled("div")({
  display: "flex",
  height: "100vh",
  width: "100%",
  border: "1px solid violet",
});

const LeftSide = styled("div")({
  display: "flex",
  flex: 2.6,
  border: "1px solid black",
});

const RightSide = styled("div")({
  display: "flex",
  flex: 2.4,
  flexDirection: "column",
  paddingTop: "5%",
  paddingLeft: "5%",
  border: "1px solid red",
});

const LoginPage = () => {
  return (
    <Container>
      <LeftSide>Hello World Again</LeftSide>
      <RightSide>Hello World from the Right Side</RightSide>
    </Container>
  );
};

export default LoginPage;
