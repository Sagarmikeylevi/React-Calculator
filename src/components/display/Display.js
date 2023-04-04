import React from "react";
import classes from "./Display.module.css";
import Card from "../UI/Card";

const Display = () => {
  return (
    <Card className={classes.displayScreen}>
      <p>Calculator</p>
      <div className={classes.caculation}>
        100 + 200
      </div>

      <div className={classes.solution}>
        300
      </div> 

    </Card>
  );
};

export default Display;
