import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Form from "./Form";
import PropTypes from "prop-types";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Link to="/contact"></Link>
        <div className="navbar">
          <NavBar />
        </div>
        <div className="contact-info">
          <p>
            I am very happy to talk more, answer any questions, receive feedback
            or hear anything else you would like to say. <br></br>Feel free to
            leave me a message or book a call, so we can talk in person! I will
            reply as soon as I am back from the nature.
          </p>
        </div>

        <Form />
        <div className="call-button-form">
          <a
            href="https://calendly.com/women-circle/call-with-ligita?month=2023-01"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button">Schedule call</button>
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

Contact.propTypes = {
  env: PropTypes.object.isRequired,
};

export default Contact;
