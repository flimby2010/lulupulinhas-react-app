import React from "react";
import "./pages.css";

const Home = () => {
  return (
    <div>
      <h1>Heloo from home!</h1>
      <img src={require("../images/Hero.jpg")} alt="logo" />
    </div>
  );
};

export default Home;
