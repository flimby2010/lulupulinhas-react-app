import React, { useState } from "react";
import Navbar from "../Navbar";
import "Hero.css";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="HeroContainer">
      <Navbar toggle={toggle} />

      <div className="HeroContent">
        <div className="HeroItems">
          <div className="HeroH1">👋 Somos as Lulupulinhas!</div>
          <div className="HeroP">Mulheres apaixonadas por cerveja🍻</div>
          <div className="HeroBtn">Nossa cerveja</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
