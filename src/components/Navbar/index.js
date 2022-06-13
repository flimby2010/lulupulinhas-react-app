import React from "react";
import { Nav, NavLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <img src={require("../../images/logo.png")} alt="logo" />
        </NavLink>

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
      </Nav>
    </>
  );
};
export default Navbar;
