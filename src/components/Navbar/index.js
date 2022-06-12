import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <img src={require("../../images/logo.png")} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/quem" activeStyle>
            Sobre Nós
          </NavLink>
          <NavLink to="/produtos" activeStyle>
            Produtos
          </NavLink>
          <NavLink to="/eventos" activeStyle>
            Eventos
          </NavLink>
          <NavLink to="/contato" activeStyle>
            Contato
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
