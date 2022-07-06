import React from "react";
import { FaBeer } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./footer.module.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://www.instagram.com/lulupulinhas/">
          <FaInstagram size="30" color="#fff" />
        </a>

        <a href="https://pt-br.facebook.com/lulupulinhas/">
          <FaFacebook size="30" color="#fff" />
        </a>
      </div>
      <div className="footer__copyright">
        Lulupulinhas. Todos os direitos reservados. <FaBeer color="#404040" />
      </div>
    </footer>
  );
};

export default Footer;
