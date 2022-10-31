import React from "react";
import "./PasswordStrength.css";

const strongDiv = (
  <div className="strong-all">
    <div className="strong"></div>
    <div className="strong"></div>
    <div className="strong"></div>
    <div className="strong"></div>
  </div>
);
const mediumDiv = (
  <div className="strong-all">
    <div className="yellow"></div>
    <div className="yellow"></div>
    <div className="yellow"></div>
    <div className="black"></div>
  </div>
);
const weakDiv = (
  <div className="strong-all">
    <div className="orange"></div>
    <div className="orange"></div>
    <div className="black"></div>
    <div className="black"></div>
  </div>
);
const tooWeakDiv = (
  <div className="strong-all">
    <div className="red"></div>
    <div className="black"></div>
    <div className="black"></div>
    <div className="black"></div>
  </div>
);
let strongLevel;
let graphs;
let len;

const PasswordStrength = (props) => {
  let len = props.length;
  if (len > 7) {
    strongLevel = "STRONG";
    graphs = strongDiv;
  }
  if (len > 3 && len < 8) {
    strongLevel = "MEDIUM";
    graphs = mediumDiv;
  }
  if (len > 1 && len < 4) {
    strongLevel = "WEAK";
    graphs = weakDiv;
  }
  if (len < 2) {
    strongLevel = "TOO WEAK";
    graphs = tooWeakDiv;
  }
  return (
    <div className="strong-flex">
      <div>
        <h3>Strength</h3>
      </div>
      <div className="strong-graph">
        <div>{strongLevel}</div>
        <div>{graphs}</div>
      </div>
    </div>
  );
};

export default PasswordStrength;
