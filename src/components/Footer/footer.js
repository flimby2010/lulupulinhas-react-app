import React from "react";
import { FaBeer } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <a
          href="https://www.instagram.com/lulupulinhas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size="40" color="#404040" />
        </a>{" "}
        <a
          href="https://pt-br.facebook.com/lulupulinhas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size="40" color="#404040" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
