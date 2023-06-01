import React, { useState, useEffect } from "react";
import classes from "./Buttons.module.css";
import OperationBtn from "./operationBtn/OperationBtn";
import NumberBtn from "./numbersBtn/NumberBtn";

const Buttons = (props) => {
  const [value, setValue] = useState("0"); // State to store the current value displayed
  const [calVal, setCalVal] = useState(""); // State to store the calculated value

  useEffect(() => {
    props.onDisplay(value); // Pass the current value to the parent component
    props.calValue(calVal); // Pass the calculated value to the parent component
  }, [props, value, calVal]);

  const clickHandler = (value) => {
    if (calVal.length > 0) {
      setValue(""); // Clear the value if a calculation has been performed
    }
    setCalVal(""); // Clear the calculated value
    setValue((prevVal) => {
      if (prevVal === "0") prevVal = ""; // If the previous value is 0, replace it with an empty string

      if (value === "clear") return "0"; // If "clear" button is clicked, set the value to 0

      if (value === "plus-minus") {
        if (prevVal < 0) return Math.abs(prevVal); // If the value is negative, convert it to positive
        return "-" + prevVal.toString(); // If the value is positive, convert it to negative
      }

      if (value === "percent") return prevVal / 100; // Convert the value to percentage

      if (value === "divide") {
        if (
          prevVal[prevVal.length - 2] === "/" ||
          prevVal[prevVal.length - 2] === "x" ||
          prevVal[prevVal.length - 2] === "+" ||
          prevVal[prevVal.length - 2] === "-"
        )
          return prevVal; // If the previous value already ends with an operator, return the previous value
        return prevVal + " / "; // Add a division operator to the previous value
      }

      if (value === "multi") {
        if (
          prevVal[prevVal.length - 2] === "/" ||
          prevVal[prevVal.length - 2] === "*" ||
          prevVal[prevVal.length - 2] === "+" ||
          prevVal[prevVal.length - 2] === "-"
        )
          return prevVal; // If the previous value already ends with an operator, return the previous value
        return prevVal + " * "; // Add a multiplication operator to the previous value
      }

      if (value === "plus") {
        if (
          prevVal[prevVal.length - 2] === "/" ||
          prevVal[prevVal.length - 2] === "x" ||
          prevVal[prevVal.length - 2] === "+" ||
          prevVal[prevVal.length - 2] === "-"
        )
          return prevVal; // If the previous value already ends with an operator, return the previous value
        return prevVal + " + "; // Add an addition operator to the previous value
      }

      if (value === "minus") {
        if (
          prevVal[prevVal.length - 2] === "/" ||
          prevVal[prevVal.length - 2] === "x" ||
          prevVal[prevVal.length - 2] === "+" ||
          prevVal[prevVal.length - 2] === "-"
        )
          return prevVal; // If the previous value already ends with an operator, return the previous value
        return prevVal + " - "; // Add a subtraction operator to the previous value
      }

      if (value === "000") return prevVal + value; // Append "000" to the previous value

      if (value === ".") {
        if (prevVal.toString().includes("."))
          return prevVal; // If the previous value already contains a decimal point, return the previous value
        else return prevVal + value; // Add a decimal point to the previous value
      }
      if (prevVal.toString().includes("."))
        // If the previous value contains a decimal point
        return prevVal.toString() + value.toString(); // Append the new value to the existing decimal value
      return prevVal + value; // Append the new value to the previous value
    });
  };

  const submitHandler = () => {
    setCalVal(value); // Set the calculated value to the current value when submitted
  };

  return (
    <div className={classes.buttonScreen}>
      <OperationBtn onGetVal={clickHandler} onClickSubmit={submitHandler} />{" "}
      {/* Render the component for operation buttons */}
      <NumberBtn onGetVal={clickHandler} />{" "}
      {/* Render the component for number buttons */}
    </div>
  );
};

export default Buttons;
