import React from "react";
import ReactDOM from "react-dom";
import number from "./calculator.js";
import { add, subtract, multiply, division } from "./calculator.js";
ReactDOM.render(
  <ul>
    <li>{number}</li>
    <li>{add()}</li>
    <li>{subtract()}</li>
    <li>{division()}</li>
    <li>{multiply()}</li>
  </ul>,
  document.getElementById("root")
);
