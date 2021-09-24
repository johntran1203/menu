import React from "react";
import "../App.css";

function Footer() {
  return (
    <div className="footer-container">
      <h2>RICE © 2021</h2>
      <a href="https://github.com/johntran1203/menu" target="_blank">
        {<i className="fab fa-github" />}
      </a>
    </div>
  );
}

export default Footer;
