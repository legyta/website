import React from "react";
import "./footer.css";
import paypal from "./paypal_logo.png";

const Footer = () => {
  return (
    <footer>
      <p>To support my work - link for the donations:</p>

      <a
        href="https://www.paypal.me/ligitaMontvilaite?locale.x=en_GB"
        target="_blank"
      >
        <img src={paypal} alt="paypal" className="paypal-logo"></img>
      </a>

      <span>
        &copy;{new Date().getFullYear()} <br />
        <br />
      </span>
    </footer>
  );
};

export default Footer;
