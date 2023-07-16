import React from "react";
import classes from "./MiddleSocial.module.css";
import { BsFillMouse2Fill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";

const MiddleSocial = () => {
  return (
    <div className={classes.middleSocialContainer}>
      <div className={classes.middleSocialDetails}>
        <div className={classes.middleSocialLeft}>
          <a href="https://facebook.com" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://whatsapp.com" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
        <div className={classes.middleSocialMiddle}>
          <span className={classes.middleSocialMiddleicon}>
            <p>
              SCROLL &nbsp; <BsFillMouse2Fill size={14} /> &nbsp; DOWN
            </p>
          </span>
        </div>
        <div className={classes.middleSocialRight}>
          <BiMinus className={classes.Ms1} size={60} />
          <BsDot size={60} />
        </div>
      </div>
    </div>
  );
};

export default MiddleSocial;
