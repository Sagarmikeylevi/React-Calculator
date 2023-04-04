import React from "react";
import classes from "./Buttons.module.css";
import OperationBtn from "./operationBtn/OperationBtn";
import NumberBtn from "./numbersBtn/NumberBtn";

const Buttons = () => {
  return (
    <div className={classes.buttonScreen}>
      <OperationBtn />
      <NumberBtn />
    </div>
  );
};

export default Buttons;
