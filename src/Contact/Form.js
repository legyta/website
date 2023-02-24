import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
import contactPhoto from "./contact.jpg";

export const Form = () => {
  const [message, setMessage] = useState("");
  const form = useRef();

  const clearFormFields = () => {
    document.getElementById("contact-form").reset();
  };

  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const formID = process.env.REACT_APP_FORM_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, formID, form.current, publicKey)
      .then(
        setMessage(`Thank you for your message! I will get back to you soon.`)
      )
      .then(clearFormFields);
  };

  return (
    <div className="form">
      <div className="contact-image">
        <img src={contactPhoto} alt="phone" className="contact-image" />{" "}
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        id="contact-form"
      >
        <h2>Leave me a message</h2>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Your message</label>
        <textarea style={{ height: "150px" }} name="message" required />
        <div className="button-form">
          <button className="button" type="submit">
            Send
          </button>
        </div>
        <div className="submit-message">{message}</div>
      </form>
    </div>
  );
};

export default Form;
