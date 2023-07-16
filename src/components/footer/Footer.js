import React from "react";
import classes from "./Footer.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerDetails}>
        <div className={classes.footDetailsUp}>
          <div className={classes.footerDetailsUpLeft}>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Pricing</a>
            <a href="#">Contact Us</a>
          </div>
          <div className={classes.footerDetailsUpRight}>
            <a href="https://facebook.com" target="_blank">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram size={20} />
            </a>
            <a href="https://whatsapp.com" target="_blank">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
        <div className={classes.footerDetailsMiddle}>
          <div className={classes.footDetailsMiddleLeft}>
            <img src={logo} />
            <p>
              Making a positive first impression is essential to developing a
              strong customer relationship. Deveote is powerful enough to assist
              any small businesses make new customers and retain the existing
              ones.
            </p>
            <a href="">
              {" "}
              <FaPhoneAlt />
              &nbsp; &nbsp; 234 904 567 8904
            </a>

            <a href="">
              {" "}
              <MdOutlineEmail />
              &nbsp; &nbsp; info@deveote.com
            </a>
          </div>
          <div className={classes.footerDetailsMiddleRight}>
            <div className={classes.footerDetailsMiddleRight1}>
              <h1>Useful Links</h1>
              <ul className={classes.footerDetailsMiddleRightList}>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>Service</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={classes.footerDetailsMiddleRight1}>
              <h1>Services</h1>
              <ul className={classes.footerDetailsMiddleRightList}>
                <li>Branding</li>
                <li>UI/UX Design</li>
                <li>Web Development</li>
                <li>MobileApp Development</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            <div className={classes.footerDetailsMiddleRight1}>
              <div className={classes.footex}>
                <h1>More Services</h1>
                <ul className={classes.footerDetailsMiddleRightList}>
                  <li>Search Engine Optimization</li>
                  <li>Progressive Web Application</li>
                  <li>Accelerated Web Pages</li>
                  <li>Geolocarion and Georeferencing</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footDetailsDown}>
          <h3>Copyright 2023 Deveote. All rights reserved</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
