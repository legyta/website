import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import WomenSessions from "./WomenSessions/WomenSessions";
import Art from "./Art/Art";
import Writings from "./Writings/Writings";
import Reiki from "./Reiki/Reiki";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path exact="./home" component={HomePage} />
          <Route path="/women-sessions" component={WomenSessions} />
          <Route path="/art" component={Art} />
          <Route path="/writings" component={Writings} />
          <Route path="/reiki" component={Reiki} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
