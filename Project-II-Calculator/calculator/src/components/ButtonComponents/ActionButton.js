import React from "react";
import "./Button.css";

const ActionButton = props => (
  //   <div className="large-btn">{props.text}</div>
  <div className={props.buttonStyle}>{props.text}</div>
);

export default ActionButton;
