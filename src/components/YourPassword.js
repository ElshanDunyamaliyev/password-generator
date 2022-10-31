import React from "react";
import "./YourPassword.css";

const YourPassword = (props) => {
  const copyToClipBoard = (password) => {
    navigator.clipboard.writeText(password);
  };

  const main_heading = "P4$5W0rD!";

  const password = !props.password ? (
    <span className="main_heading">{main_heading}</span>
  ) : (
    <span className="realpassword">{props.password}</span>
  );

  return (
    <div className="password-card">
      <h3 className="password-text">{password}</h3>
      <button
        className="btn-copy"
        onClick={() => copyToClipBoard(props.password)}
      >
        Copy
      </button>
    </div>
  );
};

export default YourPassword;
