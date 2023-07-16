import React from "react";
import classes from "./HeaderSocial.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const HeaderSocial = () => {
  return (
    <div className={classes.headerSocialContainer}>
      <div className={classes.headerSocial}>
        <div className={classes.headerSocialLeft}>
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

        <div className={classes.headerSocialRight}>
          <div className={classes.socialContact}>
            <a href="">
              {" "}
              <FaPhoneAlt />
              &nbsp; &nbsp; 234 904 567 8904
            </a>
          </div>

          <div className={classes.socialContact}>
            <a href="">
              {" "}
              <MdOutlineEmail />
              &nbsp; &nbsp; info@deveote.com
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default HeaderSocial;
