import NavBar from "./nav/NavBar";
import {Container} from "@mui/material";
import React from "react";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar/>
      <Container sx={{p: '2rem'}}>
        <Outlet/>
      </Container>
    </>
  );
}