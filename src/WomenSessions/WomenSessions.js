import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./womensessions.css";
import womenCircle from "./women-circle.jpg";
import womenSessions from "./women-sessions.jpg";
import drawing from "../HomePage/drawing.svg";
import "../HomePage/homepage.css";

function WomenSessions() {
  const circleButtonStyle = {
    padding: "10px 20px",
  };

  return (
    <div>
      <Link to="/women-sessions"></Link>
      <NavBar />
      <div className="women-sessions-image">
        <img
          src={womenCircle}
          alt="women-sessions"
          className="women-sessions-image"
        />
      </div>
      <div className="women-sessions-main">
        <div className="drawing-home">
          <img src={drawing} alt="drawing" className="women-drawing-image" />
        </div>
        <p className="home-intro-first">
          At the end of twenty twenty one, I have consciously started to work
          with my feminine empowerment, and deepening the understanding of what
          it really means for me to be a woman. <br></br>
          <br></br>The journey started with a Women Retreat, ever since which -
          I am reading, thinking about and attending women related healing and
          empowerment topics and activities. <br></br>
          <br></br>I have already ran women circles myself too, and want to
          continue this work in person and online.
        </p>

        <div className="women-circle-section">
          <div className="women-circle-image">
            <img
              src={womenSessions}
              alt="women-circle"
              className="women-circle-photo"
            />
          </div>

          <div className="women-circle-description">
            To attend in person - message me for the location. <br></br>For
            online - please send me your availability clicking 'Join online
            circle' button and I will get back to you. The circles are
            intuitive, covering topics that emerge, such as:
            <ul>
              <li>Women Empowerment</li> <li>Trauma Healing</li>
              <li>Connection with Menstrual Cycle</li>
              <li>Pregnancy and Birth Journey</li>
            </ul>{" "}
            <div className="circle-button-form">
              <a
                href="https://calendly.com/d/zy8-w2r-mk9/women-circle"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button" style={circleButtonStyle}>
                  {" "}
                  Join online circle
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="drawing-home-bottom">
          <img
            src={drawing}
            alt="drawing"
            className="women-drawing-image-bottom"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WomenSessions;
