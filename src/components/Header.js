import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import logo from '../logo.svg'

const Container = styled(AppBar)`
  background: #060606;
  height: 10vh;
`;

function Header() {
  return (
    <Container position="static">
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 40 }} />
      </Toolbar>
    </Container>
  );
}

export default Header;
