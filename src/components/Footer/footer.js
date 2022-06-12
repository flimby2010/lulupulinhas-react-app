import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaBeer } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://www.instagram.com/lulupulinhas/">
          <FaInstagram size="40" color="#fff" />
        </a>

        <a href="https://pt-br.facebook.com/lulupulinhas/">
          <FaFacebook size="40" color="#fff" />
        </a>
      </div>
      <div className="footer__copyright">
        Lulupulinhas 2022 <FaBeer color="#fac100" /> Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
