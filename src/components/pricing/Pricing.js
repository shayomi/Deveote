import React from "react";
import classes from "./Pricing.module.css";
import pricing from "../../assets/pricing.jpg";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className={classes.pricingContainer}>
        <div className={classes.pricingCard1}>
          <h1>Pricing Plan</h1>
          <p>
            With just a token, your business can achieve a suitable online
            presence through a modern web or mobile application. We also allow
            our clients to spread their payments over 3 or 6 months.
          </p>
        </div>
        <div className={classes.pricingCard2}>
          <img className={classes.pImg} src={pricing} />
          <div className={classes.pricingCardImgCaption}>
            <p>State of the art technique</p>
            <h1>Simple,Flexible and Preditable Pricing</h1>
          </div>
        </div>
        <div className={classes.pricingCard3}>
          <div className={classes.pricingCard3Text}>
            <h1>Get Free Estimate</h1>
            <p>
              Want to build something meaningful? Discuss your business or idea
              with us today and get a free quote.
            </p>
          </div>
          <div className={classes.pricingCard3Button}>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
