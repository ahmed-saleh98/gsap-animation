import React from "react";
import Logo from "../images/aslogo.png";
function Footer() {
  return (
    <footer>
      <span>
        Made With <span> &#10084;</span> by Ahmed Saleh
      </span>
      <img src={Logo} alt="Logo" />
    </footer>
  );
}

export default Footer;
