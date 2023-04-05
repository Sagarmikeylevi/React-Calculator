import React, { useState } from "react";
import Card from "./UI/Card";
import classes from './Calculator.module.css';
import Display from "./display/Display";
import Buttons from "./buttons/Buttons";

const Calculator = (props) => {
    const [value, setValue] = useState('');
    const [calVal, setCalval] = useState('');
    const getValueHandler = (value) => {
       setValue(value);
    }

    const calculatedValueHandler = value => {
      setCalval(value);
    }
    return (
      <Card className={classes.calculator}>
        <Display displayValue={value} calculationValue={calVal} />
        <Buttons
          onDisplay={getValueHandler}
          calValue={calculatedValueHandler}
        />
      </Card>
    );
}

export default Calculator;