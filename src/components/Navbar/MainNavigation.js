import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        {" "}
        <img src={require("../../images/logo.png")} alt="logo" />{" "}
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quem" activeClassName={classes.active}>
              {" "}
              Quem Somos{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/produtos" activeClassName={classes.active}>
              {" "}
              Produtos{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/eventos" activeClassName={classes.active}>
              {" "}
              Eventos{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" activeClassName={classes.active}>
              {" "}
              Contato{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
