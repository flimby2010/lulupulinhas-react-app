import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import ButtonMailto from "./mail";
import "./contato.css";

const Contato = () => {
  return (
    <div className="contato">
      <h1>Quer tomar uma cerveja conosco ?</h1>
      <img src={require("../../images/contato.png")} width="200px"></img>

      <h2> Instagram</h2>
      <p>
        <a
          href="https://www.instagram.com/lulupulinhas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size="30" color="#fff" />
        </a>{" "}
      </p>
      <h2>Facebook</h2>
      <p>
        <a
          href="https://pt-br.facebook.com/lulupulinhas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size="30" color="#fff" />
        </a>
      </p>
      <h2>E-mail</h2>
      <p>
        <ButtonMailto
          label="Escreva um e-mail"
          mailto="mailto:lulupulinhas@gmail.com"
        />
      </p>
    </div>
  );
};

export default Contato;
