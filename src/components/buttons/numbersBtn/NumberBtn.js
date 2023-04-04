import React from "react";
import classes from "./NumberBtn.module.css";
import Button from "../../UI/Button";

const NumberBtn = () => {
  return (
    <div className={classes.numbers}>
      <div className={classes.rowNum}>
        <Button className={classes.numActions}>1</Button>
        <Button className={classes.numActions}>2</Button>
        <Button className={classes.numActions}>3</Button>
      </div>
      <div className={classes.rowNum}>
        <Button className={classes.numActions}>4</Button>
        <Button className={classes.numActions}>5</Button>
        <Button className={classes.numActions}>6</Button>
      </div>
      <div className={classes.rowNum}>
        <Button className={classes.numActions}>7</Button>
        <Button className={classes.numActions}>8</Button>
        <Button className={classes.numActions}>9</Button>
      </div>
      <div className={classes.rowNum}>
        <Button className={classes.numActions}>.</Button>
        <Button className={classes.numActions}>0</Button>
        <Button className={classes.numActions}>000</Button>
      </div>
    </div>
  );
};

export default NumberBtn;
