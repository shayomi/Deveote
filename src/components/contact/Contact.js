import React from "react";
import classes from "./Contact.module.css";
import Newimg1 from "../../assets/newimg1.jpg";

import { LuPhone, LuMails, LuAlarmClock } from "react-icons/lu";

const Contact = () => {
  return (
    <section id="contact">
      <div
        style={{
          backgroundImage: `url(${Newimg1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
        className={classes.contactContainer}
      >
        <div className={classes.contactDetails}>
          <div className={classes.contactRight}>
            <div className={classes.contactRightText}>
              <h1>You give us a reason to do what we love. Get in touch.</h1>
              <p>
                We design, build and support websites and apps for clients
                worldwide. We make your business stand out. Interested? Let's
                chat.
              </p>
            </div>
            <div className={classes.contactRightIcons}>
              <div className={classes.contactRightIconsDetails}>
                <LuPhone size={50} className={classes.contactIcc} />
                <h2>Phone</h2>
                <p>+2348122953255</p>
              </div>
              <div className={classes.contactRightIconsDetails}>
                <LuMails size={50} className={classes.contactIcc} />
                <h2>Email</h2>
                <p>info@deveote.com</p>
              </div>
              <div className={classes.contactRightIconsDetails}>
                <LuAlarmClock size={50} className={classes.contactIcc} />
                <h2>Opening Hours</h2>
                <p>9:00 AM - 5:00PM</p>
              </div>
            </div>
          </div>
          <div className={classes.ContactLeft}>
            <div className={classes.contactLeftDetails}>
              <div className={classes.ContactLeftText}>
                <h1>What is on your mind? we are here to listen</h1>
              </div>
              <div className={classes.contactLeftForm}>
                <form className={classes.contactInput}>
                  <input type="name" placeholder="Full Name" />
                  <input type="email" placeholder="Email Address" />
                  <input type="number" placeholder="Phone Number" />
                  <textarea type="text" placeholder="Project Description" />
                </form>
              </div>
              <div className={classes.contactLeftButton}>
                <button type="submit">Request Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
