import React from "react";
import Card from "./UI/Card";
import classes from './Calculator.module.css';
import Display from "./display/Display";
import Buttons from "./buttons/Buttons";

const Calculator = () => {
    return (
      <Card className={classes.calculator}>
        <Display />
        <Buttons />
      </Card>
    );
}

export default Calculator;