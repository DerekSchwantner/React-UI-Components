import React from "react";
import "./Button.css";

const ActionButton = props => (
  //   <div className="large-btn">{props.text}</div>
  <button className={props.buttonStyle}>{props.text}</button>
);

export default ActionButton;
