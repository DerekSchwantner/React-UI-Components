import React from "react";
import "./App.css";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <CalculatorDisplay buttonStyle="calculator-display" text="0" />
        <div className="row">
          <ActionButton buttonStyle="large-btn" text="Clear" />
          <NumberButton buttonStyle="operator-button" text="÷" />
        </div>
        <div className="row">
          <NumberButton buttonStyle="button-wrapper" text="7" />
          <NumberButton buttonStyle="button-wrapper" text="8" />
          <NumberButton buttonStyle="button-wrapper" text="9" />
          <NumberButton buttonStyle="operator-button" text="X" />
        </div>
        <div className="row">
          <NumberButton buttonStyle="button-wrapper" text="4" />
          <NumberButton buttonStyle="button-wrapper" text="5" />
          <NumberButton buttonStyle="button-wrapper" text="6" />
          <NumberButton buttonStyle="operator-button" text="-" />
        </div>
        <div className="row">
          <NumberButton buttonStyle="button-wrapper" text="1" />
          <NumberButton buttonStyle="button-wrapper" text="2" />
          <NumberButton buttonStyle="button-wrapper" text="3" />
          <NumberButton buttonStyle="operator-button" text="+" />
        </div>
        <div className="row">
          <ActionButton buttonStyle="large-btn" text="0" />
          <NumberButton buttonStyle="operator-button" text="=" />
        </div>
      </div>
    </div>
  );
};

export default App;

// const App = () => {
//   return (
//     <div className="App">
//       <div className="calc-wrapper">
//         <CalculatorDisplay />
//         <div className="row">
//           <ActionButton>Clear</ActionButton>
//           <NumberButton>÷</NumberButton>
//         </div>
//         <div className="row">
//           <NumberButton>7</NumberButton>
//           <NumberButton>8</NumberButton>
//           <NumberButton>9</NumberButton>
//           <NumberButton>X</NumberButton>
//         </div>
//         <div className="row">
//           <NumberButton>4</NumberButton>
//           <NumberButton>5</NumberButton>
//           <NumberButton>6</NumberButton>
//           <NumberButton>-</NumberButton>
//         </div>
//         <div className="row">
//           <NumberButton>1</NumberButton>
//           <NumberButton>2</NumberButton>
//           <NumberButton>3</NumberButton>
//           <NumberButton>+</NumberButton>
//         </div>
//         <div className="row">
//           <ActionButton>0</ActionButton>
//           <NumberButton>=</NumberButton>
//         </div>
//       </div>
//     </div>
//   );
// };
