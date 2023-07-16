import React from "react";
import classes from "./Call.module.css";

const Call = () => {
  return (
    <section id="consultation">
      <div className={classes.callContainer}>
        <div className={classes.callDetails}>
          <p>Deveote matches the feel of your business</p>
          <h1>Consult our experts about your project for free</h1>
          <button className={classes.callButton}>Schedule A call</button>
        </div>
      </div>
    </section>
  );
};

export default Call;
