import React, { useEffect, useState } from "react";
import classes from "./NumberBtn.module.css";
import Button from "../../UI/Button";

const NumberBtn = (props) => {
  return (
    <div className={classes.numbers}>
      <div className={classes.rowNum}>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal(1)}
        >
          1
        </Button>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal(2)}
        >
          2
        </Button>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal(3)}
        >
          3
        </Button>
      </div>
      <div className={classes.rowNum}>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal(4)}
        >
          4
        </Button>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal(5)}
        >
          5
        </Button>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal(6)}
        >
          6
        </Button>
      </div>
      <div className={classes.rowNum}>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal(7)}
        >
          7
        </Button>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal(8)}
        >
          8
        </Button>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal(9)}
        >
          9
        </Button>
      </div>
      <div className={classes.rowNum}>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal(".")}
        >
          .
        </Button>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal(0)}
        >
          0
        </Button>
        <Button
          className={classes.numActions}
          onClick={() => props.onGetVal("000")}
        >
          000
        </Button>
      </div>
    </div>
  );
};

export default NumberBtn;
