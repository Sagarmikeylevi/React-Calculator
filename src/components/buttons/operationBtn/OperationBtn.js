import React from "react";
import { FaPercent, FaDivide, FaPlus, FaMinus, FaEquals } from "react-icons/fa"; // Importing icons from react-icons package
import classes from "./OperationBtn.module.css"; // Importing CSS modules
import Button from "../../UI/Button"; // Importing a custom Button component

const OperationBtn = (props) => {
  // Functional component named OperationBtn that takes props as its argument
  return (
    <div className={classes.operations}>
      {" "}
      {/* Div with class name "operations" */}
      <div className={classes.row}>
        {" "}
        {/* Div with class name "row" */}
        <Button
          className={classes.clearbtn} // Adding a class to this button using CSS modules
          onClick={() => props.onGetVal("clear")} // Triggering an event handler function passed from the parent component when this button is clicked
        >
          C
        </Button>
        <Button
          className={classes.actions} // Adding a class to this button using CSS modules
          onClick={() => props.onGetVal("plus-minus")} // Triggering an event handler function passed from the parent component when this button is clicked
        >
          -/+
        </Button>
        <Button onClick={() => props.onGetVal("percent")}>
          {" "}
          {/* Button with an event handler function */}
          <FaPercent className={classes.icons} />{" "}
          {/* Using the FaPercent icon from react-icons package and adding a class to it using CSS modules */}
        </Button>
        <Button onClick={() => props.onGetVal("divide")}>
          {" "}
          {/* Button with an event handler function */}
          <FaDivide className={classes.icons} />{" "}
          {/* Using the FaDivide icon from react-icons package and adding a class to it using CSS modules */}
        </Button>
      </div>
      <div className={classes.col}>
        {" "}
        {/* Div with class name "col" */}
        <Button
          className={classes.actions} // Adding a class to this button using CSS modules
          onClick={() => props.onGetVal("multi")} // Triggering an event handler function passed from the parent component when this button is clicked
        >
          X
        </Button>
        <Button
          className={classes.actions} // Adding a class to this button using CSS modules
          onClick={() => props.onGetVal("plus")} // Triggering an event handler function passed from the parent component when this button is clicked
        >
          <FaPlus className={classes.icons} />{" "}
          {/* Using the FaPlus icon from react-icons package and adding a class to it using CSS modules */}
        </Button>
        <Button
          className={classes.actions} // Adding a class to this button using CSS modules
          onClick={() => props.onGetVal("minus")} // Triggering an event handler function passed from the parent component when this button is clicked
        >
          <FaMinus className={classes.icons} />{" "}
          {/* Using the FaMinus icon from react-icons package and adding a class to it using CSS modules */}
        </Button>
        <Button
          className={classes.equals} // Adding a class to this button using CSS modules
          onClick={() => props.onClickSubmit("equals")} // Triggering an event handler function passed from the parent component when this button is clicked
        >
          <FaEquals /> {/* Using the FaEquals icon from react-icons package */}
        </Button>
      </div>
    </div>
  );
};

export default OperationBtn; // Exporting the OperationBtn component so that it can be used in other parts of the application
