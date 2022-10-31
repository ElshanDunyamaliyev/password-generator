import React, { useRef } from "react";
import "./CheckBox.css";

const CheckBox = ({ title, onCheckboxChange, value, id }) => {
  const checkBoxName = useRef();

  return (
    <div className="checkbox-flex">
      <input
        type="checkbox"
        value=""
        id={id}
        ref={checkBoxName}
        onChange={onCheckboxChange}
        checked={value}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default CheckBox;
