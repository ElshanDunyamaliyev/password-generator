import React from "react";
import "./GenerateButton.css";

const GenerateButton = (props) => {
  return (
    <div className="generate">
      <button
        type="submit"
        className="btn btn-outline-success generate-button"
        onClick={props.onClick}
      >
        Generate
      </button>
    </div>
  );
};

export default GenerateButton;
