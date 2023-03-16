import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import WomenSessions from "./WomenSessions/WomenSessions";
import Art from "./Art/Art";
import Writings from "./Writings/Writings";
import Reiki from "./Reiki/Reiki";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/women-sessions" element={<WomenSessions />} />
        <Route path="/art" element={<Art />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/reiki" element={<Reiki />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
