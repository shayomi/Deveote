import React from "react";
import classes from "./HeaderNav.module.css";
import logo from "../../assets/logo.png";

const HeaderNav = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerLeft}>
        <img src={logo} alt="image here" />
      </div>
      <div className={classes.headerMiddle}>
        <nav className={classes.navList}>
          <a href="#aboutUs">About Us</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Our Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact Us</a>
          <a href="#consultation">Consultation</a>
        </nav>
      </div>
      <div className={classes.headerRight}>
        <button className={classes.button}>Lets Talk</button>
      </div>
    </header>
  );
};

export default HeaderNav;
