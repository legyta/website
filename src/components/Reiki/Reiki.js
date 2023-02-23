import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import reikiPhoto from "./reiki.jpg";
import "./reiki.css";
import drawing from "../HomePage/drawing.svg";
import "../HomePage/homepage.css";

function Reiki() {
  return (
    <div>
      <Link to="reiki"></Link>
      <NavBar />
      <div className="reiki-image">
        <img src={reikiPhoto} alt="reiki" className="reiki-image" />
      </div>
      <div className="reiki-intro">
        <div className="drawing-home">
          <img src={drawing} alt="drawing" className="reiki-drawing-image" />
        </div>
        <div className="home-intro-first">
          <p>
            At the beginning on twenty twenty two I have been initiated to
            Reiki. Since then my aim is to integrate it into my daily life as
            much as I can. Apart from myself, I have given Reiki sessions to my
            close friends, my mum and to our puppy. I am happy to do Reiki
            sessions in person. Contact me if you would like to receive it.{" "}
          </p>
        </div>
        <div className="drawing-home-bottom">
          <img
            src={drawing}
            alt="drawing"
            className="reiki-drawing-image-bottom"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reiki;
