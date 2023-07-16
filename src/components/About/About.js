import React from "react";
import Swiper from "./swiper/Swiper";
import classes from "./About.module.css";
import MiddleSocial from "./MiddleSocial";
const About = () => {
  return (
    <section id="aboutUs">
      <div className={classes.aboutContainer}>
        <Swiper />
        <MiddleSocial />
      </div>
    </section>
  );
};

export default About;
