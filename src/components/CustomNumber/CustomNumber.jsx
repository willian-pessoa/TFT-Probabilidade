import React from "react";
import "./CustomNumber.scss";

const CustomNumber = ({ value, ...props }) => {
  return <input type="number" className="number" value={value} {...props} />;
};

export default CustomNumber;
