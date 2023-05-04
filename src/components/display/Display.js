import React from "react";
import classes from "./Display.module.css"; // Importing CSS module for styling
import Card from "../UI/Card"; // Importing Card component

const Display = (props) => {
  // Functional component named Display that takes in props as a parameter
  return (
    <Card className={classes.displayScreen}>
      {/* A Card component with className displayScreen */}
      <p>Calculator</p> {/* A paragraph element with text "Calculator" */}
      {/* Conditional rendering for calculationValue */}
      {props.calculationValue.length > 0 ? (
        <div className={classes.caculation}>{props.calculationValue}</div>
      ) : (
        <div className={classes.caculation}></div>
      )}
      {/* Conditional rendering for displayValue */}
      {props.calculationValue.length > 0 ? (
        <div className={classes.solution}>{eval(props.displayValue)}</div>
      ) : (
        <div className={classes.solution}>{props.displayValue}</div>
      )}
    </Card>
  );
};

export default Display; // Exporting the Display component as default
