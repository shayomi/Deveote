import React from "react";
import classes from "./Collage.module.css";
import Img1 from "../../../assets/img1.jpg";

const Collage1 = () => {
  return (
    <div className={classes.collageContainer}>
      <div className={classes.collageDetails}>
        <div className={classes.collageText}>
          <h1>Guiding your business to online success</h1>
          <p>
            We design, build and support applications.We make your business
            stand out
          </p>
          <button className={classes.collageButton} type="submit">
            Get Started
          </button>
        </div>
        <div className={classes.collageImg}>
          <img src={Img1} />
        </div>
      </div>
    </div>
  );
};

export default Collage1;
