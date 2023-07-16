import React from "react";
import classes from "./Collage.module.css";
import Img2 from "../../../assets/img2.jpg";

const Collage2 = () => {
  return (
    <div className={classes.collageContainer}>
      <div className={classes.collageDetails}>
        <div className={classes.collageText}>
          <h1>Boost the growth of your business</h1>
          <p>
            Get a modern technology for your business. Welcome your visitors
            with elegance
          </p>
          <button className={classes.collageButton} type="submit">
            Work With Us
          </button>
        </div>
        <div className={classes.collageImg}>
          <img src={Img2} />
        </div>
      </div>
    </div>
  );
};

export default Collage2;
