import React from "react";
import classes from "./Display.module.css";
import Card from "../UI/Card";

const Display = (props) => {
  return (
    <Card className={classes.displayScreen}>
      <p>Calculator</p>

      {props.calculationValue.length > 0 ? (
        <div className={classes.caculation}>{props.calculationValue}</div>
      ) : (
        <div className={classes.caculation}></div>
      )}

      {props.calculationValue.length > 0 ? (
        <div className={classes.solution}>{eval(props.displayValue)}</div>
      ) : (
        <div className={classes.solution}>{props.displayValue}</div>
      )}
    </Card>
  );
};

export default Display;
