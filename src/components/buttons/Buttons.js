import React, { useState, useEffect } from "react";
import classes from "./Buttons.module.css";
import OperationBtn from "./operationBtn/OperationBtn";
import NumberBtn from "./numbersBtn/NumberBtn";

const Buttons = (props) => {
  const [value, setValue] = useState("0");
  const [calVal, setCalVal] = useState('');

  useEffect(() => {
    props.onDisplay(value);
    props.calValue(calVal);
  }, [props, value]);

  const clickHandler = (value) => {
    setValue((prevVal) => {
      if(prevVal === "0") prevVal = "";

      if (value === "clear") return "0";

      if (value === "plus-minus") {
        if (prevVal < 0) return Math.abs(prevVal);
        return "-" + prevVal.toString();
      }

      if (value === "percent") return prevVal / 100;

      if (value === "divide") {
        if (
          prevVal[prevVal.length - 2] === "/" ||
          prevVal[prevVal.length - 2] === "x" ||
          prevVal[prevVal.length - 2] === "+" ||
          prevVal[prevVal.length - 2] === "-"
        )
          return prevVal;
        return prevVal + " / ";
      }

      if (value === "multi") {
        if (
          prevVal[prevVal.length - 2] === "/" ||
          prevVal[prevVal.length - 2] === "*" ||
          prevVal[prevVal.length - 2] === "+" ||
          prevVal[prevVal.length - 2] === "-"
        )
          return prevVal;
        return prevVal + " * ";
      }

      if (value === "plus") {
        if (
          prevVal[prevVal.length - 2] === "/" ||
          prevVal[prevVal.length - 2] === "x" ||
          prevVal[prevVal.length - 2] === "+" ||
          prevVal[prevVal.length - 2] === "-"
        )
          return prevVal;
        return prevVal + " + ";
      }

      if (value === "minus") {
        if (
          prevVal[prevVal.length - 2] === "/" ||
          prevVal[prevVal.length - 2] === "x" ||
          prevVal[prevVal.length - 2] === "+" ||
          prevVal[prevVal.length - 2] === "-"
        )
          return prevVal;
        return prevVal + " - ";
      }

      if (value === "equals") {
        setCalVal(prevVal);
        return eval(prevVal);
      } 
      
      if (value === "000") return prevVal + value;

      if (value === ".") {
        if (prevVal.toString().includes(".")) return prevVal;
        else return prevVal + value;
      }
      if (prevVal.toString().includes("."))
        return prevVal.toString() + value.toString();
      return prevVal + value;
    });
  };

  return (
    <div className={classes.buttonScreen}>
      <OperationBtn onGetVal={clickHandler} />
      <NumberBtn onGetVal={clickHandler} />
    </div>
  );
};

export default Buttons;
