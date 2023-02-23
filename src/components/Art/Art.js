import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./art.css";
import drawing from "../HomePage/drawing.svg";
import art from "./art.jpg";
import "../HomePage/homepage.css";

function Art() {
  return (
    <div>
      <Link to="art"></Link>
      <NavBar />
      <div className="art-sessions-image">
        <img src={art} alt="art-sessions" className="art-sessions-image" />
      </div>
      <div className="art-main">
        <div className="drawing-home">
          <img src={drawing} alt="drawing" className="art-drawing-image" />
        </div>
        <div className="home-intro-first">
          <p>
            At the moment - my main goal is to start running women circles
            online, so the focus of the site is purely that. At some point in
            the future - this page will share my journey of rediscovering my
            creativity.
          </p>
        </div>
        <div className="drawing-home-bottom">
          <img
            src={drawing}
            alt="drawing"
            className="art-drawing-image-bottom"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Art;
