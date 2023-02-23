import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./writings.css";
import Footer from "../Footer/Footer";
import drawing from "../HomePage/drawing.svg";
import "../HomePage/homepage.css";
import writing from "./writings_image.jpg";

function Writings() {
  return (
    <div>
      <Link to="writings"></Link>
      <NavBar />
      <div className="writing-sessions-image">
        <img
          src={writing}
          alt="writing-sessions"
          className="writing-sessions-image"
        />
      </div>
      <div className="writings-main">
        <div className="drawing-home">
          <img src={drawing} alt="drawing" className="writings-drawing-image" />
        </div>
        <div className="home-intro-first">
          <p>
            Slowly slowly, this page will be filled with the stories... When the
            time for it arrives. At the moment, I write with pen on paper.
          </p>
        </div>
        <div className="drawing-home-bottom">
          <img
            src={drawing}
            alt="drawing"
            className="writings-drawing-image-bottom"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Writings;
