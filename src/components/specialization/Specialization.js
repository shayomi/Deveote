import React from "react";
import classes from "./Specialization.module.css";
import { BiCheck } from "react-icons/bi";
import aboutImg from "../../assets/about-section.jpg";

const Specialization = () => {
  return (
    <div className={classes.specialization}>
      <div className={classes.specContainer}>
        <div className={classes.specDetails}>
          <div className={classes.specTitle}>
            <h1>Our Areas Of Specialization</h1>
          </div>
          <div className={classes.specText}>
            <p>
              We listen and work together with you to create a truly unique and
              unforgettable experience.
            </p>
          </div>
          <div className={classes.specList}>
            <ul className={classes.specListDetails}>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Education</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Beauty Salon</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Health</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Construction</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Real Estate</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>NGO</p>
              </li>
            </ul>
            {/* End of firs column */}

            <ul className={classes.specListDetails}>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Startup</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Auto Service</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Cleaning</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Fitness</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Transportation</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Energy</p>
              </li>
            </ul>
            {/* End of second column */}

            <ul className={classes.specListDetails}>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Fashion</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Restaurant</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Digital Agency</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Law</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Entertainment</p>
              </li>
              <li className={classes.list}>
                <BiCheck size={25} className={classes.specCheck} />
                <p>Agriculture</p>
              </li>
            </ul>
            {/* End of third column */}
          </div>
          <button className={classes.button}>Get Started</button>
        </div>
        <div className={classes.specImg}>
          <img src={aboutImg} />
        </div>
      </div>
    </div>
  );
};

export default Specialization;
