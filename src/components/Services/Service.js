import React from "react";
import classes from "./Service.module.css";
import value1 from "../../assets/value1.png";
import value2 from "../../assets/value2.png";
import value3 from "../../assets/value3.png";
import value4 from "../../assets/value4.png";
// import Radium, { StyleRoot } from "radium";

// const data = [
//   {
//     icon: value1,
//     title: "Design",
//     text:
//       "We design and iterate by building a befitting digital experience for businesses."
//   },
//   {
//     icon: value2,
//     title: "Development",
//     text:
//       "We deliver custom portals fitting into varied corporate environments and infrastructures."
//   },
//   {
//     icon: value3,
//     title: "Integration",
//     text:
//       "We integrate siloed services and applications into a consolidated and secure web ecosystem."
//   },
//   {
//     icon: value4,
//     title: "Optimization",
//     text:
//       "We upgrade and enhance outdated and ineffective portal solutions or their components."
//   }
// ];

// const style = {
//   display: " grid",
//   gridTemplateColumns: "repeat(4, 1fr)",

//   "@media (maxWidth: 375px)": {
//     width: "375px",
//     display: "grid",
//     gridTemplateColums: "repeat(1, 1fr)",
//     marginLeft: "20rem;"
//   }
// };

const Service = () => {
  return (
    <div className={classes.service}>
      <div className={classes.serviceContainer}>
        <div className={classes.serviceDetails}>
          <img src={value1} />
          <h1>Design</h1>
          <p>
            We design and iterate by building a befitting digital experience for
            businesses.
          </p>
        </div>
      </div>
      <div className={classes.serviceContainer}>
        <div className={classes.serviceDetails}>
          <img src={value2} />
          <h1>Development</h1>
          <p>
            We deliver custom portals fitting into varied corporate environments
            and infrastructures
          </p>
        </div>
      </div>
      <div className={classes.serviceContainer}>
        <div className={classes.serviceDetails}>
          <img src={value3} />
          <h1>Integration</h1>
          <p>
            We integrate siloed services and applications into a consolidated
            and secure web ecosystem.
          </p>
        </div>
      </div>
      <div className={classes.serviceContainer}>
        <div className={classes.serviceDetails}>
          <img src={value4} />
          <h1>Optimization</h1>
          <p>
            We upgrade and enhance outdated and ineffective portal solutions or
            their components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
