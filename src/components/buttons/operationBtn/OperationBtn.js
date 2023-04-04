import React from "react";
import {FaPercent, FaDivide, FaPlus, FaMinus, FaEquals} from 'react-icons/fa';
import classes from './OperationBtn.module.css';
import Button from "../../UI/Button";

const OperationBtn = () => {
    return (
      <div className={classes.operations}>
        <div className={classes.row}>
          <Button className={classes.clearbtn}>C</Button>
          <Button className={classes.actions}>-/+</Button>
          <Button>
            <FaPercent className={classes.icons} />
          </Button>
          <Button>
            <FaDivide className={classes.icons} />
          </Button>
        </div>
        <div className={classes.col}>
          <Button className={classes.actions}>X</Button>
          <Button className={classes.actions}>
            <FaPlus className={classes.icons} />
          </Button>
          <Button className={classes.actions}>
            <FaMinus className={classes.icons} />
          </Button>
          <Button className={classes.actions}>
            <FaEquals className={classes.icons} />
          </Button>
        </div>
      </div>
    );
};

export default OperationBtn;