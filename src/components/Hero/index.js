import React, { useState } from "react";
import Navbar from "../Navbar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />

      <HeroContent>
        <HeroItems>
          <HeroH1>👋 Somos as Lulupulinhas!</HeroH1>
          <HeroP>Mulheres apaixonadas por cerveja🍻</HeroP>
          <HeroBtn>Nossa cerveja</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
