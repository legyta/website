import React from "react";
import "./circle.css";

export default function Circle() {
  return (
    <div className="circle">
      <div className="left-circles">
        <div className="left-two-circles">
          <a href="/women-sessions">Women Sessions</a>
        </div>
        <div className="left-two-circles">
          <a href="/reiki">Reiki</a>
        </div>
      </div>

      <div className="middle-circle">
        <div className="middle-one-circle"></div>
      </div>

      <div className="right-circles">
        <div className="right-two-circles">
          <a href="/writings">Writings</a>{" "}
        </div>
        <div className="right-two-circles">
          <a href="/art">Art</a>
        </div>
      </div>
    </div>
  );
}
