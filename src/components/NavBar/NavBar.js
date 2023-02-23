import React, { Component } from "react";
import "./navbar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div className="menu-circle">
            <div className="menu-inside-circle">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/women-sessions">Women Sessions</a>
                </li>
                <li>
                  <a href="/writings">Writings</a>
                </li>
                <li>
                  <a href="/reiki">Reiki</a>
                </li>
                <li>
                  <a href="/art">Art</a>
                </li>

                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
