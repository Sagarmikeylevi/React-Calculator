import React from "react";
import {FaPercent, FaDivide, FaPlus, FaMinus, FaEquals} from 'react-icons/fa';
import classes from './OperationBtn.module.css';
import Button from "../../UI/Button";

const OperationBtn = (props) => {
    return (
      <div className={classes.operations}>
        <div className={classes.row}>
          <Button
            className={classes.clearbtn}
            onClick={() => props.onGetVal("clear")}
          >
            C
          </Button>
          <Button
            className={classes.actions}
            onClick={() => props.onGetVal("plus-minus")}
          >
            -/+
          </Button>
          <Button onClick={() => props.onGetVal("percent")}>
            <FaPercent className={classes.icons} />
          </Button>
          <Button onClick={() => props.onGetVal("divide")}>
            <FaDivide className={classes.icons} />
          </Button>
        </div>
        <div className={classes.col}>
          <Button
            className={classes.actions}
            onClick={() => props.onGetVal("multi")}
          >
            X
          </Button>
          <Button
            className={classes.actions}
            onClick={() => props.onGetVal("plus")}
          >
            <FaPlus className={classes.icons} />
          </Button>
          <Button
            className={classes.actions}
            onClick={() => props.onGetVal("minus")}
          >
            <FaMinus className={classes.icons} />
          </Button>
          <Button
            className={classes.equals}
            onClick={() => props.onClickSubmit("equals")}
          >
            <FaEquals />
          </Button>
        </div>
      </div>
    );
};

export default OperationBtn;