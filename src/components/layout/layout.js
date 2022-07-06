import { Fragment } from "react";
import MainNavigation from "../Navbar/MainNavigation";
import Footer from "../Footer/footer";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main> {props.children} </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
