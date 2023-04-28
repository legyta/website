import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./homepage.css";
import homePhoto from "./home-page.jpg";
import drawing from "./drawing.svg";
import Circle from "./Circle";

function HomePage() {
  return (
    <div>
      <Link to="home"></Link>
      <NavBar />
      <div className="home-image">
        <img src={homePhoto} alt="home" className="home-image" />
      </div>
      <div className="home-intro">
        <div className="drawing-home">
          <img src={drawing} alt="drawing" className="drawing-image" />
        </div>
        <div className="home-intro-first">
          <p>
            Some time ago, me and my partner, decided to start a new phase of
            life, living on the move, in the caravan. Off we went, full of love,
            happiness and enthusiasm, trusting the universe and where it will
            bring us.
          </p>
          <p>
            So far, it has been a journey bringing into the surface all the
            potential we hold inside. Many connections, experiences and growth
            which I am so grateful for.{" "}
          </p>

          <p>
            This site is a collection of activities, coming purely from my
            hearth. Its purpose is to share my learnings and continue expanding
            with other souls in this journey of life.
          </p>
        </div>
        <p>
          Slowly I am focusing on the areas below (some still in progress):{" "}
        </p>
        <Circle />

        <blockquote className="quote">
          "This human birth is precious,<br></br> our opportunity to awaken.
          <br></br> The body is impermanent,<br></br> and time of death is
          uncertain.<br></br>
          The cause and effect of karma<br></br> shapes the course of our lives.
          <br></br> Life has inevitable difficulties,<br></br> no one can
          control it all.
          <br></br>
          <br></br> This life we must know <br></br>As the tiny splash of a
          raindrop.<br></br> A thing of beauty that disappears<br></br>
          Even as it comes into being.<br></br>
          <br></br>
          Therefore I recall
          <br></br>
          My inspiration and aspiration<br></br> And resolve to make use
          <br></br> Of every day and night to realize it."<br></br>
          <br></br> – Compiled by Viveka Chen,<br></br> based on verses by
          Tsongkhapa<br></br> (14th century Tibetan master)
        </blockquote>
        <div className="drawing-home-bottom">
          <img src={drawing} alt="drawing" className="drawing-image-bottom" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
