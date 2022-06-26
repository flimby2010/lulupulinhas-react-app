import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./footer.module.css";

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
        Made with by <FaHeart color="#B51942" />
      </div>
    </footer>
  );
};

export default Footer;
