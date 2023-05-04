import React, { useState } from "react";
import Card from "./UI/Card";
import classes from "./Calculator.module.css";
import Display from "./display/Display";
import Buttons from "./buttons/Buttons";

// Define a functional component called Calculator that takes in props
const Calculator = (props) => {
  // Declare two state variables: value and calVal, both initially set to empty strings
  const [value, setValue] = useState("");
  const [calVal, setCalval] = useState("");

  // Define a function called getValueHandler that takes in a value and sets the state of value to that value
  const getValueHandler = (value) => {
    setValue(value);
  };

  // Define a function called calculatedValueHandler that takes in a value and sets the state of calVal to that value
  const calculatedValueHandler = (value) => {
    setCalval(value);
  };

  // Return the JSX code for the Calculator component, which includes a Card component, a Display component, and a Buttons component
  return (
    <Card className={classes.calculator}>
      <Display displayValue={value} calculationValue={calVal} />
      <Buttons onDisplay={getValueHandler} calValue={calculatedValueHandler} />
    </Card>
  );
};

// Export the Calculator component as the default export of this module
export default Calculator;
