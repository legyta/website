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
        <Route index path="/home" element={<HomePage />} />
        <Route path="/home/women-sessions" element={<WomenSessions />} />
        <Route path="/home/art" element={<Art />} />
        <Route path="/home/writings" element={<Writings />} />
        <Route path="/home/reiki" element={<Reiki />} />
        <Route path="/home/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
