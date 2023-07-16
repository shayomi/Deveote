import React from "react";
import classes from "./Header.module.css";
import HeaderSocial from "./HeaderSocial";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <div className={classes.mainContainer}>
      <HeaderSocial />
      <HeaderNav />
    </div>
  );
};

export default Header;
