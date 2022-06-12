import React from "react";
import hero from "./images/hero.jpg";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Right",
        alignItems: "Right",
        height: "100vh",
      }}
    >
      <h1>Heloo from home!</h1>
      <img src={hero} alt="logo" />
    </div>
  );
};

export default Home;
