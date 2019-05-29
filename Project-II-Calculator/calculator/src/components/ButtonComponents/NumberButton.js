import React from "react";
import "./Button.css";

const isOperator = val => {
  return !isNaN(val) || val === ".";
};

// const NumberButton = props => (
//   <div
//     className={`button-wrapper ${
//       isOperator(props.children) ? null : "operator"
//     }`}
//   >
//     {props.children}
//   </div>
// );

const NumberButton = props => {
  //   return <div className="button-wrapper">{props.text}</div>;
  return <button className={props.buttonStyle}>{props.text}</button>;
};

export default NumberButton;
