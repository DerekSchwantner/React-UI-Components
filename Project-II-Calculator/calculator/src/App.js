import React from "react";
import "./App.css";
import ActionButton from "./components/ButtonComponents/ActionButton";
import { CalculatorDisplay } from "./components/DisplayComponents/CalculatorDisplay";
import { ClearButton } from "./components/ButtonComponents/ClearButton";

const App = () => {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <CalculatorDisplay />
        <div className="row">
          <ClearButton>Clear</ClearButton>
          <ActionButton>÷</ActionButton>
        </div>
        <div className="row">
          <ActionButton>7</ActionButton>
          <ActionButton>8</ActionButton>
          <ActionButton>9</ActionButton>
          <ActionButton>X</ActionButton>
        </div>
        <div className="row">
          <ActionButton>4</ActionButton>
          <ActionButton>5</ActionButton>
          <ActionButton>6</ActionButton>
          <ActionButton>-</ActionButton>
        </div>
        <div className="row">
          <ActionButton>1</ActionButton>
          <ActionButton>2</ActionButton>
          <ActionButton>3</ActionButton>
          <ActionButton>+</ActionButton>
        </div>
        <div className="row">
          <ClearButton>0</ClearButton>
          <ActionButton>=</ActionButton>
        </div>
      </div>
    </div>
  );
};

export default App;
