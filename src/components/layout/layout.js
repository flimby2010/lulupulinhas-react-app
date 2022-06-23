import { Fragment } from "react";
import classes from "./layout.module.css";
import MainNavigation from "./Navbar/MainNavigation";
import Footer from "./Footer/footer";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}> {props.children} </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
