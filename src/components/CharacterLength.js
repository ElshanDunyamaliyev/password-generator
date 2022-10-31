import React, { useRef } from "react";
import "./CharacterLength.css";

const CharacterLength = (props) => {
  const rangeName = useRef();

  const rangeChangeHandler = () => {
    const rangeValue = rangeName.current.value;
    props.takePassLen(rangeValue);
  };

  return (
    <div>
      <div className="character-flex">
        <h3>Character Length</h3>
        <div>{props.value}</div>
      </div>
      <div>
        <input
          type="range"
          className="form-range"
          id="customRange1"
          min="1"
          max="20"
          step="1"
          ref={rangeName}
          onChange={rangeChangeHandler}
          value={props.value}
        ></input>
      </div>
    </div>
  );
};

export default CharacterLength;
