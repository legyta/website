import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import WomenSessions from "./WomenSessions/WomenSessions";
import Art from "./Art/Art";
import Writings from "./Writings/Writings";
import Reiki from "./Reiki/Reiki";
import Contact from "./Contact/Contact";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<HomePage />} />
      <Route path="/women-sessions" element={<WomenSessions />} />
      <Route path="/art" element={<Art />} />
      <Route path="/writings" element={<Writings />} />
      <Route path="/reiki" element={<Reiki />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
