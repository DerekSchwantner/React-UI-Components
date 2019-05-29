import React from "react";
import "./Display.css";

export const CalculatorDisplay = props => (
  <div className="calculator-display">{props.input}</div>
  // <div className={props.buttonStyle}>{props.input}</div>
);
