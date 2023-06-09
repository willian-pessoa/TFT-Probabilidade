import React from "react";
import "./CustomRadio.scss";

const CustomRadio = ({ value, active, ...props }) => {
  return (
    <label
      {...props}
      className={`label__radio ${active ? "active" : "default"}`}
    >
      <input type="radio" className="radio" />
      <span className="radio__value">{value}</span>
    </label>
  );
};

export default CustomRadio;
