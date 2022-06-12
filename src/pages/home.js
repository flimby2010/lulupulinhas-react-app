import React from "react";

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
      <img src={require("../images/Hero.jpg")} alt="logo" />
    </div>
  );
};

export default Home;
