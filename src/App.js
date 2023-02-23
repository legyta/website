import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import WomenSessions from "./components/WomenSessions/WomenSessions";
import Art from "./components/Art/Art";
import Writings from "./components/Writings/Writings";
import Reiki from "./components/Reiki/Reiki";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path exact="./home" component={HomePage} />
        <Route path="/women-sessions" component={WomenSessions} />
        <Route path="/art" component={Art} />
        <Route path="/writings" component={Writings} />
        <Route path="/reiki" component={Reiki} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
